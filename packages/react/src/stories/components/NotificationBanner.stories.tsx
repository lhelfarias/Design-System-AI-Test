// Docs text comes from ai-context/components.md and the Figma guides: when one changes, update the other.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotificationBanner } from "../..";

const meta: Meta<typeof NotificationBanner> = {
  title: "Components/Notification banner",
  component: NotificationBanner, args: { title: "Example values", type: "info", children: "These figures are examples, not a real offer." },
  parameters: { docs: { description: { component: "A page-level message: information, success, warning or error.\n\n**When to use**\n\n- Something the person must know about the whole page.\n\n**When not to use**\n\n- Field errors: use Error message next to the field.\n\n**Accessibility**\n\n- role=\"status\" (role=\"alert\" for errors).\n- Icon plus title: never color alone.\n\n**Tokens used**\n\n`--color-text-default`, `--notification-banner-body-typography`, `--notification-banner-border-width`, `--notification-banner-error-background`, `--notification-banner-error-border`, `--notification-banner-error-icon`, `--notification-banner-gap`, `--notification-banner-icon-size`, `--notification-banner-info-background`, `--notification-banner-info-border`, `--notification-banner-info-icon`, `--notification-banner-padding`, `--notification-banner-radius`, `--notification-banner-success-background`, `--notification-banner-success-border`, `--notification-banner-success-icon`, `--notification-banner-title-typography`, `--notification-banner-warning-background`, `--notification-banner-warning-border`, `--notification-banner-warning-icon`\n\n**Figma** [Open in Figma](https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=27-81) \u00b7 **Code** [Content.tsx](https://github.com/lhelfarias/Design-System-AI-Test/blob/main/packages/react/src/components/Content.tsx)" } } },
};
export default meta;
type S = StoryObj<typeof NotificationBanner>;
export const Info: S = {};
export const Success: S = { args: { type: "success", title: "Request sent" } };
export const Warning: S = { args: { type: "warning", title: "Check the account" } };
export const Error: S = { args: { type: "error", title: "The transfer failed" } };
