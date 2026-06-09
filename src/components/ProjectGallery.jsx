import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectGallery.css';

export const ProjectGallery = ({ images, title, layout = "single", openLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = layout === 'dual' 
    ? Array.from({ length: Math.ceil(images.length / 2) }, (_, i) => images.slice(i * 2, i * 2 + 2))
    : images;

  useEffect(() => {
    if (!slides || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

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
                  onClick={() => openLightbox && openLightbox(images, images.indexOf(imgSrc))}
                >
                  <img 
                    src={imgSrc} 
                    alt={`${title} - slide ${currentIndex + 1} pair ${imgIdx + 1}`} 
                    className={`portfolio-image ${openLightbox ? 'clickable' : ''}`} 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          ) : (
            <img 
              src={slides[currentIndex]} 
              alt={`${title} - slide ${currentIndex + 1}`} 
              className={`portfolio-image ${openLightbox ? 'clickable' : ''}`} 
              onClick={() => openLightbox && openLightbox(images, images.indexOf(slides[currentIndex]))}
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

export const Lightbox = ({ lightbox, setLightbox }) => {
  if (!lightbox) return null;

  const lightboxPrev = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  const lightboxNext = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  return (
    <div className="portfolio-lightbox" onClick={() => setLightbox(null)}>
      <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); setLightbox(null); }}>
        <X size={32} />
      </button>
      
      {lightbox.images.length > 1 && (
        <button className="lightbox-arrow lightbox-arrow-left" onClick={lightboxPrev}>
          <ChevronLeft size={36} strokeWidth={1.5} />
        </button>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={lightbox.images[lightbox.index]} alt="Enlarged view" className="lightbox-image" />
      </div>

      {lightbox.images.length > 1 && (
        <button className="lightbox-arrow lightbox-arrow-right" onClick={lightboxNext}>
          <ChevronRight size={36} strokeWidth={1.5} />
        </button>
      )}

      {lightbox.images.length > 1 && (
        <div className="lightbox-counter">
          {lightbox.index + 1} / {lightbox.images.length}
        </div>
      )}
    </div>
  );
};
