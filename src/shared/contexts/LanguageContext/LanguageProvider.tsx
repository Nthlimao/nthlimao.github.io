import React, { useContext, useState, ReactNode, useEffect } from "react";
import { Language } from "./types";
import translations from "./translations";
import { LanguageContext } from "./LanguageContext";


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    // Only run on client
    const stored = typeof window !== "undefined" ? (localStorage.getItem("language") as Language) : null;
    if (stored && (stored === "pt" || stored === "en")) {
      setLanguage(stored);
    } else {
      const browserLang = typeof window !== "undefined" ? navigator.language.toLowerCase() : "pt";
      if (browserLang.startsWith("en")) setLanguage("en");
      else setLanguage("pt");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
