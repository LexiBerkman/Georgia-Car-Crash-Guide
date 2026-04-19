import React from 'react';

export const metadata = {
  title: 'Filing in Chatham County, Georgia — Savannah State Court Guide',
  description: 'Practical guide to filing a civil lawsuit in Chatham County — jurisdiction, local rules, filing fees, and what to expect at the Savannah courthouse.',
  openGraph: {
    title: 'Filing in Chatham County, Georgia',
    description: 'A practical reference for filing civil cases in Chatham County (Savannah), Georgia.',
    url: 'https://dominant.law/georgia/savannah',
  },
};

export default function Savannah() {
  return (
    <main className="container">
      <article className="article-content">
        <p className="eyebrow">Georgia Courts</p>
        <h1>Filing a Civil Case in Chatham County, Georgia</h1>

        <p className="lead">
          Chatham County Superior Court handles civil litigation for Savannah and the surrounding coastal Georgia region. If you are filing a personal injury, maritime-related claim, wrongful death, or other civil matter in Chatham County, this guide covers what you need to know before you file.
        </p>

        <h2>Jurisdiction and Case Types</h2>
        <p>
          Chatham County Superior Court has broad civil jurisdiction over matters arising in Chatham County. Because of Savannah's port activity and maritime economy, Chatham County sees a significant volume of maritime law claims, Jones Act cases, and waterfront injury cases that are less common elsewhere in Georgia.
        </p>
        <p>
          Personal injury and wrongful death claims against private parties, contract disputes, property damage claims, and commercial disputes all fall within Superior Court's jurisdiction. Cases below $15,000 may be filed in Chatham County State Court or Magistrate Court instead.
        </p>

        <h2>Where to File</h2>
        <p>
          Chatham County Superior Court and State Court are both housed at the Chatham County Courthouse:
        </p>
        <p>
          <strong>133 Montgomery Cross Road<br />
          Savannah, GA 31406</strong>
        </p>
        <p>
          The Clerk of Court's office handles all civil filings. Arrive before noon if possible — the Chatham County Clerk's office handles a heavy case volume and closes to new filings once daily capacity is reached, particularly on Mondays and Fridays.
        </p>

        <h2>Maritime Claims — A Special Consideration</h2>
        <p>
          If your injury occurred on navigable waters or at a maritime facility — a port, a vessel, a dock, or a shipyard — your case may be governed by federal maritime law rather than Georgia state law. This matters significantly for several reasons:
        </p>
        <ul>
          <li><strong>Jones Act claims</strong> for seamen injured in the course of employment are federal statutory claims tried in federal or state court.</li>
          <li><strong>General Maritime Law</strong> provides causes of action for wrongful death and injury that apply regardless of where the incident occurred, as long as it has a maritime nexus.</li>
          <li><strong>Limitation of Liability Act</strong> proceedings are typically filed in federal court and affect how maritime accident claims proceed.</li>
        </ul>
        <p>
          If your case has any maritime connection, the jurisdictional analysis is more complex. This guide covers state court filing procedure — maritime-specific federal procedure is a separate subject.
        </p>

        <h2>Filing Fees</h2>
        <p>
          Chatham County Superior Court filing fees follow Georgia statutory rates:
        </p>
        <ul>
          <li><strong>Personal injury / wrongful death:</strong> $64 filing fee plus technology fee</li>
          <li><strong>Contract and commercial disputes:</strong> $64 filing fee plus technology fee</li>
          <li><strong>Additional fees:</strong> Sheriff's service fees, publication costs (if defendant cannot be personally served), and costs for certified copies</li>
        </ul>

        <h2>Local Rules and Procedural Notes</h2>
        <h3>Chatham County Local Rules</h3>
        <p>
          Chatham County Superior Court has local rules that supplement the Georgia Civil Practice Act. Review them before you file — procedural defects at the outset can create problems later, particularly around service of process and certificate of compliance requirements.
        </p>
        <h3>Mediation</h3>
        <p>
          Chatham County routinely refers civil cases to mediation. Given Savannah's jury demographics and the coastal economy's influence on jury pools, mediation is often the most cost-effective path to resolution for cases under $200,000. Jury trials in Chatham County are available when mediation fails, but they are expensive and outcomes are difficult to predict.
        </p>

        <h2>What Happens After You File</h2>
        <ol>
          <li><strong>Service:</strong> Defendants must be served within 90 days. Chatham County Sheriff's office handles in-county service. For out-of-state defendants, publication or substituted service may be required.</li>
          <li><strong>Answer and defenses:</strong> The defendant has 30 days to answer. In Chatham County, watch for counterclaims and third-party claims — they are common in commercial disputes and insurance cases.</li>
          <li><strong>Scheduling order:</strong> The court issues a scheduling order controlling discovery and trial deadlines. Chatham County typically sets trial terms several months out — this is normal, not a sign of delay.</li>
          <li><strong>Discovery:</strong> Plan for 6-12 months of discovery in a typical contested civil case. Complex cases with multiple parties or expert witnesses take longer.</li>
        </ol>

        <div className="disclaimer-box">
          <p><strong>Disclaimer:</strong> This page is for informational purposes only and does not constitute legal advice. This site does not create an attorney-client relationship. If you have questions about filing in Chatham County, consult a licensed Georgia attorney.</p>
        </div>
      </article>
    </main>
  );
}
