// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlbumTile } from "../..";

const meta: Meta<typeof AlbumTile> = {
  title: "Components/Album tile",
  component: AlbumTile, args: { title: "Afterlight" },
  parameters: { docs: { description: { component: "TV tile for an album. The cover uses size.media.md.\n\n**When to use**\n\n- Rows of albums on TV\n\n**When not to use**\n\n- Desktop lists: use Track list\n\n**Accessibility**\n\n- The tile is one link with the title as its name\n- On focus: ring and scale 1.05 (no scale with reduced motion)\n\n**Tokens used**\n\n`--size-media-md`, `--color-surface-brand-subtle`, `--focus-ring-radius-container`, `--layout-tv-focus-scale`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=41-227) · **Code** [Music.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Music.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof AlbumTile>;
export const Default: S = {};

