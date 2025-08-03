import "../styles/Sidebar.scss";
import avatar from "../assets/avatar.png";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaTelegramPlane,
  FaPhoneAlt,
  FaFile,
  FaHome,
  FaProjectDiagram,
  FaBriefcase,
  FaTools,
} from "react-icons/fa";
import React from "react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <aside className="sidebar">
      <div className="avatar-wrapper">
        <img className="sidebar-avatar" src={avatar} alt="Nikita Skvorcov" />
      </div>
      <h2 className="sidebar-name">Nikita Skvorcov</h2>
      <p className="sidebar-role">Backend Developer</p>
      <p className="sidebar-info">Linux Enthusiast | Creative Professional</p>

      <div className="sidebar-nav">
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleNavClick("home")}
        >
          <FaHome />
          Home
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleNavClick("projects")}
        >
          <FaProjectDiagram />
          Projects
        </a>
        <a
          href="#experience"
          className={activeSection === "experience" ? "active" : ""}
          onClick={() => handleNavClick("experience")}
        >
          <FaBriefcase />
          Experience
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => handleNavClick("skills")}
        >
          <FaTools />
          Skills
        </a>
        <a
          href="#contacts"
          className={activeSection === "contacts" ? "active" : ""}
          onClick={() => handleNavClick("contacts")}
        >
          <FaPhoneAlt />
          Contact
        </a>
      </div>

      <div className="sidebar-icons">
        <a
          href="https://github.com/squora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://gitlab.com/squora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGitlab />
        </a>
        <a
          href="https://linkedin.com/in/nikita"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://t.me/squora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
        >
          <FaFile />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
