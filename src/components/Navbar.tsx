import { useState } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelKey: 'nav.home' },
    { href: '#projects', labelKey: 'nav.projects' },
    { href: '#services', labelKey: 'nav.services' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const orderedNavLinks = isRTL ? [...navLinks].reverse() : navLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className={`flex items-center justify-between h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            {t('hero.name')}
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {orderedNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-sm font-medium text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'text-right' : ''}`}
              >
                {t(link.labelKey)}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className={`flex md:hidden items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className={`flex flex-col gap-2 ${isRTL ? 'items-end' : ''}`}>
              {orderedNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors ${isRTL ? 'text-right' : ''}`}
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
