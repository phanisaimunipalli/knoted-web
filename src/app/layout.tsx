import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Knoted — Local tips from people who were actually there",
  description: "GPS-pinned tips from real people. Presence-verified. No accounts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {/* BG gradient orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="orb1 absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full blur-[180px]" />
          <div className="orb2 absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[180px]" />
        </div>

        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="nav-glass mx-auto max-w-5xl flex items-center justify-between rounded-2xl px-5 py-3">
        <a href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="Knoted" width={32} height={32} className="rounded-xl" />
          <span className="font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Knoted</span>
        </a>
        <div className="flex items-center gap-1">
          <a href="/#features" className="px-3 py-1.5 text-[13px] rounded-lg transition-colors" style={{ color: "var(--text-secondary)" }}>Features</a>
          <a href="/#how-it-works" className="px-3 py-1.5 text-[13px] rounded-lg transition-colors" style={{ color: "var(--text-secondary)" }}>How it works</a>
          <a href="/support" className="px-3 py-1.5 text-[13px] rounded-lg transition-colors" style={{ color: "var(--text-secondary)" }}>Support</a>
          <a
            href="https://apps.apple.com/app/knoted"
            className="ml-2 px-4 py-1.5 text-[13px] font-semibold rounded-lg transition-colors"
            style={{ background: "var(--border-card)", color: "var(--text-primary)" }}
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20" style={{ borderTop: "1px solid var(--border-card)" }}>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/icon.png" alt="Knoted" width={32} height={32} className="rounded-xl" />
              <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Knoted</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: "var(--text-muted)" }}>
              Local tips from people who were actually there. GPS-pinned. Presence-verified.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-secondary)" }}>App</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#features" className="transition-colors" style={{ color: "var(--text-muted)" }}>Features</a></li>
              <li><a href="/#how-it-works" className="transition-colors" style={{ color: "var(--text-muted)" }}>How it works</a></li>
              <li><a href="/support" className="transition-colors" style={{ color: "var(--text-muted)" }}>Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-secondary)" }}>Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/privacy" className="transition-colors" style={{ color: "var(--text-muted)" }}>Privacy Policy</a></li>
              <li><a href="/terms" className="transition-colors" style={{ color: "var(--text-muted)" }}>Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]" style={{ borderTop: "1px solid var(--border-card)", color: "var(--text-xmuted)" }}>
          <span>&copy; 2026 Phani Sai Ram Munipalli</span>
          <span>Made with curiosity in San Francisco</span>
        </div>
      </div>
    </footer>
  );
}
