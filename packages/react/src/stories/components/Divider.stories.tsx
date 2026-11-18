// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "../..";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider, args: {},
  parameters: { docs: { description: { component: "A decorative line between groups of content.\n\n**When to use**\n\n- Separating groups inside a panel or a list\n\n**When not to use**\n\n- Instead of a heading: structure comes from headings\n\n**Accessibility**\n\n- Native hr; decorative\n\n**Tokens used**\n\n`--border-width-default`, `--color-border-subtle`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=27-112) · **Code** [Navigation.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Navigation.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Divider>;
export const Default: S = {};

