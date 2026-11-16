import type { ReactNode } from "react";
import { Header, TitleBand, Footer } from "..";
import "./Shell.css";

/** The six example screens. Each one is a "consumer team" page built only from the library. */
export const ROUTES = [
  { id: "product", label: "Home" },
  { id: "store", label: "Shop" },
  { id: "music", label: "Music" },
  { id: "simulator", label: "Card" },
  { id: "help", label: "Support" },
  { id: "analytics", label: "Analytics" },
] as const;
export type RouteId = (typeof ROUTES)[number]["id"];

/** Page recipe (ai-context/patterns.md): skip link, header, optional title band, main, footer. */
export function Shell({ current, band, children, mainClassName }: { current: RouteId; band?: ReactNode; children: ReactNode; mainClassName?: string }) {
  return (
    <>
      <a className="page-skip" href="#main">Skip to main content</a>
      <Header serviceName="Ataraxia" homeHref="#product" links={ROUTES.map((r) => ({ label: r.label, href: `#${r.id}`, current: r.id === current }))} />
      {band && <TitleBand>{band}</TitleBand>}
      <main id="main" tabIndex={-1} className={mainClassName ?? "page-main"}>{children}</main>
      <Footer
        links={[{ label: "Help", href: "#help" }, { label: "Privacy", href: "#privacy" }, { label: "Cookies", href: "#cookies" }, { label: "Accessibility statement", href: "#a11y" }, { label: "Contact", href: "#contact" }]}
        legal="© 2026 Ataraxia. Example brand for design system tests."
      />
    </>
  );
}

/** Title band content: heading and lead on the left, an optional control on the right. */
export function BandHeading({ title, lead, meta, control }: { title: string; lead?: string; meta?: string; control?: ReactNode }) {
  return (
    <div className="page-band">
      <div className="page-band__text">
        <h1>{title}</h1>
        {lead && <p className="page-band__lead">{lead}</p>}
        {meta && <p className="page-band__meta">{meta}</p>}
      </div>
      {control && <div className="page-band__control">{control}</div>}
    </div>
  );
}
