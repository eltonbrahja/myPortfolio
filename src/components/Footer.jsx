import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language, t, localizePath } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="footer-logo">
              ELTON<span>BRAHJA</span>
            </div>
            <p className="footer-description">
              {t('footer.tagline')}
            </p>
            <div className="footer-socials">
              <a href="https://github.com/eltonbrahja" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Profilo GitHub">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/elton-brahja-7b90963a1/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Profilo LinkedIn">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://instagram.com/elton.brahja" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Profilo Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="footer-links-col">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to={localizePath('/')}>{t('footer.home')}</Link></li>
              <li><Link to={localizePath('/about')}>{t('navbar.about') || "Chi Sono"}</Link></li>
              <li><Link to={localizePath('/services')}>{t('footer.services')}</Link></li>
              <li><Link to={localizePath('/portfolio')}>{t('footer.portfolio')}</Link></li>
              <li><Link to={localizePath('/blog')}>{t('navbar.blog') || "Blog"}</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footer.contacts')}</h4>
            <ul>
              <li>
                <a href="mailto:elton.brahja.s@gmail.com" className="email-link">
                  <Mail size={18} strokeWidth={1.5} /> elton.brahja.s@gmail.com
                </a>
              </li>
              <li>{language === 'it' ? 'Santeramo in colle (BA), Italia' : 'Santeramo in colle (BA), Italy'}</li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elton Brahja. Code is Art. {t('footer.rights')}</p>
          <div className="footer-bottom-links">
            <Link to={localizePath('/privacy')}>{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
