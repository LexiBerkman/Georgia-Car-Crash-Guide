import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Legal Guides & Resources — Georgia Law Guide",
  description:
    "Practical guides to Georgia civil law: how insurance claims are valued, litigation stages, expert witnesses, and what to expect in Georgia courts.",
  openGraph: {
    title: "Legal Guides & Resources",
    description: "Plain-language guides to Georgia civil law.",
    url: "https://dominant.law/resources",
  },
};

const guides = [
  {
    category: "Your Claim",
    items: [
      {
        title: "How to Value Your Own Georgia PI Claim",
        href: "/resources/settlement-value-claim-georgia",
        desc: "The settlement math formula Georgia courts use — medical bills, lost wages, pain and suffering, and the multiplier.",
      },
      {
        title: "How to Write a Demand Letter to an Insurance Company",
        href: "/resources/demand-letter-insurance-georgia",
        desc: "A complete guide to writing, sending, and negotiating a settlement demand letter in Georgia.",
      },
      {
        title: "How Insurance Adjusters Value Injury Claims",
        href: "/resources/how-insurance-adjusters-value-claims",
        desc: "The three numbers that drive every settlement — and where adjusters systematically undervalue claims.",
      },
      {
        title: "Georgia Civil Litigation Stages",
        href: "/resources/georgia-civil-litigation-stages",
        desc: "From filing to verdict: what happens at each stage of a Georgia civil case.",
      },
      {
        title: "Expert Witnesses in Georgia Courts",
        href: "/resources/expert-witnesses-georgia",
        desc: "When you need an expert, what they cost, and how to qualify them in Georgia courts.",
      },
    ],
  },
  {
    category: "Georgia Courts",
    items: [
      {
        title: "Fulton County vs. Richmond vs. Chatham County",
        href: "/resources/fulton-vs-richmond-courts",
        desc: "Local rules, jury pool differences, and filing procedures vary by county.",
      },
      {
        title: "Social Media Fatal to PI Case",
        href: "/resources/social-media-fatal-to-pi-case",
        desc: "How posting about your injury can destroy your settlement — before you even file.",
      },
    ],
  },
  {
    category: "Practice Areas",
    items: [
      {
        title: "Personal Injury in Georgia",
        href: "/practice-areas",
        desc: "Overview of personal injury claims: fault, damages, and the litigation process.",
      },
      {
        title: "Wrongful Death in Georgia",
        href: "/resources/wrongful-death-georgia",
        desc: "Who can bring a wrongful death claim, what damages are available, and how GA law differs from other states.",
      },
      {
        title: "Business and Contract Disputes",
        href: "/resources/business-contract-disputes-georgia",
        desc: "Breach of contract, business torts, and the six-year statute of limitations under Georgia law.",
      },
    ],
  },
];

export default function Resources() {
  return (
    <main className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
      <p className="eyebrow">Legal Guides</p>
      <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>Georgia Civil Law Guides</h1>
      <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "54rem" }}>
        Plain-language explanations of how Georgia civil law works in practice. Use these to understand the process before you hire an attorney — and to ask better questions once you do.
      </p>

      {guides.map((group) => (
        <section key={group.category} style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>{group.category}</p>
          <div className="resource-grid">
            {group.items.map((item) => (
              <Link key={item.href} href={item.href} className="resource-card">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span className="resource-link">
                  Read guide
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
