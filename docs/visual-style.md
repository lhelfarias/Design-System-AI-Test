# Visual style

How the Ataraxia example screens are built: which surface goes where, and how the same screen adapts to desktop, mobile and TV. Items marked *decision* are choices of this system, not standards.

## Principles

1. **Gray canvas, clear regions.** The page is gray; every region (navigation, content, player, filters, article) sits on its own surface with a border. A screen without visible regions reads as a wireframe.
2. **One dark band per page.** The page title lives in a navy band right under the header. Everything below is light.
3. **Glass only for summaries.** Cards, stats, charts and summaries are glass. Forms and long text are on solid white panels.
4. **No decoration behind content.** No shapes, blobs or textures behind panels (*decision*, after testing them).
5. **Modes, not new components.** Dark areas reuse the `tv` mode on that frame; components switch by themselves.

## Surfaces

| Surface | Use | Tokens | Effect |
|---|---|---|---|
| Canvas | Page background | `color.surface.subtle` | — |
| Panel | Forms, articles, filters, side navigation, tables | `color.surface.default`, border `color.border.subtle`, `radius.container` | — |
| Glass | Cards, stat cards, charts, summaries | `color.surface.glass`, border `color.border.subtle`, `radius.container` | Glass (Figma) / blur (CSS) |
| Band | Page title, product hero | `color.surface.band` with the frame in `tv` mode | — |
| Media area | Covers, product images | `color.surface.brand-subtle`, border `color.border.subtle` | — |
| Bars | Player bar, mini player, bottom navigation | `color.surface.default` or `brand-subtle`, border on the side that touches content | — |

### Glass effect

- **Figma:** native Glass effect: radius 40, refraction 0.6, depth 15, light angle −45°, light intensity 0.8, dispersion 0.15, splay 0.4. The Plugin API cannot bind it to a variable, so the values are fixed in the components (Stat card, Product card, Bar chart).
- **CSS:** `background: var(--color-surface-glass); backdrop-filter: blur(var(--effect-blur-surface)); border: 1px solid var(--color-border-subtle);`
- Glass needs something behind it to read. On a plain gray canvas it looks almost white: that is expected.

### Separating regions

- Between panels: `space.stack.sm` gap on the canvas (music player: navigation, tracks and player as three panels).
- Between page sections: alternate panel and canvas, or a 1px `color.border.subtle` line.
- Never rely on color alone to separate interactive areas; panels also have a border.

## Page anatomy

1. Header (`color.surface.inverse`).
2. Title band (`tv` mode): breadcrumbs, page title (h1), one line of context, and the main page control (sort, period). No forms.
3. Content on the canvas, inside `layout.max-width`.
4. Footer.

## Adapting to devices

| | Desktop (large, ≥ 1200) | Mobile (compact, < 600) | TV (context) |
|---|---|---|---|
| Mode | Default; band in `tv` | Default; band in `tv` | Whole screen in `tv` |
| Background | Canvas gray | Canvas gray | Gradient `page-start` → `page-end` |
| Title band | Title left, main control right | Title, then control below at full width | No band; title in the safe area |
| Layout | 12 columns, max 1200; side panels allowed (filters, "On this page") | 1 column, panels at full width; side panels hidden or moved below | 960 × 540, safe area 48 × 24, one row of focusable items |
| Tables | Table | Summary list (tables do not fit 360 px) | No tables; key figures as stat cards |
| Forms | White panel next to the glass summary | White panel, summary below, buttons at full width | No text entry: choices as buttons; confirm on the phone |
| Navigation | Header links, current page marked | Menu button, bottom navigation in apps | Glass rail; arrows move, center selects, Back returns |
| Panels | Panel / glass with border | Same | Glass with border on all panels, covers and tiles |
| Focus | 2px ring, 2px offset | Same | White ring, scale 1.05, one focused item per screen |
| Long text | Reading width 640 + "On this page" | Full width | Title, summary and a link to read on the phone |

## Checks

- `npm test` checks contrast in both modes, including text on glass.
- Before shipping a screen: every region has a surface and a border; one band; no glass behind forms or long text; on TV, one focused item and nothing outside the safe area.

## Related

- [Layout](layout.md) · [Navigation](navigation.md) · [Motion](motion.md) · `packages/tokens/README.md` (Glass surfaces, Modes)
