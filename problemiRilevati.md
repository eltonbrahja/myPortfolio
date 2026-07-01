# Audit tecnico SEO per eltonbrahja.eu e sezione /blog

## Overview

Questo report sintetizza i principali punti tecnici rilevanti per l’indicizzazione e la qualità SEO del sito eltonbrahja.eu, con focus sulla pagina `/blog` e sull’impatto potenziale su Google Search e Google Ads.

Le verifiche sono state effettuate analizzando l’HTML della homepage, della pagina blog, il file `robots.txt` e la `sitemap.xml` pubblicati sul dominio, oltre alla struttura dei contenuti del blog e dei relativi articoli.[^1][^2][^3][^4]

***

## 1. Robots.txt

### 1.1 Contenuto attuale

Il file `https://www.eltonbrahja.eu/robots.txt` risulta composto da:

```txt
User-agent: *
Allow: /

Sitemap: https://www.eltonbrahja.eu/sitemap.xml
```

Questo significa:
- Nessun percorso è esplicitamente bloccato alla scansione dei crawler (Google compreso).[^1]
- È presente il riferimento esplicito alla sitemap XML del sito, cosa positiva per la scoperta degli URL.[^1]

### 1.2 Azioni consigliate

- Lasciare `Allow: /` così com’è, salvo casi futuri in cui servirà bloccare aree tecniche o ambienti di test.
- Verificare periodicamente che `robots.txt` non venga sovrascritto da deploy automatici.

***

## 2. Sitemap XML

### 2.1 Struttura attuale

La sitemap `https://www.eltonbrahja.eu/sitemap.xml` contiene almeno le principali pagine del sito in italiano:

- `/` (homepage)
- `/about`
- `/services`
- `/portfolio`
- `/contact`
- `/blog`

Per ciascuna voce sono presenti tag come `lastmod`, `changefreq` e `priority`, con `/blog` indicata con `priority` 0.9 e `changefreq` weekly.[^1]

### 2.2 Punti di forza

- La presenza di `/blog` come URL separato nella sitemap segnala a Google che la sezione blog è importante e viene aggiornata.[^3]
- I tag `lastmod` e `changefreq` sono utili come hint (anche se non vincolanti) per la frequenza di aggiornamento.

### 2.3 Azioni consigliate

- Verificare che la sitemap includa **anche gli URL dei singoli articoli** del blog, sia in italiano sia in inglese, non solo la pagina indice `/blog`.[^2][^5][^6][^7]
- Aggiornare `lastmod` degli articoli quando vengono modificati contenuti o dati strutturati.

***

## 3. Meta robots, noindex/nofollow

### 3.1 Homepage

- Nella homepage non risulta alcun meta `<meta name="robots" ...>`.
- In assenza di questo meta, Google interpreta di default la pagina come `index,follow`.

### 3.2 Pagina /blog

- Anche la pagina `https://www.eltonbrahja.eu/blog` non presenta alcun `<meta name="robots" ...>`.
- Di conseguenza, anche `/blog` è indicizzabile (`index,follow` implicito).

### 3.3 Link interni

- La pagina blog mostra una lista di articoli con pulsanti o link “Leggi l’articolo” che puntano agli URL dei singoli post.[^3]
- Non risultano pattern evidenti di `rel="nofollow"` sui link interni di navigazione.

### 3.4 Azioni consigliate

Nel codice dei template verificare esplicitamente che:
- Nessuna pagina rilevante (home, blog, articoli) includa meta come:
  - `<meta name="robots" content="noindex">`
  - `<meta name="robots" content="noindex,nofollow">`
- I link interni verso articoli, servizi, portfolio e contact **non** usino `rel="nofollow"` se fanno parte della navigazione normale.

***

## 4. Canonical e meta della pagina /blog

Questo è il punto tecnico più critico rilevato.

### 4.1 Situazione attuale

- La pagina `/blog` utilizza un set di meta molto simile (o identico) alla homepage: titolo, description e meta Open Graph.[^3]
- Il canonical della pagina blog punta alla homepage, cioè:

```html
//www.eltonbrahja.eu/" />
```

- Anche alcuni meta Open Graph (`og:url`, `og:title`, `og:description`) risultano allineati all’URL principale, non alla pagina blog.[^3]

