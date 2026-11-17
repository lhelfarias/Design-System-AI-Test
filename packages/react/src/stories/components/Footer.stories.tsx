// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "../..";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer, args: { links: [{ label: "Help", href: "#h" }, { label: "Privacy", href: "#p" }], legal: "© 2026 Ataraxia." },
  parameters: { layout: "fullscreen", docs: { description: { component: "Secondary links and the legal line.\n\n**When to use**\n\n- Every page, once.\n\n**When not to use**\n\n- Main navigation.\n\n**Accessibility**\n\n- footer landmark; links underlined.\n\n**Tokens used**\n\n`--border-width-1`, `--color-border-subtle`, `--color-surface-subtle`, `--color-text-link`, `--color-text-muted`, `--layout-margin-compact`, `--layout-margin-large`, `--space-inline-lg`, `--space-inset-lg`, `--space-inset-xl`, `--space-stack-md`, `--typography-body-sm`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=30-83) \u00b7 **Code** [Footer.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Footer.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Footer>;
export const Default: S = {};
