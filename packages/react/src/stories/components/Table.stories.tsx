// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "../..";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table, args: { caption: "Top tracks", columns: ["Track", "Streams", "Change"], rows: [["Night Drive", "84,200", "+14%"], ["Still Water", "61,050", "+6%"]], numeric: [1, 2] },
  parameters: { docs: { description: { component: "Compare rows of data on desktop. On mobile, prefer Summary list.\n\n**When to use**\n\n- Comparing values across rows and columns.\n\n**When not to use**\n\n- Layout; more than 5 columns on mobile.\n\n**Accessibility**\n\n- Caption (hidden), th scope col and row; numbers right-aligned with tabular figures.\n\n**Tokens used**\n\n`--border-width-1`, `--border-width-2`, `--color-border-subtle`, `--color-text-default`, `--space-inline-md`, `--space-stack-sm`, `--typography-body`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=34-173) \u00b7 **Code** [Content.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Content.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Table>;
export const Default: S = {};
