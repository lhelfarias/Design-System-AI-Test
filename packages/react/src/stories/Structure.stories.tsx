import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header, Breadcrumbs, Footer, SummaryList, TitleBand, Panel } from "..";

const meta: Meta = { title: "Components/Page structure", parameters: { layout: "fullscreen" } };
export default meta;
type S = StoryObj;
const links = [{ label: "Home", href: "#" }, { label: "Shop", href: "#s" }, { label: "Card", href: "#c", current: true }, { label: "Support", href: "#h" }];

export const HeaderLarge: S = { render: () => <Header serviceName="Ataraxia" links={links} /> };
export const BreadcrumbsDefault: S = { render: () => <div style={{ padding: 24 }}><Breadcrumbs items={[{ label: "Home", href: "#" }, { label: "Card", href: "#c" }, { label: "Cash advance" }]} /></div> };
export const TitleBandDefault: S = {
  render: () => (
    <TitleBand>
      <Breadcrumbs items={[{ label: "Home", href: "#" }, { label: "Card" }]} />
      <h1 style={{ margin: 0, font: "var(--typography-heading-1)" }}>Page title</h1>
    </TitleBand>
  ),
};
const rows = [{ key: "Amount", value: "$500.00" }, { key: "Monthly payment", value: "$46.99" }, { key: "Total cost", value: "$563.88" }];
export const SummaryListInGlass: S = { render: () => <div style={{ padding: 24, maxWidth: 560 }}><Panel variant="glass"><SummaryList rows={rows} /></Panel></div> };
export const SummaryListWithActions: S = { render: () => <div style={{ padding: 24 }}><SummaryList rows={rows.map((r) => ({ ...r, action: { label: "Change", href: "#" } }))} /></div> };
export const FooterDefault: S = { render: () => <Footer links={[{ label: "Help", href: "#h" }, { label: "Privacy", href: "#p" }]} legal="© 2026 Ataraxia." /> };
