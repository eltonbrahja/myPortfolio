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

export const erroriDominioHostingPost = {
  id: "errori-dominio-hosting-sito-aziendale",
  title: "Errori da evitare quando scegli dominio e hosting per il tuo sito aziendale",
  excerpt: "Scegliere il nome a dominio o l'hosting sbagliato può compromettere le performance, la SEO e la professionalità del tuo sito. Ecco gli errori più comuni e come evitarli.",
  date: "1 Luglio 2026",
  readTime: "6 min di lettura",
  category: "Tecnica & Performance",
  image: "/fotogodaddy.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Perché un hosting lento danneggia la SEO del sito aziendale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google penalizza i siti web lenti. Se il tuo hosting non è ottimizzato, le pagine impiegheranno troppo tempo a caricarsi, aumentando il tasso di abbandono degli utenti e perdendo posizioni nei risultati di ricerca."
        }
      },
      {
        "@type": "Question",
        "name": "Va bene usare un indirizzo email @gmail.com per la mia azienda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, utilizzare un'email generica come @gmail.com al posto di una professionale (es. info@tuodominio.it) trasmette poca professionalità e può far sembrare la tua attività meno affidabile agli occhi dei clienti."
        }
      },
      {
        "@type": "Question",
        "name": "A chi deve essere intestato il dominio del sito web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il dominio deve essere sempre intestato a te o alla tua azienda. Se lo intesti all'agenzia web o al professionista che realizza il sito, rischi di non avere il controllo legale sulla tua identità online."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        La creazione di un sito aziendale inizia molto prima del design e dei testi: parte dalle fondamenta tecniche, ovvero la scelta del <strong>dominio</strong> e dell'<strong>hosting</strong>.
      </p>
      <p>
        Purtroppo, molte piccole attività sottovalutano queste decisioni per risparmiare qualche decina di euro all'anno, ritrovandosi con siti invisibili su Google, lenti a caricarsi e che trasmettono poca professionalità.
      </p>

      <div className="article-toc">
        <div className="toc-title">Indice</div>
        <ol className="toc-list">
          <li><a href="#estensioni-strane">Scegliere estensioni del dominio strane o nomi troppo lunghi</a></li>
          <li><a href="#hosting-lento">Risparmiare sull'hosting (e distruggere la SEO)</a></li>
          <li><a href="#email-gmail">Usare email su Gmail o Libero invece del dominio aziendale</a></li>
          <li><a href="#intestazione-dominio">Non intestare il dominio a se stessi</a></li>
          <li><a href="#mancanza-ssl">Non avere il certificato SSL (https)</a></li>
        </ol>
      </div>

      <h2 id="estensioni-strane">1. Scegliere estensioni del dominio strane o nomi troppo lunghi</h2>
      <p>
        Il nome a dominio è il tuo indirizzo su internet (es. <em>tuonome.it</em>). Un errore comune è scegliere nomi chilometrici, difficili da pronunciare o pieni di trattini solo perché l'opzione principale era già presa.
      </p>
      <p>
        Ancora peggio è farsi attrarre da <strong>estensioni fantasiose</strong> come <em>.biz</em>, <em>.info</em>, o <em>.site</em> al posto dei classici <strong>.it</strong> (per il mercato italiano) o <strong>.com</strong> (per quello internazionale). Le persone sono abituate alle estensioni classiche e tenderanno a sbagliare l'indirizzo se usi estensioni insolite.
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Punta a un dominio <strong>breve, facile da scrivere e da ricordare</strong>.</li>
        <li>Evita i trattini (<em>mio-sito-aziendale.it</em>) se possibile.</li>
        <li>Usa sempre <strong>.it</strong> o <strong>.com</strong>.</li>
      </ul>

      <h2 id="hosting-lento">2. Risparmiare sull'hosting (e distruggere la SEO)</h2>
      <p>
        L'hosting è lo spazio fisico sui server dove risiedono i file del tuo sito. Spesso si sceglie l'opzione più economica sul mercato (magari a 10€ l'anno), senza pensare alle conseguenze.
      </p>
      <p>
        Un hosting di bassa qualità significa <strong>server lenti e sovraccarichi</strong>. Questo è un enorme problema per due motivi:
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>UX (Esperienza Utente):</strong> Se il sito ci mette più di 3 secondi a caricarsi, i visitatori scappano prima ancora di leggere cosa offri.</li>
        <li><strong>SEO:</strong> Google penalizza duramente i siti lenti. Le performance di caricamento (i famosi Core Web Vitals) sono un fattore di posizionamento critico. Un hosting economico può azzerare il tuo traffico organico.</li>
      </ul>
      <p>
        Investire in un hosting performante e affidabile è il primo passo per una buona strategia di <a href="/blog/seo-locale-google-maps">SEO locale</a>.
      </p>

      <h2 id="email-gmail">3. Usare email su Gmail o Libero invece del dominio aziendale</h2>
      <p>
        Hai appena registrato il tuo bellissimo dominio aziendale, mettiamo <em>mariorossi.it</em>, e poi nella sezione contatti o sui bigliettini da visita scrivi <em>mariorossi.idraulico@gmail.com</em>.
      </p>
      <p>
        Questo dettaglio abbassa immediatamente il livello di percezione della tua attività. Un indirizzo email professionale (es. <em>info@mariorossi.it</em> o <em>mario@mariorossi.it</em>) trasmette molta più fiducia, affidabilità e struttura rispetto a un account gratuito.
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Tutti i <a href="/services">siti web professionali che realizzo</a> includono la configurazione delle email legate al tuo dominio aziendale, per darti subito un'immagine credibile.
      </p>

      <h2 id="intestazione-dominio">4. Non intestare il dominio a se stessi</h2>
      <p>
        Questo è un errore burocratico ma frequentissimo. Quando affidi la realizzazione del sito a un'agenzia o a un professionista, assicurati che il dominio venga registrato <strong>a nome tuo o della tua azienda</strong> (intestatario o <em>Registrant</em>).
      </p>
      <p>
        Se il professionista lo intesta a sé stesso, tecnicamente è lui il proprietario legale del tuo nome su internet. Se un domani i rapporti si incrinano o il professionista sparisce, rischieresti di non avere più accesso al dominio e di perdere l'intero posizionamento costruito negli anni.
      </p>

      <h2 id="mancanza-ssl">5. Non avere il certificato SSL (https)</h2>
      <p>
        Hai mai visto la scritta "Sito non sicuro" di fianco all'indirizzo web in alto nel browser? Significa che il sito non ha il certificato SSL (che trasforma l'indirizzo da <em>http://</em> a <em>https://</em>).
      </p>
      <p>
        Senza questo certificato, i dati scambiati tra l'utente e il sito non sono criptati. Questo terrorizza gli utenti (specialmente se c'è un modulo di contatto) e Google penalizza pesantemente le pagine sprovviste di SSL. Oggi, un hosting di qualità offre il certificato SSL base in modo automatico e gratuito.
      </p>

      <h2>Fai partire il tuo sito col piede giusto</h2>
      <p>
        Scegliere l'hosting giusto e configurare correttamente il dominio è la base invisibile su cui si poggia l'intero successo online della tua attività. Non lasciare queste scelte al caso o al risparmio di pochi euro al mese.
      </p>

      <div style={{
        background: 'linear-gradient(135deg, rgba(245, 239, 235, 0.5) 0%, rgba(200, 217, 230, 0.1) 100%)',
        border: '1px solid rgba(86, 124, 141, 0.15)',
        borderRadius: '24px',
        padding: '40px',
        marginTop: '60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px var(--shadow-color)'
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
        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)', marginTop: 0 }}>
          Vuoi un sito web aziendale veloce, sicuro e pronto a convertire?
        </h3>
        <p style={{ color: 'rgba(86, 124, 141, 0.9)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Mi occupo di tutto: dalla scelta dell'hosting ad alte prestazioni fino alla messa online del sito ottimizzato per la SEO.
        </p>
        <a href="/#preventivo" className="filter-chip active" style={{ 
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
          color: 'var(--bg-color)', background: 'var(--accent-color)'
        }}>
          Richiedi una consulenza gratuita →
        </a>
      </div>
    </div>
  )
};
