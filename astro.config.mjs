import { defineConfig } from 'astro/config';

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();

export default defineConfig({
  output: 'static',
  site: configuredSite || undefined,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
});
