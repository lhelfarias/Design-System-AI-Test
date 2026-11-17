// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fieldset, Radio } from "../..";

const meta: Meta<typeof Fieldset> = {
  title: "Components/Fieldset",
  component: Fieldset,
  parameters: { docs: { description: { component: "Groups radios or checkboxes under one question, with hint and error.\n\n**When to use**\n\n- Every group of radios or checkboxes.\n\n**When not to use**\n\n- Grouping unrelated fields just for layout.\n\n**Accessibility**\n\n- The legend is read before each option.\n- The error is announced with the group.\n\n**Tokens used**\n\n`--text-input-label-gap`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=26-153) \u00b7 **Code** [Fieldset.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Fieldset.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Fieldset>;
export const WithError: S = { render: () => (
  <Fieldset legend="Where should we send the money?" error="Select where to send the money">
    <Radio name="e" label="Ataraxia account ending in 4821" aria-invalid />
    <Radio name="e" label="Another bank account" aria-invalid />
  </Fieldset>
) };
