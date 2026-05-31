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

export const raccontareStoriaAttivitaPost = {
  id: "raccontare-storia-attivita",
  title: "Come raccontare la storia della tua attività nel sito senza annoiare il lettore",
  excerpt: "Raccontare la storia della tua attività nel sito non significa scrivere una biografia lunga e noiosa, ma aiutare il lettore a capire perché fai quello che fai e perché dovrebbe fidarsi di te. Le pagine “Chi siamo” più efficaci sono brevi, strutturate e orientate a chi legge, non all’ego del brand.",
  date: "31 Maggio 2026",
  readTime: "5 min di lettura",
  category: "Copywriting",
  image: "https://images.unsplash.com/photo-GFrBMipOd_E?auto=format&fit=crop&w=1200&q=80",
  content: (
    <div className="article-body">
      <p>
        Raccontare la storia della tua attività nel sito non significa scrivere una biografia lunga e noiosa, ma aiutare il lettore a capire perché fai quello che fai e perché dovrebbe fidarsi di te. Le pagine “Chi siamo” più efficaci sono brevi, strutturate e orientate a chi legge, non all’ego del brand.
      </p>

      <h2>A cosa serve davvero la storia della tua attività</h2>
      <p>
        La storia della tua attività deve rispondere a una domanda semplice: “Perché dovrei scegliere proprio te?”. Una buona narrazione rende più umani, aumenta la fiducia e fa percepire che dietro al sito ci sono persone vere, valori e scelte concrete.
      </p>
      <p>
        Non si tratta di inventare un romanzo, ma di selezionare i passaggi che spiegano come sei arrivato fin qui, quali problemi hai imparato a risolvere e cosa ti distingue rispetto agli altri.
      </p>

      <h2>Parti dal lettore, non da te</h2>
      <p>
        La trappola classica è iniziare con “La nostra azienda nasce nel 1994…”. Il lettore, però, all’inizio vuole capire se hai qualcosa di utile per lui, non la cronologia completa.
      </p>
      <p>Per evitare di annoiare:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Apri con poche frasi che spiegano cosa fai e per chi lo fai.</li>
        <li>Solo dopo introduci come ci sei arrivato.</li>
        <li>Collega subito la tua storia ai problemi che risolvi oggi.</li>
      </ul>
      <p>
        In pratica: parli di te, ma scrivi per l’utente, seguendo l’idea che la tua storia serve a lui per orientarsi, non solo a te per raccontarti.
      </p>

      <h2>Usa una struttura semplice e sempre uguale</h2>
      <p>
        Per non perdersi e non perdere il lettore, è utile seguire una struttura narrativa chiara, tipo:
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Chi sei oggi</strong> in poche righe (elevator pitch).</li>
        <li><strong>Come è nata</strong> l’attività (origine).</li>
        <li><strong>Quali ostacoli</strong> hai affrontato (sfide).</li>
        <li><strong>Cosa hai imparato</strong> e come aiuti i clienti (valore).</li>
        <li><strong>Mission/vision</strong> in una frase comprensibile.</li>
        <li><strong>Invito all’azione.</strong></li>
      </ul>
      <p>
        Questa struttura richiama il classico schema delle storie: situazione iniziale, difficoltà, soluzione, risultato finale, applicato allo storytelling aziendale.
      </p>

      <h2>Scegli solo gli episodi che contano</h2>
      <p>
        Per non annoiare, devi tagliare: non tutta la tua storia è interessante per chi ti legge. La cosa più importante è selezionare episodi che mostrano valori, scelte e risultati rilevanti per i tuoi clienti.
      </p>
      <p>Per esempio:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>L’episodio in cui hai deciso di cambiare modo di lavorare per offrire più qualità.</li>
        <li>Una difficoltà concreta che hai superato e che oggi ti fa capire meglio i problemi dei tuoi clienti.</li>
        <li>Un progetto o un cliente che rappresenta bene come lavori.</li>
      </ul>
      <p>
        Selezionare questi momenti permette di raccontare meno, ma meglio, e di costruire una storia autentica e coerente.
      </p>

      <h2>Fai del cliente il protagonista</h2>
      <p>
        Nel migliore storytelling aziendale, il vero “eroe” non sei tu: è il cliente. Tu sei il mentore, l’aiutante che lo accompagna.
      </p>
      <p>Per questo:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Fai vedere in che modo la tua storia ti ha reso più capace di aiutare chi ti sceglie.</li>
        <li>Collega episodi della tua attività a problemi reali dei clienti.</li>
        <li>Mostra il “lieto fine” non come successo tuo, ma come risultato per loro.</li>
      </ul>
      <p>
        Così il lettore si riconosce e sente che la tua storia riguarda anche lui, non è solo autocelebrativa.
      </p>

      <h2>Scrivi semplice, breve e per blocchi</h2>
      <p>Per evitare il muro di testo tipico delle pagine “Chi siamo”, usa:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Paragrafi brevi.</li>
        <li>Sottotitoli chiari.</li>
        <li>Qualche elenco puntato per momenti chiave (valori, tappe, risultati).</li>
      </ul>
      <p>Il tono dovrebbe essere:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Diretto e umano.</li>
        <li>Coerente con il resto del sito.</li>
        <li>Privo di troppe frasi pompose o autoreferenziali.</li>
      </ul>
      <p>
        Molte linee guida consigliano di mettere un riassunto molto sintetico all’inizio (2–3 frasi) e poi sviluppare meglio il racconto più in basso, così chi ha fretta capisce subito l’essenziale.
      </p>

      <h2>Inserisci voce, volti e valori</h2>
      <p>Una storia che non annoia spesso include:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Elementi visivi (foto vere, non solo stock).</li>
        <li>Persone: chi c’è dietro l’attività.</li>
        <li>Valori espressi in modo concreto, non in parole vuote.</li>
      </ul>
      <p>Esempi:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Raccontare cosa ti spinge ancora oggi a fare questo lavoro.</li>
        <li>Citare una frase che ti rappresenta.</li>
        <li>Mostrare brevemente chi collabora con te, non solo “l’azienda” astratta.</li>
      </ul>
      <p>
        Questo rende la pagina più “umana” e memorabile, soprattutto per attività piccole e professionisti.
      </p>

      <h2>Chiudi con una call to action</h2>
      <p>
        Anche la pagina in cui racconti la tua storia dovrebbe avere un finale che invita a fare un passo concreto: contattarti, leggere i servizi, vedere i progetti.
      </p>
      <p>Suggerimenti:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>“Ti ritrovi in questo modo di lavorare? Raccontami della tua attività.”</li>
        <li>“Vuoi un sito che racconti bene anche la tua storia? Scopri come posso aiutarti.”</li>
        <li>“Dai un’occhiata ai servizi che posso seguirti passo passo.”</li>
      </ul>
      <p>
        Così la storia non rimane fine a sé stessa, ma diventa un pezzo del percorso che porta il visitatore a lavorare con te.
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
          Vuoi un sito che racconti bene anche la tua storia?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Scopri come posso aiutarti a trasformare il tuo sito in un percorso che porta i visitatori a lavorare con te.
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
          Raccontami della tua attività →
        </a>
      </div>
    </div>
  )
};
