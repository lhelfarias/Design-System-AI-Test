# Next improvements

The example is complete end to end: tokens → Figma library → designs → React code → checks → documentation. These are improvements identified on 17 November 2026 and left for later on purpose. Each one says why it matters and what it needs.

## Variables

| Improvement | Why | What it needs |
|---|---|---|
| Variable scopes | Every Figma variable shows in every picker (fills, gaps, radius…). Scopes reduce wrong choices for designers. They do not change AI token use or code output. | Tokens Studio 2.11+ syncs scopes to Figma. Decide the scope per group and set it in `tokens.json` so exports keep it. |
| Single-use variables | Rule: create a variable only when the value is shared. Three were created before the rule: `bar-chart.height`, `title-band.control-width`, `size.dot` (only Radio). | Review them, and every new token, against the rule in the next tokens pull request. |
| Motion tokens | Durations and curves are proposed in `docs/motion.md`, not in `tokens.json`. Code has no animation tokens. | A tokens pull request with three durations and two curves, then use them in code. |

Fixed on purpose (single use, documented): Product card image height (200), product images on the Product screen (desktop 480 and mobile 240 high, full width; TV 360 × 360).

## Figma library

| Improvement | Why | What it needs |
|---|---|---|
| Guides in the Figma agent's format | Guides made by Claude are text frames; the agent's documentation blocks cannot be created through the API. | Prompt 07 for the Figma agent. Decide whether it also converts "Colors — Guide" and "Variables — Guide" and deletes the specs marked outdated. |
| Product card with uniform height | Cards in a row have the same height only through instance overrides. | Move the fix into the component. |
| Compact Summary list | On mobile the label column wraps values. | A compact variant. |

## Code

| Improvement | Why | What it needs |
|---|---|---|
| TV screens in code | The six screens exist for TV in Figma, not in code. | Pages with `data-theme="tv"`, focus handling for a remote control, and the accessibility check at 960 × 540. |
| Package for other teams | Teams should install tokens and components with npm instead of copying them. | GitHub Packages, versions and changelog, as planned in `docs/distribution.md`. |
| Code Connect | Dev Mode would show the real React code for each instance. | Templates are ready; publishing needs an Organization or Enterprise Figma plan. |
