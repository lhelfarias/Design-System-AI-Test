// Generates dist/ from tokens.json:
//   dist/dtcg-2025.10/*.tokens.json  strict copy in DTCG 2025.10 format
//     (color and dimension as objects; aliases kept as "{path}")
//   dist/tokens.resolved.json        flat list with resolved values (for docs and AI)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, SETS, loadSets, flatten, resolveAll, hexToRgb01 } from "./lib.mjs";

const ALIAS = /^\{[^{}]+\}$/;
const round = (n) => Math.round(n * 10000) / 10000;

function toColor(hex) {
  return {
    colorSpace: "srgb",
    components: hexToRgb01(hex).map(round),
    alpha: 1,
    hex: hex.toLowerCase(),
  };
}
function toDimension(str) {
  const m = str.match(/^(-?\d+(?:\.\d+)?)(px|rem)$/);
  if (!m) throw new Error(`Invalid dimension: ${str}`);
  return { value: Number(m[1]), unit: m[2] };
}
function toFontFamily(str) {
  return str.split(",").map((s) => s.trim());
}

// Tokens Studio uses a percentage (150%) so Figma reads it as a multiplier; DTCG expects a number (1.5).
function toLineHeight(str) {
  const m = String(str).match(/^(\d+(?:\.\d+)?)%$/);
  if (!m) throw new Error(`Invalid line height (percentage expected): ${str}`);
  return Math.round(Number(m[1])) / 100;
}

function convertValue(type, value) {
  if (typeof value === "string" && ALIAS.test(value)) return value; // alias kept
  switch (type) {
    case "color": return toColor(value);
    case "dimension": return toDimension(value);
    case "fontFamily": return toFontFamily(value);
    case "lineHeights": return toLineHeight(value);
    case "typography":
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => {
          if (typeof v === "string" && ALIAS.test(v)) return [k, v];
          if (k === "fontFamily") return [k, toFontFamily(v)];
          if (k === "fontSize" || k === "letterSpacing") return [k, toDimension(v)];
          return [k, v];
        }),
      );
    default: return value;
  }
}

function convertTree(node, inheritedType) {
  const type = node.$type ?? inheritedType;
  if (Object.prototype.hasOwnProperty.call(node, "$value")) {
    const out = { ...node, $type: type === "lineHeights" ? "number" : type, $value: convertValue(type, node.$value) };
    return out;
  }
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (k === "$type") continue; // type is written on each token
    out[k] = k.startsWith("$") ? v : convertTree(v, type);
  }
  return out;
}

const sets = loadSets();
const flat = flatten(sets);
const resolved = resolveAll(flat); // throws on broken or circular aliases

const distDir = join(ROOT, "dist", "dtcg-2025.10");
mkdirSync(distDir, { recursive: true });
for (const name of SETS) {
  const tree = convertTree(sets[name], undefined);
  const file = { $schema: "https://www.designtokens.org/schemas/2025.10/format.json", ...tree };
  writeFileSync(join(distDir, `${name}.tokens.json`), JSON.stringify(file, null, 2) + "\n");
}

const list = Object.entries(resolved).map(([path, t]) => ({
  path,
  set: t.set,
  type: t.type,
  value: t.resolved,
  ...(t.description ? { description: t.description } : {}),
}));
writeFileSync(join(ROOT, "dist", "tokens.resolved.json"), JSON.stringify(list, null, 2) + "\n");

console.log(`OK: ${list.length} tokens (${SETS.map((s) => `${s}: ${list.filter((t) => t.set === s).length}`).join(", ")})`);
