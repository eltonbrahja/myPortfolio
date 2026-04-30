import React from 'react';

export const portfolioCloniNetflixPostEn = {
  id: "portfolio-cloni-netflix-sabotaggio",
  title: "The Netflix Clone Scam: Why Your Portfolio is Sabotaging You",
  excerpt: "Everyone builds Netflix, Spotify, or Twitter clones. Nobody gets hired. Discover why performative design and copy-paste tutorials are destroying your job prospects in 2026.",
  date: "May 2026",
  readTime: "5 min",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
  category: "Career & Development",
  content: (
    <div className="article-body">
      <p>You did it too. You spent the last three weeks following an 8-hour YouTube tutorial. You built an exact replica of the Netflix interface, complete with smooth animations, horizontal scrolling, and a fake login screen.</p>
      <p>You deployed it to Vercel, pinned it to the top of your portfolio, wrote a LinkedIn post full of rocket emojis 🚀, and waited for recruiters to knock on your door.</p>
      <p>And then... absolute silence.</p>
      <p>In 2026, the junior tech market is ruthless. But the problem isn't just saturation. The problem is that you are trying to get hired using a bait that companies have learned to hate: <strong>performative design</strong>.</p>

      <nav className="article-toc">
        <h3 className="toc-title">Table of Contents</h3>
        <ol className="toc-list">
          <li><a href="#the-problem">The Problem Isn't Code, It's Thinking</a></li>
          <li><a href="#performative-design">The Disease of "Performative Design"</a></li>
          <li><a href="#what-they-want">What Tech Leads Actually Want (Spoiler: Not Clones)</a></li>
          <li><a href="#how-to-fix">How to Build a Portfolio That Works in 2026</a></li>
          <li><a href="#conclusion">Conclusion: Kill Your Clone</a></li>
        </ol>
      </nav>

      <h2 id="the-problem">The Problem Isn't Code, It's Thinking</h2>
      <p>When a Tech Lead or a Senior Developer looks at your Spotify clone, they don't think: <em>"Wow, this candidate really knows React and Tailwind."</em></p>
      <p>They think: <em>"This candidate knows how to copy someone else's work."</em></p>
      <p>YouTube tutorials are fantastic for learning syntax. But real-world software development isn't about writing code in an isolated, perfect environment. It's about <strong>solving messy business problems</strong> with vague requirements, APIs that throw unexpected 500 errors, and clients who change their minds every two days.</p>
      <p>A clone doesn't prove you know how to manage the state of a complex application. It only proves you had the patience to copy the state management devised by a Youtuber. It misses the most important part of the job: the decision-making process.</p>

      <h2 id="performative-design">The Disease of "Performative Design"</h2>
      <p>Modern web dev is infected with what I call "performative design." Projects built exclusively to look beautiful on a screen, with absolutely zero real business logic behind them.</p>
      <p>A fake e-commerce store where every product costs $99, the cart empties when you refresh the page, and there's no admin panel. It's pretty to look at, but from an engineering perspective, it's hollow.</p>
      <p>Companies don't pay you to make pretty things (unless you are a pure UI Designer). They pay you to build things that work and generate revenue. A visually ugly shopping cart that correctly handles taxes, stacked discounts, abandoned cart recovery, and Stripe integration is worth 100 times more than a beautiful but inert Amazon clone.</p>

      <h2 id="what-they-want">What Tech Leads Actually Want (Spoiler: Not Clones)</h2>
      <p>I've spoken with dozens of hiring managers recently. Here is what they desperately want to see in your portfolio (and almost never find):</p>
      <ul>
        <li><strong>Real Authentication & Roles:</strong> Have you built an app where an "admin" sees different things than a "user"? Have you handled JWT tokens securely?</li>
        <li><strong>Error Handling:</strong> What happens in your app if the internet connection drops? Do you show an explanatory toast, or a blank screen of death?</li>
        <li><strong>Complex CRUDs:</strong> Not another To-Do list. A padel court booking app with time conflicts, cancellation rules, and email notifications.</li>
        <li><strong>Dirty API Integration:</strong> Show that you can take poorly structured data from an external API, clean it up, and render it logically.</li>
      </ul>

      <h2 id="how-to-fix">How to Build a Portfolio That Works in 2026</h2>
      <p>If you want to stand out from the endless sea of candidates with identical portfolios, here is the blueprint:</p>
      <p><strong>Solve a boring but real problem.</strong></p>
      <p>Find a frustrating task that you or someone you know has to deal with. Does your aunt run a flower shop and manage orders in a notebook? Build her an ugly but functional dashboard. Does your friend work as a personal trainer? Build them an app to track client progress.</p>
      <p>When you present this project at an interview, the conversation changes entirely. You won't be talking about "which library you used." You'll be talking about <em>"why I had to implement debouncing on the search bar because my aunt was typing too fast and crashing the free database tier."</em></p>
      <p>That single sentence proves more competence than 10 Netflix clones combined. It shows you are a problem solver, not a code typist.</p>

      <h2 id="conclusion">Conclusion: Kill Your Clone</h2>
      <p>If your portfolio is currently a museum of clones, it's time to clean house. Keep one clone at most, just to prove you have an eye for design. Then hide the rest.</p>
      <p>Replace them with a project that might be asymmetrical and ugly, but solves a painful real-world problem. Document the bugs you encountered and how you fixed them. Show your messy code, your refactoring, and your evolution.</p>
      <p>Stop trying to look like a Senior Developer by copying other people's work. Start acting like a smart Junior who knows how to tackle a problem from scratch. That is what will get you hired.</p>

      <hr />
      <p><em>Elton Brahja — Freelance web developer. Tired of copy-paste projects and want a web application tailored for your business? <a href="/en/contact">Let's talk</a>.</em></p>
    </div>
  )
};
