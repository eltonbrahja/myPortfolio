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

export const cosaChiedereWebDesignerContrattoPost = {
  id: "cosa-chiedere-web-designer-contratto",
  title: "Cosa chiedere al tuo web designer prima di firmare un contratto",
  excerpt: "Commissionare un sito è un investimento importante: se scegli la persona sbagliata rischi ritardi, costi extra imprevisti e un sito che non fa quello che ti serve. Prima di firmare qualunque contratto, è fondamentale fare le domande giuste su referenze, tempi, cosa è incluso, assistenza e proprietà del sito.",
  date: "26 Maggio 2026",
  readTime: "8 min di lettura",
  category: "Consulenza & Sviluppo",
  image: "/foto-webdesign.jpg",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Perché è importante definire la proprietà di dominio e hosting nel contratto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Perché se sono intestati all'agenzia o al professionista, potresti perdere l'accesso al tuo sito o avere difficoltà a cambiare fornitore in futuro. Assicurati che nel contratto sia specificato che tu sei il proprietario unico di dominio, hosting e file."
        }
      },
      {
        "@type": "Question",
        "name": "Cosa si intende per 'revisioni incluse' nel preventivo di un sito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le revisioni sono cicli di modifiche in cui puoi richiedere aggiustamenti a testi, colori o immagini sulle bozze proposte. È importante specificare il numero esatto (es. 2 o 3 giri di revisione) per evitare costi extra non previsti."
        }
      },
      {
        "@type": "Question",
        "name": "Come posso tutelarmi se la consegna del sito web subisce forti ritardi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un contratto professionale dovrebbe indicare una data di consegna stimata e definire le responsabilità di entrambe le parti (ad esempio, le tempistiche di invio dei materiali da parte del cliente e i tempi di risposta del designer)."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        Commissionare un sito è un investimento importante: se scegli la persona sbagliata rischi ritardi, costi extra imprevisti e un sito che non fa quello che ti serve.
        Prima di firmare qualunque contratto, è fondamentale fare le domande giuste su referenze, tempi, cosa è incluso, assistenza e proprietà del sito.
        <a href="https://portstbd.com/questions-ask-website-designer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>portstbd ↗</a>
      </p>

      <p>Questa mini guida ti aiuta a non bruciarti e a riconoscere un web designer davvero trasparente (quello con cui vale la pena lavorare).</p>

      <div className="article-toc">
        <div className="toc-title">Indice</div>
        <ol className="toc-list">
          <li><a href="#portfolio-clienti">Posso vedere il tuo portfolio e parlare con qualche cliente?</a></li>
          <li><a href="#cosa-incluso">Cosa è incluso esattamente nel preventivo (e cosa no)?</a></li>
          <li><a href="#tempistiche-processo">Quali sono le tempistiche e come funziona il processo?</a></li>
          <li><a href="#quante-revisioni">Quante revisioni sono incluse?</a></li>
          <li><a href="#proprieta-sito">Chi possiede il dominio, l’hosting e i file del sito?</a></li>
          <li><a href="#assistenza-aggiornamenti">Come funzionano assistenza e aggiornamenti dopo la messa online?</a></li>
          <li><a href="#gestione-pagamenti">Come vengono gestiti pagamenti, acconti e costi extra?</a></li>
          <li><a href="#piattaforma-autonomia">Su quale piattaforma verrà realizzato il sito e quanto sarò autonomo?</a></li>
          <li><a href="#performance-sicurezza">Come ti assicuri che il sito sia veloce, responsive e sicuro?</a></li>
          <li><a href="#qualcosa-storto">Cosa succede se qualcosa va storto?</a></li>
        </ol>
      </div>

      <h2 id="portfolio-clienti">1. Posso vedere il tuo portfolio e parlare con qualche cliente?</h2>
      <p>
        La prima cosa da verificare è se il web designer ha già realizzato siti simili al tipo di attività che hai tu e alla qualità che cerchi.
        <a href="https://cliquestudios.com/faq/how-to-choose-a-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cliquestudios ↗</a>
      </p>
      <p>Chiedi sempre:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Il <strong>portfolio</strong> con alcuni lavori recenti.</li>
        <li>Se può darti <strong>1–2 contatti</strong> di clienti soddisfatti da sentire per una breve referenza.
          <a href="https://www.business.com/articles/questions-to-ask-web-developer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>business ↗</a>
        </li>
      </ul>
      <p>
        Se non può mostrarti nulla di concreto o evita la domanda sulle referenze, è un segnale d’allarme.
        <a href="https://www.dotcraft.agency/our-blog/how-to-choose-a-website-design-development-agency/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>dotcraft ↗</a>
      </p>

      <h2 id="cosa-incluso">2. Cosa è incluso esattamente nel preventivo (e cosa no)?</h2>
      <p>
        Molti problemi nascono perché il cliente pensa che “sia tutto compreso”, mentre il web designer considera tante cose come extra.
        <a href="https://portstbd.com/questions-ask-website-designer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>portstbd ↗</a>
      </p>
      <p>Chiedi una lista chiara di ciò che è incluso nel prezzo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Quante <strong>pagine</strong> sono comprese.</li>
        <li>Se il design è <strong>su misura</strong> o basato su un template.
          <a href="https://designpowers.com/blog/25-questions-to-ask-your-website-designer-before-hiring" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>designpowers ↗</a>
        </li>
        <li>Se sono inclusi <strong>testi, immagini, icone, foto stock</strong>, oppure devi fornirli tu.
          <a href="https://www.business.com/articles/questions-to-ask-web-developer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>business ↗</a>
        </li>
        <li>Se è compresa la <strong>configurazione di base SEO</strong>, Google Analytics / Search Console, form di contatto, ecc.
          <a href="https://www.dotcraft.agency/our-blog/how-to-choose-a-website-design-development-agency/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>dotcraft ↗</a>
        </li>
      </ul>
      <p>
        Chiedi anche cosa è considerato <strong>fuori scope</strong> (non incluso): meglio chiarirlo subito che litigare dopo.
        <a href="https://sprintlaw.com.au/articles/web-design-contracts-protect-your-digital-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sprintlaw ↗</a>
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Vuoi ricevere un preventivo chiaro, trasparente e con tutte le voci descritte nel dettaglio? <a href="/#contact">Richiedi un preventivo senza sorprese →</a>
      </p>

      <h2 id="tempistiche-processo">3. Quali sono le tempistiche e come funziona il processo?</h2>
      <p>
        Un sito non si fa “domani”: ogni professionista serio ha un processo e delle tempistiche realistiche.
        <a href="https://www.orbitmedia.com/blog/5-questions-to-ask-when-choosing-a-web-design-firm/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>orbitmedia ↗</a>
      </p>
      <p>Chiedi:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>In quanto tempo, in media, <strong>consegna un sito come il tuo</strong> (es. 4, 6, 8 settimane).
          <a href="https://www.contra.agency/insights/57-questions-ask-when-choosing-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>contra ↗</a>
        </li>
        <li>Quali sono le <strong>fasi</strong> del progetto (brief, bozza grafica, sviluppo, test, lancio) e cosa succede in ognuna.
          <a href="https://designpowers.com/blog/25-questions-to-ask-your-website-designer-before-hiring" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>designpowers ↗</a>
        </li>
        <li>In quali momenti servirà il tuo <strong>feedback</strong> e quanto tempo hai per rispondere.
          <a href="https://sprintlaw.com.au/articles/web-design-contracts-protect-your-digital-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sprintlaw ↗</a>
        </li>
      </ul>
      <p>
        Le tempistiche vanno poi scritte nel contratto, almeno come indicazione, con le dipendenze (es. “se i contenuti arrivano in ritardo, i tempi si allungano”).
        <a href="https://onesuite.io/blog/web-design-contract-template-included/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>onesuite ↗</a>
      </p>

      <h2 id="quante-revisioni">4. Quante revisioni sono incluse?</h2>
      <p>
        Un altro punto delicato sono le modifiche: quante ne puoi chiedere prima che diventino un lavoro extra da pagare a parte.
        <a href="https://onesuite.io/blog/web-design-contract-template-included/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>onesuite ↗</a>
      </p>
      <p>Chiedi esplicitamente:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Quante <strong>revisioni</strong> sono incluse per la grafica e per i testi.
          <a href="https://sprintlaw.com.au/articles/web-design-contracts-protect-your-digital-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sprintlaw ↗</a>
        </li>
        <li>Cosa viene considerato <strong>revisione</strong> (es. piccoli aggiustamenti) e cosa è <strong>richiesta nuova</strong> (es. cambiare completamente struttura).
          <a href="https://elementor.com/blog/web-design-contract/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>elementor ↗</a>
        </li>
      </ul>
      <p>Un professionista trasparente ti spiega questo punto con chiarezza e lo include nel contratto per evitare fraintendimenti.</p>

      <h2 id="proprieta-sito">5. Chi possiede il dominio, l’hosting e i file del sito?</h2>
      <p>Questo è uno dei punti più importanti per non restare “incastrato”.</p>
      <p>Chiedi sempre:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Il <strong>dominio</strong> (es. tuonome.it) sarà intestato a te?</li>
        <li>L’<strong>hosting</strong> sarà su un servizio a tuo nome o del web designer?</li>
        <li>Alla fine del lavoro, avrai <strong>tutti gli accessi</strong> (pannello hosting, CMS, email, ecc.) e i file necessari?
          <a href="https://www.tagdesign.co.nz/blog-post/12-questions-to-ask-before-hiring-a-webdesigner" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>tagdesign ↗</a>
        </li>
      </ul>
      <p>
        Le buone pratiche consigliano che il cliente sia proprietario del dominio e abbia pieno accesso al sito, mentre il contratto chiarisce come vengono gestiti eventuali backup, migrazioni o chiusura del rapporto.
        <a href="https://www.tagdesign.co.nz/blog-post/12-questions-to-ask-before-hiring-a-webdesigner" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>tagdesign ↗</a>
      </p>

      <h2 id="assistenza-aggiornamenti">6. Come funzionano assistenza e aggiornamenti dopo la messa online?</h2>
      <p>
        Un sito non finisce il giorno del lancio: servono aggiornamenti di sicurezza, piccole modifiche, supporto tecnico.
        <a href="https://www.orbitmedia.com/blog/5-questions-to-ask-when-choosing-a-web-design-firm/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>orbitmedia ↗</a>
      </p>
      <p>Chiedi:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Per quanto tempo è inclusa <strong>assistenza post‑lancio</strong> (es. 30 giorni, 3 mesi).</li>
        <li>Se offre un <strong>piano di manutenzione</strong> e cosa comprende (aggiornamenti, backup, sicurezza, piccole modifiche).
          <a href="https://www.orbitmedia.com/blog/5-questions-to-ask-when-choosing-a-web-design-firm/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>orbitmedia ↗</a>
        </li>
        <li>Come si richiede assistenza (email, ticket, telefono) e in quali <strong>tempi di risposta</strong> puoi aspettarti.
          <a href="https://cliquestudios.com/faq/how-to-choose-a-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cliquestudios ↗</a>
        </li>
      </ul>
      <p>Un partner serio non ti lascia solo il giorno dopo il lancio e chiarisce subito condizioni e costi dell’assistenza.</p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Tutti i miei siti includono 3 mesi di assistenza tecnica post-lancio e percorsi di formazione. <a href="/services">Scopri i miei servizi →</a>
      </p>

      <h2 id="gestione-pagamenti">7. Come vengono gestiti pagamenti, acconti e costi extra?</h2>
      <p>
        Anche la parte economica va chiarita bene e per iscritto.
        <a href="https://onesuite.io/blog/web-design-contract-template-included/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>onesuite ↗</a>
      </p>
      <p>Chiedi:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Qual è il <strong>costo totale</strong>, se ci sono <strong>acconti</strong> (es. 50% all’inizio, 50% alla consegna) e con quali modalità si paga.
          <a href="https://webflow.com/blog/web-design-contract" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>webflow ↗</a>
        </li>
        <li>Come vengono gestiti i <strong>lavori extra</strong>: tariffa oraria? Nuovo preventivo? Quando dev’essere approvato?
          <a href="https://elementor.com/blog/web-design-contract/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>elementor ↗</a>
        </li>
        <li>Se ci sono <strong>costi ricorrenti</strong> (hosting, manutenzione, licenze di plugin o temi) e di che importo.
          <a href="https://sprintlaw.com.au/articles/web-design-contracts-protect-your-digital-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sprintlaw ↗</a>
        </li>
      </ul>
      <p>Tutto questo evita sorprese del tipo “non sapevo che…”.</p>

      <h2 id="piattaforma-autonomia">8. Su quale piattaforma verrà realizzato il sito e quanto sarò autonomo?</h2>
      <p>
        Sapere su cosa sarà costruito il sito è importante per capire quanto potrai gestirlo in autonomia.
        <a href="https://designpowers.com/blog/25-questions-to-ask-your-website-designer-before-hiring" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>designpowers ↗</a>
      </p>
      <p>Chiedi:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Se il sito sarà in <strong>WordPress, un altro CMS o un builder proprietario</strong>.</li>
        <li>Se potrai <strong>modificare testi e immagini</strong> da solo tramite un pannello semplice.
          <a href="https://designpowers.com/blog/25-questions-to-ask-your-website-designer-before-hiring" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>designpowers ↗</a>
        </li>
        <li>Se è previsto un minimo di <strong>formazione</strong> per insegnarti a usare il sito (video, call, guida).
          <a href="https://www.orbitmedia.com/blog/5-questions-to-ask-when-choosing-a-web-design-firm/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>orbitmedia ↗</a>
        </li>
      </ul>
      <p>L’obiettivo è non ritrovarti con un sito che per qualsiasi piccola modifica richiede di aprire un ticket a pagamento.</p>

      <h2 id="performance-sicurezza">9. Come ti assicuri che il sito sia veloce, responsive e sicuro?</h2>
      <p>
        Un buon sito non è solo “bello”: deve essere veloce, funzionare bene da smartphone ed essere sicuro.
        <a href="https://cliquestudios.com/faq/how-to-choose-a-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cliquestudios ↗</a>
      </p>
      <p>Chiedi in modo semplice:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Se il sito sarà <strong>responsive</strong>, cioè ottimizzato per smartphone e tablet.
          <a href="https://www.business.com/articles/questions-to-ask-web-developer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>business ↗</a>
        </li>
        <li>Come gestisce <strong>performance e velocità</strong> (immagini ottimizzate, hosting, caching).
          <a href="https://www.dotcraft.agency/our-blog/how-to-choose-a-website-design-development-agency/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>dotcraft ↗</a>
        </li>
        <li>Quali misure base di <strong>sicurezza</strong> sono previste (https, aggiornamenti, protezione moduli, backup).
          <a href="https://elementor.com/blog/web-design-contract/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>elementor ↗</a>
        </li>
      </ul>
      <p>Le risposte ti faranno capire se il designer pensa anche alla parte tecnica o solo all’aspetto estetico.</p>

      <h2 id="qualcosa-storto">10. Cosa succede se qualcosa va storto?</h2>
      <p>Nessuno lo ama chiedere, ma è importante:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Cosa succede se il progetto <strong>ritarda</strong>?</li>
        <li>E se decidete di <strong>interrompere la collaborazione</strong> a metà?</li>
        <li>Ci sono <strong>penali</strong> o condizioni particolari?</li>
      </ul>
      <p>
        Un contratto ben fatto prevede anche questi casi: definisce come gestire eventuali dispute e quale legge regola l’accordo.
        <a href="https://onesuite.io/blog/web-design-contract-template-included/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>onesuite ↗</a>
      </p>
      <p>Chi ti risponde in modo chiaro su questi punti dimostra trasparenza e serietà.</p>

      <h2>FAQ - Domande Frequenti sui Contratti di Web Design</h2>
      <dl className="faq-list">
        <dt>Perché è importante definire la proprietà di dominio e hosting nel contratto?</dt>
        <dd>Perché se sono intestati all'agenzia o al professionista, potresti perdere l'accesso al tuo sito o avere difficoltà a cambiare fornitore in futuro. Assicurati che nel contratto sia specificato che tu sei il proprietario unico di dominio, hosting e file.</dd>
        
        <dt>Cosa si intende per "revisioni incluse" nel preventivo di un sito?</dt>
        <dd>Le revisioni sono cicli di modifiche in cui puoi richiedere aggiustamenti a testi, colori o immagini sulle bozze proposte. È importante specificare il numero esatto (es. 2 o 3 giri di revisione) per evitare costi extra non previsti.</dd>
        
        <dt>Come posso tutelarmi se la consegna del sito web subisce forti ritardi?</dt>
        <dd>Un contratto professionale dovrebbe indicare una data di consegna stimata e definire le responsabilità di entrambe le parti (ad esempio, le tempistiche di invio dei materiali da parte del cliente e i tempi di risposta del designer).</dd>
      </dl>

      <h2>Posizionarti come partner, non come “fornitore”</h2>
      <p>
        Fare queste domande non serve a “mettere in difficoltà” il web designer, ma a capire se sarà un <strong>partner</strong> che lavora al tuo fianco e ti spiega le cose in modo comprensibile.
        <a href="https://cliquestudios.com/faq/how-to-choose-a-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cliquestudios ↗</a>
      </p>
      <p>
        Un professionista davvero trasparente ti aiuta lui stesso a chiarire referenze, tempi, cosa è incluso, assistenza e proprietà del sito, così sai esattamente cosa stai firmando prima di iniziare.
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
          Vuoi un partner affidabile per il tuo prossimo sito?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Lavoro con la massima trasparenza, contratti chiari e garantendo piena proprietà e autonomia sui tuoi canali. Contattami per parlarne insieme.
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
          Richiedi una call conoscitiva →
        </a>
      </div>
    </div>
  )
};
