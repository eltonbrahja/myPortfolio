import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, hreflangIt, hreflangEn, type = "website", image = "https://www.eltonbrahja.eu/foto-profilo.webp" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {hreflangIt && <link rel="alternate" hreflang="it" href={hreflangIt} />}
      {hreflangEn && <link rel="alternate" hreflang="en" href={hreflangEn} />}
      {hreflangIt && <link rel="alternate" hreflang="x-default" href={hreflangIt} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Elton Brahja" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
