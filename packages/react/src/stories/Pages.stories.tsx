import type { Meta, StoryObj } from "@storybook/react-vite";
import { Store } from "../pages/Store";
import { Analytics } from "../pages/Analytics";
import { HelpArticle } from "../pages/HelpArticle";
import { Product } from "../pages/Product";
import { Music } from "../pages/Music";

const meta: Meta = { title: "Patterns/Screens", parameters: { layout: "fullscreen" } };
export default meta;
type S = StoryObj;
export const ProductPage: S = { render: () => <Product /> };
export const StorePage: S = { render: () => <Store /> };
export const MusicPage: S = { render: () => <Music /> };
export const HelpArticlePage: S = { render: () => <HelpArticle /> };
export const AnalyticsPage: S = { render: () => <Analytics /> };
