// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkipLink } from "../..";

const meta: Meta<typeof SkipLink> = {
  title: "Components/Skip link",
  component: SkipLink, args: { href: "#main" },
  parameters: { docs: { description: { component: "First focusable element of every page. Hidden until it receives keyboard focus. Press Tab in the canvas to see it.\n\n**When to use**\n\n- Every page, before the header\n\n**When not to use**\n\n- Anywhere else on the page\n\n**Accessibility**\n\n- Moves focus to main (WCAG 2.4.1)\n- Visible when focused (2.4.7)\n\n**Tokens used**\n\n`--color-surface-default`, `--color-text-link`, `--size-target-min`, `--space-inset-sm`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=27-109) · **Code** [Navigation.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Navigation.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof SkipLink>;
export const Default: S = {};

