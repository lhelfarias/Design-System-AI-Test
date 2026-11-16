# Components

Status: **code** = in `packages/react` and Figma; **Figma** = only in the Figma library for now.

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
| Card | Figma | title, body, image, actions | Linked content | Title link stretched over the card |
| Product card | Figma | name, description, price, tag, action | Product listings | Name is the link; button above it |
| Stat card | Figma | label, value, change, trend up/down | Key figures | Change as text with sign and icon |
| Bar chart | Figma | title, summary | Up to 7 categories | Text summary always |
| Table | Figma | simple, sortable, selectable | Comparing rows on desktop | Use Summary list on mobile |
| Tag | Figma | label, type | Status labels | Text, not only color |
| Notification banner | Figma | title, body, type | Page-level messages | role="status" or alert |
| Accordion, Tabs, Pagination, Search, Link, Dialog, Textarea | Figma | — | See Figma guides | — |
| Icon button, Nav item, Track row, Album tile | Figma | — | Music app screens | Accessible names on icon buttons |
