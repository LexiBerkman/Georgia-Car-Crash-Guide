import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Georgia UM Bad Faith — When Your Own Insurer Low-Balls You",
  description:
    "How Georgia uninsured motorist law can let your own insurance company low-ball a serious crash claim, including Blazys v. McKnight and Georgia bad faith remedies.",
  openGraph: {
    title: "Georgia UM Bad Faith",
    description: "Why your own insurer may fight you after an uninsured-driver crash in Georgia.",
    url: "https://www.georgiacarcrashguide.com/resources/um-bad-faith-georgia",
    images: ["/jake-from-state-farm.jpg"],
  },
};

const sources = [
  ["Blazys v. McKnight, 377 Ga.App. 9, 921 S.E.2d 463 (Ga. Ct. App. 2025)", "https://law.justia.com/cases/georgia/court-of-appeals/2025/a25a1005.html"],
  ["State Farm Mut. Auto. Ins. Co. v. Campbell, 538 U.S. 408 (2003)", "https://supreme.justia.com/cases/federal/us/538/408/"],
  ["Campbell v. State Farm Mut. Auto. Ins. Co., 2001 UT 89, 65 P.3d 1134", "https://caselaw.findlaw.com/court/ut-supreme-court/1427326.html"],
  ["Dhyne v. State Farm Fire & Cas. Co., 188 S.W.3d 454 (Mo. banc 2006)", "https://law.justia.com/cases/missouri/supreme-court/2006/sc-87032-1.html"],
  ["Samsky v. State Farm Mut. Auto. Ins. Co., 37 Cal.App.5th 517 (2019)", "https://caselaw.findlaw.com/court/ca-court-of-appeal/2013124.html"],
  ["O.C.G.A. § 33-7-11 — Georgia Uninsured Motorist Statute", "https://law.justia.com/codes/georgia/title-33/chapter-7/section-33-7-11/"],
  ["O.C.G.A. § 9-11-68 — Georgia Offer of Settlement Statute", "https://law.justia.com/codes/georgia/title-9/chapter-11/article-8/section-9-11-68/"],
  ["O.C.G.A. § 33-4-6 — Georgia Insurance Bad Faith Statute", "https://law.justia.com/codes/georgia/title-33/chapter-4/section-33-4-6/"],
  ["Montana CSI State Farm Settlement Press Release", "https://csimt.gov/2024/02/06/commissioner-downing-announces-historic-settlement-with-state-farm-regarding-unfair-claim-settlement-practices/"],
  ["The Insurer — Court Orders State Farm to Pay $54.6 Million Over Vehicle Valuations", "https://www.theinsurer.com/ti/news/court-orders-state-farm-to-pay-546-million-over-vehicle-valuations-with-jury-2025-08-06/"],
  ["Top Class Actions — Washington State Farm Personal Injury Denial Class Action Settlement", "https://topclassactions.com/lawsuit-settlements/closed-settlements/washington-state-farm-personal-injury-denial-class-action-settlement/"],
  ["Property Insurance Coverage Law Blog — State Farm Paid McKinsey $84 Million", "https://www.propertyinsurancecoveragelaw.com/2023/01/articles/insurance/state-farm-paid-mckinsey-84-million-in-two-years/"],
  ["Jay M. Feinman, Delay, Deny, Defend", "https://global.oup.com/academic/product/delay-deny-defend-9781591843153"],
  ["State Farm 2025 Annual Report", "https://www.statefarm.com/content/dam/sf-library/en-us/secure/legacy/pdf/2025-annual-report.pdf"],
];

