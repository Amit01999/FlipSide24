import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Clock,
  Eye,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowLeft,
  Send,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import NewsCard from '@/components/news/NewsCard';
import TrendingSidebar from '@/components/news/TrendingSidebar';
import TopPick from '@/components/news/TopPick';
import {
  getArticleBySlug,
  sampleNews,
  getTrendingArticles,
} from '@/data/sampleNews';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Article = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || '');
  const trendingArticles = getTrendingArticles();

  const relatedArticles = sampleNews
    .filter(a => a.category === article?.category && a.id !== article?.id)
    .slice(0, 3);

  if (!article) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-4xl font-headline font-bold mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
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

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const shareUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: 'Link copied!',
      description: 'Article link has been copied to clipboard.',
    });
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | FlipSide24</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.imageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.imageUrl} />
        <link rel="canonical" href={shareUrl} />
      </Helmet>

      <Layout>
        <article className="container py-8">
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
                  to={`/category/${article.category.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {article.category}
                </Link>
              </li>
              {article.subcategory && (
                <>
                  <li>/</li>
                  <li className="text-foreground">{article.subcategory}</li>
                </>
              )}
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Category Badge */}
              <div className="mb-4">
                {article.isBreaking && (
                  <span className="badge-breaking mr-2">Breaking</span>
                )}
                <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {article.subcategory || article.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 pb-6 mb-6 border-b border-border text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  By{' '}
                  <span className="font-medium text-foreground">
                    {article.author}
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {formattedDate}
                </span>
                {/* <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {article.views.toLocaleString()} views
                </span> */}
              </div>

              {/* Hero Image */}
              <figure className="mb-8">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full aspect-video object-cover rounded-sm"
                />
                {/* <figcaption className="text-sm text-muted-foreground mt-2 italic">
                  Photo: FlipSide24
                </figcaption> */}
              </figure>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">
                  {article.content}
                </p>
              </div>

              {/* <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed text-foreground">
                  {article.content}
                </p>
                <p className="text-lg leading-relaxed text-foreground mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <blockquote className="editorial-quote my-8">
                  "The significance of this development cannot be understated.
                  It represents a fundamental shift in how we approach these
                  critical issues."
                </blockquote>
                <p className="text-lg leading-relaxed text-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div> */}

              {/* Tags */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/tag/${tag}`}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 py-6 border-t border-b border-border mb-8">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Share2 className="h-4 w-4" />
                  Share:
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() =>
                      window.open(
                        `https://facebook.com/sharer/sharer.php?u=${shareUrl}`,
                        '_blank'
                      )
                    }
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${shareUrl}&text=${article.title}`,
                        '_blank'
                      )
                    }
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() =>
                      window.open(
                        `https://linkedin.com/shareArticle?url=${shareUrl}&title=${article.title}`,
                        '_blank'
                      )
                    }
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={handleCopyLink}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Author Box */}
              <div className="bg-muted p-6 rounded-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg">
                      {article.author}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {article.author === 'Investigation Team'
                        ? "FlipSide24's dedicated investigation team covers in-depth stories and exclusive reports."
                        : `${
                            article.author
                          } is a senior correspondent at FlipSide24, covering ${article.category.toLowerCase()} and current affairs.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <section>
                  <h3 className="text-2xl font-headline font-bold mb-6 category-accent">
                    Related Articles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map(relatedArticle => (
                      <NewsCard
                        key={relatedArticle.id}
                        article={relatedArticle}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <TrendingSidebar articles={trendingArticles} />

              {/* Top Picks */}
              <TopPick />

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
                    className="w-full px-4 py-2 bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors rounded-sm flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Subscribe Now
                  </button>
                </form>
              </div>

              {/* Ad Space */}
              <div className="bg-muted rounded-sm p-8 text-center">
                <p className="text-muted-foreground text-sm">Advertisement</p>
              </div>
            </aside>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Article;
