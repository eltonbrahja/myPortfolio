import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Settings, 
  Users
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

  const tags = t('customBooking.tags') || [
    "Zero Conflitti di Agenda",
    "5+ Ore Risparmiate / Settimana",
    "Prenotazioni Online H24",
    "Sincronizzazione Google Calendar",
    "Zero Canoni Mensili",
    "100% Mobile Ready"
  ];

  const challengePoints = t('customBooking.challengePoints') || [];
  const features = t('customBooking.features') || [];
  const impactStats = t('customBooking.impactStats') || [];
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
                alt={`Screenshot Portale Prenotazioni ${activePhoto + 1}`} 
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

        {/* Highlights / Outcomes Bar */}
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

        {/* 1. THE CHALLENGE */}
        <section className="booking-challenge-section">
          <div className="section-grid">
            <div className="overview-text-block">
              <div className="case-pillar-badge warning">
                <AlertCircle size={14} />
                <span>{t('customBooking.badgeProblem') || "1. Il Problema"}</span>
              </div>
              <h2 className="section-block-title">{t('customBooking.challengeTitle')}</h2>
              <p>{t('customBooking.challengeP1')}</p>
              <p>{t('customBooking.challengeP2')}</p>
            </div>
            
            <GlassCard className="overview-meta-card" delay={0.2}>
              <div className="meta-item">
                <div className="meta-icon-wrapper">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="meta-label">{t('customBooking.metaDateLabel') || "Tipologia"}</div>
                  <div className="meta-value">{t('customBooking.metaDateValue') || "Caso Studio Reale"}</div>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-icon-wrapper">
                  <Users size={20} />
                </div>
                <div>
                  <div className="meta-label">{t('customBooking.metaCategoryLabel') || "Destinatari"}</div>
                  <div className="meta-value">{t('customBooking.metaCategoryValue') || "Studi & Professionisti"}</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* 4 Pain Points */}
          <div className="challenge-cards-grid">
            {Array.isArray(challengePoints) && challengePoints.map((item, idx) => (
              <GlassCard key={idx} className="challenge-card" delay={0.1 * idx}>
                <div className="challenge-icon-box">
                  {idx === 0 && <Clock size={22} />}
                  {idx === 1 && <AlertCircle size={22} />}
                  {idx === 2 && <Calendar size={22} />}
                  {idx === 3 && <Zap size={22} />}
                </div>
                <h3 className="challenge-card-title">{item.title}</h3>
                <p className="challenge-card-desc">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* 2. THE SOLUTION */}
        <section className="booking-solution-section">
          <div className="solution-intro-center">
            <div className="case-pillar-badge success">
              <CheckCircle2 size={14} />
              <span>{t('customBooking.badgeSolution') || "2. La Soluzione"}</span>
            </div>
            <h2 className="section-block-title center">{t('customBooking.solutionTitle')}</h2>
            <div className="solution-lead-text">
              <p>{t('customBooking.solutionP1')}</p>
              <p>{t('customBooking.solutionP2')}</p>
            </div>
          </div>

          <h3 className="solution-features-heading">{t('customBooking.featuresTitle')}</h3>
          <div className="features-grid">
            {Array.isArray(features) && features.map((feat, idx) => (
              <GlassCard key={idx} className="feature-card" delay={0.1 * idx}>
                <div className="feature-icon-box">
                  {idx === 0 && <Calendar size={24} />}
                  {idx === 1 && <Zap size={24} />}
                  {idx === 2 && <CheckCircle2 size={24} />}
                  {idx === 3 && <Settings size={24} />}
                </div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* 3. THE IMPACT & RESULTS */}
        <section className="booking-impact-section">
          <div className="impact-intro-center">
            <div className="case-pillar-badge accent">
              <TrendingUp size={14} />
              <span>{t('customBooking.badgeImpact') || "3. I Risultati"}</span>
            </div>
            <h2 className="section-block-title center">{t('customBooking.impactTitle')}</h2>
          </div>

          {/* 4 Stat Cards */}
          <div className="impact-stats-grid">
            {Array.isArray(impactStats) && impactStats.map((stat, idx) => (
              <GlassCard key={idx} className="impact-stat-card" delay={0.1 * idx}>
                <div className="impact-stat-value text-gradient">{stat.value}</div>
                <div className="impact-stat-label">{stat.label}</div>
                <p className="impact-stat-desc">{stat.desc}</p>
              </GlassCard>
            ))}
          </div>

          {/* Results Details Grid */}
          <div className="section-grid align-center results-detail-wrapper">
            <div className="results-image-showcase">
              <img src="/prenotazione/prenotazione2.png" alt="Dettaglio Portale Prenotazioni" className="results-secondary-img" />
              <div className="results-glow"></div>
            </div>
            
            <div className="results-content-block">
              <h3 className="results-block-subtitle">{t('customBooking.resultsTitle')}</h3>
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

          {/* Engineering Advantage Box */}
          <GlassCard className="tech-advantage-card" delay={0.3}>
            <div className="tech-advantage-header">
              <div className="tech-advantage-icon">
                <ShieldCheck size={26} />
              </div>
              <h3 className="tech-advantage-title">{t('customBooking.techAdvantageTitle')}</h3>
            </div>
            <p className="tech-advantage-desc">{t('customBooking.techAdvantageDesc')}</p>
          </GlassCard>
        </section>

        {/* Call To Action */}
        <section className="booking-cta-section">
          <GlassCard className="booking-cta-card" delay={0.1}>
            <div className="cta-glow"></div>
            <h2 className="booking-cta-title">{t('customBooking.ctaTitle')}</h2>
            <p className="booking-cta-desc">{t('customBooking.ctaDesc')}</p>
            <div className="booking-cta-deepdive">
              <Link to={localizePath('/blog/sito-web-psicologi-pazienti-giusti')} className="deepdive-link">
                {t('portfolio.psychologyDeepDive')} →
              </Link>
            </div>
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
