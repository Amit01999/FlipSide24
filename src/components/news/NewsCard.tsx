import { Link } from 'react-router-dom';
import { Clock, Eye } from 'lucide-react';
import { NewsArticle } from '@/data/sampleNews';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
  className?: string;
}

const NewsCard = ({
  article,
  variant = 'default',
  className,
}: NewsCardProps) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }
  );

  const formattedViews =
    article.views >= 1000
      ? `${(article.views / 1000).toFixed(1)}k`
      : article.views.toString();

  if (variant === 'featured') {
    return (
      <article
        className={cn('group relative overflow-hidden rounded-sm', className)}
      >
        <Link to={`/article/${article.slug}`}>
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {article.isBreaking && (
              <span className="badge-breaking mb-3 inline-block">Breaking</span>
            )}
            {!article.isBreaking && article.category && (
              <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
                {article.subcategory || article.category}
              </span>
            )}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-headline font-bold text-white mb-3 line-clamp-3 group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            <p className="text-white/80 text-sm mb-4 line-clamp-2 hidden md:block">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {formattedDate}
              </span>
              {/* <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {formattedViews}
              </span> */}
              <span>By {article.author}</span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article className={cn('group flex gap-4', className)}>
        <Link to={`/article/${article.slug}`} className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-sm">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider">
            {article.subcategory || article.category}
          </span>
          <Link to={`/article/${article.slug}`}>
            <h3 className="font-headline font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
              {article.title}
            </h3>
          </Link>
          <div className="flex items-center gap-3 text-muted-foreground text-xs mt-2">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {formattedDate}
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className={cn('group', className)}>
        <Link
          to={`/article/${article.slug}`}
          className="flex items-start gap-3"
        >
          <span className="text-3xl font-headline font-bold text-muted-foreground/30 group-hover:text-primary transition-colors">
            {String(article.id).padStart(2, '0')}
          </span>
          <div>
            <h3 className="font-headline font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <span className="text-muted-foreground text-xs mt-1 block">
              {formattedDate}
            </span>
          </div>
        </Link>
      </article>
    );
  }

  // Default variant
  return (
    <article
      className={cn(
        'group news-card-hover bg-card rounded-sm overflow-hidden border border-border',
        className
      )}
    >
      <Link to={`/article/${article.slug}`}>
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
          {article.subcategory || article.category}
        </span>
        <Link to={`/article/${article.slug}`}>
          <h3 className="font-headline font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 text-muted-foreground text-xs mt-4 pt-4 border-t border-border">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {formattedDate}
          </span>
          {/* <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {formattedViews}
          </span> */}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
