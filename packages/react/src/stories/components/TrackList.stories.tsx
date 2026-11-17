// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrackList } from "../..";

const meta: Meta<typeof TrackList> = {
  title: "Components/Track list",
  component: TrackList, args: { tracks: [{ title: "Quiet Orbit", artist: "Mira Sol", album: "Afterlight", duration: "3:42" }, { title: "Low Tide", artist: "Hollow Fields", album: "Open Hours", duration: "4:05" }], current: 0, onPlay: () => {} },
  parameters: { docs: { description: { component: "A table of songs. Each row is the Figma Track row component.\n\n**When to use**\n\n- Playlists and albums.\n\n**When not to use**\n\n- Very long lists without pagination.\n\n**Accessibility**\n\n- Table with a hidden caption; each play button names the song and the artist.\n\n**Tokens used**\n\n`--border-width-1`, `--color-border-subtle`, `--color-surface-brand-subtle`, `--color-text-brand`, `--color-text-muted`, `--size-icon`, `--size-target-min`, `--space-12`, `--space-inline-md`, `--space-inline-sm`, `--space-stack-sm`, `--space-stack-xs`, `--typography-body`, `--typography-body-sm`, `--typography-label`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=41-198) \u00b7 **Code** [Music.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Music.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof TrackList>;
export const Default: S = {};
