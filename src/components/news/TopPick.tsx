import { ExternalLink, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopPickItem {
  id: number;
  headline: string;
  url: string;
  imageUrl: string;
  source: string;
}

const topPicksData: TopPickItem[] = [
  {
    id: 1,
    headline: '5yrs on, no building regulatory body yet',
    url: 'https://www.thedailystar.net/news/bangladesh/news/5yrs-no-building-regulatory-body-yet-4045971',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    source: 'The Daily Star',
  },
  {
    id: 2,
    headline:
      'Family planning activities in the country stagnant, population uncontrolled',
    url: 'https://www.prothomalo.com/bangladesh/8sentxw4tm',
    imageUrl:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop',
    source: 'Prothom Alo',
  },
  {
    id: 3,
    headline: 'Election campaigning on billboards, new advertisement of discrimination',
    url: 'https://samakal.com/bangladesh/article/327410/%E0%A6%AC%E0%A6%BF%E0%A6%B2%E0%A6%AC%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A7%87-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A6%A8%E0%A7%80-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%9A%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%88%E0%A6%B7%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A7%87%E0%A6%B0-%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%AA%E0%A6%A8',
    imageUrl:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop',
    source: 'Samakal',
  },
  {
    id: 4,
    headline: 'Child marriage is very common in char villages',
    url: 'https://www.kalerkantho.com/print-edition/first-page/2025/11/29/1612621',
    imageUrl:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop',
    source: 'Kaler Kantho',
  },
  {
    id: 5,
    headline: 'Flawed fuel and power policies cause major pressure on economy',
    url: 'https://bonikbarta.com/bangladesh/zKKQROa0IQChWGDE',
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
    source: 'Bonik Barta',
  },
  {
    id: 6,
    headline: 'Four electoral alliances becoming visible this very week',
    url: 'https://www.dainikamadershomoy.com/details/019acb92aef91',
    imageUrl:
      'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=250&fit=crop',
    source: 'Dainik Amadershomoy',
  },
  {
    id: 7,
    headline: 'Timber smuggling under the cover of land permits',
    url: 'https://www.ajkerpatrika.com/bangladesh/bandarban/ajpjif93mitdt',
    imageUrl:
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=250&fit=crop',
    source: 'Ajker Patrika',
  },
  {
    id: 8,
    headline: 'The struggle for life in the ruins',
    url: 'https://www.jugantor.com/tp-firstpage/1034711',
    imageUrl:
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop',
    source: 'Jugantor',
  },
  {
    id: 9,
    headline: "Dhaka air 'unhealthy' despite joint efforts",
    url: 'https://www.newagebd.net/post/environment-climate-change/283572/dhaka-air-unhealthy-despite-joint-efforts',
    imageUrl:
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop',
    source: 'New Age Bangladesh',
  },
  {
    id: 10,
    headline:
      "Rammala Library: Inside Bangladesh's century-old archive of books, rare manuscripts",
    url: 'https://www.tbsnews.net/features/panorama/rammala-library-inside-bangladeshs-century-old-archive-books-rare-manuscripts',
    imageUrl:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=250&fit=crop',
    source: 'The Business Standard',
  },
];

const TopPick = () => {
  return (
    <div className="bg-card border border-border rounded-sm p-6 shadow-sm">
      <h3 className="text-xl font-headline font-bold mb-6 pb-3 border-b-2 border-primary flex items-center gap-2">
        <Star className="h-5 w-5 text-primary fill-primary" />
        Today's Top Pick
      </h3>

      <div className="space-y-4">
        {topPicksData.map((item, index) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-muted/30 border border-border rounded-sm overflow-hidden hover:shadow-md hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex gap-3 p-3">
              {/* Image */}
              <div className="relative flex-shrink-0 w-24 h-20 overflow-hidden rounded-sm">
                <img
                  src={item.imageUrl}
                  alt={item.headline}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-1 left-1 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-sm">
                  #{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <h4 className="font-semibold text-sm leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-3">
                  {item.headline}
                </h4>
                <div className="flex items-center gap-1 text-primary text-xs mt-1">
                  <span className="font-medium">Read more</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-4 pt-4 border-t border-border space-y-3">
        <p className="text-xs text-center text-muted-foreground italic">
          Curated stories from across the web
        </p>
        <Link
          to="/category/top-pick"
          className="flex items-center justify-center gap-2 w-full py-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-sm transition-all duration-300 group font-semibold text-sm"
        >
          <span>View All Top Picks</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default TopPick;
