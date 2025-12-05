import React from "react";
import "@styles/Home.scss";
import { FaUsers, FaLinux, FaCode, FaGamepad, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Hero from "@components/sections/Hero";
import Stats from "@components/sections/Stats";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />

      <Stats />

      <div className="home">
        <div className="home-content">
          <h2 className="home-section-title">{t("aboutMe")}</h2>
          <p className="home-description">{t("aboutMeDescription")}</p>

          <div className="home-achievements">
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
      </div>
    </>
  );
};

export default Home;
