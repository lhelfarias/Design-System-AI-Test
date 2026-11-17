// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../..";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox, args: { label: "I have read the cash advance terms" },
  parameters: { docs: { description: { component: "An independent yes/no, like accepting terms or a filter.\n\n**When to use**\n\n- Each option can be on or off independently.\n\n**When not to use**\n\n- Only one option can be chosen: use Radio.\n\n**Accessibility**\n\n- 44 px row; checkmark drawn in CSS, 3:1 against the box.\n- Errors go to the Fieldset or an Error message linked to the box.\n\n**Tokens used**\n\n`--border-width-2`, `--checkbox-background-checked`, `--checkbox-border-checked`, `--checkbox-border-width`, `--checkbox-checkmark`, `--checkbox-radius`, `--color-border-control`, `--color-border-error`, `--color-surface-default`, `--color-text-default`, `--radio-border-checked`, `--radio-border-width`, `--radio-disabled-border`, `--radio-disabled-label`, `--radio-dot`, `--radio-dot-size`, `--radio-label-gap`, `--radio-label-typography`, `--radio-radius`, `--radius-full`, `--size-indicator`, `--size-target-min`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=25-54) \u00b7 **Code** [Choice.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Choice.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Checkbox>;
export const Unchecked: S = {};
export const Checked: S = { args: { defaultChecked: true } };
export const Disabled: S = { args: { disabled: true } };
