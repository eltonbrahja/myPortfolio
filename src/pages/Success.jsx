import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, FileText } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import './Success.css';

const Success = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="success-container">
        <div className="success-content">
          <div className="success-icon-wrapper">
            <CheckCircle className="success-icon" size={80} strokeWidth={1.5} />
          </div>
          
          <h1 className="success-title">
            {t('success.title1')}
            <span className="text-gradient">{t('success.title2')}</span>
          </h1>
          
          <p className="success-desc">
            {t('success.desc')}
          </p>

          <div className="success-actions">
            <Link to="/" className="btn-primary">
              <Home size={18} /> {t('success.btnHome')}
            </Link>
            <Link to="/blog" className="btn-secondary">
              <FileText size={18} /> {t('success.btnBlog')}
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Success;
