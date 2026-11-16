import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "..";

const meta: Meta<typeof Button> = { title: "Components/Button", component: Button, args: { children: "Continue" } };
export default meta;
type S = StoryObj<typeof Button>;
export const Primary: S = {};
export const Secondary: S = { args: { variant: "secondary", children: "Cancel" } };
export const Disabled: S = { args: { disabled: true } };
export const FullWidth: S = { args: { fullWidth: true }, parameters: { viewport: { defaultViewport: "mobile1" } } };
