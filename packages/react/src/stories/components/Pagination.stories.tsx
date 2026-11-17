// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "../..";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination, args: { current: 2, total: 8, label: "Product pages" },
  parameters: { docs: { description: { component: "Move between pages of a long list.\n\n**When to use**\n\n- Lists longer than one screen with a known number of pages.\n\n**When not to use**\n\n- Fewer than 2 pages.\n\n**Accessibility**\n\n- nav with a label; current page with aria-current=\"page\"; hidden \"page\" in link names; 44 px targets.\n\n**Tokens used**\n\n`--color-action-primary-default`, `--color-action-primary-foreground`, `--color-text-link`, `--color-text-muted`, `--radius-control`, `--size-target-min`, `--space-inline-sm`, `--space-inline-xs`, `--space-inset-sm`, `--typography-body`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=31-89) \u00b7 **Code** [Content.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Content.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Pagination>;
export const Default: S = {};
