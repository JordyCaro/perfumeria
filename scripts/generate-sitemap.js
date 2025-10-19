import { writeFileSync } from 'fs';
import { join } from 'path';

const baseUrl = 'https://darperfumeria.com';

// Lista de fragancias hardcodeada para evitar problemas de importación
const fragranceIds = [
  'ajwad', 'alharamain-laventure', 'amethyst', 'amethyste', 'ansaam-silver',
  'art-of-universe', 'art-of-universe-unisex', 'assam-silver', 'bharara-king',
  'bharara-king-unisex', 'bharara-rome', 'bharara-rome-women', 'delilah',
  'hayaati-florence', 'hayaati-maleky-men', 'Khamrah-Qahwa', 'Khamrah-Qahwa-unisex',
  'khamrah', 'khamrah-unisex', 'kismet-men', 'kismet-womwen', 'kit-yara-and-yara-candy',
  'kit-yara-splash', 'liam-grey', 'malachite', 'mayar-cherry', 'mayar-cherry-unisex',
  'musaman-white', 'now-black', 'odyssey-dubai-chocolat-armaf', 'odyssey-dubai-chocolat-armaf-unisex',
  'odyssey-candee', 'odyssey-mandarin-sky', 'odyssey-mandarin-sky-unisex', 'sakeena',
  'shaheen-gold-lattafa-unisex', 'shaheen-gold-lattafa', 'sutor', 'yara', 'yum-yum',
  'club-de-nuit-max', 'club-de-nuit-urban-max-elixir', 'club-de-nuit', 'emeer',
  'emeer-unisex', 'jean-lowe', 'asad', 'fakhar-extrait'
];

const staticPages = [
  '',
  '/about',
  '/contact',
  '/fragancias',
  '/guide',
  '/perfumes'
];

const fragrancePages = fragranceIds.map(id => `/perfumes/${id}`);
const allPages = [...staticPages, ...fragrancePages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/perfumes/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generado exitosamente');
