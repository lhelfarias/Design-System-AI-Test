import type { Preview } from "@storybook/react-vite";
import "../src/styles/base.css";

const preview: Preview = {
  // Every component gets a documentation page with its description, props table and examples.
  tags: ["autodocs"],
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "Foundations", ["Colors", "Typography", "Spacing and layout", "Modes and surfaces"], "Guidelines", ["Visual style and devices", "Layout", "Navigation", "Accessibility", "Motion"], "Components", "Patterns", ["Overview", "Screens"], "For teams and AI", ["Contributing", "Distribution", "Design and code links", "AI context", "Next improvements"]],
      },
    },
    // Accessibility panel: fail the story test on violations instead of only reporting them.
    a11y: { test: "error" },
  },
  globalTypes: {
    theme: {
      description: "Mode",
      toolbar: { title: "Mode", items: [{ value: "default", title: "Default" }, { value: "tv", title: "TV" }] },
    },
  },
  initialGlobals: { theme: "default" },
  decorators: [
    (Story, ctx) => {
      document.documentElement.dataset.theme = ctx.globals.theme === "tv" ? "tv" : "";
      return Story();
    },
  ],
};
export default preview;
