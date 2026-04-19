import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { blogPosts } from '../data/posts';
import { useLanguage } from '../context/LanguageContext';
import './Blog.css';

const Blog = () => {
  const { t, language, localizePath } = useLanguage();
  const allPosts = blogPosts.map(group => group[language]).filter(Boolean);
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [...new Set(allPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory 
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;
    
  const allLabel = language === 'it' ? 'Tutti' : 'All';

  return (
    <PageTransition>
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

          <motion.div layout className="blog-grid">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="blog-card" hoverable>
                <Link to={localizePath(`/blog/${post.id}`)} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="blog-image-wrapper">
                    <img src={post.image} alt={post.title} className="blog-image" loading="lazy" />
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
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Blog;
