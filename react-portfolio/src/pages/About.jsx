import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './About.css';

const About = () => {
  return (
    <PageTransition>
      <div className="about-container">
        
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="about-image-wrapper"
          >
            <div className="about-image-card">
              <img src="/foto-profilo.webp" alt="Elton Brahja" className="about-image" />
              <div className="about-status-badge">
                <span className="status-dot"></span>
                <span>Disponibile per nuovi progetti</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-content"
          >
            <span className="section-label">Chi Sono</span>
            <h2 className="section-title">
              Un approccio <span className="text-gradient">scientifico</span> <br/> 
              al tuo successo digitale.
            </h2>
            
            <div className="about-text">
              <p>
                La passione per l'informatica è il mio motore, la competenza tecnica è il mio carburante. 
                Diplomato in <strong>Scienze Applicate</strong> e studente di <strong>Informatica all'Università di Bari</strong>, non mi limito a "fare siti".
              </p>
              <p>
                Porto nel tuo progetto il <strong>rigore analitico</strong> necessario per costruire piattaforme solide. 
                Mentre il web si evolve, il mio percorso di studi mi permette di distinguere le mode passeggere dalle tecnologie che portano valore reale al tuo business.
              </p>
            </div>
            
            <div className="about-quote">
              <p>"Il tuo sito non deve solo esistere, deve performare."</p>
              <span>— Elton Brahja</span>
            </div>
          </motion.div>
        </div>
        
      </div>
    </PageTransition>
  );
};

export default About;
