import "./Field.css";

/** Figma: Error message. Linked to its field with aria-describedby; starts with a hidden "Error:" for screen readers. */
export function ErrorMessage({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="ds-error-message">
      <span className="ds-visually-hidden">Error:</span>
      {children}
    </p>
  );
}
