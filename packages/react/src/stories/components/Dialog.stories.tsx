// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, Button } from "../..";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: { docs: { description: { component: "A modal dialog for a confirmation or a short form.\n\n**When to use**\n\n- A decision that must be taken before continuing\n\n**When not to use**\n\n- Information that can stay on the page: use Notification banner\n- Long forms\n\n**Accessibility**\n\n- Native dialog with showModal: the page behind is inert, focus moves in, Escape closes (WCAG technique H102)\n- Focus returns to the button that opened it\n- Close button 44 px named \"Close\"; title linked with aria-labelledby\n\n**Tokens used**\n\n`--color-surface-default`, `--color-surface-inverse`, `--radius-container`, `--size-target-min`, `--space-inset-xl`, `--typography-heading-3`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=34-229) · **Code** [Dialog.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Dialog.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Dialog>;
function Demo() {
  const [open, setOpen] = useState(false);
  return (<>
    <Button onClick={() => setOpen(true)}>Cancel the request</Button>
    <Dialog open={open} onClose={() => setOpen(false)} title="Cancel this request?" actions={<><Button onClick={() => setOpen(false)}>Yes, cancel</Button><Button variant="secondary" onClick={() => setOpen(false)}>Keep it</Button></>}>
      <p>Your simulation will not be saved.</p>
    </Dialog>
  </>);
}
export const Confirmation: S = { render: () => <Demo /> };
