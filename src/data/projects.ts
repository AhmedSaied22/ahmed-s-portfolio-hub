export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  techTags: string[];
  images: string[];
  googlePlayUrl?: string;
  appStoreUrl?: string;
  caseStudy: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'sport-sphere',
    title: 'Sport Sphere',
    description: 'A comprehensive sports education app for PE students with downloadable resources, grade tracking, and interactive learning materials.',
    highlights: [
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
    techTags: ['Flutter', 'Firebase', 'AdMob', 'REST API', 'PDF Viewer'],
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.assuit.pe_student',
    caseStudy: {
      challenge: 'PE students needed a centralized platform to access educational materials, track their academic progress, and download resources for offline study.',
      solution: 'Built a feature-rich Flutter app with Firebase backend, implementing PDF viewing, offline storage, grade tracking, and monetization through AdMob.',
      results: [
        'Improved student access to educational materials',
        'Streamlined grade tracking and progress monitoring',
        'Successful monetization through integrated ads'
      ]
    }
  },
  {
    id: 'askalwashm',
    title: 'AskAlwashm',
    description: 'A marketplace and social board platform enabling users to post ads, customize their experience, and handle secure payments.',
    highlights: [
      'Marketplace + social board',
      'Posting ads functionality',
      'UI customization options',
      'Secure payment integration',
      'Provider state management',
      'Firebase backend'
    ],
    techTags: ['Flutter', 'Provider', 'Firebase', 'Payments', 'Marketplace'],
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.developers.askalwashm',
    appStoreUrl: 'https://apps.apple.com/sa/app/%D8%A7%D8%B3%D8%A3%D9%84-%D8%A7%D9%84%D9%88%D8%B4%D9%85/id1669547503',
    caseStudy: {
      challenge: 'Users needed a unified platform combining marketplace functionality with social features for community engagement.',
      solution: 'Developed a cross-platform app using Flutter with Provider for state management, Firebase for backend services, and integrated payment solutions.',
      results: [
        'Successful launch on both iOS and Android',
        'Active user community with regular engagement',
        'Secure and reliable payment processing'
      ]
    }
  },
  {
    id: 'ekram',
    title: 'Ekram',
    description: 'A charity locator app helping users find and connect with charitable organizations through advanced search and mapping features.',
    highlights: [
      'Local database implementation',
      'Advanced search functionality',
      'Interactive mapping',
      'Bloc state management',
      'REST API integration'
    ],
    techTags: ['Flutter', 'Bloc', 'Maps', 'Local DB', 'REST API'],
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.charitylocator.ikram',
    appStoreUrl: 'https://apps.apple.com/sa/app/ekram-%D8%A7%D9%83%D8%B1%D8%A7%D9%85/id6738956464',
    caseStudy: {
      challenge: 'Connecting people with charitable organizations was difficult due to lack of centralized information and discovery tools.',
      solution: 'Created an intuitive app with mapping integration, local database for offline access, and powerful search filters using Bloc architecture.',
      results: [
        'Enhanced discoverability of charity organizations',
        'Improved user experience with offline capabilities',
        'Successful cross-platform deployment'
      ]
    }
  },
  {
    id: 'car-story',
    title: 'Car Story',
    description: 'A full-featured e-commerce platform for automotive products with authentication, cart management, and secure payment processing.',
    highlights: [
      'E-commerce functionality',
      'User authentication',
      'Shopping cart system',
      'Favorites/wishlist',
      'Biometric authentication',
      'Multi-language support',
      'Payment integration',
      'REST API integration'
    ],
    techTags: ['Flutter', 'E-commerce', 'Biometrics', 'Localization', 'Payments'],
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.echo.carstor',
    appStoreUrl: 'https://apps.apple.com/sa/app/car-story/id6737169387',
    caseStudy: {
      challenge: 'The automotive e-commerce space needed a mobile-first solution with robust security and international support.',
      solution: 'Built a comprehensive e-commerce app with biometric security, multi-language support, and seamless payment integration.',
      results: [
        'Secure shopping experience with biometric authentication',
        'International reach through localization',
        'Streamlined checkout and payment process'
      ]
    }
  }
];
