import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsFilePath = path.join(__dirname, '../src/data/posts.js');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

// Leggi il file posts.js per estrarre gli ID dei post
const postsContent = fs.readFileSync(postsFilePath, 'utf-8');
const idRegex = /id:\s*["']([^"']+)["']/g;
const ids = [];
let match;

while ((match = idRegex.exec(postsContent)) !== null) {
  ids.push(match[1]);
}

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'services', priority: '0.8', changefreq: 'monthly' },
  { path: 'portfolio', priority: '0.9', changefreq: 'monthly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  { path: 'blog', priority: '0.9', changefreq: 'weekly' },
  { path: 'privacy', priority: '0.3', changefreq: 'yearly' }
];

const today = new Date().toISOString().split('T')[0];
const baseUrl = 'https://www.eltonbrahja.eu';

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// Add static pages IT
sitemap += `\n  <!-- Main Pages - IT -->\n`;
staticPages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}${page.path ? '/' + page.path : '/'}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
});

// Add static pages EN
sitemap += `\n  <!-- Main Pages - EN -->\n`;
staticPages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}/en${page.path ? '/' + page.path : ''}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
});

// Add Blog Posts IT
sitemap += `\n  <!-- Blog Articles - IT -->\n`;
ids.forEach(id => {
  let fileStat;
  let lastmod = today;
  try {
    const postFilePath = path.join(__dirname, `../src/data/articles/${id}.jsx`);
    fileStat = fs.statSync(postFilePath);
    lastmod = fileStat.mtime.toISOString().split('T')[0];
  } catch (e) {
    // ignore missing file
  }

  sitemap += `  <url>
    <loc>${baseUrl}/blog/${id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

// Add Blog Posts EN
sitemap += `\n  <!-- Blog Articles - EN -->\n`;
ids.forEach(id => {
  let fileStat;
  let lastmod = today;
  try {
    const postFilePath = path.join(__dirname, `../src/data/articles/${id}-en.jsx`);
    fileStat = fs.statSync(postFilePath);
    lastmod = fileStat.mtime.toISOString().split('T')[0];
  } catch (e) {
    // ignore missing file
  }

  sitemap += `  <url>
    <loc>${baseUrl}/en/blog/${id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

sitemap += `</urlset>\n`;

fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
console.log('Sitemap generata con successo!');
