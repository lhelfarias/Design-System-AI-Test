// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavItem } from "../..";

const meta: Meta<typeof NavItem> = {
  title: "Components/Nav item",
  component: NavItem, args: { icon: "library", href: "#", current: true, children: "Your library" }, decorators: [(Story) => <div style={{ width: 240 }}><Story /></div>],
  parameters: { docs: { description: { component: "A link in an app side navigation.\n\n**When to use**\n\n- App layouts with a side panel.\n\n**When not to use**\n\n- The site header: use Header.\n\n**Accessibility**\n\n- Current item with aria-current=\"page\"; 44 px target.\n\n**Tokens used**\n\n`--color-surface-brand-subtle`, `--color-surface-subtle`, `--color-text-brand`, `--color-text-default`, `--radius-control`, `--size-icon`, `--size-target-min`, `--space-inline-md`, `--space-inset-sm`, `--typography-body`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=41-191) \u00b7 **Code** [Music.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Music.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof NavItem>;
export const Current: S = {};
export const Default: S = { args: { icon: "home", current: false, children: "Home" } };
