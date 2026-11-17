# Ataraxia design system (example)

An example design system built end to end with AI and reviewed by people: tokens, a Figma library, React components, six example screens, automatic checks and documentation for people and for AI agents. The brand is made up; the method is what matters.

| Where | What |
|---|---|
| [Storybook](https://lhelfarias.github.io/Design-System-AI-Test/) | Foundations, guidelines, every component with its rules, the six screens |
| [Figma library "UI Kit – AI Test"](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test) | Variables (default and tv modes), text styles, components, guides, AI context page |
| Figma "Designs Examples" | The six Ataraxia screens on desktop, mobile and TV |

## Repository map

| Path | Contents |
|---|---|
| `packages/tokens` | `tokens.json` (source of truth), build scripts, `css/tokens.css` (generated), contrast check |
| `packages/react` | React components, Storybook, the six example screens, accessibility check, Code Connect templates |
| `docs/` | Guidelines: layout, navigation, motion, visual style and devices, distribution, next improvements |
| `docs/foundations/` | Colors, typography, spacing and layout, **generated** from `tokens.json` |
| `ai-context/` | Short rules and references for AI agents (also a page in the Figma library) |
| `.github/workflows/` | Checks on every pull request; Storybook publishing |

## How a change flows

1. **Tokens:** edit `packages/tokens/tokens.json` in a pull request. Checks build the CSS, test contrast in both modes and regenerate the foundations docs.
2. **Figma:** in the library file, Tokens Studio → Pull → export; a script writes the tv mode; publish the library.
3. **Components:** built in the Figma library with variables only, then in `packages/react` with the same names and properties, a story page and the accessibility check.
4. **Screens:** only assemble library components. Missing parts go into the library first.
5. **Review:** a person merges only when the checks are green.

## Run it

- View without installing: build the single HTML file, or open Storybook online.
- `packages/tokens`: `npm install`, `npm test`.
- `packages/react`: `npm install`, `npm run dev` (screens), `npm run storybook`, `npm test`.

## Status

| Part | Status |
|---|---|
| Tokens, modes (default, tv), CSS variables | Done. Components and pages use only system and component tokens; reference variables are hidden in the published Figma library |
| Figma library and 18 designs (6 screens × desktop, mobile, TV) | Done |
| React components (23) and 6 screens on desktop and mobile | Done |
| TV screens in code | Next improvement |
| Storybook online, checks on every pull request | Done |
| Code Connect | Templates ready; publishing needs an Organization or Enterprise Figma plan |
| Package for other teams | Next improvement (`docs/distribution.md`) |

What is left on purpose, and why: [docs/next-improvements.md](docs/next-improvements.md).
