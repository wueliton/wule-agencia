// @ts-check
// @ts-ignore
import { defineConfig, fontProviders } from "astro/config";
// @ts-ignore
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://wueliton.github.io",
  base: "wule-agencia",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "assets",
  },
  output: "static",
  compressHTML: true,
  integrations: [react(), icon()],
  experimental: {
    responsiveImages: true,
  },
});
