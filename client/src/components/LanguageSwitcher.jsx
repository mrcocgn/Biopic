import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import '../index.css';

const languages = [
  { code: 'en', label: '🇬🇧' },
  { code: 'de', label: '🇩🇪' },
  { code: 'tr', label: '🇹🇷' },
  { code: 'es', label: '🇪🇸' },
  { code: 'ar', label: '🇸🇦' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  useEffect(() => {
    setActiveLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
  };

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`flag-button ${activeLang === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          aria-label={lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}



