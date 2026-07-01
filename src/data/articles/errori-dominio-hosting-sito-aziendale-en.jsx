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

export const erroriDominioHostingPostEn = {
  id: "errori-dominio-hosting-sito-aziendale",
  title: "Mistakes to avoid when choosing a domain and hosting for your business website",
  excerpt: "Choosing the wrong domain name or hosting can compromise the performance, SEO, and professionalism of your website. Here are the most common mistakes and how to avoid them.",
  date: "July 1, 2026",
  readTime: "6 min read",
  category: "Tech & Performance",
  image: "/fotogodaddy.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why does a slow hosting hurt the SEO of a business website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google penalizes slow websites. If your hosting is not optimized, pages will take too long to load, increasing the bounce rate and losing positions in search results."
        }
      },
      {
        "@type": "Question",
        "name": "Is it okay to use a @gmail.com email address for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, using a generic email like @gmail.com instead of a professional one (e.g., info@yourdomain.com) looks unprofessional and can make your business appear less trustworthy to customers."
        }
      },
      {
        "@type": "Question",
        "name": "Who should the website domain be registered to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The domain must always be registered to you or your company. If you register it to the web agency or the professional who builds the site, you risk not having legal control over your online identity."
        }
      }
    ]
  },
  content: (
    <div className="article-body">
      <p>
        The creation of a business website starts long before design and copywriting: it begins with the technical foundations, namely the choice of the <strong>domain</strong> and <strong>hosting</strong>.
      </p>
      <p>
        Unfortunately, many small businesses underestimate these decisions to save a few tens of euros a year, ending up with websites that are invisible on Google, slow to load, and convey a lack of professionalism.
      </p>

      <div className="article-toc">
        <div className="toc-title">Table of Contents</div>
        <ol className="toc-list">
          <li><a href="#weird-extensions">1. Choosing weird domain extensions or names that are too long</a></li>
          <li><a href="#slow-hosting">2. Skimping on hosting (and destroying SEO)</a></li>
          <li><a href="#gmail-email">3. Using Gmail or Yahoo email instead of a business domain</a></li>
          <li><a href="#domain-ownership">4. Not registering the domain in your own name</a></li>
          <li><a href="#no-ssl">5. Not having an SSL certificate (https)</a></li>
        </ol>
      </div>

      <h2 id="weird-extensions">1. Choosing weird domain extensions or names that are too long</h2>
      <p>
        The domain name is your internet address (e.g., <em>yourname.com</em>). A common mistake is choosing kilometer-long names, hard to pronounce, or full of hyphens just because the main option was taken.
      </p>
      <p>
        Even worse is being attracted by <strong>fancy extensions</strong> like <em>.biz</em>, <em>.info</em>, or <em>.site</em> instead of the classic <strong>.com</strong> or your country's ccTLD. People are used to standard extensions and will likely misstype the address if you use unusual ones.
      </p>
      <p>How to avoid it:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Aim for a <strong>short, easy-to-type, and memorable</strong> domain.</li>
        <li>Avoid hyphens (<em>my-business-site.com</em>) if possible.</li>
        <li>Always use <strong>.com</strong> or your local standard extension.</li>
      </ul>

      <h2 id="slow-hosting">2. Skimping on hosting (and destroying SEO)</h2>
      <p>
        Hosting is the physical space on servers where your website's files reside. Often, the cheapest option on the market is chosen, without thinking about the consequences.
      </p>
      <p>
        Low-quality hosting means <strong>slow and overloaded servers</strong>. This is a huge problem for two reasons:
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>UX (User Experience):</strong> If the site takes more than 3 seconds to load, visitors leave before even reading what you offer.</li>
        <li><strong>SEO:</strong> Google severely penalizes slow sites. Loading performance (Core Web Vitals) is a critical ranking factor. Cheap hosting can zero out your organic traffic.</li>
      </ul>
      <p>
        Investing in high-performance and reliable hosting is the first step to a good <a href="/en/blog/seo-locale-google-maps">local SEO</a> strategy.
      </p>

      <h2 id="gmail-email">3. Using Gmail or Yahoo email instead of a business domain</h2>
      <p>
        You've just registered your beautiful business domain, let's say <em>johndoe.com</em>, and then in the contact section or on your business cards you write <em>johndoe.plumber@gmail.com</em>.
      </p>
      <p>
        This immediately lowers the perceived value of your business. A professional email address (e.g., <em>info@johndoe.com</em> or <em>john@johndoe.com</em>) conveys much more trust, reliability, and structure than a free account.
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '20px', borderLeft: '3px solid var(--accent-color)', paddingLeft: '16px' }}>
        All the <a href="/en/services">professional websites I build</a> include the setup of business emails linked to your domain, to give you a credible image right away.
      </p>

      <h2 id="domain-ownership">4. Not registering the domain in your own name</h2>
      <p>
        This is a bureaucratic but very frequent mistake. When you entrust the creation of the site to an agency or a professional, make sure the domain is registered <strong>in your name or your company's name</strong> (as the Registrant).
      </p>
      <p>
        If the professional registers it to themselves, technically they are the legal owner of your name on the internet. If relationships sour or the professional disappears, you risk losing access to the domain and the entire positioning built over the years.
      </p>

      <h2 id="no-ssl">5. Not having an SSL certificate (https)</h2>
      <p>
        Have you ever seen the "Not Secure" warning next to the web address at the top of the browser? It means the site lacks an SSL certificate (which changes the address from <em>http://</em> to <em>https://</em>).
      </p>
      <p>
        Without this certificate, the data exchanged between the user and the site is not encrypted. This terrifies users (especially if there's a contact form) and Google heavily penalizes pages without SSL. Today, quality hosting offers a basic SSL certificate automatically and for free.
      </p>

      <h2>Start your website on the right foot</h2>
      <p>
        Choosing the right hosting and correctly configuring the domain is the invisible foundation upon which the entire online success of your business rests. Don't leave these choices to chance or to save a few dollars a month.
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
          Do you want a fast, secure business website ready to convert?
        </h3>
        <p style={{ color: 'rgba(86, 124, 141, 0.9)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          I handle everything: from choosing high-performance hosting to putting the SEO-optimized site online.
        </p>
        <a href="/en/#preventivo" className="filter-chip active" style={{ 
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
          Request a free consultation →
        </a>
      </div>
    </div>
  )
};
