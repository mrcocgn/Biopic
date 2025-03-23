import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Sprachdateien
import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';
import es from './locales/es.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';



i18n
  .use(LanguageDetector) // <--- Sprache erkennen
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      tr: { translation: tr },
      es: { translation: es },
      ar: { translation: ar },
      fr: { translation: fr },
      it: { translation: it },
      ru: { translation: ru },
      zh: { translation: zh },
      ja: { translation: ja }
    },
    fallbackLng: 'en', // Falls Sprache nicht unterstützt wird
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'], // zuerst gespeicherte Sprache, dann Browsersprache
      caches: ['localStorage']
    }
  });

export default i18n;

