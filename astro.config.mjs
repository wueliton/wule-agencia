// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), icon()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-primary",
        weights: [300, 500, 700],
      },
      {
        provider: fontProviders.google(),
        name: "DM Sans",
        cssVariable: "--font-secondary",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
});
