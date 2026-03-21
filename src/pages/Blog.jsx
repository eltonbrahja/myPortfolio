import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import { blogPosts } from '../data/posts';
import './Blog.css';

const Blog = () => {
  const posts = blogPosts;

  return (
    <PageTransition>
      <div className="blog-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
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
                  <Link to={`/blog/${post.id}`} className="read-more-btn" style={{ textDecoration: 'none' }}>
                    Leggi l'articolo <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Blog;
