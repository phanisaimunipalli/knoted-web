"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp, ScaleIn, WordReveal } from "@/components/ScrollReveal";

const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const card = "card";
const cardHover = "card-hover";

/* ─── Globe Hero ─────────────────────────────────────────── */
function GlobeHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const globeScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const globeY = useTransform(scrollYProgress, [0, 0.6], ["0%", "10%"]);

  const textY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-25%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const taglineY = useTransform(scrollYProgress, [0, 0.35], ["0%", "-18%"]);

  return (
    <section ref={heroRef} className="relative min-h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Globe fills full background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ scale: globeScale, opacity: globeOpacity, y: globeY }}
        >
          <div className="w-[min(90vw,700px)] h-[min(90vw,700px)]">
            <Globe />
          </div>
          {/* Radial fade so globe blends into page bg */}
          <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        </motion.div>

        {/* Overlay text — always white regardless of theme, sits over globe */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto hero-always-white">
          <motion.div style={{ y: taglineY }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(12px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[13px] font-medium text-white/80">Now on the App Store</span>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
              <WordReveal text="Knots around" delay={0.5} />
              <br />
              <WordReveal text="the world." delay={0.7} className="gradient-text" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease }}
              className="text-[clamp(1rem,2vw,1.2rem)] leading-relaxed mb-10 max-w-xl mx-auto text-white/70"
            >
              GPS-pinned tips from real people. Presence-verified. No accounts. Just the city, and what it knows.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="https://apps.apple.com/app/knoted"
                className="inline-flex items-center gap-2.5 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-[15px] hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download for iOS
              </a>
              <a href="#how-it-works" className="text-white/60 hover:text-white text-[15px] font-medium transition-colors flex items-center gap-1.5">
                See how it works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: "var(--text-xmuted)" }}>Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent"
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─────────────────────────────────────────── */
function StatsBar() {
  return (
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
  );
}

/* ─── Features — static grid ────────────────────────────── */
const features = [
  { icon: "📍", title: "GPS-Pinned", desc: "Every tip is locked to the exact spot. Not a neighborhood. Not a zip code. The actual coordinates.", color: "#3B82F6" },
  { icon: "🚶", title: "Presence-Gated", desc: "You have to physically walk there to vote. 100 meters or less. No remote opinions.", color: "#22C55E" },
  { icon: "⏳", title: "Self-Cleaning", desc: "Uncared-for tips vanish after 60 days. Upvoted tips live forever. The map cleans itself.", color: "#F59E0B" },
  { icon: "🏷️", title: "Tagged Tips", desc: "Parking, food, shortcuts, warnings, restrooms. Know what you're looking at before you tap.", color: "#A855F7" },
  { icon: "🔔", title: "Background Nudges", desc: "Walk into a neighborhood with tips? You'll get a tap. Even when the app is closed.", color: "#EF4444" },
  { icon: "👤", title: "Zero Identity", desc: "No accounts. No profiles. No followers. Your device has an anonymous ID. That's all.", color: "#06B6D4" },
];

