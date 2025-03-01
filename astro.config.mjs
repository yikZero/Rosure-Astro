import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rosure.yikzero.com/',
  image: {
    domains: ['yikzero.com'],
  },
  prefetch: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    partytown({
      config: {
        debug: true,
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
