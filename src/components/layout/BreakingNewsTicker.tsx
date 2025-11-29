import { breakingNews } from "@/data/sampleNews";

const BreakingNewsTicker = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="container flex items-center">
        <span className="bg-foreground text-background px-3 py-1 text-xs font-bold uppercase tracking-wider mr-4 flex-shrink-0">
          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-dot"></span>
          Breaking
        </span>
        <div className="overflow-hidden flex-1 whitespace-nowrap">
          <div className="animate-ticker inline-block">
            {breakingNews.map((news, index) => (
              <span key={index} className="mx-8 text-sm">
                {news}
                {index < breakingNews.length - 1 && (
                  <span className="mx-4 text-primary-foreground/50">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
