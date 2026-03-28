import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const options = t('contact.form.options');
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(options[0]);
  const selectRef = useRef(null);
  
  // Aggiorna l'opzione selezionata quando cambia lingua se è l'effettivo default
  useEffect(() => {
    setSelectedSubject(options[0]);
  }, [options]);

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
            <span className="section-label">{t('contact.label')}</span>
            <h2 className="section-title">
              {t('contact.title1')} <br />
              <span className="text-gradient">{t('contact.title2')}</span>.
            </h2>
            <p className="contact-desc">
              {t('contact.desc')}
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon text-blue"><Mail size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4>{t('contact.emailLabel')}</h4>
                  <a href="mailto:elton.brahja.s@gmail.com">elton.brahja.s@gmail.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon text-green"><Phone size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4>{t('contact.phoneLabel')}</h4>
                  <a href="tel:+393519989647">+39 351 998 9647</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon text-purple"><MapPin size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4>{t('contact.locationLabel')}</h4>
                  <p>{t('contact.locationDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <GlassCard className="contact-form-card">
            <form action="https://formspree.io/f/xpqwdgoa" method="POST" className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input type="text" id="name" name="name" required placeholder={t('contact.form.namePlace')} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input type="email" id="email" name="email" required placeholder={t('contact.form.emailPlace')} />
                </div>
              </div>

              <div className="form-group" ref={selectRef}>
                <label>{t('contact.form.subject')}</label>
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
                        {options.map((opt, i) => (
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
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea id="message" name="message" rows="5" required placeholder={t('contact.form.messagePlace')}></textarea>
              </div>

              <button type="submit" className="submit-btn" style={{marginTop: '16px'}}>
                {t('contact.form.submit')} <Send size={18} strokeWidth={1.5} />
              </button>
            </form>
          </GlassCard>
        </div>

      </div>
    </PageTransition>
  );
};

export default Contact;
