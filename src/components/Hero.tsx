import { MessageCircle, Download, Mail, ArrowDown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/hooks/useLanguage';
import { trackButtonClick } from '@/lib/analytics';
import ahmedPhoto from '@/assets/ahmed-photo.png';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/AhmedSaied22', labelKey: 'common.github' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ahmed-saieed/', labelKey: 'common.linkedin' },
  { icon: Mail, href: 'mailto:ahmedsaied2019201@gmail.com', labelKey: 'common.email' },
];

export const Hero = () => {
  const { t, isRTL } = useLanguage();
  const orderedSocialLinks = isRTL ? [...socialLinks].reverse() : socialLinks;

  const handleViewProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container section-padding">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Photo - Left Side */}
          <div className={`order-2 lg:order-1 flex justify-center ${isRTL ? 'lg:justify-end lg:order-2' : 'lg:justify-start'}`}>
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={ahmedPhoto}
                  alt="Ahmed Saied"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className={`order-1 ${isRTL ? 'lg:order-1 text-center lg:text-right' : 'lg:order-2 text-center lg:text-left'}`}>
            <div className="space-y-5">
              {/* Headline */}
              <div className="space-y-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <p className="text-primary font-medium">{t('hero.greeting')}</p>
                <div
                  className={`flex items-center gap-3 justify-center flex-wrap ${isRTL ? 'lg:justify-end flex-row-reverse' : 'lg:justify-start'
                    }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                    {t('hero.name')}
                  </h1>
                  {/* QA Mindset Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">{t('hero.qaMindset')}</span>
                    <div className="w-8 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-0 animate-quality-fill" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-2">
                  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                    {t('hero.tagline1')}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground font-medium">
                    {t('hero.title')}
                  </p>
                </div>
              </div>

              {/* Intro */}
              <p className={`text-muted-foreground leading-relaxed max-w-lg opacity-0 animate-fade-in ${isRTL ? 'mx-auto lg:mr-0 lg:ml-auto' : 'mx-auto lg:mx-0'}`} style={{ animationDelay: '0.2s' }}>
                {t('hero.intro')}
              </p>

              {/* Primary CTAs */}
              <div
                className={`flex flex-wrap gap-3 opacity-0 animate-fade-in ${isRTL ? 'justify-center lg:justify-end flex-row-reverse' : 'justify-center lg:justify-start'
                  }`}
                style={{ animationDelay: '0.3s' }}
              >
                {/* PRIMARY: Testing CV */}
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover gap-2"
                >
                  <a
                    href="https://drive.google.com/file/d/1lGMzvJUVE5tvobgXgSfecEuDUrCcoLcX/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackButtonClick('testing_cv', 'google_drive')}
                  >
                    <Download className="w-4 h-4" />
                    {t('hero.testingCV')}
                  </a>
                </Button>
                {/* SECONDARY: WhatsApp */}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl gap-2"
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=201229649437&text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackButtonClick('whatsapp_hero', 'whatsapp')}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('hero.chatWhatsApp')}
                  </a>
                </Button>
                {/* TERTIARY: Flutter CV */}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl gap-2 text-muted-foreground hover:text-foreground"
                >
                  <a
                    href="https://drive.google.com/file/d/1Cquuw4xtNJfcQtJQTZle2eNjSGuNdC3O/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackButtonClick('flutter_cv', 'google_drive')}
                  >
                    <Download className="w-4 h-4" />
                    {t('hero.flutterCV')}
                  </a>
                </Button>
              </div>

              {/* Secondary CTA + Social Links in same row */}
              <div
                className={`flex items-center gap-4 opacity-0 animate-fade-in ${isRTL ? 'justify-center lg:justify-end flex-row-reverse' : 'justify-center lg:justify-start'
                  }`}
                style={{ animationDelay: '0.4s' }}
              >
                <button
                  onClick={handleViewProjects}
                  className={`inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'flex-row-reverse' : ''
                    }`}
                >
                  <ArrowDown className="w-5 h-5" />
                  <span className="text-sm font-medium">{t('hero.viewProjects')}</span>
                </button>

                <div className="h-5 w-px bg-border" />

                {/* Social Links */}
                <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {orderedSocialLinks.map((social) => (
                    <Tooltip key={social.labelKey}>
                      <TooltipTrigger asChild>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          aria-label={t(social.labelKey)}
                        >
                          <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t(social.labelKey)}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
