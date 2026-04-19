import React from "react";
import Link from "next/link";

export const metadata = {
  title: "FAQ — Georgia Civil Law Questions",
  description:
    "Common questions about Georgia civil law: statutes of limitation, comparative negligence, expert witnesses, insurance claims, and the litigation process.",
  openGraph: {
    title: "Frequently Asked Questions",
    description: "Georgia civil law answers without the jargon.",
    url: "https://www.georgiacarcrashguide.com/faq",
  },
};

const faqGroups = [
  {
    category: "Statutes of Limitation",
    items: [
      {
        q: "How long do I have to file a personal injury claim in Georgia?",
        a: "Two years from the date of injury under O.C.G.A. § 9-3-33. This is one of the shortest statutes of limitation in the country for personal injury. If you've already passed this deadline, you generally cannot sue — regardless of how strong your case is.",
      },
      {
        q: "What's the deadline for property damage?",
        a: "Four years from the date the damage occurred, under O.C.G.A. § 9-3-26. Note this runs separately from any personal injury claim arising from the same incident.",
      },
      {
        q: "I missed the deadline. Is there any exception?",
        a: "Rarely. Georgia has limited tolling provisions. If the defendant fraudulently concealed the cause of action, the clock may not start until you discovered it. Minors and legally incapacitated persons get tolling. These exceptions are construed narrowly — don't count on them without consulting an attorney.",
      },
    ],
  },
  {
    category: "Comparative Negligence",
    items: [
      {
        q: "What is modified comparative negligence?",
        a: "Georgia uses a modified comparative fault system under O.C.G.A. § 51-12-33. If you are 50% or more at fault for your injury, you recover nothing. If you are less than 50% at fault, your recovery is reduced by your percentage of fault. The defendant bears the burden of proving your portion of fault.",
      },
      {
        q: "Does this mean I can't recover if the other driver was speeding but I was also slightly careless?",
        a: "It depends on the degree. If you're found 10% at fault, your recovery is reduced by 10% — you still recover 90%. But if a court or jury finds you at 50% or more, you get nothing. Even small contributions to an accident can be exaggerated by insurance adjusters, making this one of the most contested issues in Georgia PI litigation.",
      },
    ],
  },
  {
    category: "Damages",
    items: [
      {
        q: "What damages can I recover in a Georgia personal injury case?",
        a: "Economic damages: medical bills, lost wages, property damage. Non-economic damages: pain and suffering, emotional distress, loss of enjoyment of life. In cases of egregious conduct, punitive damages may be available — but Georgia caps these at $250,000 under O.C.G.A. § 51-12-5.1.",
      },
      {
        q: "Can I recover for future medical expenses?",
        a: "Yes, if you have competent medical evidence establishing that future treatment is reasonably certain. An expert physician's testimony is typically required. Georgia courts require that future damages be supported by testimony or affidavits, not just your own account of what you expect.",
      },
      {
        q: "Is there a cap on pain and suffering damages in Georgia?",
        a: "No cap on non-economic damages in ordinary PI cases. Medical malpractice has a $750,000 cap (indexed for inflation). Punitive damages are capped at $250,000 or three times compensatory damages, whichever is greater.",
      },
    ],
  },
  {
    category: "Expert Witnesses",
    items: [
      {
        q: "Do I need an expert witness to win my case?",
        a: "In most PI cases, yes — practically speaking. While not legally required in every case, without expert testimony establishing causation and the nature of your injuries, the jury has no basis to award damages beyond your own testimony. The exception is when the injury is obvious and within common experience (a broken bone from a rear-end collision).",
      },
      {
        q: "How do I qualify an expert in Georgia court?",
        a: "Georgia follows the Daubert standard (post-2018). The expert must be qualified by knowledge, skill, experience, or education, and their testimony must be based on sufficient facts, reliable methods, and reliable application. File a motion in limine to pre-approve the expert before trial. Opposing counsel will challenge qualifications and methodology.",
      },
      {
        q: "How much do expert witnesses cost?",
        a: "Orthopedic and neurosurgical experts typically charge $5,000–$15,000 for a records review and trial testimony. economists and vocational experts $3,000–$8,000. These costs add up quickly if you need multiple experts. The defense will often hire their own experts to counter yours, and juries weigh competing expert opinions — so skipping an expert to save money can be a losing strategy.",
      },
    ],
  },
  {
    category: "Insurance",
    items: [
      {
        q: "The insurance company offered me a settlement. Should I take it?",
        a: "Not without reading this first. Initial offers are almost always below what a well-documented case is worth. The adjuster's job is to close the claim cheaply. If you've completed treatment and have solid medical records, there's room to negotiate. Once you accept a settlement, you can't reopen the claim — ever.",
      },
      {
        q: "What if the other driver has minimal insurance?",
        a: "Georgia requires minimum $25,000/$50,000/$25,000 coverage, but many drivers are underinsured or uninsured. Check your own policy for UM/UIM (uninsured/underinsured motorist) coverage. This is separate coverage you pay for that protects you when the at-fault driver can't pay. Your UM/UIM coverage should track the other driver's — if they have $25,000 limits and your damages are $300,000, your UM/UIM carrier covers the gap up to your limits.",
      },
    ],
  },
  {
    category: "Using This Site",
    items: [
      {
        q: "Is this legal advice?",
        a: "No. This site provides educational information about how Georgia civil law works. It does not constitute legal advice, and using it does not create an attorney-client relationship. Every case has unique facts — please consult a licensed Georgia attorney before making legal decisions.",
      },
      {
        q: "I have an active case. Can I use this site to prepare?",
        a: "Absolutely. Understanding the process, terminology, and strategic landscape helps you work more effectively with your attorney. Bring this site's explanations to your meetings and ask informed questions. The more you understand the terrain, the better decisions you'll make.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <main className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
      <p className="eyebrow">Common Questions</p>
      <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>Georgia Civil Law FAQ</h1>
      <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "54rem" }}>
        Practical answers to the questions people ask most when navigating a Georgia civil claim. These apply to personal injury, wrongful death, and related civil matters — not criminal cases.
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
        <p><strong>Disclaimer:</strong> This FAQ is for informational purposes only and does not constitute legal advice. This site does not create an attorney-client relationship.</p>
      </div>
    </main>
  );
}
