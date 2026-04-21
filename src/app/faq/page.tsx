import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Georgia Car Crash FAQ — Insurance, Fault, Deadlines, Medical Bills",
  description:
    "Answers to common Georgia car crash questions about police reports, medical care, recorded statements, fault, deadlines, UM/UIM, repairs, and settlement.",
  openGraph: {
    title: "Georgia Car Crash FAQ",
    description: "Georgia wreck questions answered in plain language.",
    url: "https://www.georgiacarcrashguide.com/faq",
  },
};

const faqGroups = [
  {
    category: "First Steps",
    items: [
      {
        q: "What should I do first after a Georgia car crash?",
        a: "Call 911, check for injuries, move to safety if you can, exchange information, photograph the vehicles and scene, get witness names, seek medical care, and report the crash to your insurer. Keep the crash report number and every claim number you receive.",
      },
      {
        q: "Should I go to the doctor if I feel sore but not seriously hurt?",
        a: "Yes, if you have pain, stiffness, dizziness, numbness, or symptoms that develop after the collision. Delayed treatment gives insurers an argument that the wreck did not cause the injury. Medical records also create the timeline that connects symptoms to the crash.",
      },
      {
        q: "How do I get the police report?",
        a: "The responding agency or Georgia's crash report system can provide it after processing. The report is not the whole case, but it usually contains driver information, insurance details, location, citations, witness notes, and a diagram.",
      },
    ],
  },
  {
    category: "Fault and Deadlines",
    items: [
      {
        q: "How does fault work in Georgia car crash claims?",
        a: "Georgia uses modified comparative fault. If you are less than 50% at fault, damages can be reduced by your percentage of fault. If you are 50% or more at fault, recovery can be barred under O.C.G.A. § 51-12-33.",
      },
      {
        q: "How long do I have to file a Georgia car crash injury lawsuit?",
        a: "Most Georgia personal injury actions must be filed within two years after the injury claim accrues under O.C.G.A. § 9-3-33. Some facts can change the analysis, so do not wait if the deadline is approaching.",
      },
      {
        q: "Does the property damage deadline match the injury deadline?",
        a: "Not always. Vehicle damage and injury claims can have different timing issues. Treat each deadline separately and preserve repair estimates, total-loss paperwork, rental charges, towing bills, and storage invoices.",
      },
    ],
  },
  {
    category: "Insurance Calls",
    items: [
      {
        q: "Should I give a recorded statement?",
        a: "Be careful. You usually need to cooperate with your own insurer, but a recorded statement to the other driver's insurer can be used to minimize fault, injuries, and damages. Ask why it is needed and consider speaking with counsel first if injuries are significant or fault is disputed.",
      },
      {
        q: "What if the other driver has minimum insurance?",
        a: "Georgia's minimum auto liability limits are $25,000 per person, $50,000 per incident for bodily injury, and $25,000 for property damage. Serious wrecks can exceed those limits quickly, so check your own policy for uninsured or underinsured motorist coverage.",
      },
      {
        q: "Can my own insurance company become adverse to me?",
        a: "Yes. A UM/UIM claim is made under your own policy, but the insurer still evaluates fault, causation, medical proof, and value. Document it as carefully as you would a claim against the at-fault driver's insurer.",
      },
    ],
  },
  {
    category: "Damages",
    items: [
      {
        q: "What losses can be part of a Georgia car crash claim?",
        a: "Common categories include medical bills, future care, lost wages, reduced earning capacity, pain and suffering, vehicle repair or total-loss value, rental costs, towing, storage, and out-of-pocket expenses tied to the crash.",
      },
      {
        q: "Should I settle before finishing medical treatment?",
        a: "Usually not unless the injuries are minor and fully resolved. Once you sign a release, you generally cannot reopen the claim if symptoms worsen, surgery is recommended, or more bills arrive.",
      },
      {
        q: "What documents should I keep?",
        a: "Save the police report, photos, medical records, bills, explanation-of-benefits statements, work notes, pay stubs, repair estimates, rental receipts, towing/storage invoices, insurance letters, and a log of calls with adjusters.",
      },
    ],
  },
  {
    category: "Using This Site",
    items: [
      {
        q: "Is this legal advice?",
        a: "No. This site is educational information about Georgia car crash claims. It does not apply the law to your specific facts and does not create an attorney-client relationship.",
      },
      {
        q: "Where should I go next?",
        a: "Start with the insurance valuation guide, then the settlement value guide. If you are ready to make a demand, use the demand letter guide or builder.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <main className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
      <p className="eyebrow">Common Questions</p>
      <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>Georgia Car Crash FAQ</h1>
      <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "54rem" }}>
        Practical answers for the first days and weeks after a Georgia wreck: fault, deadlines,
        medical care, insurance calls, repairs, UM/UIM coverage, and settlement decisions.
      </p>

      {faqGroups.map((group) => (
        <section key={group.category} style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>{group.category}</p>
          <dl className="faq-list">
            {group.items.map((item) => (
              <div key={item.q} className="faq-item">
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <div className="disclaimer-box" style={{ marginTop: "2rem" }}>
        <p>
          <strong>Sources:</strong> See Georgia Code sections{" "}
          <a href="https://law.justia.com/codes/georgia/title-51/chapter-12/article-2/section-51-12-33/" target="_blank" rel="noopener noreferrer">51-12-33</a>{" "}
          and{" "}
          <a href="https://law.justia.com/codes/georgia/2024/title-9/chapter-3/article-2/section-9-3-33/" target="_blank" rel="noopener noreferrer">9-3-33</a>, plus the Georgia insurance commissioner&apos;s{" "}
          <a href="https://oci.georgia.gov/insurance-resources/auto" target="_blank" rel="noopener noreferrer">auto insurance resource</a>.
        </p>
        <p><strong>Disclaimer:</strong> Informational only. Not legal advice. No attorney-client relationship.</p>
        <p><Link href="/resources">Browse all Georgia crash guides</Link></p>
      </div>
    </main>
  );
}
