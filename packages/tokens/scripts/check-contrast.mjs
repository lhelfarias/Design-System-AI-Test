// Checks key color pairs against WCAG 2.2 using resolved values from tokens.json.
// Thresholds: text 4.5:1 (WCAG 1.4.3), UI components and focus 3:1 (WCAG 1.4.11).
// Disabled components are exempt and not checked.
import { loadSets, flatten, resolveAll, resolveMode, composite, contrast, MODES } from "./lib.mjs";

const flat = flatten(loadSets());
let t = resolveAll(flat);
// v5: component aliases removed; the component uses the system variable directly.
const MOVED = {
  "text-input.focus-ring": "focus.ring.color",
  "select.focus-ring": "focus.ring.color",
  "checkbox.focus-ring": "focus.ring.color",
  "radio.focus-ring": "focus.ring.color",
  "card.focus-ring": "focus.ring.color",
  "button.disabled.background": "color.action.disabled.background",
  "button.disabled.foreground": "color.action.disabled.foreground",
  "button.disabled.border": "color.action.disabled.border",
  "text-input.disabled.background": "color.action.disabled.background",
  "text-input.disabled.foreground": "color.action.disabled.foreground",
  "text-input.disabled.border": "color.action.disabled.border",
  "select.disabled.background": "color.action.disabled.background",
  "select.disabled.foreground": "color.action.disabled.foreground",
  "select.disabled.border": "color.action.disabled.border",
  "button.min-height": "size.target-min",
  "text-input.min-height": "size.target-min",
  "select.min-height": "size.target-min",
  "checkbox.target-size": "size.target-min",
  "checkbox.size": "size.indicator",
  "radio.target-size": "size.target-min",
  "radio.size": "size.indicator",
  "text-input.background": "color.surface.default",
  "text-input.foreground": "color.text.default",
  "text-input.placeholder": "color.text.muted",
  "text-input.hint": "color.text.muted",
  "text-input.border": "color.border.control",
  "text-input.border-error": "color.border.error",
  "select.background": "color.surface.default",
  "select.foreground": "color.text.default",
  "select.icon": "color.text.default",
  "select.border": "color.border.control",
  "select.border-error": "color.border.error",
  "select.hint": "color.text.muted",
  "checkbox.background": "color.surface.default",
  "checkbox.border": "color.border.control",
  "checkbox.label": "color.text.default",
  "checkbox.border-error": "color.border.error",
  "radio.background": "color.surface.default",
  "radio.border": "color.border.control",
  "radio.label": "color.text.default",
  "radio.border-error": "color.border.error",
  "card.background": "color.surface.default",
  "card.border": "color.border.subtle",
  "card.title": "color.text.default",
  "card.body": "color.text.default",
  "notification-banner.foreground": "color.text.default",
  "error-message.foreground": "color.feedback.error.foreground"
};
const val = (p) => {
  const key = t[p] ? p : MOVED[p];
  if (!key || !t[key]) throw new Error(`Unknown token in check: ${p}`);
  return t[key].resolved;
};

const TEXT = 4.5;
const UI = 3;
const pairs = []; // [description, fgToken, bgToken, minimum]
const add = (desc, fg, bg, min) => pairs.push([desc, fg, bg, min]);

// System text on allowed surfaces
for (const bg of ["color.surface.default", "color.surface.subtle", "color.surface.brand-subtle"]) {
  for (const fg of ["color.text.default", "color.text.muted", "color.text.link", "color.text.brand"]) {
    add(`${fg} on ${bg}`, fg, bg, TEXT);
  }
}
add("text.inverse on surface.inverse", "color.text.inverse", "color.surface.inverse", TEXT);
add("text.link-hover on surface.default", "color.text.link-hover", "color.surface.default", TEXT);

// Buttons
for (const s of ["", "-hover", "-pressed"]) {
  add(`button.primary foreground on background${s}`, "button.primary.foreground", `button.primary.background${s}`, TEXT);
  add(`button.secondary foreground on background${s}`, "button.secondary.foreground", `button.secondary.background${s}`, TEXT);
}
add("button.secondary border on surface.default", "button.secondary.border", "color.surface.default", UI);
add("button.primary background on surface.default", "button.primary.background", "color.surface.default", UI);

