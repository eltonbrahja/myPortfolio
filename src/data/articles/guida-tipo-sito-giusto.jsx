import React from 'react';

const sourceLinkStyle = {
  fontSize: '11px',
  fontWeight: '600',
  color: 'var(--accent-color)',
  background: 'rgba(168, 85, 247, 0.08)',
  border: '1px solid rgba(168, 85, 247, 0.15)',
  padding: '2px 6px',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2px',
  marginLeft: '6px',
  verticalAlign: 'middle',
  transition: 'all 0.2s ease',
};

export const guidaTipoSitoGiustoPost = {
  id: "guida-tipo-sito-giusto",
  title: "Guida semplice per scegliere il tipo di sito giusto per la tua attività",
  excerpt: "Non tutti i siti sono uguali: un negozio ha esigenze diverse da uno studio professionale. Capire che tipo di sito ti serve è il primo passo per non sprecare soldi e avere qualcosa che ti porta davvero clienti.",
  date: "23 Maggio 2026",
  readTime: "8 min di lettura",
  category: "Web Design",
  image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è la differenza principale tra un sito vetrina e un e-commerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un sito vetrina serve a presentare la tua attività (chi sei, servizi, contatti) e a farti trovare localmente. Un e-commerce include invece un carrello, la gestione dei prodotti e dei sistemi di pagamento per vendere direttamente online."
        }
      },
      {
        "@type": "Question",
        "name": "Posso iniziare con un sito vetrina e aggiungere funzionalità in seguito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, è una pratica consigliata. Puoi iniziare con un sito vetrina semplice ed elegante e, man mano che l'attività cresce, integrare una sezione blog, un sistema di prenotazione appuntamenti o un negozio online completo."
        }
      },
      {
        "@type": "Question",
        "name": "Ho bisogno di un sistema di prenotazione appuntamenti sul mio sito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se la tua attività si basa sulla vendita di servizi a tempo (es. consulenze, trattamenti benessere, sedute mediche o corsi), un sistema di prenotazione automatizzato fa risparmiare tempo e migliora l'esperienza dell'utente, riducendo le telefonate."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        Non tutti i siti sono uguali: un negozio ha esigenze diverse da uno studio professionale, un artigiano da chi vende prodotti online.
        <a href="https://marketingbaker.com/which-type-of-website/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>marketingbaker ↗</a>
        Capire che tipo di sito ti serve è il primo passo per non sprecare soldi e avere qualcosa che ti porta davvero clienti, non solo "presenza online".
        <a href="https://flippingbook.com/blog/marketing-tips/brochure-websites" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>flippingbook ↗</a>
      </p>

      <p>In questa guida ti spiego, senza linguaggio tecnico, i principali tipi di sito per piccole attività e come scegliere quello giusto.</p>

      <div className="article-toc">
        <div className="toc-title">Indice</div>
        <ol className="toc-list">
          <li><a href="#sito-vetrina">Sito vetrina: la tua "scheda" professionale online</a></li>
          <li><a href="#blog">Blog: farti trovare su Google e dimostrare competenza</a></li>
          <li><a href="#ecommerce">E‑commerce: quando vuoi vendere prodotti online</a></li>
          <li><a href="#prenotazioni">Sito con sistema di prenotazioni</a></li>
          <li><a href="#come-capire">Come capire di cosa hai davvero bisogno</a></li>
          <li><a href="#esempi-concreti">Esempi concreti per categoria</a></li>
          <li><a href="#conclusione">Conclusione: parti da quello che ti serve oggi</a></li>
        </ol>
      </div>

      <h2 id="sito-vetrina">1. Sito vetrina: la tua "scheda" professionale online</h2>
      <p>
        Pensa al sito vetrina come al corrispettivo digitale del tuo biglietto da visita o della brochure del tuo studio: dice chi sei, cosa fai, dove ti trovi e come contattarti.
        <a href="https://righthook.co.uk/blog/what-is-a-brochure-website/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>righthook ↗</a>
        Di solito è composto da poche pagine (es. Home, Chi siamo, Servizi, Contatti) ed è perfetto se il tuo obiettivo principale è farti trovare e dare una buona impressione a chi ti cerca.
        <a href="https://wpfoss.ke/blog/ecommerce-vs-brochure-website-kenya/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>wpfoss ↗</a>
      </p>
      <p>È adatto a te se:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Hai uno <strong>studio professionale</strong> (psicologo, avvocato, consulente, commercialista).</li>
        <li>Sei un <strong>artigiano</strong> o una piccola attività locale (idraulico, elettricista, falegname, parrucchiere, estetista).</li>
        <li>Hai un <strong>negozio fisico</strong> e vuoi far vedere chi sei, cosa vendi e come trovarti.</li>
      </ul>
      <p>Cosa deve fare bene un sito vetrina:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Spiegare in modo semplice <strong>chi aiuti e con quali servizi</strong>.</li>
        <li>Trasmettere <strong>fiducia</strong> con foto, recensioni, testimonianze.
          <a href="https://www.webador.com/blog/5-essential-pages-every-small-business-website-needs/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>webador ↗</a>
        </li>
        <li>Rendere facilissimo contattarti: telefono ben visibile, indirizzo, mappa, modulo contatti.
          <a href="https://makemelocal.com/blog/what-is-a-brochure-website" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>makemelocal ↗</a>
        </li>
      </ul>
      <p>Se oggi lavori soprattutto con il passaparola e i clienti ti cercano su Google per "vedere chi sei", il sito vetrina è quasi sempre il punto di partenza giusto.</p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Hai uno studio professionale o un'attività locale e vuoi un sito vetrina elegante e veloce? <a href="/services">Scopri il mio servizio di Realizzazione Siti Vetrina →</a>
      </p>

      <h2 id="blog">2. Blog: farti trovare su Google e dimostrare competenza</h2>
      <p>
        Il blog non è un tipo di sito a parte, ma una <strong>sezione</strong> del sito dove pubblichi articoli utili per i tuoi clienti.
        <a href="https://siteclicks.com.au/blog/7-websites-explained-business-owners/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>siteclicks ↗</a>
        Serve soprattutto a due cose: farti trovare su Google con ricerche specifiche e dimostrare che sai davvero di cosa parli.
      </p>
      <p>È adatto a te se:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Vuoi che i clienti ti trovino cercando <strong>domande specifiche</strong> (es. "come scegliere un materasso ortopedico", "come funziona una consulenza psicologica").
          <a href="https://www.kombee.com/blogs/business-website-types" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>kombee ↗</a>
        </li>
        <li>Offri servizi che richiedono <strong>spiegazioni</strong> e spesso ti trovi a rispondere alle stesse domande.</li>
        <li>Vuoi posizionarti come <strong>esperto</strong> in un certo argomento.</li>
      </ul>
      <p>Esempi pratici:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Uno <strong>studio di fisioterapia</strong> che pubblica articoli su "lombalgia", "mal di collo al lavoro", "come prevenire gli infortuni sportivi".</li>
        <li>Un <strong>negozio di arredamento</strong> che scrive guide su "come scegliere il divano per un salotto piccolo" o "come abbinare colori e materiali".</li>
      </ul>
      <p>
        Il blog funziona bene se gli articoli sono pensati dal punto di vista del cliente, con titoli chiari e linguaggio semplice, non per "fare scena".
        <a href="https://www.mappersgeo.com/knowledge_base/how-to-choose-a-website-for-your-business-a-detailed-guide/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>mappersgeo ↗</a>
      </p>

      <h2 id="ecommerce">3. E‑commerce: quando vuoi vendere prodotti online</h2>
      <p>
        Un e‑commerce è un vero e proprio <strong>negozio online</strong>: le persone possono vedere i prodotti, aggiungerli al carrello e pagarli direttamente dal sito.
        <a href="https://www.kombee.com/blogs/business-website-types" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>kombee ↗</a>
        Non è un semplice "catalogo", ma un sistema che gestisce ordini, pagamenti, spedizioni e spesso magazzino.
        <a href="https://tuesday.is/blog/the-ultimate-guide-to-choosing-the-perfect-website-builder-for-your-small-business" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>tuesday ↗</a>
      </p>
      <p>È adatto a te se:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Vendi <strong>prodotti fisici</strong> (abbigliamento, cosmetici, prodotti artigianali, integratori, ecc.).</li>
        <li>Vendi <strong>prodotti digitali</strong> (corsi online, ebook, contenuti scaricabili).
          <a href="https://daveryanmedia.com/blog/your-small-business-website-a-step-by-step-guide-to-choosing-the-right-web-platform-and-developer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>daveryanmedia ↗</a>
        </li>
        <li>Vuoi che una parte del tuo fatturato arrivi da persone che comprano direttamente online, non solo in negozio.</li>
      </ul>
      <p>Cosa deve fare bene un e‑commerce:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Presentare i prodotti con <strong>foto chiare, descrizioni semplici e prezzi trasparenti</strong>.
          <a href="https://daveryanmedia.com/blog/your-small-business-website-a-step-by-step-guide-to-choosing-the-right-web-platform-and-developer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>daveryanmedia ↗</a>
        </li>
        <li>Offrire un <strong>carrello e un pagamento semplici</strong> (meno passaggi, meno abbandoni).
          <a href="https://tuesday.is/blog/the-ultimate-guide-to-choosing-the-perfect-website-builder-for-your-small-business" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>tuesday ↗</a>
        </li>
        <li>Gestire in modo affidabile <strong>pagamenti, tasse, spedizioni e giacenze</strong>.</li>
      </ul>
      <p>Se oggi hai un negozio fisico e i clienti ti chiedono "posso ordinare online?" o "spedite fuori città?", allora può essere il momento di affiancare all'attività un e‑commerce, magari iniziando con una selezione di prodotti.</p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Vuoi lanciare il tuo shop online per vendere prodotti fisici o digitali? <a href="/#contact">Richiedi un preventivo per il tuo e-commerce →</a>
      </p>

      <h2 id="prenotazioni">4. Sito con sistema di prenotazioni: far prenotare i clienti da soli</h2>
      <p>
        Il sito con sistema di prenotazioni è pensato per far sì che il cliente possa <strong>scegliere giorno e ora</strong> e prenotare da solo, senza telefonate o messaggi avanti e indietro.
        <a href="https://www.mappersgeo.com/knowledge_base/how-to-choose-a-website-for-your-business-a-detailed-guide/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>mappersgeo ↗</a>
        Può includere anche pagamenti anticipati o acconti per bloccare l'appuntamento.
      </p>
      <p>È adatto a te se:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Hai un'attività con <strong>appuntamenti su orario</strong>: parrucchiere, estetista, barber, centro benessere, personal trainer, studio medico o psicologico.</li>
        <li>Organizzi <strong>corsi, lezioni, visite guidate, consulenze</strong>.</li>
      </ul>
      <p>Cosa deve fare bene un sito con prenotazioni:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Mostrare un <strong>calendario chiaro</strong> con le disponibilità.</li>
        <li>Permettere prenotazione e, se necessario, <strong>pagamento online</strong> in pochi passaggi.
          <a href="https://www.kombee.com/blogs/business-website-types" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>kombee ↗</a>
        </li>
        <li>Inviare conferma e promemoria automatici (email o SMS).</li>
      </ul>
      <p>Può essere un sito vetrina con una sezione di prenotazione integrata, oppure un sistema più avanzato se hai tanti servizi e orari da gestire.</p>

      <h2 id="come-capire">Come capire di cosa hai davvero bisogno (senza impazzire)</h2>
      <p>
        Per non perderti tra mille opzioni, puoi partire da tre domande molto semplici:
        <a href="https://www.mappersgeo.com/knowledge_base/how-to-choose-a-website-for-your-business-a-detailed-guide/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>mappersgeo ↗</a>
      </p>

      <div className="table-responsive">
        <table className="article-table">
          <thead>
            <tr>
              <th>Domanda</th>
              <th>Risposta</th>
              <th>Tipo di sito consigliato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }} rowSpan="4">Il tuo obiettivo principale?</td>
              <td>Farti trovare e dare una buona impressione</td>
              <td style={{ color: 'rgba(34, 197, 94, 0.9)', fontWeight: '500' }}>Sito vetrina</td>
            </tr>
            <tr>
              <td>Farti trovare su Google per tante ricerche</td>
              <td style={{ color: 'rgba(34, 197, 94, 0.9)', fontWeight: '500' }}>Vetrina + Blog</td>
            </tr>
            <tr>
              <td>Vendere prodotti</td>
              <td style={{ color: 'rgba(34, 197, 94, 0.9)', fontWeight: '500' }}>E‑commerce</td>
            </tr>
            <tr>
              <td>Far prenotare appuntamenti</td>
              <td style={{ color: 'rgba(34, 197, 94, 0.9)', fontWeight: '500' }}>Vetrina + Prenotazioni</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }} rowSpan="2">Quanto tempo hai per il sito?</td>
              <td>Poco</td>
              <td style={{ color: 'rgba(34, 197, 94, 0.9)', fontWeight: '500' }}>Vetrina semplice ma curata</td>
            </tr>
            <tr>
              <td>Di più</td>
              <td style={{ color: 'rgba(34, 197, 94, 0.9)', fontWeight: '500' }}>Blog, e‑commerce o prenotazioni</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="esempi-concreti">Esempi concreti per categoria</h2>
      <p>Per rendere tutto ancora più pratico, ecco qualche combinazione "tipo" che funziona bene.</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Studio professionale (psicologo, avvocato, consulente)</strong><br />
          Sito vetrina + sezione blog (anche pochi articoli mirati) + modulo contatti e, se utile, prenotazione prima consulenza.
          <a href="https://siteclicks.com.au/blog/7-websites-explained-business-owners/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>siteclicks ↗</a>
        </li>
        <li>
          <strong>Artigiano o attività locale (idraulico, elettricista, falegname, gommista)</strong><br />
          Sito vetrina con pagine servizi chiare, foto dei lavori, mappa e contatti ben visibili; blog solo se hai voglia di pubblicare qualche guida utile.
          <a href="https://www.kombee.com/blogs/business-website-types" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>kombee ↗</a>
        </li>
        <li>
          <strong>Negozio di prodotti fisici</strong><br />
          Se vendi solo in zona: sito vetrina con selezione prodotti e invito a visitare il negozio.<br />
          Se vuoi vendere online: e‑commerce + pagina "Chi siamo" che racconta negozio e storia.
          <a href="https://wpfoss.ke/blog/ecommerce-vs-brochure-website-kenya/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>wpfoss ↗</a>
        </li>
        <li>
          <strong>Parrucchiere, estetista, barber, centro benessere</strong><br />
          Sito vetrina + sistema di prenotazioni online, con listino chiaro e possibilità di scegliere trattamenti, giorno e ora.
          <a href="https://www.mappersgeo.com/knowledge_base/how-to-choose-a-website-for-your-business-a-detailed-guide/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>mappersgeo ↗</a>
        </li>
      </ul>

      <h2>FAQ - Domande Frequenti sulla Scelta del Tipo di Sito</h2>
      <dl className="faq-list">
        <dt>Qual è la differenza principale tra un sito vetrina e un e-commerce?</dt>
        <dd>Un sito vetrina serve a presentare la tua attività (chi sei, servizi, contatti) e a farti trovare localmente. Un e-commerce include invece un carrello, la gestione dei prodotti e dei sistemi di pagamento per vendere direttamente online.</dd>
        
        <dt>Posso iniziare con un sito vetrina e aggiungere funzionalità in seguito?</dt>
        <dd>Sì, è una pratica consigliata. Puoi iniziare con un sito vetrina semplice ed elegante e, man mano che l'attività cresce, integrare una sezione blog, un sistema di prenotazione appuntamenti o un negozio online completo.</dd>
        
        <dt>Ho bisogno di un sistema di prenotazione appuntamenti sul mio sito?</dt>
        <dd>Se la tua attività si basa sulla vendita di servizi a tempo (es. consulenze, trattamenti benessere, sedute mediche o corsi), un sistema di prenotazione automatizzato fa risparmiare tempo e migliora l'esperienza dell'utente, riducendo le telefonate.</dd>
      </dl>

      <h2 id="conclusione">Conclusione: parti da quello che ti serve oggi (e lascia spazio al domani)</h2>
      <p>
        Non esiste il "sito perfetto per tutti": esiste il sito giusto per il momento in cui si trova la tua attività.
        <a href="https://marketingbaker.com/which-type-of-website/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>marketingbaker ↗</a>
        L'errore più comune è chiedere subito "che piattaforma uso?" invece di domandarsi "cosa voglio che il mio sito faccia per il mio business".
        <a href="https://www.hrdigitaldesign.com/blogs/news/which-website-platform-is-right-for-your-small-business-a-simple-guide" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>hrdigitaldesign ↗</a>
      </p>
      <p>Partire da un sito vetrina fatto bene e pensato per crescere (aggiungendo blog, prenotazioni o e‑commerce quando serve) è spesso la scelta più intelligente per chi non vuole sprecare soldi ma vuole uno strumento che lavori davvero per lui.</p>

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
          Non sai quale tipo di sito fa al caso tuo?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Posso aiutarti a capire quale soluzione è la più adatta alla tua attività, senza impegno. Contattami per una consulenza gratuita.
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
          Richiedi una consulenza gratuita →
        </a>
      </div>
    </div>
  )
};
