// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../..";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select, args: { label: "Installments", options: [6, 12, 24].map((m) => ({ value: String(m), label: `${m} months` })), defaultValue: "12" },
  parameters: { docs: { description: { component: "Choose one option from a list of four or more.\n\n**When to use**\n\n- 4 or more options that do not fit as radios.\n- A sort or period control in a title band.\n\n**When not to use**\n\n- 2 or 3 options: use Radio, so all choices are visible.\n\n**Accessibility**\n\n- Native select: keyboard and screen readers work by default.\n- Same label, hint and error pattern as Text input.\n\n**Tokens used**\n\n`--color-border-control`, `--color-border-error`, `--color-surface-default`, `--color-text-default`, `--select-border-width`, `--select-border-width-error`, `--select-gap`, `--select-icon-size`, `--select-padding-x`, `--select-radius`, `--select-typography`, `--size-target-min`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=26-61) \u00b7 **Code** [Select.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Select.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Select>;
export const Default: S = {};
export const WithError: S = { args: { error: "Choose the number of installments" } };
