import { useId, type SelectHTMLAttributes } from "react";
import { ErrorMessage } from "./ErrorMessage";
import "./Field.css";
import "./Select.css";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Figma: Label */
  label: string;
  /** Figma: Hint */
  hint?: string;
  error?: string;
  options: { value: string; label: string }[];
}

/** Figma: Select. A native select: keyboard and screen-reader support come from the browser. */
export function Select({ label, hint, error, options, id, className, ...rest }: SelectProps) {
  const auto = useId();
  const selectId = id ?? auto;
  const hintId = hint ? `${selectId}-hint` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;
  return (
    <div className={["ds-field", className].filter(Boolean).join(" ")}>
      <label className="ds-field__label" htmlFor={selectId}>{label}</label>
      {hint && <p id={hintId} className="ds-field__hint">{hint}</p>}
      {error && <ErrorMessage id={errorId!}>{error}</ErrorMessage>}
      <div className="ds-select">
        <select
          id={selectId}
          className={["ds-select__control", error && "ds-select__control--error"].filter(Boolean).join(" ")}
          aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}
          aria-invalid={error ? true : undefined}
          {...rest}
        >
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg className="ds-select__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" fill="currentColor" /></svg>
      </div>
    </div>
  );
}
