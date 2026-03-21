import React from 'react';

export const hostingGratuitoPost = {
  id: "hosting-gratuito-github-vercel",
  title: "Hosting gratuito del tuo sito web: come usare GitHub e Vercel",
  excerpt: "Pagare un hosting tradizionale non è più l’unica strada per avere un sito online. Scopri come usare GitHub e Vercel per ospitare il tuo sito gratuitamente.",
  date: "Oggi",
  readTime: "4 min",
  image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
  category: "Guide Tecniche",
  content: (
    <div className="article-body">
      <p>Pagare un hosting tradizionale non è più l’unica strada per avere un sito online. Oggi puoi mettere online il tuo sito gratuitamente utilizzando due strumenti pensati per gli sviluppatori ma accessibili a tutti: <strong>GitHub</strong> e <strong>Vercel</strong>.</p>
      <p>In questo articolo vediamo, passo passo, come funzionano e come usarli insieme per ospitare il tuo sito senza costi di hosting.</p>
      
      <h2>Cosa sono GitHub e Vercel (in parole semplici)</h2>
      <p><strong>GitHub</strong> è una piattaforma dove conservare il codice del tuo sito (file HTML, CSS, JavaScript ecc.), con uno storico delle modifiche e un backup sicuro nel cloud.</p>
      <p><strong>Vercel</strong> è un servizio di hosting moderno che prende il codice dal tuo account GitHub e lo trasforma automaticamente in un sito online, distribuendolo su una CDN veloce in tutto il mondo.</p>
      <p>La combinazione dei due ti permette di avere:</p>
      <ul>
        <li>Hosting gratuito (entro i limiti del piano Hobby di Vercel).</li>
        <li>Deploy automatici: ogni volta che aggiorni il codice su GitHub, Vercel pubblica la nuova versione del sito senza che tu debba fare altro.</li>
        <li>Performance molto alte (caricamento in frazioni di secondo per siti statici o Next.js).</li>
      </ul>

      <h2>Perché usare Vercel al posto dell’hosting tradizionale</h2>
      <p>Rispetto a un hosting condiviso classico:</p>
      <ul>
        <li>Non devi configurare server, FTP o pannelli complessi: colleghi il tuo repository GitHub e Vercel fa tutto in automatico.</li>
        <li>Hai una CDN globale inclusa nel piano gratuito, che distribuisce il tuo sito da nodi vicini all’utente, migliorando notevolmente i tempi di caricamento.</li>
        <li>Ottieni URL di anteprima per ogni modifica (preview deployment), utili se lavori con clienti o collaboratori.</li>
      </ul>
      <p>Il piano gratuito (Hobby) di Vercel include caratteristiche più che sufficienti per portfolio, landing page, blog personali e piccoli siti vetrina, con banda generosa e numero di progetti illimitati.</p>

      <h2>Passo 1 – Preparare i file del tuo sito</h2>
      <p>Il punto di partenza è il tuo sito:</p>
      <ul>
        <li>Se hai un sito statico (HTML/CSS/JS), ti basta avere una cartella con i file, per esempio: <code>index.html</code>, <code>style.css</code>, <code>script.js</code>.</li>
        <li>Se usi un framework moderno (React, Next.js, Astro, SvelteKit), Vercel lo riconosce automaticamente quando importerai il progetto da GitHub.</li>
      </ul>
      <p><strong>Consiglio:</strong> mantieni il progetto pulito, con una struttura chiara di cartelle (public, src, ecc.), perché questo facilita il deploy.</p>

      <h2>Passo 2 – Creare un account GitHub e caricare il sito</h2>
      <ol>
        <li>Vai su github.com e crea un account gratuito, se non ne hai già uno.</li>
        <li>Crea un nuovo repository (Public va benissimo per un sito).</li>
        <li>Carica i file del tuo sito:
          <ul>
            <li>O tramite “Add file → Upload files” direttamente da interfaccia web.</li>
            <li>Oppure con Git installato sul tuo PC, usando <code>git clone</code>, <code>git add</code>, <code>git commit</code> e <code>git push</code> verso il repository remoto.</li>
          </ul>
        </li>
      </ol>
      <p>Una volta caricati i file, GitHub diventa il “punto di verità” del tuo sito: ogni modifica che farai passerà da lì.</p>

      <h2>Passo 3 – Creare un account Vercel</h2>
      <ol>
        <li>Vai su vercel.com e registrati con il piano gratuito (Hobby).</li>
        <li>Durante la registrazione, collega il tuo account GitHub a Vercel quando richiesto.</li>
        <li>Autorizza Vercel ad accedere ai tuoi repository, così potrà leggere il codice e fare il deploy automatico.</li>
      </ol>
      <p>Da questo momento Vercel sarà in grado di “vedere” i progetti che tieni su GitHub.</p>

      <h2>Passo 4 – Importare il repository da GitHub a Vercel</h2>
      <p>Dentro la dashboard di Vercel:</p>
      <ol>
        <li>Clicca su “Add New Project”.</li>
        <li>Seleziona il repository GitHub dove hai caricato il tuo sito.</li>
        <li>Vercel proverà a rilevare automaticamente il tipo di progetto (per esempio Next.js, React, framework statico ecc.) e a configurare i comandi di build.</li>
        <li>Conferma le impostazioni proposte (per un sito statico semplice spesso non serve build, basta servire index.html).</li>
        <li>A questo punto, cliccando su “Deploy”, Vercel esegue la build (se necessaria) e distribuisce il tuo sito su un dominio del tipo <em>nomeprogetto.vercel.app</em>.</li>
      </ol>

      <h2>Passo 5 – Deploy automatico a ogni modifica</h2>
      <p>Il vero vantaggio del flusso GitHub + Vercel è l’automazione:</p>
      <ul>
        <li>Ogni volta che fai un push di nuove modifiche sul branch principale del tuo repository (in genere <code>main</code>), Vercel rileva il cambiamento.</li>
        <li>Vercel lancia automaticamente una nuova build, verifica che tutto funzioni e pubblica l’ultima versione del sito sul tuo dominio di produzione.</li>
        <li>Per ogni branch o pull request, Vercel può generare una URL di anteprima dedicata, così puoi vedere come appare il sito prima di andare online.</li>
      </ul>
      <p>In pratica, non devi più “caricare file via FTP”: basta aggiornare il codice in GitHub.</p>

      <h2>Passo 6 – Collegare un tuo dominio personalizzato</h2>
      <p>Se vuoi un dominio del tipo <em>tuodominio.it</em> invece di <em>nomeprogetto.vercel.app</em>:</p>
      <ol>
        <li>Acquista un dominio presso un provider (es. Aruba, Namecheap, Google Domains, ecc.).</li>
        <li>Dentro la dashboard di Vercel, vai al progetto e aggiungi il tuo dominio personalizzato.</li>
        <li>Segui le istruzioni per impostare i record DNS (CNAME/A) presso il provider, puntandoli ai server di Vercel.</li>
      </ol>
      <p>Il collegamento del dominio è incluso anche nel piano gratuito, quindi continui a non pagare nulla per l’hosting, solo il dominio annuale.</p>

      <h2>Limiti del piano gratuito: quando basta e quando no</h2>
      <p>Per un professionista o un piccolo business, il piano gratuito di Vercel è spesso più che sufficiente:</p>
      <ul>
        <li>Puoi creare progetti illimitati.</li>
        <li>Hai banda generosa e un numero definito di build mensili, più che adeguato per siti che non vengono aggiornati ogni giorno o non hanno milioni di visite.</li>
      </ul>
      <p>Diventa sensato passare a un piano a pagamento quando:</p>
      <ul>
        <li>Hai molto traffico, superi regolarmente i limiti di banda o di invocazioni di funzioni serverless.</li>
        <li>Lavori in team e ti servono funzioni collaborative avanzate, permessi granulari e supporto professionale.</li>
      </ul>
      <p>Fino a quel momento, puoi tranquillamente usare l'hosting gratuito senza sacrificare performance e affidabilità.</p>

      <h2>Conclusione: hosting gratuito sì, ma con qualità</h2>
      <p>Grazie a GitHub e Vercel puoi:</p>
      <ul>
        <li>Avere un sito online veloce, sicuro e ottimizzato senza costi di hosting ricorrenti.</li>
        <li>Automatizzare il deploy e lavorare in modo più professionale, anche se sei un singolo freelance o una piccola realtà.</li>
      </ul>
    </div>
  )
};
