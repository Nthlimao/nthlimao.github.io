export type Language = "pt" | "en";

export type TranslationRecord = Record<string, string>;

export interface LanguageTranslations {
  pt: TranslationRecord;
  en: TranslationRecord;
}
