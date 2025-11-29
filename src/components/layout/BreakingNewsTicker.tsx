import { breakingNews } from '@/data/sampleNews';

const BreakingNewsTicker = () => {
  // Render each news item with proper spacing
  const renderNewsItems = () => (
    <>
      {breakingNews.map((news, index) => (
        <span key={index} className="inline-block text-sm">
          <span className="px-6">{news}</span>
          <span className="px-3 text-primary-foreground/60">•</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="container flex items-center">
        <span className="bg-foreground text-background px-3 py-1 text-xs font-bold uppercase tracking-wider mr-4 flex-shrink-0">
          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-dot"></span>
          Breaking
        </span>
        <div className="overflow-hidden flex-1 whitespace-nowrap relative">
          <div className="inline-block animate-ticker-seamless">
            <span className="inline-block">{renderNewsItems()}</span>
            <span className="inline-block">{renderNewsItems()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
