# Tokens

`tokens.json` is the **single source of truth**. Tokens Studio reads and writes it ("File" mode).
Do not edit the files in `dist/` by hand: they are generated.

## Layers

| Set | Contents | Rule |
|---|---|---|
| `reference` | Raw values (color ramps, 4 px scale, sizes) | Never used directly in components |
| `system` | Meaning (`color.text.default`, `space.inset.md`) | Points only to `reference` |
| `component` | Decisions specific to one component (`button.primary.background`) | Points only to `system` |

Tokens Studio set states: `reference` as *Source*, `system` and `component` as *Enabled*.

## Commands

```
npm run build   # generates dist/dtcg-2025.10/ and dist/tokens.resolved.json
npm run check   # checks WCAG 2.2 contrast of the color pairs
npm test        # both; fails on a broken alias or a failing pair
```

Requires Node 18 or later. No dependencies.

## When to create a component token

Only when the component makes its own decision: a size, a padding, a variant color (Primary, Secondary, Tag success).
If the component uses the same value with the same meaning as system, it uses the system variable directly.
Examples: field background → `color.surface.default`; control border → `color.border.control`; focus → `focus.ring.color`; disabled → `color.action.disabled.*`; minimum height → `size.target-min`.
Why: every extra variable is one more option for designers and for the Figma agent, and more text the agent reads on every task.

Token descriptions are 8 words at most. Details go in this file.

## Usage rules that cannot be inferred from the values

- `color.text.muted` (#6B6B6B) is not used on blue 100 or darker (4.05:1); use `color.text.brand`.
- `color.border.subtle` (#DDDDDD, 1.36:1) is decorative only; controls use `color.border.control`.
- `color.feedback.warning.solid` (#F5A623) is never the only indicator.
- Disabled tokens are exempt from contrast requirements (WCAG 1.4.3).
- `neutral.600` is 5.33:1 on white and 4.05:1 on blue 100, so it is not used as text on blue 100 or darker.
- `amber.500` is 2.03:1 on white: fill only, with dark text on top (7.75:1).
- Line height as a percentage (125%, 150%): Figma reads a unitless number as pixels. WCAG 1.4.12 requires tolerating 1.5.
- `size.target-min` (44 px) is a system decision: WCAG 2.2 AA requires 24 px, AAA 44 px.
- Error border of 2 px on fields (normal is 1 px), so errors do not rely on color alone. If sizes are added, each size defines its own width.
- Focus ring: 2 px wide, 2 px offset. Radius: `focus.ring.radius` on controls (6 + 4 px) and `focus.ring.radius-container` on containers such as Card (2 + 4 px).
- Clickable card: the title link is stretched over the whole card; buttons inside stay above it. Never wrap the card in a link that contains buttons. Source: https://inclusive-components.design/cards/

## CSS variables

`npm run build` writes `css/tokens.css` with Style Dictionary (`scripts/build-css.mjs`). The file is generated: edit `tokens.json`, never the CSS.

- One variable per token, same path as in Figma: `color/text/default` → `--color-text-default`.
- Aliases stay as `var(--…)`, so the layers survive: `--button-radius: var(--radius-control)`.
- Typography tokens are a `font` shorthand: `font: var(--typography-body)`. Letter spacing is 0 in every style and is not emitted.
- Line height is unitless in CSS (`150%` in `tokens.json` → `1.5`).
- The build fails if a variable points to one that does not exist.

Use system variables in pages and component variables inside their component. Do not use reference variables in components.

## Modes (TV)

A mode gives the same token another value. Components do not change: they keep using the same variable names.

- A token stores its mode value in `$extensions.modes`, next to the default value:
  `"default": { "$value": "{color.neutral.0}", "$extensions": { "modes": { "tv": "{color.white-alpha.8}" } } }`
- `tv` is a dark mode for television: navy gradient background (`color.surface.page-start` → `page-end`), translucent "glass" surfaces (`color.surface.default`), light text and a white focus ring. `effect.blur.surface` is the background blur behind surfaces (0 by default, 24px in `tv`).
- **CSS:** `css/tokens.css` has a `[data-theme="tv"]` block with the overrides. Set `data-theme="tv"` on the root element.
- **Figma:** Tokens Studio (free plan) exports only the default mode. The `tv` mode of the `system` collection is written by a script from `dist/modes.json`. Never edit mode values by hand in Figma.
- **Contrast:** `npm test` checks every pair in each mode. Translucent colors are flattened over the lightest background of the mode.

## Glass surfaces

- `color.surface.glass`: raised panels (cards, charts, summaries). White at 75% in the default mode, white at 8% in `tv`.
- Page background: gray gradient from `color.surface.page-start` (neutral 100) to `color.surface.page-end` (neutral 300). In `tv`, navy.
- Effect in Figma: the native **Glass** effect (radius 40, refraction 0.6, depth 15, light -45° at 0.8, dispersion 0.15, splay 0.4). The Plugin API cannot bind Glass to a variable, so these values are fixed in the components. In CSS, approximate it with `backdrop-filter: blur(var(--effect-blur-surface))`.
- Border: 1px `color.border.subtle`.
- No decorative shapes behind glass.
- Do not use glass behind forms or long text; use `color.surface.default` there.
