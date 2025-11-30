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
    headline: "Bureaucracy's interference on forming Police Commission",
    url: 'https://www.prothomalo.com/bangladesh/eus3t53qdr',
    imageUrl:
      'https://media.prothomalo.com/prothomalo-bangla%2F2025-11-30%2Fpgfqud63%2FUntitled-4.jpg?rect=0%2C0%2C1421%2C947&w=375&auto=format%2Ccompress&fmt=avif',
    source: 'Prothom Alo',
  },
  {
    id: 2,
    headline: 'Frequent shake-ups ‘erode confidence in field admin’',
    url: 'https://www.thedailystar.net/news/bangladesh/news/frequent-shake-ups-erode-confidence-field-admin-4046721',
    imageUrl:
      'https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2025/11/05/bd_govt_logo_2.jpg',
    source: 'The Daily Star',
  },
  {
    id: 3,
    headline: 'Encroachment and illegal construction on Sonadia Island',
    url: 'https://samakal.com/whole-country/article/327556/%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A7%9F%E0%A6%BE-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A7%80%E0%A6%AA%E0%A7%87-%E0%A6%A6%E0%A6%96%E0%A6%B2-%E0%A6%85%E0%A6%AC%E0%A7%88%E0%A6%A7-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%BE%E0%A6%A3',
    imageUrl:
      'https://samakal.com/media/imgAll/2025November/untitled-11-1764468923.jpg',
    source: 'Samakal',
  },
  {
    id: 4,
    headline: 'Dark grip on BB’s green fund',
    url: 'https://www.kalerkantho.com/print-edition/first-page/2025/11/30/1613074',
    imageUrl:
      'https://asset.kalerkantho.com/public/news_images/2025/11/30/1764443275-61cb0289def42584b4bbab57753876b7.jpg',
    source: 'Kaler Kantho',
  },
  {
    id: 5,
    headline: 'Tk 100 cr bribe to Hasina: ACC to investigate Transcom CEO',
    url: 'https://bangla.bdnews24.com/bangladesh/ea0fe2b8b0b3',
    imageUrl:
      'https://cdn.bdnews24.com/bdnews24/media/bangla/imgAll/2025November/simin-rahman-301125-1764440748.jpg',
    source: 'bdnews24.com',
  },
  {
    id: 6,
    headline: 'Tk 336-crore project with no work',
    url: 'https://www.deshrupantor.com/642632/%E0%A6%8F%E0%A6%95-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%95%E0%A6%BE%E0%A6%9C-%E0%A6%A8%E0%A7%87%E0%A6%87-%E0%A7%A9%E0%A7%A9%E0%A7%AC-%E0%A6%95%E0%A7%8B%E0%A6%9F%E0%A6%BF%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A7%87',
    imageUrl:
      'https://cdn.deshrupantor.net/contents/cache/images/900x506x1/uploads/media/2025/11/30/2741844af377a54b76add24470850089-692b9cf51a85b.jpg?jadewits_media_id=155827',
    source: 'Desh Rupantor',
  },
  {
    id: 7,
    headline:
      'Civil Aviation ministry appointing consultants through secret tender',
    url: 'https://www.dainikamadershomoy.com/details/019ad0b05c215',
    imageUrl:
      'https://admin.dainikamadershomoy.com/images/large/2025/11/30/news_1764473943502.webp',
    source: 'Dainik Amader Shomoy',
  },
  {
    id: 8,
    headline: 'Tk 33 lakh/month spending on ‘useless’ EVMs',
    url: 'https://www.ajkerpatrika.com/national/ajpv5lsry5kvw',
    imageUrl: 'https://images.ajkerpatrika.com/original_images/ibhem-EVM.jpg',
    source: 'Ajker Patrika',
  },
  {
    id: 9,
    headline: 'Pharma in crisis as costs soar but prices stay fixed',
    url: 'https://www.tbsnews.net/economy/industry/pharma-crisis-costs-soar-prices-stay-fixed-1298041',
    imageUrl:
      'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2025/09/27/medicine.png',
    source: 'The Business Standard',
  },
  {
    id: 10,
    headline: 'Bitter truth behind sweetness',
    url: 'https://tob.news/the-bitter-truth-behind-sweetness/#google_vignette',
    imageUrl:
      'https://tob.news/wp-content/uploads/2025/11/Tangail-Mishti-Potti-1024x576.jpg',
    source: 'TOB News',
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
