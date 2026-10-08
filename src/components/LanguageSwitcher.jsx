import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const ItalyFlag = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="lang-flag-svg"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="it-flag-clip">
        <rect width="16" height="12" rx="2" />
      </clipPath>
    </defs>
    <g clipPath="url(#it-flag-clip)">
      <rect width="5.33" height="12" fill="#009246" />
      <rect x="5.33" width="5.34" height="12" fill="#FFFFFF" />
      <rect x="10.67" width="5.33" height="12" fill="#CE2B37" />
    </g>
    <rect width="16" height="12" rx="2" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" fill="none" />
  </svg>
);

const UKFlag = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="lang-flag-svg"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="uk-flag-clip">
        <rect width="16" height="12" rx="2" />
      </clipPath>
    </defs>
    <g clipPath="url(#uk-flag-clip)">
      <rect width="16" height="12" fill="#012169" />
      {/* Saltires (white diagonals) */}
      <path d="M0 0 L16 12 M16 0 L0 12" stroke="#FFFFFF" strokeWidth="2.4" />
      {/* Saltires (red diagonals) */}
      <path d="M0 0 L16 12 M16 0 L0 12" stroke="#C8102E" strokeWidth="1.2" />
      {/* Cross of St George (white) */}
      <path d="M8 0 V12 M0 6 H16" stroke="#FFFFFF" strokeWidth="3.4" />
      {/* Cross of St George (red) */}
      <path d="M8 0 V12 M0 6 H16" stroke="#C8102E" strokeWidth="2" />
    </g>
    <rect width="16" height="12" rx="2" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" fill="none" />
  </svg>
);

const USAFlag = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="lang-flag-svg"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="usa-flag-clip">
        <rect width="16" height="12" rx="2" />
      </clipPath>
    </defs>
    <g clipPath="url(#usa-flag-clip)">
      {/* Red stripes base */}
      <rect width="16" height="12" fill="#B22234" />
      {/* White alternating stripes */}
      <rect y="1.8" width="16" height="1.8" fill="#FFFFFF" />
      <rect y="5.4" width="16" height="1.8" fill="#FFFFFF" />
      <rect y="9.0" width="16" height="1.8" fill="#FFFFFF" />
      {/* Blue canton */}
      <rect width="7.2" height="6.6" fill="#3C3B6E" />
      {/* Stylized stars dots */}
      <circle cx="1.8" cy="1.8" r="0.6" fill="#FFFFFF" />
      <circle cx="3.6" cy="1.8" r="0.6" fill="#FFFFFF" />
      <circle cx="5.4" cy="1.8" r="0.6" fill="#FFFFFF" />
      <circle cx="2.7" cy="3.3" r="0.6" fill="#FFFFFF" />
      <circle cx="4.5" cy="3.3" r="0.6" fill="#FFFFFF" />
      <circle cx="1.8" cy="4.8" r="0.6" fill="#FFFFFF" />
      <circle cx="3.6" cy="4.8" r="0.6" fill="#FFFFFF" />
      <circle cx="5.4" cy="4.8" r="0.6" fill="#FFFFFF" />
    </g>
    <rect width="16" height="12" rx="2" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" fill="none" />
  </svg>
);

const LanguageSwitcher = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectLang = (targetLang) => {
    if (targetLang === language) return;
    let p = location.pathname;
    if (targetLang === 'it') {
      if (p.startsWith('/en')) {
        p = p.substring(3);
        if (p === '') p = '/';
      }
    } else if (targetLang === 'en') {
      if (!p.startsWith('/en')) {
        p = `/en${p === '/' ? '' : p}`;
      }
    }
    navigate(p);
  };

  return (
    <Motion.div 
      className="lang-switcher" 
      layout
      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      aria-label="Cambio Lingua / Language Switch"
    >
      {/* Pulsante IT */}
      <button
        type="button"
        className={`lang-btn ${language === 'it' ? 'active' : ''}`}
        onClick={() => handleSelectLang('it')}
        aria-label="Imposta lingua Italiana"
        aria-pressed={language === 'it'}
      >
        {language === 'it' && (
          <Motion.div
            layoutId="activeLangIndicator"
            className="lang-active-pill"
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
          />
        )}
        <span className="lang-label">IT</span>

        <AnimatePresence mode="wait">
          {language === 'it' && (
            <Motion.span
              key="it-flag"
              className="lang-flag-container"
              initial={{ opacity: 0, scale: 0.3, width: 0 }}
              animate={{ opacity: 1, scale: 1, width: 'auto' }}
              exit={{ opacity: 0, scale: 0.3, width: 0 }}
              transition={{ type: 'spring', stiffness: 480, damping: 26 }}
            >
              <Motion.span
                className="flag-item"
                initial={{ rotate: -10, y: 2 }}
                animate={{ rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <ItalyFlag />
              </Motion.span>
            </Motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Pulsante EN */}
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleSelectLang('en')}
        aria-label="Set English language"
        aria-pressed={language === 'en'}
      >
        {language === 'en' && (
          <Motion.div
            layoutId="activeLangIndicator"
            className="lang-active-pill"
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
          />
        )}
        <span className="lang-label">EN</span>

        <AnimatePresence mode="wait">
          {language === 'en' && (
            <Motion.span
              key="en-flags"
              className="lang-flag-container"
              initial={{ opacity: 0, scale: 0.3, width: 0 }}
              animate={{ opacity: 1, scale: 1, width: 'auto' }}
              exit={{ opacity: 0, scale: 0.3, width: 0 }}
              transition={{ type: 'spring', stiffness: 480, damping: 26 }}
            >
              <div className="dual-flags-wrapper">
                <Motion.span
                  className="flag-item"
                  initial={{ opacity: 0, scale: 0.4, x: -4, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                  transition={{ delay: 0.04, type: 'spring', stiffness: 450, damping: 24 }}
                  title="English (UK)"
                >
                  <UKFlag />
                </Motion.span>
                <Motion.span
                  className="flag-item"
                  initial={{ opacity: 0, scale: 0.4, x: -4, rotate: 8 }}
                  animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                  transition={{ delay: 0.09, type: 'spring', stiffness: 450, damping: 24 }}
                  title="English (US)"
                >
                  <USAFlag />
                </Motion.span>
              </div>
            </Motion.span>
          )}
        </AnimatePresence>
      </button>
    </Motion.div>
  );
};

export default LanguageSwitcher;
