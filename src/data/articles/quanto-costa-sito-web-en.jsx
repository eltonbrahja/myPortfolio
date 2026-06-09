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

export const quantoCostaSitoWebPostEn = {
  id: "quanto-costa-sito-web",
  title: "How much does a professional website really cost in 2026 (and what it includes)",
  excerpt: "The honest answer is: there is no fixed price, just as there is no single price for a 'car', because it all depends on what you really need.",
  date: "May 20, 2026",
  readTime: "5 min read",
  category: "Web Design",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is there such a big price difference between website quotes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The difference depends on the level of customization, the user experience (UX) design, professional copywriting, and SEO work. Cheaper quotes often use pre-made templates and omit these critical services."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden costs I should be aware of?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs that are often excluded from basic quotes include copywriting, professional photography/graphics, periodic technical maintenance (security updates), and ongoing SEO optimization. It is crucial to ask what is excluded before signing."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to maintain a website after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recurring yearly costs include the domain (€10-€20) and hosting (€80-€300 for showcase sites). You should also consider a technical maintenance plan for updates and security, which typically ranges from €300 to €1500 per year."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        "How much does a website cost?" is one of the first questions I get when speaking with entrepreneurs and professionals.
        The honest answer is: there is no fixed price, just as there is no single price for a “car”, because it all depends on what you really need.
        <a href="https://ivemind.com/it/blog/quanto-costa-sito-web-piccola-impresa/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>ivemind ↗</a>
      </p>

      <div className="article-toc">
        <div className="toc-title">Table of Contents</div>
        <ol className="toc-list">
          <li><a href="#why-no-single-price">Why there is no single price</a></li>
          <li><a href="#price-ranges">Realistic price ranges in 2026</a></li>
          <li><a href="#what-is-included">What is (almost always) included in the initial price</a></li>
          <li><a href="#what-is-not-included">What is often NOT included (or paid separately)</a></li>
          <li><a href="#maintenance-costs">How much it costs to maintain a website each year</a></li>
          <li><a href="#how-to-read-quote">How to read a quote without getting scammed</a></li>
        </ol>
      </div>

      <h2 id="why-no-single-price">Why there is no single price</h2>
      <p>
        The cost of a professional website is the sum of multiple elements: graphic design, technical development, number of pages, features (blog, bookings, e-commerce), content, SEO, and ongoing maintenance.
        <a href="https://www.formazioneprofessionista.it/it/post/professioni/quanto-costa-far-realizzare-un-sito-internet" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>formazioneprofessionista ↗</a>
        For a small business or professional studio, the biggest price difference usually depends on two factors: how many things you want the site to do (a simple showcase or a "lead generation machine") and how customized you want it to be to your brand.
        <a href="https://makeroni.it/quanto-costa-un-sito-web-nel-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>makeroni ↗</a>
      </p>

      <h2 id="price-ranges">Realistic price ranges in 2026</h2>
      <p>Here we refer to professional websites built by freelancers or small agencies, not "do-it-yourself" builders.</p>

      <div className="table-responsive">
        <table className="article-table">
          <thead>
            <tr>
              <th>Type of Website</th>
              <th>Price Range</th>
              <th>What it usually includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Landing page / One-page</td>
              <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>€400 - €800</td>
              <td>
                A long page (benefits, about, contact), responsive, contact form.
                <a href="https://ivemind.com/it/blog/quanto-costa-sito-web-piccola-impresa/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>ivemind ↗</a>
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Showcase Site (5-10 pages)</td>
              <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>€700 - €3,000</td>
              <td>
                Home, About, Services, Contact. Domain setup, responsive design, basic email.
                <a href="https://acupofweb.it/siti-web-vetrina/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>acupofweb ↗</a>
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Corporate Site (with blog)</td>
              <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>€2,500 - €8,000</td>
              <td>
                15-30 pages, custom design, UX, blog, lead generation, initial SEO optimization.
                <a href="https://makeroni.it/quanto-costa-un-sito-web-nel-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>makeroni ↗</a>
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>E-commerce</td>
              <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>€3,000 - €15,000+</td>
              <td>
                Catalog, cart, checkout, payments, shipping configuration.
                <a href="https://www.hangler.it/en/post/how-much-does-a-website-cost-complete-list-of-expenses-and-maintenance" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>hangler ↗</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Need to understand which price range fits your project? <a href="/en/#contact">Request a personalized analysis and quote for your website →</a>
      </p>

      <h2 id="what-is-included">What is (almost always) included in the initial price</h2>
      <p>In a serious quote for a professional website, you'll find at least these elements:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Graphic design and UX:</strong> study of the page structure, layout, color palette, typography, etc. <a href="https://www.hangler.it/en/post/how-much-does-a-website-cost-complete-list-of-expenses-and-maintenance" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>hangler ↗</a></li>
        <li><strong>Technical development:</strong> building the site on a CMS (like WordPress) or other system, installing necessary themes/plugins. <a href="https://www.cssfounder.com/blogs/the-price-of-a-website-in-italy-can-vary-significantly-depending-on-a-number-of-variables-including-the-websites-size-and-complexity-the-services-provided-such-as-design-development-hosting-an/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cssfounder ↗</a></li>
        <li><strong>Responsive design:</strong> the site must work and look good on smartphones, tablets, and desktops. <a href="https://venetocomunicazione.it/quanto-costa-creare-un-sito-web-nel-2024/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>venetocomunicazione ↗</a></li>
        <li><strong>Domain and hosting setup:</strong> initial configuration of the domain (e.g., yourname.com) and uploading the site to the server. <a href="https://www.lvdesign.it/web-agency-blog/quanto-costa-un-sito-web-nel-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lvdesign ↗</a></li>
        <li><strong>Basic on-page SEO settings:</strong> page titles, meta descriptions, correct heading structure, clean URLs, favicon, etc. <a href="https://www.hangler.it/en/post/how-much-does-a-website-cost-complete-list-of-expenses-and-maintenance" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>hangler ↗</a></li>
        <li><strong>Contact form and basic protections:</strong> working contact form, main legal pages, anti-spam integration. <a href="https://www.formazioneprofessionista.it/it/post/professioni/quanto-costa-far-realizzare-un-sito-internet" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>formazioneprofessionista ↗</a></li>
      </ul>

      <h2 id="what-is-not-included">What is often NOT included (or paid separately)</h2>
      <p>This is where many quotes are misleading: the paper says "complete website", but fundamental pieces are missing.</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Professional texts (copywriting):</strong> many quotes do not include writing the texts; the client must provide them or pay for them separately. <a href="https://ivemind.com/it/blog/quanto-costa-sito-web-piccola-impresa/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>ivemind ↗</a></li>
        <li><strong>Photos and multimedia content:</strong> photoshoots, videos, custom illustrations are usually not included. <a href="https://www.hangler.it/en/post/how-much-does-a-website-cost-complete-list-of-expenses-and-maintenance" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>hangler ↗</a></li>
        <li><strong>Ongoing SEO and positioning:</strong> a true SEO strategy (keyword analysis, monthly content, link building) is a separate service. <a href="https://elementor.com/blog/how-much-does-a-small-business-website-cost/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>elementor ↗</a></li>
        <li><strong>Social media management and ad campaigns:</strong> posts on Facebook/Instagram, Google Ads, Meta Ads, etc. are not part of the "website only". <a href="https://www.hangler.it/en/post/how-much-does-a-website-cost-complete-list-of-expenses-and-maintenance" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>hangler ↗</a></li>
        <li><strong>Extra advanced features:</strong> restricted areas, integrations with ERPs, CRMs, complex booking systems. <a href="https://makeroni.it/quanto-costa-un-sito-web-nel-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>makeroni ↗</a></li>
      </ul>
      <p>When comparing two quotes, always ask what is included and what is not, especially regarding texts, photos, SEO, and maintenance.</p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Want to create copy that attracts clients and ranks your site on Google? <a href="/en/services">Discover my Copywriting and SEO service →</a>
      </p>

      <h2 id="maintenance-costs">How much it costs to maintain a website each year</h2>
      <p>Besides the creation cost, there are recurring costs to keep the site online and updated.</p>
      <div className="table-responsive">
        <table className="article-table">
          <thead>
            <tr>
              <th>Expense Item</th>
              <th>Average Annual Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}><strong>Domain</strong> (e.g., .com or .it)</td>
              <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>
                €10 - €20
                <a href="https://ivemind.com/en/blog/how-much-does-a-website-cost-small-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>ivemind ↗</a>
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}><strong>Hosting</strong> (Showcase site - E-commerce)</td>
              <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>
                €80 - €1,000
                <a href="https://www.sferica.io/quanto-costa-un-sito-web-vetrina/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sferica ↗</a>
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}><strong>Technical maintenance</strong> (updates, backups, security)</td>
              <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>
                €300 - €1,700
                <a href="https://ivemind.com/en/blog/how-much-does-a-website-cost-small-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>ivemind ↗</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Many professionals offer annual packages that include assistance, updates, and small changes, so you don't have to "worry about the technical part" every month. <a href="https://www.sferica.io/quanto-costa-un-sito-web-vetrina/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sferica ↗</a></p>

      <h2 id="how-to-read-quote">How to read a quote without getting scammed</h2>
      <p>When you receive a quote for the site, instead of stopping only at the final number, check:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>How many pages are included</strong> and if there is a cost for any extra pages. <a href="https://www.formazioneprofessionista.it/it/post/professioni/quanto-costa-far-realizzare-un-sito-internet" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>formazioneprofessionista ↗</a></li>
        <li><strong>What type of design is proposed:</strong> slightly adapted template or custom graphic project. <a href="https://acupofweb.it/siti-web-vetrina/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>acupofweb ↗</a></li>
        <li><strong>What is included in terms of SEO and performance:</strong> only technical basis or also content strategy. <a href="https://ivemind.com/it/blog/quanto-costa-sito-web-piccola-impresa/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>ivemind ↗</a></li>
        <li><strong>Who owns the domain and hosting:</strong> ideally they should be registered to you or at least remain under your control. <a href="https://www.lvdesign.it/web-agency-blog/quanto-costa-un-sito-web-nel-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lvdesign ↗</a></li>
        <li><strong>If maintenance is included and for how long</strong> (e.g., 1-3 months after launch) or if there is a clear annual fee. <a href="https://www.formazioneprofessionista.it/it/post/professioni/quanto-costa-far-realizzare-un-sito-internet" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>formazioneprofessionista ↗</a></li>
      </ul>
      <p>A higher but clear and complete quote is often more cost-effective in the medium term than a "low cost" one full of hidden limits.</p>

      <h2>FAQ - Frequently Asked Questions about Website Costs</h2>
      <dl className="faq-list">
        <dt>Why is there such a big price difference between website quotes?</dt>
        <dd>The difference depends on the level of customization, the user experience (UX) design, professional copywriting, and SEO work. Cheaper quotes often use pre-made templates and omit these critical services.</dd>
        
        <dt>Are there any hidden costs I should be aware of?</dt>
        <dd>Costs that are often excluded from basic quotes include copywriting, professional photography/graphics, periodic technical maintenance (security updates), and ongoing SEO optimization. It is crucial to ask what is excluded before signing.</dd>
        
        <dt>How much does it cost to maintain a website after launch?</dt>
        <dd>Recurring yearly costs include the domain (€10-€20) and hosting (€80-€300 for showcase sites). You should also consider a technical maintenance plan for updates and security, which typically ranges from €300 to €1500 per year.</dd>
      </dl>

      <h2>And now: how much will YOUR website cost?</h2>
      <p>
        All the figures you've read here are realistic ranges for 2026, but every business is a story in itself.
        <a href="https://makeroni.it/quanto-costa-un-sito-web-nel-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>makeroni ↗</a>
        The best way to get an accurate number is to briefly tell me who you are, what kind of clients you want to attract, and what you need the site to do.
        <a href="https://growth-by-design.co.uk/content-marketing-for-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>growth-by-design.co ↗</a>
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
        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#fff', marginTop: 0 }}>Ready for your new website?</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          I can analyze your situation and prepare a clear quote with no surprises, explaining what is included and what is not.
        </p>
        <a href="/en/#contact" className="filter-chip active" style={{ 
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
          Request a free quote →
        </a>
      </div>
    </div>
  )
};
