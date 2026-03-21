import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="footer-logo">
              ELTON<span>BRAHJA</span>
            </div>
            <p className="footer-description">
              Sviluppatore Web & UI Designer. Unisco il rigore analitico alle tecnologie web più recenti per creare piattaforme veloci e moderne.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/eltonbrahja" target="_blank" rel="noreferrer" className="social-icon">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/elton-brahja-7b90963a1/" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://instagram.com/elton.brahja" target="_blank" rel="noreferrer" className="social-icon instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="footer-links-col">
            <h4>Navigazione</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Chi Sono</Link></li>
              <li><Link to="/services">Servizi</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Contatti</h4>
            <ul>
              <li>
                <a href="mailto:elton.brahja.s@gmail.com" className="email-link">
                  <Mail size={18} strokeWidth={1.5} /> elton.brahja.s@gmail.com
                </a>
              </li>
              <li>Santeramo in colle (BA), Italia</li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elton Brahja. Code is Art.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
