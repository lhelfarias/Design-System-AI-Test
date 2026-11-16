// Accessibility check of the built pages with axe-core (WCAG 2.0–2.2 A and AA rules).
// Serves dist/ locally, opens each page at desktop and mobile width, and also checks the error state.
// Screenshots go to screenshots/ for the visual comparison with Figma.
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
const cases = [
  { name: "simulator-desktop", width: 1440, height: 1000 },
  { name: "simulator-mobile", width: 360, height: 800 },
  { name: "simulator-error-mobile", width: 360, height: 800, act: async (p) => { await p.fill("input[inputmode=decimal]", "20"); await p.click("button[type=submit]"); } },
];
let total = 0;
for (const c of cases) {
  const context = await browser.newContext({ viewport: { width: c.width, height: c.height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto("http://localhost:4173/");
  if (c.act) await c.act(page);
  const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  total += violations.length;
  console.log(`${violations.length ? "FAIL" : "OK  "}  ${c.name}: ${violations.length} violations`);
  for (const v of violations) console.log(`      ${v.id} (${v.impact}): ${v.help} → ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
  await page.screenshot({ path: join(OUT, `${c.name}.png`), fullPage: true });
  await context.close();
}
await browser.close();
server.close();
process.exit(total ? 1 : 0);
