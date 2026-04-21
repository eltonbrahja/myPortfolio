// src/pages/BlogPost.jsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { blogPosts } from '../data/posts';
import { useLanguage } from '../context/LanguageContext';
import './Blog.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t, localizePath } = useLanguage();
  
  const postGroup = blogPosts.find(p => p.id === id);
  const post = postGroup ? postGroup[language] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Elton Brahja`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = post.excerpt;

      // Add JSON-LD for rich snippets
      const imageUrl = post.image.startsWith('http') ? post.image : `https://www.eltonbrahja.eu${post.image}`;
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": imageUrl,
        "author": {
          "@type": "Person",
          "name": "Elton Brahja",
          "url": "https://www.eltonbrahja.eu"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Elton Brahja",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.eltonbrahja.eu/favicon.svg"
          }
        }
      };

      let script = document.querySelector('#article-structured-data');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'article-structured-data';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(structuredData);
    }

    return () => {
      // Cleanup injected script on unmount
      const script = document.querySelector('#article-structured-data');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [post]);

  if (!post) {
    return (
      <PageTransition>
        <div className="blog-container" style={{ textAlign: 'center', paddingTop: '100px' }}>
          <h2>{t('blog.notFound')}</h2>
          <Link to={localizePath('/blog')} className="read-more-btn" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <ArrowLeft size={16} /> {t('blog.backToBlog')}
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="blog-container">
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="single-article-view"
        >
          <button className="back-btn" onClick={() => navigate(localizePath('/blog'))}>
            <ArrowLeft size={18} strokeWidth={1.5} /> {t('blog.backToBlog')}
          </button>
          
          <div className="article-header">
            <div className="article-meta">
              <span className="meta-item"><Calendar size={14} strokeWidth={1.5} /> {post.date}</span>
              <span className="meta-item"><Clock size={14} strokeWidth={1.5} /> {post.readTime}</span>
              <span className="meta-item" style={{color: "var(--accent-color)"}}>{post.category}</span>
            </div>
            <h1 className="article-title">{post.title}</h1>
          </div>

          <div className="article-hero-image">
            <img src={post.image} alt={post.title} />
          </div>

          {post.content}
        </motion.article>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
