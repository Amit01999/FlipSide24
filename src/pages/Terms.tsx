import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | FlipSide24</title>
        <meta
          name="description"
          content="Read the terms and conditions governing your use of FlipSide24's news platform and services."
        />
        <link rel="canonical" href="https://flipside24.com/terms" />
      </Helmet>

      <Layout>
        <article className="container py-12">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Terms & Conditions
            </h1>

            <p className="text-muted-foreground mb-12">
              Effective Date: 27th November 2025
            </p>

            <div className="prose prose-lg max-w-none space-y-10">
              {/* 1. Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using FlipSide 24 (“FlipSide”, “Company”,
                  “we”, “our”, “us”), you agree to be legally bound by these
                  Terms & Conditions (“Terms”). If you do not accept these
                  Terms, you must stop using the Platform immediately.
                </p>
                <p>You confirm that:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    You are at least 18 years old or using the Platform under
                    adult supervision.
                  </li>
                  <li>You have read, understood, and agreed to these Terms.</li>
                  <li>You comply with all applicable laws and regulations.</li>
                  <li>
                    You acknowledge FlipSide’s rights, content, and brand
                    integrity take precedence in any dispute.
                  </li>
                </ul>
              </section>

              {/* 2. Definitions */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  2. Definitions
                </h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <strong>“Content”</strong> refers to all text, images,
                    videos, audio, data, news articles, reports, interviews, and
                    other materials published by FlipSide.
                  </li>
                  <li>
                    <strong>“User” / “You”</strong> means any person accessing
                    or using the Platform.
                  </li>
                  <li>
                    <strong>“User Content”</strong> means any material submitted
                    by users—comments, messages, feedback, uploads, or other
                    submissions.
                  </li>
                  <li>
                    <strong>“Services”</strong> refers to all features and
                    functionalities on the Platform.
                  </li>
                </ul>
              </section>

              {/* 3. Ownership & Intellectual Property */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  3. Ownership & Intellectual Property Rights
                </h2>
                <p>
                  FlipSide owns all intellectual property on the Platform,
                  including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    News articles, reports, videos, podcasts, graphics, and
                    photographs
                  </li>
                  <li>Logos, branding, trademarks, slogans</li>
                  <li>Website layouts, UI/UX design, and code</li>
                  <li>Editorial research compilations and analyses</li>
                </ul>

                <p>You are strictly prohibited from:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Copying or redistributing content without written permission
                  </li>
                  <li>Using our brand assets commercially</li>
                  <li>Scraping, mining, crawling, or harvesting data</li>
                  <li>Using bots to download or distort content</li>
                </ul>

                <p>
                  Violating these terms may result in account suspension, civil
                  liability, and/or criminal action.
                </p>
              </section>

              {/* 4. License to Use the Platform */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  4. License to Use the Platform
                </h2>
                <p>
                  FlipSide grants you a limited, revocable, non-transferable,
                  non-exclusive license to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access and browse the Platform</li>
                  <li>Read publicly available content</li>
                  <li>Share article links (not the content itself)</li>
                  <li>Comment or engage where permitted</li>
                </ul>

                <p>
                  This license can be revoked at any time for misconduct, legal
                  risks, or misuse of the Platform.
                </p>
              </section>

              {/* 5. User Obligations */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  5. User Obligations
                </h2>

                <h3 className="text-xl font-bold mb-2">
                  5.1 Prohibited Activities
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Spreading misinformation or hate speech</li>
                  <li>Uploading copyrighted or illegal material</li>
                  <li>Hacking, spamming, or conducting DDoS attacks</li>
                  <li>Using fake accounts or bots to manipulate engagement</li>
                  <li>Impersonating FlipSide staff or others</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-2">
                  5.2 Provide Accurate Information
                </h3>
                <p>
                  You must provide true and accurate information when creating
                  accounts or submitting feedback.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">
                  5.3 Respect Editorial Independence
                </h3>
                <p>
                  Users may not demand content changes, removals, or editorial
                  influence. All editorial control rests solely with FlipSide.
                </p>
              </section>

              {/* 6. User-Generated Content */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  6. User-Generated Content (UGC)
                </h2>

                <h3 className="text-xl font-bold mb-2">6.1 Submission Terms</h3>
                <p>By submitting UGC, you:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Grant FlipSide a worldwide, royalty-free, perpetual license
                    to publish, modify, or delete your content
                  </li>
                  <li>Confirm you own or have rights to your submissions</li>
                  <li>
                    Accept that FlipSide may edit or remove content without
                    notice
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-2">
                  6.2 No Guarantee of Publication
                </h3>
                <p>
                  FlipSide is not obligated to publish or display any
                  user-submitted content.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">
                  6.3 Responsibility
                </h3>
                <p>
                  Users are solely responsible for their submissions. FlipSide
                  bears no liability for user-posted content.
                </p>
              </section>

              {/* 7. Paid Services */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  7. Paid Services, Subscriptions & Transactions
                </h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Users must pay all applicable fees for subscriptions or
                    premium services
                  </li>
                  <li>Payments are non-refundable unless required by law</li>
                  <li>Pricing and features may change with notice</li>
                  <li>
                    Users authorize recurring billing for auto-renew
                    subscriptions
                  </li>
                  <li>
                    Unauthorized payment disputes may lead to account suspension
                  </li>
                </ul>
              </section>

              {/* 8. Third-Party Links */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  8. Third-Party Links & Advertisements
                </h2>
                <p>
                  The Platform may display external links, ads, sponsored posts,
                  or affiliate content.
                </p>

                <p>FlipSide does not:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Control third-party websites</li>
                  <li>Guarantee accuracy or safety of external content</li>
                  <li>Accept responsibility for third-party transactions</li>
                </ul>

                <p>
                  Please review the external site’s policies before interacting
                  with them.
                </p>
              </section>

              {/* 9. Data Use & Privacy */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  9. Data Use & Privacy
                </h2>
                <p>
                  Your use of the Platform is governed by our Privacy Policy,
                  which explains how we collect, store, process, and protect
                  your data. By using FlipSide, you consent to all practices
                  described in the Privacy Policy, including analytics, security
                  monitoring, and personalized content.
                </p>
              </section>

              {/* 10. Platform Availability & Modifications */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  10. Platform Availability & Modifications
                </h2>
                <p>
                  FlipSide aims to provide uninterrupted access to its services
                  but does not guarantee:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Continuous or error-free operations</li>
                  <li>Timely updates</li>
                  <li>Uninterrupted availability</li>
                </ul>
                <p>
                  We may modify, suspend, or discontinue any part of the
                  Platform at any time without liability.
                </p>
              </section>

              {/* Additional Sections Could Be Added (11–15) */}
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  11. Changes to Terms
                </h2>
                <p>
                  FlipSide may update or amend these Terms at any time.
                  Continued use of the Platform after changes indicates your
                  acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  12. Contact Information
                </h2>
                <p>
                  For questions regarding these Terms, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> support@flipsidenews24.com
                </p>
                <p>
                  <strong>Website:</strong> https://flipside24.com
                </p>
              </section>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Terms;
