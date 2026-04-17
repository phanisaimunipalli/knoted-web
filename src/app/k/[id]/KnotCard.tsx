"use client";

import { motion } from "framer-motion";
import type { KnotData } from "@/app/api/knot/[id]/route";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function MapPinVisual({ tagColor }: { tagColor: string }) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease }}
    >
      {/* Glow rings */}
      <div className="absolute w-24 h-24 rounded-full animate-ping opacity-[0.06]" style={{ background: tagColor }} />
      <div className="absolute w-16 h-16 rounded-full animate-pulse opacity-[0.12]" style={{ background: tagColor }} />

      {/* Map grid lines — subtle coordinate hint */}
      <svg className="absolute w-40 h-40 opacity-[0.05]" viewBox="0 0 160 160">
        <line x1="80" y1="0" x2="80" y2="160" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="80" x2="160" y2="80" stroke="white" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="30" fill="none" stroke="white" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="60" fill="none" stroke="white" strokeWidth="0.3" />
      </svg>

      {/* Pin */}
      <motion.div
        className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: tagColor, boxShadow: `0 0 30px ${tagColor}60` }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

function TagBadge({ tag, tagColor, tagIcon }: { tag: string; tagColor: string; tagIcon: string }) {
  return (
    <motion.div
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold"
      style={{ background: `${tagColor}18`, color: tagColor, border: `1px solid ${tagColor}30` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease }}
    >
      <span>{tagIcon}</span>
      <span>{tag}</span>
    </motion.div>
  );
}

function VoteInfo({ upvotes, daysRemaining }: { upvotes: number; daysRemaining: number | null }) {
  const isForever = daysRemaining === null;

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3 text-[12px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      {upvotes > 0 && (
        <span className="flex items-center gap-1" style={{ color: "#22C55E" }}>
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Confirmed by {upvotes} {upvotes === 1 ? "local" : "locals"}
        </span>
      )}
      <span className="flex items-center gap-1" style={{ color: isForever ? "#22C55E" : "var(--text-muted)" }}>
        {isForever ? (
          <>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Lives forever
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {daysRemaining}d left
          </>
        )}
      </span>
    </motion.div>
  );
}

export default function KnotCard({ knot }: { knot: KnotData }) {
  const appLink = `https://knoted-web.vercel.app/redirect?id=${knot.knotId}`;
  const storeLink = "https://apps.apple.com/us/app/knoted/id6761508441";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24">
      {/* Card */}
      <motion.div
        className="knot-share-card relative w-full max-w-md overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease }}
      >
        {/* Glow behind card */}
        <div
          className="absolute -inset-1 rounded-[1.5rem] opacity-[0.15] blur-xl -z-10"
          style={{ background: `radial-gradient(ellipse at center, ${knot.tagColor}40, transparent 70%)` }}
        />

        <div
          className="relative rounded-2xl p-8 md:p-10"
          style={{
            background: "linear-gradient(145deg, rgba(15,15,35,0.95), rgba(10,15,26,0.98))",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 8px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Top section: pin + location */}
          <div className="flex flex-col items-center gap-5 mb-8">
            <MapPinVisual tagColor={knot.tagColor} />

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium mb-1" style={{ color: "var(--text-muted)" }}>
                Someone left this at
              </p>
              <h2 className="text-[15px] font-semibold" style={{ color: "var(--text-primary)" }}>
                {knot.locationName}
              </h2>
            </motion.div>

            <TagBadge tag={knot.tag} tagColor={knot.tagColor} tagIcon={knot.tagIcon} />
          </div>

          {/* The knot text — the secret message */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Decorative quotes */}
            <div
              className="absolute -top-3 -left-1 text-4xl font-serif select-none opacity-[0.08]"
              style={{ color: knot.tagColor }}
            >
              &ldquo;
            </div>
            <blockquote
              className="font-[family-name:var(--font-display)] text-[1.15rem] md:text-[1.3rem] leading-relaxed text-center italic px-4"
              style={{ color: "var(--text-primary)" }}
            >
              {knot.text}
            </blockquote>
            <div
              className="absolute -bottom-5 -right-1 text-4xl font-serif select-none opacity-[0.08]"
              style={{ color: knot.tagColor }}
            >
              &rdquo;
            </div>
          </motion.div>

          {/* Vote info */}
          <VoteInfo upvotes={knot.upvotes} daysRemaining={knot.daysRemaining} />

          {/* Divider */}
          <motion.div
            className="my-8 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          />

          {/* CTA section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <p className="text-[13px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Want to confirm it&apos;s still true?
              <br />
              <span style={{ color: "var(--text-muted)" }}>You need to be there.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={appLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: knot.tagColor,
                  color: "#fff",
                  boxShadow: `0 4px 20px ${knot.tagColor}40`,
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Open in Knoted
              </a>
              <a
                href={storeLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] transition-all hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "var(--text-secondary)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Get Knoted
              </a>
            </div>

            <p className="mt-5 text-[11px]" style={{ color: "var(--text-xmuted)" }}>
              Or drop your own knot — no account needed
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle branding */}
      <motion.div
        className="mt-8 flex items-center gap-2 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text-muted)" }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <span className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
          knoted
        </span>
      </motion.div>
    </div>
  );
}
