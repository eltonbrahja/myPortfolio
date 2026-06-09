import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ExternalLink, Github, Code2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { ProjectGallery, Lightbox } from '../components/ProjectGallery';
import './Portfolio.css';
import { getProjects } from '../data/projects';

const Portfolio = () => {
  const { t, localizePath } = useLanguage();
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index) => {
    setLightbox({ images, index });
  };

  const projects = getProjects(t);

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
