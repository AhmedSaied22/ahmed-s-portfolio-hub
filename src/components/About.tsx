import { useLanguage } from '@/hooks/useLanguage';
import { useSectionTracker } from '@/hooks/useSectionTracker';
import { useSectionTimer } from '@/hooks/useSectionTimer';

export const About = () => {
  const { t, isRTL } = useLanguage();

  useSectionTracker('about');
  useSectionTimer('about');

  return (
    <section id="about" className="section-padding bg-card" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="section-container">
        <div className={`max-w-3xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {t('about.content')}
          </p>
        </div>
      </div>
    </section>
  );
};
