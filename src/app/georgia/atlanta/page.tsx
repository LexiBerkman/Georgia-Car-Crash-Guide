import React from 'react';

export const metadata = {
  title: 'Filing in Fulton County, Georgia — Fulton County State Court Guide',
  description: 'Practical guide to filing a civil lawsuit in Fulton County State Court — jurisdiction, local rules, filing fees, and what to expect at the courthouse.',
  openGraph: {
    title: 'Filing in Fulton County, Georgia',
    description: 'A practical reference for filing civil cases in Fulton County State Court.',
    url: 'https://dominant.law/georgia/atlanta',
  },
};

export default function Atlanta() {
  return (
    <main className="container">
      <article className="article-content">
        <p className="eyebrow">Georgia Courts</p>
        <h1>Filing a Civil Case in Fulton County, Georgia</h1>

        <p className="lead">
          Fulton County State Court handles the largest volume of civil litigation in Georgia. If you are filing a personal injury, contract dispute, or other civil claim in Atlanta or surrounding areas, this guide covers what you need to know before you file.
        </p>

        <h2>Jurisdiction and Case Types</h2>
        <p>
          Fulton County State Court has jurisdiction over civil matters where the amount in controversy exceeds $15,000. Cases involving lesser amounts go to Magistrate Court. State Court also handles landlord-tenant disputes, garnishments, and certain criminal matters.
        </p>
        <p>
          For personal injury and catastrophic injury claims — the most common case type filed in Fulton — you will file in State Court if your damages exceed the Magistrate threshold. Wrongful death and professional malpractice cases also belong here.
        </p>

        <h2>Where to File</h2>
        <p>
          Fulton County Superior Court and State Court are both located at the <strong>Fulton County Courthouse</strong>:
        </p>
        <p>
          <strong>185 Central Avenue SW<br />
          Atlanta, GA 30303</strong>
        </p>
        <p>
          The Civil Division windows are on the ground floor. For State Court filings, you will use the Civil Division counter. Do not go to the Criminal Division on the upper floors — they handle separate dockets and will send you back downstairs.
        </p>

        <h2>Filing Fees</h2>
        <p>
          Fulton County State Court filing fees are set by Georgia statute and depend on the type of claim:
        </p>
        <ul>
          <li><strong>Personal injury / wrongful death:</strong> $64 filing fee plus $15-20 technology fee</li>
          <li><strong>Contract disputes:</strong> $64 filing fee plus technology fee</li>
          <li><strong>Counterclaims and third-party claims:</strong> Same as initial filing</li>
        </ul>
        <p>
          Additional costs may include service of process fees ($25-50 per defendant), sheriff's fees for out-of-county service, and costs for certified copies if you need them later.
        </p>

        <h2>Local Rules to Know</h2>
        <p>
          Fulton County State Court has its own local rules that supplement the Georgia Civil Practice Act. Key ones to be aware of before you file:
        </p>
        <h3>Rule 6.1 — Certificate of Compliance</h3>
        <p>
          Every complaint filed in Fulton County State Court must include a Certificate of Compliance confirming that the parties have met or attempted to meet before filing. This is not optional. The clerk will reject filings that omit it.
        </p>
        <h3>Rule 7.1 — ADR Referral</h3>
        <p>
          Fulton County refers most civil cases to mediation or arbitration early in the litigation process. You should expect your case to be referred to an ADR neutral within 60-90 days of filing, unless you obtain a specific exemption.
        </p>
        <h3>Rule 22 — Discovery Schedule</h3>
        <p>
          Fulton County operates with standard discovery periods tied to the case scheduling order. The court typically enters a scheduling order within 30 days of the answer being filed. Pay attention to that order — Fulton County judges enforce discovery deadlines strictly.
        </p>

        <h2>What Happens After You File</h2>
        <ol>
          <li><strong>Service of process:</strong> After filing, you must serve the defendant(s) within the time allowed by the Rules of Civil Procedure. In Georgia, you generally have 90 days to complete service. Failure to serve within this window can result in dismissal.</li>
          <li><strong>Defendant's answer:</strong> The defendant typically has 30 days to respond after being served. Watch for affirmative defenses — they matter.</li>
          <li><strong>Case scheduling:</strong> The court will issue a scheduling order that controls discovery deadlines, dispositive motion deadlines, and the trial date.</li>
          <li><strong>Discovery:</strong> Both sides exchange documents, take depositions, and obtain expert disclosures. In complex cases, this phase can take 12-18 months.</li>
        </ol>

        <h2>Jury Trials in Fulton County</h2>
        <p>
          Fulton County juries tend to be more diverse and urban in perspective than rural Georgia panels. Jury selection matters significantly here. Both sides conduct voir dire directly in Fulton County State Court — the judge does not conduct initial questioning.
        </p>
        <p>
          Jury instructions in Fulton County follow the pattern charges published by the Council of Superior Court Judges of Georgia. If you are self-represented, reviewing those pattern charges before trial gives you a sense of how the judge will frame the issues for the jury.
        </p>

        <h2>Fulton County vs. Other Metro Atlanta Venues</h2>
        <p>
          If your case arose in a neighboring county — DeKalb, Gwinnett, Cobb — you may have venue choices. Venue matters because different judges, different local rules, and different jury pools produce different outcomes even on identical facts.
        </p>
        <ul>
          <li><strong>DeKalb County:</strong> Similar volume to Fulton. Different judge bench. Slightly different local rules.</li>
          <li><strong>Gwinnett County:</strong> Larger jury pool. More suburban. Historically more conservative jury verdicts in PI cases.</li>
          <li><strong>Cobb County:</strong> Mixed urban-suburban pool. Strong commercial docket.</li>
        </ul>

        <div className="disclaimer-box">
          <p><strong>Disclaimer:</strong> This page is for informational purposes only and does not constitute legal advice. This site does not create an attorney-client relationship. If you have questions about filing in Fulton County, consult a licensed Georgia attorney.</p>
        </div>
      </article>
    </main>
  );
}
