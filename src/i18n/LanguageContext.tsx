import { createContext, useContext, useState, ReactNode } from "react";
import { Language, translations, TranslationKey } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  tArray: (key: TranslationKey) => string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKey): string => {
    const entry = translations[key];
    if (!entry) return key;
    const val = (entry as Record<Language, string | string[]>)[language];
    return typeof val === "string" ? val : key;
  };

  const tArray = (key: TranslationKey): string[] => {
    const entry = translations[key];
    if (!entry) return [];
    const val = (entry as Record<Language, string | string[]>)[language];
    return Array.isArray(val) ? val : [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
