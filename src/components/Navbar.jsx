import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>CHI SONO</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>SERVIZI</NavLink>
            <NavLink to="/portfolio" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>PORTFOLIO</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>BLOG</NavLink>
          </div>

          <div className="navbar-actions">
            <Link to="/contact" className="nav-cta-btn">CONTATTI</Link>
            
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
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Home</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Chi Sono</NavLink>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Servizi</NavLink>
            <NavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Portfolio</NavLink>
            <NavLink to="/blog" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Blog</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link text-accent">Contatti</NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
