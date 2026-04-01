
import { Smartphone, Server, Database, CreditCard, Layers } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSectionTracker } from '@/hooks/useSectionTracker';
import { useSectionTimer } from '@/hooks/useSectionTimer';

export const FlutterExperience = () => {
    const { t, language, isRTL } = useLanguage();
    const { ref, isVisible } = useScrollReveal();
    useSectionTracker('flutter-experience');
    useSectionTimer('flutter-experience');

    const groups = translations.flutterExperience.groups;

    const experienceGroups = [
        {
            key: 'core',
            icon: Smartphone,
            data: groups.core
        },
        {
            key: 'backend',
            icon: Server,
            data: groups.backend
        },
        {
            key: 'database',
            icon: Database,
            data: groups.database
        },
        {
            key: 'payments',
            icon: CreditCard,
            data: groups.payments
        },
        {
            key: 'architecture',
            icon: Layers,
            data: groups.architecture
        }
    ];

    return (
        <section ref={ref} id="flutter-experience" className="section-padding bg-card/50" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <div className={`mb-10 ${isRTL ? 'text-right' : 'text-center'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {t('flutterExperience.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t('flutterExperience.summary')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {experienceGroups.map((group, index) => {
                            // @ts-ignore - Dynamic access to translations
                            const groupData = group.data;
                            // @ts-ignore
                            const title = groupData.title[language];
                            // @ts-ignore
                            const skills = groupData.skills[language];

                            return (
                                <div
                                    key={group.key}
                                    className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${index === experienceGroups.length - 1 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''
                                        } ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
                                        }`}
                                    style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <group.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-foreground">{title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill: string) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
