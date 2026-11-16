# Navigation

Rules for structure, keyboard use and navigation patterns.
WCAG levels are shown in brackets. Items marked *decision* are choices of this system; *synthesis* means a reasoned recommendation, not a standard.

## Page structure

- One `<header>`, one `<nav>` for the main navigation, one `<main>`, one `<footer>`. Extra `<nav>` regions (breadcrumbs, pagination) get an `aria-label` ([1.3.1 Info and Relationships, A](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)).
- Each page has a unique, descriptive `<title>`: page name first, then service name ([2.4.2 Page Titled, A](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)).
- One `<h1>` per page, matching the page title. Headings go in order without skipping levels ([2.4.6 Headings and Labels, AA](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html); order is *synthesis*).
- Heading styles are visual only: `typography.heading-2` can be used on an `<h3>` if the hierarchy needs it.
- Navigation that repeats across pages stays in the same place and order ([3.2.3 Consistent Navigation, AA](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)). Same function, same name and icon ([3.2.4, AA](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)).

## Keyboard and focus

- Everything works with the keyboard; no keyboard traps ([2.1.1, A](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html); [2.1.2, A](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)).
- First focusable element: a "Skip to main content" link, visible when focused ([2.4.1 Bypass Blocks, A](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)).
- Focus order follows the visual and reading order. Do not use positive `tabindex` ([2.4.3 Focus Order, A](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)).
- Focus is always visible with the system focus ring: `focus.ring.width` 2 px, `focus.ring.offset` 2 px, `focus.ring.color`, radius `focus.ring.radius` (controls) or `focus.ring.radius-container` (containers) ([2.4.7 Focus Visible, AA](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)).
- Sticky headers, cookie banners and similar must not cover the focused element ([2.4.11 Focus Not Obscured, AA](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)). In code, use `scroll-padding-top` equal to the sticky header height.
- Focus never moves on its own when a control receives focus or input changes ([3.2.1, A](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html); [3.2.2, A](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)). After opening a dialog, focus moves into it; after closing, it returns to the trigger (*synthesis*, ARIA Authoring Practices: [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)).
- Links go somewhere; buttons do something. Do not style one as the other without the right element (*synthesis*).

## Links

- Link text says where it goes, without "click here" ([2.4.4 Link Purpose, A](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)).
- Links in text are underlined, so they do not rely on color alone ([1.4.1 Use of Color, A](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)).
- Links open in the same tab. If one must open a new tab, say so in the link text (*synthesis*).

## Navigation patterns

| Pattern | Use when | Do not use when |
|---|---|---|
| Main navigation (header) | The service has 2–7 top-level sections (*decision*) | The page is a step in a transaction |
| Breadcrumbs | Content is organized in a hierarchy of 2 levels or more; shows where the user is ([2.4.8 Location, AAA](https://www.w3.org/WAI/WCAG22/Understanding/location.html)) | Transactional flows (forms in steps) |
| Back link | Steps of a transaction, to return to the previous step | Together with breadcrumbs on the same page (*synthesis*) |
| Pagination | Long lists of results or content split into pages | Short content that fits on one page |
| Search | The service has many pages; also a second way to find content ([2.4.5 Multiple Ways, AA](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html)) | — |

- On compact screens the main navigation collapses behind a "Menu" button with `aria-expanded` (*synthesis*, [ARIA APG: Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)).
- The current page in navigation is marked with `aria-current="page"` and a visual indicator that is not color alone (*synthesis*).
- These patterns are not components yet. Build them as components before using them in more than one page.

## Clickable cards

The title link is stretched over the whole card; buttons inside stay above it. Never wrap a card that contains buttons in a link ([Inclusive Components: Cards](https://inclusive-components.design/cards/)).
