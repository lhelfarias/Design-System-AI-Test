import type { ReactNode } from "react";
import "./Card.css";

export interface CardProps {
  /** Figma: Title */
  title: string;
  /** Figma: Body */
  body: string;
  /** Figma: Type=Clickable. The title becomes the only link and covers the whole card. */
  href?: string;
  /** Figma: Show image. A 16:9 image or illustration; decorative unless imageAlt is given. */
  image?: ReactNode;
  imageAlt?: string;
  /** Figma: Show actions. Buttons stay above the stretched link. */
  actions?: ReactNode;
  headingLevel?: 2 | 3 | 4;
}

/** Figma: Card (Static, Clickable). Min width layout.card-min-width; one 16:9 image. Hover and focus are CSS states. */
export function Card({ title, body, href, image, imageAlt, actions, headingLevel = 3 }: CardProps) {
  const H = `h${headingLevel}` as const;
  return (
    <article className={["ds-card", href && "ds-card--clickable"].filter(Boolean).join(" ")}>
      {image && <div className="ds-card__image" role={imageAlt ? "img" : undefined} aria-label={imageAlt} aria-hidden={imageAlt ? undefined : true}>{image}</div>}
      <div className="ds-card__content">
        <H className="ds-card__title">{href ? <a className="ds-stretched-link" href={href}>{title}</a> : title}</H>
        <p className="ds-card__body">{body}</p>
        {actions && <div className="ds-card__actions">{actions}</div>}
      </div>
    </article>
  );
}
