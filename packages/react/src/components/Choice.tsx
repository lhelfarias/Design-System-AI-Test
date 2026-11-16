import { useId, type InputHTMLAttributes } from "react";
import "./Choice.css";

interface ChoiceProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Figma: Label */
  label: string;
}

/** Figma: Radio. Use inside a Fieldset with a legend. */
export function Radio({ label, id, ...rest }: ChoiceProps) {
  const auto = useId();
  const inputId = id ?? auto;
  return (
    <div className="ds-choice">
      <input id={inputId} type="radio" className="ds-choice__input ds-choice__input--radio" {...rest} />
      <label htmlFor={inputId} className="ds-choice__label">{label}</label>
    </div>
  );
}

/** Figma: Checkbox */
export function Checkbox({ label, id, ...rest }: ChoiceProps) {
  const auto = useId();
  const inputId = id ?? auto;
  return (
    <div className="ds-choice">
      <input id={inputId} type="checkbox" className="ds-choice__input ds-choice__input--checkbox" {...rest} />
      <label htmlFor={inputId} className="ds-choice__label">{label}</label>
    </div>
  );
}
