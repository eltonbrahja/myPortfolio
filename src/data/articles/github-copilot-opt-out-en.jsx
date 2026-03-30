import React from 'react';

export const githubCopilotOptOutPostEn = {
  id: "github-copilot-opt-out",
  title: "GitHub Copilot Is Now Using Your Code to Train AI Models — Here's How to Opt Out",
  excerpt: "Starting April 24, 2026, GitHub Copilot uses your interactions to train AI models. Find out what's changing, who's affected, and how to opt out in under 2 minutes.",
  date: "March 2026",
  readTime: "3 min",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
  category: "Technical Guides",
  content: (
    <div className="article-body">
      <p>If you use GitHub Copilot on a Free, Pro, or Pro+ plan, there's an important policy change you need to know about — and probably a setting you should update right now.</p>
      <p>Starting <strong>April 24, 2026</strong>, GitHub began using your Copilot interactions — prompts, accepted suggestions, code snippets, and surrounding context — to train its AI models, unless you explicitly opt out.</p>
      <p>In this post, I'll break down exactly what changed, who's affected, and how to disable this in two minutes.</p>

      <h2>What Changed with GitHub Copilot's New Policy</h2>
      <p>GitHub announced the update on March 25, 2026, giving users 30 days' notice before the change took effect. From April 24 onward, interaction data from Copilot Free, Pro, and Pro+ users is used to improve GitHub's internal AI models — unless you opt out.</p>
      <p>Previously, Copilot's models were trained on publicly available data and hand-curated code samples. This update introduces real-world developer interaction data into the training pipeline, using an opt-out model rather than asking for your explicit consent upfront.</p>

      <h3>What Data Gets Collected?</h3>
      <p>According to GitHub's official documentation, interaction data includes:</p>
      <ul>
        <li>Prompts and outputs from Copilot Chat conversations</li>
        <li>Code snippets generated or accepted during sessions</li>
        <li>Cursor context and repository structure</li>
        <li>File names</li>
        <li>Code navigation patterns</li>
        <li>Feedback on suggestions (thumbs up/down ratings)</li>
      </ul>
      <p>One nuance worth understanding: GitHub draws a distinction between code "at rest" in private repositories (which is <strong>not used</strong> for training) and data generated during an active Copilot session (which <strong>may be used</strong> unless you opt out). If you're using Copilot on a private project, your session interactions fall under this new policy.</p>

      <h2>Who Is Affected (and Who Isn't)</h2>
      <div className="table-responsive">
        <table className="article-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Affected by the New Policy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Copilot Free</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Copilot Pro</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Copilot Pro+</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Copilot Business</td>
              <td>❌ No (excluded by contract)</td>
            </tr>
            <tr>
              <td>Copilot Enterprise</td>
              <td>❌ No (excluded by contract)</td>
            </tr>
            <tr>
              <td>Students and teachers</td>
              <td>❌ No (excluded)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>If you previously opted out of data collection for product improvement purposes, your preference has been preserved — you don't need to do anything. Business and Enterprise users are covered by their contractual terms and are not impacted.</p>

      <h2>How to Opt Out of GitHub Copilot Data Training: Step-by-Step</h2>
      <p>The process is straightforward. Here's how to disable the use of your data for AI model training:</p>
      <ol>
        <li>Log into your account at <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a></li>
        <li>Click your <strong>profile picture</strong> in the top-right corner</li>
        <li>Select <strong>"Copilot settings"</strong></li>
        <li>Find the <strong>"Privacy"</strong> section</li>
        <li>Locate the <strong>"Allow GitHub to use my data for AI model training"</strong> option</li>
        <li>Set the dropdown to <strong>"Disabled"</strong></li>
      </ol>
      <p>The change takes effect immediately. If you have multiple GitHub accounts, make sure to repeat this for each one.</p>
      
      <blockquote>
        <p><strong>Note:</strong> If you don't see this option in your settings, you're likely signed in with a Business or Enterprise account — which isn't affected by this policy.</p>
      </blockquote>

      <h2>Is This Data Shared with Third Parties?</h2>
      <p>According to GitHub, data used for training may be shared with <strong>affiliated companies</strong>, including Microsoft — which is part of the same corporate family. GitHub explicitly states that this data is <strong>not shared</strong> with independent third-party AI providers.</p>
      <p>It's worth noting that GitHub frames this policy as consistent with practices already in place at Anthropic, JetBrains, and Microsoft. The company points to this in its FAQ as a standard industry approach.</p>

      <h2>What Does This Mean for Your Private Projects?</h2>
      <p>If you work on proprietary code or client projects on an individual plan, this distinction matters:</p>
      <ul>
        <li><strong>Source code</strong> stored in your private repository at rest is <strong>not used</strong> for training.</li>
        <li><strong>Session data</strong> generated while actively using Copilot (prompts, suggestions, context) <strong>may be collected</strong> unless you opt out.</li>
      </ul>
      <p>For teams handling sensitive code on individual plans, this is a good moment to evaluate upgrading to Business or Enterprise — both of which come with full contractual exclusions from the training pipeline.</p>

      <h2>The Bottom Line: Opt Out First, Then Decide</h2>
      <p>GitHub's new Copilot policy isn't necessarily unreasonable — real-world data does help improve AI models, and better training could lead to more accurate suggestions for everyone. But the opt-out approach puts the burden on you to protect your own privacy.</p>
      <p>The practical advice: <strong>opt out now</strong>, then make a deliberate choice about whether you want to contribute your interaction data. You can always re-enable the setting at any time.</p>
      <p>If this post helped you, share it with other developers — a lot of people may not be aware of this change yet.</p>

      <hr />
      <p><em>Elton Brahja — Freelance web developer. Questions or collaborations? <a href="/contact">Get in touch</a>.</em></p>
    </div>
  )
};