function FeatureSection() {
  return (
    <section id="features" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <p className="text-[12px] text-blue-400 font-semibold uppercase tracking-[0.2em] mb-3 text-center">Features</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.75rem] font-bold text-center mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
            What makes it different
          </h2>
          <p className="text-center max-w-md mx-auto mb-14 text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Google Maps shows you where. Knoted shows you what people who stood there actually know.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <ScaleIn key={i} delay={i * 0.05}>
              <div className={`${cardHover} p-7 h-full`}>
                <div className="w-10 h-10 rounded-xl grid place-items-center text-lg mb-5" style={{ background: `${f.color}20` }}>{f.icon}</div>
                <h3 className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── App Showcase ──────────────────────────────────────── */
function ShowcaseSection() {
  const screens = [
    { src: "/mockups/drop-dark.png",     alt: "Drop a Knot",   label: "Drop a tip",         sublabel: "140 chars. Tagged. Done." },
    { src: "/mockups/map-dark.png",      alt: "Map view",      label: "Explore the map",    sublabel: "See what's around you."  },
    { src: "/mockups/detail-warning.png", alt: "Knot detail",  label: "Confirm from the spot", sublabel: "Be there to believe it." },
  ];

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <p className="text-[12px] text-emerald-400 font-semibold uppercase tracking-[0.2em] mb-3 text-center">The experience</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.75rem] font-bold text-center mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
            Drop. Discover. Confirm.
          </h2>
          <p className="text-center max-w-md mx-auto mb-16 text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Three screens. Zero friction.
          </p>
        </FadeUp>

        {/* Three phones — equal weight, center slightly taller */}
        <div className="flex justify-center items-end gap-5 md:gap-10">
          {screens.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center">
                <div className="phone-glow">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={i === 1 ? 240 : 200}
                    height={i === 1 ? 490 : 409}
                    className="h-auto rounded-[2rem] shadow-2xl"
                  />
                </div>
                <p className="text-center text-[13px] font-semibold mt-4 mb-0.5" style={{ color: "var(--text-primary)" }}>{s.label}</p>
                <p className="text-center text-[11px]" style={{ color: "var(--text-muted)" }}>{s.sublabel}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works — horizontal-ish cinematic ───────────── */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Drop a tip", d: "See something worth sharing? Tap drop, write 140 characters, tag it, done. Your GPS locks it to the exact spot.", c: "#3B82F6", icon: "📍" },
    { n: "02", t: "Walk and discover", d: "Tips appear on the map as you move. Parking tricks, food spots, shortcuts. All left by people who stood right where you are.", c: "#22C55E", icon: "🗺️" },
    { n: "03", t: "Be there to believe it", d: "Walk to the spot and confirm the tip is still accurate. Or mark it outdated. Presence is the only proof that counts.", c: "#F59E0B", icon: "✅" },
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <p className="text-[12px] text-amber-400 font-semibold uppercase tracking-[0.2em] mb-3 text-center">How it works</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.75rem] font-bold text-white text-center mb-16 leading-tight">
            Three moves. That&apos;s it.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <ScaleIn key={i} delay={i * 0.1}>
              <div className={`${card} p-8 h-full flex flex-col`}>
                <div className="w-12 h-12 rounded-2xl grid place-items-center text-2xl mb-5" style={{ background: `${s.c}15`, border: `1px solid ${s.c}25` }}>
                  {s.icon}
                </div>
                <span className="text-5xl font-extrabold opacity-[0.07] mb-3 tabular-nums select-none" style={{ color: s.c }}>{s.n}</span>
                <h3 className="text-[16px] font-semibold text-white mb-3">{s.t}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{s.d}</p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Tags Grid ─────────────────────────────────────────── */
function TagsSection() {
  const tags = [
    { icon: "💡", tag: "Tip", color: "#A855F7", ex: "Best view of the bridge from this bench" },
    { icon: "🅿️", tag: "Parking", color: "#3B82F6", ex: "Free 2hr parking behind the building" },
    { icon: "🍕", tag: "Food", color: "#F59E0B", ex: "The tacos here are incredible" },
    { icon: "⚠️", tag: "Warning", color: "#EF4444", ex: "This ATM skims cards" },
    { icon: "🚻", tag: "Restroom", color: "#EC4899", ex: "Public restroom inside the lobby" },
    { icon: "⚡", tag: "Shortcut", color: "#EAB308", ex: "Cut through this alley to skip the light" },
  ];

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <FadeUp>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.5rem] font-bold text-white text-center mb-12 leading-tight">
            Six tags. Everything covered.
          </h2>
        </FadeUp>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {tags.map((t, i) => (
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
  );
}

/* ─── CTA ───────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <FadeUp>
          <div className={`${card} p-10 md:p-16 text-center relative overflow-hidden`}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] rounded-full bg-blue-500/[0.1] blur-[100px] pointer-events-none" />
            <h2 className="relative font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
              The next person walking by{" "}
              <span className="gradient-text">will thank you.</span>
            </h2>
            <p className="relative text-slate-400 mb-8 max-w-sm mx-auto text-[15px] leading-relaxed">
              Drop a tip in 10 seconds. No sign up. No setup. Just open and share.
            </p>
            <a
              href="https://apps.apple.com/app/knoted"
              className="relative inline-flex items-center gap-2.5 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-[15px] hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download Knoted
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <GlobeHero />
      <StatsBar />
      <FeatureSection />
      <ShowcaseSection />
      <HowItWorks />
      <TagsSection />
      <CTASection />
    </>
  );
}
