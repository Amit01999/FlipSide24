import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { NewsArticle } from "@/data/sampleNews";

interface EditorsPicksProps {
  articles: NewsArticle[];
}

const EditorsPicks = ({ articles }: EditorsPicksProps) => {
  if (articles.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-sm p-6">
      <h3 className="text-xl font-headline font-bold mb-6 pb-2 border-b-2 border-primary">
        Editor's Picks
      </h3>
      <div className="space-y-6">
        {articles.slice(0, 5).map((article, index) => (
          <article key={article.id} className="group">
            <Link to={`/article/${article.slug}`} className="flex gap-4">
              {index === 0 ? (
                <div className="w-full">
                  <div className="aspect-video overflow-hidden rounded-sm mb-3">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h4 className="font-headline font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              ) : (
                <>
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h4 className="font-headline font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                      {article.title}
                    </h4>
                    <span className="text-muted-foreground text-xs mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default EditorsPicks;
