import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Studio Dott.ssa Danubia Macario",
      image: "/sitoDanubia.webp",
      tags: ["WORDPRESS", "MULTILINGUA IT/PT-BR"],
      description: "Sito bilingue completo (IT/PT-BR) per consulenza psicologica. Interfaccia professionale con sistema di prenotazione online, gestione contenuti multilingua.",
      link: "https://www.danubiamacario.com"
    },
    {
      title: "Studio Dr.ssa Marascio",
      image: "/sitoAlessandra.webp",
      tags: ["WORDPRESS", "LATEPOINT BOOKING"],
      description: "Piattaforma professionale completa. Integrazione di sistema di prenotazione automatizzato (LatePoint) per la gestione dell'agenda pazienti.",
      link: "https://www.alessandra-marascio-psicologa.it/"
    },
    {
      title: "Portfolio 'No-Bloat'",
      image: "/mioSito.webp",
      tags: ["REACT VITE", "FRAMER MOTION", "VANILLA CSS"],
      description: "Sviluppato in React con architettura moderna Vite. Animazioni fluide, glassmorphism e zero framework CSS per massimizzare le performance.",
      link: "#"
    }
  ];

  return (
    <PageTransition>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="section-label">Lavori Precedenti</span>
          <h2 className="section-title">
            Progetti <span className="text-gradient">Realizzati</span>
          </h2>
          <p className="portfolio-intro">
            Dalla gestione complessa tramite CMS alle dashboard PWA in React.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, idx) => (
            <GlassCard key={idx} className="portfolio-card" delay={idx * 0.1}>
              <div className="portfolio-image-container">
                <img src={project.image} alt={project.title} className="portfolio-image" loading="lazy" />
                <div className="portfolio-image-overlay"></div>
              </div>
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
                      Visita Live <ExternalLink size={16} strokeWidth={1.5} />
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
            <h3 className="portfolio-title">Prossimo Progetto</h3>
            <p className="portfolio-desc">Sperimentazione con API e automazione dei dati.</p>
            <span className="wip-badge">Work in Progress</span>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
