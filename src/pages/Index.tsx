import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/news/HeroSection';
import EditorsPicks from '@/components/news/EditorsPicks';
import TrendingSidebar from '@/components/news/TrendingSidebar';
import MultiNewsRow from '@/components/news/MultiNewsRow';
import TwoNewsRow from '@/components/news/TwoNewsRow';
import ThreeColumnMixedRow from '@/components/news/ThreeColumnMixedRow';
import {
  sampleNews,
  getFeaturedArticles,
  getEditorPicks,
  getTrendingArticles,
} from '@/data/sampleNews';
import { useMemo } from 'react';

/**
 * FlipSide24 Homepage
 *
 * Premium news layout with intelligent category grouping:
 * - Categories with 3+ news: Full-width premium layout (MultiNewsRow)
 * - Categories with 2 news: 2-column editorial row (TwoNewsRow)
 * - Categories with 1 news: Grouped into 3-column mixed rows (ThreeColumnMixedRow)
 *
 * Design inspired by theace.global, dhakatribune.com, and bdnews24.com
 */

interface CategoryGroup {
  category: string;
  categorySlug: string;
  articles: typeof sampleNews;
  count: number;
}

const Index = () => {
  const featuredArticles = getFeaturedArticles();
  const editorPicks = getEditorPicks();
  const trendingArticles = getTrendingArticles();

  // Group all news by category and count items
  const categoryGroups = useMemo(() => {
    const groups: Record<string, CategoryGroup> = {};

    sampleNews.forEach(article => {
      const category = article.category;
      const categorySlug = category.toLowerCase().replace(/\s+/g, '-');

      if (!groups[category]) {
        groups[category] = {
          category,
          categorySlug,
          articles: [],
          count: 0,
        };
      }

      groups[category].articles.push(article);
      groups[category].count += 1;
    });

    return Object.values(groups);
  }, []);

  // Separate categories by count
  const categoriesWith3Plus = categoryGroups.filter(g => g.count >= 3);
  const categoriesWith2 = categoryGroups.filter(g => g.count === 2);
  const categoriesWith1 = categoryGroups.filter(g => g.count === 1);

  // Define layout variants for categories with 3+ news (for visual variety)
  const layoutVariants: Array<
    'featured-left' | 'grid-uniform' | 'asymmetric' | 'featured-top'
  > = ['featured-left', 'grid-uniform', 'asymmetric', 'featured-top'];

  return (
    <>
      <Helmet>
        <title>FlipSide24 - Bangladesh's Independent News Platform</title>
        <meta
          name="description"
          content="FlipSide24 delivers accurate, unbiased news coverage from Bangladesh and around the world. Breaking news, exclusive investigations, fact-checks, and in-depth analysis."
        />
        <meta
          name="keywords"
          content="Bangladesh news, Dhaka news, breaking news, politics, economy, sports, entertainment"
        />
        <link rel="canonical" href="https://flipside24.com" />
      </Helmet>

      <Layout>
        <div className="container py-8">
          {/* Hero Section - Featured Articles */}
          <section className="mb-12">
            <HeroSection articles={featuredArticles.slice(0, 11)} />
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Column - Dynamic Category Sections */}
            <div className="lg:col-span-8 space-y-4">
              {/* SECTION 1: Categories with 3+ News Items */}
              {/* Each gets a full-width premium layout with alternating variants */}
              {categoriesWith3Plus.map((group, index) => (
                <MultiNewsRow
                  key={group.category}
                  category={group.category}
                  categorySlug={group.categorySlug}
                  articles={group.articles}
                  variant={layoutVariants[index % layoutVariants.length]}
                />
              ))}

              {/* SECTION 2: Categories with 2 News Items */}
              {/* Each gets a 2-column editorial row */}
              {categoriesWith2.map((group, index) => (
                <TwoNewsRow
                  key={group.category}
                  category={group.category}
                  categorySlug={group.categorySlug}
                  articles={group.articles}
                  variant={index % 2 === 0 ? 'horizontal' : 'featured-small'}
                />
              ))}

              {/* SECTION 3: Categories with 1 News Item */}
              {/* Group 3 categories into one row (3-column mixed layout) */}
              {Array.from(
                { length: Math.ceil(categoriesWith1.length / 3) },
                (_, groupIndex) => {
                  const startIndex = groupIndex * 3;
                  const endIndex = startIndex + 3;
                  const groupItems = categoriesWith1
                    .slice(startIndex, endIndex)
                    .map(g => ({
                      category: g.category,
                      categorySlug: g.categorySlug,
                      article: g.articles[0],
                    }));

                  return (
                    <ThreeColumnMixedRow
                      key={`mixed-row-${groupIndex}`}
                      items={groupItems}
                    />
                  );
                }
              )}
            </div>

            {/* Sidebar - Editor's Picks, Trending, Newsletter */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Editor's Picks */}
              <EditorsPicks articles={editorPicks} />

              {/* Trending Articles */}
              <TrendingSidebar articles={trendingArticles} />

              {/* Video Section Placeholder */}
              <div className="bg-card border border-border rounded-sm p-6 news-card-hover">
                <h3 className="text-xl font-headline font-bold mb-4 pb-2 border-b-2 border-primary">
                  Video
                </h3>
                <div className="aspect-video bg-muted rounded-sm flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">
                    YouTube videos coming soon
                  </p>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-primary text-primary-foreground rounded-sm p-6 shadow-lg">
                <h3 className="text-xl font-headline font-bold mb-2">
                  Stay Informed
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Get breaking news alerts delivered straight to your inbox
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/30 rounded-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors rounded-sm"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>

              {/* Ad Placeholder */}
              <div className="bg-muted border border-border rounded-sm p-8 flex items-center justify-center min-h-[300px]">
                <p className="text-muted-foreground text-sm text-center">
                  Advertisement Space
                  <br />
                  <span className="text-xs">300 x 250</span>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
