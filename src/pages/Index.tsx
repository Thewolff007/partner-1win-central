import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ArrowRight, TrendingUp, Users, DollarSign, BarChart, Globe, Headphones } from 'lucide-react';
import heroImage from '@/assets/hero-main.jpg';
import featuresImage from '@/assets/features-stats.jpg';

const JOIN_LINK = 'https://lkxw.cc/a0b0';
const AFFILIATE_LINK = 'https://1win.run/?p=syeU';
const PROMO_CODE = 'credit500';

export default function Index() {
  const { t } = useTranslation();

  const copyPromoCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
  };

  return (
    <>
      <SEO
        title="Affiliate Program - Earn Up to 50% Revenue Share"
        description="Join 1win Partners affiliate program and start earning with leading gambling & betting platform. Get up to 50% RevShare and CPA up to $200. Over 30M users worldwide."
        keywords="1win partners, affiliate program, iGaming, casino affiliate, sports betting affiliate, revenue share, CPA, online gambling, make money online"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">OFFER #1</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title')}<br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              RevShare from 50% | CPA up to $200
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 h-14">
                <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')} <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 h-14 border-primary/50 hover:bg-primary/10">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  {t('hero.affiliate')}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border">
              <div>
                <span className="text-sm text-muted-foreground block mb-1">{t('hero.promo')}</span>
                <code className="text-2xl font-bold text-primary">{PROMO_CODE}</code>
              </div>
              <Button onClick={copyPromoCode} variant="outline" size="sm">
                Copy Code
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/20">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold mb-2">30,000,000+</h3>
              <p className="text-muted-foreground">{t('hero.users')}</p>
            </Card>
            <Card className="p-8 text-center bg-card/50 backdrop-blur border-accent/20">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-4xl font-bold mb-2">100,000+</h3>
              <p className="text-muted-foreground">{t('hero.affiliates')}</p>
            </Card>
            <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/20">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold mb-2">$1,000,000+</h3>
              <p className="text-muted-foreground">{t('hero.payout')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Advanced ecosystem for profit maximization
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart, title: t('features.realtime'), desc: t('features.realtimeDesc') },
              { icon: TrendingUp, title: t('features.highConv'), desc: t('features.highConvDesc') },
              { icon: DollarSign, title: t('features.payments'), desc: t('features.paymentsDesc') },
              { icon: Headphones, title: t('features.support'), desc: t('features.supportDesc') },
              { icon: Globe, title: t('features.global'), desc: t('features.globalDesc') },
              { icon: Users, title: t('features.marketing'), desc: t('features.marketingDesc') },
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: `url(${featuresImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('cta.ready')}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t('cta.join')}</p>
          <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-12 h-14">
            <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer">
              {t('cta.button')} <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
