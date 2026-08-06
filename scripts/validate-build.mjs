import { access, readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const dist = resolve('dist');

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const target = resolve(directory, entry.name);
      return entry.isDirectory() ? listFiles(target) : [target];
    }),
  );
  return nested.flat();
}

const files = await listFiles(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const allTextFiles = files.filter((file) => /\.(html|css|js|txt|xml)$/.test(file));
const errors = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) errors.push(`${file}: esperado 1 h1, encontrado ${h1Count}`);
  if (!html.includes('<html lang="pt-BR"')) errors.push(`${file}: lang pt-BR ausente`);
  if (!html.includes('<main ')) errors.push(`${file}: landmark main ausente`);
  if (!html.includes('<nav ')) errors.push(`${file}: landmark nav ausente`);
  if (!html.includes('<footer ')) errors.push(`${file}: landmark footer ausente`);
  if (/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*?<button\b/i.test(html)) {
    errors.push(`${file}: button aninhado em link`);
  }
  if (/<button\b[^>]*>(?:(?!<\/button>)[\s\S])*?<a\b/i.test(html)) {
    errors.push(`${file}: link aninhado em button`);
  }

  const isNotFound = file === resolve(dist, '404.html');
  const hasNoindex = /<meta name="robots" content="noindex, nofollow">/.test(html);
  if (!isNotFound && hasNoindex) errors.push(`${file}: página pública não pode usar noindex`);
  if (isNotFound && !hasNoindex) errors.push(`${file}: página 404 deve usar noindex`);

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_astro/')) continue;
    const pathname = new URL(href, 'http://local.test').pathname;
    if (/\.[a-z0-9]+$/i.test(pathname)) continue;
    const target = pathname === '/'
      ? resolve(dist, 'index.html')
      : resolve(dist, pathname.replace(/^\//, ''), 'index.html');
    try {
      await access(target);
    } catch {
      errors.push(`${file}: link interno sem destino gerado (${href})`);
    }
  }
}

const combined = (
  await Promise.all(allTextFiles.map((file) => readFile(file, 'utf8')))
).join('\n');

const forbidden = [
  'seniorplus.base44.app',
  'base44-prod',
  'images.unsplash.com',
  '<iframe',
  'googletagmanager.com',
  'google-analytics.com',
  'connect.facebook.net',
  'mailto:',
];

for (const term of forbidden) {
  if (combined.toLowerCase().includes(term.toLowerCase())) {
    errors.push(`conteúdo proibido encontrado no build: ${term}`);
  }
}

if (files.some((file) => file.toLowerCase().endsWith('.pdf'))) {
  errors.push('arquivo PDF encontrado no build');
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validação concluída: ${htmlFiles.length} páginas HTML e nenhum item proibido.`);
