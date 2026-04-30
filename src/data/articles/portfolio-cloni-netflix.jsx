import React from 'react';

export const portfolioCloniNetflixPost = {
  id: "portfolio-cloni-netflix-sabotaggio",
  title: "La truffa dei cloni di Netflix: perché il tuo portfolio ti sta sabotando",
  excerpt: "Tutti costruiscono cloni di Netflix, Spotify o Twitter. Nessuno viene assunto. Scopri perché il design performativo e i tutorial copia-incolla stanno distruggendo le tue possibilità nel 2026.",
  date: "Maggio 2026",
  readTime: "5 min",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
  category: "Carriera & Sviluppo",
  content: (
    <div className="article-body">
      <p>L'hai fatto anche tu. Hai passato le ultime tre settimane a seguire un tutorial di 8 ore su YouTube. Hai costruito una replica esatta dell'interfaccia di Netflix, completa di animazioni fluide, scorrimento orizzontale e un login finto.</p>
      <p>L'hai caricato su Vercel, l'hai aggiunto in cima al tuo portfolio, hai scritto un post su LinkedIn pieno di emoji a razzo 🚀 e hai aspettato che i recruiter bussassero alla tua porta.</p>
      <p>E poi... il silenzio assoluto.</p>
      <p>Nel 2026, il mercato tech junior è spietato. Ma il problema non è solo la saturazione. Il problema è che stai cercando di farti assumere usando un'esca che le aziende hanno imparato a odiare: <strong>il design performativo</strong>.</p>

      <nav className="article-toc">
        <h3 className="toc-title">Indice</h3>
        <ol className="toc-list">
          <li><a href="#il-problema">Il problema non è il codice, è il pensiero</a></li>
          <li><a href="#design-performativo">Il morbo del "design performativo"</a></li>
          <li><a href="#cosa-cercano">Cosa cercano davvero i Tech Lead (Spoiler: non i cloni)</a></li>
          <li><a href="#come-risolvere">Come costruire un portfolio che funziona davvero nel 2026</a></li>
          <li><a href="#conclusione">Conclusione: uccidi il tuo clone</a></li>
        </ol>
      </nav>

      <h2 id="il-problema">Il problema non è il codice, è il pensiero</h2>
      <p>Quando un Tech Lead o un Senior Developer guarda il tuo clone di Spotify, non pensa: <em>"Wow, questo candidato sa usare bene React e Tailwind."</em></p>
      <p>Pensa: <em>"Questo candidato sa copiare il lavoro di qualcun altro."</em></p>
      <p>I tutorial su YouTube sono fantastici per imparare la sintassi. Ma lo sviluppo software nel mondo reale non riguarda la scrittura di codice in un ambiente isolato e perfetto. Riguarda la <strong>risoluzione di problemi aziendali disordinati</strong> con requisiti vaghi, API che restituiscono errori 500 inaspettati e clienti che cambiano idea ogni due giorni.</p>
      <p>Un clone non dimostra che sai gestire lo stato di un'applicazione complessa. Dimostra solo che hai avuto la pazienza di ricopiare la gestione dello stato ideata dallo Youtuber di turno. Manca la parte più importante del lavoro: il processo decisionale.</p>

      <h2 id="design-performativo">Il morbo del "design performativo"</h2>
      <p>Il web dev di oggi è infetto da quello che chiamo "design performativo". Progetti costruiti esclusivamente per sembrare belli su uno schermo, senza alcuna logica di business reale alle spalle.</p>
      <p>Un e-commerce finto dove tutti i prodotti costano 99$, il carrello si svuota ricaricando la pagina e non esiste un pannello di admin. È bello da vedere, ma a livello ingegneristico è vuoto.</p>
      <p>Le aziende non ti pagano per fare cose belle (a meno che tu non sia un UI Designer puro). Ti pagano per fare cose che funzionano e generano profitto. Un carrello della spesa visivamente orribile ma che gestisce correttamente le tasse, gli sconti cumulativi, il recupero dei carrelli abbandonati e l'integrazione con Stripe vale 100 volte di più di un clone di Amazon bellissimo ma inerte.</p>

      <h2 id="cosa-cercano">Cosa cercano davvero i Tech Lead (Spoiler: non i cloni)</h2>
      <p>Ho parlato con decine di hiring manager negli ultimi mesi. Ecco cosa vogliono disperatamente vedere nel tuo portfolio (e che non trovano quasi mai):</p>
      <ul>
        <li><strong>Autenticazione reale e ruoli:</strong> Hai costruito un'app dove un "admin" vede cose diverse da un "user"? Hai gestito i token JWT in modo sicuro?</li>
        <li><strong>Gestione degli errori:</strong> Cosa succede nella tua app se cade la connessione a internet? Mostri un toast esplicativo o una schermata bianca incomprensibile?</li>
        <li><strong>CRUD complessi:</strong> Non la solita To-Do list. Un'app per prenotare campi da padel con conflitti di orario, regole di cancellazione e notifiche via email.</li>
        <li><strong>Integrazione con API sporche:</strong> Mostra di saper prendere dati mal strutturati da un'API esterna, pulirli e renderizzarli in modo logico.</li>
      </ul>

      <h2 id="come-risolvere">Come costruire un portfolio che funziona davvero nel 2026</h2>
      <p>Se vuoi emergere dalla massa infinita di candidati con portfolio identici, ecco il processo da seguire:</p>
      <p><strong>Risolvi un problema noioso ma reale.</strong></p>
      <p>Trova un'attività frustrante che tu o un tuo conoscente dovete affrontare. Tua zia ha un negozio di fiori e gestisce gli ordini su un quaderno? Costruiscile una dashboard orribile ma funzionale. Un tuo amico fa il personal trainer? Creagli un'app per tracciare i progressi dei clienti.</p>
      <p>Quando presenterai questo progetto a un colloquio, la conversazione cambierà completamente. Non parlerai più di "quale libreria hai usato". Parlerai di <em>"perché ho dovuto implementare il debouncing sulla barra di ricerca perché mia zia digitava troppo velocemente e faceva crashare il database gratuito."</em></p>
      <p>Quella singola frase dimostra più competenza di 10 cloni di Netflix messi insieme. Dimostra che sei un problem solver, non un dattilografo di codice.</p>

      <h2 id="conclusione">Conclusione: uccidi il tuo clone</h2>
      <p>Se il tuo portfolio è attualmente un museo dei cloni, è il momento di fare pulizia. Tieni un clone al massimo, solo per dimostrare che hai senso estetico. Poi nascondi gli altri.</p>
      <p>Sostituiscili con un progetto brutto, asimmetrico, ma che risolve un problema doloroso della vita reale. Documenta i bug che hai incontrato e come li hai risolti. Mostra il tuo codice sporco, le tue refactor e la tua evoluzione.</p>
      <p>Smettila di cercare di sembrare un Senior Developer copiando il lavoro degli altri. Inizia a comportarti da Junior intelligente che sa come affrontare un problema da zero. È questo che ti farà assumere.</p>

      <hr />
      <p><em>Elton Brahja — Sviluppatore web freelance. Se sei stanco di progetti copia-incolla e vuoi un'applicazione web studiata per il tuo business, <a href="/contact">parliamone</a>.</em></p>
    </div>
  )
};
