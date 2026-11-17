// Generates the foundations documentation from tokens.json, so docs never drift from the tokens:
//   docs/foundations/*.md (+ SVG swatches) in the repository root, for people on GitHub
//   packages/tokens/docs/foundations.json, read by Storybook's Foundations pages
// Run after build-css and check-contrast (it reads dist/contrast.json).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadSets, flatten, resolveAll, resolveMode } from "./lib.mjs";

const REPO = join(ROOT, "..", "..");
const OUT = join(REPO, "docs", "foundations");
mkdirSync(join(OUT, "img"), { recursive: true });
mkdirSync(join(ROOT, "docs"), { recursive: true });

const flat = flatten(loadSets());
const def = resolveAll(flat);
const tv = resolveMode(flat, "tv");
const contrast = existsSync(join(ROOT, "dist", "contrast.json")) ? JSON.parse(readFileSync(join(ROOT, "dist", "contrast.json"), "utf8")) : [];
const alias = (v) => (typeof v === "string" && /^\{.+\}$/.test(v) ? v.slice(1, -1) : null);
const css = (p) => `--${p.replace(/\./g, "-")}`;
const fig = (p) => p.replace(/\./g, "/");
const esc = (s) => String(s ?? "").replace(/\|/g, "\\|");

const tokens = Object.entries(flat).map(([path, t]) => ({
  path, set: t.set, type: t.type, description: t.description ?? "",
  alias: alias(t.value), value: def[path].resolved,
  tvAlias: t.modes?.tv !== undefined ? alias(t.modes.tv) ?? t.modes.tv : null,
  tv: tv[path].resolved, // includes values inherited through aliases
  css: css(path), figma: `${t.set}/${fig(path)}`,
}));
const by = (fn) => tokens.filter(fn);

// ---------- colors
const ramps = {};
for (const t of by((t) => t.set === "reference" && t.type === "color")) {
  const [, ramp, step] = t.path.split(".");
  (ramps[ramp] ??= []).push({ step, value: t.value, path: t.path });
}
const sysColor = by((t) => t.set === "system" && t.type === "color");
const groups = {};
for (const t of sysColor) (groups[t.path.startsWith("color.") ? t.path.split(".")[1] : t.path.split(".")[0]] ??= []).push(t);
const GROUP_NOTE = {
  text: "Text and icons. Never use a surface or border color for text.",
  surface: "Backgrounds: page canvas, panels, glass cards and the navy title band.",
  border: "Lines around controls, panels and the focus ring.",
  action: "Interactive elements: buttons and links in their states.",
  feedback: "Status messages. Always paired with text or an icon, never color alone.",
  focus: "The focus ring: always visible, 3:1 against what is behind it.",
};

