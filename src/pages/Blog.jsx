import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import SEO from '../components/SEO';
import { blogPosts } from '../data/posts';
import { useLanguage } from '../context/LanguageContext';
import './Blog.css';

const Blog = () => {
  const { t, language, localizePath } = useLanguage();
  const allPosts = blogPosts.map(group => group[language]).filter(Boolean);
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = [...new Set(allPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory 
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;
    
  const allLabel = language === 'it' ? 'Tutti' : 'All';

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <PageTransition>
      <SEO 
        title={language === 'it' ? "Il mio blog su siti web veloci, SEO e UX | Elton Brahja" : "My blog on fast websites, SEO and UX | Elton Brahja"}
        description={language === 'it' ? "Guide pratiche su siti web veloci, SEO locale, UX e marketing digitale per professionisti e attività locali." : "Practical guides on fast websites, local SEO, UX, and digital marketing for professionals and local businesses."}
        canonical="https://www.eltonbrahja.eu/blog"
        hreflangIt="https://www.eltonbrahja.eu/blog"
        hreflangEn="https://www.eltonbrahja.eu/en/blog"
      />
      <div className="blog-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="blog-header">
            <span className="section-label">{t('blog.label')}</span>
            <h2 className="section-title">
              {t('blog.title1')} <span className="text-gradient">{t('blog.title2')}</span>.
            </h2>
            <p className="blog-intro">
              {t('blog.intro')}
            </p>
            <div className="category-filters">
              <button 
                className={`filter-chip ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                {allLabel}
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={`skeleton-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="blog-card-wrapper"
                  >
                    <GlassCard className="blog-card" disableScrollAnimation>
                      <div className="skeleton-card">
                        <div className="skeleton-image" />
                        <div className="skeleton-content">
                          <div className="skeleton-meta" />
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div className="skeleton-title" />
                            <div className="skeleton-title short" />
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                            <div className="skeleton-text" />
                            <div className="skeleton-text medium" />
                            <div className="skeleton-text short" />
                          </div>
                          <div className="skeleton-btn" />
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))
              ) : (
                filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="blog-card-wrapper"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <GlassCard className="blog-card" hoverable disableScrollAnimation>
                  <Link to={localizePath(`/blog/${post.id}`)} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="blog-image-wrapper">
                      <img src={post.image} alt={post.title} className="blog-image" loading={index < 4 ? "eager" : "lazy"} />
                      <span className="blog-category">{post.category}</span>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="meta-item"><Calendar size={14} strokeWidth={1.5} /> {post.date}</span>
                        <span className="meta-item"><Clock size={14} strokeWidth={1.5} /> {post.readTime}</span>
                      </div>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <span className="read-more-btn">
                        {t('blog.readMore')} <ArrowRight size={16} strokeWidth={1.5} />
                      </span>
                    </div>
                  </Link>
                  </GlassCard>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Blog;
