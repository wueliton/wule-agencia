// @ts-check
// @ts-ignore
import { defineConfig, fontProviders } from "astro/config";
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
    inlineStylesheets: "always",
  },
  output: "static",
  compressHTML: true,
  integrations: [react(), icon(), sitemap()],
  experimental: {
    responsiveImages: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: "DM Sans",
        cssVariable: "--font-secondary",
        weights: [300, 400, 700],
      },
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-primary",
        weights: [300, 400, 500],
      },
    ],
  },
});
