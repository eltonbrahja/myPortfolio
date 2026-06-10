# Design Spec: Nuovo Articolo "Quanto costa rifare un sito web"

Questo documento definisce la struttura tecnica, i metadati e il piano di integrazione per il nuovo articolo incentrato sul costo di rifacimento di un sito web, mirato ad utenti in fase decisionale (restyling).

## 1. Dettagli Articolo e SEO
* **ID / Slug**: `quanto-costa-rifare-sito-web`
* **Keyword Principale**: `rifare sito web costo 2026`
* **Keyword Secondarie**: `restyling sito web`, `costo restyling sito web`, `perdita posizionamento SEO restyling`
* **Intento di Ricerca**: Decisionale con pricing (Bottom of Funnel - BOFU)
* **Pagine correlate per Interlinking**:
  * Collegamento da questo articolo verso [sito-abbonamento-vs-pagamento-unico.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/articles/sito-abbonamento-vs-pagamento-unico.jsx)
  * Collegamento da questo articolo verso [checklist-sito-web-controlli-online.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/articles/checklist-sito-web-controlli-online.jsx)
  * Collegamento da questo articolo verso [10-errori-sito-piccole-attivita.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/articles/10-errori-sito-piccole-attivita.jsx)
  * Collegamento da [quanto-costa-sito-web.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/articles/quanto-costa-sito-web.jsx) (vecchio articolo) verso questo nuovo articolo.

## 2. Modifiche Architetturali
* **Spostamento Asset**:
  * Da: `c:\Users\elton_kvh7ex\Desktop\siti\portfolio\fotoarticoloRestyling.webp`
  * A: `c:\Users\elton_kvh7ex\Desktop\siti\portfolio\public\fotoarticoloRestyling.webp`
* **Nuovo File Articolo (Italiano)**:
  * [src/data/articles/quanto-costa-rifare-sito-web.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/articles/quanto-costa-rifare-sito-web.jsx)
* **Aggiornamento posts.js**:
  * Registrazione di `quantoCostaRifareSitoWebPost` in [src/data/posts.js](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/posts.js) (lingua `it`, con `en` impostata a `null` in attesa di traduzione).

## 3. Struttura del Contenuto dell'Articolo

L'articolo sarà esportato come modulo React contenente i metadati e il corpo in JSX.

```javascript
import React from 'react';

export const quantoCostaRifareSitoWebPost = {
  id: "quanto-costa-rifare-sito-web",
  title: "Quanto costa rifare un sito web che hai già (senza buttare soldi)",
  excerpt: "Vuoi rifare il tuo sito web? Scopri quanto costa davvero un restyling nel 2026, come capire se ti serve da zero e come proteggere la tua SEO senza sprecare budget.",
  date: "10 Giugno 2026",
  readTime: "6 min di lettura",
  category: "Costi & Strategia",
  image: "/fotoarticoloRestyling.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // Schema JSON-LD FAQPage
    ]
  },
  content: (
    <div className="article-body">
      {/* Contenuto dell'articolo con tag HTML semantici (p, h2, h3, ul, strong, ecc.) */}
    </div>
  )
};
```

### Sezioni del Contenuto:
1. **Introduzione**: Evidenziare il dilemma del restyling e la necessità di spendere in modo intelligente.
2. **Restyling grafico, ottimizzazione o rifacimento da zero? Fai questo test (H2)**:
   * *Quando NON serve rifare tutto (H3)*: Ottimizzazione performance, copywriting, SEO locale.
   * *Quando è indispensabile rifare da zero (H3)*: Piattaforma obsoleta, codice non responsive, UX disastrosa.
3. **Quanto costa rifare un sito web nel 2026? (H2)**:
   * *Fattori di prezzo (H3)*: Contenuti salvabili, integrazioni tecniche, migrazione SEO.
   * *Fasce di prezzo indicative (H3)*:
     * Ottimizzazione/Restyling leggero: 500€ - 1.200€
     * Rifacimento completo professionale: 1.200€ - 2.500€
     * E-commerce / Soluzioni complesse: >3.000€
4. **Come proteggere la tua SEO e non perdere clienti su Google (H2)**:
   * *Lo scudo SEO: redirect 301 (H3)*: Perché mappare gli URL.
   * *Preservare la struttura dei contenuti (H3)*: Mantenere le pagine che già portano traffico.
5. **Come evitare di buttare soldi (e preventivi gonfiati) (H2)**:
   * Consigli su analisi preventiva e focalizzazione sugli obiettivi aziendali.
6. **FAQ - Domande frequenti sul rifacimento del sito (H2)**:
   * Mantenimento dominio/hosting, tempi di realizzazione, impatto SEO.
7. **CTA Finale**:
   * Box con gradient/border e link all'ancora `#contact` per richiedere un'analisi gratuita del proprio sito.
