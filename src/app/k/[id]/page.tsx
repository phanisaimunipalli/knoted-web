import type { Metadata } from "next";
import { cache } from "react";
import KnotCard from "./KnotCard";
import type { KnotData } from "@/app/api/knot/[id]/route";

// Memoize the fetch so generateMetadata and Page share a single request
const getKnot = cache(async (id: string): Promise<KnotData | null> => {
  // In production, fetch from the API route via absolute URL.
  // In server components, we can call the same logic directly.
  // For simplicity, we inline the fetch from the API route's mock/CloudKit logic.
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/knot/${id}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const knot = await getKnot(id);

  if (!knot) {
    return {
      title: "Knot not found — Knoted",
      description: "This knot may have expired or doesn't exist.",
    };
  }

  const title = `Someone left this at ${knot.locationName}`;
  const description = knot.text.length > 120 ? knot.text.slice(0, 117) + "..." : knot.text;
  const url = `https://knoted-web.vercel.app/k/${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Knoted",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "apple-itunes-app": "app-id=6761508441",
    },
  };
}

export default async function KnotSharePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const knot = await getKnot(id);

  if (!knot) {
    return <KnotNotFound />;
  }

  return <KnotCard knot={knot} />;
}

function KnotNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div
        className="relative rounded-2xl p-10 md:p-14 text-center max-w-md w-full"
        style={{
          background: "linear-gradient(145deg, rgba(15,15,35,0.95), rgba(10,15,26,0.98))",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 8px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* Ghost pin */}
        <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
          <svg className="w-7 h-7 opacity-30" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text-muted)" }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          This knot has untied
        </h1>
        <p className="text-[14px] leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
          It may have expired after 60 days without enough upvotes, or the link is invalid.
        </p>
        <a
          href="https://apps.apple.com/us/app/knoted/id6761508441"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-[14px] hover:scale-[1.03] active:scale-[0.98] transition-transform"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Get Knoted
        </a>
      </div>
    </div>
  );
}
