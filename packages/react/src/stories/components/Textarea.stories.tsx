// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "../..";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea, args: { label: "Message", hint: "Do not include personal information" },
  parameters: { docs: { description: { component: "Multi-line text entry. The height grows with the content.\n\n**When to use**\n\n- Free text longer than one line\n\n**When not to use**\n\n- Short answers: use Text input\n\n**Accessibility**\n\n- Visible label; hint and error linked with aria-describedby\n- Error shows the Error message and a 2 px border, not only color\n\n**Tokens used**\n\n`--text-input-border-width`, `--text-input-border-width-error`, `--text-input-padding-x`, `--text-input-radius`, `--text-input-typography`, `--color-border-control`, `--color-border-error`, `--size-target-min`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=26-91) · **Code** [TextInput.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/TextInput.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Textarea>;
export const Default: S = {};
export const WithError: S = { args: { error: "Enter a message" } };
