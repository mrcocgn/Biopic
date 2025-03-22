import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleChange} value={i18n.language}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="tr">Türkçe</option>
      <option value="es">Español</option>
      <option value="ar">العربية</option>
    </select>
  );
}

