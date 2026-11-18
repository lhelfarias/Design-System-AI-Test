// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "../..";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs, args: { label: "Card details", items: [{ label: "Overview", content: "Your card at a glance." }, { label: "Fees", content: "Annual fee $0. Cash advance fee 1.9% monthly." }, { label: "Limits", content: "Credit line $2,000." }] },
  parameters: { docs: { description: { component: "Switches between 2 to 5 related panels on the same page.\n\n**When to use**\n\n- Related content that people compare or read one at a time\n\n**When not to use**\n\n- Steps of a process: use Step indicator\n- Navigation between pages\n\n**Accessibility**\n\n- WAI-ARIA tabs pattern: tablist, tab, tabpanel, aria-selected, aria-controls\n- Left and Right arrows, Home and End move and select; one tab in the Tab order\n\n**Tokens used**\n\n`--border-width-default`, `--border-width-strong`, `--color-action-primary-default`, `--color-text-link`, `--size-target-min`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=31-79) · **Code** [Tabs.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Tabs.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Tabs>;
export const Default: S = {};

