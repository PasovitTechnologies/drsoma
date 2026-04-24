import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CONFIGURATION
const DOMAIN = 'https://your-domain.com'; // REPLACE WITH ACTUAL DOMAIN
const PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.9, changefreq: 'monthly' },
  { path: '/experience', priority: 0.8, changefreq: 'monthly' },
  { path: '/editorial', priority: 0.8, changefreq: 'monthly' },
  { path: '/general', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'yearly' },
  { path: '/contact-3', priority: 0.6, changefreq: 'yearly' },
];

const generateSitemap = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(page => `  <url>
    <loc>${DOMAIN}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log('✅ sitemap.xml generated successfully!');
};

generateSitemap();
