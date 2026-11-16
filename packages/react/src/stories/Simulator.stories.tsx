import type { Meta, StoryObj } from "@storybook/react-vite";
import { Simulator } from "../pages/Simulator";

const meta: Meta<typeof Simulator> = { title: "Pages/Cash advance simulator", component: Simulator, parameters: { layout: "fullscreen" } };
export default meta;
export const Default: StoryObj<typeof Simulator> = {};
