// Foundations pages for Storybook. Data comes from packages/tokens/docs/foundations.json (generated from tokens.json);
// swatches use the live CSS variables, so they always match tokens.css. The tv column renders inside data-theme="tv".
import type { CSSProperties, ReactNode } from "react";
import data from "../../../tokens/docs/foundations.json";

type Tok = { path: string; value: string; tv: string | null; alias: string | null; description: string; css: string };
const cell: CSSProperties = { padding: "8px 12px 8px 0", borderBottom: "1px solid var(--color-border-subtle)", verticalAlign: "middle", textAlign: "left" };
const mono: CSSProperties = { fontFamily: "ui-monospace, Menlo, monospace", fontSize: 13 };
const sw = (cssVar: string): CSSProperties => ({ width: 56, height: 32, borderRadius: 6, background: `var(${cssVar})`, border: "1px solid var(--color-border-subtle)" });

function Tv({ children }: { children: ReactNode }) {
  return <div data-theme="tv" style={{ display: "flex", alignItems: "center", gap: 8, padding: 6, borderRadius: 6, background: "var(--color-surface-subtle)", color: "var(--color-text-muted)" }}>{children}</div>;
}

export function ReferencePalette() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      {Object.entries(data.ramps as unknown as Record<string, { step: string; value: string; path: string }[]>).map(([ramp, steps]) => (
        <div key={ramp} style={{ display: "flex", gap: 8, alignItems: "flex-start", flexWrap: "wrap" }}>
          <strong style={{ width: 110, paddingTop: 12 }}>{ramp}</strong>
          {steps.map((s) => (
            <div key={s.step} style={{ width: 72, padding: ramp.includes("alpha") ? 4 : 0, borderRadius: 6, background: ramp.includes("alpha") ? "var(--color-blue-800)" : undefined, color: ramp.includes("alpha") ? "#FFFFFF" : undefined }}>
              <div style={{ ...sw(`--${s.path.replace(/\./g, "-")}`), width: "100%", height: 44 }} />
              <div style={{ fontSize: 12 }}>{s.step}</div>
              <div style={{ ...mono, fontSize: 11, opacity: 0.8 }}>{s.value}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function SystemColors({ group }: { group: string }) {
  const g = (data.groups as unknown as Record<string, { note: string; tokens: Tok[] }>)[group];
  return (
    <>
      <p>{g.note}</p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr><th style={cell}>Token</th><th style={cell}>Default</th><th style={cell}>tv</th><th style={cell}>Use</th></tr></thead>
        <tbody>
          {g.tokens.map((t) => (
            <tr key={t.path}>
              <td style={cell}><code style={mono}>{t.path}</code><br /><span style={{ ...mono, fontSize: 11, color: "var(--color-text-muted)" }}>var({t.css})</span></td>
              <td style={cell}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={sw(t.css)} /><span style={mono}>{t.value}</span></div></td>
              <td style={cell}><Tv><div style={sw(t.css)} /><span style={mono}>{t.tv}</span></Tv></td>
              <td style={cell}>{t.description || (t.alias ? `Points to ${t.alias}` : "")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function ContrastSummary() {
  const c = data.contrast as { mode: string; pair: string; ratio: number; minimum: number; pass: boolean }[];
  const failed = c.filter((x) => !x.pass).length;
  return (
    <>
      <p><strong>{c.length} pairs</strong> checked in both modes on every pull request, <strong>{failed} failing</strong>. Text 4.5:1 (WCAG 1.4.3); borders, controls and focus 3:1 (WCAG 1.4.11).</p>
      <details><summary>See all pairs</summary>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr><th style={cell}>Mode</th><th style={cell}>Pair</th><th style={cell}>Ratio</th><th style={cell}>Min</th></tr></thead>
          <tbody>{c.map((x, i) => <tr key={i}><td style={cell}>{x.mode}</td><td style={cell}>{x.pair}</td><td style={cell}>{x.ratio.toFixed(2)}:1</td><td style={cell}>{x.minimum}:1</td></tr>)}</tbody>
        </table>
      </details>
    </>
  );
}

export function TypeScale() {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead><tr><th style={cell}>Style</th><th style={cell}>Sample</th><th style={cell}>Size · weight · line</th><th style={cell}>Use</th></tr></thead>
      <tbody>
        {(data.typography as unknown as { path: string; css: string; use: string; value: unknown }[]).map((t) => {
          const v = t.value as unknown as { fontSize: string; fontWeight: number; lineHeight: string };
          return (
            <tr key={t.path}>
              <td style={cell}><code style={mono}>{t.path.split(".")[1]}</code><br /><span style={{ ...mono, fontSize: 11, color: "var(--color-text-muted)" }}>font: var({t.css})</span></td>
              <td style={cell}><span style={{ font: `var(${t.css})` }}>Quiet that adapts</span></td>
              <td style={cell}>{v.fontSize} · {v.fontWeight} · {v.lineHeight}</td>
              <td style={cell}>{t.use}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function Dimensions({ prefix, bars = false }: { prefix: string; bars?: boolean }) {
  const list = (data.dimensions as unknown as Tok[]).filter((t) => t.path.startsWith(prefix));
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead><tr><th style={cell}>Token</th><th style={cell}>Value</th>{bars && <th style={cell}>Size</th>}<th style={cell}>Points to</th></tr></thead>
      <tbody>
        {list.map((t) => (
          <tr key={t.path}>
            <td style={cell}><code style={mono}>{t.path}</code><br /><span style={{ ...mono, fontSize: 11, color: "var(--color-text-muted)" }}>var({t.css})</span></td>
            <td style={cell}>{String(t.value)}</td>
            {bars && <td style={cell}><div style={{ height: 12, width: `var(${t.css})`, background: "var(--color-action-primary-default)", borderRadius: 2 }} /></td>}
            <td style={cell}>{t.alias ?? "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ModeSample() {
  const Panel = ({ title }: { title: string }) => (
    <div style={{ padding: 24, borderRadius: 8, background: "linear-gradient(160deg, var(--color-surface-page-start), var(--color-surface-page-end))", color: "var(--color-text-default)" }}>
      <p style={{ margin: "0 0 12px", font: "var(--typography-label)", color: "var(--color-text-default)" }}>{title}</p>
      <div style={{ padding: 16, borderRadius: 8, background: "var(--color-surface-glass)", border: "1px solid var(--color-border-subtle)", backdropFilter: "blur(var(--effect-blur-surface))" }}>
        <p style={{ margin: 0, font: "var(--typography-heading-4)", color: "var(--color-text-default)" }}>Glass card</p>
        <p style={{ margin: "4px 0 12px", color: "var(--color-text-muted)" }}>Same component, same variables.</p>
        <span style={{ display: "inline-block", padding: "8px 16px", borderRadius: 4, background: "var(--color-action-primary-default)", color: "var(--color-action-primary-foreground)", font: "var(--typography-label)" }}>Primary action</span>
      </div>
    </div>
  );
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <Panel title="Default mode" />
      <div data-theme="tv"><Panel title="tv mode (data-theme=&quot;tv&quot;)" /></div>
    </div>
  );
}
