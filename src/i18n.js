import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

if (typeof window !== 'undefined') {
  i18n
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // learn more: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: 'en',
      debug: true,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },

      ns: [],
      // defaultNS: ['CommonText'],
      backend: {
        loadPath: '/static/locales/{{lng}}/{{ns}}.json',
      },
    });
}

export default i18n;
