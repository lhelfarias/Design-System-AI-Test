import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  // Docs pages (MDX) first, then one story file per component.
  stories: ["../src/docs/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    // remark-gfm: tables in MDX pages (Storybook docs, "Writing docs" → MDX → GFM).
    { name: "@storybook/addon-docs", options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } } },
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react-vite",
};
export default config;
