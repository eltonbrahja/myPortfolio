import React from 'react';

export const hostingGratuitoPostEn = {
  id: "hosting-gratuito-github-vercel",
  title: "How to Deploy a Static HTML Site for Free Using Vercel and GitHub",
  excerpt: "A simple step-by-step tutorial on how to deploy your static HTML website from a GitHub repository to Vercel for free. Get your site online in 5 minutes.",
  date: "Today",
  readTime: "4 min",
  image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
  category: "Technical Guides",
  content: (
    <div className="article-body">
      <p>Paying for traditional web hosting is no longer the only route to getting a site online. Today, you can deploy your website for free using two powerful tools built for developers but accessible to everyone: <strong>GitHub</strong> and <strong>Vercel</strong>.</p>
      <p>In this guide, we will explore exactly how they work and how to leverage them together for reliable, high-performance <strong>free web hosting</strong>.</p>
      
      <nav className="article-toc">
        <h3 className="toc-title">Table of Contents</h3>
        <ol className="toc-list">
          <li><a href="#what-are">What are GitHub and Vercel?</a></li>
          <li><a href="#why-vercel">Why Choose Vercel over Traditional Hosting?</a></li>
          <li><a href="#step-1">Step 1 – Prepare Your Website Files</a></li>
          <li><a href="#step-2">Step 2 – Create a GitHub Account and Upload the Code</a></li>
          <li><a href="#step-3">Step 3 – Create a Vercel Account</a></li>
          <li><a href="#step-4">Step 4 – Import Your Repository to Vercel</a></li>
          <li><a href="#step-5">Step 5 – Automatic Deployments on Every Update</a></li>
          <li><a href="#step-6">Step 6 – Connect a Custom Domain Name</a></li>
          <li><a href="#free-tier-limits">When to Stick to the Free Tier (and When to Upgrade)</a></li>
          <li><a href="#conclusion">Conclusion: Premium Quality, Zero Cost</a></li>
        </ol>
      </nav>

      <h2 id="what-are">What are GitHub and Vercel?</h2>
      <p><strong>GitHub</strong> is a cloud platform where you store your website's source code (HTML, CSS, JavaScript files) with full version control and secure backups.</p>
      <p><strong>Vercel</strong> is a modern hosting platform that takes your code straight from GitHub and automatically deploys it to a fast, global Content Delivery Network (CDN).</p>
      <p>Combining these two tools gives you:</p>
      <ul>
        <li><strong>Free hosting</strong> (within the generous limits of Vercel's Hobby tier).</li>
        <li><strong>Automated deployments</strong>: every time you push an update to GitHub, Vercel automatically builds and publishes the new version live.</li>
        <li><strong>Incredible performance</strong> (near-instant load times globally for traditional frontends or Next.js apps).</li>
      </ul>

      <h2 id="why-vercel">Why Choose Vercel over Traditional Hosting?</h2>
      <p>Compared to classic shared hosting environments:</p>
      <ul>
        <li>You don't have to deal with manual server configurations, FTP clients, or messy cPanels: you just link your GitHub repository, and Vercel does the rest.</li>
        <li>You get a global Edge Network (CDN) included in the free tier, delivering your site from nodes closest to your users for ultra-fast load times.</li>
        <li>Every time you open a Pull Request, you get a unique Preview URL. This is fantastic for reviewing changes before they go live on production.</li>
      </ul>
      <p>The free Vercel "Hobby" tier offers plenty of bandwidth and unlimited projects—perfect for portfolios, landing pages, personal blogs, and small showcase/business websites.</p>

      <h2 id="step-1">Step 1 – Prepare Your Website Files</h2>
      <p>The starting point is your actual website code:</p>
      <ul>
        <li>If you have a static site (HTML/CSS/JS), all you need is a folder with files like <code>index.html</code>, <code>style.css</code>, and <code>script.js</code>.</li>
        <li>If you are using a modern framework (like React, Next.js, Astro, or SvelteKit), Vercel will automatically detect the framework and configure the build settings for you.</li>
      </ul>
      <p><strong>Pro-tip:</strong> keep your project organized with a clean folder structure (e.g., separating <code>src/</code> and <code>public/</code> assets) to ensure a smooth deployment process.</p>

      <h2 id="step-2">Step 2 – Create a GitHub Account and Upload the Code</h2>
      <ol>
        <li>Go to github.com and sign up for a free account.</li>
        <li>Create a new repository (a Public or Private repo works fine).</li>
        <li>Upload your website files:
          <ul>
            <li>Either manually via the "Add file → Upload files" UI.</li>
            <li>Or by using Git from your terminal (<code>git clone</code>, <code>git add</code>, <code>git commit</code>, and <code>git push</code>).</li>
          </ul>
        </li>
      </ol>
      <p>Once uploaded, your GitHub repo becomes the "source of truth": all future updates will go through here.</p>

      <h2 id="step-3">Step 3 – Create a Vercel Account</h2>
      <ol>
        <li>Head over to vercel.com and sign up using the free tier (Hobby).</li>
        <li>During registration, choose "Continue with GitHub" to link your GitHub account directly.</li>
        <li>Authorize Vercel to access your repositories so it can read your code and trigger automatic deployments.</li>
      </ol>

      <h2 id="step-4">Step 4 – Import Your Repository to Vercel</h2>
      <p>Inside your Vercel Dashboard:</p>
      <ol>
        <li>Click on "Add New Project".</li>
        <li>Select the GitHub repository where you uploaded your site.</li>
        <li>Vercel will detect your framework (e.g., standard static site or React) and apply the correct build commands.</li>
        <li>Confirm the settings (for a basic HTML site, no build command is needed; it just serves the <code>index.html</code>).</li>
        <li>Click "Deploy". Vercel will process your files and instantly distribute your site to a free domain URL like <em>yourprojectname.vercel.app</em>.</li>
      </ol>

      <h2 id="step-5">Step 5 – Automatic Deployments on Every Update</h2>
      <p>The real magic of the GitHub + Vercel workflow is automation:</p>
      <ul>
        <li>Every time you push new code to the main branch of your repo (usually <code>main</code>), Vercel instantly detects the change.</li>
        <li>It automatically runs a new build (if needed) and seamlessly updates the live website.</li>
      </ul>
      <p>This means you can completely ditch outdated FTP uploads. Just update your code, commit, push, and you're done.</p>

      <h2 id="step-6">Step 6 – Connect a Custom Domain Name</h2>
      <p>If you want a professional custom domain like <em>yourdomain.com</em> instead of the free <em>.vercel.app</em> address:</p>
      <ol>
        <li>Purchase your domain name from any registrar (Namecheap, GoDaddy, Google Domains, etc.).</li>
        <li>In your Vercel project settings, go to the "Domains" section and add it.</li>
        <li>Follow Vercel's instructions to update the DNS records (usually an A Record and a CNAME) in your registrar's dashboard.</li>
      </ol>
      <p>Vercel provides free automatic SSL certificates, ensuring your site is securely served over HTTPS at no extra cost.</p>

      <h2 id="free-tier-limits">When to Stick to the Free Tier (and When to Upgrade)</h2>
      <p>For most freelancers, developers, and small businesses, the free tier is incredibly robust:</p>
      <ul>
        <li>Unlimited projects and deployments.</li>
        <li>Generous bandwidth limits.</li>
      </ul>
      <p>You only really need to upgrade to a paid "Pro" tier if:</p>
      <ul>
        <li>Your site receives massive amounts of traffic exceeding the monthly bandwidth limits.</li>
        <li>You work in a team and need advanced collaborative features, granular access controls, or premium support.</li>
      </ul>

      <h2 id="conclusion">Conclusion: Premium Quality, Zero Cost</h2>
      <p>By leveraging GitHub and Vercel, you can:</p>
      <ul>
        <li>Get <strong>fast, secure, and modern free web hosting</strong> with global Edge CDN distribution.</li>
        <li>Automate your entire deployment process, adopting a professional workflow even as an independent developer.</li>
      </ul>
    </div>
  )
};
