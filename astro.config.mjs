import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://rosure.yikzero.com/',
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap()]
});