# Working in Figma

## Files

- Library "UI Kit – AI Test" (`M0pBcAnDr1iLJXpcyZ2Epa`): variables, text styles, components, guides (page "Componentes", section Guidelines).
- "Designs Examples" (`ue2fi6XJwFxbNvAsiCIIvN`): Ataraxia screens, one page per screen, frames "— Desktop", "— Mobile", "— TV".

## With the Figma connector (Plugin API)

- In design files, import library assets by key: `importVariableByKeyAsync`, `importStyleByKeyAsync`, `importComponentSetByKeyAsync`.
- Bind every paint with `setBoundVariableForPaint`, every spacing and radius with `setBoundVariable`.
- Dark areas: `setExplicitVariableModeForCollection(systemCollection, tvModeId)` on the frame.
- Prefer solid fills bound to variables; gradients bound to variables break when the variable changes before publishing.
- The Glass effect cannot be bound to a variable. Values: radius 40, refraction 0.6, depth 15, light −45° at 0.8, dispersion 0.15, splay 0.4.
- Documentation blocks of the Figma agent (SPEC_BLOCK) cannot be created through the API; write guides as frames and ask for conversion.
- After changing the library, a person must publish it and accept the update in design files.

## Checks before handing over

- No unbound fills, strokes or gradients in the frames.
- Screenshot every frame and compare with the request.
- Text contrast in the mode the frame uses.
