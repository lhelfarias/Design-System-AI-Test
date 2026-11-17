// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "../..";

const meta: Meta<typeof TextInput> = {
  title: "Components/Text input",
  component: TextInput, args: { label: "Amount", hint: "Between $50 and $2,000", defaultValue: "500" },
  parameters: { docs: { description: { component: "One line of free text, with a visible label, an optional hint and an error message.\n\n**When to use**\n\n- Short free text: name, amount, email.\n- Use inputMode for the right mobile keyboard (decimal, email).\n\n**When not to use**\n\n- Choosing from a known list: use Select or Radio.\n- Never use the placeholder as the label.\n\n**Accessibility**\n\n- Label linked with htmlFor; hint and error linked with aria-describedby.\n- Error sets aria-invalid and shows a hidden \"Error:\" prefix.\n- Border 3:1 against the surface (color.border.control).\n\n**Tokens used**\n\n`--color-action-disabled-background`, `--color-action-disabled-border`, `--color-action-disabled-foreground`, `--color-border-control`, `--color-border-error`, `--color-surface-default`, `--color-text-default`, `--size-target-min`, `--text-input-border-width`, `--text-input-border-width-error`, `--text-input-padding-x`, `--text-input-radius`, `--text-input-typography`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=16-70) \u00b7 **Code** [TextInput.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/TextInput.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof TextInput>;
export const Default: S = {};
export const WithError: S = { args: { defaultValue: "20", error: "Enter an amount between $50 and $2,000" } };
export const Disabled: S = { args: { disabled: true } };
