import { NextRequest } from "next/server";

// Tag colors matching the iOS app
const TAG_COLORS: Record<string, string> = {
  Tip: "#A855F7",
  Parking: "#3B82F6",
  Food: "#F59E0B",
  Warning: "#EF4444",
  Restroom: "#EC4899",
  Shortcut: "#EAB308",
};

// Tag icons matching the iOS app
const TAG_ICONS: Record<string, string> = {
  Tip: "💡",
  Parking: "🅿️",
  Food: "🍕",
  Warning: "⚠️",
  Restroom: "🚻",
  Shortcut: "⚡",
};

export interface KnotData {
  knotId: string;
  text: string;
  tag: string;
  tagColor: string;
  tagIcon: string;
  latitude: number;
  longitude: number;
  upvotes: number;
  downvotes: number;
  createdAt: string;
  locationName: string;
  daysRemaining: number | null; // null = lives forever
}

// Mock data for development — replace with CloudKit fetch when API token is configured
const MOCK_KNOTS: Record<string, KnotData> = {
  demo: {
    knotId: "demo",
    text: "Free 2-hour parking behind the green building. Meter maids never check after 6pm.",
    tag: "Parking",
    tagColor: TAG_COLORS.Parking,
    tagIcon: TAG_ICONS.Parking,
    latitude: 37.7749,
    longitude: -122.4194,
    upvotes: 14,
    downvotes: 2,
    createdAt: "2026-03-01T12:00:00Z",
    locationName: "SoMa, San Francisco",
    daysRemaining: null, // confirmed — lives forever
  },
  demo2: {
    knotId: "demo2",
    text: "The tacos from the yellow truck here are the best in the city. Cash only. Worth it.",
    tag: "Food",
    tagColor: TAG_COLORS.Food,
    tagIcon: TAG_ICONS.Food,
    latitude: 34.0522,
    longitude: -118.2437,
    upvotes: 7,
    downvotes: 1,
    createdAt: "2026-03-20T15:30:00Z",
    locationName: "Arts District, Los Angeles",
    daysRemaining: 34,
  },
  demo3: {
    knotId: "demo3",
    text: "This ATM skims cards. Two people got hit last week. Use the one inside the lobby instead.",
    tag: "Warning",
    tagColor: TAG_COLORS.Warning,
    tagIcon: TAG_ICONS.Warning,
    latitude: 40.7128,
    longitude: -74.006,
    upvotes: 23,
    downvotes: 0,
    createdAt: "2026-02-10T09:00:00Z",
    locationName: "Lower Manhattan, New York",
    daysRemaining: null,
  },
};

async function fetchFromCloudKit(knotId: string): Promise<KnotData | null> {
  const token = process.env.CLOUDKIT_API_TOKEN;

  if (!token) {
    // Fall back to mock data if no token is configured
    return MOCK_KNOTS[knotId] || null;
  }

  // TODO: Wire up CloudKit Web Services when API token is configured
  // CloudKit Web Services endpoint:
  // POST https://api.apple-cloudkit.com/database/1/iCloud.com.phanisairam.knoted/production/public/records/query
  // Headers: { Authorization: "Bearer <token>" }
  // Body: { query: { recordType: "Knot", filterBy: [{ fieldName: "knotId", comparator: "EQUALS", fieldValue: { value: knotId } }] } }
  try {
    const res = await fetch(
      "https://api.apple-cloudkit.com/database/1/iCloud.com.phanisairam.knoted/production/public/records/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          query: {
            recordType: "Knot",
            filterBy: [
              {
                fieldName: "knotId",
                comparator: "EQUALS",
                fieldValue: { value: knotId, type: "STRING" },
              },
            ],
          },
        }),
      }
    );

    if (!res.ok) {
      console.error("CloudKit query failed:", res.status);
      return MOCK_KNOTS[knotId] || null;
    }

    const data = await res.json();
    const record = data.records?.[0];

    if (!record) return null;

    const fields = record.fields;
    const tag = fields.tag?.value || "Tip";
    const upvotes = fields.upvotes?.value || 0;
    const createdAt = fields.createdAt?.value || record.created?.timestamp;
    const createdDate = new Date(createdAt);
    const now = new Date();
    const daysSinceCreation = Math.floor(
      (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const daysRemaining = upvotes > 0 ? null : Math.max(0, 60 - daysSinceCreation);

    return {
      knotId: fields.knotId?.value || knotId,
      text: fields.text?.value || "",
      tag,
      tagColor: TAG_COLORS[tag] || TAG_COLORS.Tip,
      tagIcon: TAG_ICONS[tag] || TAG_ICONS.Tip,
      latitude: fields.latitude?.value || 0,
      longitude: fields.longitude?.value || 0,
      upvotes,
      downvotes: fields.downvotes?.value || 0,
      createdAt,
      locationName: fields.locationName?.value || "Unknown location",
      daysRemaining,
    };
  } catch (err) {
    console.error("CloudKit fetch error:", err);
    return MOCK_KNOTS[knotId] || null;
  }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const knot = await fetchFromCloudKit(id);

  if (!knot) {
    return Response.json({ error: "Knot not found" }, { status: 404 });
  }

  return Response.json(knot);
}
