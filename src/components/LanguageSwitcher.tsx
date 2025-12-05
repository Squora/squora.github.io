import React from "react";
import { useTranslation } from "react-i18next";
import "@styles/LanguageSwitcher.scss";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  return (
    <button
      className={className}
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {i18n.language === "en" ? <>EN</> : <>RU</>}
    </button>
  );
};

export default LanguageSwitcher;
