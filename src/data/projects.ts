export interface Project {
  id: string;
  order?: number;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  highlights: { en: string[]; ar: string[] };
  techTags: string[];
  images: string[];
  category: 'featured' | 'practice';
  badge?: { en: string; ar: string };
  storeStatus?: 'internal' | 'comingSoon';
  googlePlayUrl?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  caseStudy: {
    problem: { en: string; ar: string };
    role: { en: string; ar: string };
    challenge: { en: string; ar: string };
    solution: { en: string; ar: string };
    results: { en: string[]; ar: string[] };
  };
}

export const projects: Project[] = [
  {
    id: 'sport-sphere',
    title: {
      en: 'Sport Sphere',
      ar: 'سبورت سفير'
    },
    description: {
      en: 'A comprehensive sports education app for PE students with downloadable resources, grade tracking, and interactive learning materials.',
      ar: 'تطبيق تعليمي رياضي شامل لطلاب التربية البدنية مع موارد قابلة للتنزيل، وتتبع الدرجات، ومواد تعليمية تفاعلية.'
    },
    highlights: {
      en: [
        'Downloads (books/exams)',
        'Grade tracking',
        'Animations & transitions',
        'AdMob integration',
        'Search functionality',
        'PDF viewer',
        'Internal storage',
        'Firebase backend',
        'REST API integration'
      ],
      ar: [
        'تنزيلات (كتب/امتحانات)',
        'تتبع الدرجات',
        'رسوم متحركة وانتقالات',
        'تكامل AdMob',
        'وظيفة البحث',
        'عارض PDF',
        'التخزين الداخلي',
        'خلفية Firebase',
        'تكامل REST API'
      ]
    },
    techTags: ['Flutter', 'Firebase', 'AdMob', 'REST API', 'PDF Viewer'],
    images: [
      '/projects/sport1.jpg',
      '/projects/sport2.jpg'
    ],
    category: 'featured',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.assuit.pe_student',
    // App Store not available for Sport Sphere
    caseStudy: {
      problem: {
        en: 'PE students lacked a centralized platform to access educational materials and track their academic progress.',
        ar: 'افتقر طلاب التربية البدنية إلى منصة مركزية للوصول إلى المواد التعليمية وتتبع تقدمهم الأكاديمي.'
      },
      role: {
        en: 'Full-stack Flutter developer responsible for architecture, UI/UX implementation, and backend integration.',
        ar: 'مطور Flutter متكامل مسؤول عن الهندسة وتنفيذ واجهة المستخدم وتكامل الخلفية.'
      },
      challenge: {
        en: 'PE students needed a centralized platform to access educational materials, track their academic progress, and download resources for offline study.',
        ar: 'احتاج طلاب التربية البدنية إلى منصة مركزية للوصول إلى المواد التعليمية، وتتبع تقدمهم الأكاديمي، وتنزيل الموارد للدراسة دون اتصال.'
      },
      solution: {
        en: 'Built a feature-rich Flutter app with Firebase backend, implementing PDF viewing, offline storage, grade tracking, and monetization through AdMob.',
        ar: 'بناء تطبيق Flutter غني بالميزات مع خلفية Firebase، تنفيذ عرض PDF، التخزين دون اتصال، تتبع الدرجات، وتحقيق الدخل من خلال AdMob.'
      },
      results: {
        en: [
          'Improved student access to educational materials',
          'Streamlined grade tracking and progress monitoring',
          'Successful monetization through integrated ads'
        ],
        ar: [
          'تحسين وصول الطلاب إلى المواد التعليمية',
          'تبسيط تتبع الدرجات ومراقبة التقدم',
          'تحقيق دخل ناجح من خلال الإعلانات المدمجة'
        ]
      }
    }
  },
  {
    id: 'filanto',
    title: {
      en: 'Filanto',
      ar: 'فيلانتو'
    },
    description: {
      en: 'A footwear app managing wholesale, manufacturing, and annual exhibition sales.',
      ar: 'تطبيق للأحذية يدير البيع بالجملة والتصنيع ومبيعات المعارض السنوية.'
    },
    highlights: {
      en: [
        'Multi-user roles',
        'Orders workflow',
        'Payments and reports',
        'PDF orders/receipts',
        'Caching for faster access'
      ],
      ar: [
        'أدوار مستخدمين متعددة',
        'سير عمل الطلبات',
        'المدفوعات والتقارير',
        'طلبات/إيصالات PDF',
        'تخزين مؤقت للوصول السريع'
      ]
    },
    techTags: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Firebase', 'UI/UX', 'Testing/QA'],
    images: [
      '/projects/filanto.png'
    ],
    category: 'featured',
    badge: {
      en: 'Coming Soon',
      ar: 'قريباً'
    },
    storeStatus: 'comingSoon',
    caseStudy: {
      problem: {
        en: 'The business needed a unified system for wholesale orders, manufacturing updates, and annual exhibition sales.',
        ar: 'احتاجت الشركة إلى نظام موحد لطلبات الجملة وتحديثات التصنيع ومبيعات المعارض السنوية.'
      },
      role: {
        en: 'Flutter Developer & Software Tester. Built core app features and performed manual testing, test case design, regression/exploratory testing, API validation, and defect reporting.',
        ar: 'مطور Flutter ومختبر برمجيات. شاركت في تطوير خصائص التطبيق وتنفيذ الاختبارات اليدوية، تصميم حالات الاختبار، اختبارات الانحدار والاستكشاف، التحقق من الـ APIs، وتوثيق العيوب.'
      },

      challenge: {
        en: 'Verifying complex order workflows with multiple user roles and payment/reporting paths.',
        ar: 'التحقق من سير عمل الطلبات المعقد مع أدوار مستخدمين متعددة ومسارات الدفع والتقارير.'
      },
      solution: {
        en: 'Established QA coverage for role-based workflows, PDF outputs, caching behavior, and reporting accuracy.',
        ar: 'تأسيس تغطية ضمان الجودة لتدفقات الأدوار المختلفة، ومخرجات PDF، وسلوك التخزين المؤقت، ودقة التقارير.'
      },
      results: {
        en: [
          'Clear QA reporting for workflows',
          'Validated payments and reporting',
          'Improved confidence before launch'
        ],
        ar: [
          'تقارير ضمان جودة واضحة لتدفقات العمل',
          'التحقق من المدفوعات والتقارير',
          'تحسين الثقة قبل الإطلاق'
        ]
      }
    }
  },
  {
    id: 'askalwashm',
    title: {
      en: 'AskAlwashm',
      ar: 'اسأل الوشم'
    },
    description: {
      en: 'A marketplace and social board platform enabling users to post ads, customize their experience, and handle secure payments.',
      ar: 'منصة سوق ولوحة اجتماعية تمكن المستخدمين من نشر الإعلانات، وتخصيص تجربتهم، والتعامل مع المدفوعات الآمنة.'
    },
    highlights: {
      en: [
        'Marketplace + social board',
        'Posting ads functionality',
        'UI customization options',
        'Secure payment integration',
        'Provider state management',
        'Firebase backend'
      ],
      ar: [
        'سوق + لوحة اجتماعية',
        'وظيفة نشر الإعلانات',
        'خيارات تخصيص الواجهة',
        'تكامل دفع آمن',
        'إدارة الحالة بـ Provider',
        'خلفية Firebase'
      ]
    },
    techTags: ['Flutter', 'Provider', 'Firebase', 'Payments', 'Marketplace'],
    images: [
      '/projects/ask.jpg'
    ],
    category: 'featured',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.developers.askalwashm',
    appStoreUrl: 'https://apps.apple.com/sa/app/%D8%A7%D8%B3%D8%A3%D9%84-%D8%A7%D9%84%D9%88%D8%B4%D9%85/id1669547503',
    caseStudy: {
      problem: {
        en: 'Users needed a unified platform combining marketplace functionality with social features for community engagement.',
        ar: 'احتاج المستخدمون إلى منصة موحدة تجمع بين وظائف السوق والميزات الاجتماعية للتفاعل المجتمعي.'
      },
      role: {
        en: 'Lead Flutter developer handling cross-platform development, state management, and payment integration.',
        ar: 'مطور Flutter رئيسي يتعامل مع التطوير عبر المنصات، وإدارة الحالة، وتكامل الدفع.'
      },
      challenge: {
        en: 'Users needed a unified platform combining marketplace functionality with social features for community engagement.',
        ar: 'احتاج المستخدمون إلى منصة موحدة تجمع بين وظائف السوق والميزات الاجتماعية للتفاعل المجتمعي.'
      },
      solution: {
        en: 'Developed a cross-platform app using Flutter with Provider for state management, Firebase for backend services, and integrated payment solutions.',
        ar: 'تطوير تطبيق عبر المنصات باستخدام Flutter مع Provider لإدارة الحالة، Firebase للخدمات الخلفية، وحلول دفع متكاملة.'
      },
      results: {
        en: [
          'Successful launch on both iOS and Android',
          'Active user community with regular engagement',
          'Secure and reliable payment processing'
        ],
        ar: [
          'إطلاق ناجح على iOS و Android',
          'مجتمع مستخدمين نشط مع تفاعل منتظم',
          'معالجة دفع آمنة وموثوقة'
        ]
      }
    }
  },
  {
    id: 'ekram',
    title: {
      en: 'Ekram',
      ar: 'إكرام'
    },
    description: {
      en: 'A charity locator app helping users find and connect with charitable organizations through advanced search and mapping features.',
      ar: 'تطبيق محدد مواقع الجمعيات الخيرية يساعد المستخدمين في العثور على المنظمات الخيرية والتواصل معها من خلال ميزات البحث المتقدم والخرائط.'
    },
    highlights: {
      en: [
        'Local database implementation',
        'Advanced search functionality',
        'Interactive mapping',
        'Bloc state management',
        'REST API integration'
      ],
      ar: [
        'تنفيذ قاعدة بيانات محلية',
        'وظيفة بحث متقدمة',
        'خرائط تفاعلية',
        'إدارة الحالة بـ Bloc',
        'تكامل REST API'
      ]
    },
    techTags: ['Flutter', 'Bloc', 'Maps', 'Local DB', 'REST API'],
    images: [
      '/projects/ekram.png',
      '/projects/ekram2.png'
    ],
    category: 'featured',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.charitylocator.ikram',
    appStoreUrl: 'https://apps.apple.com/sa/app/ekram-%D8%A7%D9%83%D8%B1%D8%A7%D9%85/id6738956464',
    caseStudy: {
      problem: {
        en: 'Connecting people with charitable organizations was difficult due to lack of centralized information and discovery tools.',
        ar: 'كان ربط الناس بالمنظمات الخيرية صعباً بسبب نقص المعلومات المركزية وأدوات الاكتشاف.'
      },
      role: {
        en: 'Flutter developer focusing on mapping integration, local database architecture, and search optimization.',
        ar: 'مطور Flutter يركز على تكامل الخرائط، وهندسة قاعدة البيانات المحلية، وتحسين البحث.'
      },
      challenge: {
        en: 'Connecting people with charitable organizations was difficult due to lack of centralized information and discovery tools.',
        ar: 'كان ربط الناس بالمنظمات الخيرية صعباً بسبب نقص المعلومات المركزية وأدوات الاكتشاف.'
      },
      solution: {
        en: 'Created an intuitive app with mapping integration, local database for offline access, and powerful search filters using Bloc architecture.',
        ar: 'إنشاء تطبيق بديهي مع تكامل الخرائط، قاعدة بيانات محلية للوصول دون اتصال، وفلاتر بحث قوية باستخدام هندسة Bloc.'
      },
      results: {
        en: [
          'Enhanced discoverability of charity organizations',
          'Improved user experience with offline capabilities',
          'Successful cross-platform deployment'
        ],
        ar: [
          'تعزيز قابلية اكتشاف المنظمات الخيرية',
          'تحسين تجربة المستخدم مع إمكانيات العمل دون اتصال',
          'نشر ناجح عبر المنصات'
        ]
      }
    }
  },
  {
    id: 'car-story',
    title: {
      en: 'Car Story',
      ar: 'كار ستوري'
    },
    description: {
      en: 'A full-featured e-commerce platform for automotive products with authentication, cart management, and secure payment processing.',
      ar: 'منصة تجارة إلكترونية كاملة الميزات لمنتجات السيارات مع المصادقة، وإدارة سلة التسوق، ومعالجة الدفع الآمن.'
    },
    highlights: {
      en: [
        'E-commerce functionality',
        'User authentication',
        'Shopping cart system',
        'Favorites/wishlist',
        'Biometric authentication',
        'Multi-language support',
        'Payment integration',
        'REST API integration'
      ],
      ar: [
        'وظائف التجارة الإلكترونية',
        'مصادقة المستخدم',
        'نظام سلة التسوق',
        'المفضلة/قائمة الرغبات',
        'المصادقة البيومترية',
        'دعم متعدد اللغات',
        'تكامل الدفع',
        'تكامل REST API'
      ]
    },
    techTags: ['Flutter', 'E-commerce', 'Biometrics', 'Localization', 'Payments'],
    images: [
      '/projects/carstory.jpg',
      '/projects/carstory2.png',
      '/projects/car3.jpg'
    ],
    category: 'featured',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.echo.carstor',
    appStoreUrl: 'https://apps.apple.com/sa/app/car-story/id6737169387',
    caseStudy: {
      problem: {
        en: 'The automotive e-commerce space needed a mobile-first solution with robust security and international support.',
        ar: 'احتاج مجال التجارة الإلكترونية للسيارات إلى حل يركز على الهاتف أولاً مع أمان قوي ودعم دولي.'
      },
      role: {
        en: 'Full-stack Flutter developer implementing e-commerce features, biometric security, and localization.',
        ar: 'مطور Flutter متكامل ينفذ ميزات التجارة الإلكترونية، والأمان البيومتري، والتوطين.'
      },
      challenge: {
        en: 'The automotive e-commerce space needed a mobile-first solution with robust security and international support.',
        ar: 'احتاج مجال التجارة الإلكترونية للسيارات إلى حل يركز على الهاتف أولاً مع أمان قوي ودعم دولي.'
      },
      solution: {
        en: 'Built a comprehensive e-commerce app with biometric security, multi-language support, and seamless payment integration.',
        ar: 'بناء تطبيق تجارة إلكترونية شامل مع الأمان البيومتري، ودعم متعدد اللغات، وتكامل دفع سلس.'
      },
      results: {
        en: [
          'Secure shopping experience with biometric authentication',
          'International reach through localization',
          'Streamlined checkout and payment process'
        ],
        ar: [
          'تجربة تسوق آمنة مع المصادقة البيومترية',
          'وصول دولي من خلال التوطين',
          'عملية دفع وإتمام الشراء مبسطة'
        ]
      }
    }
  },
  {
    id: 'mindful-tasks',
    title: {
      en: 'Mindful Tasks',
      ar: 'مهام اليقظة'
    },
    description: {
      en: 'An internal productivity app focused on mindful task planning, focus routines, and wellbeing check-ins for teams.',
      ar: 'تطبيق إنتاجية داخلي يركز على تخطيط المهام بوعي، وروتينات التركيز، وفحوصات الرفاهية للفرق.'
    },
    highlights: {
      en: [
        'Mindful task planning',
        'Focus sessions and reminders',
        'Team check-ins',
        'Weekly reflections',
        'Private internal workflows'
      ],
      ar: [
        'تخطيط المهام بوعي',
        'جلسات تركيز وتذكيرات',
        'متابعة الفريق',
        'تأملات أسبوعية',
        'تدفقات داخلية خاصة'
      ]
    },
    techTags: ['Flutter', 'Wellbeing', 'Productivity', 'Internal Tools'],
    images: [
      '/projects/taskful.jpg'
    ],
    category: 'featured',
    badge: {
      en: 'Private / Internal',
      ar: 'خاص / داخلي'
    },
    storeStatus: 'internal',
    caseStudy: {
      problem: {
        en: 'Teams needed a private, focused space to manage tasks while supporting mindful work habits.',
        ar: 'احتاجت الفرق لمساحة خاصة تركز على إدارة المهام مع دعم عادات العمل الواعي.'
      },
      role: {
        en: 'Collaborated on QA workflows and ensured smooth internal releases for daily use.',
        ar: 'شاركت في تدفقات ضمان الجودة وتأكدت من سلاسة الإصدارات الداخلية للاستخدام اليومي.'
      },
      challenge: {
        en: 'Maintaining privacy requirements while keeping the experience simple and calming for daily use.',
        ar: 'الحفاظ على متطلبات الخصوصية مع إبقاء التجربة بسيطة وهادئة للاستخدام اليومي.'
      },
      solution: {
        en: 'Delivered an internal app with mindful planning, guided focus routines, and weekly reflections tailored to team workflows.',
        ar: 'تقديم تطبيق داخلي يتضمن تخطيطاً واعياً وروتينات تركيز موجهة وتأملات أسبوعية مخصصة لتدفقات الفريق.'
      },
      results: {
        en: [
          'Improved daily focus and consistency',
          'Clearer internal planning cycles',
          'Better team wellbeing visibility'
        ],
        ar: [
          'تحسين التركيز اليومي والاستمرارية',
          'وضوح أكبر في دورات التخطيط الداخلية',
          'رؤية أفضل لرفاهية الفريق'
        ]
      }
    }
  },

  {
    id: 'sale-sphere',
    title: {
      en: 'SaleSphere',
      ar: 'سيل سفير'
    },
    description: {
      en: 'A practice e-commerce app used for training on sales flows, catalog browsing, and checkout experiences.',
      ar: 'تطبيق تجارة إلكترونية تدريبي للتدرب على تدفقات البيع وتصفح الكتالوج وتجربة الدفع.'
    },
    highlights: {
      en: [
        'Product catalog browsing',
        'Cart and checkout practice',
        'Order summary simulations',
        'Training-focused UI flows'
      ],
      ar: [
        'تصفح كتالوج المنتجات',
        'تدريب على السلة والدفع',
        'محاكاة ملخص الطلب',
        'تدفقات واجهة موجهة للتدريب'
      ]
    },
    techTags: ['Flutter', 'Practice', 'E-commerce'],
    images: [
      '/projects/sale.jpg',
      '/projects/sale2.jpg'
    ],
    category: 'practice',
    badge: {
      en: 'Practice / Training',
      ar: 'تدريب / ممارسة'
    },
    caseStudy: {
      problem: {
        en: 'A safe environment was needed to train on end-to-end e-commerce flows without production risk.',
        ar: 'كان هناك حاجة إلى بيئة آمنة للتدرب على تدفقات التجارة الإلكترونية دون مخاطر إنتاجية.'
      },
      role: {
        en: 'Built practice flows and validated UI behavior for learning scenarios.',
        ar: 'بناء تدفقات تدريبية والتحقق من سلوك الواجهة لسيناريوهات التعلم.'
      },
      challenge: {
        en: 'Keeping the experience realistic while remaining simple enough for training sessions.',
        ar: 'الحفاظ على تجربة واقعية مع بساطة كافية لجلسات التدريب.'
      },
      solution: {
        en: 'Designed a streamlined training app that mirrors real shopping journeys with safe, repeatable scenarios.',
        ar: 'تصميم تطبيق تدريبي مبسط يحاكي رحلات التسوق الحقيقية مع سيناريوهات آمنة وقابلة للتكرار.'
      },
      results: {
        en: [
          'Clear training on sales workflows',
          'Improved familiarity with checkout steps',
          'Reusable practice scenarios'
        ],
        ar: [
          'تدريب واضح على تدفقات البيع',
          'تحسين الإلمام بخطوات الدفع',
          'سيناريوهات تدريب قابلة لإعادة الاستخدام'
        ]
      }
    }
  }
];
