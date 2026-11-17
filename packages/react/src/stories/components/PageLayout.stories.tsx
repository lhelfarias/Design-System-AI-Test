// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel, TitleBand, Breadcrumbs, Container } from "../..";

const meta: Meta<typeof Panel> = {
  title: "Components/Page layout",
  component: Panel,
  parameters: { layout: "fullscreen", docs: { description: { component: "Container, TitleBand and Panel: the page recipe. The title band is always in tv mode; panels are solid (forms, long text) or glass (cards, summaries).\n\n**When to use**\n\n- Solid panel behind forms and long text; glass for cards, stats and summaries.\n\n**When not to use**\n\n- Glass behind forms or long text; decorative shapes behind panels.\n\n**Accessibility**\n\n- The band switches its content to the tv values, so text keeps 4.5:1 on navy.\n\n**Tokens used**\n\n`--border-width-1`, `--color-border-subtle`, `--color-surface-band`, `--color-surface-default`, `--color-surface-glass`, `--color-text-default`, `--effect-blur-surface`, `--layout-margin-compact`, `--layout-margin-large`, `--layout-max-width`, `--layout-section-gap-compact`, `--radius-container`, `--space-inset-lg`, `--space-inset-xl`, `--space-stack-lg`, `--space-stack-xl`\n\n**Figma** Built from Figma page \"Music App\" (no single component). \u00b7 **Code** [Layout.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Layout.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof Panel>;
export const TitleBandAndPanels: S = { render: () => (
  <>
    <TitleBand>
      <Breadcrumbs items={[{ label: "Home", href: "#" }, { label: "Card" }]} />
      <h1 style={{ margin: 0, font: "var(--typography-heading-1)" }}>Page title</h1>
    </TitleBand>
    <div style={{ padding: "var(--space-inset-xl) 0", background: "var(--color-surface-subtle)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <Panel variant="solid" padding="xl"><p style={{ margin: 0 }}>Solid panel: forms and long text.</p></Panel>
          <Panel variant="glass"><p style={{ margin: 0 }}>Glass panel: cards and summaries.</p></Panel>
        </div>
      </Container>
    </div>
  </>
) };
