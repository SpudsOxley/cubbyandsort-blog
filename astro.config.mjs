// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://cubbyandsort.com',
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: false },
  }),
  integrations: [
    react(),
    sitemap(),
    keystatic(),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
