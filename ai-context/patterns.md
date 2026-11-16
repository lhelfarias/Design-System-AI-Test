# Patterns

Full detail: `docs/visual-style.md`.

## Page recipe

1. `Header` (current page marked).
2. `TitleBand` (tv mode): `Breadcrumbs`, `h1`, one line of context, the main page control (sort, period).
3. Content inside `Container` on the gray canvas:
   - forms and long text → `Panel variant="solid"`;
   - cards, stats, charts, summaries → `Panel variant="glass"` or glass components;
   - side content (filters, "On this page") → solid panel at the side on desktop, below or hidden on mobile.
4. `Footer`.

## Devices

| | Desktop | Mobile | TV |
|---|---|---|---|
| Mode | default; band in tv | default; band in tv | whole screen tv |
| Columns | up to 12, max 1200 | 1 | one row of focusable items |
| Tables | Table | Summary list | stat cards |
| Forms | panel + summary side by side | stacked, buttons full width | no text entry; choices as buttons |
| Focus | 2 px ring | 2 px ring | white ring, scale 1.05, one item focused |

## Reference implementation

Six screens in `packages/react/src/pages`, one per pattern. Each is a "consumer team" page: it only imports from the library (`..`) and its own page CSS, which uses tokens only.

| Screen | File | Pattern |
|---|---|---|
| Product | Product.tsx | Hero in tv mode with the page gradient; white sections with cards, table and accordion |
| Store | Store.tsx | Title band with sort control; filters panel + product grid (3 → 2 → 1 columns) + pagination |
| Music | Music.tsx | App layout in three panels: navigation, songs, player bar |
| Simulator | Simulator.tsx | Form in a white panel; live summary in glass |
| Help article | HelpArticle.tsx | Long text in a white panel at reading width; sticky "On this page" |
| Analytics | Analytics.tsx | Stat cards (4 → 2 columns), bar chart with text summary, table in glass |

`pages/Shell.tsx` is the shared page recipe (skip link, header, title band, main, footer). Copy it to start a new page.
