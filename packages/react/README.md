# @mi-design-system/react

React components of the design system. Every style comes from the CSS variables in `packages/tokens/css/tokens.css`; no color, size or font is written by hand.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Opens the example page (cash advance simulator) |
| `npm run storybook` | Storybook with every component and state; toolbar "Mode" switches to `tv` |
| `npm test` | Type check, build, and accessibility check with axe-core (WCAG 2.2 A/AA rules) at 1440 and 360 px, including the error state |

`npm run a11y` also saves screenshots in `screenshots/` to compare with Figma.

## Components (same names and properties as in Figma)

| Figma | React | Notes |
|---|---|---|
| Button (Type) | `Button` (`variant`) | `iconStart`, `fullWidth` |
| Text input | `TextInput` | `label`, `hint`, `error` → `aria-describedby`, `aria-invalid` |
| Select | `Select` | Native select |
| Radio / Checkbox | `Radio` / `Checkbox` | Rows of at least 44 px |
| Fieldset | `Fieldset` | Legend as the question |
| Error message | `ErrorMessage` | Hidden "Error:" prefix |
| Header (Size) + Header link (State) | `Header` (`links[].current`) | Size switches in CSS below 840 px |
| Breadcrumbs | `Breadcrumbs` | Last item is the current page |
| Summary list | `SummaryList` | Compact layout under 400 px of container |
| Footer | `Footer` | |
| Title band / panels | `TitleBand`, `Panel` (`solid` / `glass`), `Container` | docs/visual-style.md |

## Pages

- `src/pages/Simulator.tsx`: Figma "Ataraxia — Simulator" (desktop 20:3, mobile 20:343).

## Notes

- Fonts load from Google Fonts in `index.html`; without network the browser falls back to Arial (the tokens list it).
- The `tv` mode is a `data-theme="tv"` attribute on any element; `TitleBand` sets it on itself.
