// Verifica pares de color criticos contra WCAG 2.2 usando los valores resueltos de tokens.json.
// Umbrales: texto 4.5:1 (WCAG 1.4.3), componentes de interfaz y foco 3:1 (WCAG 1.4.11).
// Los componentes deshabilitados estan exentos y no se verifican.
import { loadSets, flatten, resolveAll, contrast } from "./lib.mjs";

const t = resolveAll(flatten(loadSets()));
const val = (p) => {
  if (!t[p]) throw new Error(`Token inexistente en el chequeo: ${p}`);
  return t[p].resolved;
};

const TEXT = 4.5;
const UI = 3;
const pairs = []; // [descripcion, fgToken, bgToken, minimo]
const add = (desc, fg, bg, min) => pairs.push([desc, fg, bg, min]);

// Texto del sistema sobre superficies permitidas
for (const bg of ["color.surface.default", "color.surface.subtle", "color.surface.brand-subtle"]) {
  for (const fg of ["color.text.default", "color.text.muted", "color.text.link", "color.text.brand"]) {
    add(`${fg} sobre ${bg}`, fg, bg, TEXT);
  }
}
add("text.inverse sobre surface.inverse", "color.text.inverse", "color.surface.inverse", TEXT);
add("text.link-hover sobre surface.default", "color.text.link-hover", "color.surface.default", TEXT);

// Botones
for (const s of ["", "-hover", "-pressed"]) {
  add(`button.primary foreground sobre background${s}`, "button.primary.foreground", `button.primary.background${s}`, TEXT);
  add(`button.secondary foreground sobre background${s}`, "button.secondary.foreground", `button.secondary.background${s}`, TEXT);
}
add("button.secondary borde sobre surface.default", "button.secondary.border", "color.surface.default", UI);
add("button.primary fondo sobre surface.default", "button.primary.background", "color.surface.default", UI);

// Campos
for (const c of ["text-input", "select"]) {
  add(`${c} borde sobre surface.default`, `${c}.border`, "color.surface.default", UI);
  add(`${c} borde sobre surface.subtle`, `${c}.border`, "color.surface.subtle", UI);
  add(`${c} borde de error sobre surface.default`, `${c}.border-error`, "color.surface.default", UI);
  add(`${c} foco sobre surface.default`, `${c}.focus-ring`, "color.surface.default", UI);
  add(`${c} texto sobre fondo`, `${c}.foreground`, `${c}.background`, TEXT);
}
add("text-input placeholder sobre fondo", "text-input.placeholder", "text-input.background", TEXT);
add("text-input hint sobre surface.default", "text-input.hint", "color.surface.default", TEXT);
add("select icono sobre fondo", "select.icon", "select.background", UI);

// Checkbox y radio
add("checkbox borde sobre fondo", "checkbox.border", "checkbox.background", UI);
add("checkbox marcado: fondo sobre superficie", "checkbox.background-checked", "color.surface.default", UI);
add("checkbox marca (check) sobre fondo marcado", "checkbox.checkmark", "checkbox.background-checked", UI);
add("checkbox etiqueta sobre surface.default", "checkbox.label", "color.surface.default", TEXT);
add("checkbox foco sobre surface.default", "checkbox.focus-ring", "color.surface.default", UI);
add("radio borde sobre fondo", "radio.border", "radio.background", UI);
add("radio marcado: borde sobre superficie", "radio.border-checked", "color.surface.default", UI);
add("radio punto sobre fondo", "radio.dot", "radio.background", UI);
add("radio etiqueta sobre surface.default", "radio.label", "color.surface.default", TEXT);
add("radio foco sobre surface.default", "radio.focus-ring", "color.surface.default", UI);

// Tag
for (const v of ["neutral", "brand", "success", "error", "warning", "info"]) {
  add(`tag.${v} texto sobre fondo`, `tag.${v}.foreground`, `tag.${v}.background`, TEXT);
}

// Notification banner (texto del cuerpo sobre cada fondo; icono y borde como componente grafico)
for (const v of ["info", "success", "warning", "error"]) {
  add(`banner.${v} texto sobre fondo`, "notification-banner.foreground", `notification-banner.${v}.background`, TEXT);
  add(`banner.${v} borde sobre surface.default`, `notification-banner.${v}.border`, "color.surface.default", UI);
  add(`banner.${v} icono sobre fondo`, `notification-banner.${v}.icon`, `notification-banner.${v}.background`, UI);
}

// Card y mensaje de error
add("card titulo sobre fondo", "card.title", "card.background", TEXT);
add("card cuerpo sobre fondo", "card.body", "card.background", TEXT);
add("card borde al pasar el cursor sobre fondo", "card.border-hover", "card.background", UI);
add("error-message sobre surface.default", "error-message.foreground", "color.surface.default", TEXT);
add("error-message sobre surface.subtle", "error-message.foreground", "color.surface.subtle", TEXT);

// Warning solido con texto por defecto encima
add("feedback.warning.solid con text.default encima", "color.text.default", "color.feedback.warning.solid", TEXT);

let failed = 0;
for (const [desc, fg, bg, min] of pairs) {
  const ratio = contrast(val(fg), val(bg));
  const ok = ratio >= min;
  if (!ok) failed++;
  console.log(`${ok ? "OK  " : "FALLA"}  ${ratio.toFixed(2).padStart(5)}:1  (min ${min})  ${desc}  [${val(fg)} / ${val(bg)}]`);
}
console.log(`\n${pairs.length} pares verificados, ${failed} fallan.`);
process.exit(failed ? 1 : 0);
