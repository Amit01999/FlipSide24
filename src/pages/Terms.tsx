import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

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
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-8">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: November 28, 2025
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-foreground leading-relaxed">
                  By accessing and using FlipSide24 (the "Site"), you accept and agree to be 
                  bound by these Terms and Conditions. If you do not agree with any part of 
                  these terms, you must not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  2. Use of Content
                </h2>
                <p className="text-foreground leading-relaxed mb-4">
                  All content published on FlipSide24, including but not limited to articles, 
                  photographs, graphics, and videos, is protected by copyright and other 
                  intellectual property laws.
                </p>
                <p className="text-foreground leading-relaxed">
                  You may:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4 mb-4">
                  <li>View and read content for personal, non-commercial use</li>
                  <li>Share articles via social media using our share buttons</li>
                  <li>Quote brief excerpts with proper attribution and a link back to the original article</li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  You may not:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li>Reproduce, distribute, or republish our content without written permission</li>
                  <li>Use our content for commercial purposes without authorization</li>
                  <li>Remove any copyright or proprietary notices from our content</li>
                  <li>Frame or mirror our Site on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  3. User Conduct
                </h2>
                <p className="text-foreground leading-relaxed mb-4">
                  When using our Site, you agree not to:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li>Post false, misleading, or defamatory content</li>
                  <li>Harass, threaten, or intimidate other users</li>
                  <li>Impersonate any person or entity</li>
                  <li>Upload malicious code or attempt to hack our systems</li>
                  <li>Collect user information without consent</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  4. Comments and User Submissions
                </h2>
                <p className="text-foreground leading-relaxed">
                  By submitting comments or other content to our Site, you grant FlipSide24 
                  a non-exclusive, royalty-free, perpetual, and worldwide license to use, 
                  reproduce, modify, and distribute such content. We reserve the right to 
                  remove any content that violates these terms or that we find objectionable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  5. Accuracy of Information
                </h2>
                <p className="text-foreground leading-relaxed">
                  We strive to provide accurate and up-to-date information. However, we do 
                  not warrant the completeness, reliability, or accuracy of any content on 
                  our Site. Any reliance you place on such information is strictly at your 
                  own risk. We reserve the right to make corrections and changes without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  6. Third-Party Links
                </h2>
                <p className="text-foreground leading-relaxed">
                  Our Site may contain links to third-party websites. These links are provided 
                  for convenience only. We do not endorse or assume any responsibility for the 
                  content, privacy policies, or practices of any third-party websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  7. Disclaimer of Warranties
                </h2>
                <p className="text-foreground leading-relaxed">
                  The Site and its content are provided on an "as is" and "as available" basis 
                  without any warranties of any kind, express or implied. We disclaim all 
                  warranties, including but not limited to merchantability, fitness for a 
                  particular purpose, and non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-foreground leading-relaxed">
                  In no event shall FlipSide24, its directors, employees, or agents be liable 
                  for any indirect, incidental, special, consequential, or punitive damages 
                  arising out of your access to or use of the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. 
                  Changes will be effective immediately upon posting on this page. Your 
                  continued use of the Site after any changes constitutes acceptance of 
                  the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  10. Governing Law
                </h2>
                <p className="text-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance 
                  with the laws of Bangladesh. Any disputes arising under these terms shall 
                  be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  11. Contact Information
                </h2>
                <p className="text-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-muted p-6 rounded-sm mt-4">
                  <p className="text-foreground">
                    <strong>FlipSide24</strong><br />
                    277/5, Elephant Road, Katabon Dhal<br />
                    New Market, Dhaka 1205<br />
                    Email: flipside24editor@gmail.com<br />
                    Phone: +880 1887 397002
                  </p>
                </div>
              </section>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Terms;
