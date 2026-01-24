import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const socialLinks = [
  { icon: Github, href: 'https://github.com/AhmedSaied22', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmed-saieed/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ahmedsaied2019201@gmail.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://api.whatsapp.com/send/?phone=201229649437&text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20your%20services', label: 'WhatsApp' },
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
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