### 4.2 Effetti possibili

- Google può interpretare `/blog` come contenuto duplicato o molto simile alla homepage, perché il canonical indica che la “versione principale” è `/`.
- La pagina blog potrebbe quindi essere de-prioritizzata come URL autonomo, riducendo la sua capacità di posizionarsi per query legate ai contenuti del blog.
- Le anteprime su social e le informazioni semantiche per `/blog` possono risultare non ottimizzate.

### 4.3 Modifiche consigliate (priorità alta)

Per la pagina `/blog`:

1. **Canonical dedicato**
   ```html
   //www.eltonbrahja.eu/blog" />
   ```

2. **Meta title e description specifici**
   - Titolo HTML orientato al blog, es.:
     - `Il mio blog su siti web veloci, SEO e UX | Elton Brahja`
   - Meta description che descrive scopo e contenuti del blog, es.:
     - `Guide pratiche su siti web veloci, SEO locale, UX e marketing digitale per professionisti e attività locali.`

3. **Open Graph allineati alla pagina blog**
   Esempio:
   ```html
   <meta property="og:url" content="https://www.eltonbrahja.eu/blog" />
   <meta property="og:title" content="Il blog di Elton Brahja su siti web, SEO e UX" />
   <meta property="og:description" content="Articoli e guide per professionisti e attività locali che vogliono un sito web che porta clienti." />
   ```

Applicando queste modifiche, `/blog` acquisisce un’identità SEO autonoma e più chiara.

***

## 5. Hreflang e versione inglese

### 5.1 Situazione attuale

- La homepage utilizza hreflang per indicare le versioni italiana, inglese e una versione `x-default`, collegate rispettivamente a `/` e `/en`.[^8][^4]
- Nel blog sono presenti articoli sia in italiano sia in inglese, con URL del tipo `/blog/...` e `/en/blog/...`.[^9][^10]

### 5.2 Problema potenziale

- Se hreflang è configurato solo a livello di homepage, Google potrebbe non avere un segnale chiaro sulle corrispondenze lingua specifiche per la sezione blog.
- Questo può ridurre la precisione del targeting internazionale dei contenuti (es. quale versione mostrare a un utente anglofono che cerca una guida sul blog).

### 5.3 Modifiche consigliate

Per le pagine blog:

- Su `/blog` (versione italiana):
  ```html
  //www.eltonbrahja.eu/blog" />
  //www.eltonbrahja.eu/en/blog" />
  //www.eltonbrahja.eu/blog" />
  ```

- Su `/en/blog` (versione inglese):
  ```html
  //www.eltonbrahja.eu/blog" />
  //www.eltonbrahja.eu/en/blog" />
  //www.eltonbrahja.eu/en/blog" />
  ```

Analogamente, sui singoli articoli IT/EN andrebbero configurate le rispettive coppie hreflang.

***

## 6. Struttura contenuti della pagina blog

### 6.1 Composizione della pagina

- La pagina `/blog` presenta un heading principale (“Il mio Blog.”) e una lista di articoli suddivisi per categorie (Business & Budget, Copywriting, Web Design, SEO Locale, ecc.).[^3]
- Ogni articolo ha un titolo descrittivo, un estratto o descrizione breve e un link/pulsante “Leggi l’articolo”.[^5][^6][^7][^10][^2]

### 6.2 Punti di forza

- I temi degli articoli sono altamente coerenti con il posizionamento della homepage: siti web veloci, SEO locale, UX, performance, Vercel, ecc.[^6][^7][^10][^2][^5]
- Questo rafforza la rilevanza semantica del dominio per query legate a sviluppo web, SEO e marketing digitale.

### 6.3 Migliorie consigliate

1. **Introduzione testuale alla pagina blog**
   Aggiungere un breve paragrafo introduttivo sopra la lista degli articoli, che spieghi:
   - a chi è indirizzato il blog (professionisti, artigiani, studi, attività locali);
   - quali problemi affronta (SEO locale, siti che portano clienti, web performance);
   - frequenza di pubblicazione.

2. **Interlinking interno strategico**
   - Dalla homepage linkare la pagina `/blog` con un anchor descrittivo, ad esempio:
     - "Scopri le guide del mio blog su siti web e SEO locale".[^4]
   - Dai singoli articoli linkare pagine come `/services` e `/portfolio` quando pertinenti, per guidare l’utente verso la conversione e far capire a Google la relazione tra contenuti informativi e pagine transazionali.[^11][^1]

