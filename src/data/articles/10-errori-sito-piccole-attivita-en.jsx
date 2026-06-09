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

export const dieciErroriSitoPostEn = {
  id: "10-errori-sito-piccole-attivita",
  title: "10 common small business website mistakes that drive customers away",
  excerpt: "Your business website should bring you leads and inquiries, not make people leave after a few seconds. Here are the 10 most common mistakes and how to fix them.",
  date: "May 23, 2026",
  readTime: "8 min read",
  category: "UX & Conversions",
  image: "/10-errori-sito.jpg",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the most critical mistake that hurts mobile traffic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The lack of responsive design. If a site doesn't automatically adapt to smartphones and forces users to zoom in to read or struggle to tap buttons, over 50% of visitors will bounce immediately."
        }
      },
      {
        "@type": "Question",
        "name": "How can I tell if my website is too slow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can test your website with free Google tools like PageSpeed Insights. If the loading time exceeds 3 seconds, you risk losing more than half of your potential traffic before they even see your page."
        }
      },
      {
        "@type": "Question",
        "name": "What should a good Call to Action (CTA) include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An effective CTA must contain a clear, benefit-driven action verb like 'Request a Free Consultation' or 'Book a 15-Minute Call', instead of generic texts like 'Submit' or 'Click Here'."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        Your business website should bring you leads, quote requests, and store visits — not make people leave after a few seconds.
        Many small businesses, however, keep making the same mistakes: confusing layout, endless text, no call to action, hidden contacts, poor photos, zero reviews.
        <a href="https://www.relacionesinternacionales.media/historico/10-most-popular-web-design-blunders-small-companies-help-to-make" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>relacionesinternacionales ↗</a>
      </p>

      <p>Let's look at the 10 most common mistakes and how to fix them (i.e., the kind of work that truly makes a difference when you hire a professional).</p>

      <div className="article-toc">
        <div className="toc-title">Table of Contents</div>
        <ol className="toc-list">
          <li><a href="#walls-of-text">Walls of text and long paragraphs</a></li>
          <li><a href="#no-cta">No clear call to action</a></li>
          <li><a href="#hidden-contacts">Hidden or hard-to-find contacts</a></li>
          <li><a href="#poor-photos">Poor, blurry, or all-stock photos</a></li>
          <li><a href="#no-reviews">No reviews or testimonials</a></li>
          <li><a href="#confusing-nav">Confusing navigation and complicated menus</a></li>
          <li><a href="#not-mobile">Not optimized for smartphones</a></li>
          <li><a href="#slow-site">Slow loading times</a></li>
          <li><a href="#outdated-content">Outdated or unclear content</a></li>
          <li><a href="#no-security">No security or trust signals</a></li>
        </ol>
      </div>

      <h2 id="walls-of-text">Walls of text and long paragraphs</h2>
      <p>
        One of the most common mistakes is having pages full of text, all crammed together, without clear headings, short paragraphs, or bullet points.
        <a href="https://www.linkedin.com/pulse/common-website-issues-drive-customers-away-how-j7xzc" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>linkedin ↗</a>
        People read quickly online: if they can't understand in a few seconds what you do and how you can help, they close the page and go back to Google.
        <a href="https://www.youtube.com/watch?v=szG4CWQm9Og" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>youtube ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Break content into <strong>short paragraphs</strong> with clear headings and bullet points.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Put a sentence at the top that explains <strong>who you are and what you do for the client</strong> — not your company history since 1970.
          <a href="https://www.forbes.com/sites/allbusiness/2016/12/18/10-small-business-website-errors-that-drive-customers-away/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>forbes ↗</a>
        </li>
      </ul>
      <p>This is exactly the kind of editorial work (structure, headings, information order) that a professional handles to make the site read naturally.</p>

      <h2 id="no-cta">No clear call to action (CTA)</h2>
      <p>
        Many websites tell visitors who you are but never say <em>what</em> they should do next: call, fill out a form, book, request a quote.
        <a href="https://rubiagroupagency.com/next-level-edge/top-5-website-mistakes-small-businesses-make-and-how-to-fix-them" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>rubiagroupagency ↗</a>
        Without a clear CTA it's like having a shop with no checkout counter: people walk in, look around… and leave empty-handed.
        <a href="https://www.eyebreathedesign.com/post/5-common-small-business-website-mistakes-that-drive-customers-away" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>eyebreathedesign ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Add clear buttons like <strong>"Request a Quote," "Book a Consultation," "Call Now"</strong> in key sections.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Use short, benefit-oriented text ("Book your appointment," not just "Submit").
          <a href="https://www.eurodns.com/blog/common-design-mistakes-on-small-business-website" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>eurodns ↗</a>
        </li>
      </ul>
      <p>A web designer plans the user journey specifically to guide them from "just browsing" to "I'm reaching out."</p>

      <h2 id="hidden-contacts">Hidden or hard-to-find contacts</h2>
      <p>
        It sounds unbelievable, but many websites don't clearly show a phone number, email, address, or hours.
        <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        If a visitor has to search for more than a few seconds to figure out how to contact you, they often get frustrated and leave.
        <a href="https://rubiagroupagency.com/next-level-edge/top-5-website-mistakes-small-businesses-make-and-how-to-fix-them" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>rubiagroupagency ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Place <strong>phone and email</strong> clearly visible at the top and bottom of every page.
          <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        </li>
        <li>Create a simple "Contact" page with a form, details, address, and map.
          <a href="https://rubiagroupagency.com/next-level-edge/top-5-website-mistakes-small-businesses-make-and-how-to-fix-them" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>rubiagroupagency ↗</a>
        </li>
      </ul>
      <p>This is where structure and layout expertise comes in: a professional knows where to position these elements so they're always in sight.</p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Want to ensure your site's contact details are positioned correctly? <a href="/en#contact">Request a free UX analysis of your homepage →</a>
      </p>

      <h2 id="poor-photos">Poor, blurry, or all-stock photos</h2>
      <p>
        Images matter enormously for first impressions: blurry, dark, or generic stock photos (seen a thousand times) make the site feel sloppy and untrustworthy.
        <a href="https://www.relacionesinternacionales.media/historico/10-most-popular-web-design-blunders-small-companies-help-to-make" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>relacionesinternacionales ↗</a>
        People recognize when a photo is "fake" and doesn't actually represent your shop or studio.
        <a href="https://lucidrhino.design/blog/reasons-online-reviews-essential/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lucidrhino ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Use <strong>real photos</strong> of your location, team, and completed work, taken with a bit of care.
          <a href="https://lucidrhino.design/blog/reasons-online-reviews-essential/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lucidrhino ↗</a>
        </li>
        <li>If you use stock photos, do so carefully and mix them with authentic images.
          <a href="https://www.relacionesinternacionales.media/historico/10-most-popular-web-design-blunders-small-companies-help-to-make" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>relacionesinternacionales ↗</a>
        </li>
      </ul>
      <p>A web designer helps you choose and arrange photos to showcase your business rather than looking like yet another anonymous site.</p>

      <h2 id="no-reviews">No reviews or testimonials</h2>
      <p>
        Today, people trust other clients' opinions far more than your own "we're the best" claims.
        <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
        A complete lack of reviews, testimonials, or case studies on the site makes it harder to trust you, especially if you're not a well-known brand.
        <a href="https://www.forbes.com/sites/allbusiness/2016/12/18/10-small-business-website-errors-that-drive-customers-away/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>forbes ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Include <strong>short testimonials</strong> with name, business/role, and if possible, a photo.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Link to <strong>Google reviews</strong> or other platform reviews when relevant.
          <a href="https://lucidrhino.design/blog/reasons-online-reviews-essential/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lucidrhino ↗</a>
        </li>
      </ul>
      <p>A professional knows where to place these "social proof" elements to make them count at the right moment in the visitor's journey.</p>

      <h2 id="confusing-nav">Confusing navigation and complicated menus</h2>
      <p>
        If the menu is full of strange labels, endless submenus, or unclear names ("Solutions," "People," "Resources"), visitors don't know where to click and leave.
        <a href="https://www.lukefernando.dev/blog/common-website-mistakes-that-drive-customers-away" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lukefernando ↗</a>
        The rule is simple: if visitors can't find what they need in a few clicks, the site is losing clients.
        <a href="https://www.linkedin.com/pulse/common-website-issues-drive-customers-away-how-j7xzc" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>linkedin ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Use a <strong>simple menu</strong> with intuitive labels: "Services," "About," "Contact," "Blog," etc.
          <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        </li>
        <li>Group pages well and don't create 20 different items in the main navigation bar.
          <a href="https://www.eurodns.com/blog/common-design-mistakes-on-small-business-website" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>eurodns ↗</a>
        </li>
      </ul>
      <p>Information architecture is a core part of a web designer's work and truly makes a difference in user experience.</p>

      <h2 id="not-mobile">Not optimized for smartphones</h2>
      <p>
        Over half of web traffic comes from mobile: if your site is hard to use on a smartphone, with tiny text and impossible-to-tap buttons, you're losing a huge chunk of potential clients.
        <a href="https://www.lukefernando.dev/blog/common-website-mistakes-that-drive-customers-away" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lukefernando ↗</a>
        Multiple studies show that a non-mobile-friendly site significantly increases bounce rates and hurts your Google rankings too.
        <a href="https://www.forbes.com/sites/allbusiness/2016/12/18/10-small-business-website-errors-that-drive-customers-away/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>forbes ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Use a <strong>responsive design</strong> that automatically adapts to different screen sizes.
          <a href="https://www.lukefernando.dev/blog/common-website-mistakes-that-drive-customers-away" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>lukefernando ↗</a>
        </li>
        <li>Test the site on various phones and make buttons and text easily tappable.
          <a href="https://www.linkedin.com/pulse/common-website-issues-drive-customers-away-how-j7xzc" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>linkedin ↗</a>
        </li>
      </ul>
      <p>Here, the difference between a thrown-together theme and a serious project is immediately obvious when you open the site on your phone.</p>

      <h2 id="slow-site">Slow loading times</h2>
      <p>
        If the site takes more than 3 seconds to load, many people close the page before even seeing who you are.
        <a href="https://www.reddit.com/r/smallbusiness/comments/1pli5m0/small_business_owners_5_website_mistakes_that_are/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>reddit ↗</a>
        Speed affects both conversions (how many contact you) and SEO (how much Google shows you).
        <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Optimize images (size and format), avoid unnecessary plugins, and choose <strong>decent hosting</strong>.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Run regular checks with tools like PageSpeed or similar.
          <a href="https://www.linkedin.com/pulse/common-website-issues-drive-customers-away-how-j7xzc" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>linkedin ↗</a>
        </li>
      </ul>
      <p>A professional doesn't just focus on aesthetics — they also work "under the hood" to make the site fast and lean.</p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        The websites I build are optimized to load in under 2 seconds and meet Core Web Vitals. <a href="/services">Discover my development services →</a>
      </p>

      <h2 id="outdated-content">Outdated or unclear content</h2>
      <p>
        Blog posts from years ago, outdated services, wrong hours: all of this gives the impression of a stagnant or careless business.
        <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        Vague or self-referential content ("we're leaders, we're the best") doesn't help clients figure out if you're the right person for their problem.
        <a href="https://www.reddit.com/r/smallbusiness/comments/1pli5m0/small_business_owners_5_website_mistakes_that_are/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>reddit ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Update at least the key pages (services, hours, contacts, about) whenever something changes.
          <a href="https://www.pinelogic.ca/website-mistakes-small-businesses/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>pinelogic ↗</a>
        </li>
        <li>Write from the client's perspective: <strong>what do they want to know?</strong>, not just what you want to say.
          <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
        </li>
      </ul>
      <p>In professional work, periodic content reviews and tone-of-voice care are what keep a site "alive" and credible.</p>

      <h2 id="no-security">No security or trust signals</h2>
      <p>
        Sites without https (padlock), without privacy/cookie policies, or with unclear contact forms raise doubts about the business's seriousness.
        <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
        If trust elements are completely missing (reviews, partner logos, certifications, team photos), many people hesitate to share their data or make a purchase.
        <a href="https://www.reddit.com/r/smallbusiness/comments/1pli5m0/small_business_owners_5_website_mistakes_that_are/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>reddit ↗</a>
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Make sure the site has an <strong>SSL certificate</strong> (https) and at least basic legal pages.
          <a href="https://www.iubenda.com/en/blog/website-mistakes/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>iubenda ↗</a>
        </li>
        <li>Show <strong>trust signals</strong>: testimonials, logos, years in business, real photos, complete contact details.
          <a href="https://rubiagroupagency.com/next-level-edge/top-5-website-mistakes-small-businesses-make-and-how-to-fix-them" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>rubiagroupagency ↗</a>
        </li>
      </ul>
      <p>A serious web designer works alongside — when needed — legal/technical consultants to set up a site that not only works but is also trustworthy.</p>

      <h2>Why these mistakes show the value of professional work</h2>
      <p>
        Each of these 10 mistakes alone can drive away a portion of visitors; combined, they explain why so many websites "don't bring anything."
        <a href="https://www.relacionesinternacionales.media/historico/10-most-popular-web-design-blunders-small-companies-help-to-make" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>relacionesinternacionales ↗</a>
        Fixing them means addressing content, structure, design, performance, SEO, and trust: exactly the areas a professional considers when building or rebuilding a site for a small business.
        <a href="https://vecto.digital/blog/top-reasons-why-website-is-important-for-business-in-2025/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>vecto ↗</a>
      </p>
      <p>In practice: you're not just paying for "the design," but for a set of thoughtful choices designed to make sure that whoever lands on the site <strong>stays, understands, and contacts you</strong> — instead of bouncing after a few seconds.</p>
      <p>To make sure your website is 100% ready under every aspect, check out our <a href="/en/blog/checklist-sito-web-controlli-online">website launch checklist with 15 essential steps before going live</a>.</p>

      <h2>FAQ - Frequently Asked Questions on Website Mistakes</h2>
      <dl className="faq-list">
        <dt>What is the most critical mistake that hurts mobile traffic?</dt>
        <dd>The lack of responsive design. If a site doesn't automatically adapt to smartphones and forces users to zoom in to read or struggle to tap buttons, over 50% of visitors will bounce immediately.</dd>
        
        <dt>How can I tell if my website is too slow?</dt>
        <dd>You can test your website with free Google tools like PageSpeed Insights. If the loading time exceeds 3 seconds, you risk losing more than half of your potential traffic before they even see your page.</dd>
        
        <dt>What should a good Call to Action (CTA) include?</dt>
        <dd>An effective CTA must contain a clear, benefit-driven action verb like "Request a Free Consultation" or "Book a 15-Minute Call", instead of generic texts like "Submit" or "Click Here".</dd>
      </dl>

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
          Is your website making any of these mistakes?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          I can do a free analysis of your website and tell you exactly what to improve so you stop losing clients. No strings attached.
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
