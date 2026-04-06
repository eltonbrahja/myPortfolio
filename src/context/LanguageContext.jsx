import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../locales/translations';

const LanguageContext = createContext();

// Derive initial language from the current URL path
const getInitialLanguage = () => {
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/en')) {
    return 'en';
  }
  const saved = localStorage.getItem('language');
  return saved ? saved : 'it';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const localizePath = (path, lang = language) => {
    if (lang === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    
    for (const k of keys) {
      if (result === undefined) return key;
      result = result[k];
    }
    
    return result || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, localizePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
