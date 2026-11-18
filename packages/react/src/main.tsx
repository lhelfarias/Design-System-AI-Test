import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import { ROUTES, type RouteId } from "./pages/Shell";
import { Simulator } from "./pages/Simulator";
import { Store } from "./pages/Store";
import { Analytics } from "./pages/Analytics";
import { HelpArticle } from "./pages/HelpArticle";
import { Product } from "./pages/Product";
import { Music } from "./pages/Music";
import { Components } from "./pages/Components";

type PageId = RouteId | "components";
const PAGES: Record<PageId, { title: string; Page: () => React.JSX.Element }> = {
  product: { title: "Ataraxia Halo", Page: Product },
  store: { title: "Headphones & speakers", Page: Store },
  music: { title: "Deep Focus", Page: Music },
  simulator: { title: "Cash advance simulator", Page: Simulator },
  help: { title: "How a cash advance works", Page: HelpArticle },
  analytics: { title: "Listening analytics", Page: Analytics },
  components: { title: "Components", Page: Components },
};
const read = (): PageId => {
  const h = location.hash.slice(1);
  if (h === "components") return "components";
  return (ROUTES.find((r) => r.id === h)?.id ?? (h ? null : "product")) as PageId;
};

/** Hash navigation, so the single HTML file works with a double click (no server). */
function App() {
  const [route, setRoute] = useState<PageId>(read() ?? "product");
  useEffect(() => {
    const on = () => {
      const next = read();
      if (!next) return; // in-page anchors (#main, #why…) keep the current screen
      setRoute(next);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  useEffect(() => {
    document.title = `${PAGES[route].title} – Ataraxia`;
    if (location.hash) document.getElementById("main")?.focus({ preventScroll: true });
  }, [route]);
  const { Page } = PAGES[route];
  return <Page key={route} />;
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
