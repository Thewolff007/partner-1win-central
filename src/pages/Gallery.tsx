import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-main.jpg';
import featuresImage from '@/assets/features-stats.jpg';
import gamesImage from '@/assets/games-collection.jpg';
import gameSlotsImage from '@/assets/game-slots.jpg';
import sportsLiveImage from '@/assets/sports-live.jpg';
import aviatorGameImage from '@/assets/aviator-game.jpg';
import teenPattiImage from '@/assets/teen-patti.jpg';

const JOIN_LINK = 'https://lkxw.cc/a0b0';

export default function Gallery() {
  const galleryImages = [
    { src: heroImage, title: 'Casino Games Collection', desc: 'Premium mobile gaming experience' },
    { src: featuresImage, title: 'Real-Time Analytics', desc: 'Track your performance' },
    { src: gamesImage, title: 'Game Variety', desc: 'Over 5000+ games available' },
    { src: gameSlotsImage, title: 'Egyptian Slots Collection', desc: 'Exciting themed slot machines' },
    { src: sportsLiveImage, title: 'Live Cricket Stadium', desc: 'Real-time sports betting action' },
    { src: aviatorGameImage, title: 'Aviator Game Interface', desc: 'Popular crash game experience' },
    { src: teenPattiImage, title: 'Teen Patti Live Game', desc: 'Traditional Indian card game' },
  ];

  const gameScreenshots = [
    '/images/blog/casino-games.jpg',
    '/images/blog/post-1.jpg',
    '/images/blog/post-2.jpg',
    '/images/blog/post-3.jpg',
    '/images/blog/post-4.jpg',
    '/images/blog/post-7.jpg',
    '/images/blog/post-8.jpg',
    '/images/blog/post-9.jpg',
    '/images/blog/post-10.jpg',
    '/images/blog/post-11.jpg',
    '/images/blog/post-12.jpg',
    '/images/blog/post-17.jpg',
  ];

  return (
    <>
      <SEO
        title="Gallery - Screenshots & Promotional Materials"
        description="Browse through our gallery of screenshots, promotional materials, and marketing assets for 1win Partners affiliate program."
        keywords="1win gallery, casino screenshots, promotional materials, marketing assets"
      />
      <Navigation />

      <div className="min-h-screen pt-20 pb-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our platform and promotional materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {galleryImages.map((image, i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.desc}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {gameScreenshots.map((screenshot, i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <img 
                  src={screenshot} 
                  alt={`Game Screenshot ${i + 1}`}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>

          <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Promote?</h2>
            <p className="text-muted-foreground mb-6">
              Download our marketing materials and start earning today
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer">
                Join Now & Get Materials
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
