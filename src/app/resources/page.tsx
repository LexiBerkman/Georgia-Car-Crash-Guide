import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Georgia Car Crash Guides & Resources",
  description:
    "Georgia car crash resources for insurance claims, settlement value, demand letters, social media evidence, and local crash venues.",
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
    category: "Georgia Locations",
    items: [
      {
        title: "Atlanta Car Crash Claims",
        href: "/georgia/atlanta",
        desc: "Fulton County and metro Atlanta crash issues: traffic corridors, venue, police reports, and insurer expectations.",
      },
      {
        title: "Augusta Car Crash Claims",
        href: "/georgia/augusta",
        desc: "Richmond County crash claims, medical documentation, military-area traffic, and local court considerations.",
      },
      {
        title: "Savannah Car Crash Claims",
        href: "/georgia/savannah",
        desc: "Chatham County wreck claims, tourism traffic, port-related vehicles, and coastal Georgia filing considerations.",
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
        repair claims, lost wages, comparative fault, demand letters, and local venue questions.
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
