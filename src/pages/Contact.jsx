import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import './Contact.css';

const Contact = () => {
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Sviluppo Nuovo Sito");
  const selectRef = useRef(null);

  const subjectOptions = [
    "Sviluppo Nuovo Sito",
    "Restyling / Ottimizzazione",
    "Consulenza Tecnica",
    "Altro"
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setSubjectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <PageTransition>
      <div className="contact-container">
        
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Canali di Comunicazione</span>
            <h2 className="section-title">
              Iniziamo una <br />
              <span className="text-gradient">collaborazione</span>.
            </h2>
            <p className="contact-desc">
              Hai un progetto o un'idea che richiede precisione tecnica? 
              Compila il form o usa i canali diretti. Risposta rapida entro 24-48 ore.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon text-blue"><Mail size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:elton.brahja.s@gmail.com">elton.brahja.s@gmail.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon text-green"><Phone size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4>Telefono</h4>
                  <a href="tel:+393519989647">+39 351 998 9647</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon text-purple"><MapPin size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4>Sede Operativa</h4>
                  <p>Santeramo in colle (BA), Italia</p>
                </div>
              </div>
            </div>
          </div>

          <GlassCard className="contact-form-card">
            <form action="https://formspree.io/f/xpqwdgoa" method="POST" className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" required placeholder="Il tuo nome" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="latua@email.com" />
                </div>
              </div>

              <div className="form-group" ref={selectRef}>
                <label>Oggetto</label>
                <div className="custom-select-container">
                  <div 
                    className={`custom-select-trigger ${subjectOpen ? 'open' : ''}`}
                    onClick={() => setSubjectOpen(!subjectOpen)}
                  >
                    {selectedSubject}
                    <ChevronDown size={16} className={`select-icon ${subjectOpen ? 'open' : ''}`} />
                  </div>
                  
                  <AnimatePresence>
                    {subjectOpen && (
                      <motion.ul 
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="custom-select-options glass-panel"
                      >
                        {subjectOptions.map((opt, i) => (
                          <li 
                            key={i} 
                            onClick={() => { setSelectedSubject(opt); setSubjectOpen(false); }}
                            className={`custom-select-option ${selectedSubject === opt ? 'selected' : ''}`}
                          >
                            {opt}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  
                  {/* Hidden input to ensure Formspree gets the value */}
                  <input type="hidden" name="subject" value={selectedSubject} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Dettagli Progetto</label>
                <textarea id="message" name="message" rows="5" required placeholder="Descrivi brevemente di cosa hai bisogno..."></textarea>
              </div>

              <button type="submit" className="submit-btn" style={{marginTop: '16px'}}>
                Invia Richiesta <Send size={18} strokeWidth={1.5} />
              </button>
            </form>
          </GlassCard>
        </div>

      </div>
    </PageTransition>
  );
};

export default Contact;
