// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackLink } from "../..";

const meta: Meta<typeof BackLink> = {
  title: "Components/Back link",
  component: BackLink, args: { href: "#", children: "Back" },
  parameters: { docs: { description: { component: "Returns to the previous step of a transaction.\n\n**When to use**\n\n- Steps of a form or checkout, at the top before the h1\n\n**When not to use**\n\n- Together with Breadcrumbs\n- Pages that are not a sequence\n\n**Accessibility**\n\n- A real link with visible text; the arrow is decorative\n- 44 px target\n\n**Tokens used**\n\n`--color-text-link`, `--size-icon`, `--size-target-min`, `--space-inline-xs`, `--typography-body`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=27-100) · **Code** [Navigation.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Navigation.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof BackLink>;
export const Default: S = {};

