// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "../..";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag, args: { children: "New", type: "brand" },
  parameters: { docs: { description: { component: "A short status label: New, Sale, Bestseller.\n\n**When to use**\n\n- One or two words that describe state.\n\n**When not to use**\n\n- Actions: tags are not clickable.\n\n**Accessibility**\n\n- Text always; color is never the only signal.\n\n**Tokens used**\n\n`--tag-brand-background`, `--tag-brand-foreground`, `--tag-error-background`, `--tag-error-foreground`, `--tag-info-background`, `--tag-info-foreground`, `--tag-neutral-background`, `--tag-neutral-foreground`, `--tag-padding-x`, `--tag-padding-y`, `--tag-radius`, `--tag-success-background`, `--tag-success-foreground`, `--tag-typography`, `--tag-warning-background`, `--tag-warning-foreground`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=23-32) \u00b7 **Code** [Content.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Content.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Tag>;
export const Brand: S = {};
export const AllTypes: S = { render: () => <div style={{ display: "flex", gap: 8 }}>{(["neutral", "brand", "success", "error", "warning", "info"] as const).map((t) => <Tag key={t} type={t}>{t}</Tag>)}</div> };
