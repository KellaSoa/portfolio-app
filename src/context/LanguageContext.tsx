import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: string;
  switchLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language); // Use i18n's current language

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change i18n language
    setLanguage(lang); // Update context state
  };

  // Keep context in sync with i18n
  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
