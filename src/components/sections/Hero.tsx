import React, { useState, useEffect } from "react";
import "@styles/Hero.scss";
import {
  FaArrowDown,
  FaGithub,
  FaTelegram,
  FaGitlab,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "PHP Backend Developer";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Nikita Skvorcov</h1>

        <div className="hero-subtitle">
          <span className="typing-text">
            {displayedText}
            <span className={`cursor ${isTypingComplete ? "blink" : ""}`}>
              |
            </span>
          </span>
        </div>

        <p className="hero-tagline">
          {t("tagline") || "Linux Enthusiast | Creative Professional"}
        </p>

        <p className="hero-description">
          {t("heroDescription") ||
            "Создаю устойчивые и масштабируемые веб-системы с использованием современных технологий и лучших практик разработки"}
        </p>

        <div className="hero-social">
          <a
            href="https://github.com/squora"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            <FaGithub />
            <span className="social-tooltip">GitHub</span>
          </a>
          <a
            href="https://gitlab.com/nskvorcov"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link gitlab"
          >
            <FaGitlab />
            <span className="social-tooltip">GitLab</span>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <FaLinkedin />
            <span className="social-tooltip">LinkedIn</span>
          </a>
          <a
            href="https://t.me/likohv"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link telegram"
          >
            <FaTelegram />
            <span className="social-tooltip">Telegram</span>
          </a>
        </div>

        <div className="hero-cta">
          <a href="/resume.pdf" download className="cta-primary">
            <FaDownload />
            <span>{t("downloadResume") || "Download Resume"}</span>
          </a>
          <button
            className="cta-secondary"
            onClick={() => scrollToSection("projects")}
          >
            <span>{t("viewProjects") || "View Projects"}</span>
          </button>
          <button
            className="cta-tertiary"
            onClick={() => scrollToSection("contact")}
          >
            <span>{t("contactMe") || "Contact Me"}</span>
          </button>
        </div>

        <div
          className="scroll-indicator"
          onClick={() => scrollToSection("stats")}
        >
          <FaArrowDown className="bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
