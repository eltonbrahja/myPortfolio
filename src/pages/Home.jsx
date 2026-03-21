import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <PageTransition>
      <div className="home-wrapper">
        <section className="hero-section">
          {/* Ambient Glowing Orb for Text Readability */}
          <div className="hero-glow"></div>
          
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/video-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="availability-badge"
            >
              <div className="pulse-dot"></div>
              Disponibile per nuovi progetti
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title"
            >
              Trasformo la tua visione in <br />
              <span className="text-gradient shimmer">risultati digitali concreti.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hero-description"
            >
              Oggi le aziende che non hanno un sito moderno perdono clienti e visibilità. 
              Sviluppo soluzioni web performanti e su misura per catturare la 
              tua audience, comunicare valore e far crescere concretamente il tuo business.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-actions"
            >
              <Link to="/contact" className="btn btn-primary hero-btn">
                Parliamo del tuo Progetto <ArrowRight size={18} strokeWidth={2} />
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
