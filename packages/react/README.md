# @mi-design-system/react

Package name today; `@lhelfarias/react` is the planned published name (docs/distribution.md).

React components of the design system. Every style comes from the CSS variables in `packages/tokens/css/tokens.css`; no color, size or font is written by hand.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Opens the six example screens (switch with the header links) |
| `npm run storybook` | Storybook: Introduction, Foundations, Guidelines, one page per component, Patterns, For teams and AI; toolbar "Mode" switches to `tv` |
| `npm test` | Type check, build, and accessibility check with axe-core (WCAG 2.2 A/AA rules) of the six screens at 1440 and 360 px, plus the simulator error state (13 cases), and text contrast of every link, button and summary on hover (axe only checks the resting state) |

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

`npm run a11y` checks every screen at 1440 and 360 px (13 cases, axe WCAG 2.2 AA) and hovers every link, button and summary to check its text contrast (12 cases).

Differences from Figma: Music shows the site header on top so the demo can move between screens; the TV versions are not built in code yet.

## Storybook online

The component catalog is published to GitHub Pages on every change to main (`.github/workflows/storybook.yml`):
https://lhelfarias.github.io/Design-System-AI-Test/

One-time setup (repository owner): Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## Checks on GitHub

`.github/workflows/checks.yml` runs on every pull request and on main:

- **Tokens:** build, contrast in every mode, and a check that `css/tokens.css` and the generated foundations docs match `tokens.json`.
- **React:** typecheck, build and the axe check of every screen (13 cases). Screenshots are kept as a downloadable artifact for 14 days.

A red cross on a pull request means: do not merge yet.

## Storybook content

- **Foundations** read `packages/tokens/docs/foundations.json` (generated) and show live swatches from `tokens.css`, with the tv mode side by side.
- **Guidelines** show the files in `docs/` as they are; **For teams and AI** shows `ai-context/` and `docs/distribution.md`.
- **Components:** `src/stories/components/*.stories.tsx`, one per component, with a docs description (when to use, when not, accessibility, tokens used, Figma and code links). Keep the text in sync with `ai-context/components.md` and the Figma guides.

## Code Connect

Templates for six components in `codeconnect/` (see its README). Publishing needs an Organization or Enterprise Figma plan; meanwhile each library component carries its React usage and a source link in its description.

## Notes

- Fonts load from Google Fonts in `index.html`; without network the browser falls back to Arial (the tokens list it).
- The `tv` mode is a `data-theme="tv"` attribute on any element; `TitleBand` sets it on itself.
