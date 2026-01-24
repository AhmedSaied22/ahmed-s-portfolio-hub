import { useLanguage } from '@/hooks/useLanguage';

export const About = () => {
  const { t, language, isRTL } = useLanguage();

  // Content with highlighted parts
  const contentEn = (
    <>
      I'm a <span className="text-foreground font-medium">Flutter Developer</span> with experience building production-ready mobile applications. 
      I specialize in clean architecture, state management (Bloc, Provider), REST API integration, and Firebase services. 
      Beyond development, I bring <span className="text-foreground font-medium">1 year of Software QA experience</span> in structured testing—including 
      functional, regression, and exploratory testing. I create detailed test cases, comprehensive bug reports, and ensure 
      quality through API testing with Postman and automation using Selenium (Java). My dual background helps me deliver 
      both high-quality code and thoroughly tested applications.
    </>
  );

  const contentAr = (
    <>
      أنا <span className="text-foreground font-medium">مطور Flutter</span> ذو خبرة في بناء تطبيقات الهاتف الجاهزة للإنتاج. 
      أتخصص في الهندسة النظيفة، وإدارة الحالة (Bloc, Provider)، وتكامل REST API، وخدمات Firebase. 
      بالإضافة إلى التطوير، لدي <span className="text-foreground font-medium">سنة من خبرة ضمان جودة البرمجيات</span> في الاختبار المنظم—بما في ذلك 
      الاختبار الوظيفي، واختبار الانحدار، والاختبار الاستكشافي. أقوم بإنشاء حالات اختبار مفصلة، وتقارير أخطاء شاملة، وضمان 
      الجودة من خلال اختبار API باستخدام Postman والأتمتة باستخدام Selenium (Java). خلفيتي المزدوجة تساعدني على تقديم 
      كود عالي الجودة وتطبيقات مختبرة بدقة.
    </>
  );

  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className={`text-muted-foreground leading-relaxed text-lg ${isRTL ? 'text-right' : ''}`}>
            {language === 'ar' ? contentAr : contentEn}
          </p>
        </div>
      </div>
    </section>
  );
};
