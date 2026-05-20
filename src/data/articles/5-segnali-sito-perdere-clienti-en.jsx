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
          <li><a href="#slow-site">1. The website is slow to load</a></li>
          <li><a href="#old-design">2. The design looks 10 years old</a></li>
          <li><a href="#no-mobile">3. The website is not mobile-friendly</a></li>
          <li><a href="#no-cta">4. There is no clear Call to Action (CTA)</a></li>
          <li><a href="#confusing-content">5. Confusing or outdated content</a></li>
          <li><a href="#summary-table">Summary Table: Signs, Impacts, and Solutions</a></li>
        </ol>
      </div>

      <h2 id="slow-site">1. The website is slow to load</h2>
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

      <h2 id="old-design">2. The design looks 10 years old</h2>
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

      <h2 id="no-mobile">3. The website is not mobile-friendly</h2>
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

      <h2 id="no-cta">4. There is no clear Call to Action (CTA)</h2>
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

      <h2 id="confusing-content">5. Confusing or outdated content</h2>
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
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>1. Slow Loading (&gt;3s)</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Loss of 40-50% of immediate visitors</td>
              <td>Image optimization, clean code, fast hosting, and caching.</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>2. Outdated Design</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Low trust, perception of poor professionalism</td>
              <td>Modern restyling, harmonious color palette, premium typography.</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>3. Not Mobile-Friendly</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Mobile abandonment, Google SEO penalty</td>
              <td>Fully responsive development with a mobile-first approach.</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>4. No Call to Action (CTA)</td>
              <td style={{ color: 'rgba(239, 68, 68, 0.9)', fontWeight: '500' }}>Users read but do not contact you</td>
              <td>Add clear, repeated action buttons (WhatsApp, forms, contacts).</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>5. Confusing or Old Texts</td>
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
          Is your website helping you or holding you back?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          If you notice one or more of these warning signs, you might be losing valuable leads every day. I can analyze your current website for free and show you how to improve it to start getting real requests.
        </p>
        <a href="/#contact" className="filter-chip active" style={{ 
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
