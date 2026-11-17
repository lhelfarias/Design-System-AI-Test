// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "../..";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion, args: { items: [{ title: "How long does the money take to arrive?", open: true, content: "Usually within one business day." }, { title: "Can I pay the advance early?", content: "Yes, at any time." }] },
  parameters: { docs: { description: { component: "Sections that open and close: FAQs and optional detail.\n\n**When to use**\n\n- Content most people do not need.\n\n**When not to use**\n\n- Hiding information everyone needs.\n\n**Accessibility**\n\n- Native details and summary: keyboard and screen readers work by default.\n\n**Tokens used**\n\n`--border-width-1`, `--color-border-subtle`, `--color-text-link`, `--size-target-min`, `--space-1`, `--space-inline-md`, `--space-stack-md`, `--space-stack-sm`, `--typography-body`, `--typography-heading-4`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=31-121) \u00b7 **Code** [Content.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Content.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Accordion>;
export const Default: S = {};