***

## 7. Performance e Lighthouse (focus su /blog)

### 7.1 Osservazioni dal codice

Pur non avendo eseguito Lighthouse/PageSpeed Insights direttamente su `https://www.eltonbrahja.eu/blog` in questa analisi, dal codice emergono alcuni elementi:

- Caricamento di font tramite Google Fonts con `preconnect` e/o `preload`.
- Preload di un video (`/video-hero.mp4`) usato per la homepage; se questo preload è presente anche sulla pagina blog, potrebbe essere superfluo.
- Presenza di asset JS e CSS bundlati per l’app frontend, tipica di un framework React/SPA.

### 7.2 Rischi potenziali

- Un eventuale preload di risorse pesanti (video, immagini di eroe) sulla pagina blog può aumentare LCP e peggiorare la percezione di performance, soprattutto da mobile.
- Bundle JS troppo pesanti per una semplice lista articoli possono incidere su tempo di interazione.

### 7.3 Azioni consigliate

1. **Misurazioni reali**
   - Eseguire PageSpeed Insights su `https://www.eltonbrahja.eu/blog` (desktop e mobile).
   - Eseguire Lighthouse da Chrome DevTools con throttling mobile.

2. **Ottimizzazioni possibili**
   - Rimuovere o condizionare il preload del video sulla pagina blog, se non necessario sopra la fold.
   - Verificare che immagini e eventuali miniature siano:
     - ottimizzate (es. WebP, dimensioni coerenti);
     - lazy‑loaded dove possibile.
   - Valutare code splitting per ridurre la dimensione del bundle JS caricato sulla pagina blog.

Queste ottimizzazioni migliorano sia SEO tecnica sia il Quality Score delle landing usate per Google Ads.

***

## 8. Impatto su Google Search e Google Ads

### 8.1 Indicizzazione e visibilità organica

- Robots e sitemap sono configurati in modo da **non bloccare** l’indicizzazione del sito e della pagina `/blog`.[^1]
- L’assenza di meta `noindex` e `nofollow` sulle pagine chiave permette a Google di scansionare e indicizzare correttamente.
- Il problema principale riguarda il canonical della pagina blog: puntando alla homepage, riduce la capacità di `/blog` di essere trattata come entità autonoma nei risultati di ricerca.[^3]

### 8.2 Qualità della landing per Google Ads

- Il dominio integra correttamente il tag Google Ads (`AW-18035288276`) nel `<head>`, consentendo il tracciamento delle conversioni e delle attività di advertising.[^4]
- Migliorare canonical, meta specifici e performance della pagina blog porta benefici anche in termini di:
  - migliore coerenza tra annuncio, query utente e contenuto della landing;
  - potenziale aumento del Quality Score;
  - riduzione del bounce rate.

***

## 9. Checklist sintetica per l’AI agent

La seguente checklist è pensata per essere consumata da un AI agent che applicherà le modifiche al codice del sito.

### 9.1 Canonical e meta

- [ ] Homepage: confermare che il canonical punti a `https://www.eltonbrahja.eu/`.
- [ ] Pagina blog (`/blog`):
  - [ ] Impostare canonical su `https://www.eltonbrahja.eu/blog`.
  - [ ] Impostare `<title>` specifico per il blog.
  - [ ] Impostare meta description dedicata al blog.
  - [ ] Aggiornare `og:url`, `og:title`, `og:description` in funzione della pagina blog.

- [ ] Singoli articoli:
  - [ ] Impostare canonical sull’URL completo dell’articolo (IT/EN).

### 9.2 Hreflang

- [ ] Pagina `/blog` (IT): aggiungere `link rel="alternate"` per `it`, `en`, `x-default` con URL corretti.
- [ ] Pagina `/en/blog` (EN): idem, puntando alle due varianti.
- [ ] Singoli articoli IT/EN: configurare coppie hreflang tra versioni tradotte.

### 9.3 Robots e sitemap

- [ ] Verificare che `robots.txt` mantenga:
  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: https://www.eltonbrahja.eu/sitemap.xml`

