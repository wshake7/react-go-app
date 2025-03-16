import i18n, { t } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';
// import en from './en.json';
import zh from './zh.json'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      // en: { translation: en },
      zh: { translation: zh },
    },
    fallbackLng: 'zh',
    preload: ['en', 'zh'],
    interpolation: {
      escapeValue: false,
    },
  });

export const gt = (key: string) => {
  return t(key, { key })
}

export default i18n;
