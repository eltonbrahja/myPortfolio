import React from 'react';



export const checklistSitoWebControlliOnlinePost = {
  id: "checklist-sito-web-controlli-online",
  title: "Checklist sito web: 15 controlli prima di andare online",
  excerpt: "Lancia il tuo sito web senza errori. Ecco la checklist definitiva con 15 controlli fondamentali prima di andare online per convertire e vendere.",
  date: "9 Giugno 2026",
  readTime: "7 min di lettura",
  category: "SEO & Performance",
  image: "/articoloChecklist.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Perché la velocità del sito è così importante prima del lancio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La velocità influisce direttamente sulle conversioni: se un sito impiega troppo a caricare, gli utenti lo abbandonano immediatamente. Inoltre, Google la considera un fattore di posizionamento ufficiale, penalizzando i siti lenti."
        }
      },
      {
        "@type": "Question",
        "name": "Cosa succede se dimentico il certificato SSL (HTTPS)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I browser mostreranno un messaggio di avviso rosso contrassegnando il sito come non sicuro. Questo compromette la fiducia del visitatore e penalizza gravemente l'indicizzazione su Google."
        }
      },
      {
        "@type": "Question",
        "name": "Posso usare immagini in formato JPG sul mio sito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, ma è consigliabile usare il formato WebP. Offre la stessa qualità visiva riducendo il peso del file del 30% circa, con un netto beneficio sulla velocità di caricamento."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        Hai passato settimane a pianificare, scrivere testi e rifinire la grafica. Finalmente il tuo nuovo sito web è pronto. O almeno, così sembra.
        Mettere online un sito senza fare un controllo sistematico è uno dei rischi più grandi per una piccola attività. Un piccolo errore tecnico, una pagina lenta o un modulo contatti che non funziona possono bruciare visite e potenziali clienti fin dal primo giorno.
      </p>

      <p>
        Per questo abbiamo preparato la <strong>checklist del sito web definitiva</strong>: 15 controlli fondamentali divisi per aree tematiche (Tecnica, SEO, Conversioni e Performance) da effettuare rigorosamente prima di premere il tasto "pubblica".
      </p>

      <div className="article-toc">
        <div className="toc-title">Indice</div>
        <ol className="toc-list">
          <li><a href="#usabilita">1. Usabilità e Conversioni (UX)</a></li>
          <li><a href="#seo">2. SEO On-Page</a></li>
          <li><a href="#performance">3. Performance e Velocità</a></li>
          <li><a href="#tecnico">4. Aspetti Tecnici e Legali</a></li>
        </ol>
      </div>

      <h2 id="usabilita">1. Usabilità e Conversioni (UX)</h2>
      <p>Un sito bello ma incomprensibile non vende. La prima cosa da verificare è che il percorso dell'utente sia fluido e privo di ostacoli.</p>
      
      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>I contatti sono facili da trovare?</strong> Sembra banale, ma molti siti nascondono il numero di telefono o l'indirizzo email. Assicurati che i tuoi recapiti principali siano ben visibili nell'header (in alto) e nel footer (in basso) di ogni pagina. Creare una pagina contatti semplice e immediata è fondamentale per evitare di far scappare i clienti, come spiegato nella nostra guida sui <a href="/blog/10-errori-sito-piccole-attivita">10 errori comuni dei siti web da evitare</a>.
        </li>
        <li>
          <strong>C'è una Call to Action (CTA) chiara above the fold?</strong> "Above the fold" è la parte di schermo visibile subito, prima di fare scroll. Lì deve esserci la tua chiamata all'azione primaria (es. "Richiedi un preventivo" o "Prenota una consulenza"). Un solo bottone principale, colore contrastante, testo orientato al beneficio.
        </li>
        <li>
          <strong>I moduli di contatto funzionano davvero?</strong> Fai un test reale: compila tutti i form del sito. Verifica se i dati arrivano correttamente alla tua casella email e se l'utente viene reindirizzato a una pagina di ringraziamento (Thank You Page) chiara.
        </li>
        <li>
          <strong>Il sito è responsive (ottimizzato per smartphone)?</strong> Oltre il 60% dei tuoi clienti navigherà da telefono. Apri il sito da diversi smartphone e controlla che i testi siano leggibili senza zoomare e i pulsanti facilmente cliccabili con il pollice.
        </li>
      </ul>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Hai dei dubbi sulla UX o sul posizionamento delle CTA del tuo sito? <a href="/#contact">Richiedi un'analisi gratuita della UX della tua homepage →</a>
      </p>

      <h2 id="seo">2. SEO On-Page (Ottimizzazione per i motori di ricerca)</h2>
      <p>Per farsi trovare su Google, ogni pagina deve seguire regole strutturali precise.</p>

      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>C'è un solo tag H1 per pagina?</strong> Il tag H1 è il titolo principale del tuo articolo o della tua pagina. Google lo usa per capire l'argomento centrale. Assicurati che ce ne sia uno solo e che contenga la keyword principale. I titoli interni devono seguire una gerarchia logica (H2 per i macro-argomenti, H3 per i sotto-punti).
        </li>
        <li>
          <strong>I Title Tag e le Meta Description sono ottimizzati?</strong> Ogni pagina deve avere un titolo (sotto i 60 caratteri con la keyword principale all'inizio) e una descrizione (sotto i 150 caratteri, persuasiva e orientata al click) personalizzati.
        </li>
        <li>
          <strong>Le immagini hanno il tag "Alt"?</strong> Google non legge le immagini, legge i testi alternativi. Inserisci una descrizione breve e descrittiva per ogni immagine importante del sito per migliorare il posizionamento su Google Immagini e garantire l'accessibilità.
        </li>
        <li>
          <strong>I link interni funzionano ed usano anchor text descrittivi?</strong> Evita link generici come "clicca qui". Usa anchor text descrittivi che spiegano a Google e all'utente dove stanno andando (es. "scopri il nostro servizio di <a href="/services">realizzazione siti web per piccole attività</a>"). Se vuoi approfondire le dinamiche dei costi prima di partire, leggi il nostro confronto tra <a href="/blog/sito-abbonamento-vs-pagamento-unico">sito web in abbonamento e pagamento unico</a>.
        </li>
      </ul>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Vuoi posizionarti sui motori di ricerca e farti trovare dai clienti della tua zona? <a href="/#contact">Scopri come posso ottimizzare la SEO del tuo sito →</a>
      </p>

      <h2 id="performance">3. Performance e Velocità</h2>
      <p>La velocità di caricamento è un fattore di posizionamento ufficiale per Google e incide direttamente sulle vendite: se il sito ci mette più di 3 secondi a caricare, la metà degli utenti se ne va.</p>

      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Le immagini sono compresse e nel formato corretto?</strong> Non caricare mai foto direttamente dalla fotocamera o ad altissima risoluzione. Usa strumenti di compressione e adotta formati moderni e leggeri come il <strong>WebP</strong> o l'<strong>AVIF</strong> anziché pesanti PNG o JPG.
        </li>
        <li>
          <strong>La velocità è stata testata su PageSpeed Insights?</strong> Fai un test su Google PageSpeed Insights. L'obiettivo è avere un punteggio verde (sopra 90/100) sia per la versione mobile che per quella desktop.
        </li>
        <li>
          <strong>La cache è attiva?</strong> Configura un sistema di caching per fare in modo che il browser dei visitatori salvi una copia statica del sito, riducendo i tempi di caricamento alle visite successive.
        </li>
      </ul>

      <h2 id="tecnico">4. Aspetti Tecnici e Legali</h2>
      <p>Gli ultimi dettagli, spesso invisibili ma fondamentali per la sicurezza e la conformità legale.</p>

      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Il certificato SSL (HTTPS) è attivo?</strong> Il tuo URL deve iniziare con <code>https://</code> e mostrare l'icona del lucchetto chiuso. Un sito contrassegnato come "Non sicuro" distrugge all'istante la fiducia dei clienti e viene penalizzato da Google.
        </li>
        <li>
          <strong>La pagina 404 è personalizzata?</strong> Se un utente digita un URL errato, non deve trovarsi davanti a una pagina di errore generica. Crea una pagina 404 personalizzata che mantenga lo stile del sito e offra un link per tornare alla Home.
        </li>
        <li>
          <strong>Cookie Policy e Privacy Policy sono a norma?</strong> In Italia ed Europa (GDPR) è obbligatorio avere una Privacy e Cookie policy aggiornata, con un banner di consenso preventivo che blocca i tracciamenti finché l'utente non accetta.
        </li>
        <li>
          <strong>Google Search Console e Analytics sono configurati?</strong> Collega il sito a Google Search Console per monitorare l'indicizzazione delle pagine e a Google Analytics (GA4) per tracciare le visite e il comportamento degli utenti fin dal primo giorno di lancio.
        </li>
      </ul>

      <h2>FAQ - Domande Frequenti sulla Checklist di Lancio</h2>
      <dl className="faq-list">
        <dt>Perché la velocità del sito è così importante prima del lancio?</dt>
        <dd>La velocità influisce direttamente sulle conversioni. Se un sito è lento, gli utenti lo abbandonano prima ancora di vedere la tua offerta. Inoltre, Google penalizza i siti lenti posizionandoli più in basso nelle ricerche.</dd>
        
        <dt>Cosa succede se dimentico il certificato SSL (HTTPS)?</dt>
        <dd>I browser moderni mostreranno un avviso di sicurezza rosso ("Sito non sicuro") a chiunque cerchi di entrare. Questo spaventa gli utenti e riduce drasticamente le visite e le conversioni.</dd>
        
        <dt>Posso usare immagini in formato JPG sul mio sito?</dt>
        <dd>È preferibile convertire e comprimere tutte le immagini in formati di nuova generazione come <strong>WebP</strong>. Il WebP mantiene una qualità visiva eccellente ma pesa fino al 30% in meno rispetto al JPG, velocizzando il caricamento della pagina.</dd>
      </dl>

      <h2>Conclusioni: cosa fare adesso</h2>
      <p>
        Affidare la creazione del sito a un professionista significa avere la certezza che ognuno di questi 15 punti sia gestito in modo impeccabile "sotto il cofano", facendoti risparmiare tempo ed evitando costosi errori post-lancio.
        Se hai un sito web quasi pronto o già online e vuoi essere sicuro che stia funzionando al meglio delle sue potenzialità, possiamo farlo insieme.
      </p>

      <div style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '40px',
        marginTop: '60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#fff', marginTop: 0 }}>
          Vuoi un sito web che vende fin dal primo giorno?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Posso fare un'analisi gratuita della tua presenza online e darti un feedback sincero su velocità, ottimizzazione mobile e SEO del tuo sito attuale o in fase di sviluppo.
        </p>
        <a href="/#contact" className="filter-chip active" style={{ 
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          padding: '12px 32px',
          fontSize: '15px',
          fontWeight: '600',
          borderRadius: '9999px',
          boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
          border: 'none',
          color: '#fff',
          background: 'var(--accent-color)'
        }}>
          Richiedi un'analisi gratuita del tuo sito →
        </a>
      </div>
    </div>
  )
};
