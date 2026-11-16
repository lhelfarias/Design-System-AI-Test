import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" so the built page also opens from the file system (used by the accessibility check).
export default defineConfig({ plugins: [react()], base: "./" });
