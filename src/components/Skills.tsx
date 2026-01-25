import { Smartphone, TestTube, Settings, Wrench } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export const Skills = () => {
  const { t, isRTL } = useLanguage();

  const skillGroups = [
    {
      titleKey: 'skills.flutter',
      icon: Smartphone,
      skills: ['Flutter', 'Dart', 'Bloc', 'Provider', 'Firebase', 'REST APIs', 'Local Storage', 'MVVM/Clean Architecture'],
    },
    {
      titleKey: 'skills.qa',
      icon: TestTube,
      skills: ['STLC/SDLC', 'Functional Testing', 'Regression Testing', 'Exploratory Testing', 'Test Cases', 'Bug Reporting'],
    },
    {
      titleKey: 'skills.automation',
      icon: Settings,
      skills: ['Selenium (Java)', 'UI Flow Testing', 'Test Automation'],
    },
    {
      titleKey: 'skills.tools',
      icon: Wrench,
      skills: ['Git/GitHub', 'Postman', 'DevTools', 'Notion/Trello', 'Figma'],
    },
  ];

  return (
    <section className="section-padding" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="section-container">
        <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
          {t('skills.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.titleKey}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <group.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{t(group.titleKey)}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
