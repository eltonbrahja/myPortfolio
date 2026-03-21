import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { blogPosts } from '../data/posts';
import './Blog.css';

const Blog = () => {
  const [activePost, setActivePost] = useState(null);
  const posts = blogPosts;

  return (
    <PageTransition>
      <div className="blog-container">
        
        <AnimatePresence mode="wait">
          {!activePost ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <div className="blog-header">
                <span className="section-label">Thoughts & Articles</span>
                <h2 className="section-title">
                  Il mio <span className="text-gradient">Blog</span>.
                </h2>
                <p className="blog-intro">
                  Condivido scoperte, guide tecniche e riflessioni sul mondo dello sviluppo web, UI/UX design e performance.
                </p>
              </div>

              <div className="blog-grid">
                {posts.map((post) => (
                  <GlassCard key={post.id} className="blog-card" hoverable>
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
                      <button className="read-more-btn" onClick={() => setActivePost(post)}>
                        Leggi l'articolo <ArrowRight size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.article 
              key="article"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="single-article-view"
            >
              <button className="back-btn" onClick={() => setActivePost(null)}>
                <ArrowLeft size={18} strokeWidth={1.5} /> Torna agli articoli
              </button>
              
              <div className="article-header">
                <div className="article-meta">
                  <span className="meta-item"><Calendar size={14} strokeWidth={1.5} /> {activePost.date}</span>
                  <span className="meta-item"><Clock size={14} strokeWidth={1.5} /> {activePost.readTime}</span>
                  <span className="meta-item" style={{color: "var(--accent-color)"}}>{activePost.category}</span>
                </div>
                <h1 className="article-title">{activePost.title}</h1>
              </div>

              <div className="article-hero-image">
                <img src={activePost.image} alt={activePost.title} />
              </div>

              {activePost.content}
            </motion.article>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default Blog;
