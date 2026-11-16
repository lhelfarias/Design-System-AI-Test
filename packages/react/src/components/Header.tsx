import { useId, useState } from "react";
import "./Header.css";

export interface HeaderLinkItem { label: string; href: string; /** Figma: Header link State=Current */ current?: boolean }

export interface HeaderProps {
  /** Figma: Service name */
  serviceName: string;
  homeHref?: string;
  links: HeaderLinkItem[];
}

/**
 * Figma: Header (Size=Large above 840 px, Size=Compact below).
 * The size switch is done in CSS, so one component covers both variants.
 */
export function Header({ serviceName, homeHref = "/", links }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const navId = useId();
  return (
    <header className="ds-header">
      <a className="ds-header__service" href={homeHref}>{serviceName}</a>
      <button
        type="button"
        className="ds-header__menu"
        aria-expanded={open}
        aria-controls={navId}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" fill="currentColor" /></svg>
        Menu
      </button>
      <nav id={navId} aria-label="Main" className={["ds-header__nav", open && "ds-header__nav--open"].filter(Boolean).join(" ")}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="ds-header__link" aria-current={l.current ? "page" : undefined}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
