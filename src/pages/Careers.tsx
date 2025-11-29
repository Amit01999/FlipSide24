import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Briefcase, Users, Target, Heart } from 'lucide-react';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Join FlipSide24 | FlipSide24</title>
        <meta
          name="description"
          content="Join FlipSide24 and be part of Bangladesh's independent news platform. We're building the future of journalism."
        />
        <link rel="canonical" href="https://flipside24.com/careers" />
      </Helmet>

      <Layout>
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                Careers at FlipSide24
              </h1>
              <p className="text-xl text-muted-foreground">
                Join us in building Bangladesh's independent voice
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Hero Section */}
              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-sm">
                <h2 className="text-2xl font-headline font-bold mb-4">
                  We're Building Something Special
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  FlipSide24 is more than just a news platform—it's a movement
                  toward truthful, investigative journalism that serves the
                  public interest. We're looking for passionate individuals who
                  want to make a real difference in shaping Bangladesh's media
                  landscape.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Whether you're a journalist, developer, designer, or content
                  creator—if you believe in the power of truth and transparency,
                  we want to hear from you.
                </p>
              </div>

              {/* Why Join Us */}
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6">
                  Why Join FlipSide24?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-sm">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Meaningful Work
                        </h3>
                        <p className="text-muted-foreground">
                          Your work directly impacts millions of readers and
                          contributes to a more informed society.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-sm">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Collaborative Culture
                        </h3>
                        <p className="text-muted-foreground">
                          Work with a team of passionate professionals who value
                          integrity, creativity, and innovation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-sm">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Growth Opportunities
                        </h3>
                        <p className="text-muted-foreground">
                          Develop your skills in a fast-growing organization
                          committed to professional development.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-sm">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Mission-Driven
                        </h3>
                        <p className="text-muted-foreground">
                          Be part of building Bangladesh's Fourth Estate and
                          upholding democratic values.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-sm p-8 text-center">
                <h2 className="text-3xl font-headline font-bold mb-4">
                  We're Growing!
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  FlipSide24 is in an exciting phase of growth. While we don't
                  have specific openings at the moment, we're always interested
                  in connecting with talented individuals who share our vision.
                </p>
                <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold">
                  Hiring Soon - Stay Tuned!
                </div>
              </div>

              {/* Roles We're Looking For */}
              {/* <div>
                <h2 className="text-3xl font-headline font-bold mb-6">
                  Roles We're Interested In
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2">
                      Investigative Journalists
                    </h3>
                    <p className="text-muted-foreground">
                      Experienced reporters with a nose for uncovering stories
                      that matter.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2">
                      Content Writers & Editors
                    </h3>
                    <p className="text-muted-foreground">
                      Skilled writers who can craft compelling narratives and
                      maintain editorial standards.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2">
                      Full-Stack Developers
                    </h3>
                    <p className="text-muted-foreground">
                      Tech-savvy developers to build and maintain our digital
                      platform.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary/30 pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2">
                      Social Media & Marketing Specialists
                    </h3>
                    <p className="text-muted-foreground">
                      Digital marketers who can grow our audience and
                      engagement.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Get in Touch */}
              <div className="bg-card border border-border rounded-sm p-8">
                <h2 className="text-2xl font-headline font-bold mb-4">
                  Interested in Joining Us?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Even though we're not actively hiring right now, we'd love to
                  hear from you. Send us your resume and a brief introduction
                  about yourself and why you'd like to work with FlipSide24.
                </p>
                <div className="space-y-3">
                  <p className="text-lg">
                    <span className="font-semibold">Email:</span>{' '}
                    <a
                      href="mailto:careers@flipside24.com"
                      className="text-primary hover:underline"
                    >
                      careers@flipside24.com
                    </a>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We'll review your application and reach out when
                    opportunities align with your skills.
                  </p>
                </div>
              </div>

              {/* Footer Message */}
              <div className="text-center py-8">
                <p className="text-xl text-muted-foreground italic">
                  "Together, we can build the future of journalism in
                  Bangladesh"
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Careers;
