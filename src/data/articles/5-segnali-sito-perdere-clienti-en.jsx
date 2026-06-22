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

export const cinqueSegnaliSitoPerdereClientiPostEn = {
  id: "5-segnali-sito-perdere-clienti",
  title: "5 warning signs that your practice's website is costing you clients",
  excerpt: "Many professional practices think: 'I already have a website, so I'm good'. In reality, that very website might be the reason why you are losing clients to your competitors.",
  date: "May 21, 2026",
  readTime: "4 min read",
  category: "Web Design",
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does website speed affect contact requests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If a site takes more than 3 seconds to load, around 40-50% of users will abandon it immediately. A delay of just one second can decrease conversion rates by up to 7%."
        }
      },
      {
        "@type": "Question",
        "name": "Why does an outdated website design turn off clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An outdated design unconsciously communicates neglect. Visitors associate the interface quality with the level of service, choosing competitors with a more professional image."
        }
      },
      {
        "@type": "Question",
        "name": "What are the risks of a non-responsive (mobile-friendly) website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You risk losing over half of your web traffic, which now comes from mobile devices. Additionally, Google penalizes unoptimized sites, ranking them lower in search results."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        Many professional practices and firms think: “I already have a website, so I’m good.”
        In reality, the very website that should be bringing you clients might be the reason you are losing them before they even contact you.
        <a href="https://www.jamiesdesign.com/website-design-and-marketing-blog/mobile-friendly-websites-are-important" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>jamiesdesign ↗</a>
      </p>
      
      <p>Below are 5 clear warning signs that your website is not working for you, but against you.</p>

      <div className="article-toc">
        <div className="toc-title">Table of Contents</div>
        <ol className="toc-list">
          <li><a href="#slow-site">The website is slow to load</a></li>
          <li><a href="#old-design">The design looks 10 years old</a></li>
          <li><a href="#no-mobile">The website is not mobile-friendly</a></li>
          <li><a href="#no-cta">There is no clear Call to Action (CTA)</a></li>
          <li><a href="#confusing-content">Confusing or outdated content</a></li>
          <li><a href="#summary-table">Summary Table: Signs, Impacts, and Solutions</a></li>
        </ol>
      </div>

      <h2 id="slow-site">The website is slow to load</h2>
      <p>
        If your website takes more than 3 seconds to load, a major chunk of users will close it and head back to Google without ever seeing who you are.
        <a href="https://www.elmawebstudio.com/blog/why-website-speed-impacts-revenue-google-ranking" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>elmawebstudio ↗</a>
        Recent studies show that a 1-second delay in load time can drop conversions (requests, contacts, bookings) by up to 7%, and that over 40–50% of users abandon pages that take more than 3 seconds to open.
        <a href="https://niteco.com/articles/why-website-performance-load-speed-important/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>niteco ↗</a>
      </p>
      <p>Translated for your practice:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Every extra second of wait = fewer people reading about your services.</li>
        <li>Fewer people reaching your content = fewer calls, fewer emails, fewer patients or clients.</li>
      </ul>
      <p>
        A slow website is not just “a bit annoying”: it's a leaking tap draining requests every day, in silence.
        <a href="https://www.tedeca.de/blogs/business-cost-of" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>tedeca ↗</a>
      </p>

      <h2 id="old-design">The design looks 10 years old</h2>
      <p>
        The average user takes only a few seconds to form an impression of you, and your website is often the first touchpoint with your practice.
        An outdated, unpolished design with old fonts, chaotic colors, and messy layout unconsciously communicates poor professionalism and lack of care for the client.
        <a href="https://digichefs.com/mobile-friendly-website-design-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>digichefs ↗</a>
      </p>
      <p>What goes through the mind of someone visiting an “old” website:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>They assume the practice isn't updated or doesn't invest in its own image.</li>
        <li>They ask themselves: “If their website is this neglected, how will their service be?”.</li>
        <li>If they are comparing multiple professionals, they are much more likely to choose the one with a cleaner, more modern website.</li>
      </ul>
      <p>In a market where clients can compare 3–4 practices in minutes, an outdated design is often the reason “others win,” even if you are exceptionally good at what you do.</p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Does your current website look dated or fail to adapt to mobile screens? <a href="/en#contact">Request a redesign or a free analysis →</a>
      </p>

      <h2 id="no-mobile">The website is not mobile-friendly</h2>
      <p>
        Today, the majority of visits come from smartphones: if your site is hard to read or navigate on mobile, you are gifting clients to your competitors.
        <a href="https://www.jamiesdesign.com/website-design-and-marketing-blog/mobile-friendly-websites-are-important" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>jamiesdesign ↗</a>
        A website not optimized for mobile has tiny text, unclickable buttons, complex menus, and images that spill off the screen, causing frustration and instant abandonment.
        <a href="https://digichefs.com/mobile-friendly-website-design-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>digichefs ↗</a>
      </p>
      <p>The concrete consequences:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Users close the page because they can't quickly find a phone number, address, or clear info.</li>
        <li>Google penalizes non-mobile-friendly sites, lowering your practice's visibility compared to optimized competitors.
          <a href="https://webrocket.ca/mobile-first-design-why-its-essential-for-2025-and-beyond/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>webrocket ↗</a>
        </li>
      </ul>
      <p>This translates to fewer qualified visitors and, consequently, fewer requests for appointments or quotes, even if you do outstanding work.</p>

      <h2 id="no-cta">There is no clear Call to Action (CTA)</h2>
      <p>
        Many professional practice websites “tell” who you are, but don't explain clearly what the user should do next.
        If you don't explicitly invite the person to contact you – with a clear button, a simple form, a prominent “Book a Consultation” – many visitors will look around and then leave without doing anything.
        <a href="https://metrifi.com/blog/research-shows-if-you-repeat-your-call-to-action-more-people-will-convert/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>metrifi ↗</a>
      </p>
      <p>
        Behavioral research shows that pages with visible and repeated calls to action (the same invitation in multiple places on the page) significantly increase the number of people taking action.
        <a href="https://www.webless.ai/blog/the-impact-of-cta-placement-on-reducing-bounce-rates" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>webless ↗</a>
        Conversely, if the CTA is hidden in the menu or only at the very bottom, it's like having an entrance door with no handle: few will make the effort to figure out how to get in.
      </p>
      <p>Examples of CTAs that turn visits into leads:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>“Get a Free Quote”</li>
        <li>“Book an Initial Consultation”</li>
        <li>“Message me on WhatsApp to schedule an appointment”</li>
      </ul>
      <p>If these phrases don't exist, or are not highly visible, you are losing business opportunities every day without noticing.</p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        I design and develop modern, fast, and conversion-focused websites. <a href="/services">Discover my services →</a>
      </p>

      <h2 id="confusing-content">Confusing or outdated content</h2>
      <p>
        Last warning sign, but no less important: unclear, overly technical, or evidently old texts.
        If your site shows wrong hours, services you no longer offer, articles from years ago, or difficult jargon, the implicit message is: “This practice is not updated and doesn't speak my language.”
        <a href="https://growth-by-design.co.uk/content-marketing-for-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>growth-by-design ↗</a>
      </p>
      <p>What happens in practice:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>The visitor doesn't quickly understand if you are the right person for their problem.</li>
        <li>They don't find answers to key questions (costs, how it works, who it's for) and leave to find someone who explains it better.</li>
      </ul>
      <p>
        Clear, updated content written in the same words your clients use (not tech jargon!) transforms a curious visitor into someone who decides to reach out.
        <a href="https://www.nudgenow.com/blogs/effective-website-cta-examples-best-practices" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>nudgenow ↗</a>
      </p>

      <h2 id="summary-table">Summary Table: Signs, Impacts, and Solutions</h2>
      <div className="table-responsive">
        <table className="article-table">
          <thead>
            <tr>
              <th>Warning Sign</th>
              <th>Impact on Business</th>
              <th>How to Solve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--bg-color)', background: 'var(--accent-color)' }}>1. Slow Loading (&gt;3s)</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Loss of 40-50% of immediate visitors</td>
              <td>Image optimization, clean code, fast hosting, and caching.</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--bg-color)', background: 'var(--accent-color)' }}>2. Outdated Design</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Low trust, perception of poor professionalism</td>
              <td>Modern restyling, harmonious color palette, premium typography.</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--bg-color)', background: 'var(--accent-color)' }}>3. Not Mobile-Friendly</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Mobile abandonment, Google SEO penalty</td>
              <td>Fully responsive development with a mobile-first approach.</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--bg-color)', background: 'var(--accent-color)' }}>4. No Call to Action (CTA)</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Users read but do not contact you</td>
              <td>Add clear, repeated action buttons (WhatsApp, forms, contacts).</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--bg-color)', background: 'var(--accent-color)' }}>5. Confusing or Old Texts</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Lack of clarity, doubts lead client elsewhere</td>
              <td>Simple copywriting, updated hours, focus on customer benefits.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The good news is that each of these problems can be solved: by working on speed, design, mobile responsiveness, clear calls to action, and updated content, your website can become a true machine for bringing you new clients and patients.
        <a href="https://metrifi.com/blog/research-shows-if-you-repeat-your-call-to-action-more-people-will-convert/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>metrifi ↗</a>
      </p>
      <p>To check the overall health of your site and ensure you are not losing valuable visits, check out our <a href="/en/blog/checklist-sito-web-controlli-online">website launch checklist before going live</a> containing 15 essential checks.</p>

      <h2>FAQ - Frequently Asked Questions on Website Warning Signs</h2>
      <dl className="faq-list">
        <dt>How does website speed affect contact requests?</dt>
        <dd>If a site takes more than 3 seconds to load, around 40-50% of users will abandon it immediately. A delay of just one second can decrease conversion rates by up to 7%.</dd>
        
        <dt>Why does an outdated website design turn off clients?</dt>
        <dd>An outdated design unconsciously communicates neglect. Visitors associate the interface quality with the level of service, choosing competitors more aligned with professional standards.</dd>
        
        <dt>What are the risks of a non-responsive (mobile-friendly) website?</dt>
        <dd>You risk losing over half of your web traffic, which now comes from mobile devices. Additionally, Google penalizes unoptimized sites, ranking them lower in search results.</dd>
      </dl>

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
          Is your website helping you or holding you back?
        </h3>
        <p style={{ color: 'rgba(86, 124, 141, 0.9)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          If you notice one or more of these warning signs, you might be losing valuable leads every day. I can analyze your current website for free and show you how to improve it to start getting real requests.
        </p>
        <a href="/#preventivo" className="filter-chip active" style={{ 
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
          Request a free website analysis →
        </a>
      </div>
    </div>
  )
};


