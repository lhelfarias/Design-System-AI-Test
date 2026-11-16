import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: Type */
  variant?: "primary" | "secondary";
  /** Figma: Icon start (an icon node; decorative, hidden from screen readers) */
  iconStart?: ReactNode;
  /** Stretches to the container width (mobile actions) */
  fullWidth?: boolean;
}

/** Figma: Button. Use the label for the action ("Continue"), never only an icon. */
export function Button({ variant = "primary", iconStart, fullWidth, className, children, type = "button", ...rest }: ButtonProps) {
  const cls = ["ds-button", `ds-button--${variant}`, fullWidth && "ds-button--full", className].filter(Boolean).join(" ");
  return (
    <button type={type} className={cls} {...rest}>
      {iconStart && <span className="ds-button__icon" aria-hidden="true">{iconStart}</span>}
      {children}
    </button>
  );
}
