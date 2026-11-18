// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../..";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link, args: { href: "#", children: "How a cash advance works" },
  parameters: { docs: { description: { component: "A link that navigates. Always underlined.\n\n**When to use**\n\n- Moving to another page or place\n\n**When not to use**\n\n- Actions on the page: use Button\n\n**Accessibility**\n\n- Underlined, so color is never the only signal (WCAG 1.4.1)\n- The text says where it goes (2.4.4)\n\n**Tokens used**\n\n`--color-text-link`, `--color-text-link-hover`, `--focus-ring-width`, `--focus-ring-color`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=27-90) · **Code** [Navigation.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Navigation.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Link>;
export const Default: S = {};