// SVG helpers: alpha colors are drawn over the background of their mode.
const rgba = (hex) => {
  const h = hex.replace("#", "");
  if (h.length === 8) return { fill: `#${h.slice(0, 6)}`, opacity: (parseInt(h.slice(6), 16) / 255).toFixed(2) };
  return { fill: `#${h.slice(0, 6)}`, opacity: "1" };
};
const chip = (x, y, w, h, hex, base) => {
  const { fill, opacity } = rgba(hex);
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${base}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" fill-opacity="${opacity}" stroke="#DDDDDD"/>`;
};
const svg = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="Open Sans, Arial, sans-serif"><rect width="${w}" height="${h}" fill="#FFFFFF"/>${body}</svg>\n`;

{ // reference palette
  const rows = Object.entries(ramps); const cw = 96, rh = 92;
  let body = "";
  rows.forEach(([ramp, steps], r) => {
    const y = 16 + r * rh;
    body += `<text x="16" y="${y + 36}" font-size="15" font-weight="600" fill="#232323">${ramp}</text>`;
    steps.forEach((s, i) => {
      const x = 130 + i * (cw + 8);
      body += chip(x, y, cw, 48, s.value, ramp.includes("alpha") ? "#02215E" : "#FFFFFF");
      body += `<text x="${x}" y="${y + 66}" font-size="12" fill="#232323">${s.step}</text><text x="${x}" y="${y + 82}" font-size="11" fill="#6B6B6B">${s.value}</text>`;
    });
  });
  const maxSteps = Math.max(...rows.map(([, s]) => s.length));
  writeFileSync(join(OUT, "img", "colors-reference.svg"), svg(130 + maxSteps * (cw + 8) + 8, 16 + rows.length * rh, body));
}
for (const [g, list] of Object.entries(groups)) { // one image per system group, default and tv side by side
  const rh = 52; let body = `<text x="16" y="24" font-size="13" font-weight="600" fill="#6B6B6B">Token</text><text x="380" y="24" font-size="13" font-weight="600" fill="#6B6B6B">Default</text><text x="600" y="24" font-size="13" font-weight="600" fill="#6B6B6B">tv</text>`;
  list.forEach((t, i) => {
    const y = 40 + i * rh;
    body += `<text x="16" y="${y + 26}" font-size="14" fill="#232323">${t.path}</text>`;
    body += chip(380, y, 64, 36, t.value, "#FFFFFF") + `<text x="452" y="${y + 24}" font-size="12" fill="#6B6B6B">${t.value}</text>`;
    body += `<rect x="592" y="${y - 4}" width="200" height="44" fill="#010B24"/>` + chip(600, y, 64, 36, t.tv ?? t.value, "#010B24") + `<text x="672" y="${y + 24}" font-size="12" fill="#DDDDDD">${t.tv ?? t.value}</text>`;
  });
  writeFileSync(join(OUT, "img", `colors-${g}.svg`), svg(800, 48 + list.length * rh, body));
}

const HEADER = (title) => `<!-- Generated by packages/tokens/scripts/build-docs.mjs from tokens.json. Do not edit by hand. -->\n# ${title}\n\n`;
let md = HEADER("Colors");
md += `Every color is a variable. Pick by **meaning** (system tokens), never by hex. Same names in Figma (\`system/color/text/default\`) and CSS (\`var(--color-text-default)\`).\n\n`;
md += `## How to choose a color\n\n1. Pages and layouts: use **system** colors (\`color.text.*\`, \`color.surface.*\`, \`color.border.*\`, \`color.action.*\`, \`color.feedback.*\`).\n2. Inside a component: use its **component** tokens (\`button.primary.background\`); they point to system.\n3. Never use **reference** colors (\`color.blue.600\`) in screens or components; they only feed system tokens.\n4. Text on any surface must pass 4.5:1; borders and focus 3:1. The pairs below are checked on every pull request.\n5. Dark areas (TV, title band) are not new colors: the same tokens switch to the **tv** mode.\n\n`;
md += `## Reference palette\n\nRaw values. Only system tokens point to them.\n\n![Reference palette](img/colors-reference.svg)\n\n`;
md += `| Token | Hex | CSS |\n|---|---|---|\n` + by((t) => t.set === "reference" && t.type === "color").map((t) => `| \`${t.path}\` | \`${t.value}\` | \`${t.css}\` |`).join("\n") + "\n\n";
md += `## System colors\n\nMeaning. Use these in pages and components. Each row shows the default mode and the tv mode.\n\n`;
for (const [g, list] of Object.entries(groups)) {
  md += `### ${g[0].toUpperCase() + g.slice(1)}\n\n${GROUP_NOTE[g] ?? ""}\n\n![${g} colors](img/colors-${g}.svg)\n\n| Token | Default | tv | Points to | Use |\n|---|---|---|---|---|\n`;
  md += list.map((t) => `| \`${t.path}\` | \`${t.value}\` | \`${t.tv}\` | ${t.alias ? `\`${t.alias}\`` : "—"}${t.tvAlias ? ` · tv: \`${t.tvAlias}\`` : ""} | ${esc(t.description)} |`).join("\n") + "\n\n";
}
md += `## Component colors\n\nDecisions of one component. Use only inside that component.\n\n| Token | Default | tv | Points to |\n|---|---|---|---|\n` + by((t) => t.set === "component" && t.type === "color").map((t) => `| \`${t.path}\` | \`${t.value}\` | \`${t.tv}\` | ${t.alias ? `\`${t.alias}\`` : "—"} |`).join("\n") + "\n\n";
md += `## Contrast (checked automatically)\n\nWCAG 2.2: text 4.5:1 (1.4.3), UI components and focus 3:1 (1.4.11). Translucent colors are flattened over the lightest page background of the mode. Source: \`npm test\` in packages/tokens.\n\n| Mode | Pair | Ratio | Minimum | Result |\n|---|---|---|---|---|\n` + contrast.map((c) => `| ${c.mode} | ${esc(c.pair)} | ${c.ratio.toFixed(2)}:1 | ${c.minimum}:1 | ${c.pass ? "Pass" : "**Fail**"} |`).join("\n") + "\n";
writeFileSync(join(OUT, "colors.md"), md);

// ---------- typography
const typo = by((t) => t.set === "system" && t.type === "typography");
const USE = { display: "Hero titles, one per page", "heading-1": "Page title (h1)", "heading-2": "Section titles", "heading-3": "Sub-sections, panel titles", "heading-4": "Card and list titles", body: "Running text", "body-sm": "Secondary text, captions in cards", label: "Form labels, buttons, table headers", caption: "Notes, metadata" };
md = HEADER("Typography") + `One family (Open Sans, fallback Arial). Nine styles from \`system/typography\`. In Figma they are text styles; in CSS each is a \`font\` shorthand: \`font: var(--typography-body)\`.\n\n| Style | Size | Weight | Line height | Use | CSS |\n|---|---|---|---|---|---|\n`;
md += typo.map((t) => { const v = t.value; const n = t.path.split(".")[1]; return `| \`${n}\` | ${v.fontSize} | ${v.fontWeight} | ${v.lineHeight} | ${USE[n] ?? ""} | \`font: var(${t.css})\` |`; }).join("\n") + "\n\nRules: one h1 per page; do not skip heading levels; body text at reading width (`layout.reading-width`, 640 px); line height in percent in tokens (Figma), unitless in CSS.\n";
writeFileSync(join(OUT, "typography.md"), md);

// ---------- spacing, sizes, radius, layout
const dimTable = (prefix, note) => { const l = by((t) => t.set === "system" && t.path.startsWith(prefix)); return `| Token | Value | Points to | CSS |\n|---|---|---|---|\n` + l.map((t) => `| \`${t.path}\` | ${t.value} | ${t.alias ? `\`${t.alias}\`` : "—"} | \`${t.css}\` |`).join("\n") + "\n\n" + (note ? note + "\n\n" : ""); };
md = HEADER("Spacing, sizes and layout") + `All spacing comes from a 4 px scale in reference (\`space.*\`). Use the system names by direction:\n\n- **inset**: padding inside a box.\n- **stack**: vertical gap between items.\n- **inline**: horizontal gap between items.\n\n## Spacing\n\n` + dimTable("space.") + `## Sizes\n\n` + dimTable("size.", "`size.target-min` (44 px) is the minimum touch and click target (WCAG 2.5.8 asks 24 px; 44 px is this system's decision).") + `## Radius\n\n` + dimTable("radius.") + `## Focus ring\n\n` + dimTable("focus.") + `## Layout\n\nWindow size classes follow Material Design; values are decisions of this system. TV is a context, not a breakpoint. Full rules: docs/layout.md.\n\n` + dimTable("layout.") + `## Effects\n\n` + dimTable("effect.", "Glass: `color.surface.glass` + `backdrop-filter: blur(var(--effect-blur-surface))`. In Figma, the native Glass effect with fixed values (docs/visual-style.md).");
writeFileSync(join(OUT, "spacing-and-layout.md"), md);

