import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Georgia Car Crash Guide — What to Do After a Georgia Wreck",
  description:
    "A practical Georgia car crash guide covering wreck steps, insurance claims, fault, injuries, property damage, deadlines, and settlement demands.",
  openGraph: {
    title: "Georgia Car Crash Guide",
    description: "Georgia car crash claims explained clearly, from the scene to settlement.",
    url: "https://www.georgiacarcrashguide.com",
  },
};

const crashGuides = [
  {
    category: "Right After the Wreck",
    items: [
      { title: "Crash checklist and evidence", href: "/faq" },
      { title: "Georgia fault and police reports", href: "/faq" },
      { title: "What not to say to insurers", href: "/resources/how-insurance-adjusters-value-claims" },
    ],
  },
  {
    category: "Insurance and Money",
    items: [
      { title: "How adjusters value crash claims", href: "/resources/how-insurance-adjusters-value-claims" },
      { title: "Estimate your Georgia settlement range", href: "/resources/settlement-value-claim-georgia" },
      { title: "Write an auto insurance demand letter", href: "/resources/demand-letter-insurance-georgia" },
    ],
  },
  {
    category: "Georgia Crash Claims",
    items: [
      { title: "Rear-end and intersection wrecks", href: "/practice-areas" },
      { title: "Trucks, rideshare, and commercial vehicles", href: "/practice-areas" },
      { title: "Uninsured and underinsured drivers", href: "/practice-areas" },
    ],
  },
];

const quickReference = [
  { term: "Injury deadline", def: "Most Georgia injury lawsuits must be filed within 2 years." },
  { term: "Fault rule", def: "Recovery is barred if you are 50% or more at fault." },
  { term: "Minimum liability", def: "Georgia minimum auto liability limits are 25/50/25." },
  { term: "First call", def: "Report the wreck, get medical care, and preserve evidence early." },
];

const steps = [
  "Call 911, get the crash report number, and document the scene.",
  "Get medical care quickly, even if pain worsens over the next day.",
  "Notify insurers, but avoid recorded statements until you understand the claim.",
  "Track bills, lost wages, repairs, rental costs, and every adjuster contact.",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-copy hero-copy-main">
          <p className="eyebrow">Georgia Car Crash Guide</p>
          <h1>What to do after a car crash in Georgia.</h1>
          <p className="hero-lead">
            A focused guide for Georgia drivers, passengers, and families dealing with wrecks, injuries,
            insurance adjusters, repair bills, lost wages, and the decisions that follow a serious crash.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/faq">
              Start with the checklist
            </Link>
            <Link className="button button-secondary" href="/resources">
              Browse crash guides
            </Link>
          </div>
          <div className="hero-badges">
            <span>Auto insurance</span>
            <span>Georgia fault rules</span>
            <span>Settlement demands</span>
          </div>
        </div>
        <aside className="hero-stack">
          <div className="hero-image-frame">
            <Image
              src="/georgia-courthouse-hero.jpg"
              alt="Georgia courthouse exterior, representing Georgia car crash claims and legal deadlines"
              width={1200}
              height={960}
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="hero-panel hero-panel-primary">
            <p className="panel-kicker">Quick reference</p>
            <ul className="advantage-list">
              {quickReference.map((item) => (
                <li key={item.term}>
                  <strong>{item.term}:</strong> {item.def}
                </li>
              ))}
            </ul>
          </div>
          <div className="signal-card">
            <p className="panel-kicker">Keep this close</p>
            <div className="signal-grid">
              <div>
                <strong>Evidence fades</strong>
                <span>Photos, witnesses, dashcam footage, and repair records matter early.</span>
              </div>
              <div>
                <strong>Insurers move fast</strong>
                <span>The first adjuster call is about information control, not just customer service.</span>
              </div>
              <div>
                <strong>Georgia rules apply</strong>
                <span>Fault percentages, deadlines, and policy limits can change the value of the claim.</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="ticker-band" aria-label="Topic areas">
        <div className="ticker-track">
          <span>Rear-end crashes</span>
          <span>Intersection wrecks</span>
          <span>Truck collisions</span>
          <span>Uninsured drivers</span>
          <span>Medical bills</span>
          <span>Rental cars</span>
          <span>Lost wages</span>
          <span>Georgia deadlines</span>
        </div>
      </section>

      <section className="stats-band" aria-label="Key facts">
        <div className="stat-card">
          <strong>2 years</strong>
          <span>Typical injury lawsuit deadline</span>
        </div>
        <div className="stat-card">
          <strong>50%</strong>
          <span>Fault threshold that can bar recovery</span>
        </div>
        <div className="stat-card">
          <strong>25/50/25</strong>
          <span>Georgia minimum auto liability coverage</span>
        </div>
      </section>

      <section className="editorial-grid">
        <article className="editorial-callout">
          <p className="eyebrow">The first week matters</p>
          <h2>A Georgia wreck claim is built before anyone says “settlement.”</h2>
          <p>
            The strongest crash claims usually have ordinary paperwork behind them: a police report,
            medical records that connect the injuries to the wreck, photos, repair estimates, wage proof,
            and a clean timeline of every insurer conversation.
          </p>
        </article>
        <article className="editorial-quote">
          <Image
            src="/editorial-books.jpg"
            alt="Organized legal and insurance paperwork for a Georgia car crash claim"
            width={960}
            height={760}
          />
          <span>Georgia crash claims can turn on records, timing, and consistency.</span>
        </article>
      </section>

      <section className="split-section">
        <div className="section-intro">
          <p className="eyebrow">Start here</p>
          <h2>Handle the practical pieces in the right order.</h2>
          <p>
            You do not need to solve the whole claim on day one. You do need to avoid giving away evidence,
            missing deadlines, or accepting a number before the damages are known.
          </p>
        </div>
        <div className="practice-grid">
          {steps.map((step, index) => (
            <article className="practice-card" key={step}>
              <span className="practice-index">Step {index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-intro">
          <p className="eyebrow">Crash guides</p>
          <h2>Focused help for the parts of a Georgia wreck that get expensive.</h2>
        </div>
        <div className="practice-grid three-up">
          {crashGuides.map((group) => (
            <article className="practice-card" key={group.category}>
              <span className="practice-index">{group.category}</span>
              <ul className="guide-list">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-banner">
        <div>
          <p className="eyebrow">Build the claim file</p>
          <h2>The paperwork is the leverage.</h2>
          <p>
            A clear file makes the insurer's job harder to minimize: police report, photos, medical records,
            bills, wage proof, repair estimates, rental receipts, and a timeline of every adjuster contact.
          </p>
        </div>
        <div className="feature-art">
          <Image
            src="/georgia-courthouse.jpg"
            alt="Georgia courthouse entrance"
            width={960}
            height={760}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="feature-links">
          <Link href="/faq">Crash checklist</Link>
          <Link href="/resources/settlement-value-claim-georgia">Settlement value</Link>
          <Link href="/resources/demand-letter-insurance-georgia">Demand letters</Link>
        </div>
      </section>

      <section className="cta-block">
        <div>
          <p className="eyebrow">Educational only</p>
          <h2>Use this to get oriented before you talk numbers.</h2>
          <p>If you have an active case, serious injuries, disputed fault, or a lawsuit deadline approaching, speak with a licensed Georgia attorney.</p>
        </div>
        <Link className="button button-secondary" href="/resources/demand-letter-builder">
          Build a demand letter
        </Link>
      </section>
    </div>
  );
}
