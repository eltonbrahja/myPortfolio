import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Zap, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const { t, lang } = useLanguage();
  const processLabel = lang === 'it' ? 'Come lavoro' : 'How I work';

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
      icon: <Code2 size={36} strokeWidth={1.2} />,
      accentColor: '#2997ff',
      accentGradient: 'linear-gradient(135deg, rgba(41, 151, 255, 0.15) 0%, rgba(41, 151, 255, 0.02) 100%)',
      accentBorder: 'rgba(41, 151, 255, 0.2)',
      data: t('services.list')[0]
    },
    {
      icon: <MonitorPlay size={36} strokeWidth={1.2} />,
      accentColor: '#a855f7',
      accentGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.02) 100%)',
      accentBorder: 'rgba(168, 85, 247, 0.2)',
      data: t('services.list')[1]
    },
    {
      icon: <Zap size={36} strokeWidth={1.2} />,
      accentColor: '#30d158',
      accentGradient: 'linear-gradient(135deg, rgba(48, 209, 88, 0.15) 0%, rgba(48, 209, 88, 0.02) 100%)',
      accentBorder: 'rgba(48, 209, 88, 0.2)',
      data: t('services.list')[2]
    }
  ];

  const localizePath = (path) => `/${lang}${path}`;

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
                {/* Top row: icon + number */}
                <div className="service-top-row">
                  <div 
                    className="service-icon-box-lg" 
                    style={{ 
                      background: service.accentGradient,
                      borderColor: service.accentBorder
                    }}
                  >
                    <div style={{ color: service.accentColor }}>
                      {service.icon}
                    </div>
                  </div>
                  <span className="service-number" style={{ color: service.accentColor }}>
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h2 className="service-section-title">{service.data.title}</h2>

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
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <Link to={localizePath('/contact')} className="services-cta-btn">
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
