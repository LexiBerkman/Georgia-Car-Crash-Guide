import React from "react";

export const metadata = {
  title: "Legal Disclaimer — Georgia Law Guide",
  description:
    "Georgia Law Guide provides educational legal information, not legal advice. This site does not create an attorney-client relationship.",
  openGraph: {
    title: "Legal Disclaimer",
    description: "Educational content only. Not legal advice.",
    url: "https://dominant.law/contact",
  },
};

export default function Contact() {
  return (
    <main className="container">
      <article className="article-content">
        <p className="eyebrow">Disclaimer</p>
        <h1>Legal Disclaimer</h1>

        <p className="lead">
          Georgia Law Guide provides educational legal information only. Nothing on this site constitutes legal advice, and using this site does not create an attorney-client relationship.
        </p>

        <h2>What This Site Is</h2>
        <p>
          This site explains how Georgia civil law works in plain language: statutes of limitation, comparative negligence rules, discovery process, expert witness requirements, and litigation stages. It is intended for informational purposes for plaintiffs, self-represented litigants, and members of the general public who want to understand the legal system before engaging counsel.
        </p>

        <h2>What This Site Is Not</h2>
        <p>
          This site does not provide legal advice specific to your situation. Nothing here should be construed as a recommendation to take or refrain from any legal action. Each case has unique facts, and the application of Georgia law to your specific circumstances requires analysis by a licensed attorney.
        </p>

        <h2>Finding an Attorney</h2>
        <p>
          If you have an active legal matter, we recommend seeking a licensed Georgia attorney who practices in the relevant area of civil law. The State Bar of Georgia maintains a{" "}
          <a href="https://www.gabar.org" target="_blank" rel="noopener noreferrer">
            attorney referral directory
          </a>
          .
        </p>

        <h2>Accuracy</h2>
        <p>
          While we make reasonable efforts to ensure the legal information on this site is accurate and up to date, Georgia law changes and individual circumstances vary. This site should be used as a starting point for understanding the legal landscape, not as a substitute for professional legal counsel.
        </p>

        <p>
          <em>
            Last updated: April 2026. For current legal guidance, consult a licensed Georgia attorney.
          </em>
        </p>
      </article>
    </main>
  );
}
