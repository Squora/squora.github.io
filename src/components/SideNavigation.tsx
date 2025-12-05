import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaProjectDiagram,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaPhoneAlt,
} from "react-icons/fa";
import LanguageSwitcher from "@components/LanguageSwitcher";
import "@styles/SideNavigation.scss";

interface NavItem {
  id: string;
  icon: React.ComponentType;
  label: string;
}

const navItems: NavItem[] = [
  { id: "home", icon: FaHome, label: "home" },
  { id: "projects", icon: FaProjectDiagram, label: "projects" },
  { id: "experience", icon: FaBriefcase, label: "experience" },
  { id: "education", icon: FaGraduationCap, label: "education" },
  { id: "skills", icon: FaTools, label: "skills" },
  { id: "contact", icon: FaPhoneAlt, label: "contact" },
];

const SideNavigation: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="side-navigation">
      <div className="side-nav-line" />

      <div className="side-nav-items">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              className={`side-nav-item ${isActive ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
              aria-label={t(item.label)}
            >
              <span className="side-nav-dot" />
              <span className="side-nav-label">
                <Icon />
                <span>{t(item.label)}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="side-nav-footer">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default SideNavigation;
