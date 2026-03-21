import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ArrowRight, ChevronDown, TrendingUp, Target, Code2 } from 'lucide-react';
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
              <span className="text-gradient shimmer">risultati digitali concreti.</span>
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
              <h2 className="value-title">Il tuo business merita molto più di una semplice vetrina.</h2>
              <p className="value-subtitle">
                Oggi l'attenzione degli utenti dura pochissimi secondi. Un sito lento o dal design improvvisato 
                ti fa perdere clienti prima ancora che conoscano i tuoi servizi. Costruisco per te 
                una presenza digitale premium che valorizza il tuo brand.
              </p>
            </motion.div>
            
            <div className="value-grid">
              {[
                {
                  icon: <TrendingUp size={32} strokeWidth={1.2} />,
                  title: "Più Contatti, Più Vendite",
                  desc: "Un sito web moderno non è una spesa, ma il tuo miglior commerciale attivo 24/7. Progetto percorsi utente (UX) studiati per guidare il visitatore verso l'azione, convertendo così il traffico in risultati economici misurabili.",
                  color: "blue"
                },
                {
                  icon: <Target size={32} strokeWidth={1.2} />,
                  title: "Posizionamento Strategico",
                  desc: "Ti aiuto ad emergere sulla concorrenza con un'identità digitale autorevole. Un design curato al millimetro aumenta istantaneamente la percezione e il valore dei servizi offerti dal tuo brand.",
                  color: "purple"
                },
                {
                  icon: <Code2 size={32} strokeWidth={1.2} />,
                  title: "Tecnologia su Misura",
                  desc: "Dimentica le piattaforme lente e vulnerabili (come i vecchi temi WordPress non ottimizzati). Sviluppo architetture web robuste, amate dai motori di ricerca (SEO) e capaci di caricare in una frazione di secondo.",
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="value-cta-wrapper"
            >
              <Link to="/contact" className="btn btn-primary hero-btn">
                Inizia il tuo Progetto <ArrowRight size={18} strokeWidth={1.5} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline hero-btn-outline">
                Guarda i miei lavori
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Home;
