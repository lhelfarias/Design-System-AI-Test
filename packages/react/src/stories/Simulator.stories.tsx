import type { Meta, StoryObj } from "@storybook/react-vite";
import { Simulator } from "../pages/Simulator";

const meta: Meta<typeof Simulator> = { title: "Patterns/Screens/Simulator", component: Simulator, parameters: { layout: "fullscreen" } };
export default meta;
export const Default: StoryObj<typeof Simulator> = {};
