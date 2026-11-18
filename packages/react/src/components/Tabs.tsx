import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import "./Tabs.css";

export interface TabItem { label: string; content: ReactNode }

/**
 * Figma: Tabs (Tab: Default, Selected, Focus). 2–5 related panels on the same page.
 * WAI-ARIA tabs pattern, automatic activation: tablist / tab / tabpanel, aria-selected, aria-controls,
 * one tab in the Tab order (roving tabindex); Left/Right arrows, Home and End move and select.
 */
export function Tabs({ label, items, defaultIndex = 0 }: { label: string; items: TabItem[]; defaultIndex?: number }) {
  const [selected, setSelected] = useState(defaultIndex);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const select = (i: number) => { setSelected(i); refs.current[i]?.focus(); };
  const onKey = (e: KeyboardEvent) => {
    const last = items.length - 1;
    const map: Record<string, number> = { ArrowRight: selected === last ? 0 : selected + 1, ArrowLeft: selected === 0 ? last : selected - 1, Home: 0, End: last };
    if (e.key in map) { e.preventDefault(); select(map[e.key]); }
  };
  return (
    <div className="ds-tabs">
      <div role="tablist" aria-label={label} className="ds-tabs__list" onKeyDown={onKey}>
        {items.map((t, i) => (
          <button key={t.label} ref={(el) => { refs.current[i] = el; }} type="button" role="tab" id={`${base}-tab-${i}`} aria-selected={i === selected} aria-controls={`${base}-panel-${i}`} tabIndex={i === selected ? 0 : -1} className="ds-tab" onClick={() => setSelected(i)}>
            {t.label}
          </button>
        ))}
      </div>
      {items.map((t, i) => (
        <div key={t.label} role="tabpanel" id={`${base}-panel-${i}`} aria-labelledby={`${base}-tab-${i}`} hidden={i !== selected} tabIndex={0} className="ds-tabs__panel">
          {t.content}
        </div>
      ))}
    </div>
  );
}
