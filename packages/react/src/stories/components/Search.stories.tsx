// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "../..";

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search, args: {},
  parameters: { docs: { description: { component: "Site search: a labelled field and a Search button.\n\n**When to use**\n\n- A second way to find pages (WCAG 2.4.5)\n\n**When not to use**\n\n- Filtering a list on the page: use filters\n\n**Accessibility**\n\n- form role search (landmark)\n- The label stays visible; the placeholder is never the label\n\n**Tokens used**\n\n`--text-input-label-gap`, `--text-input-padding-x`, `--color-border-control`, `--space-inline-sm`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=30-91) · **Code** [Search.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Search.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Search>;
export const Default: S = {};

