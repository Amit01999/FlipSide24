import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Grid, List, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import NewsCard from '@/components/news/NewsCard';
import TrendingSidebar from '@/components/news/TrendingSidebar';
import { categories, sampleNews, getTrendingArticles } from '@/data/sampleNews';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Category = () => {
  const { category, subcategory } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'latest' | 'trending' | 'popular'>(
    'latest'
  );

  const categoryData = categories.find(c => c.slug === category);

  const subcategoryData = categoryData?.subcategories?.find(
    s => s.slug === subcategory
  );

  const displayName = subcategoryData?.name || categoryData?.name || 'Category';

  /**
   * Enhanced filtering logic to handle:
   * 1. Direct category match (article.category === categoryData.name)
   * 2. Subcategory match (article.category === subcategory name in categoryData)
   * 3. Both category and subcategory filters
   */
  let filteredArticles = sampleNews.filter(article => {
    if (!categoryData) return false;

    // Normalize strings for comparison
    const articleCategory = article.category.toLowerCase().trim();
    const articleSubcategory = article.subcategory?.toLowerCase().trim();
    const targetCategoryName = categoryData.name.toLowerCase().trim();

    // If a specific subcategory is requested
    if (subcategory && subcategoryData) {
      const targetSubcategoryName = subcategoryData.name.toLowerCase().trim();

      // Match articles where:
      // - article.category matches the main category name OR
      // - article.category matches the subcategory name (data structure flexibility)
      // AND article.subcategory matches the requested subcategory
      return (
        ((articleCategory === targetCategoryName ||
          articleCategory === targetSubcategoryName) &&
          articleSubcategory === targetSubcategoryName) ||
        // Also match if article.category directly matches the subcategory
        articleCategory === targetSubcategoryName
      );
    }

    // If only category is specified (no subcategory)
    // Match articles where:
    // 1. article.category matches the category name directly
    const directCategoryMatch = articleCategory === targetCategoryName;

    // 2. article.category matches any subcategory name under this category
    const subcategoryMatch =
      categoryData.subcategories?.some(
        sub => sub.name.toLowerCase().trim() === articleCategory
      ) || false;

    return directCategoryMatch || subcategoryMatch;
  });

  // Sort articles
  if (sortBy === 'trending' || sortBy === 'popular') {
    filteredArticles = [...filteredArticles].sort((a, b) => b.views - a.views);
  } else {
    filteredArticles = [...filteredArticles].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  const trendingArticles = getTrendingArticles();

  if (!categoryData) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-4xl font-headline font-bold mb-4">
            Category Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The category you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{displayName} News | FlipSide24</title>
        <meta
          name="description"
          content={`Latest ${displayName.toLowerCase()} news and updates from FlipSide24. Stay informed with breaking news, analysis, and in-depth reporting.`}
        />
        <link
          rel="canonical"
          href={`https://flipside24.com/category/${category}${
            subcategory ? `/${subcategory}` : ''
          }`}
        />
      </Helmet>

      <Layout>
        <div className="container py-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to={`/category/${category}`}
                  className={cn(
                    'transition-colors',
                    !subcategory
                      ? 'text-foreground font-medium'
                      : 'hover:text-primary'
                  )}
                >
                  {categoryData.name}
                </Link>
              </li>
              {subcategory && subcategoryData && (
                <>
                  <li>/</li>
                  <li className="text-foreground font-medium">
                    {subcategoryData.name}
                  </li>
                </>
              )}
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8 pb-6 border-b border-border">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 category-accent">
              {displayName}
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore the latest {displayName.toLowerCase()} news and stories
            </p>
            {categoryData.subcategories && !subcategory && (
              <div className="flex flex-wrap gap-2 mt-6">
                {categoryData.subcategories.map(sub => (
                  <Link
                    key={sub.slug}
                    to={`/category/${category}/${sub.slug}`}
                    className="px-4 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Controls */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    {filteredArticles.length}{' '}
                    {filteredArticles.length === 1 ? 'article' : 'articles'}{' '}
                    found
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={e =>
                      setSortBy(
                        e.target.value as 'latest' | 'trending' | 'popular'
                      )
                    }
                    className="px-3 py-2 border border-border bg-background text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    aria-label="Sort articles"
                  >
                    <option value="latest">Latest First</option>
                    <option value="trending">Trending</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  {/* View Toggle */}
                  <div className="flex items-center border border-border rounded-sm overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        'p-2 transition-colors',
                        viewMode === 'grid'
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      )}
                      aria-label="Grid view"
                      title="Grid view"
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        'p-2 transition-colors',
                        viewMode === 'list'
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      )}
                      aria-label="List view"
                      title="List view"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Articles */}
              {filteredArticles.length > 0 ? (
                <>
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredArticles.map(article => (
                        <NewsCard key={article.id} article={article} />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {filteredArticles.map(article => (
                        <NewsCard
                          key={article.id}
                          article={article}
                          variant="horizontal"
                        />
                      ))}
                    </div>
                  )}

                  {/* Pagination Placeholder */}
                  {filteredArticles.length > 12 && (
                    <div className="flex justify-center mt-12">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" disabled size="sm">
                          Previous
                        </Button>
                        <Button variant="default" size="sm">
                          1
                        </Button>
                        <Button variant="outline" size="sm">
                          2
                        </Button>
                        <Button variant="outline" size="sm">
                          3
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20 px-4 bg-muted/30 rounded-sm">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-2xl font-headline font-bold mb-3">
                      No Articles Found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any articles in this category yet.
                      {subcategory &&
                        ' Try viewing all articles in the main category.'}
                    </p>
                    {subcategory ? (
                      <Link
                        to={`/category/news/${category}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
                      >
                        View All {categoryData.name}
                      </Link>
                    ) : (
                      <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <TrendingSidebar articles={trendingArticles} />

              {/* Newsletter */}
              <div className="bg-primary text-primary-foreground rounded-sm p-6">
                <h3 className="text-xl font-headline font-bold mb-2">
                  Stay Updated
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Get the latest {displayName.toLowerCase()} news in your inbox
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
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Ad Space */}
              <div className="bg-muted border border-border rounded-sm p-8 text-center min-h-[300px] flex items-center justify-center">
                <div>
                  <p className="text-muted-foreground text-sm">Advertisement</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    300 x 250
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;
