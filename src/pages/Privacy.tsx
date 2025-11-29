import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | FlipSide24</title>
        <meta
          name="description"
          content="FlipSide24's privacy policy outlines how we collect, use, and protect your personal information when you use our news platform."
        />
        <link rel="canonical" href="https://flipside24.com/privacy-policy" />
      </Helmet>

      <Layout>
        <article className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: November 28, 2025
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  1. Introduction
                </h2>
                <p className="text-foreground leading-relaxed">
                  FlipSide24 ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you visit our website flipside24.com (the "Site") 
                  or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li>Subscribe to our newsletter</li>
                  <li>Submit a contact form</li>
                  <li>Create an account</li>
                  <li>Comment on articles</li>
                  <li>Participate in surveys or promotions</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 mt-6">Automatically Collected Information</h3>
                <p className="text-foreground leading-relaxed">
                  When you access the Site, we automatically collect certain information including:
                  your IP address, browser type, operating system, referring URLs, pages viewed,
                  and time spent on pages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send newsletters and updates you've subscribed to</li>
                  <li>Respond to your comments and inquiries</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Detect and prevent fraud or security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  4. Cookies and Tracking Technologies
                </h2>
                <p className="text-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our Site 
                  and store certain information. You can instruct your browser to refuse all cookies 
                  or indicate when a cookie is being sent. However, some parts of the Site may not 
                  function properly without cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  5. Sharing Your Information
                </h2>
                <p className="text-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  6. Data Security
                </h2>
                <p className="text-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to 
                  protect your personal information. However, no method of transmission over 
                  the Internet or electronic storage is 100% secure. While we strive to protect 
                  your data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  7. Your Rights
                </h2>
                <p className="text-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-headline font-bold mb-4">
                  8. Contact Us
                </h2>
                <p className="text-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, 
                  please contact us at:
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

export default Privacy;
