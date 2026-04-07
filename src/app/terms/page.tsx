"use client";

import { FadeUp } from "@/components/ScrollReveal";

export default function TermsPage() {
  return (
    <section className="relative z-10 pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Use
            </h1>
            <p className="text-slate-500 text-sm">Last updated: April 6, 2026</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass-card p-8 md:p-12 legal-content">
            <h2>Agreement to Terms</h2>
            <p>
              By downloading, installing, or using Knoted (&quot;the App&quot;), you agree to be bound by these Terms of Use. If you do not agree, do not use the App.
            </p>

            <h2>Description of Service</h2>
            <p>
              Knoted is a location-based mobile application that allows users to drop short text tips (&quot;knots&quot;) tied to GPS coordinates. Other users who are physically nearby can view, upvote, or downvote these tips.
            </p>

            <h2>User Conduct</h2>
            <p>You agree not to use Knoted to:</p>
            <ul>
              <li>Post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or objectionable</li>
              <li>Post content that infringes on the intellectual property rights of others</li>
              <li>Manipulate the voting system or create false or misleading tips</li>
              <li>Interfere with or disrupt the App or its infrastructure</li>
              <li>Use the App for commercial purposes without prior written consent</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
            </ul>

            <h2>Content Ownership</h2>
            <p>
              You retain ownership of content you post. By posting, you grant us a non-exclusive, royalty-free, worldwide license to display and distribute your content within the App.
            </p>

            <h2>Content Moderation</h2>
            <p>
              We reserve the right to remove any content that violates these terms. Knots with zero votes are automatically removed after 60 days.
            </p>

            <h2>Anonymous Usage</h2>
            <p>
              Knoted identifies devices using an anonymous UUID stored in your device Keychain. This is not linked to any personal information. You are responsible for content posted from your device.
            </p>

            <h2>Location Services</h2>
            <p>
              Knoted requires location access to function. By using the App, you consent to the collection and use of your GPS coordinates as described in our Privacy Policy.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The App is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy or usefulness of user-generated content.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these terms. Changes will be reflected by the date at the top. Continued use constitutes acceptance.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California, United States.
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
