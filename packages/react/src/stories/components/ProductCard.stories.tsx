// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductCard } from "../..";

const meta: Meta<typeof ProductCard> = {
  title: "Components/Product card",
  component: ProductCard, args: { name: "Ataraxia Halo", description: "Wireless headphones with adaptive noise cancelling.", price: "$299", tag: { label: "New" } }, decorators: [(Story) => <div style={{ maxWidth: 288, display: "flex" }}><Story /></div>],
  parameters: { docs: { description: { component: "A product in a listing: image, tag, name, description, price and add to cart.\n\n**When to use**\n\n- Store listings in a grid (3, 2 or 1 columns).\n\n**When not to use**\n\n- Product detail pages.\n\n**Accessibility**\n\n- The name is the only link, stretched over the card; the button stays above it.\n- Button name includes the product: \"Add to cart: Ataraxia Halo\" (visible text first).\n\n**Tokens used**\n\n`--border-width-1`, `--card-border-hover`, `--color-border-subtle`, `--color-surface-brand-subtle`, `--color-surface-glass`, `--color-text-brand`, `--color-text-default`, `--color-text-link`, `--color-text-muted`, `--effect-blur-surface`, `--focus-ring-color`, `--focus-ring-offset`, `--focus-ring-width`, `--radius-container`, `--space-inset-lg`, `--space-stack-sm`, `--typography-body-sm`, `--typography-heading-4`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=45-202) \u00b7 **Code** [Content.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Content.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof ProductCard>;
export const Default: S = {};
export const WithoutTag: S = { args: { tag: undefined } };