export default function GeorgiaUmBadFaith() {
  return (
    <main className="article-layout">
      <article className="article-content">
        <p className="eyebrow">UM / UIM Claims</p>
        <h1>Your Own Insurance Company Can Low-Ball You After a Crash</h1>
        <p className="lead">
          How a quirk of Georgia law strips injured drivers of one of their most powerful legal weapons,
          and why insurers have every financial reason to exploit it.
        </p>

        <figure className="article-hero">
          <Image
            src="/jake-from-state-farm.jpg"
            alt="Comic-style parody of an insurance adjuster towering over a crash victim and denying a claim"
            width={1122}
            height={1402}
            priority
          />
          <figcaption>Satire, yes. But the incentive problem underneath it is very real.</figcaption>
        </figure>

        <h2 id="nightmare">The Nightmare Scenario Nobody Warns You About</h2>
        <p>
          Picture this. You are sitting at a red light when someone rear-ends you at highway speed. It is not your fault.
          The other driver is cited at the scene. You are airlifted to the hospital with a fractured spine, a traumatic
          brain injury, and medical bills that start climbing toward six figures before you even leave the ICU.
        </p>
        <p>Then comes the second gut-punch: the driver who hit you has no insurance.</p>
        <p>
          This is exactly why you have been paying premiums for years on uninsured motorist coverage. Your agent told you
          it would step in and protect you if something like this ever happened. You file a claim with your own company.
          You trust them. And then your insurance company low-balls you.
        </p>
        <blockquote>
          What you may not realize is that Georgia law gives your insurance company almost no automatic financial incentive
          to treat you fairly.
        </blockquote>

        <h2 id="um-coverage">Uninsured Motorist Coverage: What It Is Supposed to Do</h2>
        <p>
          Under <a href="https://law.justia.com/codes/georgia/title-33/chapter-7/section-33-7-11/" target="_blank" rel="noopener noreferrer">O.C.G.A. § 33-7-11</a>, every automobile insurance policy issued in Georgia must include uninsured motorist coverage unless you decline it in writing. The purpose is straightforward: it should put you in roughly the same position you would have occupied if the person who hurt you had carried adequate insurance.
        </p>
        <p>
          Georgia also allows add-on UM coverage, meaning your UM limits can apply on top of whatever the at-fault
          driver&apos;s policy pays. In theory, it is a safety net that travels with you everywhere. In practice, the moment
          you make a serious UM claim, the safety net can start to feel like a negotiation with an adversary.
        </p>

        <h2 id="disappears">The Magic Trick: Your Insurance Company Disappears at Trial</h2>
        <p>
          When you file a lawsuit against an uninsured driver and serve your UM carrier, O.C.G.A. § 33-7-11(d) gives the
          insurance company a remarkable option. The insurer may litigate in its own name, or it may defend the case in
          the name of the uninsured driver who hurt you.
        </p>
        <p>
          That means the jury may never learn that the company fighting you is your own insurer. The carrier hired defense
          counsel, directs the strategy, and controls the money, but legally it can vanish behind the tortfeasor&apos;s name.
        </p>
        <blockquote>
          This is not a bug. Georgia courts have blessed it as a way to avoid injecting insurance coverage into the trial.
          The practical result is that your insurer can fight you while hiding the fact that it is your insurer.
        </blockquote>

        <h2 id="loophole">The Law That Should Help You, and the Loophole That Swallows It</h2>
        <p>
          Georgia&apos;s offer-of-settlement statute, <a href="https://law.justia.com/codes/georgia/title-9/chapter-11/article-8/section-9-11-68/" target="_blank" rel="noopener noreferrer">O.C.G.A. § 9-11-68</a>, is one of the most powerful tools in Georgia civil litigation. In an ordinary case, if a plaintiff makes a written settlement offer and later wins a verdict exceeding 125% of that offer, the defendant can owe the plaintiff&apos;s attorney&apos;s fees and litigation expenses from the date of rejection.
        </p>
        <p>
          In ordinary injury cases, that creates real pressure to evaluate claims honestly. But UM cases are different.
          A 2025 Georgia Court of Appeals decision confirmed how badly that difference cuts against injured policyholders.
        </p>

        <h2 id="blazys"><em>Blazys v. McKnight</em>: The Case That Confirmed the Problem</h2>
        <div className="case-card">
          <p className="case-name">
            <a href="https://law.justia.com/cases/georgia/court-of-appeals/2025/a25a1005.html" target="_blank" rel="noopener noreferrer">
              <em>Blazys v. McKnight</em>, 377 Ga.App. 9, 921 S.E.2d 463 (2025)
            </a>
          </p>
          <p className="case-cite">Court of Appeals of Georgia | September 26, 2025</p>
          <p>
            Injured motorists served their UM carrier with a § 9-11-68 offer. The carrier ignored it, then elected to
            proceed at trial solely in the tortfeasor&apos;s name. The jury returned a verdict more than 125% above the offer.
            The Court of Appeals held the carrier owed zero attorney&apos;s fees under § 9-11-68 because it was no longer a
            named party at the time of the verdict.
          </p>
        </div>
        <p>
          Joseph and Romaine Blazys were hit head-on by a driver named McKnight. They served their UM carrier, Allstate,
          with the lawsuit. Allstate initially answered in its own name and participated in discovery as a named party.
        </p>
        <p>
          The Blazys family made Allstate a formal § 9-11-68 offer of settlement within policy limits. Allstate did not
          respond. Before trial, Allstate elected to proceed solely in McKnight&apos;s name. The jury returned a combined
          verdict exceeding $1.55 million, vastly more than 125% of the offers Allstate had rejected.
        </p>
        <p>
          The trial court denied the fee motion. The Court of Appeals affirmed. Its reasoning was direct: § 9-11-68 applies
          to parties, and once Allstate elected to proceed only in McKnight&apos;s name, it was no longer the named defendant at
          trial.
        </p>
        <blockquote>
          The court essentially said: you are right about the policy problem, but that is what the statute says. Fix it,
          legislature.
        </blockquote>

        <h2 id="lowball">Why This Is an Open Invitation to Low-Ball</h2>
        <p>
          From the insurance company&apos;s perspective, the incentive structure explains the behavior. In a normal crash case,
          rejecting a reasonable offer can create major fee exposure. In a UM case, after <em>Blazys</em>, the carrier can
          often avoid that exposure by proceeding in the tortfeasor&apos;s name.
        </p>
        <div className="callout">
          <p className="callout-title">The UM Carrier&apos;s Financial Calculus in Georgia</p>
          <ul>
            <li><strong>Pay full value?</strong> That money is gone permanently.</li>
            <li><strong>Low-ball and the policyholder gives up?</strong> The company keeps the underpayment.</li>
            <li><strong>Policyholder fights back?</strong> Elect to proceed in the tortfeasor&apos;s name and avoid § 9-11-68 fee exposure.</li>
            <li><strong>Worst-case scenario?</strong> A harder, separate bad faith path under Georgia insurance statutes.</li>
          </ul>
        </div>
        <p>
          The result is a two-tiered system: one set of rules for ordinary defendants facing fee-shifting accountability,
          and a more forgiving set of rules for your own UM carrier when you need it most.
        </p>

        <h2 id="state-farm">State Farm: A Case Study in Calculated Low-Balling</h2>
        <p>
          No examination of UM bad faith practices would be complete without a hard look at State Farm, the largest auto
          insurer in the United States. The evidence against State Farm is not just anecdotal. It has been tested in court,
          confirmed in multiple published decisions, and acknowledged by the United States Supreme Court.
        </p>
        <p>
          Beginning in 1979, State Farm implemented what it internally called Performance, Planning and Review, or PP&amp;R.
          According to findings discussed in <em>Campbell v. State Farm</em>, the policy used the claims-adjustment process
          as a profit center. The U.S. Supreme Court later acknowledged evidence of a national scheme to meet fiscal goals
          by capping payouts company-wide.
        </p>

        <div className="stat-row">
          <div className="stat-card">
            <strong>$2.65B</strong>
            <span>State Farm surplus, 1977</span>
          </div>
          <div className="stat-card">
            <strong>$25B</strong>
            <span>State Farm surplus, 1995</span>
          </div>
          <div className="stat-card">
            <strong>$108.5B</strong>
            <span>State Farm surplus, 2025</span>
          </div>
        </div>

        <p>
          From 2006 to 2008, State Farm reportedly paid McKinsey &amp; Company $84 million for a claims-spend project known
          internally as CMSR. The project produced the Advanced Claims Excellence program, which State Farm leadership
          described as designed to cut claim expenses. In practice, cutting claim expenses means paying less on claims.
        </p>

        <div className="case-card">
          <p className="case-name"><em>Dhyne v. State Farm Fire &amp; Casualty Co.</em>, 188 S.W.3d 454 (Mo. 2006)</p>
          <p className="case-cite">Missouri Supreme Court</p>
          <p>
            State Farm told an injured policyholder her UM claim was not covered even after its own attorney had advised
            internally that coverage existed. The Missouri Supreme Court found sufficient evidence that State Farm willfully
            and without reasonable cause refused to pay the claim.
          </p>
        </div>

        <div className="case-card">
          <p className="case-name"><em>Samsky v. State Farm Mutual Automobile Insurance Co.</em>, 37 Cal.App.5th 517 (2019)</p>
          <p className="case-cite">California Court of Appeal | Bad faith settlement: $450,000</p>
          <p>
            State Farm initially offered $3,920 on a $100,000 UIM policy after the injured person had exhausted the at-fault
            driver&apos;s $15,000 coverage. The bad faith case later settled for $450,000.
          </p>
        </div>

        <div className="case-card">
          <p className="case-name">Montana CSI Settlement (February 6, 2024)</p>
          <p className="case-cite">Montana Commissioner of Securities and Insurance | Fine: $2,000,000</p>
          <p>
            After a two-year examination, State Farm agreed it had inappropriately denied payment to auto accident claimants
            and underpaid drivers in accidents with its insureds. The remediation required review of more than 2,400 claims
            and additional payments to claimants.
          </p>
        </div>

        <div className="case-card">
          <p className="case-name">Pajcic &amp; Pajcic UM Verdict (Duval County, Florida, 2015)</p>
          <p className="case-cite">Florida State Court | Jury verdict: $750,000</p>
          <p>
            A State Farm insured was stopped at a red light when struck by an uninsured driver. State Farm offered a fraction
            of the $50,000 UM policy. The plaintiff made a within-limits counteroffer. State Farm rejected it. The jury
            returned a verdict 30 times State Farm&apos;s offer, exposing the company to attorney&apos;s fees on top of the verdict.
          </p>
        </div>

        <div className="case-card">
          <p className="case-name">Washington State UIM Vehicle-Valuation Verdict (2025)</p>
          <p className="case-cite">Washington State | Jury verdict: $54.6 million</p>
          <p>
            A Washington jury ordered State Farm to pay $54.6 million over alleged systematic undervaluation of vehicles in
            UIM property-damage claims. The dispute centered on valuation methods that allegedly underpaid policyholders on
            total-loss and damage claims.
          </p>
        </div>

        <div className="case-card">
          <p className="case-name">Washington State Farm Personal Injury Denial Class Action Settlement</p>
          <p className="case-cite">Washington State | Class action settlement</p>
          <p>
            State Farm settled a Washington class action brought by policyholders who alleged the company systematically
            denied personal injury claims under their own policies. The settlement fits the broader documented pattern of
            hard first-party claim handling.
          </p>
        </div>

        <p>
          The pattern is not a string of isolated mistakes. It is what happens when a claims system rewards minimizing
          payouts and the legal structure does not create enough downside for doing it.
        </p>

        <h2 id="georgia">Georgia: The Perfect Legal Environment for Low-Balling</h2>
        <p>
          This is not exclusively a State Farm problem. The incentive structure that enables this behavior in Georgia applies
          to every UM carrier operating in the state.
        </p>
        <p>
          Georgia does have bad faith remedies. <a href="https://law.justia.com/codes/georgia/title-33/chapter-4/section-33-4-6/" target="_blank" rel="noopener noreferrer">O.C.G.A. § 33-4-6</a> provides a general first-party bad faith penalty, and <a href="https://law.justia.com/codes/georgia/title-33/chapter-7/section-33-7-11/" target="_blank" rel="noopener noreferrer">O.C.G.A. § 33-7-11(j)</a> provides a UM-specific bad faith remedy. But both are narrower, more procedurally demanding, and harder to trigger than automatic § 9-11-68 fee-shifting in an ordinary tort case.
        </p>
        <p>
          The rational financial choice for a UM insurer facing a serious claim may be to low-ball it, fight it, and absorb
          whatever verdict comes, because many claimants will never make it that far.
        </p>

        <h2 id="what-to-do">What You Can Do</h2>
        <ol>
          <li><strong>Do not assume your insurance company is on your side.</strong> In a serious UM claim, your insurer&apos;s financial interest is directly opposed to yours.</li>
          <li><strong>Document everything from the start.</strong> Every communication, offer, deadline, medical bill, and coverage position matters.</li>
          <li><strong>Know what bad faith means in Georgia.</strong> The standard is demanding and procedural details matter.</li>
          <li><strong>Understand the § 33-7-11(j) path.</strong> The UM-specific bad faith remedy may require a judgment first and a separate action later.</li>
          <li><strong>Hire a lawyer who knows this terrain.</strong> Georgia UM cases are procedurally different from ordinary crash claims.</li>
        </ol>

        <h2 id="bottom-line">The Bottom Line</h2>
        <p>
          You bought uninsured motorist coverage because you were told it would protect you if someone without insurance
          hurt you badly. In the most literal sense, that is true. But the system governing how that coverage gets paid is
          tilted against injured policyholders.
        </p>
        <p>
          In Georgia, the offer-of-settlement statute has a loophole large enough for a UM carrier to drive through it.
          Carriers can low-ball claims, elect to hide behind the tortfeasor&apos;s name at trial, and face no § 9-11-68
          fee-shifting consequences for doing so. The remedies that remain are narrower and harder to use.
        </p>
        <blockquote>
          Knowing that is not just useful information. In a serious UM claim, it may be the most important thing you know.
        </blockquote>

        <section className="sources-box">
          <h2>Cases and Statutes Cited</h2>
          <ol>
            {sources.map(([label, href]) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              </li>
            ))}
          </ol>
        </section>

        <div className="disclaimer-box">
          <p>
            <strong>Disclaimer:</strong> This article is for general informational purposes only and does not constitute legal advice.
            Laws and precedents change. If you have been injured in a crash involving an uninsured or underinsured driver,
            consult a licensed Georgia attorney about your specific rights and options.
          </p>
        </div>
      </article>

      <aside className="article-sidebar">
        <p className="sidebar-label">In this guide</p>
        <ul className="sidebar-nav">
          <li><Link href="#nightmare">The Nightmare Scenario</Link></li>
          <li><Link href="#um-coverage">UM Coverage</Link></li>
          <li><Link href="#disappears">Insurer Disappears</Link></li>
          <li><Link href="#blazys">Blazys v. McKnight</Link></li>
          <li><Link href="#state-farm">State Farm</Link></li>
          <li><Link href="#what-to-do">What You Can Do</Link></li>
        </ul>

        <div className="sidebar-divider" />

        <p className="sidebar-label">Related guides</p>
        <ul className="sidebar-nav">
          <li><Link href="/faq">Georgia Car Crash FAQ</Link></li>
          <li><Link href="/resources/how-insurance-adjusters-value-claims">Insurance Adjusters</Link></li>
          <li><Link href="/resources/demand-letter-insurance-georgia">Demand Letters</Link></li>
        </ul>
      </aside>
    </main>
  );
}
