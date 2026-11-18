// Checks a participant's prototype (user test, task 3) the same way as every screen in this repository.
// Usage: npm run check:prototype -- path/to/Prototype.tsx
// 1. Static scan: fixed values, imports outside the library, new local components.
// 2. The file goes into src/pages/Prototype.tsx; typecheck, build, axe and hover-contrast run on it.
// 3. The placeholder is restored, whatever happens. Result: Completed, Partial or Not completed.
import { readFile, writeFile, copyFile } from "node:fs/promises";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

const input = process.argv[2];
if (!input) {
  console.error("Usage: npm run check:prototype -- path/to/Prototype.tsx");
  process.exit(2);
}
const ROOT = new URL("..", import.meta.url).pathname;
const SLOT = resolve(ROOT, "src/pages/Prototype.tsx");
const BACKUP = resolve(ROOT, "src/pages/.Prototype.placeholder.tsx");
const src = await readFile(resolve(input), "utf8");
const lines = src.split("\n");

// ---- 1. Static scan
const findings = [];
const add = (kind, i, text) => findings.push({ kind, line: i + 1, text: text.trim().slice(0, 100) });
const ALLOWED = [/^react$/, /^\.\.$/, /^\.\.\/index$/, /^\.\/Shell$/, /^\.\.\/components\/[A-Za-z]+$/];
lines.forEach((l, i) => {
  const code = l.replace(/\/\/.*$/, "");
  for (const m of code.matchAll(/from\s+["']([^"']+)["']|import\s+["']([^"']+)["']/g)) {
    const mod = m[1] ?? m[2];
    if (!ALLOWED.some((r) => r.test(mod))) add("Import outside the library", i, l);
  }
  if (/["'`\s:]#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/.test(code) && !/href=/.test(code)) add("Fixed color (hex)", i, l);
  if (/\b(rgb|rgba|hsl|hsla)\(/.test(code)) add("Fixed color (rgb/hsl)", i, l);
  if (/["'`][^"'`]*\b[1-9]\d*(\.\d+)?(px|rem|em|vh|vw)\b/.test(code) && !/var\(--/.test(code)) add("Fixed size", i, l);
  if (/\b(padding|margin|gap|width|height|fontSize|borderRadius|top|left|right|bottom)\s*:\s*[1-9]\d*/.test(code)) add("Fixed size in a style", i, l);
  if (/fontFamily\s*:/.test(code)) add("Fixed font", i, l);
});
if (!/export\s+function\s+Prototype\s*\(/.test(src)) findings.push({ kind: "Missing export function Prototype()", line: 0, text: "" });
const locals = [...src.matchAll(/function\s+([A-Z][A-Za-z0-9]*)\s*\(/g)].map((m) => m[1]).filter((n) => n !== "Prototype");

console.log("\n== 1 · Static scan");
if (!findings.length) console.log("OK    no fixed values, imports only from the library");
for (const f of findings) console.log(`FAIL  ${f.kind}${f.line ? ` (line ${f.line})` : ""}: ${f.text}`);
if (locals.length) console.log(`NOTE  new local components: ${locals.join(", ")} (should match the component approved in the library)`);

// ---- 2. Typecheck, build, accessibility
const step = (name, cmd, env = {}) => {
  console.log(`\n== ${name}`);
  try { execSync(cmd, { cwd: ROOT, stdio: "inherit", env: { ...process.env, ...env } }); return true; }
  catch { return false; }
};
await copyFile(SLOT, BACKUP);
let types = false, build = false, a11y = false;
try {
  await writeFile(SLOT, src);
  types = step("2 · Typecheck", "npx tsc --noEmit");
  build = types && step("3 · Build", "npx vite build --logLevel warn");
  a11y = build && step("4 · Accessibility (axe + hover contrast, desktop and mobile)", "node scripts/a11y-check.mjs", { A11Y_ONLY: "prototype" });
} finally {
  await copyFile(BACKUP, SLOT);
  execSync(`rm -f "${BACKUP}"`);
}

// ---- 3. Result
const result = !types || !build ? "Not completed" : a11y && !findings.length ? "Completed" : "Partial";
console.log(`\n== Result: ${result}`);
console.log(`   Static scan: ${findings.length ? `${findings.length} issue(s)` : "OK"} · Typecheck: ${types ? "OK" : "FAIL"} · Build: ${build ? "OK" : build === false && types ? "FAIL" : "not run"} · Accessibility: ${a11y ? "OK" : build ? "FAIL" : "not run"}`);
console.log("   Screenshots: screenshots/prototype-desktop.png and prototype-mobile.png");
console.log("   Rebuild after this check (npm run build) if you need the normal app in dist/.");
process.exit(result === "Completed" ? 0 : 1);
