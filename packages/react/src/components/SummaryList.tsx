import "./SummaryList.css";

export interface SummaryRow { key: string; value: string; action?: { label: string; href: string } }

/** Figma: Summary list. A description list; on narrow containers key and value share a row. */
export function SummaryList({ rows }: { rows: SummaryRow[] }) {
  return (
    <dl className="ds-summary-list">
      {rows.map((r) => (
        <div key={r.key} className="ds-summary-list__row">
          <dt className="ds-summary-list__key">{r.key}</dt>
          <dd className="ds-summary-list__value">{r.value}</dd>
          {r.action && (
            <dd className="ds-summary-list__action">
              <a href={r.action.href}>{r.action.label}<span className="ds-visually-hidden"> {r.key.toLowerCase()}</span></a>
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
