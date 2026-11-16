# Tokens

Three layers. Names are the same in Figma (slashes) and CSS (hyphens): `color/text/default` = `--color-text-default`.

| Layer | Contains | Use |
|---|---|---|
| reference | Raw values: color ramps, 4 px spacing scale, sizes, font family, white with alpha | Only inside system tokens |
| system | Meaning: `color.text.*`, `color.surface.*`, `color.border.*`, `color.action.*`, `color.feedback.*`, `space.inset/stack/inline.*`, `size.*`, `radius.*`, `focus.ring.*`, `layout.*`, `typography.*`, `effect.blur.surface` | Pages and components |
| component | Decisions of one component: `button.*`, `text-input.*`, `select.*`, `checkbox.*`, `radio.*`, `tag.*`, `notification-banner.*`, `card.*`, `error-message.*` | Only inside that component |

## Modes

- `default` and `tv` (system collection). Same names, other values.
- In code: `data-theme="tv"` on any element. In Figma: set the frame's mode for the `system` collection to `tv`.
- `tv` values live in `tokens.json` under `$extensions.modes.tv`. Tokens Studio (free plan) does not export modes; a script writes them in Figma from `dist/modes.json`.

## Key surfaces

| Token | Default | tv |
|---|---|---|
| `color.surface.subtle` | Gray canvas | Navy |
| `color.surface.default` | White panel | White 8% |
| `color.surface.glass` | White 75% | White 8% |
| `color.surface.band` | Navy title band (always with its frame in tv mode) | Navy |
| `color.surface.page-start` / `page-end` | Gray | Navy gradient (TV background) |

## Typography

`typography.display`, `heading-1` to `heading-4`, `body`, `body-sm`, `label`, `caption`. In CSS each is a `font` shorthand: `font: var(--typography-body)`. Font: Open Sans, fallback Arial.

## Layout

Breakpoints 600 / 840 / 1200 / 1600; columns 4 / 8 / 12; margins 16 / 24 / 32 / 32 / 48; `layout.max-width` 1200; `layout.reading-width` 640. TV: 960 × 540, safe area 48 × 24, focus scale 1.05.
