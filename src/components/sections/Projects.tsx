import React from "react";
import "@styles/Projects.scss";
import ProjectCard, { type Project } from "@components/sections/ProjectCard";
import { useTranslation } from "react-i18next";

import shortengoHome from "@assets/shortengo/home.png";
import shortengoLinks from "@assets/shortengo/links.png";
import shortengoDashboard from "@assets/shortengo/dashboard.png";
import shortengoWebhooks from "@assets/shortengo/webhooks.png";
import shortengoApi from "@assets/shortengo/api.png";
import shortengoBilling from "@assets/shortengo/billing.png";
import shortengoProfile from "@assets/shortengo/profile.png";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      title: "Shortengo",
      description: t("shortengoDescription"),
      images: [
        shortengoHome,
        shortengoLinks,
        shortengoDashboard,
        shortengoWebhooks,
        shortengoApi,
        shortengoBilling,
        shortengoProfile,
      ],
      technologies: [
        "React",
        "Typescript",
        "Tailwind",
        "PHP 8.2",
        "Laravel",
        "MySQL",
        "Docker",
        "Nginx",
      ],
      status: "On Dev",
      links: {
        github: "https://github.com/squora/shortengo",
      },
    },
    {
      title: "Biztalk",
      description: t("biztalkDescription"),
      images: [
        "https://via.placeholder.com/250x150?text=Gateway+1",
        "https://via.placeholder.com/250x150?text=Gateway+2",
      ],
      technologies: ["Golang", "PHP", "Symfony", "MongoDB", "PostgreSQL"],
      status: "On Dev",
    },
    {
      title: "Your Vault",
      description: t("vaultDescription"),
      images: ["https://via.placeholder.com/250x150?text=Assistant+1"],
      technologies: ["PHP", "Mezzio"],
      status: "Prototype",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h1 className="projects-title">{t("projects")}</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
