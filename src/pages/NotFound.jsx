import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import { Home } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  const { t, localizePath } = useLanguage();

  return (
    <PageTransition>
      <div className="not-found-wrapper">
        <div className="not-found-glow"></div>
        
        <div className="not-found-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="not-found-content"
          >
            <div className="not-found-404">
              <span className="text-gradient">404</span>
            </div>
            
            <h1 className="not-found-title">
              {t('notFound.title1')}
              <span className="text-gradient shimmer">{t('notFound.title2')}</span>
            </h1>
            
            <p className="not-found-desc">
              {t('notFound.desc')}
            </p>
            
            <Link to={localizePath('/')} className="btn-apple-primary not-found-btn">
              <Home size={18} strokeWidth={2} />
              {t('notFound.backBtn')}
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
