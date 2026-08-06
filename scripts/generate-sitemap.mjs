import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const siteUrl = process.env.PUBLIC_SITE_URL?.trim().replace(/\/$/, '');

if (!siteUrl) {
  console.log('Sitemap não gerado: PUBLIC_SITE_URL ainda não foi definido.');
  process.exit(0);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}/</loc></url>
</urlset>
`;

await writeFile(resolve('dist', 'sitemap.xml'), sitemap, 'utf8');
console.log(`Sitemap gerado para ${siteUrl}/`);
