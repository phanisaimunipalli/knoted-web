"use client";

import { FadeUp } from "@/components/ScrollReveal";

const sections = [
  {
    title: "Overview",
    content: (
      <>
        <p>
          Knoted is built on a single privacy principle: <strong>we cannot share what we never had.</strong> The app is designed so that identifying information is architecturally impossible to collect — not just withheld by policy. There are no accounts, no emails, no names, no passwords, and no tracking identifiers tied to your real identity.
        </p>
        <p>
          This document describes exactly what data is collected, why it is collected, how it is stored, and what rights you have over it. It is written to meet the requirements of the Apple App Store, the California Consumer Privacy Act (CCPA), and the General Data Protection Regulation (GDPR) where applicable.
        </p>
        <p><strong>Effective Date:</strong> April 7, 2026<br /><strong>Last Updated:</strong> April 7, 2026<br /><strong>Developer:</strong> Phani Sai Ram Munipalli<br /><strong>Contact:</strong> phanisaimunipalli@gmail.com</p>
      </>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <>
        <p>We collect the minimum data required for Knoted to function. Nothing more.</p>

        <h3>1. Anonymous Device Identifier</h3>
        <p>
          When you first open Knoted, the app generates a random UUID (Universally Unique Identifier) and stores it in your device Keychain. This identifier is:
        </p>
        <ul>
          <li>Randomly generated — not derived from your Apple ID, name, email, or any other personal data</li>
          <li>Not shared with Apple or any third party</li>
          <li>Used only to associate your knots and votes within the app</li>
          <li>Deleted permanently when you delete the app (Keychain entry removed)</li>
        </ul>
        <p>This identifier is our equivalent of a session token. It lets the app know "this device dropped that knot" without knowing anything about who owns the device.</p>

        <h3>2. Precise Location Data</h3>
        <p>Knoted requests access to your device GPS location for three specific purposes:</p>
        <ul>
          <li><strong>Discovery:</strong> To show knots near your current location on the map</li>
          <li><strong>Dropping:</strong> To record the GPS coordinates of the knot you are creating</li>
          <li><strong>Presence verification:</strong> To confirm you are physically within 100 meters of a knot before allowing you to vote on it</li>
        </ul>
        <p>
          Location data is used on-device in real time. We do not store your location history, movement patterns, or travel routes. Your location is never sent to our servers (we do not operate servers). Only the coordinates of knots you intentionally drop are recorded in CloudKit.
        </p>
        <p>
          <strong>Background Location:</strong> If you grant &quot;Always&quot; location permission, Knoted uses iOS region monitoring to deliver a local notification when you enter a neighborhood that has knots. This processing happens entirely on your device via Apple&apos;s Core Location framework. No location data is transmitted to any external service during background operation.
        </p>

        <h3>3. Knot Content</h3>
        <p>When you drop a knot, the following data is stored in Apple CloudKit (iCloud public database):</p>
        <ul>
          <li>The text of the knot (up to 140 characters)</li>
          <li>The tag you selected (Food, Parking, Tip, Warning, Restroom, or Shortcut)</li>
          <li>The GPS coordinates where the knot was placed</li>
          <li>Your anonymous device ID (not linked to any personal identity)</li>
          <li>A timestamp (date and time of creation)</li>
          <li>Upvote and downvote counts</li>
        </ul>
        <p>Knot content is public — any Knoted user within proximity can read it. Do not include personal information in your knots.</p>

        <h3>4. Vote Records</h3>
        <p>
          When you upvote or downvote a knot, a record is stored in CloudKit containing your anonymous device ID and the knot ID. This prevents duplicate votes. It does not record your location at the time of voting beyond what was already used for the proximity check.
        </p>
      </>
    ),
  },
  {
    title: "Information We Do Not Collect",
    content: (
      <>
        <p>The following categories of data are never collected by Knoted:</p>
        <ul>
          <li>Name, email address, phone number, or any contact information</li>
          <li>Apple ID, iCloud account email, or any Apple account details</li>
          <li>Device name, model identifier beyond what iOS provides to all apps</li>
          <li>Photos, camera roll, microphone recordings, or media files</li>
          <li>Contacts, calendar, health data, or any other app data</li>
          <li>Browsing history, search history, or cross-app behavior</li>
          <li>Advertising Identifier (IDFA) — Knoted does not request this</li>
          <li>IP address or network metadata stored in association with your identity</li>
          <li>Payment information of any kind</li>
          <li>Biometric data</li>
          <li>Financial or employment information</li>
          <li>Sensitive personal information of any category</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        <p>The data we collect is used exclusively for the following purposes:</p>
        <ul>
          <li><strong>App functionality:</strong> Displaying knots on the map, processing drops and votes, and enforcing the 100-meter presence gate</li>
          <li><strong>Spam and abuse prevention:</strong> The anonymous device ID is used to rate-limit drops and votes per device to prevent flooding</li>
          <li><strong>Background notifications:</strong> If you opt in, delivering local notifications when you enter areas with active knots</li>
          <li><strong>Data expiration:</strong> Automatically removing knots that have not received any upvotes within 60 days</li>
        </ul>
        <p>We do not use your data for advertising, profiling, behavioral analysis, or sale to third parties. We have no business model that depends on your data. The app is free and contains no advertising.</p>
      </>
    ),
  },
  {
    title: "Data Storage and Security",
    content: (
      <>
        <h3>Apple CloudKit</h3>
        <p>
          All knot and vote data is stored in Apple&apos;s CloudKit public database. CloudKit is managed and secured by Apple, Inc. Apple applies encryption in transit (TLS) and at rest. Apple&apos;s privacy practices for CloudKit are governed by the <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a>.
        </p>
        <p>
          We do not operate our own backend servers, databases, or data warehouses. We have no infrastructure that holds a copy of your data.
        </p>

        <h3>Device Keychain</h3>
        <p>
          Your anonymous device ID is stored in the iOS Keychain, which is encrypted by the operating system and tied to your device hardware. It is not backed up to iCloud (we use the non-synced Keychain group) and is not accessible to other apps.
        </p>

        <h3>Security Measures</h3>
        <p>
          Because we do not collect personal data and do not operate servers, our attack surface is minimal. The primary security layer protecting knot data is Apple&apos;s CloudKit infrastructure. On-device data (the device ID) is protected by iOS Keychain encryption and device passcode/biometric protection.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Services",
    content: (
      <>
        <p>Knoted uses two Apple-provided services. No third-party analytics, advertising, or tracking SDKs are integrated.</p>
        <ul>
          <li>
            <strong>Apple CloudKit:</strong> Cloud database for knot and vote storage. Data is subject to Apple&apos;s terms and privacy policy. Apple does not use CloudKit data for advertising.
          </li>
          <li>
            <strong>Apple MapKit:</strong> Renders the interactive map. MapKit may send anonymized map tile requests to Apple servers. Apple&apos;s MapKit privacy practices are governed by Apple&apos;s privacy policy.
          </li>
        </ul>
        <p>
          We have deliberately avoided integrating Firebase, Mixpanel, Amplitude, Sentry, Crashlytics, Facebook SDK, Google Analytics, or any other third-party data collection service.
        </p>
      </>
    ),
  },
  {
    title: "Location Permissions in Detail",
    content: (
      <>
        <p>Knoted requests two levels of location access on iOS:</p>

        <h3>While Using the App (&quot;When In Use&quot;)</h3>
        <p>Required for: showing the map, dropping knots, voting. This is the minimum needed to use the core feature set. You can use Knoted entirely with this permission level.</p>

        <h3>Always (Background)</h3>
        <p>
          Optional. If granted, iOS allows Knoted to use region monitoring to detect when you enter a geographic area that has active knots. This triggers a local notification generated on-device. No location data is transmitted externally during background operation. This is processed entirely by Apple&apos;s Core Location framework on your device.
        </p>
        <p>
          You can change location permissions at any time in Settings → Privacy &amp; Security → Location Services → Knoted. Downgrading to &quot;Never&quot; will stop the map from working but will not delete any of your previously dropped knots.
        </p>
      </>
    ),
  },
  {
    title: "Data Retention and Deletion",
    content: (
      <>
        <h3>Automatic Expiry</h3>
        <p>
          Knots with zero upvotes are automatically deleted from CloudKit after 60 days of inactivity. Knots with one or more upvotes persist indefinitely until voted down below zero, at which point they are removed.
        </p>

        <h3>Deleting Your Knots</h3>
        <p>
          You can delete any knot you created from within the app (tap the knot → Delete). Deletion is immediate and permanent. Once deleted from CloudKit, the data is unrecoverable.
        </p>

        <h3>Deleting the App</h3>
        <p>
          When you delete Knoted, the anonymous device ID is removed from your Keychain. Your previously dropped knots remain in the public CloudKit database (they are community data) but are no longer attributable to any device or person. If you want your knots removed before deleting the app, please delete them individually first or contact us.
        </p>

        <h3>Data Deletion Request</h3>
        <p>
          If you want all data associated with your anonymous device ID purged from CloudKit, email us at <a href="mailto:phanisaimunipalli@gmail.com">phanisaimunipalli@gmail.com</a> with the subject line &quot;Data Deletion Request.&quot; Because there is no account or name attached, you will need to provide your anonymous device ID (found in Settings → About in the app) so we can identify your records.
        </p>
      </>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <>
        <h3>California Residents (CCPA / CPRA)</h3>
        <p>Under the California Consumer Privacy Act, you have the right to:</p>
        <ul>
          <li><strong>Know</strong> what personal information is collected about you</li>
          <li><strong>Delete</strong> personal information we hold about you</li>
          <li><strong>Opt out</strong> of the sale of personal information (we do not sell data)</li>
          <li><strong>Non-discrimination</strong> for exercising your privacy rights</li>
        </ul>
        <p>
          Because Knoted does not collect personal information as defined by CCPA (the anonymous device ID is not linked to a real identity), most CCPA rights are satisfied by design. For deletion requests, see the section above.
        </p>

        <h3>European Residents (GDPR)</h3>
        <p>Under the General Data Protection Regulation, if you are in the European Economic Area, you have the right to:</p>
        <ul>
          <li>Access the data we hold about you</li>
          <li>Rectify inaccurate data</li>
          <li>Erasure (&quot;right to be forgotten&quot;)</li>
          <li>Restrict processing</li>
          <li>Data portability</li>
          <li>Object to processing</li>
        </ul>
        <p>
          The lawful basis for processing your data under GDPR is <strong>legitimate interest</strong> (app functionality) and <strong>consent</strong> (location permission). To exercise any GDPR right, contact <a href="mailto:phanisaimunipalli@gmail.com">phanisaimunipalli@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Knoted is not directed at children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. Since no personal information is collected by design, there is no mechanism by which a child&apos;s data would be treated differently from an adult&apos;s. The anonymous device ID is age-neutral.
        </p>
        <p>
          If you believe a child under 13 has used Knoted and you wish to have their knots removed, contact us at <a href="mailto:phanisaimunipalli@gmail.com">phanisaimunipalli@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    title: "Apple App Store Privacy Labels",
    content: (
      <>
        <p>The following reflects what is reported in Knoted&apos;s App Store privacy nutrition label:</p>

        <h3>Data Linked to You</h3>
        <p>None. Knoted does not link any data category to your identity.</p>

        <h3>Data Used to Track You</h3>
        <p>None. Knoted does not participate in cross-app tracking or advertising networks.</p>

        <h3>Data Not Linked to You</h3>
        <ul>
          <li><strong>Location:</strong> Precise location (used for app functionality only, not tracking)</li>
          <li><strong>Identifiers:</strong> Device ID (anonymous, app-generated UUID only)</li>
          <li><strong>User Content:</strong> Text content of knots you choose to create</li>
        </ul>
      </>
    ),
  },
  {
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy when we add new features or when legal requirements change. When we do, we will update the &quot;Last Updated&quot; date at the top of this page. If changes are material — meaning they affect how data is collected or used in a significant new way — we will provide notice in the app on the next open after the change.
        </p>
        <p>
          Continued use of Knoted after changes become effective constitutes your acceptance of the revised policy. If you disagree with any change, you may stop using the app and request deletion of your data.
        </p>
      </>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p>For any privacy-related questions, data deletion requests, or concerns:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:phanisaimunipalli@gmail.com">phanisaimunipalli@gmail.com</a></li>
          <li><strong>Subject line for data requests:</strong> &quot;Knoted Privacy Request&quot;</li>
          <li><strong>Response time:</strong> We aim to respond within 7 business days</li>
        </ul>
        <p>
          If you are in the EU and believe we have not handled your data in accordance with GDPR, you have the right to lodge a complaint with your local data protection authority.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="relative z-10 pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-[0.2em] mb-3">Legal</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm">Effective April 7, 2026 · Last updated April 7, 2026</p>
          </div>
        </FadeUp>

        {/* Quick summary */}
        <FadeUp delay={0.08}>
          <div className="bg-emerald-500/[0.06] border border-emerald-500/[0.15] rounded-2xl p-6 mb-10">
            <p className="text-[13px] text-emerald-400 font-semibold uppercase tracking-widest mb-2">TL;DR</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Knoted has no accounts, no emails, and no names. The only identifier is a random UUID stored on your device. Your location is used on-device only — never logged or sold. All knot data lives in Apple CloudKit. We have no servers, no analytics, and no ads. We can&apos;t share what we don&apos;t have.
            </p>
          </div>
        </FadeUp>

        {/* Table of contents */}
        <FadeUp delay={0.12}>
          <div className="bg-[#0F1D32] border border-white/[0.08] rounded-2xl p-6 mb-10">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-4">Contents</p>
            <ol className="space-y-1.5">
              {sections.map((s, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="text-slate-600 tabular-nums text-[11px]">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </FadeUp>

        {/* Sections */}
        {sections.map((s, i) => (
          <FadeUp key={i} delay={0.05}>
            <div id={`section-${i}`} className="bg-[#0F1D32] border border-white/[0.08] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] p-8 md:p-10 legal-content mb-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-semibold text-slate-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="!mt-0 !mb-0">{s.title}</h2>
              </div>
              {s.content}
            </div>
          </FadeUp>
        ))}

        <FadeUp delay={0.05}>
          <p className="text-center text-[12px] text-slate-600 mt-8">
            © 2026 Phani Sai Ram Munipalli · <a href="/terms" className="hover:text-slate-400 transition-colors">Terms of Use</a> · <a href="/support" className="hover:text-slate-400 transition-colors">Support</a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
