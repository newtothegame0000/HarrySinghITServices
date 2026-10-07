import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { COMPANY_DESCRIPTION, PRODUCT_NAME, PRODUCT_PITCH, SITE } from './src/site';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const organizationJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.company,
  url: SITE.url,
  logo: `${SITE.url}/LOGO.png`,
  email: SITE.email,
  description: COMPANY_DESCRIPTION,
  foundingDate: SITE.foundedISO,
  founder: { '@type': 'Person', name: SITE.founder, alternateName: SITE.founderShort },
  address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
}).replace(/</g, '\\u003c');

// Fills {{TOKENS}} in the HTML entry files from src/site.ts, so the <head>
// tags can never drift from what the page itself says.
function siteTokens(): Plugin {
  const tokens: Record<string, string> = {
    COMPANY: escapeHtml(SITE.company),
    SITE_URL: SITE.url,
    PRODUCT_NAME: escapeHtml(PRODUCT_NAME),
    PRODUCT_PITCH: escapeHtml(PRODUCT_PITCH),
    COMPANY_DESCRIPTION: escapeHtml(COMPANY_DESCRIPTION),
    ORG_JSONLD: organizationJsonLd,
  };
  return {
    name: 'site-tokens',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace(/\{\{(\w+)\}\}/g, (m, key) => tokens[key] ?? m),
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), siteTokens()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
      },
    },
  },
});
