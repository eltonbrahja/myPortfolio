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

export const dieciErroriSitoPost = {
  id: "10-errori-sito-piccole-attivita",
  title: "10 errori comuni nei siti delle piccole attività che fanno scappare i clienti",
  excerpt: "Il sito della tua attività dovrebbe portarti contatti e richieste, non far scappare le persone dopo pochi secondi. Vediamo i 10 errori più frequenti e come sistemarli.",
  date: "23 Maggio 2026",
  readTime: "8 min di lettura",
  category: "UX & Conversioni",
  image: "https://images.unsplash.com/photo-1555861496-0666c8981751?auto=format&fit=crop&w=1200&q=80",
  content: (
    <div className="article-body">
      <p>
        Il sito della tua attività dovrebbe portarti contatti, richieste di preventivo e visite in negozio, non far scappare le persone dopo pochi secondi.
        Molti piccoli business però commettono sempre gli stessi errori: layout confuso, testi infiniti, nessuna chiamata all'azione, contatti nascosti, foto scarse, zero recensioni.
        <a href="https://www.relacionesinternacionales.media/historico/10-most-popular-web-design-blunders-small-companies-help-to-make" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>relacionesinternacionales ↗</a>
      </p>

      <p>Vediamo i 10 errori più frequenti e come sistemarli (cioè il tipo di lavoro che fa davvero la differenza quando affidi il sito a un professionista).</p>

      <div className="article-toc">
        <div className="toc-title">Indice</div>
        <ol className="toc-list">
          <li><a href="#testi-lunghi">Testi lunghi e muri di parole</a></li>
          <li><a href="#nessuna-cta">Nessuna call to action chiara</a></li>
          <li><a href="#contatti-nascosti">Contatti nascosti o difficili da trovare</a></li>
          <li><a href="#foto-scarse">Foto scarse, sfocate o tutte di stock</a></li>
          <li><a href="#nessuna-recensione">Nessuna recensione o testimonianza</a></li>
          <li><a href="#navigazione-confusa">Navigazione confusa e menu complicati</a></li>
          <li><a href="#non-mobile">Sito non ottimizzato per smartphone</a></li>
          <li><a href="#sito-lento">Sito lento a caricarsi</a></li>
          <li><a href="#contenuti-vecchi">Contenuti vecchi o poco chiari</a></li>
          <li><a href="#nessuna-sicurezza">Nessuna sicurezza e nessun segnale di affidabilità</a></li>
        </ol>
      </div>

      <h2 id="testi-lunghi">1. Testi lunghi e muri di parole</h2>
      <p>
        Uno degli errori più diffusi è avere pagine piene di testo, tutto attaccato, senza titoli chiari, paragrafi brevi o punti elenco.
        <a href="https://www.linkedin.com/pulse/common-website-issues-drive-customers-away-how-j7xzc" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>linkedin ↗</a>
        Le persone online leggono velocemente: se non capiscono in pochi secondi cosa fai e come puoi aiutarle, chiudono la pagina e tornano su Google.
        <a href="https://www.youtube.com/watch?v=szG4CWQm9Og" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>youtube ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Spezza i contenuti in <strong>paragrafi brevi</strong>, con titoli chiari e punti elenco.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Metti subito in alto una frase che spiega <strong>chi sei e cosa fai per il cliente</strong>, non la storia dell'azienda dal 1970.
          <a href="https://www.forbes.com/sites/allbusiness/2016/12/18/10-small-business-website-errors-that-drive-customers-away/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>forbes ↗</a>
        </li>
      </ul>
      <p>Questo è proprio il tipo di lavoro editoriale (struttura, titoli, ordine delle informazioni) che un professionista cura per far sì che il sito si legga in modo naturale.</p>

      <h2 id="nessuna-cta">2. Nessuna call to action (CTA) chiara</h2>
      <p>
        Molti siti raccontano chi sei ma non dicono <em>cosa</em> deve fare il visitatore dopo: chiamare, compilare un modulo, prenotare, chiedere un preventivo.
        <a href="https://rubiagroupagency.com/next-level-edge/top-5-website-mistakes-small-businesses-make-and-how-to-fix-them" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>rubiagroupagency ↗</a>
        Senza una CTA chiara è come avere un negozio senza banco cassa: la gente entra, guarda… e se ne va a mani vuote.
        <a href="https://www.eyebreathedesign.com/post/5-common-small-business-website-mistakes-that-drive-customers-away" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>eyebreathedesign ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Metti pulsanti chiari tipo <strong>"Richiedi un preventivo", "Prenota una consulenza", "Chiama ora"</strong> nelle sezioni importanti.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Usa testi brevi e orientati al beneficio ("Prenota la tua visita", non "Invia").
          <a href="https://www.eurodns.com/blog/common-design-mistakes-on-small-business-website" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>eurodns ↗</a>
        </li>
      </ul>
      <p>Un web designer progetta il percorso dell'utente proprio per accompagnarlo da "sto guardando" a "ti contatto".</p>

      <h2 id="contatti-nascosti">3. Contatti nascosti o difficili da trovare</h2>
      <p>
        Sembra incredibile, ma tantissimi siti non mostrano chiaramente numero di telefono, email, indirizzo o orari.
        <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        Se un visitatore deve cercare per più di qualche secondo come contattarti, spesso si irrita e chiude la pagina.
        <a href="https://rubiagroupagency.com/next-level-edge/top-5-website-mistakes-small-businesses-make-and-how-to-fix-them" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>rubiagroupagency ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Metti <strong>telefono ed email</strong> ben visibili in alto e in basso in tutte le pagine.
          <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        </li>
        <li>Crea una pagina "Contatti" semplice, con modulo, recapiti, indirizzo e mappa.
          <a href="https://rubiagroupagency.com/next-level-edge/top-5-website-mistakes-small-businesses-make-and-how-to-fix-them" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>rubiagroupagency ↗</a>
        </li>
      </ul>
      <p>Qui entra in gioco il lavoro di struttura e layout: un professionista sa dove posizionare questi elementi perché siano sempre sotto gli occhi.</p>

      <h2 id="foto-scarse">4. Foto scarse, sfocate o tutte di stock</h2>
      <p>
        Le immagini contano tantissimo per la prima impressione: foto sfocate, buie o generiche (stock viste mille volte) fanno percepire il sito come poco curato e poco credibile.
        <a href="https://www.relacionesinternacionales.media/historico/10-most-popular-web-design-blunders-small-companies-help-to-make" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>relacionesinternacionales ↗</a>
        Le persone riconoscono quando una foto è "finta" e non rappresenta davvero il tuo negozio o il tuo studio.
        <a href="https://lucidrhino.design/blog/reasons-online-reviews-essential/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lucidrhino ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Usa <strong>foto reali</strong> del tuo locale, del team, dei lavori fatti, scattate con un minimo di cura.
          <a href="https://lucidrhino.design/blog/reasons-online-reviews-essential/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lucidrhino ↗</a>
        </li>
        <li>Se usi stock, fallo con attenzione e mescolale a immagini autentiche.
          <a href="https://www.relacionesinternacionales.media/historico/10-most-popular-web-design-blunders-small-companies-help-to-make" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>relacionesinternacionales ↗</a>
        </li>
      </ul>
      <p>Un web designer ti aiuta a scegliere e disporre le foto in modo da valorizzare la tua attività e non sembrare l'ennesimo sito anonimo.</p>

      <h2 id="nessuna-recensione">5. Nessuna recensione o testimonianza</h2>
      <p>
        Oggi le persone si fidano molto di più delle opinioni di altri clienti che delle frasi "siamo i migliori" scritte da te.
        <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
        La mancanza totale di recensioni, testimonianze o casi studio sul sito rende più difficile fidarsi, soprattutto se non sei un marchio famoso.
        <a href="https://www.forbes.com/sites/allbusiness/2016/12/18/10-small-business-website-errors-that-drive-customers-away/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>forbes ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Inserisci <strong>testimonianze brevi</strong> con nome, attività/ruolo e, se possibile, foto.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Collega, quando ha senso, le <strong>recensioni Google</strong> o di altre piattaforme.
          <a href="https://lucidrhino.design/blog/reasons-online-reviews-essential/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lucidrhino ↗</a>
        </li>
      </ul>
      <p>Un professionista sa dove inserire queste "prove sociali" per farle pesare al momento giusto nel percorso del visitatore.</p>

      <h2 id="navigazione-confusa">6. Navigazione confusa e menu complicati</h2>
      <p>
        Se il menu è pieno di voci strane, sottomenù infiniti o nomi poco chiari ("Soluzioni", "Persone", "Risorse") il visitatore non capisce dove cliccare e se ne va.
        <a href="https://www.lukefernando.dev/blog/common-website-mistakes-that-drive-customers-away" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lukefernando ↗</a>
        La regola è semplice: se non si trova ciò che serve in pochi clic, il sito sta perdendo clienti.
        <a href="https://www.linkedin.com/pulse/common-website-issues-drive-customers-away-how-j7xzc" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>linkedin ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Usa un <strong>menu semplice</strong> con etichette intuitive: "Servizi", "Chi siamo", "Contatti", "Blog", ecc.
          <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        </li>
        <li>Raggruppa bene le pagine e non creare 20 voci diverse nella barra principale.
          <a href="https://www.eurodns.com/blog/common-design-mistakes-on-small-business-website" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>eurodns ↗</a>
        </li>
      </ul>
      <p>Il lavoro di architettura delle informazioni è una parte centrale del mestiere di web designer e fa davvero la differenza nell'esperienza utente.</p>

      <h2 id="non-mobile">7. Sito non ottimizzato per smartphone</h2>
      <p>
        Oltre metà del traffico web arriva da mobile: se il tuo sito su smartphone è difficile da usare, con testi minuscoli e bottoni impossibili da cliccare, stai perdendo una grossa fetta di potenziali clienti.
        <a href="https://www.lukefernando.dev/blog/common-website-mistakes-that-drive-customers-away" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lukefernando ↗</a>
        Molte analisi mostrano che un sito non mobile‑friendly aumenta nettamente il tasso di abbandono e peggiora anche il posizionamento su Google.
        <a href="https://www.forbes.com/sites/allbusiness/2016/12/18/10-small-business-website-errors-that-drive-customers-away/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>forbes ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Usa un design <strong>responsive</strong>, che si adatta automaticamente a schermi diversi.
          <a href="https://www.lukefernando.dev/blog/common-website-mistakes-that-drive-customers-away" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lukefernando ↗</a>
        </li>
        <li>Testa il sito su vari telefoni e rendi pulsanti e testi facilmente cliccabili.
          <a href="https://www.linkedin.com/pulse/common-website-issues-drive-customers-away-how-j7xzc" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>linkedin ↗</a>
        </li>
      </ul>
      <p>Qui la differenza tra un tema improvvisato e un progetto serio la senti subito quando apri il sito dal telefono.</p>

      <h2 id="sito-lento">8. Sito lento a caricarsi</h2>
      <p>
        Se il sito ci mette più di 3 secondi a caricarsi, molte persone chiudono la pagina prima ancora di vedere chi sei.
        <a href="https://www.reddit.com/r/smallbusiness/comments/1pli5m0/small_business_owners_5_website_mistakes_that_are/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>reddit ↗</a>
        La velocità influisce sia sulle conversioni (quanti ti contattano) sia sulla SEO (quanto Google ti mostra).
        <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Ottimizza le immagini (dimensioni e formato), evita plugin inutili e scegli un <strong>hosting decente</strong>.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Fai controlli periodici con strumenti come PageSpeed o simili.
          <a href="https://www.linkedin.com/pulse/common-website-issues-drive-customers-away-how-j7xzc" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>linkedin ↗</a>
        </li>
      </ul>
      <p>Un professionista non si limita all'aspetto estetico, ma lavora anche "sotto il cofano" per rendere il sito veloce e leggero.</p>

      <h2 id="contenuti-vecchi">9. Contenuti vecchi, non aggiornati o poco chiari</h2>
      <p>
        Blog fermi da anni, servizi non più attuali, orari sbagliati: tutto questo dà l'idea di un'attività ferma o poco curata.
        <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        Contenuti vaghi o autoreferenziali ("siamo leader, siamo i migliori") non aiutano il cliente a capire se sei la persona giusta per il suo problema.
        <a href="https://www.reddit.com/r/smallbusiness/comments/1pli5m0/small_business_owners_5_website_mistakes_that_are/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>reddit ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Aggiorna almeno le pagine chiave (servizi, orari, contatti, chi siamo) quando qualcosa cambia.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Scrivi mettendoti nei panni del cliente: <strong>cosa vuole sapere lui?</strong>, non solo cosa vuoi dire tu.
          <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
        </li>
      </ul>
      <p>Nel lavoro professionale, la revisione periodica dei contenuti e la cura del tono di voce sono elementi che mantengono il sito "vivo" e credibile.</p>

      <h2 id="nessuna-sicurezza">10. Nessuna sicurezza e nessun segnale di affidabilità</h2>
      <p>
        Siti senza https (lucchetto), senza privacy/cookie policy o moduli contatto poco chiari fanno nascere dubbi sulla serietà dell'attività.
        <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
        Se mancano completamente elementi di fiducia (recensioni, loghi di partner, certificazioni, foto del team), molte persone esitano a lasciare i propri dati o a comprare.
        <a href="https://www.reddit.com/r/smallbusiness/comments/1pli5m0/small_business_owners_5_website_mistakes_that_are/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>reddit ↗</a>
      </p>
      <p>Come evitarlo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Assicurati che il sito abbia <strong>certificato SSL</strong> (https) e pagine legali minimali ma corrette.
          <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        </li>
        <li>Mostra <strong>segnali di fiducia</strong>: testimonianze, loghi, anni di attività, foto reali, dati di contatto completi.
          <a href="https://rubiagroupagency.com/next-level-edge/top-5-website-mistakes-small-businesses-make-and-how-to-fix-them" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>rubiagroupagency ↗</a>
        </li>
      </ul>
      <p>Un web designer serio lavora insieme, se serve, a consulenti legali/tecnici per impostare un sito che non solo funzioni, ma sia anche affidabile.</p>

      <h2>Perché questi errori mostrano il valore di un lavoro professionale</h2>
      <p>
        Ognuno di questi 10 errori da solo può far scappare una parte dei visitatori; messi insieme, spiegano perché tanti siti "non portano niente".
        <a href="https://www.relacionesinternacionales.media/historico/10-most-popular-web-design-blunders-small-companies-help-to-make" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>relacionesinternacionales ↗</a>
        Correggerli vuol dire intervenire su contenuti, struttura, design, performance, SEO e fiducia: esattamente le aree che un professionista considera quando progetta o rifà un sito per una piccola attività.
        <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
      </p>
      <p>In pratica: non paghi solo "la grafica", ma un insieme di scelte pensate per fare in modo che chi arriva sul sito <strong>resti, capisca e ti contatti</strong>, invece di scappare dopo pochi secondi.</p>

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
          Il tuo sito sta commettendo qualcuno di questi errori?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Posso fare un'analisi gratuita del tuo sito e dirti esattamente cosa migliorare per non perdere più clienti. Senza impegno.
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
