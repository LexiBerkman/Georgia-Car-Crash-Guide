import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Georgia Car Crash Guide — Clear Help After a Georgia Wreck",
  description:
    "A practical reference for Georgia car crash claims — what to do after a wreck, how fault works, insurance adjuster tactics, and when deadlines matter.",
  openGraph: {
    title: "Georgia Car Crash Guide",
    description: "Georgia car crash claims explained without the jargon.",
    url: "https://www.georgiacarcrashguide.com",
  },
};

const guides = [
  {
    category: "Understanding Your Claim",
    items: [
      { title: "How Insurance Adjusters Value Injury Claims", href: "/resources/how-insurance-adjusters-value-claims" },
      { title: "Stages of a Georgia Civil Case", href: "/resources/georgia-civil-litigation-stages" },
      { title: "Expert Witnesses in Georgia Courts", href: "/resources/expert-witnesses-georgia" },
    ],
  },
  {
    category: "Georgia Civil Litigation",
    items: [
      { title: "How Insurance Adjusters Value Injury Claims", href: "/resources/how-insurance-adjusters-value-claims" },
      { title: "Stages of a Georgia Civil Case", href: "/resources/georgia-civil-litigation-stages" },
      { title: "Filing in Fulton vs. Richmond vs. Chatham County", href: "/resources/fulton-vs-richmond-courts" },
    ],
  },
  {
    category: "By Claim Type",
    items: [
      { title: "Personal Injury in Georgia", href: "/practice-areas" },
      { title: "Wrongful Death Claims in Georgia", href: "/faq" },
      { title: "Business and Contract Disputes in Georgia", href: "/faq" },
    ],
  },
];

const quickReference = [
  { term: "PI Statute of Limitations", def: "2 years from the date of injury in Georgia." },
  { term: "Property Damage", def: "4 years from the date of damage." },
  { term: "Contract claims", def: "6 years under Georgia law." },
  { term: "Modified comparative negligence", def: "GA bars recovery when plaintiff is 50% or more at fault." },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-copy hero-copy-main">
          <p className="eyebrow">Georgia Car Crash Guide | Crash Claim Reference</p>
          <h1>Georgia car crash claims, explained clearly.</h1>
          <p className="hero-lead">
            A practical reference for injured drivers, passengers, and families navigating the aftermath of a Georgia wreck. Understand your rights, deadlines, and the insurance process before you make costly mistakes.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/resources">
              Browse all guides
            </Link>
            <Link className="button button-secondary" href="/faq">
              Common questions
            </Link>
          </div>
          <div className="hero-badges">
            <span>Personal injury</span>
            <span>Wrongful death</span>
            <span>Business disputes</span>
            <span>Contract claims</span>
          </div>
        </div>
        <aside className="hero-stack">
          <div className="hero-image-frame">
            <Image
              src="/georgia-courthouse-hero.jpg"
              alt="Georgia courthouse exterior with classical columns and stone steps"
              width={1200}
              height={960}
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="hero-panel hero-panel-primary">
            <p className="panel-kicker">Quick reference — act fast</p>
            <ul className="advantage-list">
              {quickReference.map((item) => (
                <li key={item.term}>
                  <strong>{item.term}:</strong> {item.def}
                </li>
              ))}
            </ul>
          </div>
          <div className="signal-card">
            <p className="panel-kicker">What this site is</p>
            <div className="signal-grid">
              <div>
                <strong>Educational</strong>
                <span>Plain-language explanations of Georgia car crash claims.</span>
              </div>
              <div>
                <strong>Not legal advice</strong>
                <span>Use the site to understand. Hire an attorney for your case.</span>
              </div>
              <div>
                <strong>Referral-friendly</strong>
                <span>Sharing attorney-free information builds trust and credibility.</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="ticker-band" aria-label="Topic areas">
        <div className="ticker-track">
          <span>Georgia civil law</span>
          <span>Personal injury</span>
          <span>Comparative negligence</span>
          <span>Wrongful death</span>
          <span>Business litigation</span>
          <span>Statute of limitations</span>
          <span>Expert witnesses</span>
          <span>Discovery rules</span>
        </div>
      </section>

      <section className="stats-band" aria-label="Key facts">
        <div className="stat-card">
          <strong>2 years</strong>
          <span>PI statute of limitations</span>
        </div>
        <div className="stat-card">
          <strong>4 years</strong>
          <span>Property damage window</span>
        </div>
        <div className="stat-card">
          <strong>50%</strong>
          <span>Fault threshold bars recovery</span>
        </div>
      </section>

      <section className="editorial-grid">
        <article className="editorial-callout">
          <p className="eyebrow">Why this guide exists</p>
          <h2>Most people going through Georgia courts have never been in a courtroom before.</h2>
          <p>
            Georgia crash claims move fast, insurance companies move strategically, and most people have never handled a serious injury case before. This site exists so injured Georgians can understand the terrain early and make better decisions from day one.
          </p>
        </article>
        <article className="editorial-quote">
          <Image
            src="/editorial-scales.jpg"
            alt="Scales of justice in a courthouse, Georgia civil law"
            width={960}
            height={760}
          />
          <span>Justice equally applied — Georgia courts</span>
        </article>
      </section>

      <section className="split-section">
        <div className="section-intro">
          <p className="eyebrow">Subject guides</p>
          <h2>Start with what applies to your situation. Everything else can wait.</h2>
          <p>
            Each guide covers a focused topic: how the law works, what it means in practice, and where to go deeper.
          </p>
        </div>
        <div className="practice-grid">
          {guides.map((group) => (
            <article className="practice-card" key={group.category}>
              <span className="practice-index">{guides.indexOf(group) + 1}</span>
              <h3>{group.category}</h3>
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

      <section className="process-section">
        <div className="section-intro">
          <p className="eyebrow">Using this guide</p>
          <h2>This site explains the law. An attorney applies it to your facts.</h2>
        </div>
        <div className="process-grid">
          <article className="process-card">
            <span className="process-step">Read</span>
            <p>Understand how Georgia civil law works before you talk to anyone.</p>
          </article>
          <article className="process-card">
            <span className="process-step">Prepare</span>
            <p>Know the deadlines, rules, and stages so you can ask better questions.</p>
          </article>
          <article className="process-card">
            <span className="process-step">Decide</span>
            <p>When you're ready to hire counsel, you already understand the landscape.</p>
          </article>
        </div>
      </section>

      <section className="feature-banner">
        <div>
          <p className="eyebrow">Georgia county guides</p>
          <h2>Local rules vary by county. Know the jurisdiction before you file.</h2>
        </div>
        <div className="feature-art">
          <Image
            src="/fulton-courthouse.jpg"
            alt="Fulton County Courthouse, Atlanta Georgia"
            width={960}
            height={760}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="feature-links">
          <Link href="/georgia/atlanta">Fulton County</Link>
          <Link href="/georgia/augusta">Richmond County</Link>
          <Link href="/georgia/savannah">Chatham County</Link>
        </div>
      </section>

      <section className="cta-block">
        <div>
          <p className="eyebrow">Not legal advice</p>
          <h2>This site helps you understand the law. It does not replace an attorney.</h2>
          <p>If you have an active case or immediate legal needs, consult a licensed Georgia attorney.</p>
        </div>
        <Link className="button button-secondary" href="/resources">
          Browse all guides
        </Link>
      </section>
    </div>
  );
}
