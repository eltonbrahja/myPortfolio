import React from 'react';

export const githubCopilotOptOutPost = {
  id: "github-copilot-opt-out",
  title: "Come disattivare GitHub Copilot e impedire che usi il tuo codice",
  excerpt: "Guida rapida per fare opt-out dall'addestramento AI di GitHub Copilot. Scopri come disattivare la condivisione e proteggere il tuo codice privato in 2 semplici passaggi.",
  date: "Marzo 2026",
  readTime: "3 min",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
  category: "Guide Tecniche",
  content: (
    <div className="article-body">
      <p>Se usi GitHub Copilot con un piano Free, Pro o Pro+, c'è una novità importante che devi conoscere — e probabilmente un'impostazione che devi cambiare adesso.</p>
      <p>Dal <strong>24 aprile 2026</strong>, GitHub ha aggiornato la sua policy sulla privacy: le tue interazioni con Copilot — prompt, suggerimenti accettati, snippet di codice e contesto — possono essere utilizzate per addestrare i modelli AI di GitHub, a meno che tu non faccia esplicitamente opt-out.</p>
      <p>In questo articolo ti spiego esattamente cosa è cambiato, chi è coinvolto e come disattivare questa impostazione in due minuti.</p>

      <nav className="article-toc">
        <h3 className="toc-title">Indice</h3>
        <ol className="toc-list">
          <li><a href="#cosa-cambiato">Cosa è cambiato con la nuova policy di GitHub Copilot</a></li>
          <li><a href="#chi-coinvolto">Chi è coinvolto (e chi è escluso)</a></li>
          <li><a href="#come-opt-out">Come fare opt-out da GitHub Copilot: guida passo passo</a></li>
          <li><a href="#dati-terze-parti">I dati vengono condivisi con terze parti?</a></li>
          <li><a href="#progetti-privati">Cosa significa per i tuoi progetti privati?</a></li>
          <li><a href="#conclusione">Conclusione: fai opt-out adesso, poi decidi</a></li>
        </ol>
      </nav>

      <h2 id="cosa-cambiato">Cosa è cambiato con la nuova policy di GitHub Copilot</h2>
      <p>GitHub ha annunciato l'aggiornamento il 25 marzo 2026, dando agli utenti 30 giorni di preavviso. A partire dal 24 aprile, i dati di interazione degli utenti Copilot Free, Pro e Pro+, vengono usati per migliorare i modelli AI interni di GitHub, salvo opt-out esplicito.</p>
      <p>Fino ad ora, i modelli di Copilot erano addestrati su dati pubblici e campioni di codice selezionati manualmente. La nuova policy introduce l'utilizzo dei dati di interazione reali degli sviluppatori — con il meccanismo opt-out (devi disattivarla tu) al posto dell'opt-in (dovrebbero chiederti il consenso).</p>

      <h3>Quali dati vengono raccolti?</h3>
      <p>Secondo la documentazione ufficiale di GitHub, i dati di interazione includono:</p>
      <ul>
        <li>Prompt e output delle conversazioni con Copilot Chat</li>
        <li>Snippet di codice generati o accettati</li>
        <li>Contesto del cursore e struttura del repository</li>
        <li>Nomi dei file</li>
        <li>Pattern di navigazione nel codice</li>
        <li>Feedback sulle suggerimenti (thumbs up/down)</li>
      </ul>
      <p>Un aspetto importante da capire: GitHub distingue tra codice "a riposo" nei repository privati (che <strong>non viene usato</strong> per il training) e i dati generati durante una sessione attiva con Copilot (che <strong>possono essere usati</strong> se non hai fatto opt-out). Se stai usando Copilot su un progetto privato, le interazioni di quella sessione rientrano nella nuova policy.</p>

      <h2 id="chi-coinvolto">Chi è coinvolto (e chi è escluso)</h2>
      <p>Questa modifica non impatta tutti allo stesso modo. Ecco la situazione attuale:</p>
      <ul>
        <li><strong>Chi è coinvolto:</strong> Tutti gli utenti con piani individuali, ovvero <em>Copilot Free</em>, <em>Copilot Pro</em> e <em>Copilot Pro+</em>. Per questi account, la nuova policy è attiva e richiede un'azione esplicita per essere disabilitata.</li>
        <li><strong>Chi è escluso:</strong> Gli utenti con piani aziendali (<em>Copilot Business</em> e <em>Copilot Enterprise</em>) non sono toccati da questa novità, in quanto protetti da specifici accordi contrattuali. Anche l'utenza educational (studenti e docenti) rimane esclusa dalla raccolta dati.</li>
      </ul>
      <p>Se hai già effettuato l'opt-out in passato per altre impostazioni di raccolta dati, la tua preferenza è stata mantenuta e non devi fare nulla. Gli utenti Business ed Enterprise sono coperti dai termini contrattuali e non sono coinvolti.</p>

      <h2 id="come-opt-out">Come fare opt-out da GitHub Copilot: guida passo passo</h2>
      <p>La procedura è rapida. Ecco come disattivare l'uso dei tuoi dati per il training dei modelli AI:</p>
      <ol>
        <li>Accedi al tuo account su <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a></li>
        <li>Clicca sulla tua <strong>foto profilo</strong> in alto a destra</li>
        <li>Seleziona <strong>"Copilot settings"</strong></li>
        <li>Trova la sezione <strong>"Privacy"</strong></li>
        <li>Individua l'opzione <strong>"Allow GitHub to use my data for AI model training"</strong></li>
        <li>Imposta il menu a tendina su <strong>"Disabled"</strong></li>
      </ol>
      <p>L'effetto è immediato: da quel momento GitHub smette di raccogliere i tuoi dati per il training. Tieni presente che se hai più account GitHub, dovrai ripetere questa operazione per ciascuno.</p>
      
      <blockquote>
        <p><strong>Attenzione:</strong> Se non vedi questa opzione nelle impostazioni, probabilmente sei collegato con un account Business o Enterprise — che non è coinvolto da questa policy.</p>
      </blockquote>

      <h2 id="dati-terze-parti">I dati vengono condivisi con terze parti?</h2>
      <p>Secondo GitHub, i dati usati per il training possono essere condivisi con le <strong>società affiliate</strong>, tra cui Microsoft — che fa parte dello stesso gruppo aziendale. GitHub afferma esplicitamente che questi dati <strong>non vengono condivisi</strong> con provider AI di terze parti indipendenti (come OpenAI o altri).</p>
      <p>Vale la pena sottolineare che questa policy è simile a quella adottata da altri strumenti AI di sviluppo, tra cui prodotti di Anthropic, JetBrains e Microsoft stesso. GitHub lo evidenzia nelle proprie FAQ come pratica comune nel settore.</p>

      <h2 id="progetti-privati">Cosa significa per i tuoi progetti privati?</h2>
      <p>Se lavori su codice proprietario o progetti client con un piano individuale, questa distinzione è importante:</p>
      <ul>
        <li>Il <strong>codice sorgente</strong> salvato nel tuo repository privato <strong>non viene usato</strong> per il training.</li>
        <li>I <strong>dati di sessione</strong> generati mentre usi attivamente Copilot (prompt, suggerimenti, contesto) <strong>potrebbero essere raccolti</strong> se non fai opt-out.</li>
      </ul>
      <p>Per i team che gestiscono codice sensibile su piani individuali, questa è un'ottima occasione per valutare il passaggio ai piani Business o Enterprise, che offrono garanzie contrattuali complete sull'esclusione dal training.</p>

      <h2 id="conclusione">Conclusione: fai opt-out adesso, poi decidi</h2>
      <p>La nuova policy di GitHub Copilot non è necessariamente sbagliata — dati reali migliorano i modelli AI e potrebbero portare a suggerimenti più accurati. Ma il meccanismo opt-out invece dell'opt-in sposta su di te la responsabilità di proteggere la tua privacy.</p>
      <p>Il consiglio pratico: <strong>fai opt-out subito</strong>, poi valuta con calma se ti va di contribuire con i tuoi dati. Puoi sempre riattivare l'impostazione in qualsiasi momento.</p>
      <p>Se hai trovato utile questa guida, condividila con altri sviluppatori — molti potrebbero non essere ancora a conoscenza di questa modifica.</p>

      <hr />
      <p><em>Elton Brahja — Sviluppatore web freelance. Per domande o collaborazioni, <a href="/contact">contattami</a>.</em></p>
    </div>
  )
};
