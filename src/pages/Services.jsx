import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const servicesList = [
    {
      icon: <Code2 size={32} strokeWidth={1.2} className="service-icon text-blue" />,
      title: "Sviluppo Full-Code",
      description: "Niente costruttori automatici pesanti. Scrivo codice HTML5 e CSS semantico per garantire un sito leggero e personalizzabile.",
      features: ["Architettura pulita", "Zero dipendenze inutili", "Manutenzione Codice"]
    },
    {
      icon: <MonitorPlay size={32} strokeWidth={1.2} className="service-icon text-purple" />,
      title: "UI/UX & Identity",
      description: "L'occhio vuole la sua parte. Studio l'identità visiva del tuo brand per trasmettere professionalità al primo sguardo.",
      features: ["Analisi Palette & Tipografia", "Elaborazione Asset Digitali", "Design System coerente"]
    },
    {
      icon: <Zap size={32} strokeWidth={1.2} className="service-icon text-green" />,
      title: "Audit & Performance",
      description: "Ottimizzazione matematica delle risorse. Analizzo e correggo i colli di bottiglia per garantire punteggi elevati su Google Lighthouse.",
      features: ["Caricamento istantaneo", "Ottimizzazione Mobile", "SEO Impeccabile"]
    }
  ];

  return (
    <PageTransition>
      <div className="services-container">
        
        <div className="services-header">
          <span className="section-label">Competenze Tecniche</span>
          <h2 className="section-title">
            Logica e <span className="text-gradient">Creatività</span>.
          </h2>
          <p className="services-intro">
            Unisco il rigore dello sviluppo software alla sensibilità estetica. 
            Perché un sito veloce deve essere anche bello da vedere.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="services-grid"
        >
          {servicesList.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="service-card-wrapper">
              <GlassCard className="service-card" hoverable>
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </PageTransition>
  );
};

export default Services;
