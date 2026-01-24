import { useState, useEffect, createContext, useContext } from 'react';
import { Language, translations, getTranslation } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useLanguageProvider = () => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved === 'en' || saved === 'ar') return saved;
    }
    return 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    
    if (isRTL) {
      root.setAttribute('dir', 'rtl');
      root.setAttribute('lang', 'ar');
      root.style.fontFamily = "'Cairo', 'Tajawal', sans-serif";
    } else {
      root.setAttribute('dir', 'ltr');
      root.setAttribute('lang', 'en');
      root.style.fontFamily = "'Inter', system-ui, -apple-system, sans-serif";
    }
    
    localStorage.setItem('language', language);
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return { language, setLanguage, t, isRTL };
};
