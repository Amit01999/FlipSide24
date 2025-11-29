import { Helmet } from "react-helmet-async";
import { Users, Target, Award, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | FlipSide24</title>
        <meta
          name="description"
          content="Learn about FlipSide24, Bangladesh's independent news platform committed to accurate, unbiased journalism and serving the public interest."
        />
        <link rel="canonical" href="https://flipside24.com/about" />
      </Helmet>

      <Layout>
        <article className="container py-12">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              About <span className="text-primary">FlipSide24</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An independent voice in Bangladesh's media landscape, committed to 
              delivering accurate, unbiased news that empowers citizens and 
              strengthens democratic discourse.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border p-8 rounded-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-headline font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide timely, accurate, and comprehensive news coverage that informs, 
                educates, and empowers the people of Bangladesh. We are committed to 
                upholding the highest standards of journalistic integrity while making 
                quality journalism accessible to all.
              </p>
            </div>
            <div className="bg-card border border-border p-8 rounded-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-headline font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and respected news platform in Bangladesh, 
                known for our investigative journalism, fact-based reporting, and 
                commitment to holding power accountable. We envision a society where 
                informed citizens drive positive change.
              </p>
            </div>
          </div>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-center mb-12 category-accent inline-block w-full">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Truth & Accuracy",
                  description: "We verify facts rigorously and correct errors promptly. Truth is the foundation of our journalism.",
                },
                {
                  title: "Independence",
                  description: "We maintain editorial independence from political, commercial, and other interests that could compromise our reporting.",
                },
                {
                  title: "Accountability",
                  description: "We hold the powerful accountable and are ourselves accountable to our readers for our work.",
                },
                {
                  title: "Fairness",
                  description: "We present diverse perspectives and give voice to the voiceless, ensuring balanced coverage.",
                },
                {
                  title: "Transparency",
                  description: "We are open about our methods, corrections, and any potential conflicts of interest.",
                },
                {
                  title: "Public Interest",
                  description: "We serve the public interest above all else, providing news that matters to our community.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-sm flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-center mb-12 category-accent inline-block w-full">
              Our Leadership
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mohammad Rahman",
                  role: "Editor-in-Chief",
                  bio: "25+ years of journalism experience across leading national dailies.",
                },
                {
                  name: "Fatima Akter",
                  role: "Managing Editor",
                  bio: "Award-winning journalist specializing in investigative reporting.",
                },
                {
                  name: "Kamal Hossain",
                  role: "Head of Digital",
                  bio: "Pioneer in digital journalism with expertise in multimedia storytelling.",
                },
              ].map((member, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-sm text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-headline font-bold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="bg-foreground text-background py-12 px-8 rounded-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "2M+", label: "Monthly Readers" },
                { number: "500+", label: "Articles Published Monthly" },
                { number: "50+", label: "Journalists & Contributors" },
                { number: "8", label: "News Categories" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-background/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default About;
