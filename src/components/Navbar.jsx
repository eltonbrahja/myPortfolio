import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { localizePath, t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

            <NavLink to={localizePath('/services')} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.services').toUpperCase()}</NavLink>
            <NavLink to={localizePath('/portfolio')} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.portfolio').toUpperCase()}</NavLink>
            <NavLink to={localizePath('/blog')} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('navbar.blog').toUpperCase()}</NavLink>
          </div>

          <div className="navbar-actions">
            <LanguageSwitcher />
            <Link to={localizePath('/') + '#preventivo'} className="nav-cta-btn">{t('navbar.contact').toUpperCase()}</Link>
            
            <button 
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
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

            <NavLink to={localizePath('/services')} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.services')}</NavLink>
            <NavLink to={localizePath('/portfolio')} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.portfolio')}</NavLink>
            <NavLink to={localizePath('/blog')} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">{t('navbar.blog')}</NavLink>
            <Link to={localizePath('/') + '#preventivo'} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link text-accent">{t('navbar.contact')}</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
