import { useId } from "react";
import "./Field.css";
import "./TextInput.css";
import "./Button.css";
import "./Search.css";

/** Figma: Search. A labelled field plus a Search button inside a search landmark. The label stays visible. */
export function Search({ label = "Search the site", buttonLabel = "Search", action = "#", name = "q", defaultValue }: { label?: string; buttonLabel?: string; action?: string; name?: string; defaultValue?: string }) {
  const id = useId();
  return (
    <form className="ds-search" role="search" action={action}>
      <label className="ds-field__label" htmlFor={id}>{label}</label>
      <div className="ds-search__row">
        <input id={id} className="ds-text-input" type="search" name={name} defaultValue={defaultValue} />
        <button type="submit" className="ds-button ds-button--primary">{buttonLabel}</button>
      </div>
    </form>
  );
}