writeFileSync(join(OUT, "README.md"), HEADER("Foundations") + `Generated from \`packages/tokens/tokens.json\` on every build. Same content as the Foundations pages in Storybook and the Foundations section in the Figma library.\n\n- [Colors](colors.md): palette, system colors in default and tv mode, component colors, contrast results.\n- [Typography](typography.md): nine styles and their use.\n- [Spacing, sizes and layout](spacing-and-layout.md): spacing scale, targets, radius, focus ring, grid, effects.\n\nCounts: ${by((t) => t.set === "reference").length} reference, ${by((t) => t.set === "system").length} system, ${by((t) => t.set === "component").length} component tokens.\n`);

// ---------- data for Storybook
writeFileSync(join(ROOT, "docs", "foundations.json"), JSON.stringify({ ramps, groups: Object.fromEntries(Object.entries(groups).map(([g, l]) => [g, { note: GROUP_NOTE[g] ?? "", tokens: l }])), component: by((t) => t.set === "component" && t.type === "color"), typography: typo.map((t) => ({ ...t, use: USE[t.path.split(".")[1]] ?? "" })), dimensions: by((t) => t.set === "system" && t.type !== "color" && t.type !== "typography"), contrast }, null, 2) + "\n");
console.log(`OK: docs/foundations (colors, typography, spacing-and-layout) and packages/tokens/docs/foundations.json`);
