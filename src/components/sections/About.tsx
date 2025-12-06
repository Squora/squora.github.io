import React from "react";
import "@styles/About.scss";
import { FaUsers, FaLinux, FaCode, FaGamepad, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">{t("aboutMe")}</h2>
        <p className="about-description">{t("aboutMeDescription")}</p>

        <div className="about-achievements">
          <div className="achievement">
            <div className="achievement-icon">
              <FaCode />
            </div>
            <p>{t("achievement1")}</p>
          </div>
          <div className="achievement">
            <div className="achievement-icon">
              <FaLinux />
            </div>
            <p>{t("achievement2")}</p>
          </div>
          <div className="achievement">
            <div className="achievement-icon">
              <FaGithub />
            </div>
            <p>{t("achievement3")}</p>
          </div>
          <div className="achievement">
            <div className="achievement-icon">
              <FaUsers />
            </div>
            <p>{t("achievement4")}</p>
          </div>
          <div className="achievement">
            <div className="achievement-icon">
              <FaGamepad />
            </div>
            <p>{t("achievement5")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
