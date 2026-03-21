import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', delay = 0, hoverable = false }) => {
  const hoverStyle = hoverable ? { style: { transition: "transform 0.3s ease", cursor: "pointer" }, whileHover: { y: -5, scale: 1.01 } } : {};
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      className={`glass-panel ${className}`}
      {...hoverStyle}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
