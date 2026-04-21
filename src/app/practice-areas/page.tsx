import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Georgia Car Crash Types — Rear-End, Truck, Rideshare, Pedestrian",
  description:
    "Common Georgia car crash claim types: rear-end wrecks, intersection crashes, trucks, rideshare, pedestrians, uninsured drivers, and fatal collisions.",
  openGraph: {
    title: "Georgia Car Crash Types",
    description: "Crash scenarios and the evidence that usually matters in Georgia.",
    url: "https://www.georgiacarcrashguide.com/practice-areas",
  },
};

const areas = [
  {
    title: "Rear-End Crashes",
    desc: "Often look simple, but insurers still fight injury causation, prior conditions, gap in treatment, and whether the impact was hard enough to cause the claimed injuries.",
    links: [
      { label: "How adjusters value crash claims", href: "/resources/how-insurance-adjusters-value-claims" },
      { label: "Settlement value guide", href: "/resources/settlement-value-claim-georgia" },
    ],
  },
  {
    title: "Intersection and Left-Turn Wrecks",
    desc: "These claims usually turn on traffic signals, turning movements, witness statements, nearby camera footage, skid marks, and whether either driver was speeding or distracted.",
    links: [
      { label: "Crash FAQ", href: "/faq" },
      { label: "Demand letter guide", href: "/resources/demand-letter-insurance-georgia" },
    ],
  },
  {
    title: "Truck and Commercial Vehicle Crashes",
    desc: "Commercial crashes can involve the driver, employer, maintenance company, broker, cargo loading, and higher insurance layers. Evidence preservation matters immediately.",
    links: [
      { label: "Atlanta crash venue guide", href: "/georgia/atlanta" },
      { label: "Savannah crash venue guide", href: "/georgia/savannah" },
    ],
  },
  {
    title: "Rideshare, Delivery, and Company Cars",
    desc: "Uber, Lyft, delivery, and company-vehicle crashes raise coverage questions that depend on whether the driver was logged in, carrying a passenger, making a delivery, or working at the time.",
    links: [
      { label: "Insurance valuation", href: "/resources/how-insurance-adjusters-value-claims" },
      { label: "Build a demand letter", href: "/resources/demand-letter-builder" },
    ],
  },
  {
    title: "Pedestrian, Bicycle, and Motorcycle Crashes",
    desc: "Serious injuries are common, and fault arguments can be aggressive. Preserve scene photos, lighting conditions, lane position, helmet evidence when relevant, and medical records from day one.",
    links: [
      { label: "Settlement value guide", href: "/resources/settlement-value-claim-georgia" },
      { label: "Social media evidence", href: "/resources/social-media-fatal-to-pi-case" },
    ],
  },
  {
    title: "Uninsured and Underinsured Drivers",
    desc: "When the at-fault driver has no coverage or minimum limits, your own UM/UIM coverage can become the practical source of recovery. Treat it like a real claim, not a friendly favor.",
    links: [
      { label: "Demand letter guide", href: "/resources/demand-letter-insurance-georgia" },
      { label: "Crash FAQ", href: "/faq" },
    ],
  },
];

export default function PracticeAreas() {
  return (
    <main className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
      <p className="eyebrow">Crash Types</p>
      <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>Georgia Car Crash Claim Types</h1>
      <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "54rem" }}>
        Different wrecks create different evidence problems. Use this page to identify the claim type you are dealing with
        and jump to the guide that matches the insurance and documentation issues most likely to matter.
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
        <p><strong>Disclaimer:</strong> This page is educational information about Georgia car crash claims. It is not legal advice and does not create an attorney-client relationship.</p>
      </div>
    </main>
  );
}