// Fields
for (const c of ["text-input", "select"]) {
  add(`${c} border on surface.default`, `${c}.border`, "color.surface.default", UI);
  add(`${c} border on surface.subtle`, `${c}.border`, "color.surface.subtle", UI);
  add(`${c} error border on surface.default`, `${c}.border-error`, "color.surface.default", UI);
  add(`${c} focus on surface.default`, `${c}.focus-ring`, "color.surface.default", UI);
  add(`${c} text on background`, `${c}.foreground`, `${c}.background`, TEXT);
}
add("text-input placeholder on background", "text-input.placeholder", "text-input.background", TEXT);
add("text-input hint on surface.default", "text-input.hint", "color.surface.default", TEXT);
add("select icon on background", "select.icon", "select.background", UI);

// Checkbox and radio
add("checkbox border on background", "checkbox.border", "checkbox.background", UI);
add("checkbox checked: background on superficie", "checkbox.background-checked", "color.surface.default", UI);
add("checkbox checkmark on checked background", "checkbox.checkmark", "checkbox.background-checked", UI);
add("checkbox label on surface.default", "checkbox.label", "color.surface.default", TEXT);
add("checkbox focus on surface.default", "checkbox.focus-ring", "color.surface.default", UI);
add("radio border on background", "radio.border", "radio.background", UI);
add("radio checked: border on superficie", "radio.border-checked", "color.surface.default", UI);
add("radio dot on background", "radio.dot", "radio.background", UI);
add("radio label on surface.default", "radio.label", "color.surface.default", TEXT);
add("checkbox error border on surface.default", "checkbox.border-error", "color.surface.default", UI);
add("radio error border on surface.default", "radio.border-error", "color.surface.default", UI);
add("select hint on surface.default", "select.hint", "color.surface.default", TEXT);
add("radio focus on surface.default", "radio.focus-ring", "color.surface.default", UI);

// Tag
for (const v of ["neutral", "brand", "success", "error", "warning", "info"]) {
  add(`tag.${v} text on background`, `tag.${v}.foreground`, `tag.${v}.background`, TEXT);
}

// Notification banner (body text on each background; icon and border as graphics)
for (const v of ["info", "success", "warning", "error"]) {
  add(`banner.${v} text on background`, "notification-banner.foreground", `notification-banner.${v}.background`, TEXT);
  add(`banner.${v} border on surface.default`, `notification-banner.${v}.border`, "color.surface.default", UI);
  add(`banner.${v} icon on background`, `notification-banner.${v}.icon`, `notification-banner.${v}.background`, UI);
}

// Card and error message
add("card title on background", "card.title", "card.background", TEXT);
add("card body on background", "card.body", "card.background", TEXT);
add("card hover border on background", "card.border-hover", "card.background", UI);
add("error-message on surface.default", "error-message.foreground", "color.surface.default", TEXT);
add("error-message on surface.subtle", "error-message.foreground", "color.surface.subtle", TEXT);

// Glass panels (translucent, flattened over the page background)
for (const fg of ["color.text.default", "color.text.muted", "color.text.link", "color.feedback.success.foreground", "color.feedback.error.foreground"]) {
  add(`${fg} on surface.glass`, fg, "color.surface.glass", TEXT);
}

// Solid warning with default text on top
add("feedback.warning.solid with text.default on top", "color.text.default", "color.feedback.warning.solid", TEXT);

// Translucent colors are flattened over the lightest page background of the mode (worst case for light text).
const run = (label) => {
  const base = composite(val("color.surface.page-start"), "#FFFFFF");
  let failed = 0;
  console.log(`\n== ${label} ==`);
  for (const [desc, fg, bg, min] of pairs) {
    const b = composite(val(bg), base);
    const f = composite(val(fg), b);
    const ratio = contrast(f, b);
    const ok = ratio >= min;
    if (!ok) failed++;
    console.log(`${ok ? "OK  " : "FAIL "}  ${ratio.toFixed(2).padStart(5)}:1  (min ${min})  ${desc}  [${f} / ${b}]`);
  }
  console.log(`${pairs.length} pairs checked, ${failed} failing.`);
  return failed;
};

let failed = run("default mode");
for (const m of MODES) {
  t = resolveMode(flat, m);
  failed += run(`${m} mode`);
}
process.exit(failed ? 1 : 0);
