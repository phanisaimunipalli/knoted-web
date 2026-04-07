"use client";

import { FadeUp } from "@/components/ScrollReveal";

const sections = [
  {
    title: "Agreement to Terms",
    content: (
      <>
        <p>
          By downloading, installing, accessing, or using Knoted (&quot;the App&quot;, &quot;the Service&quot;), you confirm that you have read, understood, and agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms in their entirety, you must not use Knoted.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and Phani Sai Ram Munipalli (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), the developer and operator of Knoted. These Terms govern your access to and use of Knoted on Apple iOS devices.
        </p>
        <p>
          <strong>Effective Date:</strong> April 7, 2026<br />
          <strong>Last Updated:</strong> April 7, 2026<br />
          <strong>Contact:</strong> phanisaimunipalli@gmail.com
        </p>
      </>
    ),
  },
  {
    title: "Description of Service",
    content: (
      <>
        <p>
          Knoted is a location-based mobile application that allows users to create short, GPS-anchored text tips (&quot;knots&quot;) visible to other users who are physically nearby. Core features include:
        </p>
        <ul>
          <li><strong>Drop:</strong> Create a knot of up to 140 characters, tagged by category, pinned to your current GPS location</li>
          <li><strong>Discover:</strong> View knots on a map as you move through the world</li>
          <li><strong>Vote:</strong> Upvote or downvote a knot only when you are physically within 100 meters of it</li>
          <li><strong>Notifications:</strong> Receive background alerts when you enter areas with active knots (optional, requires &quot;Always&quot; location permission)</li>
        </ul>
        <p>
          The Service is provided free of charge. There are no in-app purchases, subscriptions, or advertisements. No personal account is required. Users are identified solely by an anonymous device identifier.
        </p>
      </>
    ),
  },
  {
    title: "Eligibility",
    content: (
      <>
        <p>To use Knoted, you must:</p>
        <ul>
          <li>Be at least 13 years of age (or the minimum age required in your country of residence)</li>
          <li>Have the legal capacity to enter into a binding agreement</li>
          <li>Own or have authorized access to the iOS device on which Knoted is installed</li>
          <li>Use the Service in compliance with all applicable local, state, national, and international laws</li>
        </ul>
        <p>
          If you are under 18, your parent or guardian must review and agree to these Terms on your behalf. By using Knoted, you represent that you meet these eligibility requirements.
        </p>
      </>
    ),
  },
  {
    title: "User Conduct and Prohibited Content",
    content: (
      <>
        <p>
          Knoted exists to share genuine, location-specific tips with the community. You are solely responsible for any knots you create. You agree not to post content that:
        </p>

        <h3>Is Harmful or Illegal</h3>
        <ul>
          <li>Constitutes, facilitates, or promotes any illegal activity</li>
          <li>Is threatening, harassing, bullying, or advocates violence</li>
          <li>Is defamatory, libelous, or deliberately false about a person or business</li>
          <li>Constitutes hate speech targeting race, ethnicity, religion, gender, sexual orientation, disability, or national origin</li>
          <li>Promotes self-harm, suicide, or eating disorders</li>
          <li>Contains sexually explicit or pornographic material</li>
          <li>Exploits or endangers minors in any way</li>
        </ul>

        <h3>Manipulates the System</h3>
        <ul>
          <li>Uses GPS spoofing, VPNs, or any technical means to fake your physical location for the purpose of voting without being present</li>
          <li>Creates duplicate device identifiers to cast multiple votes on a single knot</li>
          <li>Posts spam, duplicate knots, or content designed to flood the map</li>
          <li>Uses automated tools, bots, or scripts to interact with the Service</li>
        </ul>

        <h3>Infringes Third-Party Rights</h3>
        <ul>
          <li>Violates copyright, trademark, trade secret, or any other intellectual property rights</li>
          <li>Discloses private or personally identifiable information about another person without consent</li>
          <li>Impersonates any person, business, or organization</li>
        </ul>

        <h3>Interferes with the Service</h3>
        <ul>
          <li>Attempts to reverse engineer, decompile, or disassemble the App or its backend</li>
          <li>Probes, scans, or tests the App for vulnerabilities without written authorization</li>
          <li>Introduces malware, viruses, or any destructive code</li>
          <li>Circumvents or attempts to circumvent any security mechanism in the App</li>
          <li>Accesses the Service through unauthorized third-party applications</li>
        </ul>

        <h3>Is Commercial Without Authorization</h3>
        <ul>
          <li>Posts advertisements, promotional content, affiliate links, or solicitations of any kind</li>
          <li>Uses Knoted for commercial purposes, including promoting a business, without our prior written consent</li>
        </ul>

        <p>
          We reserve the right — but have no obligation — to monitor, review, and remove any content that violates these Terms at our sole discretion.
        </p>
      </>
    ),
  },
  {
    title: "Content Ownership and License",
    content: (
      <>
        <h3>Your Content</h3>
        <p>
          You retain all ownership rights in the knots you create. By posting a knot, you grant us a non-exclusive, royalty-free, worldwide, sublicensable, and transferable license to use, store, display, reproduce, and distribute that content solely for the purpose of operating and improving Knoted. This license ends when the knot is deleted — either by you, by the automatic expiry process, or by us for Terms violations.
        </p>

        <h3>Public Nature of Knots</h3>
        <p>
          Knots are published to a public database (Apple CloudKit). Any user of Knoted who is geographically nearby can read your knots. <strong>Do not post sensitive, private, or personally identifying information in your knots.</strong> Although your identity is not attached to your knots, the content itself is publicly visible.
        </p>

        <h3>Our Content</h3>
        <p>
          The Knoted app, its design, code, branding, and all associated intellectual property are owned by Phani Sai Ram Munipalli and protected by copyright, trademark, and other applicable laws. You may not copy, reproduce, modify, or create derivative works of any part of the App without our explicit written consent.
        </p>
      </>
    ),
  },
  {
    title: "Anonymous Identity and Responsibility",
    content: (
      <>
        <p>
          Knoted does not require you to create an account or disclose your identity. You are identified only by an anonymous UUID generated on and stored in your device. However, anonymous use does not mean unaccountable use.
        </p>
        <p>
          <strong>You are fully responsible for all activity and content originating from your device.</strong> If your device is shared with others, you are responsible for ensuring those users also comply with these Terms.
        </p>
        <p>
          While we cannot identify you personally, we reserve the right to block a device identifier (anonymous ID) from accessing the Service if it is associated with violations of these Terms.
        </p>
      </>
    ),
  },
  {
    title: "Content Moderation and Removal",
    content: (
      <>
        <h3>Automatic Expiry</h3>
        <p>
          Knots that receive zero upvotes are automatically deleted 60 days after creation. Knots with one or more upvotes persist indefinitely unless voted down to zero or removed by moderation.
        </p>

        <h3>Reporting</h3>
        <p>
          If you encounter content that appears to violate these Terms, please report it via email to <a href="mailto:phanisaimunipalli@gmail.com">phanisaimunipalli@gmail.com</a> with the knot&apos;s coordinates or a description of its location and content. We will review reports and act accordingly.
        </p>

        <h3>Our Rights</h3>
        <p>
          We reserve the right to remove any knot or block any device identifier at any time, with or without notice, for any reason, including violations of these Terms or conduct that we determine is harmful to other users or the integrity of the Service. We have no obligation to maintain any content you post.
        </p>
      </>
    ),
  },
  {
    title: "Location Services",
    content: (
      <>
        <p>
          Knoted&apos;s core functionality depends on your device&apos;s GPS location. By using the App, you consent to the use of your location as described in our <a href="/privacy">Privacy Policy</a>.
        </p>
        <ul>
          <li>Location is used to show nearby knots, anchor new knots to your position, and enforce the 100-meter presence gate for voting</li>
          <li>Background location (if granted) is used only to trigger local notifications when you enter areas with knots</li>
          <li>You may revoke location permission at any time in Settings, but doing so will prevent core app functionality from working</li>
        </ul>
        <p>
          You must not use GPS spoofing or any location manipulation technique. Doing so to bypass the presence-gated voting system is a violation of these Terms and may result in your device being blocked from the Service.
        </p>
      </>
    ),
  },
  {
    title: "Apple Platform Terms",
    content: (
      <>
        <p>
          Knoted is distributed through the Apple App Store. Your use of Knoted is also subject to:
        </p>
        <ul>
          <li>Apple&apos;s <a href="https://www.apple.com/legal/internet-services/itunes/us/terms.html" target="_blank" rel="noopener noreferrer">Media Services Terms and Conditions</a></li>
          <li>Apple&apos;s <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
        </ul>
        <p>
          Apple is not responsible for Knoted or its content. Apple has no obligation to provide any maintenance or support for Knoted. In the event of any failure of Knoted to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any). Apple has no other warranty obligation regarding Knoted.
        </p>
        <p>
          Apple is not responsible for addressing any claims relating to Knoted, including product liability claims, consumer protection claims, or intellectual property infringement claims.
        </p>
        <p>
          Apple and Apple&apos;s subsidiaries are third-party beneficiaries of these Terms. Upon your acceptance of these Terms, Apple will have the right to enforce these Terms against you as a third-party beneficiary.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p>
          <strong>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong> To the fullest extent permitted by applicable law, we disclaim all warranties, including but not limited to:
        </p>
        <ul>
          <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
          <li>Any warranty that the Service will be uninterrupted, error-free, or free from viruses or other harmful components</li>
          <li>Any warranty regarding the accuracy, completeness, reliability, or usefulness of user-generated content (knots)</li>
          <li>Any warranty that defects in the Service will be corrected</li>
        </ul>
        <p>
          Knots are created by anonymous members of the public. We make no representations about the accuracy, currency, or safety of any knot. Always exercise independent judgment before acting on any tip found in the App. Do not rely on Knoted for safety-critical decisions.
        </p>
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          <strong>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES</strong> arising from or related to your use of or inability to use the Service, including but not limited to:
        </p>
        <ul>
          <li>Damages for loss of data, revenue, profits, goodwill, or business opportunities</li>
          <li>Personal injury or property damage resulting from reliance on a knot or use of the App</li>
          <li>Unauthorized access to or alteration of your data</li>
          <li>Conduct of any third-party user within the Service</li>
        </ul>
        <p>
          Our total aggregate liability to you for any claims arising under these Terms shall not exceed $100 USD, regardless of the cause of action.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In those jurisdictions, our liability is limited to the maximum extent permitted by law.
        </p>
      </>
    ),
  },
  {
    title: "Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless Phani Sai Ram Munipalli, their affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to:
        </p>
        <ul>
          <li>Your use of the Service</li>
          <li>Content you post to the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any applicable law or the rights of any third party</li>
        </ul>
      </>
    ),
  },
  {
    title: "Service Availability and Modifications",
    content: (
      <>
        <p>
          We reserve the right to modify, suspend, or discontinue the Service — or any feature within it — at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
        </p>
        <p>
          We may update the App through the Apple App Store. Depending on your settings, updates may be installed automatically. Continued use of the App after an update constitutes acceptance of the updated version. We are not obligated to maintain older versions of the App.
        </p>
      </>
    ),
  },
  {
    title: "Termination",
    content: (
      <>
        <p>
          These Terms remain in effect as long as you use the Service. We may terminate or suspend your access to the Service (by blocking your device identifier) immediately, without notice, if we believe you have violated these Terms or if required by law.
        </p>
        <p>
          You may terminate these Terms at any time by deleting the App from your device. Upon termination, all rights granted to you under these Terms will cease. Sections relating to ownership, warranty disclaimers, limitation of liability, and indemnification will survive termination.
        </p>
      </>
    ),
  },
  {
    title: "Governing Law and Dispute Resolution",
    content: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the laws of the <strong>State of California, United States</strong>, without regard to its conflict of law principles.
        </p>

        <h3>Informal Resolution</h3>
        <p>
          Before initiating any formal legal action, you agree to first attempt to resolve any dispute by contacting us at <a href="mailto:phanisaimunipalli@gmail.com">phanisaimunipalli@gmail.com</a>. We will attempt in good faith to resolve the dispute within 30 days.
        </p>

        <h3>Binding Arbitration</h3>
        <p>
          If informal resolution fails, any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, rather than in court. The arbitration shall take place in San Francisco, California, or remotely if you are not located in California.
        </p>

        <h3>Class Action Waiver</h3>
        <p>
          <strong>You agree to resolve disputes with us on an individual basis only.</strong> You waive the right to participate in any class action lawsuit or class-wide arbitration against us.
        </p>

        <h3>Exception</h3>
        <p>
          Either party may seek injunctive or other equitable relief from a court of competent jurisdiction to prevent irreparable harm, without waiving the right to arbitration for all other claims.
        </p>
      </>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms at any time. When we do, we will update the &quot;Last Updated&quot; date at the top of this page. For material changes — those that significantly affect your rights or obligations — we will provide notice within the App on your next launch after the change takes effect.
        </p>
        <p>
          Your continued use of Knoted after changes become effective constitutes your acceptance of the revised Terms. If you disagree with any change, stop using the App and delete it from your device.
        </p>
      </>
    ),
  },
  {
    title: "General Provisions",
    content: (
      <>
        <h3>Entire Agreement</h3>
        <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding the Service and supersede all prior agreements or understandings.</p>

        <h3>Severability</h3>
        <p>If any provision of these Terms is found to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the remaining provisions will remain in full force and effect.</p>

        <h3>No Waiver</h3>
        <p>Our failure to enforce any provision of these Terms shall not be considered a waiver of that provision or of our right to enforce it in the future.</p>

        <h3>Assignment</h3>
        <p>You may not assign or transfer these Terms or any rights granted under them without our prior written consent. We may assign these Terms freely, including in connection with a merger, acquisition, or sale of assets.</p>

        <h3>Contact</h3>
        <p>Questions about these Terms? Email us at <a href="mailto:phanisaimunipalli@gmail.com">phanisaimunipalli@gmail.com</a> with the subject line &quot;Terms of Use Question.&quot;</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <section className="relative z-10 pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-[0.2em] mb-3">Legal</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Use
            </h1>
            <p className="text-slate-500 text-sm">Effective April 7, 2026 · Last updated April 7, 2026</p>
          </div>
        </FadeUp>

        {/* Quick summary */}
        <FadeUp delay={0.08}>
          <div className="bg-blue-500/[0.06] border border-blue-500/[0.15] rounded-2xl p-6 mb-10">
            <p className="text-[13px] text-blue-400 font-semibold uppercase tracking-widest mb-2">TL;DR</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Use Knoted to share genuine location tips. Don&apos;t post harmful content, fake your location for votes, spam the map, or use it commercially. You own what you post but it&apos;s public. We can remove content and block devices that violate these terms. The service is free and comes without warranty — use the tips at your own judgment.
            </p>
          </div>
        </FadeUp>

        {/* Table of contents */}
        <FadeUp delay={0.12}>
          <div className="card rounded-2xl p-6 mb-10">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-4">Contents</p>
            <ol className="space-y-1.5">
              {sections.map((s, i) => (
                <li key={i}>
                  <a href={`#term-${i}`} className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
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
            <div id={`term-${i}`} className="card rounded-2xl p-8 md:p-10 legal-content mb-4">
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
            © 2026 Phani Sai Ram Munipalli · <a href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a> · <a href="/support" className="hover:text-slate-400 transition-colors">Support</a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
