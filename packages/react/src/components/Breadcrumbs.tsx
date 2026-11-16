import "./Breadcrumbs.css";

export interface Crumb { label: string; href?: string }

/** Figma: Breadcrumbs. The last item is the current page and is not a link. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="ds-breadcrumbs">
      <ol>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label}>
              {last || !c.href ? <span aria-current={last ? "page" : undefined}>{c.label}</span> : <a href={c.href}>{c.label}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
