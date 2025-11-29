import { Link } from 'react-router-dom';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { NewsArticle } from '@/data/sampleNews';

interface CategoryNewsItem {
  category: string;
  categorySlug: string;
  article: NewsArticle;
}

interface ThreeColumnMixedRowProps {
  items: CategoryNewsItem[];
}

/**
 * ThreeColumnMixedRow Component
 *
 * Displays up to 3 news items from different categories in a premium 3-column layout.
 * Each column shows one news card from a category with only 1 news item.
 * This creates visual diversity and efficient space usage.
 */
const ThreeColumnMixedRow = ({ items }: ThreeColumnMixedRowProps) => {
  if (items.length === 0) return null;

  const formattedDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  const formattedViews = (views: number) =>
    views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views.toString();

  return (
    <section className="py-8 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, 3).map(({ category, categorySlug, article }) => (
          <article
            key={article.id}
            className="group bg-card rounded-sm overflow-hidden border border-border news-card-hover"
          >
            {/* Category Header with Link */}
            <div className="flex items-center justify-between p-4 pb-3 border-b border-border">
              <h3 className="text-sm font-headline font-bold uppercase tracking-wider text-foreground">
                {category}
              </h3>
              <Link
                to={`/category/${categorySlug}`}
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* News Card Content */}
            <Link to={`/article/${article.slug}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="p-4">
              {article.isBreaking && (
                <span className="badge-breaking mb-2 inline-block">
                  Breaking
                </span>
              )}

              <Link to={`/article/${article.slug}`}>
                <h4 className="font-headline font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h4>
              </Link>

              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
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
};

export default ThreeColumnMixedRow;
