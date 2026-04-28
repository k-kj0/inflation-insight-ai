import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import cloudflare from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tsconfigPaths(),
    cloudflare(),
  ],
  base: "/inflation-insight-ai/", // REQUIRED for GitHub Pages
});
