import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, changeLanguage, t } = useLanguage();

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
          <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
            ELTON<span>BRAHJA</span>
          </Link>

          <div className="navbar-desktop-links">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.home').toUpperCase()}</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.about') || "CHI SONO"}</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.services').toUpperCase()}</NavLink>
            <NavLink to="/portfolio" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.portfolio').toUpperCase()}</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.blog').toUpperCase()}</NavLink>
          </div>

          <div className="navbar-actions">
            <div className="lang-switcher">
              <button 
                className={`lang-btn ${language === 'it' ? 'active' : ''}`}
                onClick={() => changeLanguage('it')}
              >IT</button>
              <span className="lang-divider">|</span>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >EN</button>
            </div>
            <Link to="/contact" className="nav-cta-btn">{t('navbar.contact').toUpperCase()}</Link>
            
            <button 
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.home')}</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.about') || "Chi Sono"}</NavLink>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.services')}</NavLink>
            <NavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.portfolio')}</NavLink>
            <NavLink to="/blog" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.blog')}</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link text-accent">{t('navbar.contact')}</NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
