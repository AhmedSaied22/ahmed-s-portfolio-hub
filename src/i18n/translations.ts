export type Language = 'en' | 'ar';

export const translations = {
  // Navbar
  nav: {
    home: { en: 'Home', ar: 'الرئيسية' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    services: { en: 'Services', ar: 'الخدمات' },
    about: { en: 'About', ar: 'نبذة عني' },
    contact: { en: 'Contact', ar: 'تواصل' },
  },

  // Hero
  hero: {
    greeting: { en: 'Hello, I\'m', ar: 'مرحباً، أنا' },
    name: { en: 'Ahmed Saied', ar: 'أحمد سعيد' },
    title: { en: 'Software Developer (Mobile Applications) | Software QA (Manual + Selenium Automation)', ar: 'مطور برمجيات (تطبيقات الهاتف) | ضمان جودة البرمجيات (يدوي + أتمتة Selenium)' },
    intro: {
      en: 'I\'m a Flutter mobile developer with 2+ years of experience building production-ready apps. I also have 1 year of hands-on Software QA experience in manual testing and Selenium automation, focusing on stable releases and great user experience.',
      ar: 'أنا مطور تطبيقات موبايل باستخدام Flutter بخبرة تزيد عن سنتين في بناء تطبيقات جاهزة للإنتاج. بالإضافة إلى خبرة سنة في مجال ضمان الجودة (Software QA) تشمل الاختبار اليدوي وأتمتة الاختبارات باستخدام Selenium، مع التركيز على الاستقرار وتجربة مستخدم ممتازة.'
    },
    qaMindset: { en: 'QA Mindset', ar: 'عقلية الجودة' },
    chatWhatsApp: { en: 'Chat on WhatsApp', ar: 'تواصل عبر واتساب' },
    flutterCV: { en: 'Flutter CV', ar: 'سيرة Flutter' },
    testingCV: { en: 'Testing CV', ar: 'سيرة الاختبار' },
    viewProjects: { en: 'View Projects', ar: 'عرض المشاريع' },
    tagline: { en: 'Software Tester with Mobile Development Experience.', ar: 'مطور برمجيات بخبرة في تطوير تطبيقات الهاتف.' },
  },

  // About
  about: {
    title: { en: 'About Me', ar: 'نبذة عني' },
    content: {
      en: 'I\'m a Flutter Developer with experience building production-ready mobile applications. I specialize in clean architecture, state management (Bloc, Provider), REST API integration, and Firebase services. Beyond development, I bring 1 year of Software QA experience in structured testing—including functional, regression, and exploratory testing. I create detailed test cases, comprehensive bug reports, and ensure quality through API testing with Postman and automation using Selenium (Java). My dual background helps me deliver both high-quality code and thoroughly tested applications.',
      ar: 'أنا مطور Flutter ذو خبرة في بناء تطبيقات الهاتف الجاهزة للإنتاج. أتخصص في الهندسة النظيفة، وإدارة الحالة (Bloc, Provider)، وتكامل REST API، وخدمات Firebase. بالإضافة إلى التطوير، لدي سنة من الخبرة في ضمان جودة البرمجيات في الاختبار المنظم—بما في ذلك الاختبار الوظيفي، واختبار الانحدار، والاختبار الاستكشافي. أقوم بإنشاء حالات اختبار مفصلة، وتقارير أخطاء شاملة، وضمان الجودة من خلال اختبار API باستخدام Postman والأتمتة باستخدام Selenium (Java). خلفيتي المزدوجة تساعدني على تقديم كود عالي الجودة وتطبيقات مختبرة بدقة.'
    },
    flutterDeveloper: { en: 'Software Developer (Mobile Applications)', ar: 'مطور برمجيات (تطبيقات الهاتف)' },
    qaExperience: { en: '1 year of Software QA experience', ar: 'سنة من خبرة ضمان جودة البرمجيات' },
  },

  // Skills
  skills: {
    title: { en: 'Skills & Expertise', ar: 'المهارات والخبرات' },
    flutter: { en: 'Flutter', ar: 'Flutter' },
    qa: { en: 'QA', ar: 'ضمان الجودة' },
    automation: { en: 'Automation', ar: 'الأتمتة' },
    tools: { en: 'Tools', ar: 'الأدوات' },
  },

  // QA Experience
  qaExperience: {
    title: { en: 'Software QA', ar: 'ضمان جودة البرمجيات' },
    experience: { en: '1 Year Experience', ar: 'سنة خبرة' },
    points: {
      en: [
        '1 year hands-on QA focused on manual testing (functional, regression, exploratory)',
        'Strong bug reporting: steps, expected vs actual, severity/priority, evidence',
        'Created and maintained test cases and improved coverage',
        'API testing with Postman (status codes, request/response validation)',
        'Automation testing using Selenium (Java) for UI flows',
      ],
      ar: [
        'سنة من الخبرة العملية في ضمان الجودة مع التركيز على الاختبار اليدوي (وظيفي، انحدار، استكشافي)',
        'تقارير أخطاء قوية: الخطوات، المتوقع مقابل الفعلي، الخطورة/الأولوية، الأدلة',
        'إنشاء وصيانة حالات الاختبار وتحسين التغطية',
        'اختبار API باستخدام Postman (رموز الحالة، التحقق من الطلب/الاستجابة)',
        'اختبار الأتمتة باستخدام Selenium (Java) لتدفقات واجهة المستخدم',
      ],
    },
    growthPlan: { en: 'Growth Plan', ar: 'خطة النمو' },
    growthText: {
      en: 'I\'m actively developing advanced automation skills and planning to grow into performance testing (e.g., JMeter) and modern automation frameworks.',
      ar: 'أقوم بتطوير مهارات الأتمتة المتقدمة بنشاط وأخطط للنمو في اختبار الأداء (مثل JMeter) وأطر الأتمتة الحديثة.'
    },
  },


  // Flutter Experience
  flutterExperience: {
    title: { en: 'Flutter Experience', ar: 'خبرة Flutter' },
    summary: {
      en: '2+ years building mobile apps with Flutter across multiple domains, with strong architecture and performance focus.',
      ar: 'خبرة +2 سنوات في تطوير تطبيقات موبايل باستخدام Flutter في مجالات متعددة مع تركيز على المعمارية والأداء.'
    },
    groups: {
      core: {
        title: { en: 'Mobile / Flutter Core', ar: 'أساسيات Flutter / الموبايل' },
        skills: { en: ['Flutter', 'Dart', 'State Management (BLoC, Cubit, Provider)'], ar: ['Flutter', 'Dart', 'State Management (BLoC, Cubit, Provider)'] }
      },
      backend: {
        title: { en: 'Backend & Integrations', ar: 'الخلفية والتكامل' },
        skills: { en: ['REST APIs, Dio, http', 'Firebase, Supabase', 'Push Notifications', 'Maps, Location'], ar: ['REST APIs, Dio, http', 'Firebase, Supabase', 'Push Notifications', 'Maps, Location'] }
      },
      database: {
        title: { en: 'Databases & Storage', ar: 'قواعد البيانات والتخزين' },
        skills: { en: ['SQL, NoSQL', 'PostgreSQL, MongoDB', 'Local Storage, Secure Storage'], ar: ['SQL, NoSQL', 'PostgreSQL, MongoDB', 'Local Storage, Secure Storage'] }
      },
      payments: {
        title: { en: 'Payments', ar: 'المدفوعات' },
        skills: { en: ['Stripe, Payment Integration', 'Riyad Pay', 'Edfa Pay'], ar: ['Stripe, Payment Integration', 'Riyad Pay', 'Edfa Pay'] }
      },
      architecture: {
        title: { en: 'Architecture & Quality', ar: 'المعمارية والجودة' },
        skills: { en: ['MVVM, MVC, Clean Architecture', 'SOLID, OOP', 'UI/UX, Files handling'], ar: ['MVVM, MVC, Clean Architecture', 'SOLID, OOP', 'UI/UX, Files handling'] }
      }
    }
  },

  // Services
  services: {
    title: { en: 'Services', ar: 'الخدمات' },
    subtitle: { en: 'What I can help you with', ar: 'كيف يمكنني مساعدتك' },
    flutterDev: {
      title: { en: 'Flutter App Development', ar: 'تطوير تطبيقات Flutter' },
      description: { en: 'Full-cycle mobile app development with clean architecture.', ar: 'تطوير تطبيقات الهاتف بدورة كاملة مع الهندسة النظيفة.' },
      features: {
        en: ['Clean architecture patterns', 'Responsive & adaptive UI', 'Firebase/API integration', 'Maintainable, scalable code'],
        ar: ['أنماط الهندسة النظيفة', 'واجهة مستخدم متجاوبة ومتكيفة', 'تكامل Firebase/API', 'كود قابل للصيانة والتوسع'],
      },
    },
    manualQA: {
      title: { en: 'Manual QA Testing', ar: 'اختبار ضمان الجودة اليدوي' },
      description: { en: 'Comprehensive testing to ensure quality releases.', ar: 'اختبار شامل لضمان إصدارات عالية الجودة.' },
      features: {
        en: ['Test case creation & execution', 'Exploratory & regression testing', 'Detailed bug reports', 'QA checklist & documentation'],
        ar: ['إنشاء وتنفيذ حالات الاختبار', 'الاختبار الاستكشافي والانحدار', 'تقارير أخطاء مفصلة', 'قائمة فحص وتوثيق ضمان الجودة'],
      },
    },
    automationAPI: {
      title: { en: 'Automation + API Testing', ar: 'اختبار الأتمتة + API' },
      description: { en: 'Efficient automated testing for faster releases.', ar: 'اختبار آلي فعال لإصدارات أسرع.' },
      features: {
        en: ['Selenium automation scripts', 'Postman API testing', 'UI flow automation', 'Clear test documentation'],
        ar: ['سكربتات أتمتة Selenium', 'اختبار API باستخدام Postman', 'أتمتة تدفقات واجهة المستخدم', 'توثيق اختبار واضح'],
      },
    },
  },

  // Projects
  projects: {
    title: { en: 'Featured Projects', ar: 'المشاريع المميزة' },
    subtitle: { en: 'Selected work across production, internal, and upcoming releases', ar: 'مختارات من أعمال الإنتاج والتطبيقات الداخلية والإصدارات القادمة' },
    googlePlay: { en: 'Google Play', ar: 'Google Play' },
    appStore: { en: 'App Store', ar: 'App Store' },
    github: { en: 'GitHub', ar: 'GitHub' },
    caseStudy: { en: 'Case Study', ar: 'دراسة الحالة' },
    internalNote: { en: 'Internal company app (not publicly available)', ar: 'تطبيق داخلي للشركة (غير متاح للعامة)' },
    comingSoonNote: { en: 'Coming soon', ar: 'قريباً' },
    filters: {
      featured: { en: 'Featured', ar: 'مميزة' },
      practice: { en: 'Practice', ar: 'تدريب' },
      all: { en: 'All', ar: 'الكل' },
    },
    problem: { en: 'Problem', ar: 'المشكلة' },
    myRole: { en: 'My Role', ar: 'دوري' },
    keyFeatures: { en: 'Key Features', ar: 'الميزات الرئيسية' },
    techStack: { en: 'Tech Stack', ar: 'التقنيات المستخدمة' },
    results: { en: 'Results', ar: 'النتائج' },
    challenge: { en: 'Challenge', ar: 'التحدي' },
    solution: { en: 'Solution', ar: 'الحل' },
    qaTooltip: { en: 'QA mindset: tested flows, clean releases', ar: 'عقلية الجودة: تدفقات مختبرة، إصدارات نظيفة' },
  },

  // Contact
  contact: {
    title: { en: 'Get in Touch', ar: 'تواصل معي' },
    subtitle: { en: 'Open to Flutter and QA opportunities', ar: 'منفتح لفرص Flutter وضمان الجودة' },
    letsConnect: { en: 'Let\'s Connect', ar: 'دعنا نتواصل' },
    sendMessage: { en: 'Send a Message', ar: 'أرسل رسالة' },
    preferWhatsApp: { en: 'Prefer WhatsApp? Chat now', ar: 'تفضل واتساب؟ تواصل الآن' },
    chatNow: { en: 'Chat on WhatsApp', ar: 'تواصل عبر واتساب' },
    name: { en: 'Your Name', ar: 'اسمك' },
    email: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
    message: { en: 'Your Message', ar: 'رسالتك' },
    send: { en: 'Send Message', ar: 'إرسال الرسالة' },
    sending: { en: 'Sending...', ar: 'جاري الإرسال...' },
    success: { en: 'Message sent!', ar: 'تم إرسال الرسالة!' },
    successDesc: { en: 'Thank you for reaching out. I\'ll get back to you soon.', ar: 'شكراً للتواصل. سأرد عليك قريباً.' },
    error: { en: 'Failed to send', ar: 'فشل الإرسال' },
    errorDesc: { en: 'Something went wrong. Please try again or contact me directly.', ar: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معي مباشرة.' },
  },

  // Footer
  footer: {
    rights: { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  },

  // Common
  common: {
    whatsapp: { en: 'WhatsApp', ar: 'واتساب' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    linkedin: { en: 'LinkedIn', ar: 'LinkedIn' },
    github: { en: 'GitHub', ar: 'GitHub' },
  },
};

export const getTranslation = (lang: Language, key: string) => {
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value[k] === undefined) return key;
    value = value[k];
  }

  if (typeof value === 'object' && value[lang] !== undefined) {
    return value[lang];
  }

  return key;
};
