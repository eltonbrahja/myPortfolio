import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const { t, lang, localizePath } = useLanguage();
  const processLabel = 'Come lavoro';

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const servicesList = [
    {
      accentColor: '#2997ff',
      data: t('services.list')[0]
    },
    {
      accentColor: '#a855f7',
      data: t('services.list')[1]
    },
    {
      accentColor: '#30d158',
      data: t('services.list')[2]
    }
  ];



  return (
    <PageTransition>
      <div className="services-container">

        {/* Hero Header */}
        <motion.div
          className="services-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">{t('services.label')}</span>
          <h1 className="services-hero-title">
            {t('services.title1')} <span className="text-gradient">{t('services.title2')}</span>.
          </h1>
          <p className="services-hero-intro">
            {t('services.intro')}
          </p>
        </motion.div>

        {/* Service Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="services-sections"
        >
          {servicesList.map((service, idx) => (
            <motion.section
              key={idx}
              variants={itemVariants}
              className="service-section"
            >
              {/* Accent line on left */}
              <div className="service-accent-line" style={{ background: service.accentColor }} />

              <div className="service-section-inner">
                {/* Header row: Title aligned with Number */}
                <div className="service-header-row">
                  <h2 className="service-section-title">{service.data.title}</h2>
                  <span className="service-number" style={{ color: service.accentColor }}>
                    0{idx + 1}
                  </span>
                </div>

                {/* Description */}
                <p className="service-section-desc">{service.data.description}</p>

                {/* Details */}
                <p className="service-section-details">{service.data.details}</p>

                {/* Extra Details */}
                {service.data.extraDetails && (
                  <p className="service-section-details">{service.data.extraDetails}</p>
                )}

                {/* Features grid */}
                <div className="service-features-grid">
                  {service.data.features.map((feature, fIdx) => (
                    <div key={fIdx} className="service-feature-item">
                      <div className="feature-check" style={{ background: service.accentColor }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Process steps */}
                {service.data.process && (
                  <div className="service-process">
                    <h4 className="service-process-title">{processLabel}</h4>
                    <div className="service-process-steps">
                      {service.data.process.map((p, pIdx) => (
                        <div key={pIdx} className="process-step">
                          <div className="process-step-number" style={{ background: service.accentColor }}>
                            {pIdx + 1}
                          </div>
                          <div className="process-step-content">
                            <h5 className="process-step-name">{p.step}</h5>
                            <p className="process-step-desc">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Insights Section */}
        <motion.div
          className="services-insights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">{t('services.insightsLabel')}</span>
          <h2 className="services-insights-title">
            {t('services.insightsTitle')}
          </h2>
          <div className="insights-grid">
            <Link to={localizePath('/blog/sito-web-psicologi-pazienti-giusti')} className="insight-card insight-card-featured">
              <span className="insight-category">{t('services.insights.psychology.category')}</span>
              <h3>{t('services.insights.psychology.title')}</h3>
              <p>{t('services.insights.psychology.desc')}</p>
              <span className="insight-link">{t('services.insights.psychology.anchorText')} →</span>
            </Link>

            <Link to={localizePath('/blog/checklist-sito-web-controlli-online')} className="insight-card">
              <span className="insight-category">{t('services.insights.checklist.category')}</span>
              <h3>{t('services.insights.checklist.title')}</h3>
              <p>{t('services.insights.checklist.desc')}</p>
              <span className="insight-link">{t('blog.readMore')} →</span>
            </Link>

            <Link to={localizePath('/blog/quanto-costa-rifare-sito-web')} className="insight-card">
              <span className="insight-category">{t('services.insights.costs.category')}</span>
              <h3>{t('services.insights.costs.title')}</h3>
              <p>{t('services.insights.costs.desc')}</p>
              <span className="insight-link">{t('blog.readMore')} →</span>
            </Link>

            <Link to={localizePath('/blog/7-segnali-rifare-sito')} className="insight-card">
              <span className="insight-category">{t('services.insights.errors.category')}</span>
              <h3>{t('services.insights.errors.title')}</h3>
              <p>{t('services.insights.errors.desc')}</p>
              <span className="insight-link">{t('blog.readMore')} →</span>
            </Link>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="services-cta-inner">
            <h2 className="services-cta-title">
              {t('services.ctaTitle')}
            </h2>
            <p className="services-cta-desc">
              {t('services.ctaDesc')}
            </p>
            <Link to={localizePath('/#preventivo')} className="services-cta-btn">
              {t('services.ctaBtn')}
              <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>

      </div>
    </PageTransition>
  );
};

export default Services;
