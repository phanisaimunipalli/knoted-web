"use client";

import Image from "next/image";
import { FadeUp, FadeIn, ScaleIn } from "@/components/ScrollReveal";

/* shared card style — all Tailwind, no custom CSS */
const card = "bg-[#0F1D32] border border-white/[0.08] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.25)]";
const cardHover = `${card} transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14]`;

export default function Home() {
  return (
    <>
      {/* ────── HERO ────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-32 lg:py-0">
          {/* Copy */}
          <div>
            <FadeUp>
              <div className={`inline-flex items-center gap-2 ${card} !rounded-full px-4 py-2 mb-8`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[13px] text-slate-400 font-medium">Now on the App Store</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-white mb-6">
                The city knows things you don&apos;t.
              </h1>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md">
                GPS-pinned tips from real people. Presence-verified. No accounts. No noise. Just the street, and you.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-wrap items-center gap-3">
                <a href="https://apps.apple.com/app/knoted" className="inline-flex items-center gap-2.5 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-[15px] hover:scale-[1.03] transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download for iOS
                </a>
                <a href="#how-it-works" className="text-slate-400 hover:text-white text-[15px] font-medium transition-colors flex items-center gap-1.5">
                  See how it works
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Phone */}
          <FadeIn delay={0.15}>
            <div className="relative flex justify-center">
              <div className="phone-glow">
                <Image src="/mockups/map-dark.png" alt="Knoted map view" width={300} height={613} priority className="h-auto" />
              </div>
              <div className="absolute -left-6 bottom-16 hidden lg:block phone-glow">
                <Image src="/mockups/detail-shortcut.png" alt="Knot detail" width={160} height={327} className="h-auto rounded-[1.4rem] border border-white/[0.08]" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ────── STATS ────── */}
      <section className="relative z-10 py-8">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <div className={`${card} grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]`}>
              {[
                { v: "140", l: "Char tips" },
                { v: "100m", l: "Presence gate" },
                { v: "60d", l: "Tip lifespan" },
                { v: "0", l: "Accounts" },
              ].map((s, i) => (
                <div key={i} className="text-center py-7 px-3">
                  <div className="text-xl font-bold text-white mb-1">{s.v}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ────── FEATURES ────── */}
      <section id="features" className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <p className="text-[12px] text-blue-400 font-semibold uppercase tracking-[0.2em] mb-3 text-center">Features</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.75rem] font-bold text-white text-center mb-4 leading-tight">What makes it different</h2>
            <p className="text-slate-500 text-center max-w-md mx-auto mb-14 text-[15px] leading-relaxed">Google Maps shows you where a place is. Knoted shows you what locals actually know about it.</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "📍", title: "GPS-Pinned", desc: "Every tip is locked to the exact spot. Not a neighborhood. Not a zip code. The actual coordinates.", color: "#3B82F6" },
              { icon: "🚶", title: "Presence-Gated", desc: "You have to physically walk there to vote. 100 meters or less. No remote opinions.", color: "#22C55E" },
              { icon: "⏳", title: "Self-Cleaning", desc: "Uncared-for tips vanish after 60 days. Upvoted tips live forever. The map cleans itself.", color: "#F59E0B" },
              { icon: "🏷️", title: "Tagged Tips", desc: "Parking, food, shortcuts, warnings, restrooms. Know what you are looking at before you tap.", color: "#A855F7" },
              { icon: "🔔", title: "Background Nudges", desc: "Walk into a neighborhood with tips? You will get a tap. Even when the app is closed.", color: "#EF4444" },
              { icon: "👤", title: "Zero Identity", desc: "No accounts. No profiles. No followers. Your device has an anonymous ID. That is all.", color: "#06B6D4" },
            ].map((f, i) => (
              <ScaleIn key={i} delay={i * 0.05}>
                <div className={`${cardHover} p-7 h-full`}>
                  <div className="w-10 h-10 rounded-xl grid place-items-center text-lg mb-5" style={{ background: `${f.color}20` }}>{f.icon}</div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ────── APP SHOWCASE ────── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <p className="text-[12px] text-emerald-400 font-semibold uppercase tracking-[0.2em] mb-3 text-center">The experience</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.75rem] font-bold text-white text-center mb-4 leading-tight">Drop. Discover. Confirm.</h2>
            <p className="text-slate-500 text-center max-w-md mx-auto mb-16 text-[15px] leading-relaxed">Three screens. Zero friction. Here is what Knoted looks like.</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex justify-center items-end gap-4 md:gap-8">
              <div className="hidden md:block phone-glow opacity-75 hover:opacity-100 transition-opacity duration-500">
                <Image src="/mockups/drop-dark.png" alt="Drop a Knot" width={200} height={409} className="h-auto" />
                <p className="text-center text-[11px] text-slate-500 mt-3 font-medium">Drop a tip</p>
              </div>
              <div className="phone-glow">
                <Image src="/mockups/map-dark.png" alt="Map view" width={260} height={531} className="h-auto" />
                <p className="text-center text-[11px] text-slate-500 mt-3 font-medium">Explore the map</p>
              </div>
              <div className="hidden md:block phone-glow opacity-75 hover:opacity-100 transition-opacity duration-500">
                <Image src="/mockups/detail-warning.png" alt="Warning detail" width={200} height={409} className="h-auto" />
                <p className="text-center text-[11px] text-slate-500 mt-3 font-medium">Confirm with your feet</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ────── HOW IT WORKS ────── */}
      <section id="how-it-works" className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <FadeUp>
            <p className="text-[12px] text-amber-400 font-semibold uppercase tracking-[0.2em] mb-3 text-center">How it works</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.75rem] font-bold text-white text-center mb-14 leading-tight">Three moves. That&apos;s it.</h2>
          </FadeUp>

          <div className="space-y-4">
            {[
              { n: "01", t: "Drop a tip", d: "See something worth sharing? Tap drop, write 140 characters, tag it, done. Your GPS locks it to the exact spot.", c: "#3B82F6" },
              { n: "02", t: "Walk and discover", d: "Tips appear on the map as you move. Parking tricks, food spots, shortcuts. All left by people who stood right where you are.", c: "#22C55E" },
              { n: "03", t: "Vote with your feet", d: "Walk to a tip and confirm it is still true. Or flag it as outdated. You have to be there. That is what makes it honest.", c: "#F59E0B" },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className={`${card} flex items-center gap-6 p-7`}>
                  <span className="text-3xl md:text-4xl font-extrabold opacity-25 shrink-0 tabular-nums select-none" style={{ color: s.c }}>{s.n}</span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-white mb-1.5">{s.t}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────── TAGS ────── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.5rem] font-bold text-white text-center mb-12 leading-tight">Six tags. Everything covered.</h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { icon: "💡", tag: "Tip", color: "#A855F7", ex: "Best view of the bridge from this bench" },
              { icon: "🅿️", tag: "Parking", color: "#3B82F6", ex: "Free 2hr parking behind the building" },
              { icon: "🍕", tag: "Food", color: "#F59E0B", ex: "The tacos here are incredible" },
              { icon: "⚠️", tag: "Warning", color: "#EF4444", ex: "This ATM skims cards" },
              { icon: "🚻", tag: "Restroom", color: "#EC4899", ex: "Public restroom inside the lobby" },
              { icon: "⚡", tag: "Shortcut", color: "#EAB308", ex: "Cut through this alley to skip the light" },
            ].map((t, i) => (
              <ScaleIn key={i} delay={i * 0.04}>
                <div className={`${cardHover} p-5 text-center`}>
                  <div className="text-xl mb-2">{t.icon}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: t.color }}>{t.tag}</div>
                  <p className="text-[11px] text-slate-500 italic leading-relaxed">&ldquo;{t.ex}&rdquo;</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ────── CTA ────── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <FadeUp>
            <div className={`${card} p-10 md:p-16 text-center relative overflow-hidden`}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] rounded-full bg-blue-500/[0.1] blur-[100px] pointer-events-none" />
              <h2 className="relative font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
                The next person walking by <span className="gradient-text">will thank you.</span>
              </h2>
              <p className="relative text-slate-400 mb-8 max-w-sm mx-auto text-[15px] leading-relaxed">Drop a tip in 10 seconds. No sign up. No setup. Just open and share.</p>
              <a href="https://apps.apple.com/app/knoted" className="relative inline-flex items-center gap-2.5 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-[15px] hover:scale-[1.03] transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download Knoted
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
