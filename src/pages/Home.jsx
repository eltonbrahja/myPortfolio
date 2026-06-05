import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, ChevronDown, MessageCircle, Send, Star, UserPlus, Building2, Store, LineChart, Shield, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { ProjectGallery, Lightbox } from '../components/ProjectGallery';
import './Home.css';

import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index) => {
    setLightbox({ images, index });
  };
  const options = t('home.contact.form.projectOptions') || [];
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectRef = useRef(null);
  
  // Calculate safe index during render (derived state)
  const safeSelectedIndex = selectedIndex >= options.length ? 0 : selectedIndex;
  const selectedSubject = options[safeSelectedIndex] || "";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setSubjectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToForm = () => {
    document.getElementById('preventivo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        navigate('/success');
      } else {
        alert(t('home.contact.form.error') || "Oops! C'è stato un problema durante l'invio.");
      }
    } catch (error) {
      alert(t('home.contact.form.error') || "Oops! C'è stato un problema durante l'invio.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="home-container">

        {/* 1. HERO */}
        <section className="home-section hero-home">
          <div className="hero-home-content">
            <span className="micro-headline">{t('home.hero.micro')}</span>
            <h1 className="hero-home-title">
              {t('home.hero.title1')} <span className="text-gradient shimmer">{t('home.hero.titleHighlight')}</span>{t('home.hero.title2')}
            </h1>
            <p className="hero-home-subtitle">
              {t('home.hero.subtitle')}
            </p>
            <div className="hero-actions">
              <div className="cta-group">
                <button className="primary-btn" onClick={scrollToForm}>
                  {t('home.hero.btn')} <ChevronRight size={20} />
                </button>
                <span className="micro-copy">{t('home.hero.noCommitment')}</span>
              </div>
              <ul className="trust-bullets">
                <li><CheckCircle2 size={14} /> {t('home.hero.bullets')[0]}</li>
                <li><CheckCircle2 size={14} /> {t('home.hero.bullets')[1]}</li>
                <li><CheckCircle2 size={14} /> {t('home.hero.bullets')[2]}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. PER CHI E' */}
        <section className="home-section">
          <h2 className="section-title">{t('home.target.title')}</h2>
          <div className="cards-grid">
            <GlassCard className="home-card">
              <UserPlus size={32} className="text-blue" strokeWidth={1.5} />
              <h3>{t('home.target.cards')[0].title}</h3>
              <p>{t('home.target.cards')[0].desc}</p>
            </GlassCard>
            <GlassCard className="home-card">
              <Building2 size={32} className="text-purple" strokeWidth={1.5} />
              <h3>{t('home.target.cards')[1].title}</h3>
              <p>{t('home.target.cards')[1].desc}</p>
            </GlassCard>
            <GlassCard className="home-card">
              <Store size={32} className="text-green" strokeWidth={1.5} />
              <h3>{t('home.target.cards')[2].title}</h3>
              <p>{t('home.target.cards')[2].desc}</p>
            </GlassCard>
          </div>
        </section>

        {/* 3. COSA OTTIENI */}
        <section className="home-section">
          <h2 className="section-title">{t('home.benefits.title')}</h2>
          <div className="cards-grid">
            <GlassCard className="home-card">
              <LineChart size={32} className="text-blue" strokeWidth={1.5} />
              <h3>{t('home.benefits.cards')[0].title}</h3>
              <ul>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[0].bullets[0]}</li>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[0].bullets[1]}</li>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[0].bullets[2]}</li>
              </ul>
            </GlassCard>
            <GlassCard className="home-card">
              <Shield size={32} className="text-purple" strokeWidth={1.5} />
              <h3>{t('home.benefits.cards')[1].title}</h3>
              <ul>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[1].bullets[0]}</li>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[1].bullets[1]}</li>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[1].bullets[2]}</li>
              </ul>
            </GlassCard>
            <GlassCard className="home-card">
              <Zap size={32} className="text-green" strokeWidth={1.5} />
              <h3>{t('home.benefits.cards')[2].title}</h3>
              <ul>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[2].bullets[0]}</li>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[2].bullets[1]}</li>
                <li><CheckCircle2 size={16} /> {t('home.benefits.cards')[2].bullets[2]}</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* 4. COME LAVORIAMO */}
        <section className="home-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('home.process.title')}
          </motion.h2>
          
          <div className="timeline">
            {/* Animated line */}
            <div className="timeline-line-bg">
              <motion.div 
                className="timeline-line-fill"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <div className="timeline-line-highlight" />
              </motion.div>
            </div>

            {t('home.process.steps').map((step, idx) => (
              <motion.div 
                key={idx}
                className="timeline-step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10%" }}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15, filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)" },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 + (idx * 0.6) }
                  }
                }}
              >
                <motion.div 
                  className="step-number"
                  variants={{
                    hidden: { scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      opacity: 1,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (idx * 0.6) }
                    }
                  }}
                >
                  <div className="step-glow" />
                  <span>{idx + 1}</span>
                </motion.div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. PORTFOLIO & SOCIAL PROOF */}
        <section className="home-section" id="portfolio">
          <h2 className="section-title">{t('home.portfolio.title')}</h2>
          <div className="portfolio-mini">
            <GlassCard className="portfolio-item">
              <div className="portfolio-info">
                <h3>{t('portfolio.projects')[0].title}</h3>
                <p>{t('portfolio.projects')[0].description}</p>
                <p className="text-gradient" style={{ marginTop: '1rem', fontWeight: 'bold' }}>{t('home.portfolio.results')[0]}</p>
              </div>
              <div style={{width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--glass-border)'}}>
                <ProjectGallery images={["/palazzodana-1.webp", "/palazzodana-2.webp", "/palazzodana-3.webp", "/palazzodana-4.webp"]} title="Palazzo Dana" layout="dual" openLightbox={openLightbox} />
              </div>
            </GlassCard>
            
            <GlassCard className="portfolio-item">
              <div style={{width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--glass-border)'}}>
                <ProjectGallery images={["/danubia-1.webp", "/danubia-2.webp", "/danubia-3.webp", "/danubia-4.webp"]} title="Danubia Macario" openLightbox={openLightbox} />
              </div>
              <div className="portfolio-info">
                <h3>{t('portfolio.projects')[1].title}</h3>
                <p>{t('portfolio.projects')[1].description}</p>
                <p className="text-gradient" style={{ marginTop: '1rem', fontWeight: 'bold' }}>{t('home.portfolio.results')[1]}</p>
              </div>
            </GlassCard>
            
            <GlassCard className="portfolio-item">
              <div className="portfolio-info">
                <h3>{t('portfolio.projects')[2].title}</h3>
                <p>{t('portfolio.projects')[2].description}</p>
                <p className="text-gradient" style={{ marginTop: '1rem', fontWeight: 'bold' }}>{t('home.portfolio.results')[2]}</p>
              </div>
              <div style={{width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--glass-border)'}}>
                <ProjectGallery images={["/alessandra-1.webp", "/alessandra-2.webp"]} title="Alessandra Marascio" openLightbox={openLightbox} />
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 6. OFFERTA */}
        <section className="home-section">
          <div className="offer-section">
            <h2>{t('home.offer.title')}</h2>
            <p>{t('home.offer.desc')}</p>
            <button className="primary-btn" onClick={scrollToForm}>
              {t('home.offer.btn')} <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="home-section">
          <h2 className="section-title">{t('home.faq.title')}</h2>
          <div className="faq-grid">
            <GlassCard className="faq-item">
              <h3>{t('home.faq.items')[0].q}</h3>
              <p>{t('home.faq.items')[0].a}</p>
            </GlassCard>
            <GlassCard className="faq-item">
              <h3>{t('home.faq.items')[1].q}</h3>
              <p>{t('home.faq.items')[1].a}</p>
            </GlassCard>
            <GlassCard className="faq-item">
              <h3>{t('home.faq.items')[2].q}</h3>
              <p>{t('home.faq.items')[2].a}</p>
            </GlassCard>
            <GlassCard className="faq-item">
              <h3>{t('home.faq.items')[3].q}</h3>
              <p>{t('home.faq.items')[3].a}</p>
            </GlassCard>
          </div>
        </section>

        {/* 8. FORM & WHATSAPP */}
        <section className="home-section final-form-section" id="preventivo">
          <div className="form-layout-grid">
            <div className="form-content-area">
              <h2 className="section-title form-title-left">{t('home.contact.title')}</h2>
              <p className="form-subtitle-left">
                {t('home.contact.subtitle')}
              </p>
            </div>
            
            <div className="form-container-area">
              <GlassCard className="home-form">
                <form action="https://formspree.io/f/xpqwdgoa" method="POST" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">{t('home.contact.form.nameLabel')}</label>
                    <input type="text" id="name" name="name" required placeholder={t('home.contact.form.namePlace')} />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">{t('home.contact.form.emailLabel')}</label>
                    <input type="email" id="email" name="email" required placeholder={t('home.contact.form.emailPlace')} />
                  </div>
                  
                  {/* Subject and Message inputs continue here */}

                  <div className="form-group" ref={selectRef}>
                    <label>{t('home.contact.form.projectLabel')}</label>
                    <div className="custom-select-container">
                      <div 
                        className={`custom-select-trigger ${subjectOpen ? 'open' : ''}`}
                        onClick={() => setSubjectOpen(prev => !prev)}
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
                                onClick={() => { setSelectedIndex(i); setSubjectOpen(false); }}
                                className={`custom-select-option ${safeSelectedIndex === i ? 'selected' : ''}`}
                              >
                                {opt}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                      
                      <input type="hidden" name="projectType" value={selectedSubject} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t('home.contact.form.messageLabel')}</label>
                    <textarea id="message" name="message" rows="4" required placeholder={t('home.contact.form.messagePlace')}></textarea>
                  </div>

                  <div className="form-submit-container">
                    <button type="submit" className="primary-btn home-submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? t('home.contact.form.btnSending') : t('home.contact.form.btn')}
                    </button>
                    <span className="micro-copy">{t('home.contact.form.disclaimer')}</span>
                  </div>
                </form>
              </GlassCard>
            </div>

            <div className="whatsapp-alternative-area">
              <div className="whatsapp-alt">
                <p>{t('home.contact.whatsappPrefix')}</p>
                <a href="https://wa.me/393519989647?text=Ciao%20Elton%2C%20vorrei%20avere%20maggiori%20informazioni%20sui%20tuoi%20servizi." target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                  <MessageCircle size={20} /> {t('home.contact.whatsappBtn')}
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
    </PageTransition>
  );
};

export default Home;
