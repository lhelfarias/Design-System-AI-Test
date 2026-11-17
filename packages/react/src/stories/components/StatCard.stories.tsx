// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatCard } from "../..";

const meta: Meta<typeof StatCard> = {
  title: "Components/Stat card",
  component: StatCard, args: { label: "Streams", value: "312,400", change: "+8% vs last month", trend: "up" }, decorators: [(Story) => <div style={{ maxWidth: 260 }}><Story /></div>],
  parameters: { docs: { description: { component: "One key figure with its change.\n\n**When to use**\n\n- Dashboards: 2 to 4 figures in a row.\n\n**When not to use**\n\n- More than 4 in a row; long text.\n\n**Accessibility**\n\n- The change is text with a sign and an icon: never color alone.\n\n**Tokens used**\n\n`--color-feedback-error-foreground`, `--color-feedback-success-foreground`, `--color-text-muted`, `--size-icon`, `--space-inline-sm`, `--space-inset-lg`, `--space-stack-sm`, `--typography-body-sm`, `--typography-heading-2`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=56-181) \u00b7 **Code** [Content.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Content.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof StatCard>;
export const Up: S = {};
export const Down: S = { args: { label: "Average listening time", value: "2:48", change: "-4% vs last month", trend: "down" } };
