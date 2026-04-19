import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Practice Areas — Georgia Civil Law",
  description:
    "Types of civil claims handled under Georgia law: personal injury, wrongful death, business disputes, and contract claims.",
  openGraph: {
    title: "Practice Areas",
    description: "Types of civil claims in Georgia courts.",
    url: "https://dominant.law/practice-areas",
  },
};

const areas = [
  {
    title: "Personal Injury",
    desc: "When someone else's negligence causes physical harm, medical bills, lost wages, or long-term disability, Georgia law allows you to seek compensation. Common scenarios include auto accidents, slip-and-fall injuries, defective products, and wrongful conduct.",
    links: [
      { label: "How insurance adjusters value claims", href: "/resources/how-insurance-adjusters-value-claims" },
      { label: "Georgia civil litigation stages", href: "/resources/georgia-civil-litigation-stages" },
      { label: "Expert witnesses", href: "/resources/expert-witnesses-georgia" },
    ],
  },
  {
    title: "Wrongful Death",
    desc: "When a death is caused by someone else's negligence or intentional misconduct, certain family members and the estate can bring a claim under O.C.G.A. § 51-4-2. These claims cover funeral expenses, lost financial support, lost companionship, and in some cases punitive damages.",
    links: [
      { label: "Wrongful death in Georgia", href: "/resources/wrongful-death-georgia" },
      { label: "Statute of limitations", href: "/faq" },
    ],
  },
  {
    title: "Business Disputes",
    desc: "Contract breaches, business torts, partnership disputes, and other commercial disagreements fall under Georgia civil law. The statute of limitations for most contract claims is six years, but the clock and the applicable rules depend on the nature of the dispute.",
    links: [
      { label: "Business and contract disputes", href: "/resources/business-contract-disputes-georgia" },
      { label: "Fulton vs. Richmond vs. Chatham courts", href: "/resources/fulton-vs-richmond-courts" },
    ],
  },
  {
    title: "Class Actions",
    desc: "When a large group of people are harmed by the same conduct, a class action may be the appropriate vehicle for relief. Georgia courts can certify class actions for injunctive relief and monetary damages under the rules of civil procedure.",
    links: [
      { label: "Contact to discuss your situation", href: "/contact" },
    ],
  },
];

export default function PracticeAreas() {
  return (
    <main className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
      <p className="eyebrow">Claim Types</p>
      <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>Practice Areas</h1>
      <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "54rem" }}>
        An overview of the civil claim types this site covers. Each area links to plain-language guides on how Georgia law applies — including deadlines, damages rules, and what the litigation process looks like.
      </p>

      <div className="areas-grid">
        {areas.map((area) => (
          <article key={area.title} className="area-card">
            <h2>{area.title}</h2>
            <p>{area.desc}</p>
            <ul className="area-links">
              {area.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="disclaimer-box" style={{ marginTop: "3rem" }}>
        <p><strong>Disclaimer:</strong> This page is for informational purposes only and does not constitute legal advice. This site does not create an attorney-client relationship.</p>
      </div>
    </main>
  );
}
