import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const templatePath = path.join(distDir, 'index.html');

async function prerender() {
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html non trovato! Esegui prima "vite build".');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  // Inizializza Vite per caricare i moduli ESM/JSX in Node.js
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const { blogPosts } = await vite.ssrLoadModule('/src/data/posts.js');
    console.log(`Caricati ${blogPosts.length} articoli per il prerendering SSG.`);

    const staticPages = [
      {
        path: '',
        title: 'Siti Web Veloci, SEO e UX | Brand Identity di Valore | Elton Brahja',
        description: 'Elton Brahja — Realizzo siti web veloci, eleganti e ottimizzati SEO per il tuo business. Contattami per risultati concreti e una brand identity che converte.',
        h1: 'Siti web veloci e ottimizzati SEO che ti portano contatti, non solo visite',
        customHtml: `
          <main class="page-container" style="max-width:1100px;margin:0 auto;padding:40px 20px;">
            <h1>Siti web veloci e ottimizzati SEO che ti portano contatti, non solo visite</h1>
            <p>Creo siti web per professionisti e attività locali, pensati per convertire visite in contatti reali.</p>
            <section style="margin: 30px 0;">
              <h2>Per chi sono i miei siti web</h2>
              <p>Professionisti e freelance, studi professionali e clinici, attività locali.</p>
              <div style="margin: 20px 0; padding: 16px; background: rgba(86, 124, 141, 0.08); border-radius: 8px;">
                <strong>Focus Sanità & Studi Professionali:</strong> Hai uno studio medico o psicologico e vuoi gestire prenotazioni e conformità privacy in totale sicurezza?
                <br />
                <a href="/blog/sito-web-psicologi-pazienti-giusti" style="font-weight: 600; text-decoration: underline;">Approfondisci come sviluppiamo siti web a norma per psicologi e psicoterapeuti →</a>
              </div>
            </section>
            <section style="margin: 30px 0;">
              <h2>Progetti Recenti</h2>
              <div>
                <h3>Studio Dott.ssa Danubia Macario</h3>
                <p>Sito bilingue completo (IT/PT-BR) per consulenza psicologica con booking online.</p>
                <a href="/blog/sito-web-psicologi-pazienti-giusti" style="font-weight: 600; text-decoration: underline;">Approfondisci come sviluppiamo siti web a norma per psicologi e psicoterapeuti →</a>
              </div>
            </section>
          </main>
        `
      },
      {
        path: 'portfolio',
        title: 'Portfolio Progetti & Lavori Web | Elton Brahja',
        description: 'Scopri i progetti realizzati da Elton Brahja: siti web ad alte prestazioni, sistemi di prenotazione e soluzioni per liberi professionisti e aziende.',
        h1: 'Portfolio & Progetti Realizzati',
        customHtml: `
          <main class="page-container" style="max-width:1100px;margin:0 auto;padding:40px 20px;">
            <h1>Portfolio & Progetti Realizzati</h1>
            <p>Scopri i progetti realizzati da Elton Brahja: siti web ad alte prestazioni, sistemi di prenotazione e soluzioni per liberi professionisti e aziende.</p>
            <section style="margin: 30px 0;">
              <article style="margin-bottom: 24px;">
                <h2>Studio Dott.ssa Danubia Macario</h2>
                <p>Sito bilingue completo (IT/PT-BR) per consulenza psicologica. Interfaccia professionale con sistema di prenotazione online, gestione contenuti multilingua.</p>
                <p><strong>Approfondimento tecnico & conformità di settore:</strong> <a href="/blog/sito-web-psicologi-pazienti-giusti" style="font-weight: 600; text-decoration: underline;">Approfondisci come sviluppiamo siti web a norma per psicologi e psicoterapeuti →</a></p>
              </article>
              <article style="margin-bottom: 24px;">
                <h2>Studio Dr.ssa Marascio</h2>
                <p>Piattaforma professionale completa. Integrazione di sistema di prenotazione automatizzato (LatePoint) per la gestione dell'agenda pazienti.</p>
                <p><strong>Approfondimento tecnico & conformità di settore:</strong> <a href="/blog/sito-web-psicologi-pazienti-giusti" style="font-weight: 600; text-decoration: underline;">Approfondisci come sviluppiamo siti web a norma per psicologi e psicoterapeuti →</a></p>
              </article>
            </section>
          </main>
        `
      },
      {
        path: 'services',
        title: 'Servizi Web Development, SEO e Performance | Elton Brahja',
        description: 'Sviluppo siti web su misura, ottimizzazione SEO locale, integrazione booking e manutenzione per liberi professionisti e imprese.',
        h1: 'I Miei Servizi di Sviluppo Web',
        customHtml: `
          <main class="page-container" style="max-width:1100px;margin:0 auto;padding:40px 20px;">
            <h1>I Miei Servizi di Sviluppo Web</h1>
            <p>Sviluppo siti web su misura, ottimizzazione SEO locale, integrazione booking e manutenzione per liberi professionisti e imprese.</p>
            <section style="margin: 30px 0;">
              <h2>Siti Web Su Misura</h2>
              <p>Realizzo siti web costruiti da zero, senza usare modelli preconfezionati. Per professionisti della salute e studi clinici implementiamo crittografia dei dati sanitari (GDPR Art. 9), consenso informato e agende di prenotazione automatizzate.</p>
              <p><a href="/blog/sito-web-psicologi-pazienti-giusti" style="font-weight: 600; text-decoration: underline;">Approfondisci come sviluppiamo siti web a norma per psicologi e psicoterapeuti →</a></p>
            </section>
            <section style="margin: 30px 0;">
              <h2>Guide & Risorse</h2>
              <article>
                <h3>Sito Web per Psicologi: Guida a Privacy, Normativa e Booking</h3>
                <p>Come creare un sito web conforme per psicologi: gestione GDPR dei dati sanitari, prenotazione automatica delle sedute e strategie di visibilità locale.</p>
                <a href="/blog/sito-web-psicologi-pazienti-giusti" style="font-weight: 600; text-decoration: underline;">Approfondisci come sviluppiamo siti web a norma per psicologi e psicoterapeuti →</a>
              </article>
            </section>
          </main>
        `
      },
      {
        path: 'about',
        title: 'Chi Sono | Elton Brahja - Web Developer',
        description: 'Sviluppatore web specializzato nella creazione di piattaforme digitali veloci, performanti e conformi agli standard moderni.',
        h1: 'Chi Sono: Elton Brahja'
      },
      {
        path: 'contact',
        title: 'Contatti & Richiesta Preventivo | Elton Brahja',
        description: 'Contattami per una consulenza gratuita o un preventivo per il tuo nuovo sito web aziendale o professionale.',
        h1: 'Parliamo del tuo Progetto'
      },
      {
        path: 'blog',
        title: 'Blog Web Development, SEO e Strategie Digitali | Elton Brahja',
        description: 'Guide pratiche, approfondimenti e consigli su creazione siti web, SEO, normative sanitarie e crescita online.',
        h1: 'Blog & Approfondimenti Digitali'
      }
    ];

    // Helper per salvare file HTML
    const saveHtml = (relativeSubdir, htmlContent) => {
      const targetDir = path.join(distDir, relativeSubdir);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf-8');
    };

    // Helper per iniettare metadati e contenuto nell'HTML
    const buildHtml = ({
      title,
      description,
      canonical,
      ogImage = 'https://www.eltonbrahja.eu/foto-profilo.webp',
      schemaJson = null,
      bodyHtml = ''
    }) => {
      let pageHtml = template;

      // Aggiorna Title
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

      // Inietta o aggiorna meta tags nell'head
      const metaTags = `
    <meta name="description" content="${description.replace(/"/g, '&quot;')}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="Elton Brahja" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta name="twitter:image" content="${ogImage}" />
    ${schemaJson ? `<script type="application/ld+json">${JSON.stringify(schemaJson)}</script>` : ''}
      `;

      pageHtml = pageHtml.replace('</head>', `${metaTags}\n  </head>`);

      // Inietta il DOM semantico iniziale in <div id="root">
      if (bodyHtml) {
        pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
      }

      return pageHtml;
    };

    // 1. Prerender Pagine Statiche
    for (const page of staticPages) {
      const canonical = page.path ? `https://www.eltonbrahja.eu/${page.path}` : 'https://www.eltonbrahja.eu';
      const bodyHtml = page.customHtml || `
        <main class="page-container" style="max-width:1100px;margin:0 auto;padding:40px 20px;">
          <h1>${page.h1}</h1>
          <p>${page.description}</p>
        </main>
      `;

      const html = buildHtml({
        title: page.title,
        description: page.description,
        canonical,
        bodyHtml
      });

      saveHtml(page.path, html);
    }

    // 2. Prerender Articoli Blog IT & EN
    for (const item of blogPosts) {
      const postIt = item.it;
      if (postIt) {
        const canonical = `https://www.eltonbrahja.eu/blog/${item.id}`;
        let articleMarkup = '';
        try {
          if (postIt.content) {
            articleMarkup = renderToStaticMarkup(postIt.content);
          }
        } catch (err) {
          console.warn(`Impossibile fare renderToStaticMarkup per ${item.id}:`, err.message);
        }

        const bodyHtml = `
          <div class="blog-container" style="max-width:850px;margin:0 auto;padding:40px 20px;">
            <article class="single-article-view">
              <header class="article-header">
                <div class="article-meta" style="margin-bottom:12px;opacity:0.8;">
                  <span>${postIt.date || ''}</span> • 
                  <span>${postIt.readTime || ''}</span> • 
                  <span>${postIt.category || ''}</span>
                </div>
                <h1 class="article-title">${postIt.title}</h1>
              </header>
              ${postIt.image ? `
                <div class="article-hero-image" style="margin:24px 0;">
                  <img src="${postIt.image}" alt="${postIt.title}" style="max-width:100%;border-radius:12px;" />
                </div>
              ` : ''}
              <div class="article-body">
                ${articleMarkup}
              </div>
            </article>
          </div>
        `;

        const fullSchema = {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": postIt.title,
              "description": postIt.excerpt,
              "image": postIt.image?.startsWith('http') ? postIt.image : `https://www.eltonbrahja.eu${postIt.image || ''}`,
              "datePublished": postIt.date || "2026-01-01",
              "author": {
                "@type": "Person",
                "name": "Elton Brahja",
                "url": "https://www.eltonbrahja.eu"
              },
              "publisher": {
                "@type": "Person",
                "name": "Elton Brahja",
                "url": "https://www.eltonbrahja.eu"
              }
            },
            ...(postIt.schema ? [postIt.schema] : [])
          ]
        };

        const html = buildHtml({
          title: postIt.seoTitle || `${postIt.title} | Elton Brahja`,
          description: postIt.excerpt || '',
          canonical,
          ogImage: postIt.image?.startsWith('http') ? postIt.image : `https://www.eltonbrahja.eu${postIt.image || '/foto-profilo.webp'}`,
          schemaJson: fullSchema,
          bodyHtml
        });

        saveHtml(`blog/${item.id}`, html);
      }

      // Versione EN se presente
      const postEn = item.en;
      if (postEn) {
        const canonical = `https://www.eltonbrahja.eu/en/blog/${item.id}`;
        let articleMarkup = '';
        try {
          if (postEn.content) {
            articleMarkup = renderToStaticMarkup(postEn.content);
          }
        } catch (err) {
          // ignore
        }

        const bodyHtml = `
          <div class="blog-container" style="max-width:850px;margin:0 auto;padding:40px 20px;">
            <article class="single-article-view">
              <header class="article-header">
                <div class="article-meta" style="margin-bottom:12px;opacity:0.8;">
                  <span>${postEn.date || ''}</span> • 
                  <span>${postEn.readTime || ''}</span> • 
                  <span>${postEn.category || ''}</span>
                </div>
                <h1 class="article-title">${postEn.title}</h1>
              </header>
              ${postEn.image ? `
                <div class="article-hero-image" style="margin:24px 0;">
                  <img src="${postEn.image}" alt="${postEn.title}" style="max-width:100%;border-radius:12px;" />
                </div>
              ` : ''}
              <div class="article-body">
                ${articleMarkup}
              </div>
            </article>
          </div>
        `;

        const html = buildHtml({
          title: postEn.seoTitle || `${postEn.title} | Elton Brahja`,
          description: postEn.excerpt || '',
          canonical,
          ogImage: postEn.image?.startsWith('http') ? postEn.image : `https://www.eltonbrahja.eu${postEn.image || '/foto-profilo.webp'}`,
          bodyHtml
        });

        saveHtml(`en/blog/${item.id}`, html);
      }
    }

    console.log('✅ Prerendering completato con successo! Tutti i file HTML statici sono pronti per i bot di Google.');
  } finally {
    await vite.close();
  }
}

prerender().catch(err => {
  console.error('Errore durante il prerendering:', err);
  process.exit(1);
});
