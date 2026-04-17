import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Tag colors matching the iOS app
const TAG_COLORS: Record<string, string> = {
  Tip: "#A855F7",
  Parking: "#3B82F6",
  Food: "#F59E0B",
  Warning: "#EF4444",
  Restroom: "#EC4899",
  Shortcut: "#EAB308",
};

// Mock knots for OG image generation (mirrors the API route)
const MOCK_KNOTS: Record<string, { text: string; tag: string; locationName: string; upvotes: number }> = {
  demo: {
    text: "Free 2-hour parking behind the green building. Meter maids never check after 6pm.",
    tag: "Parking",
    locationName: "SoMa, San Francisco",
    upvotes: 14,
  },
  demo2: {
    text: "The tacos from the yellow truck here are the best in the city. Cash only. Worth it.",
    tag: "Food",
    locationName: "Arts District, Los Angeles",
    upvotes: 7,
  },
  demo3: {
    text: "This ATM skims cards. Two people got hit last week. Use the one inside the lobby instead.",
    tag: "Warning",
    locationName: "Lower Manhattan, New York",
    upvotes: 23,
  },
};

async function getKnotForOG(id: string) {
  // Try API first
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/knot/${id}`, { next: { revalidate: 300 } });
    if (res.ok) return res.json();
  } catch {
    // Fall through to mock
  }

  return MOCK_KNOTS[id] || null;
}

export default async function OGImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const knot = await getKnotForOG(id);

  if (!knot) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0A0F1A",
            color: "#f0f0ff",
            fontSize: 40,
            fontFamily: "sans-serif",
          }}
        >
          Knot not found
        </div>
      ),
      { ...size }
    );
  }

  const tagColor = TAG_COLORS[knot.tag] || TAG_COLORS.Tip;
  const displayText = knot.text.length > 100 ? knot.text.slice(0, 97) + "..." : knot.text;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0A0F1A 0%, #0d1225 50%, #0A0F1A 100%)",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${tagColor}15, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Location label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
            color: "#55556a",
            fontSize: 18,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
          }}
        >
          Someone left this at
        </div>

        {/* Location name */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#f0f0ff",
            marginBottom: 24,
          }}
        >
          {knot.locationName}
        </div>

        {/* Tag badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 16px",
            borderRadius: 999,
            background: `${tagColor}20`,
            color: tagColor,
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 40,
            border: `1px solid ${tagColor}40`,
          }}
        >
          {knot.tag}
        </div>

        {/* The knot text */}
        <div
          style={{
            fontSize: 36,
            fontStyle: "italic",
            color: "#f0f0ff",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 900,
            marginBottom: 40,
          }}
        >
          &ldquo;{displayText}&rdquo;
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "absolute",
            bottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "#55556a",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {knot.upvotes > 0 && (
              <span style={{ color: "#22C55E" }}>
                Confirmed by {knot.upvotes} locals
              </span>
            )}
            <span style={{ margin: "0 8px", color: "#3a3a50" }}>|</span>
            <span>knoted</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
