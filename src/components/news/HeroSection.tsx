import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye } from 'lucide-react';
import { NewsArticle } from '@/data/sampleNews';

interface HeroSliderProps {
  articles?: NewsArticle[];
  children?: React.ReactNode;
}

const HeroSection = ({ articles = [], children }: HeroSliderProps) => {
  // allow parent to provide pre-rendered slide elements as children
  const childSlides = React.Children.toArray(children);

  // Find the article with isHeroFeatured true for the main featured section
  const heroFeaturedArticle = articles.find(article => article.isHeroFeatured);

  // Get other articles excluding the hero featured one to avoid duplicates
  const otherArticles = articles.filter(article => !article.isHeroFeatured);

  // Distribute articles to different sections (10 unique articles total)
  const leftSidebarArticles = otherArticles.slice(0, 4); // 4 articles
  const rightSidebarArticles = otherArticles.slice(4, 6); // 2 articles
  const secondaryFeaturesArticles = otherArticles.slice(6, 9); // 3 articles

  const formattedDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  const formattedViews = (views: number) =>
    views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views.toString();

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Left Sidebar - Small News Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {leftSidebarArticles
              .filter(Boolean)
              .map(article => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="group block cursor-pointer"
                >
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full aspect-video object-cover rounded-sm mb-2 group-hover:opacity-80 transition-opacity"
                  />
                  <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                </Link>
              ))}
          </div>
        </div>

        {/* Center - Main Featured Article */}

        <div className="lg:col-span-7">
          {heroFeaturedArticle ? (
            <Link to={`/article/${heroFeaturedArticle.slug}`} className="group block">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img
                  src={heroFeaturedArticle.imageUrl}
                  alt={heroFeaturedArticle.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                {heroFeaturedArticle.isBreaking && (
                  <span className="badge-breaking inline-block">
                    Breaking News
                  </span>
                )}
                {!heroFeaturedArticle.isBreaking && (
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider inline-block">
                    {heroFeaturedArticle.subcategory || heroFeaturedArticle.category}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">
                  {heroFeaturedArticle.title}
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {heroFeaturedArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {formattedDate(heroFeaturedArticle.publishedAt)}
                  </span>
                  <span>By {heroFeaturedArticle.author}</span>
                  {/* {heroFeaturedArticle.views > 0 && (
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {formattedViews(heroFeaturedArticle.views)}
                    </span>
                  )} */}
                </div>
              </div>
            </Link>
          ) : childSlides.length > 0 ? (
            <div className="space-y-4">{childSlides}</div>
          ) : null}
        </div>

        {/* Right Sidebar - Two clickable posts (fallback to ad placeholders) */}
        <div className="lg:col-span-3 space-y-6">
          {rightSidebarArticles && rightSidebarArticles.length >= 2 ? (
            rightSidebarArticles.map(article => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="block bg-card border border-border rounded-sm overflow-hidden hover:shadow-md transition-shadow group"
                aria-label={article.title}
              >
                <div className="w-full">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3">
                    <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="text-xs text-muted-foreground mt-3 flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>{formattedDate(article.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <>
              <div className="bg-muted border border-border rounded-sm aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-xs text-center p-4">
                  Advertisement Space
                </p>
              </div>

              <div className="bg-muted border border-border rounded-sm aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-xs text-center p-4">
                  Advertisement Space
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Secondary Features Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {secondaryFeaturesArticles.map(article => (
          <Link
            key={article.id}
            to={`/article/${article.slug}`}
            className="group block"
          >
            <div className="relative mb-4 rounded-sm overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              {article.isBreaking && (
                <span className="badge-breaking text-xs inline-block">
                  Breaking
                </span>
              )}
              {!article.isBreaking && (
                <span className="bg-primary/10 text-primary px-2 py-1 text-xs font-semibold inline-block">
                  {article.subcategory || article.category}
                </span>
              )}
              <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
