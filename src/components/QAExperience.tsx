import { CheckCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSectionTracker } from '@/hooks/useSectionTracker';
import { useSectionTimer } from '@/hooks/useSectionTimer';

export const QAExperience = () => {
  const { t, language, isRTL } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  useSectionTracker('qa-experience');
  useSectionTimer('qa-experience');

  const experiencePoints = translations.qaExperience.points[language];

  return (
    <section ref={ref} id="qa-experience" className="section-padding bg-card" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('qaExperience.title')}
          </h2>
          <p className={`${isRTL ? 'text-right' : 'text-center'} text-primary font-medium mb-8`}>
            {t('qaExperience.experience')}
          </p>

          <div className="space-y-4 mb-8">
            {experiencePoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${isVisible ? 'opacity-100 animate-slide-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('qaExperience.growthPlan')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('qaExperience.growthText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
