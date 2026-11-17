// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "../..";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header, args: { serviceName: "Ataraxia", links: [{ label: "Home", href: "#" }, { label: "Shop", href: "#s", current: true }, { label: "Support", href: "#h" }] },
  parameters: { layout: "fullscreen", docs: { description: { component: "Service name and main navigation. Below 840 px the links move behind a Menu button.\n\n**When to use**\n\n- Every page, once.\n\n**When not to use**\n\n- More than 6 links; group them instead.\n\n**Accessibility**\n\n- nav with aria-label=\"Main\"; the current page has aria-current=\"page\".\n- Menu button with aria-expanded.\n\n**Tokens used**\n\n`--border-width-2`, `--color-surface-inverse`, `--color-text-inverse`, `--layout-margin-compact`, `--layout-margin-large`, `--size-icon`, `--size-target-min`, `--space-inline-lg`, `--space-inline-md`, `--space-inline-sm`, `--space-inset-md`, `--space-inset-sm`, `--typography-body`, `--typography-heading-4`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=30-82) \u00b7 **Code** [Header.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Header.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Header>;
export const Default: S = {};
