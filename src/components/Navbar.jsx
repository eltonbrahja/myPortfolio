import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, changeLanguage, localizePath, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <Link to={localizePath('/')} className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
            ELTON<span>BRAHJA</span>
          </Link>

          <div className="navbar-desktop-links">
            <NavLink to={localizePath('/')} end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.home').toUpperCase()}</NavLink>
            <NavLink to={localizePath('/about')} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.about') || "CHI SONO"}</NavLink>
            <NavLink to={localizePath('/services')} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.services').toUpperCase()}</NavLink>
            <NavLink to={localizePath('/portfolio')} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.portfolio').toUpperCase()}</NavLink>
            <NavLink to={localizePath('/blog')} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.blog').toUpperCase()}</NavLink>
          </div>

          <div className="navbar-actions">
            <div className="lang-switcher" aria-label="Cambio Lingua / Language Switch">
              <button 
                className={`lang-btn ${language === 'it' ? 'active' : ''}`}
                onClick={() => {
                  let p = location.pathname;
                  if (p.startsWith('/en')) {
                    p = p.substring(3);
                    if (p === '') p = '/';
                  }
                  navigate(p);
                }}
                aria-label="Imposta lingua Italiana"
              >IT</button>
              <span className="lang-divider" aria-hidden="true">|</span>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => {
                  let p = location.pathname;
                  if (!p.startsWith('/en')) {
                    p = `/en${p === '/' ? '' : p}`;
                  }
                  navigate(p);
                }}
                aria-label="Set English language"
              >EN</button>
            </div>
            <Link to={localizePath('/contact')} className="nav-cta-btn">{t('navbar.contact').toUpperCase()}</Link>
            
            <button 
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="mobile-nav-links">
            <NavLink to={localizePath('/')} end onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.home')}</NavLink>
            <NavLink to={localizePath('/about')} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.about') || "Chi Sono"}</NavLink>
            <NavLink to={localizePath('/services')} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.services')}</NavLink>
            <NavLink to={localizePath('/portfolio')} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.portfolio')}</NavLink>
            <NavLink to={localizePath('/blog')} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.blog')}</NavLink>
            <NavLink to={localizePath('/contact')} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link text-accent">{t('navbar.contact')}</NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
