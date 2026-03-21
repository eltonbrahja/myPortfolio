import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Rocket, FolderOpen, ChevronDown, TrendingUp, Target, Code2 } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <PageTransition>
      <div className="home-wrapper">
        
        {/* HERO SECTION */}
        <section className="hero-section">
          {/* Ambient Glowing Orb for Text Readability */}
          <div className="hero-glow"></div>
          
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/video-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title"
            >
              Trasformo la tua visione in <br />
              <span className="text-gradient shimmer">risultati digitali misurabili.</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="scroll-indicator"
          >
            <span className="scroll-text">Scorri per scoprire</span>
            <ChevronDown size={20} strokeWidth={1.5} className="scroll-icon" />
          </motion.div>
        </section>

        {/* VALUE PROPOSITION SECTION */}
        <section className="value-prop-section">
          <div className="value-prop-container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="value-prop-header"
            >
              <h2 className="value-title">Il tuo business merita una presenza online capace di generare fiducia, contatti e vendite, non una semplice vetrina.</h2>
              <p className="value-subtitle">
                Oggi l’attenzione online dura pochi secondi. Un sito lento, confuso o poco curato fa scappare i potenziali clienti prima ancora che conoscano i tuoi servizi. Per questo sviluppo esperienze web veloci, eleganti e strategiche, progettate per valorizzare il tuo brand e trasformare i visitatori in clienti reali.
              </p>
            </motion.div>
            
            <div className="value-grid">
              {[
                {
                  icon: <TrendingUp size={32} strokeWidth={1.2} />,
                  title: "Più contatti, più risultati",
                  desc: "Un sito web moderno non è una spesa: è il tuo miglior commerciale, operativo 24 ore su 24. Attraverso percorsi utente (UX) progettati con criterio e strumenti analitici mirati, guido ogni visita verso l’azione concreta — che si tratti di una richiesta, un acquisto o una prenotazione.",
                  color: "blue"
                },
                {
                  icon: <Target size={32} strokeWidth={1.2} />,
                  title: "Posizionamento strategico e brand identity",
                  desc: "Ti aiuto a emergere nella tua nicchia con un’identità digitale riconoscibile e autorevole. Un design curato nei dettagli comunica valore, credibilità e professionalità fin dal primo sguardo — la base per distinguerti dalla concorrenza.",
                  color: "purple"
                },
                {
                  icon: <Code2 size={32} strokeWidth={1.2} />,
                  title: "Tecnologia su misura per performance reali",
                  desc: "Addio a piattaforme lente o piene di limiti. Sviluppo soluzioni personalizzate, sicure e ottimizzate SEO, pensate per caricare in una frazione di secondo e scalare nel tempo insieme al tuo business.",
                  color: "green"
                }
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="value-card"
                >
                  <div className={`value-icon-wrapper text-${val.color}`}>
                    {val.icon}
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="value-closing-text"
            >
              <p>Che si tratti di un brand in crescita, uno studio professionale o un’attività locale, realizzo siti web che portano risultati concreti, non solo visite.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="value-cta-wrapper"
            >
              <Link to="/contact" className="btn btn-primary hero-btn">
                <Rocket size={18} strokeWidth={1.5} /> Inizia il tuo progetto
              </Link>
              <Link to="/portfolio" className="btn btn-outline hero-btn-outline">
                <FolderOpen size={18} strokeWidth={1.5} /> Guarda i miei lavori
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Home;
