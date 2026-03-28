import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const servicesList = [
    {
      icon: <Code2 size={32} strokeWidth={1.2} className="service-icon text-blue" />,
      title: t('services.list')[0].title,
      description: t('services.list')[0].description,
      features: t('services.list')[0].features
    },
    {
      icon: <MonitorPlay size={32} strokeWidth={1.2} className="service-icon text-purple" />,
      title: t('services.list')[1].title,
      description: t('services.list')[1].description,
      features: t('services.list')[1].features
    },
    {
      icon: <Zap size={32} strokeWidth={1.2} className="service-icon text-green" />,
      title: t('services.list')[2].title,
      description: t('services.list')[2].description,
      features: t('services.list')[2].features
    }
  ];

  return (
    <PageTransition>
      <div className="services-container">
        
        <div className="services-header">
          <span className="section-label">{t('services.label')}</span>
          <h2 className="section-title">
            {t('services.title1')} <span className="text-gradient">{t('services.title2')}</span>.
          </h2>
          <p className="services-intro">
            {t('services.intro')}
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="services-grid"
        >
          {servicesList.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="service-card-wrapper">
              <GlassCard className="service-card" hoverable>
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </PageTransition>
  );
};

export default Services;
