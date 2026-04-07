"use client";

import { FadeUp } from "@/components/ScrollReveal";

export default function PrivacyPage() {
  return (
    <section className="relative z-10 pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm">Last updated: April 6, 2026</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-[#0F1D32] border border-white/[0.08] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] p-8 md:p-12 legal-content">
            <h2>Overview</h2>
            <p>
              Knoted is designed with privacy at its core. We do not collect personal information. There are no accounts, no emails, no names, and no passwords. Your privacy is not a feature. It is the foundation of how Knoted works.
            </p>

            <h2>What We Collect</h2>
            <p>Knoted collects only what is necessary for the app to function:</p>
            <ul>
              <li><strong>Anonymous Device ID:</strong> A random UUID generated on your device and stored in your device Keychain. This is not linked to your name, Apple ID, or any personal identifier.</li>
              <li><strong>Location Data:</strong> Your GPS coordinates are used in real time to show nearby knots, to place knots you drop, and to verify your physical presence for voting.</li>
              <li><strong>Knot Content:</strong> The text, tag, and GPS coordinates of knots you drop are stored in Apple CloudKit (iCloud public database).</li>
              <li><strong>Vote Records:</strong> When you vote on a knot, a record of your anonymous device ID and the knot ID is stored in CloudKit to prevent duplicate voting.</li>
            </ul>

            <h2>What We Do Not Collect</h2>
            <ul>
              <li>Names, emails, phone numbers, or any personal contact information</li>
              <li>Apple ID or iCloud account details</li>
              <li>Browsing history or app usage analytics</li>
              <li>Photos, contacts, or any data from other apps on your device</li>
              <li>Advertising identifiers or tracking data</li>
            </ul>

            <h2>Data Storage</h2>
            <p>
              All knot data is stored in Apple CloudKit, Apple&apos;s cloud infrastructure. Apple manages the security and encryption of this data. We do not operate our own servers.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Knoted uses Apple CloudKit for data storage and Apple MapKit for map rendering. No third-party analytics, advertising, or tracking services are used.
            </p>

            <h2>Location Permission</h2>
            <p>
              Knoted requests location permission for showing nearby knots, placing new knots, and verifying physical presence for voting. The &quot;Always&quot; permission is used solely for background notifications. You can change this at any time in Settings.
            </p>

            <h2>Data Retention</h2>
            <p>
              Knots with zero votes are automatically removed after 60 days. Knots with at least one upvote persist indefinitely. There is no way to associate a knot with a real person.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Knoted does not knowingly collect information from children under the age of 13. Since no personal information is collected, there is no data to distinguish users by age.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              If we update this policy, we will change the date at the top. Continued use of Knoted after changes constitutes acceptance.
            </p>

            <h2>Contact</h2>
            <p>
              Questions? Reach us at{" "}
              <a href="mailto:phanisaimunipalli@gmail.com">phanisaimunipalli@gmail.com</a>.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
