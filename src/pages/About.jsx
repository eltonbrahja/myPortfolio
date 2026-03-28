import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
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
                <span>{t('about.statusBadge')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-content"
          >
            <span className="section-label">{t('about.label')}</span>
            <h2 className="section-title">
              {t('about.title1')} <span className="text-gradient">{t('about.titleDesc')}</span> <br/> 
              {t('about.title2')}
            </h2>
            
            <div className="about-text">
              <p dangerouslySetInnerHTML={{ __html: t('about.p1') }}></p>
              <p dangerouslySetInnerHTML={{ __html: t('about.p2') }}></p>
            </div>
            
            <div className="about-quote">
              <p>{t('about.quote')}</p>
              <span>— Elton Brahja</span>
            </div>
          </motion.div>
        </div>
        
      </div>
    </PageTransition>
  );
};

export default About;
