import "./globals.css";
import React from "react";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://georgia-car-crash-guide.vercel.app"),
  title: "Georgia Car Crash Guide",
  description: "A practical Georgia car crash reference covering wreck steps, insurance claims, fault, deadlines, property damage, and settlement demands.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

const navItems = [
  { href: "/resources", label: "Guides" },
  { href: "/practice-areas", label: "Crash Types" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Disclaimer" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="topbar">
              <span>Georgia car crash claims explained clearly</span>
              <div className="topbar-links">
                <span>Educational reference — not legal advice</span>
              </div>
            </div>
            <div className="nav-wrap">
              <Link className="wordmark" href="/">
                <span className="wordmark-mark">GL</span>
                <span className="wordmark-copy">
                  <strong>Georgia Car Crash Guide</strong>
                  <span>Wreck claims, insurance, fault, deadlines, and settlement basics</span>
                </span>
              </Link>
              <nav aria-label="Primary">
                <ul className="nav-list">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link className="nav-cta" href="/resources">
                Browse guides
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="footer-grid">
              <div>
                <p className="footer-kicker">Georgia Car Crash Guide</p>
                <p>
                  Educational reference for Georgia car crash claims, insurance disputes, vehicle damage, injury documentation, and settlement demands. Not legal advice.
                </p>
              </div>
              <div>
                <p className="footer-kicker">Key Topics</p>
                <p>
                  <Link href="/faq">After-crash checklist</Link><br />
                  <Link href="/resources/how-insurance-adjusters-value-claims">Insurance adjusters</Link><br />
                  <Link href="/resources/settlement-value-claim-georgia">Settlement value</Link>
                </p>
              </div>
              <div>
                <p className="footer-kicker">Start Here</p>
                <p>
                  <Link href="/faq">Common questions</Link><br />
                  <Link href="/resources">All guides</Link>
                </p>
              </div>
            </div>
            <p className="footer-meta">© 2026 Georgia Car Crash Guide. Educational purposes only. Not legal advice.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
