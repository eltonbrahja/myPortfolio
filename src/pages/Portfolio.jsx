import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import './Portfolio.css';

const ProjectGallery = ({ images, title, setSelectedImage, layout = "single" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = layout === 'dual' 
    ? Array.from({ length: Math.ceil(images.length / 2) }, (_, i) => images.slice(i * 2, i * 2 + 2))
    : images;

  useEffect(() => {
    if (!slides || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className={`portfolio-gallery-container layout-${layout}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="portfolio-gallery-slide"
        >
          {layout === 'dual' ? (
            <div className="dual-images-wrapper">
              {slides[currentIndex].map((imgSrc, imgIdx) => (
                <div 
                  key={imgIdx} 
                  className="dual-image-half"
                  onClick={() => setSelectedImage(imgSrc)}
                >
                  <img 
                    src={imgSrc} 
                    alt={`${title} - slide ${currentIndex + 1} pair ${imgIdx + 1}`} 
                    className="portfolio-image clickable" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          ) : (
            <img 
              src={slides[currentIndex]} 
              alt={`${title} - slide ${currentIndex + 1}`} 
              className="portfolio-image clickable" 
              onClick={() => setSelectedImage(slides[currentIndex])}
              loading="lazy" 
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Visual indicators (dots) */}
      <div className="gallery-dots">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`gallery-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
          ></div>
        ))}
      </div>
      
      <div className="portfolio-image-overlay"></div>
    </div>
  );
};

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: t('portfolio.projects')[0].title,
      images: ["/palazzodana-1.webp", "/palazzodana-2.webp", "/palazzodana-3.webp", "/palazzodana-4.webp"],
      tags: ["REACT VITE", "GSAP ANIMATIONS", "CUSTOM BOOKING"],
      description: t('portfolio.projects')[0].description,
      link: "https://palazzodana.com",
      linkText: t('portfolio.projects')[0].linkText
    },
    {
      title: t('portfolio.projects')[1].title,
      images: ["/danubia-1.webp", "/danubia-2.webp", "/danubia-3.webp", "/danubia-4.webp"],
      tags: ["WORDPRESS", "MULTILINGUA IT/PT-BR"],
      description: t('portfolio.projects')[1].description,
      link: "https://www.danubiamacario.com",
      linkText: t('portfolio.projects')[1].linkText
    },
    {
      title: t('portfolio.projects')[2].title,
      images: ["/alessandra-1.webp", "/alessandra-2.webp"],
      tags: ["WORDPRESS", "LATEPOINT BOOKING"],
      description: t('portfolio.projects')[2].description,
      link: "https://www.alessandra-marascio-psicologa.it/",
      linkText: t('portfolio.projects')[2].linkText
    },
    {
      title: t('portfolio.projects')[3].title,
      image: "/mioSito.webp",
      tags: ["REACT VITE", "FRAMER MOTION", "VANILLA CSS"],
      description: t('portfolio.projects')[3].description,
      link: "#",
      linkText: t('portfolio.projects')[3].linkText
    }
  ];

  return (
    <PageTransition>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="section-label">{t('portfolio.label')}</span>
          <h2 className="section-title">
            {t('portfolio.title1')} <span className="text-gradient">{t('portfolio.title2')}</span>
          </h2>
          <p className="portfolio-intro">
            {t('portfolio.intro')}
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, idx) => (
            <GlassCard key={idx} className="portfolio-card" delay={idx * 0.1}>
              {project.images ? (
                <ProjectGallery 
                  images={project.images} 
                  title={project.title} 
                  setSelectedImage={setSelectedImage} 
                  layout={idx === 0 ? "dual" : "single"}
                />
              ) : (
                <div className="portfolio-image-container">
                  <img src={project.image} alt={project.title} className="portfolio-image" loading="lazy" />
                  <div className="portfolio-image-overlay"></div>
                </div>
              )}
              <div className="portfolio-content">
                <div className="portfolio-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-desc">{project.description}</p>
                <div className="portfolio-actions">
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="portfolio-link">
                      {project.linkText} <ExternalLink size={16} strokeWidth={1.5} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="portfolio-github">
                      Codice <Github size={16} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
          
          <GlassCard className="portfolio-card coming-soon-card" delay={0.4}>
            <div className="icon-box">
              <Code2 size={48} strokeWidth={1} />
            </div>
            <h3 className="portfolio-title">{t('portfolio.nextProject.title')}</h3>
            <p className="portfolio-desc">{t('portfolio.nextProject.desc')}</p>
            <span className="wip-badge">{t('portfolio.nextProject.badge')}</span>
          </GlassCard>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="portfolio-lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" className="lightbox-image" />
          </div>
        </div>
      )}
    </PageTransition>
  );
};

export default Portfolio;
