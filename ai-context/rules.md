# Rules for agents

## Always

- Use existing tokens: CSS variables in code, library variables in Figma. Bind every color, spacing, radius and type value.
- Use existing components. If one is missing, propose it; it is created in the library (and in `packages/react`) before it is used in a screen.
- Use system tokens in pages, component tokens inside their component. Never use reference tokens in components.
- Keep the Figma name and properties in code (Figma `Button` / `Type=Primary` → React `Button variant="primary"`).
- Meet WCAG 2.2 AA: visible labels, 44 px targets, visible focus ring, text contrast 4.5:1, UI contrast 3:1, color never the only signal.
- Run the checks: `npm test` in `packages/tokens` (contrast in both modes) and in `packages/react` (axe at 1440 and 360 px).
- Report what you could not bind or decide.
- Keep documentation in its three places in the same task: repository (`docs/`, `ai-context/`), Figma (guides, "AI context" page) and Storybook (component pages). Foundations docs are generated: run `npm test` in packages/tokens, never edit them by hand.

## Never

- Create variables or tokens in Figma. Tokens are born in `tokens.json` through a pull request.
- Hard-code colors, sizes or fonts.
- Put glass behind forms or long text, or decorative shapes behind panels.
- Animate without a purpose; always respect `prefers-reduced-motion` (`docs/motion.md`).
- Show an error state as the first view of a screen. Document error states as separate examples.
- Run Tokens Studio in a design file; it is used only in the library file.

## Ask first

- Before changing tokens, adding a mode, or creating a component.
- When the request could mean a different phase (design vs. code) or a different screen.
- When a reference image or file is given: reproduce it as given before proposing variations.

## Checks

- Every pull request runs `.github/workflows/checks.yml`. Never merge with a failing check; fix the cause, do not disable the check.
