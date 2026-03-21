import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import './Contact.css';

const Contact = () => {
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
              Hai un progetto complesso o un'idea che richiede precisione tecnica? 
              Compila il form o usa i canali diretti. Risposta entro 48 ore.
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

              <div className="form-group">
                <label htmlFor="subject">Oggetto</label>
                <div className="select-wrapper">
                  <select id="subject" name="subject">
                    <option value="Sviluppo Web">Sviluppo Nuovo Sito</option>
                    <option value="Restyling">Restyling / Ottimizzazione</option>
                    <option value="Consulenza">Consulenza Tecnica</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Dettagli Progetto</label>
                <textarea id="message" name="message" rows="5" required placeholder="Descrivi brevemente di cosa hai bisogno..."></textarea>
              </div>

              <button type="submit" className="submit-btn">
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
