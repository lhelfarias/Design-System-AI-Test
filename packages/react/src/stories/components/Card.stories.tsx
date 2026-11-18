// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../..";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card, args: { title: "How a cash advance works", body: "Move money from your card to a bank account and pay it back in installments.", href: "#", image: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3v10.55A4 4 0 1014 17V7h4V3z" /></svg> },
  parameters: { docs: { description: { component: "A block of linked content: optional 16:9 image, title, body and actions.\n\n**When to use**\n\n- A list of articles, offers or related content\n\n**When not to use**\n\n- Products with a price: use Product card\n- Long text: use a white panel\n\n**Accessibility**\n\n- Clickable: the title is the only link and covers the card; buttons stay above it\n- Focus ring on the whole card\n\n**Tokens used**\n\n`--card-padding`, `--card-gap`, `--card-radius`, `--card-border-width`, `--card-border-hover`, `--card-title-typography`, `--card-body-typography`, `--layout-card-min-width`, `--focus-ring-radius-container`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=22-20) · **Code** [Card.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Card.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Card>;
export const Default: S = {};
export const Static: S = { args: { href: undefined } };
