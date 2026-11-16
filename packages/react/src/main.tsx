import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import { Simulator } from "./pages/Simulator";

createRoot(document.getElementById("root")!).render(<StrictMode><Simulator /></StrictMode>);
