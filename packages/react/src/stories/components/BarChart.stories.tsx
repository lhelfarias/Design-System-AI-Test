// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChart } from "../..";

const meta: Meta<typeof BarChart> = {
  title: "Components/Bar chart",
  component: BarChart, args: { title: "Listeners per day", data: [["Mon", 4100], ["Tue", 5000], ["Wed", 3400], ["Thu", 6000]].map(([label, value]) => ({ label: String(label), value: Number(value) })), summary: "Highest on Thursday (6,000). Lowest on Wednesday (3,400)." }, decorators: [(Story) => <div style={{ maxWidth: 480 }}><Story /></div>],
  parameters: { docs: { description: { component: "Compare up to 7 categories, with a text summary.\n\n**When to use**\n\n- A few categories over time or by group.\n\n**When not to use**\n\n- More than 7 bars; exact values (use a table).\n\n**Accessibility**\n\n- figure with a caption; the summary text carries the key values for everyone.\n\n**Tokens used**\n\n`--color-action-primary-default`, `--color-text-muted`, `--space-16`, `--space-inline-sm`, `--space-inset-lg`, `--space-stack-md`, `--space-stack-sm`, `--typography-body-sm`, `--typography-caption`, `--typography-heading-4`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=56-182) \u00b7 **Code** [Content.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Content.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof BarChart>;
export const Default: S = {};
