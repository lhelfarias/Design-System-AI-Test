import { useId, useState, type ReactNode } from "react";
import "./Content.css";

/** Figma: Tag. Text label; color is never the only signal. */
export function Tag({ type = "neutral", children }: { type?: "neutral" | "brand" | "success" | "error" | "warning" | "info"; children: string }) {
  return <span className={`ds-tag ds-tag--${type}`}>{children}</span>;
}

/** Figma: Notification banner */
export function NotificationBanner({ type = "info", title, children }: { type?: "info" | "success" | "warning" | "error"; title: string; children: ReactNode }) {
  return (
    <div className={`ds-banner ds-banner--${type}`} role={type === "error" ? "alert" : "status"}>
      <svg className="ds-banner__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" /></svg>
      <div><p className="ds-banner__title">{title}</p><div className="ds-banner__body">{children}</div></div>
    </div>
  );
}

/** Figma: Accordion + Accordion item. Native details/summary: keyboard and state come from the browser. */
export function Accordion({ items }: { items: { title: string; content: ReactNode; open?: boolean }[] }) {
  return (
    <div className="ds-accordion">
      {items.map((it) => (
        <details key={it.title} className="ds-accordion__item" open={it.open}>
          <summary className="ds-accordion__title">{it.title}</summary>
          <div className="ds-accordion__content">{it.content}</div>
        </details>
      ))}
    </div>
  );
}

/** Figma: Table (Simple). Use SummaryList on compact screens. */
export function Table({ caption, columns, rows, numeric = [] }: { caption: string; columns: string[]; rows: string[][]; numeric?: number[] }) {
  return (
    <div className="ds-table-wrap">
      <table className="ds-table">
        <caption className="ds-visually-hidden">{caption}</caption>
        <thead><tr>{columns.map((c, i) => <th key={c} scope="col" className={numeric.includes(i) ? "is-num" : undefined}>{c}</th>)}</tr></thead>
        <tbody>{rows.map((r) => <tr key={r.join()}>{r.map((v, i) => i === 0 ? <th key={i} scope="row">{v}</th> : <td key={i} className={numeric.includes(i) ? "is-num" : undefined}>{v}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

/** Figma: Pagination */
export function Pagination({ current, total, label = "Pagination" }: { current: number; total: number; label?: string }) {
  const pages = [1, current - 1, current, current + 1, total].filter((p, i, a) => p >= 1 && p <= total && a.indexOf(p) === i).sort((a, b) => a - b);
  return (
    <nav aria-label={label} className="ds-pagination">
      <a href="#prev" className="ds-pagination__step" rel="prev"><span aria-hidden="true">←</span> Previous<span className="ds-visually-hidden"> page</span></a>
      <ul>
        {pages.map((p, i) => (
          <li key={p}>
            {i > 0 && p - pages[i - 1] > 1 && <span className="ds-pagination__gap" aria-hidden="true">…</span>}
            <a href={`#page-${p}`} aria-current={p === current ? "page" : undefined} className="ds-pagination__page"><span className="ds-visually-hidden">Page </span>{p}</a>
          </li>
        ))}
      </ul>
      <a href="#next" className="ds-pagination__step" rel="next">Next<span className="ds-visually-hidden"> page</span> <span aria-hidden="true">→</span></a>
    </nav>
  );
}

/** Figma: Product card. The name is the link, stretched over the card; the button stays above it. */
export function ProductCard({ name, description, price, tag, href = "#" }: { name: string; description: string; price: string; tag?: { label: string; type?: "brand" | "success" | "warning" | "info" | "neutral" }; href?: string }) {
  const [added, setAdded] = useState(false);
  return (
    <article className="ds-product-card ds-glass">
      <div className="ds-product-card__media" aria-hidden="true"><HeadphonesIcon /></div>
      <div className="ds-product-card__body">
        {tag && <Tag type={tag.type ?? "brand"}>{tag.label}</Tag>}
        <h3 className="ds-product-card__name"><a href={href} className="ds-stretched-link">{name}</a></h3>
        <p className="ds-product-card__description">{description}</p>
        <p className="ds-product-card__price">{price}</p>
        <button type="button" className="ds-button ds-button--secondary ds-product-card__action" onClick={() => setAdded(true)}>
          {added ? "Added" : "Add to cart"}<span className="ds-visually-hidden">: {name}</span>
        </button>
      </div>
    </article>
  );
}

/** Figma: Stat card. The change is text with a sign and an icon. */
export function StatCard({ label, value, change, trend }: { label: string; value: string; change: string; trend: "up" | "down" }) {
  return (
    <div className="ds-stat ds-glass">
      <p className="ds-stat__label">{label}</p>
      <p className="ds-stat__value">{value}</p>
      <p className={`ds-stat__change ds-stat__change--${trend}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={trend === "up" ? "M16 6l2.3 2.3-4.9 4.9-4-4L2 16.6 3.4 18l6-6 4 4 6.3-6.3L22 12V6z" : "M16 18l2.3-2.3-4.9-4.9-4 4L2 7.4 3.4 6l6 6 4-4 6.3 6.3L22 12v6z"} /></svg>
        {change}
      </p>
    </div>
  );
}

/** Figma: Bar chart. Bars are drawn to one scale; the text summary carries the key values. */
export function BarChart({ title, data, summary }: { title: string; data: { label: string; value: number }[]; summary: string }) {
  const id = useId();
  const max = Math.max(...data.map((d) => d.value));
  return (
    <figure className="ds-chart ds-glass" aria-labelledby={id}>
      <figcaption id={id} className="ds-chart__title">{title}</figcaption>
      <div className="ds-chart__plot" aria-hidden="true">
        {data.map((d) => (
          <div key={d.label} className="ds-chart__col">
            <div className="ds-chart__bar" style={{ height: `${(d.value / max) * 100}%` }} title={`${d.label}: ${d.value.toLocaleString("en-US")}`} />
            <span className="ds-chart__label">{d.label}</span>
          </div>
        ))}
      </div>
      <p className="ds-chart__summary">{summary}</p>
    </figure>
  );
}

export function HeadphonesIcon() {
  return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 00-9 9v7a2 2 0 002 2h3v-8H5v-1a7 7 0 0114 0v1h-3v8h3a2 2 0 002-2v-7a9 9 0 00-9-9zM7 15v4H5v-4zm12 4h-2v-4h2z" /></svg>;
}
export function NoteIcon() {
  return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3v10.55A4 4 0 1014 17V7h4V3z" /></svg>;
}
