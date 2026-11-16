import { useId, type ReactNode } from "react";
import { ErrorMessage } from "./ErrorMessage";
import "./Field.css";
import "./Fieldset.css";

export interface FieldsetProps {
  /** Figma: Legend. Write it as the question. */
  legend: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}

/** Figma: Fieldset. Groups radios or checkboxes under one question (WCAG 1.3.1). */
export function Fieldset({ legend, hint, error, children }: FieldsetProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <fieldset className="ds-fieldset" aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}>
      <legend className="ds-field__label">{legend}</legend>
      {hint && <p id={hintId} className="ds-field__hint">{hint}</p>}
      {error && <ErrorMessage id={errorId!}>{error}</ErrorMessage>}
      <div className="ds-fieldset__options">{children}</div>
    </fieldset>
  );
}
