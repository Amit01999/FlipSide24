import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { ExternalLink, Star } from 'lucide-react';

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
  {
    id: 1,
    headline: '5yrs on, no building regulatory body yet',
    url: 'https://www.thedailystar.net/news/bangladesh/news/5yrs-no-building-regulatory-body-yet-4045971',
    imageUrl:
      'https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2025/11/29/building_0.jpg',
    source: 'The Daily Star',
  },
  {
    id: 2,
    headline:
      'Family planning activities in the country stagnant, population uncontrolled',
    url: 'https://www.prothomalo.com/bangladesh/8sentxw4tm',
    imageUrl:
      'https://media.prothomalo.com/prothomalo-bangla%2F2025-11-28%2Fx0wqmmk6%2FCapture.PNG?w=420&auto=format%2Ccompress&fmt=avif',
    source: 'Prothom Alo',
  },
  {
    id: 3,
    headline:
      'Election campaigning on billboards, new advertisement of discrimination',
    url: 'https://samakal.com/bangladesh/article/327410/%E0%A6%AC%E0%A6%BF%E0%A6%B2%E0%A6%AC%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A7%87-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A6%A8%E0%A7%80-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%9A%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%88%E0%A6%B7%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A7%87%E0%A6%B0-%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%AA%E0%A6%A8',
    imageUrl:
      'https://samakal.com/media/imgAll/2025November/untitled-11-1764382522.jpg',
    source: 'Samakal',
  },
  {
    id: 4,
    headline: 'Child marriage is very common in char villages',
    url: 'https://www.kalerkantho.com/print-edition/first-page/2025/11/29/1612621',
    imageUrl:
      'https://asset.kalerkantho.com/public/news_images/2025/11/29/1764353029-124790c614cb125661da90aef325e798.jpg',
    source: 'Kaler Kantho',
  },
  {
    id: 5,
    headline: 'Flawed fuel and power policies cause major pressure on economy',
    url: 'https://bonikbarta.com/bangladesh/zKKQROa0IQChWGDE',
    imageUrl:
      'https://static.bonikbarta.com/original_images/Untitled-1_p2zHThy.jpg',
    source: 'Bonik Barta',
  },
  {
    id: 6,
    headline: 'Four electoral alliances becoming visible this very week',
    url: 'https://www.dainikamadershomoy.com/details/019acb92aef91',
    imageUrl:
      'https://admin.dainikamadershomoy.com/images/large/2025/11/28/news_1764351978450.webp',
    source: 'Dainik Amadershomoy',
  },
  {
    id: 7,
    headline: 'Timber smuggling under the cover of land permits',
    url: 'https://www.ajkerpatrika.com/bangladesh/bandarban/ajpjif93mitdt',
    imageUrl: 'https://images.ajkerpatrika.com/original_images/tree-cution.jpg',
    source: 'Ajker Patrika',
  },
  {
    id: 8,
    headline: 'The struggle for life in the ruins',
    url: 'https://www.jugantor.com/tp-firstpage/1034711',
    imageUrl:
      'https://cdn.jugantor.com/assets/news_photos/2025/11/29/2-6929fe5c1efc6.jpg',
    source: 'Jugantor',
  },
  {
    id: 9,
    headline: "Dhaka air 'unhealthy' despite joint efforts",
    url: 'https://www.newagebd.net/post/environment-climate-change/283572/dhaka-air-unhealthy-despite-joint-efforts',
    imageUrl:
      'https://outspoken.newagebd.com/files/img/202511/9644cf003fb4a145ffd2d8c3a658bdcd.jpg',
    source: 'New Age Bangladesh',
  },
  {
    id: 10,
    headline:
      "Rammala Library: Inside Bangladesh's century-old archive of books, rare manuscripts",
    url: 'https://www.tbsnews.net/features/panorama/rammala-library-inside-bangladeshs-century-old-archive-books-rare-manuscripts',
    imageUrl:
      'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2025/11/29/mhn_0645.jpg',
    source: 'The Business Standard',
  },
  {
    id: 11,
    headline: '150 earthquake rescue equipment boxes are lying unused',
    url: 'https://samakal.com/bangladesh/article/327281/%E0%A6%AD%E0%A7%82%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A7%87%E0%A6%B0-%E0%A7%A7%E0%A7%AB%E0%A7%A6-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%BE%E0%A6%B0-%E0%A6%AF%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%B0-%E0%A6%AC%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A7%87%E0%A6%87-%E0%A6%AA%E0%A7%9C%E0%A7%87-%E0%A6%86%E0%A6%9B%E0%A7%87',
    imageUrl:
      'https://samakal.com/media/imgAll/2025November/untitled-11-1764296147.jpg',
    source: 'Samakal',
  },
  {
    id: 12,
    headline: 'Earthquake: Another active fault line discovered in the country',
    url: 'https://www.prothomalo.com/bangladesh/qdnjgijx97',
    imageUrl:
      'https://media.prothomalo.com/prothomalo-bangla%2F2025-11-28%2F11a8xvxm%2FWhatsApp-Image-2025-11-28-at-4.22.43-PM.jpeg?w=622&auto=format%2Ccompress&fmt=avif',
    source: 'Prothom Alo',
  },
  {
    id: 13,
    headline:
      'Tk 786 Crore Gas Bill Arrears: Disconnection Notice to LafargeHolcim Stayed by Court',
    url: 'https://www.kalerkantho.com/print-edition/last-page/2025/11/28/1612281',
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    source: 'Kaler Kantho',
  },
  {
    id: 14,
    headline: "The Cat Is Out of the Bag: SP Shibly Kaisar's Secrets Revealed",
    url: 'https://www.jugantor.com/national/1034546',
    imageUrl:
      'https://cdn.jugantor.com/assets/news_photos/2025/11/28/787878-69293472043ee.jpg',
    source: 'Jugantor',
  },
  {
    id: 15,
    headline:
      'Labour Export Syndicate in Malaysia: CID Identifies Offenders but Lacks Evidence',
    url: 'https://bonikbarta.com/bangladesh/UYHYEoAdqHa8AF5k',
    imageUrl: 'https://static.bonikbarta.com/original_images/9_ZQza3je.jpg',
    source: 'Bonik Barta',
  },
  {
    id: 16,
    headline: 'Memory Card Scandal: Five Years On, Culprits Remain Untouched',
    url: 'https://www.thedailystar.net/news/bangladesh/crime-justice/news/memory-card-scandal-five-years-culprits-remain-untouched-4045481',
    imageUrl:
      'https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2025/11/28/memory-card.jpg',
    source: 'The Daily Star',
  },
  {
    id: 17,
    headline: 'Rajuk seeks fivefold hike in construction approval fees',
    url: 'https://www.tbsnews.net/bangladesh/rajuk-seeks-fivefold-hike-construction-approval-fees-1296821',
    imageUrl:
      'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2024/10/13/dhaka_city_buildings_housing_0.jpg',
    source: 'The Business Standard',
  },
  {
    id: 18,
    headline: 'Outstanding Non-Performing Loans Reach Tk 13 Lakh Crore',
    url: 'https://www.ajkerpatrika.com/business/ajpaxigf7v576',
    imageUrl:
      'https://images.ajkerpatrika.com/original_images/bangladesh-bank_Nuvcull.jpg',
    source: 'Ajker Patrika',
  },
  {
    id: 19,
    headline:
      'Substandard KitKat, sugar, powdered milk: Arrest warrants issued for Nestlé Bangladesh, Meghna Group, SA Group bosses',
    url: 'https://www.tbsnews.net/bangladesh/court/substandard-kitkat-sugar-powdered-milk-arrest-warrants-issued-nestle-bangladesh',
    imageUrl:
      'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2025/11/26/logo.png',
    source: 'The Business Standard',
  },
  {
    id: 20,
    headline: "Will Bangladesh's Hasina face the hangman?",
    url: 'https://www.aljazeera.com/gallery/2025/11/28/history-illustrated-will-bangladeshs-hasina-face-the-hangman',
    imageUrl:
      'https://www.aljazeera.com/wp-content/uploads/2025/11/01-1764324896.jpg?resize=770%2C513&quality=80',
    source: 'Al Jazeera',
  },
];

const TopPickPage = () => {
  return (
    <>
      <Helmet>
        <title>Top Picks - Curated News Stories | FlipSide24</title>
        <meta
          name="description"
          content="Hand-picked important news stories from across Bangladesh and beyond. FlipSide24's curated collection of must-read articles."
        />
        <link rel="canonical" href="https://flipside24.com/category/top-pick" />
      </Helmet>

      <Layout>
        <div className="container py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-8 w-8 text-primary fill-primary" />
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Top Picks
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our curated collection of important stories from across the web.
              These hand-picked articles represent significant developments in
              Bangladesh and beyond.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPicksData.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.headline}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-sm font-bold shadow-lg">
                    #{index + 1}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-sm text-xs">
                    {item.source}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-lg font-headline font-semibold leading-tight mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-3">
                    {item.headline}
                  </h2>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Read full story</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-muted/50 border border-border rounded-sm text-center">
            <p className="text-muted-foreground">
              These stories are curated from various news sources across
              Bangladesh and international media. FlipSide24 does not claim
              ownership of these articles.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TopPickPage;
