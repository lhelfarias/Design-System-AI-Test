// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryList } from "../..";

const meta: Meta<typeof SummaryList> = {
  title: "Components/Summary list",
  component: SummaryList, args: { rows: [{ key: "Amount", value: "$500.00" }, { key: "Monthly payment", value: "$46.99" }, { key: "Total cost", value: "$563.88" }] },
  parameters: { docs: { description: { component: "Key and value pairs, for summaries and for tables on mobile.\n\n**When to use**\n\n- Reviewing answers; showing a simulation result; replacing a table below 600 px.\n\n**When not to use**\n\n- Comparing many rows: use Table on desktop.\n\n**Accessibility**\n\n- Description list (dl, dt, dd).\n- Action links name the row: \"Change amount\".\n\n**Tokens used**\n\n`--border-width-1`, `--color-border-subtle`, `--color-text-link`, `--space-inline-md`, `--space-stack-md`, `--typography-body`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=32-122) \u00b7 **Code** [SummaryList.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/SummaryList.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof SummaryList>;
export const Default: S = {};
export const WithActions: S = { args: { rows: [{ key: "Amount", value: "$500.00", action: { label: "Change", href: "#" } }] } };
