import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    // Sync, wenn Sprache durch den Sprach-Detector gesetzt wurde
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <select onChange={handleChange} value={currentLang}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="tr">Türkçe</option>
      <option value="es">Español</option>
      <option value="ar">العربية</option>
    </select>
  );
}


