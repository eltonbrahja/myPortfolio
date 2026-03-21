import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: "L'importanza di un Design System scalabile",
      excerpt: "Scopri come strutturare variabili CSS e token di design per garantire una manutenzione a lungo termine senza stress.",
      date: "15 Ottobre 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
      category: "UI/UX Design"
    },
    {
      title: "React Server Components spiegati semplici",
      excerpt: "Cosa cambia veramente nel mondo frontend con l'introduzione dei RSC e perché dovresti iniziare ad usarli.",
      date: "28 Settembre 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      category: "Sviluppo Web"
    },
    {
      title: "Core Web Vitals e impatto sulla SEO",
      excerpt: "Ottimizzare LCP, FID e CLS: la guida definitiva per far felice Google Lighthouse e i tuoi utenti.",
      date: "10 Settembre 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "Performance"
    }
  ];

  return (
    <PageTransition>
      <div className="blog-container">
        <div className="blog-header">
          <span className="section-label">Thoughts & Articles</span>
          <h2 className="section-title">
            Il mio <span className="text-gradient">Blog</span>.
          </h2>
          <p className="blog-intro">
            Condivido scoperte, sperimentazioni e riflessioni sul mondo dello sviluppo web, UI/UX design e performance.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, idx) => (
            <GlassCard key={idx} className="blog-card" delay={idx * 0.1} hoverable>
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" loading="lazy" />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                  <span className="meta-item"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="read-more-btn">
                  Leggi l'articolo <ArrowRight size={16} />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
