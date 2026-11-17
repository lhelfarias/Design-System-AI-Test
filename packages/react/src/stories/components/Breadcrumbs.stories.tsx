// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "../..";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs, args: { items: [{ label: "Home", href: "#" }, { label: "Card", href: "#c" }, { label: "Cash advance" }] },
  parameters: { docs: { description: { component: "Shows where the page sits in the hierarchy.\n\n**When to use**\n\n- Pages two or more levels deep.\n\n**When not to use**\n\n- Transactions and forms with steps.\n\n**Accessibility**\n\n- nav aria-label=\"Breadcrumb\"; the last item is the current page, not a link.\n\n**Tokens used**\n\n`--color-text-default`, `--color-text-link`, `--color-text-link-hover`, `--color-text-muted`, `--space-inline-sm`, `--typography-body-sm`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=27-101) \u00b7 **Code** [Breadcrumbs.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Breadcrumbs.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Breadcrumbs>;
export const Default: S = {};
