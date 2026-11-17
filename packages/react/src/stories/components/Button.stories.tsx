// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../..";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button, args: { children: "Continue" },
  parameters: { docs: { description: { component: "Starts an action on the page: submit a form, open a dialog, add to cart.\n\n**When to use**\n\n- One primary button per area; secondary for the other actions.\n- Label says the action: \"Continue\", \"Add to cart\".\n\n**When not to use**\n\n- To go to another page: use a link (a link styled as a button is fine when it navigates).\n- Icon-only buttons: use Icon button with a label.\n\n**Accessibility**\n\n- Minimum height 44 px (size.target-min).\n- Visible text always; an icon is decorative (aria-hidden).\n- Disabled buttons are exempt from contrast, but avoid them: explain what is missing instead.\n\n**Tokens used**\n\n`--button-border-width`, `--button-gap`, `--button-icon-size`, `--button-padding-x`, `--button-primary-background`, `--button-primary-background-hover`, `--button-primary-background-pressed`, `--button-primary-foreground`, `--button-radius`, `--button-secondary-background`, `--button-secondary-background-hover`, `--button-secondary-background-pressed`, `--button-secondary-border`, `--button-secondary-foreground`, `--button-typography`, `--color-action-disabled-background`, `--color-action-disabled-border`, `--color-action-disabled-foreground`, `--size-target-min`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=6-82) \u00b7 **Code** [Button.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Button.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Button>;
export const Primary: S = {};
export const Secondary: S = { args: { variant: "secondary", children: "Cancel" } };
export const Disabled: S = { args: { disabled: true } };
export const FullWidth: S = { args: { fullWidth: true } };
