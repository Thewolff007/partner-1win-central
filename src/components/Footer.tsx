import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo.png';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <span className="text-lg font-bold">1win Partners</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">{t('nav.features')}</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">{t('nav.faq')}</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">{t('nav.gallery')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('nav.blog')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Latest Posts</Link></li>
              <li><Link to="/blog/category/casino" className="hover:text-primary transition-colors">Casino</Link></li>
              <li><Link to="/blog/category/betting" className="hover:text-primary transition-colors">Sports Betting</Link></li>
              <li><Link to="/blog/category/tips" className="hover:text-primary transition-colors">Tips & Strategies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contacts" className="hover:text-primary transition-colors">{t('nav.contacts')}</Link></li>
              <li>
                <a 
                  href="https://t.me/aviatormanager1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Telegram Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t('footer.responsible')}</p>
          <p className="mt-2">© {currentYear} 1win Partners. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
