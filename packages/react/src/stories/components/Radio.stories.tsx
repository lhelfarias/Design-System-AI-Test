// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio, Fieldset } from "../..";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: { docs: { description: { component: "One choice from two to four options, always inside a Fieldset that asks the question.\n\n**When to use**\n\n- 2 to 4 options that should all be visible.\n\n**When not to use**\n\n- Independent yes/no: use Checkbox.\n- Long lists: use Select.\n\n**Accessibility**\n\n- 44 px row; the whole label is clickable.\n- The Fieldset legend is the question.\n\n**Tokens used**\n\n`--border-width-2`, `--checkbox-background-checked`, `--checkbox-border-checked`, `--checkbox-border-width`, `--checkbox-checkmark`, `--checkbox-radius`, `--color-border-control`, `--color-border-error`, `--color-surface-default`, `--color-text-default`, `--radio-border-checked`, `--radio-border-width`, `--radio-disabled-border`, `--radio-disabled-label`, `--radio-dot`, `--radio-dot-size`, `--radio-label-gap`, `--radio-label-typography`, `--radio-radius`, `--radius-full`, `--size-indicator`, `--size-target-min`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=25-85) \u00b7 **Code** [Choice.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Choice.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Radio>;
export const InFieldset: S = { render: () => (
  <Fieldset legend="Where should we send the money?">
    <Radio name="d" label="Ataraxia account ending in 4821" defaultChecked />
    <Radio name="d" label="Another bank account" />
  </Fieldset>
) };
