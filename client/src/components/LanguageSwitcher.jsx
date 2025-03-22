import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
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
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    setCurrentLang(selectedLang);
  };

  return (
    <div className="language-dropdown">
      <select value={currentLang} onChange={handleChange} aria-label="Sprache wählen">
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}




