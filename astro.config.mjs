// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://transportegioiaehijos.com.ar",
  // Netlify sirve /ruta/ y redirige /ruta → /ruta/ (301): canonical, sitemap y enlaces con barra final.
  trailingSlash: "always",
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: false,
});
