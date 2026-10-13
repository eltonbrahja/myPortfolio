import React from 'react';

export const sitoAbbonamentoVsPagamentoUnicoPost = {
  id: "sito-abbonamento-vs-pagamento-unico",
  seoTitle: "Sito Proprietario vs Canone Mensile: Guida ai Costi Reali 2026",
  title: "Sito Web Proprietario vs Canone Mensile: Perché Evitare gli Abbonamenti a Vita e Quanto Risparmi Davvero",
  excerpt: "Sito web proprietario o a canone mensile? Guida trasparente ai costi reali, rischi del sito a noleggio e calcolo del risparmio a lungo termine con prezzo fisso una-tantum.",
  date: "13 Ottobre 2026",
  readTime: "10 min di lettura",
  category: "Costi & Strategia",
  image: "/sito-abbonamento.jpg",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è la differenza sostanziale tra un sito web proprietario e uno a canone mensile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un sito proprietario è un asset aziendale di tua esclusiva proprietà: saldato il costo di sviluppo una-tantum, possiedi al 100% codice, dominio e contenuti, pagando solo i costi vivi di hosting annuale (circa 80€-120€/anno). Un sito a canone mensile è un noleggio continuo: paghi una quota ricorrente (50€-150€/mese) e, se interrompi i versamenti, la piattaforma viene spenta e perdi tutto il lavoro accumulato."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto costa mantenere un sito web proprietario all'anno?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per un sito proprietario professionale, i soli costi vivi ricorrenti obbligatori sono il rinnovo del nome a dominio e il server di hosting professionale, per una spesa complessiva compresa generalmente tra gli 80€ e i 150€ all'anno. Non esistono canoni fissi di agenzia o abbonamenti obbligatori."
        }
      },
      {
        "@type": "Question",
        "name": "Cosa succede se decido di disdire un contratto per un sito web a noleggio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nella maggior parte dei contratti a canone, l'agenzia detiene la proprietà del codice e dei template. In caso di disdetta, il sito viene rimosso dal web oppure viene richiesta una pesante penale o una quota di riscatto (spesso tra 1.000€ e 2.000€) per consegnare file spesso obsoleti e difficilmente trasferibili altrove."
        }
      },
      {
        "@type": "Question",
        "name": "Quando ha senso davvero pagare un canone mensile a un'agenzia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un canone mensile ha senso esclusivamente se finanzia un servizio continuativo di crescita attiva: gestione costante di campagne pubblicitarie (Google Ads o Meta Ads), redazione di nuovi articoli SEO mensili o assistenza tecnica dedicata 24/7 per e-commerce ad alto traffico. Non ha alcun senso economico pagare un canone passivo solo per 'mantenere online' un sito vetrina o istituzionale."
        }
      },
      {
        "@type": "Question",
        "name": "Se acquisto un sito proprietario, posso aggiornare testi e immagini in autonomia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Le nostre piattaforme proprietarie vengono progettate per essere intuitive e autonome. Al momento della consegna viene fornita la configurazione per consentirti di modificare contatti, orari, servizi e articoli in totale libertà, senza dover pagare alcuna commissione per ogni singola modifica."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      {/* ========================================================
          HOOK INTRODUTTIVO (Max 3-4 righe sul problema reale)
          ======================================================== */}
      <p>
        Ti propongono un sito web aziendale a 49€ o 99€ al mese <em>“senza costi iniziali e con manutenzione inclusa”</em>. A prima vista sembra un'opportunità vantaggiosa, ma nella realtà stai sottoscrivendo un contratto di noleggio a tempo indeterminato: dopo tre anni avrai speso migliaia di euro senza possedere una sola riga di codice, con la minaccia che il sito venga oscurato all'istante se smetti di pagare. In questa guida analizziamo i costi nascosti del canone mensile, i vantaggi concreti del <strong>sito web proprietario</strong> al 100% e il calcolo esatto del risparmio economico reale a 3 e 5 anni.
      </p>

      {/* ========================================================
          TABLE OF CONTENTS (TOC)
          ======================================================== */}
      <div className="article-toc">
        <div className="toc-title">Indice dei Contenuti</div>
        <ol className="toc-list">
          <li><a href="#trappola-noleggio-digitale">La trappola del noleggio digitale: cosa si nasconde dietro il canone mensile</a></li>
          <li><a href="#cos-e-sito-proprietario">Cos'è un sito web proprietario: libertà totale, codice pulito e zero vincoli</a></li>
          <li><a href="#tabella-comparativa-abbonamento">Tabella comparativa: Noleggio Mensile vs Piattaforme Chiuse vs Ecosistema Proprietario</a></li>
          <li><a href="#calcolo-economico-roi">Il calcolo economico reale: quanto spendi in 3 e 5 anni (Simulazione Risparmio)</a></li>
          <li><a href="#vendor-lockin-rischi">Vendor lock-in e clausole capestro: cosa succede quando vuoi cambiare fornitore</a></li>
          <li><a href="#quando-ha-senso-canone">Quando un canone ha senso e quando è una spesa ingiustificata</a></li>
          <li><a href="#casi-studio-portfolio">Esperienza sul campo: architetture proprietarie e performanti dal nostro portfolio</a></li>
          <li><a href="#faq-sito-proprietario">Domande Frequenti (FAQ) su sito proprietario vs canone mensile</a></li>
          <li><a href="#cta-preventivo-trasparente">Richiedi un preventivo a prezzo fisso senza abbonamenti a vita</a></li>
        </ol>
      </div>

      {/* ========================================================
          SEZIONE 1: LA TRAPPOLA DEL NOLEGGIO DIGITALE
          ======================================================== */}
      <h2 id="trappola-noleggio-digitale">1. La trappola del noleggio digitale: cosa si nasconde dietro il canone mensile</h2>
      <p>
        Negli ultimi anni molte agenzie web e società di telecomunicazioni hanno trasformato la vendita di siti internet in una formula ad abbonamento: una tariffa apparentemente leggera (spesso tra 59€ e 149€ al mese + IVA), promossa come la scelta ideale per eliminare l'investimento iniziale.
      </p>
      <p>
        Tuttavia, esiste una differenza fondamentale che ogni imprenditore deve comprendere prima di firmare: <strong>la differenza tra comprare un bene strumentale e affittarlo a fondo perduto</strong>.
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Il sito non è tuo:</strong> Legalmente e tecnicamente, stai pagando il diritto temporaneo di visualizzare delle pagine ospitate sui server dell'agenzia. Se decidi di recedere dal contratto, non puoi "prendere i file e trasferirti": il sito viene spento e il tuo indirizzo web torna al punto di partenza.
        </li>
        <li>
          <strong>La finta manutenzione:</strong> La quota mensile viene quasi sempre giustificata con la voce "assistenza e manutenzione tecnica". Ma se hai un sito vetrina che non subisce modifiche quotidiane, cosa viene manutenuto ogni mese per 100€? Nella realtà dei fatti, nulla: un backup automatico e qualche aggiornamento di routine che su un'infrastruttura moderna richiedono pochi secondi.
        </li>
        <li>
          <strong>Costi cumulativi fuori controllo:</strong> Pagare 99€ al mese sembra poco al mese 1. Ma al mese 36 sono 3.564€; al mese 60 sono quasi 6.000€. Una cifra con cui avresti potuto sviluppare due siti proprietari di altissimo livello, continuando a essere proprietario dei tuoi asset.
        </li>
      </ul>

      {/* ========================================================
          SEZIONE 2: COS'È UN SITO WEB PROPRIETARIO
          ======================================================== */}
      <h2 id="cos-e-sito-proprietario">2. Cos'è un sito web proprietario: libertà totale, codice pulito e zero vincoli</h2>
      <p>
        Un <strong>sito web proprietario</strong> è concepito come un investimento patrimoniale per la tua azienda, esattamente come l'acquisto di un macchinario, dell'insegna o dell'arredamento del tuo studio.
      </p>
      <p>
        La formula si basa su un principio di totale trasparenza e indipendenza:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '28px 0' }}>
        <div style={{
          background: 'rgba(86, 124, 141, 0.05)',
          borderLeft: '4px solid var(--accent-color)',
          borderRadius: '0 12px 12px 0',
          padding: '20px'
        }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: 'var(--text-primary)' }}>
            Investimento Una-Tantum con Inizio e Fine Certi
          </h3>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6' }}>
            Stabilito il preventivo iniziale per la progettazione grafica, il copywriting commerciale e lo sviluppo tecnico, la cifra rimane fissa. Non ci sono rate infinite, canoni imprevisti o sorprese a fine anno. Al saldo finale, il progetto è concluso e il sito ti appartiene a vita.
          </p>
        </div>

        <div style={{
          background: 'rgba(86, 124, 141, 0.05)',
          borderLeft: '4px solid var(--accent-color)',
          borderRadius: '0 12px 12px 0',
          padding: '20px'
        }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: 'var(--text-primary)' }}>
            Proprietà Esclusiva di Codice, Dominio e Dati
          </h3>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6' }}>
            Il dominio è intestato al 100% alla tua ragione sociale, i file sorgente sono tuoi e hai il pieno controllo amministrativo. Se domani vuoi cambiare sviluppatore o spostare il sito su un altro server, sei libero di farlo in 10 minuti con una semplice esportazione.
          </p>
        </div>

        <div style={{
          background: 'rgba(86, 124, 141, 0.05)',
          borderLeft: '4px solid var(--accent-color)',
          borderRadius: '0 12px 12px 0',
          padding: '20px'
        }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: 'var(--text-primary)' }}>
            Costi Vivi Fisiologici Ridotti all'Osso
          </h3>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6' }}>
            Gli unici costi vivi ricorrenti sono quelli oggettivi dell'infrastruttura web: il canone annuale per il dominio (.it o .com) e l'hosting ad alte prestazioni (circa 80€ – 130€ all'anno). Zero commissioni d'agenzia e zero canoni passivi.
          </p>
        </div>
      </div>

      {/* ========================================================
          SEZIONE 3: TABELLA COMPARATIVA
          ======================================================== */}
      <h2 id="tabella-comparativa-abbonamento">3. Tabella comparativa: Noleggio Mensile vs Piattaforme Chiuse vs Ecosistema Proprietario</h2>
      <p>
        Confrontiamo le tre soluzioni più diffuse sul mercato per capire cosa ricevi realmente in cambio dei tuoi soldi:
      </p>

      <div className="table-responsive">
        <table className="article-table">
          <thead>
            <tr>
              <th>Parametro di Valutazione</th>
              <th>Agenzia con Canone Mensile</th>
              <th>Piattaforma Fai-da-Te (Wix / Squarespace)</th>
              <th>Sito Web Proprietario (Elton Brahja)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Proprietà del Codice</strong></td>
              <td>Nessuna: il codice appartiene all'agenzia fornitrice</td>
              <td>Nessuna: chiuso all'interno del loro ecosistema</td>
              <td><strong>Totale al 100%: sorgenti e accessi tuoi per sempre</strong></td>
            </tr>
            <tr>
              <td><strong>Costo a 3 Anni (Esempio Medio)</strong></td>
              <td>2.800 € – 4.500 € (a rate da 80-120€/mese)</td>
              <td>600 € – 1.100 € (più ore di lavoro perse)</td>
              <td><strong>1.500 € – 2.200 € complessivi una-tantum</strong></td>
            </tr>
            <tr>
              <td><strong>Costo a 5 Anni</strong></td>
              <td>4.800 € – 7.500 € (spesa continua che non finisce mai)</td>
              <td>1.000 € – 1.800 €</td>
              <td><strong>Invariato (solo ~90€/anno di hosting puro)</strong></td>
            </tr>
            <tr>
              <td><strong>Velocità e Core Web Vitals</strong></td>
              <td>Spesso lenta: template riadattati su server condivisi</td>
              <td>Spesso insufficiente per codice JavaScript pesante</td>
              <td><strong>Istantanea (&lt; 0.8s) con codice moderno no-bloat</strong></td>
            </tr>
            <tr>
              <td><strong>Cosa succede se smetti di pagare</strong></td>
              <td>Il sito viene cancellato e il dominio resta bloccato</td>
              <td>Il sito viene sospeso o tornano i banner pubblicitari</td>
              <td><strong>Il sito rimane online e funzionante senza rischi</strong></td>
            </tr>
            <tr>
              <td><strong>Personalizzazione e Funzionalità</strong></td>
              <td>Rigida: ogni modifica extra comporta costi aggiuntivi</td>
              <td>Limitata ai widget disponibili nello store</td>
              <td><strong>Totale su misura (booking, multilingua, moduli sanitari)</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========================================================
          SEZIONE 4: IL CALCOLO ECONOMICO REALE
          ======================================================== */}
      <h2 id="calcolo-economico-roi">4. Il calcolo economico reale: quanto spendi in 3 e 5 anni (Simulazione Risparmio)</h2>
      <p>
        Ipotizziamo una simulazione numerica concreta basata sui listini medi applicati in Italia per un sito aziendale o per studio professionale:
      </p>

      <div style={{
        background: 'rgba(86, 124, 141, 0.06)',
        borderRadius: '16px',
        padding: '24px 28px',
        margin: '28px 0',
        border: '1px solid rgba(86, 124, 141, 0.2)'
      }}>
        <h3 style={{ marginTop: 0, fontSize: '19px', color: 'var(--text-primary)' }}>
          Scenario A: Agenzia a Canone Mensile (90 € / mese + IVA)
        </h3>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Spesa Anno 1: <strong>1.080 €</strong></li>
          <li>Spesa Totale dopo 3 anni: <strong>3.240 €</strong></li>
          <li>Spesa Totale dopo 5 anni: <strong>5.400 €</strong></li>
          <li><strong>Patrimonio aziendale accumulato a 5 anni: 0 €</strong> (se smetti di pagare non ti rimane nulla in mano).</li>
        </ul>

        <h3 style={{ marginTop: '20px', fontSize: '19px', color: 'var(--text-primary)' }}>
          Scenario B: Sito Web Proprietario Elton Brahja (1.600 € Una-Tantum)
        </h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Spesa Anno 1: 1.600 € sviluppo + 90 € hosting = <strong>1.690 €</strong></li>
          <li>Spesa Totale dopo 3 anni: 1.600 € + (90 € × 3) = <strong>1.870 €</strong></li>
          <li>Spesa Totale dopo 5 anni: 1.600 € + (90 € × 5) = <strong>2.050 €</strong></li>
          <li><strong>Risparmio netto reale a 5 anni: 3.350 € risparmiati</strong>, con una piattaforma di tua proprietà esclusiva, veloce e posizionata su Google.</li>
        </ul>
      </div>

      <p>
        I numeri non mentono: il presunto "risparmio" dell'abbonamento mensile svanisce già a partire dal 18° o 20° mese di contratto. Da quel momento in poi, ogni rata versata rappresenta un sovrapprezzo ingiustificato che drena liquidità dalla tua cassa aziendale.
      </p>

      {/* ========================================================
          SEZIONE 5: VENDOR LOCK-IN E RISCHI
          ======================================================== */}
      <h2 id="vendor-lockin-rischi">5. Vendor lock-in e clausole capestro: cosa succede quando vuoi cambiare fornitore</h2>
      <p>
        Il problema più grave dei modelli a canone non è soltanto finanziario, ma organizzativo: il cosiddetto <strong>Vendor Lock-in</strong> (la dipendenza forzata dal fornitore).
      </p>
      <p>
        Molti imprenditori si rendono conto della trappola solo quando, insoddisfatti dell'assistenza ricevuta o della lentezza del sito, provano a cambiare web master. Ecco cosa scoprono spesso leggendo le clausole scritte in piccolo del loro contratto:
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Clausola di riscatto del sito:</strong> Se vuoi portare via il tuo sito prima di 24 o 36 mesi, ti viene addebitata una maxi-rata finale di riscatto (spesso compresa tra 1.000€ e 1.800€).
        </li>
        <li>
          <strong>Integrazione su CMS proprietari chiusi:</strong> Molte grandi realtà non sviluppano su codice standard, ma su piattaforme chiuse di loro proprietà. Questo significa che, anche pagando il riscatto, i file non possono essere installati su nessun altro server del mondo: sei costretto a buttare via tutto e ricominciare da capo.
        </li>
        <li>
          <strong>Dominio registrato con dati dell'agenzia:</strong> Spesso il titolare dell'azienda scopre che il dominio non è intestato a lui, ma all'agenzia fornitrice, con difficoltà burocratiche estenuanti per ottenere il codice di sblocco (Auth-Code) per il trasferimento.
        </li>
      </ul>

      {/* ========================================================
          SEZIONE 6: QUANDO UN CANONE HA SENSO
          ======================================================== */}
      <h2 id="quando-ha-senso-canone">6. Quando un canone ha senso e quando è una spesa ingiustificata</h2>
      <p>
        Per correttezza professionale, bisogna chiarire che esistono situazioni in cui pagare un importo mensile è utile e strategico. La regola per distinguere una spesa intelligente da una truffa è semplice: <strong>stai pagando per un lavoro attivo continuo o per un bene passivo?</strong>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '24px 0' }}>
        <div style={{
          background: 'rgba(217, 83, 79, 0.08)',
          borderLeft: '4px solid #d9534f',
          padding: '16px 20px',
          borderRadius: '0 8px 8px 0'
        }}>
          <strong>Quando il Canone è una SPESA INGIUSTIFICATA:</strong>
          <p style={{ margin: '6px 0 0 0', fontSize: '14px' }}>
            Pagare 70€–120€ al mese per un semplice sito vetrina aziendale o per uno studio professionale che richiede solo modifiche saltuarie a contatti o foto. Un sito ben costruito con codice pulito non si rompe da solo e non richiede manutenzione continua a pagamento.
          </p>
        </div>

        <div style={{
          background: 'rgba(92, 184, 92, 0.08)',
          borderLeft: '4px solid #5cb85c',
          padding: '16px 20px',
          borderRadius: '0 8px 8px 0'
        }}>
          <strong>Quando un Abbonamento Mensile ha SENSO:</strong>
          <p style={{ margin: '6px 0 0 0', fontSize: '14px' }}>
            Quando l'importo mensile finanzia un'attività operativa continuativa che produce fatturato diretto: ad esempio la gestione strategica di campagne Google Ads con ottimizzazione settimanale dei costi per click, oppure la stesura e pubblicazione costante di articoli di blog per la SEO locale. In questo caso non paghi l'affitto del sito, ma il lavoro di marketing che genera nuovi clienti.
          </p>
        </div>
      </div>

      {/* ========================================================
          SEZIONE 7: CASI STUDIO REALI DAL PORTFOLIO
          ======================================================== */}
      <h2 id="casi-studio-portfolio">7. Esperienza sul campo: architetture proprietarie e performanti dal nostro portfolio</h2>
      <p>
        La filosofia del nostro lavoro su <a href="/portfolio" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>eltonbrahja.eu/portfolio</a> è chiara: nessun cliente deve sentirsi vincolato o ostaggio della tecnologia. Tutte le soluzioni che progettiamo sono di <strong>proprietà esclusiva del cliente</strong>, senza canoni periodici e ottimizzate per massimizzare le conversioni:
      </p>

      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Studio Dr.ssa Marascio (Psicologia &amp; Psicoterapia):</strong> Abbiamo integrato una piattaforma con agenda sanitaria automatizzata (LatePoint) collegata direttamente a Google Calendar. Lo studio è proprietario al 100% dell'infrastruttura, senza dover pagare 60€ o 100€ al mese a piattaforme esterne di booking medico.
        </li>
        <li>
          <strong>Studio Dott.ssa Danubia Macario (Consulenza Clinica Internazionale):</strong> Portale sanitario bilingue veloce (&lt; 0.7s) con architettura proprietaria. Il cliente gestisce pazienti in Italia e all'estero con autonomia totale e zero costi ricorrenti d'agenzia.
        </li>
        <li>
          <strong>B&amp;B Palazzo Dana (Hospitality &amp; Prenotazione Diretta):</strong> Sviluppo di un motore di prenotazione diretta integrato con sincronizzazione iCal dei calendari, permettendo alla struttura di incassare direttamente senza pagare percentuali a intermediari né canoni SaaS per costosi software esterni di booking.
        </li>
      </ul>

      {/* ========================================================
          SEZIONE 8: FAQ SITO PROPRIETARIO VS CANONE
          ======================================================== */}
      <h2 id="faq-sito-proprietario">8. Domande Frequenti (FAQ) su Sito Proprietario vs Canone Mensile</h2>
      <dl className="faq-list">
        <dt>Qual è la differenza sostanziale tra un sito web proprietario e uno a canone mensile?</dt>
        <dd>
          Un sito proprietario è un asset aziendale di tua esclusiva proprietà: saldato il costo di sviluppo una-tantum, possiedi al 100% codice, dominio e contenuti, pagando solo i costi vivi di hosting annuale (circa 80€-120€/anno). Un sito a canone mensile è un noleggio continuo: paghi una quota ricorrente (50€-150€/mese) e, se interrompi i versamenti, la piattaforma viene spenta e perdi tutto il lavoro accumulato.
        </dd>

        <dt>Quanto costa mantenere un sito web proprietario all'anno?</dt>
        <dd>
          Per un sito proprietario professionale, i soli costi vivi ricorrenti obbligatori sono il rinnovo del nome a dominio e il server di hosting professionale, per una spesa complessiva compresa generalmente tra gli 80€ e i 150€ all'anno. Non esistono canoni fissi di agenzia o abbonamenti obbligatori.
        </dd>

        <dt>Cosa succede se decido di disdire un contratto per un sito web a noleggio?</dt>
        <dd>
          Nella maggior parte dei contratti a canone, l'agenzia detiene la proprietà del codice e dei template. In caso di disdetta, il sito viene rimosso dal web oppure viene richiesta una pesante penale o una quota di riscatto (spesso tra 1.000€ e 2.000€) per consegnare file spesso obsoleti e difficilmente trasferibili altrove.
        </dd>

        <dt>Quando ha senso davvero pagare un canone mensile a un'agenzia?</dt>
        <dd>
          Un canone mensile ha senso esclusivamente se finanzia un servizio continuativo di crescita attiva: gestione costante di campagne pubblicitarie (Google Ads o Meta Ads), redazione di nuovi articoli SEO mensili o assistenza tecnica dedicata 24/7 per e-commerce ad alto traffico. Non ha alcun senso economico pagare un canone passivo solo per 'mantenere online' un sito vetrina o istituzionale.
        </dd>

        <dt>Se acquisto un sito proprietario, posso aggiornare testi e immagini in autonomia?</dt>
        <dd>
          Sì. Le nostre piattaforme proprietarie vengono progettate per essere intuitive e autonome. Al momento della consegna viene fornita la configurazione per consentirti di modificare contatti, orari, servizi e articoli in totale libertà, senza dover pagare alcuna commissione per ogni singola modifica.
        </dd>
      </dl>

      {/* ========================================================
          CTA BOX FINALE
          ======================================================== */}
      <div id="cta-preventivo-trasparente" style={{
        background: 'linear-gradient(135deg, rgba(245, 239, 235, 0.8) 0%, rgba(200, 217, 230, 0.3) 100%)',
        border: '1px solid rgba(86, 124, 141, 0.25)',
        borderRadius: '24px',
        padding: '40px 32px',
        marginTop: '60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)', marginTop: 0 }}>
          Vuoi un Sito Web Performante Senza Abbonamenti a Vita?
        </h3>
        <p style={{ color: 'rgba(47, 65, 86, 0.85)', fontSize: '16px', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Realizza la tua piattaforma digitale con un investimento trasparente a prezzo fisso una-tantum. Codice proprietario, velocità estrema su smartphone e zero canoni nascosti.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:elton.brahja.s@gmail.com?subject=Richiesta%20Preventivo%20Sito%20Proprietario"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              padding: '14px 32px',
              fontSize: '15px',
              fontWeight: '600',
              borderRadius: '9999px',
              boxShadow: '0 8px 24px rgba(44, 62, 80, 0.2)',
              color: '#ffffff',
              backgroundColor: 'var(--accent-color)'
            }}
          >
            Richiedi un Preventivo a Prezzo Fisso →
          </a>
          <a
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: '600',
              borderRadius: '9999px',
              border: '1px solid rgba(86, 124, 141, 0.3)',
              color: 'var(--text-primary)',
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            Esplora i Progetti Realizzati
          </a>
        </div>
      </div>
    </div>
  )
};
