// Accessibility check of the built pages with axe-core (WCAG 2.0–2.2 A and AA rules).
// Serves dist/ locally, opens each page at desktop and mobile width, and also checks the error state.
// Screenshots go to screenshots/ for the visual comparison with Figma.
// axe only sees the resting state, so a second check hovers every link, button and summary
// and measures the text contrast in that state (WCAG 1.4.3, 4.5:1; 3:1 for large text).
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { createRequire } from "node:module";

// Playwright is resolved with require so a globally installed copy also works (no browser download here).
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const { AxeBuilder } = require("@axe-core/playwright");

const DIST = new URL("../dist/", import.meta.url).pathname;
const OUT = new URL("../screenshots/", import.meta.url).pathname;
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };
const server = createServer(async (req, res) => {
  const path = join(DIST, req.url === "/" ? "index.html" : req.url.split("?")[0]);
  try { res.writeHead(200, { "content-type": TYPES[extname(path)] ?? "application/octet-stream" }); res.end(await readFile(path)); }
  catch { res.writeHead(404); res.end(); }
}).listen(4173);

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const PAGES = ["product", "store", "music", "simulator", "help", "analytics"];
const cases = [
  ...PAGES.flatMap((id) => [
    { name: `${id}-desktop`, hash: id, width: 1440, height: 1000 },
    { name: `${id}-mobile`, hash: id, width: 360, height: 800 },
  ]),
  { name: "simulator-error-mobile", hash: "simulator", width: 360, height: 800, act: async (p) => { await p.fill("input[inputmode=decimal]", "20"); await p.click("button[type=submit]"); } },
  { name: "simulator-review-desktop", hash: "simulator", width: 1440, height: 1000, act: async (p) => { await p.click("button[type=submit]"); await p.click("button[type=submit]"); } },
];
let total = 0;
for (const c of cases) {
  const context = await browser.newContext({ viewport: { width: c.width, height: c.height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto(`http://localhost:4173/#${c.hash}`);
  if (c.act) await c.act(page);
  const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  total += violations.length;
  console.log(`${violations.length ? "FAIL" : "OK  "}  ${c.name}: ${violations.length} violations`);
  for (const v of violations) console.log(`      ${v.id} (${v.impact}): ${v.help} → ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
  if (!c.act) {
    const hoverFails = await hoverContrast(page);
    total += hoverFails.length;
    console.log(`${hoverFails.length ? "FAIL" : "OK  "}  ${c.name}: ${hoverFails.length} hover contrast failures`);
    for (const f of hoverFails) console.log(`      hover: "${f.text}" ${f.ratio}:1 (min ${f.min}) [${f.fg} on ${f.bg}]`);
    await page.mouse.move(0, 0);
  }
  await page.screenshot({ path: join(OUT, `${c.name}.png`), fullPage: true });
  await context.close();
}
await browser.close();
server.close();

async function hoverContrast(page) {
  const fails = [];
  for (const el of await page.$$("a, button, summary")) {
    if (!(await el.isVisible())) continue;
    try { await el.hover({ timeout: 1000 }); } catch { continue; }
    const r = await el.evaluate((node) => {
      const rgb = (s) => (s.match(/[\d.]+/g) || []).map(Number);
      const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
      const cs = getComputedStyle(node);
      const text = (node.innerText || "").trim().slice(0, 40);
      if (!text || cs.visibility === "hidden" || Number(cs.opacity) === 0) return null;
      const fg = rgb(cs.color);
      // Background: first opaque color up the tree; for a gradient, every stop counts.
      let bgs = null;
      for (let p = node; p && p !== document.documentElement; p = p.parentElement) {
        const ps = getComputedStyle(p);
        if (ps.backgroundImage.includes("gradient")) { bgs = (ps.backgroundImage.match(/rgba?\([^)]*\)/g) || []).map(rgb); break; }
        const b = rgb(ps.backgroundColor);
        if (b.length >= 3 && (b.length === 3 || b[3] > 0.9)) { bgs = [b]; break; }
      }
      if (!bgs) bgs = [[255, 255, 255]];
      const worst = Math.min(...bgs.map((b) => ratio(fg, b)));
      const size = parseFloat(cs.fontSize), bold = Number(cs.fontWeight) >= 700;
      const min = size >= 24 || (bold && size >= 18.66) ? 3 : 4.5;
      return worst < min ? { text, ratio: worst.toFixed(2), min, fg: cs.color, bg: JSON.stringify(bgs[0]) } : null;
    });
    if (r) fails.push(r);
  }
  return fails;
}
process.exit(total ? 1 : 0);
