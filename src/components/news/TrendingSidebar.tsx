import { Link } from 'react-router-dom';
import { TrendingUp, Eye } from 'lucide-react';
import { NewsArticle } from '@/data/sampleNews';

interface TrendingSidebarProps {
  articles: NewsArticle[];
}

const TrendingSidebar = ({ articles }: TrendingSidebarProps) => {
  if (articles.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-sm p-6">
      <h3 className="text-xl font-headline font-bold mb-6 pb-2 border-b-2 border-primary flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        Trending Now
      </h3>
      <div className="space-y-4">
        {articles.slice(0, 5).map((article, index) => (
          <article key={article.id} className="group flex items-start gap-4">
            <span className="text-3xl font-headline font-bold text-muted-foreground/30 group-hover:text-primary transition-colors">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <Link to={`/article/${article.slug}`}>
                <h4 className="font-headline font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h4>
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground text-xs mt-2">
                <span className="text-primary font-medium">
                  {article.category}
                </span>
                <span>•</span>
                {/* <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {article.views >= 1000
                    ? `${(article.views / 1000).toFixed(1)}k`
                    : article.views}
                </span> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TrendingSidebar;
