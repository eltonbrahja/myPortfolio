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

export const setteSegnaliRifareSitoPost = {
  id: "7-segnali-rifare-sito",
  title: "7 segnali che è ora di rifare il sito della tua attività",
  excerpt: "Sei sicuro che il tuo sito web stia aiutando la tua attività locale? Scopri i 7 campanelli d'allarme che indicano che è arrivato il momento di un restyling per non perdere clienti.",
  date: "22 Giugno 2026",
  readTime: "5 min di lettura",
  category: "Web Design",
  image: "/fotoCambioSito.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Come capire se è ora di rifare il sito web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se il tuo sito è lento a caricarsi, non si vede bene da smartphone, ha una grafica datata o, peggio ancora, non ti porta mai nuovi contatti o richieste di preventivo, è il momento giusto per un restyling."
        }
      },
      {
        "@type": "Question",
        "name": "Perché un sito non aggiornato fa perdere clienti?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un sito con informazioni vecchie, servizi non più attivi o orari sbagliati comunica poca professionalità. I clienti preferiscono rivolgersi ad attività che mostrano cura e precisione anche online."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto è importante avere un sito mobile-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oggi la stragrande maggioranza delle visite arriva da smartphone. Se il tuo sito non è ottimizzato per il mobile, gli utenti lo abbandoneranno per frustrazione e Google lo penalizzerà nei risultati di ricerca."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p style={{ fontSize: '13px', color: 'rgba(100,100,100,0.6)', marginTop: '-15px', marginBottom: '30px', fontStyle: 'italic' }}>
        Foto di <a href="https://unsplash.com/it/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Brett Jordan</a> su <a href="https://unsplash.com/it/foto/blocchi-di-lettere-lettere-in-legno-marrone-ehKaEaZ5VuU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </p>

      <p>
        Il web viaggia a una velocità impressionante, e quello che funzionava cinque o dieci anni fa oggi rischia di farti più danni che altro. Molte attività locali e studi professionali tengono online un sito web obsoleto pensando: "L'importante è esserci".
      </p>
      
      <p>
        Ma la verità è che <strong>un brutto sito è peggio di nessun sito</strong>. Se la tua presenza online comunica disordine o lentezza, i potenziali clienti andranno altrove. Ecco 7 campanelli d'allarme che ti dicono che è arrivato il momento di rifare il tuo sito.
      </p>

      <div className="article-toc">
        <div className="toc-title">Indice</div>
        <ol className="toc-list">
          <li><a href="#sito-lento">1. Il sito è troppo lento</a></li>
          <li><a href="#no-mobile">2. Da smartphone è un incubo</a></li>
          <li><a href="#grafica-vecchia">3. La grafica è chiaramente anni 2000</a></li>
          <li><a href="#nessun-contatto">4. Non ricevi richieste o chiamate</a></li>
          <li><a href="#informazioni-vecchie">5. Le informazioni non sono aggiornate</a></li>
          <li><a href="#navigazione-confusa">6. La navigazione è un labirinto</a></li>
          <li><a href="#no-brand">7. Non rispecchia più il tuo brand</a></li>
          <li><a href="#conclusione">Cosa fare adesso?</a></li>
        </ol>
      </div>

      <h2 id="sito-lento">1. Il sito è troppo lento</h2>
      <p>
        La pazienza sul web non esiste. Se il tuo sito impiega più di 3 secondi per aprirsi, gran parte dei visitatori cliccherà il tasto "indietro" e sceglierà il tuo concorrente. Un sito lento non solo brucia le tue opportunità, ma viene anche penalizzato da Google, che oggi dà un'enorme priorità alla velocità (i famosi Core Web Vitals).
      </p>

      <h2 id="no-mobile">2. Da smartphone è un incubo (non è mobile-friendly)</h2>
      <p>
        Oltre il 70% del traffico web per le attività locali (ristoranti, artigiani, studi medici) avviene da smartphone. Se per leggere i tuoi testi le persone devono zoomare o scorrere a destra e a sinistra, hai un problema grave. Un sito oggi deve essere pensato "mobile-first", cioè progettato per funzionare in modo perfetto sugli schermi piccoli.
      </p>

      <h2 id="grafica-vecchia">3. La grafica è chiaramente "anni 2000"</h2>
      <p>
        Pagine piene di testo disordinato, foto sgranate, bottoni con effetti 3D lucidi e colori fluo: se il tuo sito sembra antiquato, gli utenti penseranno che anche il tuo modo di lavorare lo sia. L'estetica di un sito comunica autorevolezza. Un design pulito, moderno e ordinato trasmette immediata professionalità.
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Pensi che il tuo sito abbia bisogno di una rinfrescata? <a href="/#preventivo">Richiedi un'analisi gratuita →</a>
      </p>

      <h2 id="nessun-contatto">4. Non ricevi mai richieste o chiamate (assenza di CTA)</h2>
      <p>
        Il campanello d'allarme definitivo: il sito è online, hai qualche visita, ma il telefono non suona e non arrivano email. Questo succede spesso quando mancano le <strong>Call To Action (CTA)</strong>, ovvero pulsanti chiari che dicono all'utente cosa fare (es: "Richiedi un preventivo", "Prenota un tavolo", "Chiama ora"). Se non inviti le persone all'azione, loro semplicemente se ne andranno.
      </p>

      <h2 id="informazioni-vecchie">5. Le informazioni non sono aggiornate</h2>
      <p>
        Orari vecchi, servizi che non offri più, vecchi membri dello staff o blog fermo al 2018. Un sito abbandonato fa pensare a un'attività chiusa o trascurata. Se ogni volta che devi cambiare una virgola devi chiamare un programmatore che ti fa aspettare settimane, è ora di passare a un sistema più moderno e facilmente gestibile.
      </p>

      <h2 id="navigazione-confusa">6. La navigazione è un labirinto</h2>
      <p>
        Se un potenziale cliente impiega più di due clic per trovare i tuoi servizi o la pagina dei contatti, hai perso. Menù infiniti con decine di voci confondono chi naviga. Oggi la struttura di un sito deve essere essenziale, guidando l'utente in un percorso fluido e logico.
      </p>

      <h2 id="no-brand">7. Non rispecchia più il tuo brand e la tua evoluzione</h2>
      <p>
        Magari hai aperto l'attività anni fa, e il sito l'ha fatto tuo cugino per iniziare. Oggi sei cresciuto, hai clienti più importanti, offri servizi di qualità superiore, ma il sito è rimasto quello degli inizi. L'immagine online deve crescere insieme alla tua attività: non puoi presentarti come leader del settore con un sito amatoriale.
      </p>

      <h2 id="conclusione">Cosa fare adesso?</h2>
      <p>
        Se ti sei riconosciuto in almeno uno di questi 7 segnali, non ignorarlo: ogni giorno che passa potresti perdere clienti a vantaggio di competitor che hanno investito nella loro presenza digitale. Un sito web professionale è il tuo miglior dipendente: lavora 24 ore su 24, comunica i tuoi punti di forza e raccoglie contatti.
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
          È ora di cambiare marcia?
        </h3>
        <p style={{ color: 'rgba(86, 124, 141, 0.9)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Non lasciare che un sito obsoleto blocchi la crescita della tua attività. Scopri come posso aiutarti a creare una vetrina online veloce, moderna e progettata per farti ottenere più richieste.
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
          Richiedi subito un preventivo o un'analisi gratuita →
        </a>
      </div>
    </div>
  )
};
