// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlayerBar } from "../..";

const meta: Meta<typeof PlayerBar> = {
  title: "Components/Player bar",
  component: PlayerBar, args: { track: { title: "Quiet Orbit", artist: "Mira Sol", album: "Afterlight", duration: "3:42" }, playing: true, onToggle: () => {}, onPrev: () => {}, onNext: () => {} },
  parameters: { layout: "padded", docs: { description: { component: "Now playing, play controls, progress and volume.\n\n**When to use**\n\n- Music app layouts, fixed at the bottom.\n\n**When not to use**\n\n- Pages without audio.\n\n**Accessibility**\n\n- Native range inputs with labels and aria-valuetext (\"1:24 of 3:42\").\n\n**Tokens used**\n\n`--border-width-1`, `--color-action-primary-default`, `--color-border-subtle`, `--color-surface-brand-subtle`, `--color-surface-default`, `--color-text-brand`, `--color-text-muted`, `--radius-container`, `--size-icon`, `--size-target-min`, `--space-12`, `--space-inline-lg`, `--space-inline-md`, `--space-inset-lg`, `--space-inset-md`, `--space-stack-xs`, `--typography-body-sm`, `--typography-caption`, `--typography-label`\n\n**Figma** Built from Figma page \"Music App\" (no single component). \u00b7 **Code** [Music.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Music.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof PlayerBar>;
export const Default: S = {};
