// src/pages/Privacy.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './Privacy.css';

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy & Cookie Policy | Elton Brahja";
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="privacy-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="privacy-content"
        >
          <div className="privacy-header">
            <span className="section-label">Legal</span>
            <h1 className="privacy-title">Privacy & <span className="text-gradient">Cookie Policy</span></h1>
            <p className="privacy-intro">Ultimo aggiornamento: 03 Gennaio 2026</p>
          </div>

          <div className="article-body">
            <section>
              <h2>1. Titolare del Trattamento</h2>
              <p>Il titolare del trattamento dei dati è <strong>Elton Brahja</strong>.<br/>
              Sede: Santeramo in colle (BA), Italia.<br/>
              Email di contatto: <a href="mailto:elton.brahja.s@gmail.com">elton.brahja.s@gmail.com</a></p>
            </section>

            <section>
              <h2>2. Quali dati raccogliamo e perché</h2>
              <p>Questo sito web raccoglie dati personali in due modi principali:</p>
              <ul>
                <li><strong>Dati forniti volontariamente:</strong> Quando compili il modulo di contatto, raccogliamo il tuo <strong>Nome</strong> e la tua <strong>Email</strong>. Questi dati servono esclusivamente per rispondere alla tua richiesta di collaborazione. Non vengono ceduti a terzi né usati per newsletter senza consenso.</li>
                <li><strong>Dati tecnici (Log di sistema):</strong> Il framework e i provider di hosting (es. Vercel) potrebbero registrare automaticamente il tuo indirizzo IP e i dettagli del browser per motivi di sicurezza e diagnosi tecnica.</li>
              </ul>
            </section>

            <section>
              <h2>3. Servizi Terzi</h2>
              <p>Per il funzionamento tecnico del sito, utilizziamo i seguenti servizi esterni:</p>
              <ul>
                <li><strong>Formspree:</strong> Gestisce l'invio tecnico del modulo contatti. I dati inseriti nel form transitano sui loro server sicuri.</li>
                <li><strong>Google Fonts:</strong> Per caricare i caratteri, il sito effettua chiamate ai server di Google, che potrebbero rilevare il tuo indirizzo IP.</li>
              </ul>
            </section>

            <section>
              <h2>4. Cookie Policy</h2>
              <p>Questo sito è "tecnicamente leggero". <strong>Non utilizziamo cookie di profilazione</strong> o pubblicitari proprietari.</p>
              <p>Tuttavia, potrebbero essere presenti cookie tecnici necessari al funzionamento (es. preferenze di navigazione) o cookie di terze parti legati ai servizi sopra citati. Continuando la navigazione, accetti l'uso di questi strumenti tecnici essenziali.</p>
            </section>

            <section>
              <h2>5. I tuoi diritti</h2>
              <p>In base al GDPR, hai il diritto di chiedere in qualsiasi momento l'accesso, la rettifica o la cancellazione dei tuoi dati personali inviando una semplice email a <a href="mailto:elton.brahja.s@gmail.com">elton.brahja.s@gmail.com</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Privacy;
