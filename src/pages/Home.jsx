import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './Home.css';

const Home = () => {
  return (
    <PageTransition className="home-wrapper">
      <section className="hero-section">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/poster.jpg" 
          className="hero-video"
        >
          <source src="/video-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Sviluppo Web & Digital Solutions
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-title"
          >
            Trasformo la tua visione in <br className="hidden md:block" />
            <span className="text-gradient">risultati digitali concreti</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-description"
          >
            Sono <strong>Elton</strong>. Unisco il rigore del metodo scientifico alle tecnologie web più recenti. 
            Non creo semplici siti vetrina, ma piattaforme veloci e moderne progettate per far crescere la tua attività.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-actions"
          >
            <Link to="/contact" className="btn btn-primary">
              Parliamo del tuo Progetto
            </Link>
            <Link to="/portfolio" className="btn btn-outline glass-button">
              Guarda i miei lavori
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
