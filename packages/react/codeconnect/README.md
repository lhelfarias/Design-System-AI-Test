# Code Connect templates

Parserless Code Connect templates (`*.figma.ts`) that map library components in Figma ("UI Kit – AI Test") to the React components in `src/components`. In Figma Dev Mode, a developer selecting an instance would see the real React code with the instance's values.

| Template | Figma node | React component |
|---|---|---|
| Button.figma.ts | 6:82 | `Button` |
| TextInput.figma.ts | 16:70 | `TextInput` (reads the nested Error message) |
| Tag.figma.ts | 23:32 | `Tag` (exposes label and type to parents) |
| Checkbox.figma.ts | 25:54 | `Checkbox` |
| NotificationBanner.figma.ts | 27:81 | `NotificationBanner` |
| ProductCard.figma.ts | 45:202 | `ProductCard` (reads the nested Tag) |

Mapping decisions:

- Interaction states (Hover, Pressed, Focus) are CSS, not props. Only `Disabled` becomes a prop.
- Figma properties without a code prop are omitted, never invented: Button "Icon end", Product card "Show action".
- Imports use the planned package name `@lhelfarias/react` (docs/distribution.md).

## Status: blocked by the Figma plan

Publishing was tried through the Figma connector on 17 November 2026 and refused: "Code connections can only be made in libraries that are in Organization or Enterprise plans." The library lives on a Professional team. Figma's help page lists Professional as supported, but the API refuses it; the Figma forum reports the same mismatch.

Until the library moves to an Organization or Enterprise plan:

- Each library component that exists in code has, in its Figma description, the React usage and a documentation link to its source file on GitHub. Dev Mode shows both. This is free and was applied to 22 components.
- These templates stay ready. To publish later: `npx figma connect publish` in `packages/react` with a Figma token (scope: Code Connect write), or ask Claude to publish them through the Figma connector.

To add the remaining components, follow the same pattern: read the Figma properties, map only those with a code prop, list every variant value.
