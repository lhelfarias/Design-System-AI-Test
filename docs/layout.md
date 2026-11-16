# Layout

Rules for page layout. Values come from `packages/tokens/tokens.json` (`system.layout.*`).
Each rule says whether it comes from a standard (with source) or is a decision of this system.

## Breakpoints and grid

Width classes follow Material Design's window size classes (source: [Android: window size classes](https://developer.android.com/develop/ui/compose/layouts/adaptive/window-size-classes)). The grid values per class are decisions of this system.

| Class | Width | Columns | Gutter | Side margin | Tokens |
|---|---|---|---|---|---|
| Compact | < 600 px | 4 | 16 px | 16 px | `layout.columns.compact`, `layout.gutter.compact`, `layout.margin.compact` |
| Medium | 600–839 px | 8 | 24 px | 24 px | `…medium` |
| Expanded | 840–1199 px | 12 | 24 px | 32 px | `…expanded` |
| Large | ≥ 1200 px | 12 | 24 px | 32 px | `…large` |

- Breakpoints: `layout.breakpoint.medium` (600), `layout.breakpoint.expanded` (840), `layout.breakpoint.large` (1200). Design mobile first: compact is the default, larger classes override it.
- Content is limited to `layout.max-width` (1200 px) and centered above it. GOV.UK uses 1020 px by default ([GOV.UK layout](https://design-system.service.gov.uk/styles/layout/)); 1200 px is a decision of this system.
- Use the grid for page regions, not inside components. Components fill the column they are placed in (`Fill` in Figma, `width: 100%` in code).
- Common splits on expanded and large: full, two-thirds + one-third, one-half + one-half. On compact everything stacks in one column.

## Reflow and zoom

- Content works at 320 px wide without horizontal scrolling, except data tables, maps and diagrams ([WCAG 1.4.10 Reflow, AA](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)). With 16 px margins, components must work at 288 px.
- Text can be zoomed to 200% without loss of content ([WCAG 1.4.4, AA](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)). Do not fix heights on containers with text.
- Layout tolerates the text spacing overrides of [WCAG 1.4.12 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html).

## Reading width

- Running text is limited to `layout.reading-width` (640 px, about 75 characters at 16 px). GOV.UK recommends no more than 75 characters per line ([GOV.UK layout](https://design-system.service.gov.uk/styles/layout/)); WCAG asks for 80 at most at AAA ([1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)).
- In code, prefer `max-width: 75ch`; the 640 px token is the Figma equivalent.
- Text is left-aligned, not justified ([WCAG 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)).

## Page spacing

All spacing uses the 4 px scale. Values are decisions of this system.

| Use | Token | Value |
|---|---|---|
| Between page sections, compact | `layout.section-gap.compact` | 48 px |
| Between page sections, medium and up | `layout.section-gap.default` | 64 px |
| Between blocks inside a section | `layout.block-gap` | 24 px |
| Inside components | `space.inset.*`, `space.stack.*`, `space.inline.*` | 4–32 px |

- Space between related items is smaller than space between unrelated groups (proximity).
- A heading sits closer to the content it introduces than to the content above it.

## Touch targets

- Interactive controls are at least `size.target-min` (44 px) tall. WCAG 2.2 requires 24 px at AA ([2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)) and 44 px at AAA ([2.5.5](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)); 44 px is a decision of this system.
- Keep at least 8 px between adjacent targets (decision of this system).

## In Figma

- Frames for each class: 360 (compact), 768 (medium), 1024 (expanded), 1440 (large). These are example frame widths, not breakpoints.
- Layout grids use the column, gutter and margin variables of their class.
