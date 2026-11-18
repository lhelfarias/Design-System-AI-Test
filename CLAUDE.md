# CLAUDE.md

Read before any task in this repository. Details live in `ai-context/`; this file only points to them.

## Read first, in this order

1. `ai-context/README.md` — reading order and sources of truth
2. `ai-context/rules.md` — always, never, ask first
3. `ai-context/tokens.md` — layers, modes, surfaces
4. `ai-context/components.md` — every component, its props and accessibility
5. `ai-context/patterns.md` — page recipe and devices
6. `ai-context/figma.md` — how to work in the Figma files
7. The root `README.md` — repository map and how a change flows

## Rules that apply to every task

- Values come only from `packages/tokens/css/tokens.css` (system and component tokens). No fixed values, no reference tokens in components or screens.
- `packages/tokens/tokens.json` is the source of truth. Change it only by pull request.
- Components in `packages/react` keep the Figma names and properties. Screens only assemble components.
- A missing component goes into the Figma library first, then code. A new component needs a story with docs, a case in `scripts/a11y-check.mjs` and a row in `ai-context/components.md`.
- Documentation lives in three places (repository, Figma, Storybook) and is updated in the same task.
- One change per pull request, always into `main`. Never stack pull requests.
- Run `npm test` in the package you changed before proposing. Never merge on red; fix the cause, never switch a check off.
- Ask before filling any blank or changing phase.
