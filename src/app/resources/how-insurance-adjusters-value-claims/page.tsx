import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Personal Injury in Georgia — Georgia Car Crash Guide",
  description:
    "How personal injury claims work in Georgia courts: comparative negligence, statutes of limitation, damages, and what to expect from litigation.",
  openGraph: {
    title: "Personal Injury in Georgia",
    description: "A practical guide to Georgia personal injury law.",
    url: "https://www.georgiacarcrashguide.com/resources/how-insurance-adjusters-value-claims",
  },
};

export default function HowInsuranceAdjustersValueClaims() {
  return (
    <main className="article-layout">
      <article className="article-content">
        <p className="eyebrow">Personal Injury</p>
        <h1>How Insurance Adjusters Value Injury Claims</h1>

        <p className="lead">
          Insurance companies use a formula to estimate what your claim is worth. Understanding that formula — and its blind spots — is the first step to negotiating a fair outcome.
        </p>

        <h2>The Three Numbers That Matter</h2>
        <p>
          Every injury claim valuation starts with three inputs: medical specials (your documented bills), general damages (pain, suffering, function), and lost income. Adjusters assign dollar figures to each category and apply a multiplier for severity. The result is a "settlement range" — the window they're authorized to pay within.
        </p>

        <h2>What Adjusters Do Well</h2>
        <p>
          Experienced adjusters are accurate on medical specials. Hospital bills, physical therapy records, pharmacy costs — these are line items. An adjuster can add them up and arrive at a precise number within days of receiving records.
        </p>
        <p>
          Adjusters also have strong data on past jury verdicts in your county. If a similar claim in Fulton County resulted in a $200,000 verdict three years ago, the adjuster knows it. This gives them a ceiling for settlement conversations.
        </p>

        <h2>Where Adjusters Lowball</h2>
        <p>
          <strong>Future medical needs.</strong> If your treatment is ongoing or your physician has recommended procedures that haven't happened yet, adjusters routinely discount these by 30–50%. Documentation from your treating physician is critical.
        </p>
        <p>
          <strong>Pain and suffering.</strong> General damages are the most contested category. There's no receipt for pain. Adjusters use multipliers based on severity scales, but these scales understate the reality of living with a chronic injury. Journal entries, testimony from family, and recovery diaries can push this number higher.
        </p>
        <p>
          <strong>Lost earning capacity.</strong> If you can't perform the same work you did before the injury — not just lost days, but a reduced lifetime earning trajectory — that's worth significantly more than the wages you missed last month. Adjusters often ignore this category unless presented with specific vocational evidence.
        </p>

        <h2>The Role of Comparative Fault</h2>
        <p>
          Georgia uses modified comparative negligence (O.C.G.A. § 51-12-33). If you are found to be 50% or more at fault for the accident, you recover nothing. If you're less than 50% at fault, your recovery is reduced by your percentage of fault.
        </p>
        <p>
          Adjusters apply this framework early. If there's any argument that you contributed to the accident, they'll assign you a fault percentage before opening negotiations. The strength of that argument depends heavily on the evidence: police report, witness statements, photographs, and expert analysis.
        </p>

        <h2>What This Means for Your Claim</h2>
        <ul>
          <li>Gather every medical record, not just the ER visit. Follow-up appointments, specialist visits, and therapy notes all establish the scope of injury.</li>
          <li>Get a vocational expert if your injury affects your ability to work. This is especially important for self-employed individuals or workers in physical jobs.</li>
          <li>Document your recovery. A daily journal describing pain levels, mobility limitations, and impacts on daily life creates a record that doesn't depend on medical bills alone.</li>
          <li>Don't accept the first offer. Initial offers typically reflect the adjuster's floor, not a reasonable settlement range. Respond with documentation before engaging in serious negotiations.</li>
        </ul>

        <h2>When to Bring in an Attorney</h2>
        <p>
          Most injury claims settle without litigation. But if your damages are significant (permanent disability, Surgery, lost career), the insurance company's interest and yours are directly opposed. A personal injury attorney works on contingency and only gets paid if you do — so the economics of involving counsel improve as the claim value increases.
        </p>

        <div className="disclaimer-box">
          <p><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice. This site does not create an attorney-client relationship.</p>
        </div>
      </article>

      <aside className="article-sidebar">
        <p className="sidebar-label">In this guide</p>
        <ul className="sidebar-nav">
          <li><Link href="#three-numbers">The Three Numbers</Link></li>
          <li><Link href="#what-adjusters-do-well">What Adjusters Do Well</Link></li>
          <li><Link href="#where-lowball">Where Adjusters Lowball</Link></li>
          <li><Link href="#comparative-fault">Comparative Fault</Link></li>
          <li><Link href="#your-claim">Your Claim</Link></li>
          <li><Link href="#when-attorney">When to Bring an Attorney</Link></li>
        </ul>

        <div className="sidebar-divider" />

        <p className="sidebar-label">Related guides</p>
        <ul className="sidebar-nav">
          <li><Link href="/resources/georgia-civil-litigation-stages">Stages of a Georgia Civil Case</Link></li>
          <li><Link href="/resources/expert-witnesses-georgia">Expert Witnesses in Georgia Courts</Link></li>
        </ul>

        <div className="sidebar-divider" />

        <p className="sidebar-label">Practice areas</p>
        <ul className="sidebar-nav">
          <li><Link href="/practice-areas">Personal Injury</Link></li>
          <li><Link href="/practice-areas">Wrongful Death</Link></li>
          <li><Link href="/practice-areas">Business Disputes</Link></li>
        </ul>
      </aside>
    </main>
  );
}
