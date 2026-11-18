import type { AnchorHTMLAttributes, ReactNode } from "react";
import "./Navigation.css";

/** Figma: Link. Always underlined (color is never the only signal). The text says where it goes. Navigates; for actions use Button. */
export function Link({ children, className, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return <a className={["ds-link", className].filter(Boolean).join(" ")} {...rest}>{children}</a>;
}

/** Figma: Back link. Returns to the previous step of a transaction. Top of the page, before the h1. Not together with Breadcrumbs. */
export function BackLink({ href, children = "Back" }: { href: string; children?: ReactNode }) {
  return (
    <a className="ds-back-link" href={href}>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" /></svg>
      {children}
    </a>
  );
}

/** Figma: Skip link. First focusable element of every page; hidden until it receives keyboard focus; moves focus to main. */
export function SkipLink({ href = "#main", children = "Skip to main content" }: { href?: string; children?: ReactNode }) {
  return <a className="ds-skip-link" href={href}>{children}</a>;
}

/** Figma: Divider. Decorative separator between groups. Not a substitute for headings. */
export function Divider() {
  return <hr className="ds-divider" />;
}
