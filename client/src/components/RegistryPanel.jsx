import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AuthForm from "./AuthForm";
import "../styles/RegistryPanel.css";

export default function RegistryPanel() {
  const [open, setOpen] = useState(false);
  const [hideToggle, setHideToggle] = useState(false);
  const { t, i18n } = useTranslation();

  const rtlLangs = ["ar"];

  useEffect(() => {
    const handleScroll = () => {
      if (!open) {
        setHideToggle(window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir = rtlLangs.includes(savedLang) ? "rtl" : "ltr";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n]);

  const togglePanel = () => setOpen(!open);

  const handleLangChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = rtlLangs.includes(lang) ? "rtl" : "ltr";
  };

  return (
    <>
      <button
        className={`registry-toggle ${hideToggle ? "hidden" : ""}`}
        onClick={togglePanel}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? "✖" : "☰"}
      </button>

      <section id="registry">
        <aside className={`registry-panel ${open ? "open" : ""}`}>
          <div className="registry-inner">
            <div className="registry-content">
              <h2>{t("register.welcome")}</h2>
              <p>{t("register.subscribe")}</p>
              <AuthForm />
              <br />

              <div className="language-select">
                <label htmlFor="lang">{t("register.language")}</label>
                <select id="lang" onChange={handleLangChange} value={i18n.language}>
                  <option value="en">{t("lang.en")}</option>
                  <option value="de">{t("lang.de")}</option>
                  <option value="tr">{t("lang.tr")}</option>
                  <option value="es">{t("lang.es")}</option>
                  <option value="ar">{t("lang.ar")}</option>
                  <option value="fr">{t("lang.fr")}</option>
                  <option value="it">{t("lang.it")}</option>
                  <option value="ru">{t("lang.ru")}</option>
                  <option value="zh">{t("lang.zh")}</option>
                  <option value="ja">{t("lang.ja")}</option>
                </select>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
