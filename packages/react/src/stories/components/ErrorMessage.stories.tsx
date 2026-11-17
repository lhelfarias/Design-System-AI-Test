// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorMessage } from "../..";

const meta: Meta<typeof ErrorMessage> = {
  title: "Components/Error message",
  component: ErrorMessage, args: { id: "amount-error", children: "Enter an amount between $50 and $2,000" },
  parameters: { docs: { description: { component: "Explains what is wrong with a field and how to fix it.\n\n**When to use**\n\n- Say how to fix it: \"Enter an amount between $50 and $2,000\".\n\n**When not to use**\n\n- Showing errors before the person submits; never as the first view of a screen.\n\n**Accessibility**\n\n- Hidden \"Error:\" prefix so it is not color alone.\n- Linked to its field with aria-describedby.\n\n**Tokens used**\n\n`--color-feedback-error-foreground`, `--error-message-gap`, `--error-message-typography`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=16-3) \u00b7 **Code** [ErrorMessage.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/ErrorMessage.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof ErrorMessage>;
export const Default: S = {};
