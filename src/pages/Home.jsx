import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, ChevronDown, MessageCircle, Send, Star, UserPlus, Building2, Store, LineChart, Shield, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { ProjectGallery, Lightbox } from '../components/ProjectGallery';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index) => {
    setLightbox({ images, index });
  };
  
  const options = ["Nuovo sito web / Landing page", "Restyling sito esistente", "Consulenza UX / Performance", "Altro"];
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(options[0]);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setSubjectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToForm = () => {
    document.getElementById('preventivo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        navigate('/success');
      } else {
        alert("Oops! C'è stato un problema durante l'invio.");
      }
    } catch (error) {
      alert("Oops! C'è stato un problema durante l'invio.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="home-container">

        {/* 1. HERO */}
        <section className="home-section hero-home">
          <div className="hero-home-content">
            <span className="micro-headline">Web designer freelance per professionisti, studi e attività locali</span>
            <h1 className="hero-home-title">
              Siti web veloci e ottimizzati SEO che ti portano <span className="text-gradient shimmer">contatti</span>, non solo visite
            </h1>
            <p className="hero-home-subtitle">
              Creo siti web per professionisti e attività locali, pensati per convertire visite in contatti reali.
            </p>
            <div className="hero-actions">
              <div className="cta-group">
                <button className="primary-btn" onClick={scrollToForm}>
                  Richiedi un preventivo <ChevronRight size={20} />
                </button>
                <span className="micro-copy">Nessun impegno</span>
              </div>
              <ul className="trust-bullets">
                <li><CheckCircle2 size={14} /> Siti veloci e SEO-ready</li>
                <li><CheckCircle2 size={14} /> UX pensata per la conversione</li>
                <li><CheckCircle2 size={14} /> Risposta entro 24 ore</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. PER CHI E' */}
        <section className="home-section">
          <h2 className="section-title">Per chi sono i miei siti web</h2>
          <div className="cards-grid">
            <GlassCard className="home-card">
              <UserPlus size={32} className="text-blue" strokeWidth={1.5} />
              <h3>Professionisti e freelance</h3>
              <p>Siti che comunicano autorevolezza e trasformano visite in richieste di consulenza qualificate.</p>
            </GlassCard>
            <GlassCard className="home-card">
              <Building2 size={32} className="text-purple" strokeWidth={1.5} />
              <h3>Studi e agenzie</h3>
              <p>Pagine chiare, servizi ben organizzati, moduli di contatto ottimizzati per la lead generation.</p>
            </GlassCard>
            <GlassCard className="home-card">
              <Store size={32} className="text-green" strokeWidth={1.5} />
              <h3>Attività locali</h3>
              <p>Siti leggeri, pensati per farti trovare e contattare in pochi tap da mobile (telefonate, WhatsApp, prenotazioni).</p>
            </GlassCard>
          </div>
        </section>

        {/* 3. COSA OTTIENI */}
        <section className="home-section">
          <h2 className="section-title">Cosa ottieni lavorando con me</h2>
          <div className="cards-grid">
            <GlassCard className="home-card">
              <LineChart size={32} className="text-blue" strokeWidth={1.5} />
              <h3>Più contatti, meno dispersione</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Landing mirate per campagne Google / social.</li>
                <li><CheckCircle2 size={16} /> Form e CTA studiati per il tuo cliente.</li>
                <li><CheckCircle2 size={16} /> Tracking pronto (Analytics, pixel).</li>
              </ul>
            </GlassCard>
            <GlassCard className="home-card">
              <Shield size={32} className="text-purple" strokeWidth={1.5} />
              <h3>Brand che comunica valore</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Design coerente con il tuo posizionamento.</li>
                <li><CheckCircle2 size={16} /> Testi chiari, niente gergo inutile.</li>
                <li><CheckCircle2 size={16} /> Struttura che guida l'utente a fidarsi.</li>
              </ul>
            </GlassCard>
            <GlassCard className="home-card">
              <Zap size={32} className="text-green" strokeWidth={1.5} />
              <h3>Performance tecniche solide</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Siti ultra veloci anche da mobile.</li>
                <li><CheckCircle2 size={16} /> Struttura SEO friendly (tag, schema).</li>
                <li><CheckCircle2 size={16} /> Facilità di manutenzione e scalabilità.</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* 4. COME LAVORIAMO */}
        <section className="home-section">
          <h2 className="section-title">Come lavoriamo insieme in 3 step</h2>
          <div className="timeline">
            <div className="timeline-step">
              <div className="step-number">1</div>
              <h3>Call conoscitiva (30 minuti)</h3>
              <p>Capisco i tuoi obiettivi, il tuo target e i contenuti che hai a disposizione per delineare la strategia.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">2</div>
              <h3>Proposta + wireframe</h3>
              <p>Ti propongo struttura, tempi e investimento chiaro. Nessun costo nascosto se decidi di non proseguire.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">3</div>
              <h3>Sviluppo & lancio</h3>
              <p>Design, sviluppo, ottimizzazione e messa online. Ti consegno un sito chiavi in mano che puoi gestire.</p>
            </div>
          </div>
        </section>

        {/* 5. PORTFOLIO & SOCIAL PROOF */}
        <section className="home-section" id="portfolio">
          <h2 className="section-title">Alcuni progetti recenti</h2>
          <div className="portfolio-mini">
            <GlassCard className="portfolio-item">
              <div className="portfolio-info">
                <h3>Palazzo Dana – Booking Personalizzato</h3>
                <p>Realizzazione completa di piattaforma di booking custom in React per struttura ricettiva di lusso.</p>
                <p className="text-gradient" style={{ marginTop: '1rem', fontWeight: 'bold' }}>Risultato: Automazione delle prenotazioni e maggiore conversione diretta.</p>
              </div>
              <div style={{width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--glass-border)'}}>
                <ProjectGallery images={["/palazzodana-1.webp", "/palazzodana-2.webp", "/palazzodana-3.webp", "/palazzodana-4.webp"]} title="Palazzo Dana" layout="dual" openLightbox={openLightbox} />
              </div>
            </GlassCard>
            
            <GlassCard className="portfolio-item">
              <div style={{width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--glass-border)'}}>
                <ProjectGallery images={["/danubia-1.webp", "/danubia-2.webp", "/danubia-3.webp", "/danubia-4.webp"]} title="Danubia Macario" openLightbox={openLightbox} />
              </div>
              <div className="portfolio-info">
                <h3>Danubia Macario – Piattaforma Bilingue</h3>
                <p>Sito WordPress professionale ottimizzato per caricamenti rapidi e con navigazione multilingua IT/PT-BR.</p>
                <p className="text-gradient" style={{ marginTop: '1rem', fontWeight: 'bold' }}>Risultato: Ottimizzazione per mercato internazionale.</p>
              </div>
            </GlassCard>
            
            <GlassCard className="portfolio-item">
              <div className="portfolio-info">
                <h3>Alessandra Marascio – Prenotazioni Online</h3>
                <p>Sito web per psicologa con integrazione di sistema Latepoint Booking per semplificare gli appuntamenti.</p>
                <p className="text-gradient" style={{ marginTop: '1rem', fontWeight: 'bold' }}>Risultato: UX fluida e aumento dei contatti tramite form integrato.</p>
              </div>
              <div style={{width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--glass-border)'}}>
                <ProjectGallery images={["/alessandra-1.webp", "/alessandra-2.webp"]} title="Alessandra Marascio" openLightbox={openLightbox} />
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 6. OFFERTA */}
        <section className="home-section">
          <div className="offer-section">
            <h2>Vediamo se posso aiutarti</h2>
            <p>Se hai un'attività che potrebbe ottenere molto di più dal proprio sito web, ti propongo una call gratuita di 30 minuti per capire cosa funziona e cosa no. Senza alcun impegno.</p>
            <button className="primary-btn" onClick={scrollToForm}>
              Richiedi una call gratuita <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="home-section">
          <h2 className="section-title">Domande Frequenti</h2>
          <div className="faq-grid">
            <GlassCard className="faq-item">
              <h3>Quanto costa un sito?</h3>
              <p>Il costo varia in base alle funzionalità richieste (landing page singola, sito multi-pagina, integrazioni). Dopo una breve call conoscitiva, ti fornirò un preventivo preciso e trasparente al 100%.</p>
            </GlassCard>
            <GlassCard className="faq-item">
              <h3>In quanto tempo si può essere online?</h3>
              <p>Per una landing page orientata alla lead generation solitamente impiego dalle 2 alle 3 settimane dal momento in cui ho tutti i materiali (testi, loghi). Per siti più complessi i tempi possono variare.</p>
            </GlassCard>
            <GlassCard className="faq-item">
              <h3>Posso aggiornare da solo i contenuti?</h3>
              <p>Certamente. Fornisco sempre una soluzione su misura che ti permette di modificare testi, immagini e aggiungere articoli al blog in totale autonomia, senza dover toccare il codice.</p>
            </GlassCard>
            <GlassCard className="faq-item">
              <h3>Lavori solo con chi è vicino a te?</h3>
              <p>No, lavoro al 100% da remoto con clienti in tutta Italia e all'estero. Gestiamo tutto tramite video-call, email e strumenti condivisi in modo rapido ed efficiente.</p>
            </GlassCard>
          </div>
        </section>

        {/* 8. FORM & WHATSAPP */}
        <section className="home-section final-form-section" id="preventivo">
          <h2 className="section-title">Raccontami il tuo progetto</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            Compila il form qui sotto: ti rispondo entro 24 ore con qualche idea concreta e, se ha senso, una proposta di collaborazione.
          </p>
          
          <GlassCard className="home-form">
            <form action="https://formspree.io/f/xpqwdgoa" method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome / Azienda</label>
                <input type="text" id="name" name="name" required placeholder="Es. Mario Rossi" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Indirizzo Email</label>
                <input type="email" id="email" name="email" required placeholder="mario@email.it" />
              </div>

              <div className="form-group" ref={selectRef}>
                <label>Tipo di progetto</label>
                <div className="custom-select-container">
                  <div 
                    className={`custom-select-trigger ${subjectOpen ? 'open' : ''}`}
                    onClick={() => setSubjectOpen(!subjectOpen)}
                  >
                    {selectedSubject}
                    <ChevronDown size={16} className={`select-icon ${subjectOpen ? 'open' : ''}`} />
                  </div>
                  
                  <AnimatePresence>
                    {subjectOpen && (
                      <motion.ul 
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="custom-select-options glass-panel"
                      >
                        {options.map((opt, i) => (
                          <li 
                            key={i} 
                            onClick={() => { setSelectedSubject(opt); setSubjectOpen(false); }}
                            className={`custom-select-option ${selectedSubject === opt ? 'selected' : ''}`}
                          >
                            {opt}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  
                  <input type="hidden" name="projectType" value={selectedSubject} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Cosa vuoi ottenere?</label>
                <textarea id="message" name="message" rows="4" required placeholder="Descrivi brevemente la tua attività e i tuoi obiettivi..."></textarea>
              </div>

              <div className="form-submit-container">
                <button type="submit" className="primary-btn home-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Invio in corso...' : 'Richiedi il tuo preventivo'} <Send size={18} />
                </button>
                <span className="micro-copy">Nessun impegno. I tuoi dati non verranno condivisi.</span>
              </div>
            </form>
          </GlassCard>

          <div className="whatsapp-alt">
            <p>Preferisci scrivermi direttamente su WhatsApp?</p>
            <a href="https://wa.me/393519989647?text=Ciao%20Elton%2C%20vorrei%20avere%20maggiori%20informazioni%20sui%20tuoi%20servizi." target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <MessageCircle size={20} /> Scrivimi su WhatsApp
            </a>
          </div>
        </section>

      </div>

      <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
    </PageTransition>
  );
};

export default Home;
