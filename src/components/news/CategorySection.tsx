import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NewsCard from './NewsCard';
import { NewsArticle } from '@/data/sampleNews';

interface CategorySectionProps {
  title: string;
  slug: string;
  articles: NewsArticle[];
  variant?: 'grid' | 'list' | 'featured';
}

const CategorySection = ({
  title,
  slug,
  articles,
  variant = 'grid',
}: CategorySectionProps) => {
  if (articles.length === 0) return null;

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-headline font-bold category-accent">
          {title}
        </h2>
        <Link
          to={`/category/news/${slug}`}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {variant === 'featured' && articles.length >= 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NewsCard article={articles[0]} variant="featured" />
          </div>
          <div className="space-y-6">
            {articles.slice(1, 4).map(article => (
              <NewsCard
                key={article.id}
                article={article}
                variant="horizontal"
              />
            ))}
          </div>
        </div>
      )}

      {variant === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {variant === 'list' && (
        <div className="space-y-4">
          {articles.slice(0, 4).map(article => (
            <NewsCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
