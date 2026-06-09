import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Database, 
  Laptop, 
  Server, 
  Award, 
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import GlassCard from '../components/GlassCard';
import './CustomBooking.css';

const CustomBooking = () => {
  const { t, localizePath } = useLanguage();
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [
    "/prenotazione/prenotazione1.png",
    "/prenotazione/prenotazione2.png",
    "/prenotazione/prenotazione3.png",
    "/prenotazione/prenotazione4.png"
  ];

  const tags = ["Next.js 14", "Supabase", "Tailwind CSS", "Google Calendar API", "TypeScript", "App Router"];

  // Helper safely checking array translations
  const features = t('customBooking.features') || [];
  const results = t('customBooking.resultsList') || [];

  return (
    <PageTransition>
      <div className="custom-booking-container">
        
        {/* Navigation / Header */}
        <div className="booking-nav-wrapper">
          <Link to={localizePath('/portfolio')} className="booking-back-btn">
            <ArrowLeft size={16} />
            <span>{t('customBooking.backBtn')}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="booking-hero">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="booking-hero-label"
          >
            {t('customBooking.heroLabel')}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="booking-hero-title text-gradient"
          >
            {t('customBooking.title')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="booking-hero-subtitle"
          >
            {t('customBooking.subtitle')}
          </motion.p>
        </section>

        {/* Dynamic Interactive Media Gallery */}
        <section className="booking-gallery-section">
          <GlassCard className="booking-gallery-card" delay={0.4}>
            <div className="gallery-main-view">
              <motion.img 
                key={activePhoto}
                src={photos[activePhoto]} 
                alt={`Booking System Screenshot ${activePhoto + 1}`} 
                className="gallery-main-image"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="gallery-main-overlay"></div>
            </div>
            
            <div className="gallery-thumbnails">
              {photos.map((photo, index) => (
                <button 
                  key={index} 
                  className={`gallery-thumb-btn ${index === activePhoto ? 'active' : ''}`}
                  onClick={() => setActivePhoto(index)}
                  aria-label={`Visualizza foto ${index + 1}`}
                >
                  <img src={photo} alt={`Miniatura ${index + 1}`} className="gallery-thumb-img" />
                  <div className="thumb-border-glow"></div>
                </button>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Tech Stack Bar */}
        <section className="booking-tags-section">
          <div className="booking-tags-title">{t('customBooking.techStackTitle')}</div>
          <div className="booking-tags-container">
            {tags.map((tag, idx) => (
              <span key={idx} className="booking-tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Project Overview */}
        <section className="booking-overview-section">
          <div className="section-grid">
            <div className="overview-text-block">
              <h2 className="section-block-title">{t('customBooking.overviewTitle')}</h2>
              <p>{t('customBooking.overviewP1')}</p>
              <p>{t('customBooking.overviewP2')}</p>
            </div>
            
            <GlassCard className="overview-meta-card" delay={0.2}>
              <div className="meta-item">
                <div className="meta-icon-wrapper">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="meta-label">Anno / Date</div>
                  <div className="meta-value">2026</div>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-icon-wrapper">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="meta-label">Categoria / Category</div>
                  <div className="meta-value">Booking Engine</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Key Features */}
        <section className="booking-features-section">
          <h2 className="section-block-title center">{t('customBooking.featuresTitle')}</h2>
          
          <div className="features-grid">
            {Array.isArray(features) && features.map((feat, idx) => (
              <GlassCard key={idx} className="feature-card" delay={0.1 * idx}>
                <div className="feature-icon-box">
                  {idx === 0 && <Calendar size={24} />}
                  {idx === 1 && <Laptop size={24} />}
                  {idx === 2 && <Award size={24} />}
                  {idx === 3 && <Code2 size={24} />}
                </div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="booking-architecture-section">
          <h2 className="section-block-title center">{t('customBooking.architectureTitle')}</h2>
          
          <div className="architecture-flow-container">
            {/* Frontend Block */}
            <GlassCard className="arch-card frontend" delay={0.1}>
              <div className="arch-icon-wrapper">
                <Laptop size={32} />
              </div>
              <h3 className="arch-card-title">{t('customBooking.frontendTitle')}</h3>
              <p className="arch-card-desc">{t('customBooking.frontendDesc')}</p>
            </GlassCard>

            {/* Connection Arrow */}
            <div className="arch-connector-line">
              <div className="connector-dot"></div>
              <ChevronRight className="arrow-icon" size={24} />
            </div>

            {/* Backend Block */}
            <GlassCard className="arch-card backend" delay={0.2}>
              <div className="arch-icon-wrapper">
                <Server size={32} />
              </div>
              <h3 className="arch-card-title">{t('customBooking.backendTitle')}</h3>
              <p className="arch-card-desc">{t('customBooking.backendDesc')}</p>
            </GlassCard>

            {/* Connection Arrow */}
            <div className="arch-connector-line">
              <div className="connector-dot"></div>
              <ChevronRight className="arrow-icon" size={24} />
            </div>

            {/* Database Block */}
            <GlassCard className="arch-card database" delay={0.3}>
              <div className="arch-icon-wrapper">
                <Database size={32} />
              </div>
              <h3 className="arch-card-title">{t('customBooking.databaseTitle')}</h3>
              <p className="arch-card-desc">{t('customBooking.databaseDesc')}</p>
            </GlassCard>
          </div>
        </section>

        {/* Results */}
        <section className="booking-results-section">
          <div className="section-grid align-center">
            <div className="results-image-showcase">
              <img src="/prenotazione/prenotazione2.png" alt="System Detail" className="results-secondary-img" />
              <div className="results-glow"></div>
            </div>
            
            <div className="results-content-block">
              <h2 className="section-block-title">{t('customBooking.resultsTitle')}</h2>
              <ul className="results-list">
                {Array.isArray(results) && results.map((result, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="result-item"
                  >
                    <CheckCircle2 className="check-icon" size={20} />
                    <span>{result}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="booking-cta-section">
          <GlassCard className="booking-cta-card" delay={0.1}>
            <div className="cta-glow"></div>
            <h2 className="booking-cta-title">{t('customBooking.ctaTitle')}</h2>
            <p className="booking-cta-desc">{t('customBooking.ctaDesc')}</p>
            <Link to={localizePath('/') + '#preventivo'} className="booking-cta-btn-link">
              {t('customBooking.ctaBtn')}
            </Link>
          </GlassCard>
        </section>

      </div>
    </PageTransition>
  );
};

export default CustomBooking;
