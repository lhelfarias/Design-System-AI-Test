import type { Ref } from "react";
import "./StepIndicator.css";

export interface StepIndicatorProps {
  /** Step titles, in order. 3 to 7 steps; each title says what the user does in that step. */
  steps: string[];
  /** Current step, starting at 1. */
  current: number;
  /** Figma: Show labels. Labels hide below 600 px either way; the heading keeps the step title. */
  showLabels?: boolean;
  /** Level of the step heading. Default 2: the page h1 is the name of the whole process. */
  headingLevel?: 2 | 3 | 4;
  /** Lets the page move focus to the step heading when the step changes. */
  headingRef?: Ref<HTMLHeadingElement>;
}

/**
 * Figma: Step indicator (Current 1–3, Show labels). Shows where the user is in a linear,
 * multi-step form. It is not navigation: going back uses the form's Back button.
 * Accessibility: an ordered list with aria-current="step" on the current step and hidden
 * "completed" / "not completed" text; the heading "Step 2 of 3 Account" receives focus on change.
 */
export function StepIndicator({ steps, current, showLabels = true, headingLevel = 2, headingRef }: StepIndicatorProps) {
  const H = `h${headingLevel}` as const;
  return (
    <div className="ds-step-indicator">
      <ol className={["ds-step-indicator__segments", !showLabels && "ds-step-indicator__segments--no-labels"].filter(Boolean).join(" ")}>
        {steps.map((title, i) => {
          const n = i + 1;
          const status = n < current ? "complete" : n === current ? "current" : "upcoming";
          return (
            <li key={title} className={`ds-step-indicator__segment ds-step-indicator__segment--${status}`} aria-current={status === "current" ? "step" : undefined}>
              <span className="ds-step-indicator__label">
                {title}
                {status === "complete" && <span className="ds-visually-hidden"> completed</span>}
                {status === "upcoming" && <span className="ds-visually-hidden"> not completed</span>}
              </span>
            </li>
          );
        })}
      </ol>
      <H className="ds-step-indicator__heading" ref={headingRef} tabIndex={-1}>
        <span className="ds-step-indicator__counter">Step {current} <span className="ds-step-indicator__total">of {steps.length}</span></span>
        <span className="ds-step-indicator__title">{steps[current - 1]}</span>
      </H>
    </div>
  );
}
