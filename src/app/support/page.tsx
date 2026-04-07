"use client";

import { FadeUp } from "@/components/ScrollReveal";

const faqs = [
  { q: "Why can I not see any knots on the map?", a: "Knots are location-based. Make sure location access is enabled and you are in an area where others have dropped tips. Try syncing by tapping the refresh button." },
  { q: "Why can I not vote on a knot?", a: "Voting requires you to be within 100 meters of the knot. Walk closer to the spot and try again. You also cannot vote on your own knots." },
  { q: "How long do knots last?", a: "Knots live for 60 days. If a knot receives at least one upvote during that time, it lives on forever." },
  { q: "Do I need an account?", a: "No. Knoted requires no account, no sign-in, and no personal information. Your device is identified by an anonymous ID stored securely on your device." },
  { q: "How do I delete a knot I dropped?", a: "Open My Knots from the map screen, swipe left on the knot, and tap Delete." },
  { q: "Why am I not getting notifications?", a: "Notifications require Always On location permission. Go to Settings > Knoted > Location > Always. Also ensure notifications are enabled in Settings > Knoted > Notifications." },
  { q: "What tags can I use?", a: "There are six tags: Tip, Parking, Food, Warning, Restroom, and Shortcut. Pick the one that best describes what you are sharing." },
  { q: "Can I see knots when traveling to a new city?", a: "Yes. As soon as you arrive and your GPS updates, nearby knots will appear on your map. Sync to pull the latest tips." },
];

export default function SupportPage() {
  return (
    <section className="relative z-10 pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">
              Support
            </h1>
            <p className="text-slate-500 text-[15px]">
              Everything you need to know about Knoted.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.04}>
              <details className="bg-[#0F1D32] border border-white/[0.08] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] group p-6 cursor-pointer">
                <summary className="flex items-center justify-between text-white font-medium text-[15px] list-none select-none">
                  {faq.q}
                  <svg
                    className="size-4 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="bg-[#0F1D32] border border-white/[0.08] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] p-12 text-center mt-14">
            <h2 className="text-xl font-semibold text-white mb-3">
              Still need help?
            </h2>
            <p className="text-sm text-slate-400 mb-8 max-w-xs mx-auto">
              Reach out and we will get back to you as soon as we can.
            </p>
            <a
              href="mailto:phanisaimunipalli@gmail.com"
              className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.10] transition-colors"
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
