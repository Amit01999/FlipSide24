import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Editorial = () => {
  return (
    <>
      <Helmet>
        <title>Editorial - FlipSide24</title>
        <meta
          name="description"
          content="Welcome to Flipside - A space for deeper journalism. We look beyond the obvious and into the layers that shape our society."
        />
      </Helmet>

      <Layout>
        <div className="container py-12">
          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                Welcome to Flipside
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                In a world overwhelmed by headlines, we pause to ask the questions often left unasked. We believe every story has more than one angle—and sometimes, the side that matters most is the one least explored.
              </p>

              <h2 className="text-2xl font-headline font-bold mt-10 mb-4">
                Flipside is a space for deeper journalism.
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                We look beyond the obvious, past conventional narratives, and into the layers that shape our society, politics, economics, and our collective reality. Our reporting is driven by facts, guided by public interest, and rooted in the belief that truthful journalism must not only inform—it must challenge, question and reveal.
              </p>

              <h2 className="text-2xl font-headline font-bold mt-10 mb-4">
                Here, we follow stories until the silence breaks.
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                We aim to give voice to those unheard, examine decisions that affect millions, and illuminate the human cost behind policy, power, and governance. We are not here to echo the news; we are here to investigate what it means.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-10">
                <h3 className="text-xl font-semibold mb-4">Our commitment is simple:</h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Report with integrity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Analyse with depth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Question with courage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Serve with purpose</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                We want to build ourselves as the true Fourth Estate of Bangladesh—a platform that speaks truth to power, protects public interest, and upholds democratic values while keeping both the 1971 liberation aspirations and the 2024 vision for a just, prosperous nation in mind.
              </p>

              <div className="bg-card border border-border rounded-sm p-8 my-10">
                <h3 className="text-xl font-semibold mb-4">Support Our Mission</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We invite readers, well-wishers, and institutions to support this mission by subscribing to our content, contributing through donations, and collaborating through responsible advertisements.
                </p>
              </div>

              <p className="text-2xl font-headline font-semibold text-center my-10 text-primary">
                On Flipside, we reveal the other side of the story.
              </p>

              <p className="text-lg leading-relaxed mb-10 text-center text-muted-foreground italic">
                Thank you for joining us on this journey.
              </p>

              {/* Signature */}
              <div className="border-t border-border pt-8 mt-12">
                <div className="text-center">
                  <p className="text-xl font-semibold mb-1">Mir Arshadul Haque</p>
                  <p className="text-muted-foreground mb-1">Editor</p>
                  <p className="text-primary font-semibold">Flipside24.com</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Layout>
    </>
  );
};

export default Editorial;