- [ ] Aggiornare `sitemap.xml` per includere:
  - [ ] URL di tutti gli articoli del blog (IT + EN).
  - [ ] Tag `lastmod` corretti per ogni articolo.

### 9.4 Link interni e contenuti

- [ ] Homepage: aggiungere un link testuale verso `/blog` con anchor descrittivo.
- [ ] Pagina blog: inserire un breve paragrafo introduttivo sopra la lista articoli.
- [ ] Articoli: aggiungere link contestuali verso `/services` e `/portfolio` quando pertinente.

### 9.5 Performance

- [ ] Eseguire Lighthouse/PageSpeed Insights su `https://www.eltonbrahja.eu/blog`.
- [ ] Ridurre o rimuovere preload di risorse pesanti non necessarie sulla pagina blog.
- [ ] Ottimizzare immagini e bundle JS per migliorare LCP, FID e CLS.

***

## 10. Conclusione

Il sito eltonbrahja.eu è tecnicamente indicizzabile e non presenta blocchi evidenti lato robots o sitemap. Tuttavia, la pagina `/blog` necessita di una correzione del canonical e di meta specifici per valorizzare pienamente il suo ruolo sia nella SEO organica sia come landing di qualità per le campagne Google Ads.[^4][^1][^3]

---

## References

1. [Portfolio - Siti Web Veloci, SEO e UX | Brand Identity di Valore](https://www.eltonbrahja.eu/portfolio) - Elton Brahja — Realizzo siti web veloci, eleganti e ottimizzati SEO per il tuo business. Contattami ...

2. [Sito web per artigiani (fabbro, idraulico, elettricista) - elton](https://www.eltonbrahja.eu/blog/sito-web-artigiani-fabbro-idraulico) - Nel mondo dell'artigianato (come per fabbri, idraulici ed elettricisti), il passaparola è da sempre ...

3. [Siti Web Veloci, SEO e UX | Brand Identity di Valore - elton](https://www.eltonbrahja.eu/blog) - Elton Brahja — Realizzo siti web veloci, eleganti e ottimizzati SEO per il tuo business. Contattami ...

4. [Siti Web Veloci, SEO e UX | Brand Identity di Valore](https://www.eltonbrahja.eu) - Elton Brahja — Realizzo siti web veloci, eleganti e ottimizzati SEO per il tuo business. Contattami ...

5. [7 segnali che è ora di rifare il sito della tua attività | Elton Brahja](https://www.eltonbrahja.eu/blog/7-segnali-rifare-sito) - 1. Il sito è troppo lento · 2. Da smartphone è un incubo · 3. La grafica è chiaramente anni 2000 · 4...

6. [Guida semplice per scegliere il tipo di sito giusto per la tua attività ...](https://www.eltonbrahja.eu/blog/guida-tipo-sito-giusto) - 1. Sito vetrina: la tua "scheda" professionale online · 2. Blog: farti trovare su Google e dimostrar...

7. [Vercel: cos'è, come funziona e perché dovresti usarlo per i tuoi ...](https://www.eltonbrahja.eu/blog/vercel-cose-come-funziona) - Vercel è una piattaforma cloud per il deploy e l'hosting di applicazioni web frontend. In parole sem...

8. [Siti Web Veloci, SEO e UX | Brand Identity di Valore](https://www.eltonbrahja.eu/en/portfolio) - Portfolio di Elton Brahja - Sviluppatore Web & UI Designer. Creazione di esperienze web veloci, eleg...

9. [How to use your website's blog to bring in local customers ... - elton](https://www.eltonbrahja.eu/en/blog/blog-per-portare-clienti-locali) - If you are a web designer (like eltonbrahja): "How to know if it's time to redo your website". If yo...

10. [Come usare il blog del tuo sito per portare clienti locali ... - elton](https://www.eltonbrahja.eu/blog/blog-per-portare-clienti-locali) - Se sei un web designer (come eltonbrahja): "Come capire se è il momento di rifare il sito web". Se h...

11. [Siti Web Veloci, SEO e UX | Brand Identity di Valore - Elton Brahja](https://www.eltonbrahja.eu/portfolio/custom-booking) - Elton Brahja — Realizzo siti web veloci, eleganti e ottimizzati SEO per il tuo business. Contattami ...

