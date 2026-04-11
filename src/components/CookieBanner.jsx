import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const CookieBanner = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    it: {
      text: "Utilizziamo i cookie per migliorare la tua esperienza e per analizzare il traffico del sito. Cliccando su 'Accetta tutto', acconsenti all'uso dei cookie.",
      accept: "Accetta tutto",
      decline: "Rifiuta"
    },
    en: {
      text: "We use cookies to improve your experience and analyze site traffic. By clicking 'Accept All', you consent to our use of cookies.",
      accept: "Accept All",
      decline: "Decline"
    }
  };

  const currentContent = content[language] || content.it;

  return (
    <div className="cookie-banner glass-panel">
      <div className="cookie-content">
        <p>{currentContent.text}</p>
        <div className="cookie-buttons">
          <button className="cookie-btn decline" onClick={handleDecline}>
            {currentContent.decline}
          </button>
          <button className="cookie-btn accept" onClick={handleAccept}>
            {currentContent.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
