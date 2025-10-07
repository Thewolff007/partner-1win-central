import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Gamepad2, Trophy, Plane, Spade } from 'lucide-react';
import gamesImage from '@/assets/games-collection.jpg';

const JOIN_LINK = 'https://lkxw.cc/a0b0';

export default function Products() {
  const { t } = useTranslation();

  const products = [
    { icon: Gamepad2, title: t('products.casino'), desc: t('products.casinoDesc'), count: '2000+' },
    { icon: Trophy, title: t('products.sports'), desc: t('products.sportsDesc'), count: '40+' },
    { icon: Plane, title: t('products.aviator'), desc: t('products.aviatorDesc'), count: 'Exclusive' },
    { icon: Spade, title: t('products.poker'), desc: t('products.pokerDesc'), count: '500+' },
  ];

  return (
    <>
      <SEO
        title="Products - 5000+ Casino Games & Sports Betting"
        description="Explore 1win's extensive collection of casino games, sports betting, Aviator, and poker. Over 5000+ games with high RTP and competitive odds."
        keywords="casino games, sports betting, aviator game, poker, slots, table games, live casino"
      />
      <Navigation />

      <div className="min-h-screen pt-20 pb-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('products.title')}
            </h1>
            <p className="text-2xl text-primary font-semibold mb-4">{t('products.subtitle')}</p>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer">
                {t('products.viewAll')}
              </a>
            </Button>
          </div>

          <div className="mb-16">
            <img 
              src={gamesImage} 
              alt="Games Collection" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {products.map((product, i) => (
              <Card key={i} className="p-8 hover:shadow-xl transition-all bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{product.title}</h3>
                      <span className="text-sm font-semibold text-primary">{product.count}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{product.desc}</p>
                    <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
                      <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer">
                        Play Now
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore All Games?</h2>
            <p className="text-muted-foreground mb-6">Join now and get access to 5000+ premium games</p>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer">
                Join Now & Start Playing
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
