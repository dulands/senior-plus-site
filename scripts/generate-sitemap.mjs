import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const siteUrl = process.env.PUBLIC_SITE_URL?.trim().replace(/\/$/, '');

if (!siteUrl) {
  console.log('Sitemap não gerado: PUBLIC_SITE_URL ainda não foi definido.');
  process.exit(0);
}

const publicPaths = ['/', '/sobre/', '/servicos/', '/equipe/', '/avaliacoes/', '/contato/', '/guia/', '/carreiras/'];
const urls = publicPaths.map((pathname) => `  <url><loc>${siteUrl}${pathname}</loc></url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await writeFile(resolve('dist', 'sitemap.xml'), sitemap, 'utf8');
const robotsPath = resolve('dist', 'robots.txt');
const robots = await readFile(robotsPath, 'utf8');
const robotsWithoutSitemap = robots.replace(/^Sitemap:.*$/gim, '').trimEnd();
await writeFile(robotsPath, `${robotsWithoutSitemap}\n\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf8');
console.log(`Sitemap gerado para ${siteUrl}/`);
