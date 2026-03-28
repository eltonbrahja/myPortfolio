import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Rocket, FolderOpen, ChevronDown, TrendingUp, Target, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();
  
  // Apple style scroll effect refs and transforms
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  // 1. Animazione Titolo
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [50, 0, 0, -50]);
  const titlePointer = useTransform(scrollYProgress, [0, 0.29, 0.3], ["auto", "auto", "none"]);

  // 2. Animazione Sottotitolo (più grande)
  const subtitleOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [50, 0, 0, -50]);
  const subtitlePointer = useTransform(scrollYProgress, [0, 0.25, 0.59, 0.6], ["none", "auto", "auto", "none"]);

  // 3. Animazione Features Grid
  const gridOpacity = useTransform(scrollYProgress, [0.55, 0.65, 1, 1], [0, 1, 1, 1]);
  const gridY = useTransform(scrollYProgress, [0.55, 0.65], [100, 0]);
  const gridPointer = useTransform(scrollYProgress, [0, 0.64, 0.65], ["none", "none", "auto"]);

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

        {/* VALUE PROPOSITION SECTION (APPLE SCROLL) */}
        <section className="value-prop-section">
          
          <div ref={scrollRef} className="apple-scroll-container">
            <div className="apple-scroll-sticky">
              
              {/* Titolo Principale */}
              <motion.div 
                className="apple-scroll-content"
                style={{ opacity: titleOpacity, y: titleY, pointerEvents: titlePointer }}
              >
                <h2 className="value-title">{t('home.valueTitle')}</h2>
              </motion.div>

              {/* Sottotitolo */}
              <motion.div 
                className="apple-scroll-content subtitle-content"
                style={{ opacity: subtitleOpacity, y: subtitleY, pointerEvents: subtitlePointer }}
              >
                <p className="value-subtitle">
                  {t('home.valueSubtitle')}
                </p>
              </motion.div>

              {/* Grid Servizi/Features */}
              <motion.div 
                className="apple-scroll-content grid-content"
                style={{ opacity: gridOpacity, y: gridY, pointerEvents: gridPointer }}
              >
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
                    <div key={idx} className="value-card">
                      <div className={`value-icon-wrapper text-${val.color}`}>
                        {val.icon}
                      </div>
                      <h3>{val.title}</h3>
                      <p>{val.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

          {/* CTA FINALE (Fuori dallo sticky, scrolla normalmente alla fine) */}
          <div className="value-prop-container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
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
