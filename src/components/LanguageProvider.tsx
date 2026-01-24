import { ReactNode } from 'react';
import { LanguageContext, useLanguageProvider } from '@/hooks/useLanguage';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const languageValue = useLanguageProvider();
  
  return (
    <LanguageContext.Provider value={languageValue}>
      {children}
    </LanguageContext.Provider>
  );
};
