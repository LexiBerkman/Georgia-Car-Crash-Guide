import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Georgia Car Crash Guides & Resources",
  description:
    "Georgia car crash resources for insurance claims, settlement value, demand letters, social media evidence, medical proof, and vehicle damage.",
  openGraph: {
    title: "Georgia Car Crash Guides",
    description: "Plain-language guides for Georgia wreck claims.",
    url: "https://www.georgiacarcrashguide.com/resources",
  },
};

const guides = [
  {
    category: "Insurance Claims",
    items: [
      {
        title: "How Insurance Adjusters Value Georgia Car Crash Claims",
        href: "/resources/how-insurance-adjusters-value-claims",
        desc: "Medical bills, lost wages, vehicle damage, fault arguments, policy limits, and the tactics adjusters use after Georgia wrecks.",
      },
      {
        title: "How to Value Your Georgia Car Crash Settlement",
        href: "/resources/settlement-value-claim-georgia",
        desc: "A practical settlement framework for crash injuries, property damage, rental costs, lost income, and pain and suffering.",
      },
      {
        title: "Write a Demand Letter to an Auto Insurance Company",
        href: "/resources/demand-letter-insurance-georgia",
        desc: "What to include, what exhibits to attach, how to set a deadline, and how to negotiate after the insurer responds.",
      },
      {
        title: "Georgia UM Bad Faith: When Your Own Insurer Low-Balls You",
        href: "/resources/um-bad-faith-georgia",
        desc: "Why uninsured motorist claims can turn adversarial, how Blazys v. McKnight changed the leverage, and what Georgia bad faith remedies still exist.",
      },
    ],
  },
  {
    category: "Evidence and Protection",
    items: [
      {
        title: "Demand Letter Builder",
        href: "/resources/demand-letter-builder",
        desc: "Answer guided questions and generate a structured Georgia auto crash demand letter.",
      },
      {
        title: "Why Social Media Can Damage a Crash Claim",
        href: "/resources/social-media-fatal-to-pi-case",
        desc: "How posts, tags, photos, travel, and activity updates can be used against an injury claim after a wreck.",
      },
      {
        title: "Georgia Car Crash FAQ",
        href: "/faq",
        desc: "Fast answers on crash reports, medical treatment, recorded statements, deadlines, UM/UIM, and repair claims.",
      },
    ],
  },
  {
    category: "Crash Claim Problems",
    items: [
      {
        title: "Georgia Car Crash Claim Types",
        href: "/practice-areas",
        desc: "Rear-end, intersection, commercial vehicle, rideshare, pedestrian, motorcycle, and UM/UIM claim issues.",
      },
      {
        title: "Recorded Statements and Adjuster Calls",
        href: "/faq",
        desc: "What to watch for when the insurer calls early, asks for a recorded statement, or pushes for a quick settlement.",
      },
      {
        title: "Policy Limits and UM/UIM Coverage",
        href: "/faq",
        desc: "How Georgia minimum limits, uninsured drivers, and your own underinsured motorist coverage can shape recovery.",
      },
    ],
  },
];

export default function Resources() {
  return (
    <main className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
      <p className="eyebrow">Crash Guides</p>
      <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>Georgia Car Crash Resources</h1>
      <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "54rem" }}>
        Focused help for the practical problems that follow a Georgia wreck: insurance calls, medical documentation,
        repair claims, lost wages, comparative fault, policy limits, and demand letters.
      </p>

      {guides.map((group) => (
        <section key={group.category} style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>{group.category}</p>
          <div className="resource-grid">
            {group.items.map((item) => (
              <Link key={item.href} href={item.href} className="resource-card">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span className="resource-link">Read guide</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
