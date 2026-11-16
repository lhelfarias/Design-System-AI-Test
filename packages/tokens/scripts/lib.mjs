// Utilidades compartidas: carga de tokens.json, resolucion de alias y contraste WCAG.
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const SETS = ["reference", "system", "component"];
const ALIAS = /^\{([^{}]+)\}$/;

export function loadSets() {
  // Fuente unica: tokens.json (formato de un solo archivo de Tokens Studio, un set por clave de primer nivel).
  const all = JSON.parse(readFileSync(join(ROOT, "tokens.json"), "utf8"));
  const sets = {};
  for (const name of SETS) {
    if (!all[name]) throw new Error(`Falta el set "${name}" en tokens.json`);
    sets[name] = all[name];
  }
  return sets;
}

// Aplana un arbol DTCG a { "a.b.c": { type, value, set, description } } heredando $type del grupo.
export function flatten(sets) {
  const flat = {};
  for (const [setName, tree] of Object.entries(sets)) {
    const walk = (node, path, inheritedType) => {
      const type = node.$type ?? inheritedType;
      if (Object.prototype.hasOwnProperty.call(node, "$value")) {
        const key = path.join(".");
        if (flat[key]) throw new Error(`Token duplicado: ${key} (en ${flat[key].set} y ${setName})`);
        flat[key] = { type, value: node.$value, set: setName, description: node.$description };
        return;
      }
      for (const [k, v] of Object.entries(node)) {
        if (k.startsWith("$")) continue;
        walk(v, [...path, k], type);
      }
    };
    walk(tree, [], undefined);
  }
  return flat;
}

// Resuelve alias recursivamente (tambien dentro de valores compuestos). Detecta ciclos y alias rotos.
export function resolveValue(value, flat, trail = []) {
  if (typeof value === "string") {
    const m = value.match(ALIAS);
    if (!m) return value;
    const ref = m[1];
    if (trail.includes(ref)) throw new Error(`Alias circular: ${[...trail, ref].join(" -> ")}`);
    const target = flat[ref];
    if (!target) throw new Error(`Alias roto: {${ref}} (desde ${trail[0] ?? "?"})`);
    return resolveValue(target.value, flat, [...trail, ref]);
  }
  if (Array.isArray(value)) return value.map((v) => resolveValue(v, flat, trail));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolveValue(v, flat, trail)]));
  }
  return value;
}

export function resolveAll(flat) {
  const out = {};
  for (const [key, tok] of Object.entries(flat)) {
    out[key] = { ...tok, resolved: resolveValue(tok.value, flat, [key]) };
  }
  return out;
}

// --- Contraste WCAG 2.x (luminancia relativa) ---
export function hexToRgb01(hex) {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
}
export function luminance(hex) {
  const f = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  const [r, g, b] = hexToRgb01(hex).map(f);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
