import React from 'react';



export const checklistSitoWebControlliOnlinePostEn = {
  id: "checklist-sito-web-controlli-online",
  title: "Website Launch Checklist: 15 essential steps before going live",
  excerpt: "Launch your website without errors. Here is the ultimate checklist with 15 essential checks before going online to convert and sell.",
  date: "June 9, 2026",
  readTime: "7 min read",
  category: "SEO & Performance",
  image: "/articoloChecklist.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is website speed so important before launching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Speed directly affects conversions: if a site takes too long to load, users abandon it immediately. Additionally, Google considers it an official ranking factor, penalizing slow websites."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I forget the SSL certificate (HTTPS)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browsers will show a red warning message marking the site as not secure. This compromises visitor trust and severely penalizes indexing on Google."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use JPG images on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but it is recommended to use the WebP format. It offers the same visual quality while reducing the file size by about 30%, which directly benefits loading speed."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        You have spent weeks planning, writing copy, and refining the design. Finally, your new website is ready. Or at least, it looks that way.
        Launching a website without a systematic review is one of the biggest risks for a small business. A minor technical glitch, a slow page, or a broken contact form can burn traffic and potential clients from day one.
      </p>

      <p>
        That is why we have prepared the <strong>ultimate website checklist</strong>: 15 essential steps divided into key areas (UX, SEO, Performance, and Technical/Legal) to check before pushing the "publish" button.
      </p>

      <div className="article-toc">
        <div className="toc-title">Table of Contents</div>
        <ol className="toc-list">
          <li><a href="#usability">Usability and Conversions (UX)</a></li>
          <li><a href="#seo">On-Page SEO</a></li>
          <li><a href="#performance">Performance and Speed</a></li>
          <li><a href="#technical">Technical and Legal Aspects</a></li>
        </ol>
      </div>

      <h2 id="usability">Usability and Conversions (UX)</h2>
      <p>A beautiful but confusing website does not sell. The first step is verifying that the user journey is smooth and obstacle-free.</p>
      
      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Are contact details easy to find?</strong> It sounds basic, but many sites hide phone numbers or emails. Ensure your primary contact info is clearly visible in the header (top) and footer (bottom) of every page. Creating a simple, direct contact page is critical to avoid driving customers away, as explained in our guide on <a href="/en/blog/10-errori-sito-piccole-attivita">10 common website mistakes to avoid</a>.
        </li>
        <li>
          <strong>Is there a clear Call to Action (CTA) above the fold?</strong> "Above the fold" is the part of the screen visible immediately before scrolling. Your primary call to action (e.g., "Request a Quote" or "Book a Call") belongs there. Keep it to a single main button with a contrasting color and benefit-oriented text.
        </li>
        <li>
          <strong>Do contact forms actually work?</strong> Run a real test: fill out every form on your website. Verify that the data reaches your email inbox correctly and that the user is redirected to a clear "Thank You" page.
        </li>
        <li>
          <strong>Is the site responsive (mobile-friendly)?</strong> Over 60% of your visitors will navigate using a phone. Open the site on various smartphones and check that text is readable without zooming and buttons are easily clickable with a thumb.
        </li>
      </ul>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Have doubts about your site's UX or CTA placement? <a href="/en#contact">Request a free UX analysis of your homepage →</a>
      </p>

      <h2 id="seo">On-Page SEO (Search Engine Optimization)</h2>
      <p>To get found on Google, every page must follow precise structural guidelines.</p>

      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Is there only one H1 tag per page?</strong> The H1 tag is your page's main title. Google uses it to understand the core topic. Ensure there is only one per page and that it contains your main keyword. Internal headings should follow a logical hierarchy (H2 for main topics, H3 for sub-points).
        </li>
        <li>
          <strong>Are Title Tags and Meta Descriptions optimized?</strong> Every page needs a custom title (under 60 characters with the keyword at the start) and a description (under 150 characters, persuasive and click-oriented) for Google's search results.
        </li>
        <li>
          <strong>Do images have Alt tags?</strong> Search engines do not "see" images; they read alternative texts. Add a brief, descriptive Alt tag to all key images on your site to improve Google Images ranking and ensure accessibility.
        </li>
        <li>
          <strong>Do internal links work and use descriptive anchor texts?</strong> Avoid generic links like "click here." Use descriptive anchor texts that tell Google and the user where the link leads (e.g., "explore our <a href="/en/services">website development service for small businesses</a>"). If you want to analyze costs before starting, read our comparison of <a href="/en/blog/sito-abbonamento-vs-pagamento-unico">subscription-based websites vs. one-time payments</a>.
        </li>
      </ul>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Want to rank on search engines and get found by local clients? <a href="/en#contact">Discover how I can optimize your site's SEO →</a>
      </p>

      <h2 id="performance">Performance and Speed</h2>
      <p>Loading speed is an official Google ranking factor and directly impacts sales: if a site takes more than 3 seconds to load, half of the users leave.</p>

      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Are images compressed and in the right format?</strong> Never upload photos directly from a camera or at raw resolution. Use compression tools and adopt modern, lightweight formats like <strong>WebP</strong> or <strong>AVIF</strong> instead of heavy PNGs or JPGs.
        </li>
        <li>
          <strong>Has speed been tested on PageSpeed Insights?</strong> Test your URL on Google PageSpeed Insights. Aim for a green score (90/100+) on both mobile and desktop.
        </li>
        <li>
          <strong>Is caching enabled?</strong> Configure a caching system so that visitors' browsers store a static copy of the site, speeding up loading times for return visits.
        </li>
      </ul>

      <h2 id="technical">Technical and Legal Aspects</h2>
      <p>Final details, often invisible but crucial for security, trust, and legal compliance.</p>

      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Is the SSL certificate (HTTPS) active?</strong> Your URL must start with <code>https://</code> and display the closed padlock icon. A site marked "Not Secure" instantly kills client trust and gets penalized by Google.
        </li>
        <li>
          <strong>Is the 404 page customized?</strong> If a user types a wrong URL, they should not see a generic error screen. Build a custom 404 page that matches your site's style and offers a link to return to the Home page.
        </li>
        <li>
          <strong>Are Cookie and Privacy Policies GDPR compliant?</strong> Having a compliant Privacy and Cookie policy is mandatory. You also need a consent banner that blocks tracking scripts (like Google Analytics) until the user consents.
        </li>
        <li>
          <strong>Are Google Search Console and Analytics set up?</strong> Connect the site to Google Search Console to monitor page indexing and Google Analytics (GA4) to track traffic and user behavior from day one.
        </li>
      </ul>

      <h2>FAQ - Frequently Asked Questions about the Launch Checklist</h2>
      <dl className="faq-list">
        <dt>Why is website speed so important before launching?</dt>
        <dd>Because it directly affects conversions. If a site is slow, users abandon it before even seeing your offer. Furthermore, Google penalizes slow sites by placing them lower in search results.</dd>
        
        <dt>What happens if I forget the SSL certificate (HTTPS)?</dt>
        <dd>Modern browsers will display a red security warning ("Not Secure") to anyone trying to enter. This scares users away and drastically reduces visits and conversions.</dd>
        
        <dt>Can I use JPG images on my website?</dt>
        <dd>It is preferable to convert and compress all images to next-generation formats like <strong>WebP</strong>. WebP maintains excellent visual quality but weighs up to 30% less than JPG, speeding up page loading times.</dd>
      </dl>

      <h2>Conclusion: What to do now</h2>
      <p>
        Entrusting website creation to a professional ensures each of these 15 points is handled flawlessly under the hood, saving you time and avoiding costly post-launch bugs.
        If you have a website almost ready or already online and want to make sure it is performing at its best, we can look at it together.
      </p>

      <div style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '40px',
        marginTop: '60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
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
        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#fff', marginTop: 0 }}>
          Want a website that converts from day one?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          I can perform a free analysis of your online presence and give you honest feedback on speed, mobile optimization, and SEO for your current or under-development site.
        </p>
        <a href="/en#contact" className="filter-chip active" style={{ 
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
          color: '#fff',
          background: 'var(--accent-color)'
        }}>
          Request a free website analysis →
        </a>
      </div>
    </div>
  )
};
