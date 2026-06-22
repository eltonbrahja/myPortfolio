import React from 'react';

const sourceLinkStyle = {
  fontSize: '11px',
  fontWeight: '600',
  color: 'var(--accent-color)',
  background: 'rgba(168, 85, 247, 0.08)',
  border: '1px solid rgba(168, 85, 247, 0.15)',
  padding: '2px 6px',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2px',
  marginLeft: '6px',
  verticalAlign: 'middle',
  transition: 'all 0.2s ease',
};

export const setteSegnaliRifareSitoPostEn = {
  id: "7-segnali-rifare-sito",
  title: "7 signs it's time to redesign your business website",
  excerpt: "Are you sure your website is helping your local business? Discover the 7 warning signs that indicate it's time for a redesign so you don't lose clients.",
  date: "June 22, 2026",
  readTime: "5 min read",
  category: "Web Design",
  image: "/fotoCambioSito.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to know if it's time to redesign your website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your site is slow to load, doesn't look good on smartphones, has outdated graphics, or worse, never brings you new contacts or quote requests, it's the right time for a redesign."
        }
      },
      {
        "@type": "Question",
        "name": "Why does an outdated website make you lose customers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A site with old information, inactive services, or wrong hours communicates a lack of professionalism. Customers prefer to turn to businesses that show care and precision online as well."
        }
      },
      {
        "@type": "Question",
        "name": "How important is having a mobile-friendly website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Today, the vast majority of visits come from smartphones. If your site is not optimized for mobile, users will leave in frustration and Google will penalize it in search results."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p style={{ fontSize: '13px', color: 'rgba(100,100,100,0.6)', marginTop: '-15px', marginBottom: '30px', fontStyle: 'italic' }}>
        Photo by <a href="https://unsplash.com/it/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Brett Jordan</a> on <a href="https://unsplash.com/it/foto/blocchi-di-lettere-lettere-in-legno-marrone-ehKaEaZ5VuU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </p>

      <p>
        The web moves at an impressive speed, and what worked five or ten years ago risks doing more damage than good today. Many local businesses and professional studios keep an obsolete website online thinking: "The important thing is to be there".
      </p>
      
      <p>
        But the truth is that <strong>a bad website is worse than no website</strong>. If your online presence communicates clutter or slowness, potential clients will go elsewhere. Here are 7 warning signs telling you it's time to redesign your site.
      </p>

      <div className="article-toc">
        <div className="toc-title">Table of Contents</div>
        <ol className="toc-list">
          <li><a href="#sito-lento">1. The site is too slow</a></li>
          <li><a href="#no-mobile">2. It's a nightmare on smartphones</a></li>
          <li><a href="#grafica-vecchia">3. The graphics are clearly "2000s"</a></li>
          <li><a href="#nessun-contatto">4. You don't receive requests or calls</a></li>
          <li><a href="#informazioni-vecchie">5. Information is not updated</a></li>
          <li><a href="#navigazione-confusa">6. Navigation is a maze</a></li>
          <li><a href="#no-brand">7. It no longer reflects your brand</a></li>
          <li><a href="#conclusione">What to do now?</a></li>
        </ol>
      </div>

      <h2 id="sito-lento">1. The site is too slow</h2>
      <p>
        Patience on the web doesn't exist. If your site takes more than 3 seconds to open, most visitors will click the "back" button and choose your competitor. A slow site not only burns your opportunities but is also penalized by Google, which today gives enormous priority to speed (the famous Core Web Vitals).
      </p>

      <h2 id="no-mobile">2. It's a nightmare on smartphones (not mobile-friendly)</h2>
      <p>
        Over 70% of web traffic for local businesses comes from smartphones. If people have to zoom in or scroll left and right to read your texts, you have a serious problem. A site today must be "mobile-first", that is, designed to work perfectly on small screens.
      </p>

      <h2 id="grafica-vecchia">3. The graphics are clearly "2000s"</h2>
      <p>
        Pages full of cluttered text, pixelated photos, shiny 3D buttons, and neon colors: if your site looks antiquated, users will think your way of working is too. The aesthetics of a site communicate authority. A clean, modern, and tidy design transmits immediate professionalism.
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Do you think your site needs a refresh? <a href="/en#preventivo">Request a free analysis →</a>
      </p>

      <h2 id="nessun-contatto">4. You never receive requests or calls (no CTAs)</h2>
      <p>
        The definitive alarm bell: the site is online, you have some visits, but the phone doesn't ring and emails don't arrive. This often happens when there are no <strong>Call To Actions (CTAs)</strong>, meaning clear buttons telling the user what to do (e.g., "Request a quote", "Book a table", "Call now"). If you don't invite people to take action, they will simply leave.
      </p>

      <h2 id="informazioni-vecchie">5. Information is not updated</h2>
      <p>
        Old opening hours, services you no longer offer, past staff members, or a blog stuck in 2018. An abandoned site suggests a closed or neglected business. If every time you need to change a comma you have to call a programmer who makes you wait weeks, it's time to switch to a more modern and easily manageable system.
      </p>

      <h2 id="navigazione-confusa">6. Navigation is a maze</h2>
      <p>
        If a potential client takes more than two clicks to find your services or contact page, you've lost. Endless menus with dozens of items confuse users. Today, the structure of a site must be essential, guiding the user in a fluid and logical path.
      </p>

      <h2 id="no-brand">7. It no longer reflects your brand and evolution</h2>
      <p>
        Maybe you opened the business years ago, and your cousin made the site to get started. Today you have grown, you have more important clients, you offer higher quality services, but the site has remained the one from the beginning. Your online image must grow with your business: you cannot present yourself as an industry leader with an amateur site.
      </p>

      <h2 id="conclusione">What to do now?</h2>
      <p>
        If you recognized yourself in at least one of these 7 signs, do not ignore it: every passing day you could be losing clients to competitors who have invested in their digital presence. A professional website is your best employee: it works 24/7, communicates your strengths, and collects contacts.
      </p>

      <div style={{
        background: 'linear-gradient(135deg, rgba(245, 239, 235, 0.5) 0%, rgba(200, 217, 230, 0.1) 100%)',
        border: '1px solid rgba(86, 124, 141, 0.15)',
        borderRadius: '24px',
        padding: '40px',
        marginTop: '60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px var(--shadow-color)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)', marginTop: 0 }}>
          Is it time to shift gears?
        </h3>
        <p style={{ color: 'rgba(86, 124, 141, 0.9)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          Don't let an outdated website block your business growth. Discover how I can help you create a fast, modern online showcase designed to get you more requests.
        </p>
        <a href="/en#preventivo" className="filter-chip active" style={{ 
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          padding: '12px 32px',
          fontSize: '15px',
          fontWeight: '600',
          borderRadius: '9999px',
          boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
          border: 'none',
          color: 'var(--bg-color)', background: 'var(--accent-color)'
        }}>
          Request a quote or free analysis now →
        </a>
      </div>
    </div>
  )
};
