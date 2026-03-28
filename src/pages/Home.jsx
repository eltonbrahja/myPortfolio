import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Rocket, FolderOpen, ChevronDown, TrendingUp, Target, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="home-wrapper">
        
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-glow"></div>
          
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/video-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title"
            >
              {t('home.heroTitle1')} <br />
              <span className="text-gradient shimmer">{t('home.heroTitle2')}</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="scroll-indicator"
          >
            <span className="scroll-text">{t('home.scrollDown')}</span>
            <ChevronDown size={20} strokeWidth={1.5} className="scroll-icon" />
          </motion.div>
        </section>

        {/* VALUE PROPOSITION SECTION */}
        <section className="value-prop-section">
          <div className="value-prop-container">
            
            {/* INTESTAZIONE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="value-prop-header"
            >
              <h2 className="value-title">{t('home.valueTitle')}</h2>
              <p className="value-subtitle" dangerouslySetInnerHTML={{ __html: t('home.valueSubtitle') }} />
            </motion.div>

            {/* GRID SERVIZI/FEATURES */}
            <div className="value-grid">
              {[
                {
                  icon: <TrendingUp size={32} strokeWidth={1.2} />,
                  title: t('home.features')[0].title,
                  desc: t('home.features')[0].desc,
                  color: "blue"
                },
                {
                  icon: <Target size={32} strokeWidth={1.2} />,
                  title: t('home.features')[1].title,
                  desc: t('home.features')[1].desc,
                  color: "purple"
                },
                {
                  icon: <Code2 size={32} strokeWidth={1.2} />,
                  title: t('home.features')[2].title,
                  desc: t('home.features')[2].desc,
                  color: "green"
                }
              ].map((val, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  key={idx} 
                  className="value-card"
                >
                  <div className={`value-icon-wrapper text-${val.color}`}>
                    {val.icon}
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA FINALE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="cta-glass-card"
            >
              <h2 className="cta-title">{t('home.closingText')}</h2>
              <div className="value-cta-wrapper">
                <Link to="/contact" className="btn-apple-primary">
                  <Rocket size={18} strokeWidth={2} /> {t('home.btnStart')}
                </Link>
                <Link to="/portfolio" className="btn-apple-secondary">
                  <FolderOpen size={18} strokeWidth={2} /> {t('home.btnPortfolio')}
                </Link>
              </div>
            </motion.div>
            
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Home;
