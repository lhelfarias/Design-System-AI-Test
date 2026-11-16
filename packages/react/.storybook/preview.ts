import type { Preview } from "@storybook/react-vite";
import "../src/styles/base.css";

const preview: Preview = {
  parameters: {
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
