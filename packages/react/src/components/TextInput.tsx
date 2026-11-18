import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { ErrorMessage } from "./ErrorMessage";
import "./Field.css";
import "./TextInput.css";

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Figma: Label (always visible; never use the placeholder as the label) */
  label: string;
  /** Figma: Hint */
  hint?: string;
  /** Figma: State=Error with the Error message */
  error?: string;
}

/** Figma: Text input */
export function TextInput({ label, hint, error, id, className, ...rest }: TextInputProps) {
  const auto = useId();
  const inputId = id ?? auto;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  return (
    <div className={["ds-field", className].filter(Boolean).join(" ")}>
      <label className="ds-field__label" htmlFor={inputId}>{label}</label>
      {hint && <p id={hintId} className="ds-field__hint">{hint}</p>}
      {error && <ErrorMessage id={errorId!}>{error}</ErrorMessage>}
      <input
        id={inputId}
        className={["ds-text-input", error && "ds-text-input--error"].filter(Boolean).join(" ")}
        aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}
        aria-invalid={error ? true : undefined}
        {...rest}
      />
    </div>
  );
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Figma: Label */
  label: string;
  /** Figma: Hint (Show hint) */
  hint?: string;
  /** Figma: State=Error */
  error?: string;
}

/** Figma: Textarea. Multi-line text; the height grows with the content (rows is the minimum). */
export function Textarea({ label, hint, error, id, className, rows = 4, ...rest }: TextareaProps) {
  const auto = useId();
  const inputId = id ?? auto;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  return (
    <div className={["ds-field", className].filter(Boolean).join(" ")}>
      <label className="ds-field__label" htmlFor={inputId}>{label}</label>
      {hint && <p id={hintId} className="ds-field__hint">{hint}</p>}
      {error && <ErrorMessage id={errorId!}>{error}</ErrorMessage>}
      <textarea
        id={inputId}
        rows={rows}
        className={["ds-text-input", "ds-textarea", error && "ds-text-input--error"].filter(Boolean).join(" ")}
        aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}
        aria-invalid={error ? true : undefined}
        {...rest}
      />
    </div>
  );
}
