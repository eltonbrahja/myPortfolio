import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { ProjectGallery, Lightbox } from '../components/ProjectGallery';
import './Portfolio.css';const Portfolio = () => {
  const { t, localizePath } = useLanguage();
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index) => {
    setLightbox({ images, index });
  };

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
      images: ["/prenotazione/prenotazione1.png", "/prenotazione/prenotazione2.png", "/prenotazione/prenotazione3.png", "/prenotazione/prenotazione4.png"],
      tags: ["REACT VITE", "NODE.JS", "CUSTOM BOOKING"],
      description: t('portfolio.projects')[1].description,
      internalLink: "/portfolio/custom-booking",
      linkText: t('portfolio.projects')[1].linkText
    },
    {
      title: t('portfolio.projects')[2].title,
      images: ["/danubia-1.webp", "/danubia-2.webp", "/danubia-3.webp", "/danubia-4.webp"],
      tags: ["WORDPRESS", "MULTILINGUA IT/PT-BR"],
      description: t('portfolio.projects')[2].description,
      link: "https://www.danubiamacario.com",
      linkText: t('portfolio.projects')[2].linkText
    },
    {
      title: t('portfolio.projects')[3].title,
      images: ["/alessandra-1.webp", "/alessandra-2.webp"],
      tags: ["WORDPRESS", "LATEPOINT BOOKING"],
      description: t('portfolio.projects')[3].description,
      link: "https://www.alessandra-marascio-psicologa.it/",
      linkText: t('portfolio.projects')[3].linkText
    },
    {
      title: t('portfolio.projects')[4].title,
      image: "/mioSito.webp",
      tags: ["REACT VITE", "FRAMER MOTION", "VANILLA CSS"],
      description: t('portfolio.projects')[4].description,
      link: "#",
      linkText: t('portfolio.projects')[4].linkText
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
                <div className="portfolio-gallery-wrapper">
                  <ProjectGallery 
                    images={project.images} 
                    title={project.title} 
                    openLightbox={openLightbox} 
                    layout={idx === 0 ? "dual" : "single"}
                  />
                </div>
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
                  {project.internalLink ? (
                    <Link to={localizePath(project.internalLink)} className="portfolio-link">
                      {project.linkText} <ExternalLink size={16} strokeWidth={1.5} />
                    </Link>
                  ) : (
                    project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        {project.linkText} <ExternalLink size={16} strokeWidth={1.5} />
                      </a>
                    )
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="portfolio-github">
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
      <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
    </PageTransition>
  );
};

export default Portfolio;
