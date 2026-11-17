// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "../..";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon button",
  component: IconButton, args: { icon: "pause", label: "Pause", variant: "primary" },
  parameters: { docs: { description: { component: "A compact action shown only as an icon, with a required accessible label.\n\n**When to use**\n\n- Repeated compact actions: play, next, like.\n\n**When not to use**\n\n- The main action of a page: use Button with text.\n\n**Accessibility**\n\n- label is required; aria-pressed for toggles; 44 px target.\n\n**Tokens used**\n\n`--color-action-primary-default`, `--color-action-primary-foreground`, `--color-action-primary-hover`, `--color-action-secondary-hover-bg`, `--color-surface-brand-subtle`, `--color-text-brand`, `--radius-full`, `--size-icon`, `--size-target-min`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=41-189) \u00b7 **Code** [Music.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Music.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof IconButton>;
export const Primary: S = {};
export const GhostToggle: S = { args: { icon: "heart", label: "Like", variant: "ghost", pressed: true } };
