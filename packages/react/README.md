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
| Tag, Notification banner, Accordion, Table, Pagination | `Tag`, `NotificationBanner`, `Accordion`, `Table`, `Pagination` | `components/Content.tsx` |
| Product card, Stat card, Bar chart | `ProductCard`, `StatCard`, `BarChart` | Glass surface (`ds-glass`) |
| Icon button, Nav item, Track row, Player | `IconButton`, `NavItem`, `TrackList`, `PlayerBar` | `components/Music.tsx` |

## Pages

Six example screens, switched with the URL hash (`#product`, `#store`, `#music`, `#simulator`, `#help`, `#analytics`), so the built file also works without a server. Figma file "Designs Examples":

| Screen | Desktop / Mobile node |
|---|---|
| `Product.tsx` | 13:419 / 14:136 |
| `Store.tsx` | 15:10 / 15:477 |
| `Music.tsx` | 6:96 / 7:115 |
| `Simulator.tsx` | 20:3 / 20:343 |
| `HelpArticle.tsx` | 22:201 / 22:333 |
| `Analytics.tsx` | 25:3 / 25:233 |

`npm run a11y` checks every screen at 1440 and 360 px (13 cases, axe WCAG 2.2 AA).

Differences from Figma: Music shows the site header on top so the demo can move between screens; the TV versions are not built in code yet.

## Checks on GitHub

`.github/workflows/checks.yml` runs on every pull request and on main:

- **Tokens:** build, contrast in every mode, and a check that `css/tokens.css` matches `tokens.json`.
- **React:** typecheck, build and the axe check of every screen (13 cases). Screenshots are kept as a downloadable artifact for 14 days.

A red cross on a pull request means: do not merge yet.

## Notes

- Fonts load from Google Fonts in `index.html`; without network the browser falls back to Arial (the tokens list it).
- The `tv` mode is a `data-theme="tv"` attribute on any element; `TitleBand` sets it on itself.
