import { Smartphone, ClipboardCheck, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSectionTracker } from '@/hooks/useSectionTracker';
import { useSectionTimer } from '@/hooks/useSectionTimer';

export const Services = () => {
  const { t, language, isRTL } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  useSectionTracker('services');
  useSectionTimer('services');

  const services = [
    {
      icon: ClipboardCheck,
      titleKey: 'services.manualQA.title',
      descriptionKey: 'services.manualQA.description',
      features: translations.services.manualQA.features[language],
    },
    {
      icon: Zap,
      titleKey: 'services.automationAPI.title',
      descriptionKey: 'services.automationAPI.description',
      features: translations.services.automationAPI.features[language],
    },
    {
      icon: Smartphone,
      titleKey: 'services.flutterDev.title',
      descriptionKey: 'services.flutterDev.description',
      features: translations.services.flutterDev.features[language],
    },
  ];

  return (
    <section ref={ref} id="services" className="relative section-padding" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="section-container">
        <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isRTL ? 'text-right' : 'text-center'}`}>
          {t('services.title')}
        </h2>
        <p className={`text-muted-foreground mb-12 max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
          {t('services.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t(service.descriptionKey)}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
