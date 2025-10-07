import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import logo from '@/assets/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const JOIN_LINK = 'https://lkxw.cc/a0b0';

export function Navigation() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="1win Partners Logo" className="h-10 w-10" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            1win Partners
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.features')}
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.products')}
          </Link>
          <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.faq')}
          </Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.gallery')}
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.blog')}
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.contacts')}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className="cursor-pointer"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer">
              {t('hero.cta')}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
