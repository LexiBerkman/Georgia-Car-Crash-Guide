import React from "react";

export const metadata = {
  title: "Legal Disclaimer — Georgia Car Crash Guide",
  description:
    "Georgia Car Crash Guide provides educational legal information, not legal advice. This site does not create an attorney-client relationship.",
  openGraph: {
    title: "Legal Disclaimer",
    description: "Educational content only. Not legal advice.",
    url: "https://www.georgiacarcrashguide.com/contact",
  },
};

export default function Contact() {
  return (
    <main className="container">
      <article className="article-content">
        <p className="eyebrow">Disclaimer</p>
        <h1>Legal Disclaimer</h1>

        <p className="lead">
          Georgia Car Crash Guide provides educational legal information only. Nothing on this site constitutes legal advice, and using this site does not create an attorney-client relationship.
        </p>

        <h2>What This Site Is</h2>
        <p>
          This site explains Georgia car crash claim issues in plain language: crash documentation, insurance claims, comparative fault, medical proof, property damage, UM/UIM coverage, settlement demands, and lawsuit deadlines. It is intended for informational purposes for drivers, passengers, families, and members of the general public.
        </p>

        <h2>What This Site Is Not</h2>
        <p>
          This site does not provide legal advice specific to your situation. Nothing here should be construed as a recommendation to take or refrain from any legal action. Each case has unique facts, and the application of Georgia law to your specific circumstances requires analysis by a licensed attorney.
        </p>

        <h2>Finding an Attorney</h2>
        <p>
          If you have an active crash claim, serious injuries, disputed fault, or a lawsuit deadline approaching, seek a licensed Georgia attorney who handles car crash and injury matters. The State Bar of Georgia maintains a{" "}
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
