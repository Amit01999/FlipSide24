import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Eye } from 'lucide-react';
import { NewsArticle } from '@/data/sampleNews';

interface TwoNewsRowProps {
  category: string;
  categorySlug: string;
  articles: NewsArticle[];
  variant?: 'horizontal' | 'featured-small';
}

/**
 * TwoNewsRow Component
 *
 * Premium layout for categories with exactly 2 news items.
 * Supports two variants:
 * - horizontal: 2 equal cards side by side
 * - featured-small: 1 larger card + 1 smaller card
 */
const TwoNewsRow = ({
  category,
  categorySlug,
  articles,
  variant = 'horizontal',
}: TwoNewsRowProps) => {
  if (articles.length < 2) return null;

  const formattedDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  const formattedViews = (views: number) =>
    views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views.toString();

  // Horizontal: 2 equal cards
  if (variant === 'horizontal') {
    return (
      <section className="py-8 border-t border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-headline font-bold category-accent">
            {category}
          </h2>
          <Link
            to={`/category/news/${categorySlug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.slice(0, 2).map(article => (
            <article
              key={article.id}
              className="group bg-card rounded-sm overflow-hidden border border-border news-card-hover"
            >
              <Link to={`/article/${article.slug}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-5">
                {article.isBreaking && (
                  <span className="badge-breaking mb-2 inline-block">
                    Breaking
                  </span>
                )}
                {!article.isBreaking && (
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {article.subcategory || article.category}
                  </span>
                )}
                <Link to={`/article/${article.slug}`}>
                  <h3 className="font-headline font-bold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-2 mb-3">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-muted-foreground text-xs pt-3 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formattedDate(article.publishedAt)}
                  </span>
                  {/* {article.views > 0 && (
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {formattedViews(article.views)}
                    </span>
                  )} */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  // Featured-Small: 1 big + 1 small
  if (variant === 'featured-small') {
    return (
      <section className="py-8 border-t border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-headline font-bold category-accent">
            {category}
          </h2>
          <Link
            to={`/category/news/${categorySlug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Featured Card */}
          <article className="lg:col-span-2 group relative overflow-hidden rounded-sm">
            <Link to={`/article/${articles[0].slug}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={articles[0].imageUrl}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {articles[0].isBreaking && (
                  <span className="badge-breaking mb-3 inline-block">
                    Breaking
                  </span>
                )}
                {!articles[0].isBreaking && (
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
                    {articles[0].subcategory || articles[0].category}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-3 line-clamp-3 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-white/90 text-sm mb-4 line-clamp-2 hidden md:block">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/70 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formattedDate(articles[0].publishedAt)}
                  </span>
                  {/* {articles[0].views > 0 && (
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {formattedViews(articles[0].views)}
                    </span>
                  )} */}
                </div>
              </div>
            </Link>
          </article>

          {/* Smaller Card */}
          <article className="group bg-card border border-border rounded-sm overflow-hidden news-card-hover">
            <Link to={`/article/${articles[1].slug}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={articles[1].imageUrl}
                  alt={articles[1].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-5">
              {articles[1].isBreaking && (
                <span className="badge-breaking mb-2 inline-block">
                  Breaking
                </span>
              )}
              {!articles[1].isBreaking && (
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {articles[1].subcategory || articles[1].category}
                </span>
              )}
              <Link to={`/article/${articles[1].slug}`}>
                <h3 className="font-headline font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-2 mb-3">
                  {articles[1].title}
                </h3>
              </Link>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                {articles[1].excerpt}
              </p>
              <div className="flex items-center gap-4 text-muted-foreground text-xs pt-3 border-t border-border">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formattedDate(articles[1].publishedAt)}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return null;
};

export default TwoNewsRow;
