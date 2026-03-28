// src/pages/Privacy.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import './Privacy.css';

const Privacy = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = `${t('privacy.title1')}${t('privacy.title2').replace('<br/>', '')} | Elton Brahja`;
    window.scrollTo(0, 0);
  }, [t]);

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
            <span className="section-label">{t('privacy.label')}</span>
            <h1 className="privacy-title">{t('privacy.title1')} <span className="text-gradient">{t('privacy.title2')}</span></h1>
            <p className="privacy-intro">{t('privacy.lastUpdate')}</p>
          </div>

          <div className="article-body">
            {t('privacy.sections').map((section, idx) => (
              <section key={idx}>
                <h2>{section.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Privacy;
