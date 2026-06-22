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

export const cosaChiedereWebDesignerContrattoPostEn = {
  id: "cosa-chiedere-web-designer-contratto",
  title: "What to ask your web designer before signing a contract",
  excerpt: "Commissioning a website is an important investment: if you choose the wrong person you risk delays, unexpected extra costs, and a website that doesn't do what you need. Before signing any contract, it is fundamental to ask the right questions about references, timeline, what is included, support, and site ownership.",
  date: "May 26, 2026",
  readTime: "8 min read",
  category: "Consulting & Development",
  image: "/foto-webdesign.jpg",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is it important to define domain and hosting ownership in the contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because if they are registered under the agency or professional's name, you risk losing access to your site or having trouble switching providers later. Ensure the contract explicitly states that you are the sole owner of the domain, hosting, and all website files."
        }
      },
      {
        "@type": "Question",
        "name": "What does 'revisions included' mean in a website quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Revisions are feedback cycles where you can request tweaks to copy, colors, or images on proposed drafts. It is important to specify the exact number (e.g., 2 or 3 rounds of revisions) to prevent unexpected extra costs."
        }
      },
      {
        "@type": "Question",
        "name": "How can I protect myself if the website delivery gets heavily delayed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional contract should indicate an estimated delivery date and define the responsibilities of both parties (for example, the timeline for sending assets by the client and the designer's response times)."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        Commissioning a website is an important investment: if you choose the wrong person you risk delays, unexpected extra costs, and a website that doesn't do what you need.
        Before signing any contract, it is fundamental to ask the right questions about references, timeline, what is included, support, and site ownership.
        <a href="https://portstbd.com/questions-ask-website-designer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>portstbd ↗</a>
      </p>

      <p>This mini guide helps you avoid getting burned and recognize a truly transparent web designer (the one you actually want to work with).</p>

      <div className="article-toc">
        <div className="toc-title">Table of Contents</div>
        <ol className="toc-list">
          <li><a href="#portfolio-clienti">Can I see your portfolio and speak with some clients?</a></li>
          <li><a href="#cosa-incluso">What exactly is included in the quote (and what is not)?</a></li>
          <li><a href="#tempistiche-processo">What is the timeline and how does the process work?</a></li>
          <li><a href="#quante-revisioni">How many revisions are included?</a></li>
          <li><a href="#proprieta-sito">Who owns the domain, hosting, and website files?</a></li>
          <li><a href="#assistenza-aggiornamenti">How do support and updates work after going live?</a></li>
          <li><a href="#gestione-pagamenti">How are payments, down payments, and extra costs managed?</a></li>
          <li><a href="#piattaforma-autonomia">What platform will the website be built on and how autonomous will I be?</a></li>
          <li><a href="#performance-sicurezza">How do you ensure the site is fast, responsive, and secure?</a></li>
          <li><a href="#qualcosa-storto">What happens if something goes wrong?</a></li>
        </ol>
      </div>

      <h2 id="portfolio-clienti">Can I see your portfolio and speak with some clients?</h2>
      <p>
        The first thing to check is whether the web designer has already built websites similar to your type of business and to the quality you are looking for.
        <a href="https://cliquestudios.com/faq/how-to-choose-a-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cliquestudios ↗</a>
      </p>
      <p>Always ask for:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>The <strong>portfolio</strong> with some recent projects.</li>
        <li>If they can provide <strong>1–2 references</strong> of satisfied clients you can contact briefly.
          <a href="https://www.business.com/articles/questions-to-ask-web-developer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>business ↗</a>
        </li>
      </ul>
      <p>
        If they can't show you anything concrete or dodge the question about references, it's a red flag.
        <a href="https://www.dotcraft.agency/our-blog/how-to-choose-a-website-design-development-agency/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>dotcraft ↗</a>
      </p>

      <h2 id="cosa-incluso">What exactly is included in the quote (and what is not)?</h2>
      <p>
        Many issues arise because the client thinks "everything is included", while the web designer considers many things as extras.
        <a href="https://portstbd.com/questions-ask-website-designer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>portstbd ↗</a>
      </p>
      <p>Ask for a clear list of what is included in the price:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>How many <strong>pages</strong> are included.</li>
        <li>If the design is <strong>custom-built</strong> or template-based.
          <a href="https://designpowers.com/blog/25-questions-to-ask-your-website-designer-before-hiring" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>designpowers ↗</a>
        </li>
        <li>If <strong>texts, images, icons, stock photos</strong> are included, or if you must provide them.
          <a href="https://www.business.com/articles/questions-to-ask-web-developer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>business ↗</a>
        </li>
        <li>If <strong>basic SEO setup</strong>, Google Analytics / Search Console, contact forms, etc. are included.
          <a href="https://www.dotcraft.agency/our-blog/how-to-choose-a-website-design-development-agency/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>dotcraft ↗</a>
        </li>
      </ul>
      <p>
        Also ask what is considered <strong>out of scope</strong> (not included): it's better to clarify this immediately rather than argue later.
        <a href="https://sprintlaw.com.au/articles/web-design-contracts-protect-your-digital-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sprintlaw ↗</a>
      </p>
 
      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        Want a clear, transparent quote with all items described in detail? <a href="/#preventivo">Request a quote with no surprises →</a>
      </p>

      <h2 id="tempistiche-processo">What is the timeline and how does the process work?</h2>
      <p>
        A website is not made "tomorrow": every serious professional has a process and realistic timelines.
        <a href="https://www.orbitmedia.com/blog/5-questions-to-ask-when-choosing-a-web-design-firm/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>orbitmedia ↗</a>
      </p>
      <p>Ask:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>How long it takes, on average, to <strong>deliver a site like yours</strong> (e.g., 4, 6, 8 weeks).
          <a href="https://www.contra.agency/insights/57-questions-ask-when-choosing-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>contra ↗</a>
        </li>
        <li>What are the <strong>phases</strong> of the project (brief, graphic draft, development, testing, launch) and what happens in each one.
          <a href="https://designpowers.com/blog/25-questions-to-ask-your-website-designer-before-hiring" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>designpowers ↗</a>
        </li>
        <li>At which moments your <strong>feedback</strong> will be needed and how much time you have to reply.
          <a href="https://sprintlaw.com.au/articles/web-design-contracts-protect-your-digital-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sprintlaw ↗</a>
        </li>
      </ul>
      <p>
        The timelines should then be written in the contract, at least as an indication, with dependencies (e.g., "if assets arrive late, timelines will be extended").
        <a href="https://onesuite.io/blog/web-design-contract-template-included/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>onesuite ↗</a>
      </p>

      <h2 id="quante-revisioni">How many revisions are included?</h2>
      <p>
        Another delicate point is edits: how many you can ask for before they become an extra task to be paid separately.
        <a href="https://onesuite.io/blog/web-design-contract-template-included/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>onesuite ↗</a>
      </p>
      <p>Ask explicitly:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>How many <strong>revisions</strong> are included for design and copy.
          <a href="https://sprintlaw.com.au/articles/web-design-contracts-protect-your-digital-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sprintlaw ↗</a>
        </li>
        <li>What is considered a <strong>revision</strong> (e.g., small tweaks) versus a <strong>new request</strong> (e.g., changing the entire layout).
          <a href="https://elementor.com/blog/web-design-contract/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>elementor ↗</a>
        </li>
      </ul>
      <p>A transparent professional explains this point clearly and includes it in the contract to avoid misunderstandings.</p>

      <h2 id="proprieta-sito">Who owns the domain, hosting, and website files?</h2>
      <p>This is one of the most important points to avoid getting "stuck".</p>
      <p>Always ask:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Will the <strong>domain</strong> (e.g., yourname.com) be registered in your name?</li>
        <li>Will the <strong>hosting</strong> service be under your name or the web designer's name?</li>
        <li>At the end of the project, will you have <strong>full access</strong> (hosting panel, CMS, emails, etc.) and all necessary files?
          <a href="https://www.tagdesign.co.nz/blog-post/12-questions-to-ask-before-hiring-a-webdesigner" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>tagdesign ↗</a>
        </li>
      </ul>
      <p>
        Best practices recommend that the client owns the domain and has full access to the site, while the contract clarifies how backups, migrations, or termination of the relationship are handled.
        <a href="https://www.tagdesign.co.nz/blog-post/12-questions-to-ask-before-hiring-a-webdesigner" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>tagdesign ↗</a>
      </p>

      <h2 id="assistenza-aggiornamenti">How do support and updates work after going live?</h2>
      <p>
        A website does not end on launch day: security updates, small tweaks, and technical support are always needed.
        <a href="https://www.orbitmedia.com/blog/5-questions-to-ask-when-choosing-a-web-design-firm/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>orbitmedia ↗</a>
      </p>
      <p>Ask:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>How long is <strong>post-launch support</strong> included (e.g., 30 days, 3 months).</li>
        <li>If they offer a <strong>maintenance plan</strong> and what it covers (updates, backups, security, small edits).
          <a href="https://www.orbitmedia.com/blog/5-questions-to-ask-when-choosing-a-web-design-firm/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>orbitmedia ↗</a>
        </li>
        <li>How support is requested (email, ticket, phone) and what **response times** you can expect.
          <a href="https://cliquestudios.com/faq/how-to-choose-a-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cliquestudios ↗</a>
        </li>
      </ul>
      <p>A serious partner does not leave you alone the day after the launch and immediately clarifies the conditions and costs of support.</p>
 
      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        All my websites include 3 months of post-launch technical support and training sessions. <a href="/services">Discover my services →</a>
      </p>

      <h2 id="gestione-pagamenti">How are payments, down payments, and extra costs managed?</h2>
      <p>
        The financial part must also be clarified thoroughly and in writing.
        <a href="https://onesuite.io/blog/web-design-contract-template-included/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>onesuite ↗</a>
      </p>
      <p>Ask:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>What is the <strong>total cost</strong>, if there are <strong>deposits</strong> (e.g., 50% upfront, 50% upon delivery), and what payment methods are accepted.
          <a href="https://webflow.com/blog/web-design-contract" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>webflow ↗</a>
        </li>
        <li>How <strong>extra work</strong> is managed: hourly rate? New quote? When does it need to be approved?
          <a href="https://elementor.com/blog/web-design-contract/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>elementor ↗</a>
        </li>
        <li>If there are <strong>recurring costs</strong> (hosting, maintenance, plugin or theme licenses) and what they amount to.
          <a href="https://sprintlaw.com.au/articles/web-design-contracts-protect-your-digital-business/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>sprintlaw ↗</a>
        </li>
      </ul>
      <p>All of this avoids surprises like "I didn't know that...".</p>

      <h2 id="piattaforma-autonomia">What platform will the website be built on and how autonomous will I be?</h2>
      <p>
        Knowing what the site will be built on is important to understand how much you can manage it independently.
        <a href="https://designpowers.com/blog/25-questions-to-ask-your-website-designer-before-hiring" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>designpowers ↗</a>
      </p>
      <p>Ask:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Will the site be built on <strong>WordPress, another CMS, or a proprietary builder</strong>.</li>
        <li>Will you be able to <strong>edit texts and images</strong> on your own through a simple dashboard?
          <a href="https://designpowers.com/blog/25-questions-to-ask-your-website-designer-before-hiring" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>designpowers ↗</a>
        </li>
        <li>Is basic **training** included to teach you how to use the site (videos, call, guide)?
          <a href="https://www.orbitmedia.com/blog/5-questions-to-ask-when-choosing-a-web-design-firm/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>orbitmedia ↗</a>
        </li>
      </ul>
      <p>The goal is to avoid finding yourself with a site that requires opening a paid ticket for every small edit.</p>

      <h2 id="performance-sicurezza">How do you ensure the site is fast, responsive, and secure?</h2>
      <p>
        A good website is not just "beautiful": it must be fast, work perfectly on smartphones, and be secure.
        <a href="https://cliquestudios.com/faq/how-to-choose-a-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cliquestudios ↗</a>
      </p>
      <p>Ask in simple terms:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Will the site be <strong>responsive</strong> (optimized for smartphones and tablets)?
          <a href="https://www.business.com/articles/questions-to-ask-web-developer/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>business ↗</a>
        </li>
        <li>How do you handle <strong>performance and speed</strong> (optimized images, hosting, caching)?
          <a href="https://www.dotcraft.agency/our-blog/how-to-choose-a-website-design-development-agency/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>dotcraft ↗</a>
        </li>
        <li>What basic **security** measures are planned (HTTPS, updates, form protection, backups)?
          <a href="https://elementor.com/blog/web-design-contract/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>elementor ↗</a>
        </li>
      </ul>
      <p>The answers will help you understand if the designer also focuses on the technical side or only on aesthetics.</p>

      <h2 id="qualcosa-storto">What happens if something goes wrong?</h2>
      <p>Nobody likes to ask this, but it is important:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>What happens if the project is <strong>delayed</strong>?</li>
        <li>What if we decide to <strong>stop working together</strong> halfway through?</li>
        <li>Are there <strong>penalties</strong> or specific conditions?</li>
      </ul>
      <p>
        A well-drafted contract also covers these cases: it defines how to manage disputes and what law governs the agreement.
        <a href="https://onesuite.io/blog/web-design-contract-template-included/" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>onesuite ↗</a>
      </p>
      <p>A designer who answers these questions clearly demonstrates transparency and professionalism.</p>
 
      <h2>FAQ - Frequently Asked Questions on Web Design Contracts</h2>
      <dl className="faq-list">
        <dt>Why is it important to define domain and hosting ownership in the contract?</dt>
        <dd>Because if they are registered under the agency or professional's name, you risk losing access to your site or having trouble switching providers later. Ensure the contract explicitly states that you are the sole owner of the domain, hosting, and all website files.</dd>
        
        <dt>What does "revisions included" mean in a website quote?</dt>
        <dd>Revisions are feedback cycles where you can request tweaks to copy, colors, or images on proposed drafts. It is important to specify the exact number (e.g., 2 or 3 rounds of revisions) to prevent unexpected extra costs.</dd>
        
        <dt>How can I protect myself if the website delivery gets heavily delayed?</dt>
        <dd>A professional contract should indicate an estimated delivery date and define the responsibilities of both parties (for example, the timeline for sending assets by the client and the designer's response times).</dd>
      </dl>
 
      <h2>Positioning yourself as a partner, not a "vendor"</h2>
      <p>
        Asking these questions is not about "putting the web designer on the spot", but about understanding if they will be a **partner** who works alongside you and explains things in a understandable way.
        <a href="https://cliquestudios.com/faq/how-to-choose-a-web-design-agency" target="_blank" rel="noopener noreferrer" style={sourceLinkStyle}>cliquestudios ↗</a>
      </p>
      <p>
        A truly transparent professional will help you clarify references, times, scope, support, and site ownership themselves, so you know exactly what you are signing before you start.
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
          Want a reliable partner for your next website?
        </h3>
        <p style={{ color: 'rgba(86, 124, 141, 0.9)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          I work with maximum transparency, clear contracts, and guarantee full ownership and autonomy over your channels. Let's talk about it.
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
          Request a discovery call →
        </a>
      </div>
    </div>
  )
};


