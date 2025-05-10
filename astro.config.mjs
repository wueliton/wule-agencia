// @ts-check
// @ts-ignore
import { defineConfig } from "astro/config";
// @ts-ignore
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://agenciawule.com.br",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "assets",
  },
  output: "static",
  compressHTML: true,
  integrations: [react(), icon(), sitemap()],
  experimental: {
    responsiveImages: true,
  },
});
