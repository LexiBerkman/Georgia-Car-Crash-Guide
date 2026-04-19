import "./globals.css";
import React from "react";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Georgia Car Crash Guide",
  description: "A practical reference for Georgia car crash claims — fault, deadlines, insurance tactics, and what to expect in a Georgia injury case.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

const navItems = [
  { href: "/resources", label: "Guides" },
  { href: "/practice-areas", label: "Claim Types" },
  { href: "/faq", label: "FAQ" },
  { href: "/georgia/atlanta", label: "Georgia Courts" },
  { href: "/contact", label: "Disclaimer" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={interTight.variable}>
        <div className="site-shell">
          <header className="site-header">
            <div className="topbar">
              <span>Georgia civil law explained clearly</span>
              <div className="topbar-links">
                <span>Educational reference — not legal advice</span>
              </div>
            </div>
            <div className="nav-wrap">
              <Link className="wordmark" href="/">
                <span className="wordmark-mark">GL</span>
                <span className="wordmark-copy">
                  <strong>Georgia Car Crash Guide</strong>
                  <span>Plain-language crash claim guidance for Georgia drivers and families</span>
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
                  Educational reference for Georgia car crash claims. Not legal advice. Does not create an attorney-client relationship.
                </p>
              </div>
              <div>
                <p className="footer-kicker">Key Topics</p>
                <p>
                  <Link href="/faq">Georgia PI claims</Link><br />
                  <Link href="/faq">Statute of limitations</Link><br />
                  <Link href="/faq">Expert witnesses</Link>
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
