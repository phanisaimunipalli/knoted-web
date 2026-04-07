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
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.06] blur-[180px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-600/[0.04] blur-[180px]" />
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
      <nav className="mx-auto max-w-5xl flex items-center justify-between bg-[#0F1D32]/90 border border-white/[0.08] rounded-2xl px-5 py-3 backdrop-blur-2xl">
        <a href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="Knoted" width={32} height={32} className="rounded-xl" />
          <span className="text-white font-semibold tracking-tight">Knoted</span>
        </a>
        <div className="flex items-center gap-1">
          <a href="/#features" className="px-3 py-1.5 text-[13px] text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors">Features</a>
          <a href="/#how-it-works" className="px-3 py-1.5 text-[13px] text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors">How it works</a>
          <a href="/support" className="px-3 py-1.5 text-[13px] text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors">Support</a>
          <a href="https://apps.apple.com/app/knoted" className="ml-2 px-4 py-1.5 text-[13px] font-semibold text-white bg-white/[0.1] rounded-lg hover:bg-white/[0.15] transition-colors">Download</a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-20">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/icon.png" alt="Knoted" width={32} height={32} className="rounded-xl" />
              <span className="text-white font-semibold">Knoted</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">Local tips from people who were actually there. GPS-pinned. Presence-verified.</p>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">App</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#features" className="text-slate-500 hover:text-white transition-colors">Features</a></li>
              <li><a href="/#how-it-works" className="text-slate-500 hover:text-white transition-colors">How it works</a></li>
              <li><a href="/support" className="text-slate-500 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
          <span>&copy; 2026 Phani Sai Ram Munipalli</span>
          <span>Made with curiosity in San Francisco</span>
        </div>
      </div>
    </footer>
  );
}
