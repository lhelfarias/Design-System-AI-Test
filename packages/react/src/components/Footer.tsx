import "./Footer.css";

/** Figma: Footer */
export function Footer({ links, legal }: { links: { label: string; href: string }[]; legal: string }) {
  return (
    <footer className="ds-footer">
      <ul className="ds-footer__links">
        {links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
      </ul>
      <p className="ds-footer__legal">{legal}</p>
    </footer>
  );
}
