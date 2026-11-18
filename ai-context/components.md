# Components

Status: **code** = in `packages/react` and Figma. Every library component has code; a component added to Figma is not done until it has code, a story and a row here. Components marked code have their React usage and source link in their Figma description, and a documentation page in Storybook (https://lhelfarias.github.io/Design-System-AI-Test/).

| Component | Status | Properties | Use for | Accessibility |
|---|---|---|---|---|
| Button | code | variant primary/secondary, iconStart, fullWidth, disabled | Actions. One primary per area | Label text always; 44 px min height |
| Text input | code | label, hint, error | Short free text | Visible label; hint and error linked with aria-describedby |
| Select | code | label, hint, error, options | Choosing from 4+ options | Native select |
| Radio | code | label | One choice from 2–4 options, inside Fieldset | 44 px row |
| Checkbox | code | label | Independent yes/no | 44 px row |
| Fieldset | code | legend, hint, error | Grouping radios or checkboxes | Legend is the question |
| Error message | code | text | Field errors | Hidden "Error:" prefix |
| Header + Header link | code | serviceName, links[{label, href, current}] | Main navigation | nav aria-label="Main", aria-current="page", Menu button under 840 px with aria-expanded |
| Breadcrumbs | code | items[{label, href}] | Hierarchical pages, not transactions | Last item current |
| Summary list | code | rows[{key, value, action}] | Key–value summaries; tables on mobile | dl/dt/dd |
| Footer | code | links, legal | Every page | |
| Title band, Panel, Container | code | Panel variant solid/glass | Page structure (patterns.md) | Band in tv mode |
| Card | code | title, body, href, image, imageAlt, actions, headingLevel | Linked content | With href the title link is stretched over the card; focus ring on the whole card |
| Product card | code | name, description, price, tag, href | Product listings | Name is the link; button above it |
| Stat card | code | label, value, change, trend up/down | Key figures | Change as text with sign and icon |
| Bar chart | code | title, data[{label, value}], summary | Up to 7 categories | Text summary always |
| Table | code | type simple/sortable/selectable, caption, columns, rows, numeric | Comparing rows | Hidden caption, th scope; first cell is the row header. Sortable: header buttons and aria-sort. Selectable: checkbox per row named "Select <row>" |
| Tag | code | children, type | Status labels | Text, not only color |
| Notification banner | code | title, children, type | Page-level messages | role="status" or alert |
| Accordion | code | items[{title, content, open}] | FAQs, optional detail | Native details/summary |
| Pagination | code | current, total, label | Long lists | aria-current="page"; hidden "page" in names |
| Tabs | code | label, items[{label, content}], defaultIndex | 2–5 views of related content on one page | WAI-ARIA tabs: arrow keys, Home/End, roving tabindex |
| Search | code | label, name, action | Site search | form role="search", visible label, submit button |
| Link, Back link, Skip link | code | href, children | Inline links; going back one level; skipping to #main | Underlined; Back link 44 px; Skip link visible on focus, first in the page |
| Divider | code | — | Separating groups in a panel | hr |
| Dialog | code | open, onClose, title, actions | Confirming a destructive or blocking step | Native dialog with showModal (focus trapped, Esc closes), aria-labelledby, focus returns to the opener |
| Textarea | code | label, hint, error, rows | Long free text | Same as Text input; resizes vertically |
| Step indicator | code | steps, current, showLabels, headingLevel | Linear multi-step forms (3–7 steps), below the h1 | ol with aria-current="step", hidden "completed"/"not completed", focus to the step heading on change |
| Icon button | code | icon, label, pressed, variant ghost/primary | Compact actions | label is required; aria-pressed for toggles |
| Nav item | code | icon, href, current | App side navigation | aria-current="page" |
| Track list (Track row) | code | tracks, current, onPlay | Song lists | Table; play button names the song and artist |
| Player bar | code | track, playing, onToggle, onPrev, onNext | Music playback | Native range inputs with labels and aria-valuetext |
| Album tile | code | title, href | TV music screens | Focus ring on the cover; scale only with no reduced-motion preference |

## Rules learned in code

- **Label in name (WCAG 2.5.3):** the accessible name must contain the visible text. Add context with hidden text after the visible label ("Add to cart<hidden>: Ataraxia Halo</hidden>"), never with an aria-label that replaces it.
- **Links styled as buttons:** use `<a class="ds-button ds-button--primary">` when the action navigates ("Open the simulator"), `<Button>` when it acts on the page.
- **Glass cards:** add the `ds-glass` class (surface.glass + blur + subtle border + container radius).
