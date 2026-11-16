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

`packages/react/src/pages/Simulator.tsx` follows this recipe and passes the axe check at 1440 and 360 px.
