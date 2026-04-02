import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/AhmedSaied22', labelKey: 'common.github' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ahmed-saieed/', labelKey: 'common.linkedin' },
  { icon: Mail, href: 'mailto:ahmedsaied2019201@gmail.com', labelKey: 'common.email' },
  { icon: MessageCircle, href: 'https://api.whatsapp.com/send/?phone=201229649437&text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20your%20services', labelKey: 'common.whatsapp' },
];

export const Footer = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="section-container">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t('hero.name')}. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Tooltip key={link.labelKey}>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                    aria-label={t(link.labelKey)}
                  >
                    <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t(link.labelKey)}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
