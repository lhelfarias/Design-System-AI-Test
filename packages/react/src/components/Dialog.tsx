import { useEffect, useId, useRef, type ReactNode } from "react";
import "./Dialog.css";

/**
 * Figma: Dialog (Confirmation, Form). Native modal <dialog> opened with showModal(): the rest of the page is inert,
 * focus moves into the dialog, Escape closes it (WCAG technique H102). Focus returns to the element that opened it.
 * The close button is 44 px and named "Close".
 */
export function Dialog({ open, onClose, title, children, actions }: { open: boolean; onClose: () => void; title: string; children: ReactNode; actions?: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<Element | null>(null);
  const titleId = useId();
  useEffect(() => {
    const d = ref.current; if (!d) return;
    if (open && !d.open) { opener.current = document.activeElement; d.showModal(); }
    if (!open && d.open) d.close();
  }, [open]);
  const handleClose = () => { onClose(); (opener.current as HTMLElement | null)?.focus?.(); };
  return (
    <dialog ref={ref} className="ds-dialog" aria-labelledby={titleId} onClose={handleClose}>
      <div className="ds-dialog__header">
        <h2 id={titleId} className="ds-dialog__title">{title}</h2>
        <button type="button" className="ds-dialog__close" aria-label="Close" onClick={() => ref.current?.close()}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
        </button>
      </div>
      <div className="ds-dialog__body">{children}</div>
      {actions && <div className="ds-dialog__actions">{actions}</div>}
    </dialog>
  );
}
