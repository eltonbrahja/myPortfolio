# Design Spec: Nuovo Articolo "Sito web per B&B e case vacanza"

Questo documento definisce la struttura tecnica, i metadati e il piano di integrazione per il nuovo articolo incentrato sui siti web per B&B e case vacanza, mirato ad acquisire lead di gestori di strutture ricettive (Middle/Bottom of Funnel).

## 1. Dettagli Articolo e SEO
* **ID / Slug**: `sito-web-bnb-case-vacanza`
* **Keyword Principale**: `sito per b&b`
* **Keyword Secondarie**: `sito bed and breakfast + città` (es: `sito bed and breakfast Roma`), `ottimizzazione seo locale b&b`, `motore prenotazione b&b`, `channel manager casa vacanze`
* **Intento di Ricerca**: Informativo/Decisionale per proprietari e gestori di strutture ricettive.
* **Categoria**: `SEO Locale` / `Local SEO`
* **Pagine correlate per Interlinking**:
  * **Link in uscita dal nuovo articolo**:
    * A [seo-locale-google-maps.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti\portfolio/src/data/articles/seo-locale-google-maps.jsx) (Anchor: "SEO locale e Google Maps")
    * A [sito-clienti-locali.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti\portfolio/src/data/articles/sito-clienti-locali.jsx) (Anchor: "come un sito web porta clienti locali")
    * A [10-errori-sito-piccole-attivita.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti\portfolio/src/data/articles/10-errori-sito-piccole-attivita.jsx) (Anchor: "10 errori comuni da evitare")
    * A `/#contact` (Anchor: "Contattami per parlarne →" e la CTA finale)
  * **Link in entrata dai vecchi articoli**:
    * Da [seo-locale-google-maps.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti\portfolio/src/data/articles/seo-locale-google-maps.jsx) verso il nuovo articolo.
    * Da [sito-clienti-locali.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti\portfolio/src/data/articles/sito-clienti-locali.jsx) verso il nuovo articolo.

## 2. Modifiche Architetturali
* **Spostamento / Copia Asset**:
  * Da: `c:\Users\elton_kvh7ex\Desktop\siti\portfolio\bnbSito.webp`
  * A: `c:\Users\elton_kvh7ex\Desktop\siti\portfolio\public\bnbSito.webp`
* **Nuovi File Articolo**:
  * Italiano: [src/data/articles/sito-web-bnb-case-vacanza.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/articles/sito-web-bnb-case-vacanza.jsx)
  * Inglese: [src/data/articles/sito-web-bnb-case-vacanza-en.jsx](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/articles/sito-web-bnb-case-vacanza-en.jsx)
* **Aggiornamento posts.js**:
  * Registrazione di `sitoWebBnbCaseVacanzaPost` e `sitoWebBnbCaseVacanzaPostEn` in [src/data/posts.js](file:///c:/Users/elton_kvh7ex/Desktop/siti/portfolio/src/data/posts.js).

## 3. Struttura del Contenuto dell'Articolo

L'articolo sarà composto da due versioni (italiano ed inglese) modellate secondo la seguente struttura in JSX:

### Sezioni del Contenuto (Italiano):
1. **Introduzione**: La trappola delle commissioni delle OTA (Booking/Airbnb) al 15-20% e perché un sito web proprietario è indispensabile per la disintermediazione e per riempire le stanze fuori stagione.
2. **1. Il Motore di Prenotazione Diretto (Booking Engine) (H2)**:
   * Spiegare come un sistema semplice, sicuro e immediato permetta agli ospiti di prenotare direttamente senza pagare commissioni.
3. **2. SEO Locale: Intercettare le ricerche "B&B + Città" (H2)**:
   * Come ottimizzare il sito web e collegarlo alla scheda Google Business Profile/Google Maps per intercettare gli utenti pronti a prenotare.
4. **3. Pacchetti ed Esperienze per battere la bassa stagione (H2)**:
   * Come promuovere soggiorni a tema, workshop o collaborazioni locali che non si possono vendere efficacemente tramite OTA.
5. **4. Fotografie professionali e Riprova Sociale (H2)**:
   * L'impatto visivo delle camere e le recensioni dei clienti passati integrate in modo trasparente sul sito.
6. **5. Integrazione Tecnica: Il ruolo del Channel Manager (H2)**:
   * Evitare i doppi inserimenti e l'overbooking sincronizzando in tempo reale il sito con Booking e Airbnb.
7. **FAQ - Domande frequenti sul sito per B&B (H2)**:
   * *Perché avere un sito se sono già su Booking/Airbnb?*
   * *Come posso attirare clienti fuori stagione?*
   * *Un piccolo B&B ha davvero bisogno di un Channel Manager?*
8. **CTA Finale**:
   * Box con gradient/border e link all'ancora `#contact` per richiedere un'analisi gratuita della homepage del proprio B&B.

### Sezioni del Contenuto (Inglese):
* Stessa gerarchia di sezioni, tradotte in modo professionale e con i link interni che puntano alle versioni `/en/blog/...` e `/en#contact`.
