import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';
import es from './locales/es.json';
import ar from './locales/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      tr: { translation: tr },
      es: { translation: es },
      ar: { translation: ar },
    },
    lng: 'en', // Standardsprache
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
