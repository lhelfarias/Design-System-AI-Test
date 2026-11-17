// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepIndicator } from "../..";

const meta: Meta<typeof StepIndicator> = {
  title: "Components/Step indicator",
  component: StepIndicator, args: { steps: ["Amount", "Account", "Review"], current: 2, showLabels: true },
  parameters: { docs: { description: { component: "Shows where the user is in a linear form split over several pages: a bar per step, the step labels and a heading \"Step 2 of 3\" with the step title.\n\n**When to use**\n\n- A linear process of 3 to 7 steps that users complete in order (the cash advance simulator).\n- Placed below the page h1, before the form.\n\n**When not to use**\n\n- Short forms that fit on one page. GOV.UK recommends testing a form without a progress indicator first; one service removed a 12-step indicator with no effect on completion.\n- Steps done in any order: use a task list.\n- As navigation: it has no links. Going back uses the form's Back button.\n\n**Accessibility**\n\n- Ordered list; the current step has `aria-current=\"step\"`; done and pending steps carry hidden text \"completed\" / \"not completed\".\n- The heading receives focus when the step changes, so screen reader and keyboard users start at the top of the new step.\n- The current step is shown by its label (label style, brand color) and the heading, not by color alone. Below 600 px the labels hide and the heading keeps the title.\n- Pending bars use `color.border.control` (3:1 against the surface, WCAG 1.4.11).\n\n**Tokens used**\n\n`--color-action-primary-default`, `--color-border-control`, `--color-text-brand`, `--color-text-default`, `--color-text-muted`, `--radius-pill`, `--size-track`, `--space-inline-md`, `--space-inline-xs`, `--space-stack-md`, `--space-stack-xs`, `--typography-body-sm`, `--typography-heading-3`, `--typography-label`. No component tokens: every value is shared with other components.\n\n**Sources** [GOV.UK question pages](https://design-system.service.gov.uk/patterns/question-pages) · [WCAG 3 draft: current step indicated](https://www.w3.org/WAI/WCAG3/informative/layout/user-orientation/current-step-indicated/) · [VA segmented progress bar](https://design.va.gov/components/form/progress-bar-segmented)\n\n**Code** [StepIndicator.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/StepIndicator.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof StepIndicator>;
export const SecondStep: S = {};
export const FirstStep: S = { args: { current: 1 } };
export const LastStep: S = { args: { current: 3 } };
export const WithoutLabels: S = { args: { showLabels: false } };
export const FiveSteps: S = { args: { steps: ["Details", "Address", "Payment", "Delivery", "Review"], current: 3 } };
