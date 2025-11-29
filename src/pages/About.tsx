import { Helmet } from 'react-helmet-async';
import {
  Eye,
  Shield,
  Users,
  Lightbulb,
  CheckCircle2,
  Mail,
  TrendingUp,
  FileSearch,
  Megaphone,
  Scale,
  Newspaper,
  Target,
  Search,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | FlipSide24</title>
        <meta
          name="description"
          content="FlipSide is an independent news and analysis platform revealing the other side of the story. Investigative journalism for policy, governance, and social justice in Bangladesh."
        />
        <link rel="canonical" href="https://flipside24.com/about" />
      </Helmet>

      <Layout>
        <article className="container py-12 md:py-20">
          {/* Hero Section - Enhanced */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
                <Eye className="w-5 h-5" />
                <span className="font-semibold">Revealing the Other Side</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              About <span className="text-primary">FlipSide</span>
            </h1>
          </div>

          {/* Main Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Newspaper className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    Flipside is an independent news and analysis platform
                    committed to revealing the other side of the story. In a
                    world dominated by headlines, we go beyond the obvious to
                    explore the deeper context, uncover hidden truths, and
                    highlight perspectives often overlooked.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Focus and Mission */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4">
                    Our Focus & Mission
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    We focus on policy, political power, governance, and social
                    justice, delivering reporting that informs, investigates,
                    and challenges the status quo.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Our mission is to provide citizens with the information they
                    need to understand not just what is happening, but why it
                    matters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision - Fourth Estate */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-headline font-bold">
                    True Fourth Estate
                  </h2>
                </div>
                <p className="text-xl text-background/90 leading-relaxed mb-6">
                  As a platform, we aspire to be a true{' '}
                  <span className="text-primary font-semibold">
                    Fourth Estate of Bangladesh
                  </span>{' '}
                  — independent, fearless, and accountable to the people.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">
                      1971 Liberation Aspirations
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">2024 Vision for Justice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Beliefs */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                We Believe in Journalism That{' '}
                <span className="text-primary">Serves Society</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Search,
                  title: 'Investigative',
                  description: 'Digging deep into issues that impact lives',
                },
                {
                  icon: Users,
                  title: 'Inclusive',
                  description: 'Amplifying voices often unheard',
                },
                {
                  icon: Lightbulb,
                  title: 'Analytical',
                  description:
                    'Providing context, data, and insight beyond the headlines',
                },
                {
                  icon: Scale,
                  title: 'Accountable',
                  description: 'Holding power to account, across sectors',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-headline font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Tagline Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-headline font-bold">FlipSide</h3>
              </div>
              <p className="text-2xl md:text-3xl font-medium text-foreground/90 italic">
                We reveal the other side of the story.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-headline font-bold mb-3">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-6">
                Have a story tip or want to reach our editorial team?
              </p>
              <a
                href="mailto:flipside24editor@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-5 w-5" />
                flipside24editor@gmail.com
              </a>
            </div>
          </div>

          {/* Values Footer */}
          <div className="max-w-5xl mx-auto mt-20 pt-12 border-t border-border">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-headline font-bold text-primary mb-2">
                  Independent
                </div>
                <p className="text-muted-foreground">Fearless journalism</p>
              </div>
              <div>
                <div className="text-4xl font-headline font-bold text-primary mb-2">
                  Accountable
                </div>
                <p className="text-muted-foreground">To the people</p>
              </div>
              <div>
                <div className="text-4xl font-headline font-bold text-primary mb-2">
                  Democratic
                </div>
                <p className="text-muted-foreground">Upholding values</p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default About;
