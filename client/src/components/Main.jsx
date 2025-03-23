import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  return (
    <main>
      <section id="profil">
        <h2>{t("profile.title")}</h2>
        <div className="profil-container">
          <img src="avatar.jpg" alt={t("profile.alt")} className="profilbild" />
          <div className="profiltext">
            <ul>
              <li>
                <strong>{t("profile.nameLabel")}:</strong> Marcos Ilgi
              </li>
              <li>
                <strong>{t("profile.positionLabel")}:</strong>{" "}
                {t("profile.position")}
              </li>
              <li>
                <strong>{t("profile.locationLabel")}:</strong>{" "}
                {t("profile.location")}
              </li>
              <li>
                <strong>{t("profile.languagesLabel")}:</strong>{" "}
                {t("profile.languages")}
              </li>
              <li>
                <strong>{t("profile.technologiesLabel")}:</strong>{" "}
                {t("profile.technologies")}
              </li>
              <li>
                <strong>{t("profile.focusLabel")}:</strong> {t("profile.focus")}
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/mrcocgn" target="_blank">
                  @mrcocgn
                </a>
              </li>
              <li>
                <strong>Instagram:</strong>{" "}
                <a href="https://instagram.com/mrcocgn" target="_blank">
                  @mrcocgn
                </a>
              </li>
              <li>
                <strong>500px:</strong>{" "}
                <a href="https://500px.com/p/lnidsgn" target="_blank">
                  @lnidsgn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="inspiration">
        <h2>{t("inspiration.title")}</h2>
        <p>{t("inspiration.text")}</p>
      </section>

      <section id="skills">
        <h2>{t("skills.title")}</h2>
        <ul>
          <li>
            <strong>{t("skills.stackLabel")}:</strong> {t("skills.stack")}
          </li>
          <li>
            <strong>{t("skills.otherLabel")}:</strong> {t("skills.other")}
          </li>
          <li>
            <strong>{t("skills.languagesLabel")}:</strong>{" "}
            {t("skills.languages")}
          </li>
        </ul>
      </section>

      <section id="projects">
        <h2>{t("projects.title")}</h2>
        <ul>
          <li>
            <strong>lni.design:</strong> {t("projects.lnidesign")}
          </li>
          <li>
            <strong>CHENS29:</strong> {t("projects.chens29")}
          </li>
          <li>
            <strong>Sheherazade Dreams:</strong> {t("projects.sheherazade")}
          </li>
          <li>
            <strong>To-Learn-List:</strong> {t("projects.tolearnlist")}
          </li>
        </ul>
      </section>

      <section id="philosophy">
        <h2>{t("philosophy.title")}</h2>
        <p>{t("philosophy.text")}</p>
      </section>

      <section id="vision">
        <h2>{t("vision.title")}</h2>
        <p>{t("vision.text")}</p>
      </section>

      <section className="cta-section">
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.text")}</p>
        <a href="mailto:mrcocgn@icloud.com" className="cta-button">
          {t("cta.button")}
        </a>
      </section>

      <section className="cta-section">
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.text")}</p>

        <div
          className="cta-buttons"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "1rem",
          }}
        >
          <a href="mailto:mrcocgn@icloud.com" className="cta-button">
            📧 {t("cta.button")}
          </a>

          <a
            href="https://wa.me/4917635116234?text=Hallo%20Marcos%2C%20ich%20interessiere%20mich%20f%C3%BCr%20dein%20Portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button whatsapp"
          >
            📲 {t("cta.whatsapp")}
          </a>

          <a href="tel:+4917635116234" className="cta-button phone">
            {t("cta.call")}
          </a>
        </div>
      </section>

      <a
        href="https://github.com/mrcocgn"
        target="_blank"
        rel="noopener"
        className="cta-link"
      >
        {t("cta.github")}
      </a>
    </main>
  );
}

export default Main;
