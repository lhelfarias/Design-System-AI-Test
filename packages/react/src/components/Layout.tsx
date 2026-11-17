import type { ElementType, ReactNode } from "react";
import "./Layout.css";

/** Centers content inside layout.max-width with the margins of each window size. */
export function Container({ children }: { children: ReactNode }) {
  return <div className="ds-container">{children}</div>;
}

/**
 * Title band (docs/visual-style.md): navy band under the header, always in tv mode,
 * so links and controls inside switch to their dark versions.
 */
export function TitleBand({ children }: { children: ReactNode }) {
  return (
    <div className="ds-title-band" data-theme="tv">
      <Container><div className="ds-title-band__inner">{children}</div></Container>
    </div>
  );
}

/** Panel for forms and long text (solid), or glass for cards and summaries. */
export function Panel({ variant = "solid", as: Tag = "section", padding = "lg", className, children, ...rest }: {
  variant?: "solid" | "glass";
  as?: ElementType;
  padding?: "lg" | "xl";
  /** Extra classes from the page; they are added to the panel classes, never replace them. */
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}) {
  const classes = ["ds-panel", `ds-panel--${variant}`, `ds-panel--pad-${padding}`, className].filter(Boolean).join(" ");
  return <Tag className={classes} {...rest}>{children}</Tag>;
}
