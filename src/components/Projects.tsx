import React from "react";
import "@styles/Projects.scss";
import ProjectCard, { type Project } from "../components/ProjectCard";

import shortengoHome from "../assets/shortengo/home.png";
import shortengoLinks from "../assets/shortengo/links.png";
import shortengoDashboard from "../assets/shortengo/dashboard.png";
import shortengoWebhooks from "../assets/shortengo/webhooks.png";
import shortengoApi from "../assets/shortengo/api.png";
import shortengoBilling from "../assets/shortengo/billing.png";
import shortengoProfile from "../assets/shortengo/profile.png";

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Shortengo",
      description:
        "Сервис для сокращения ссылок с обширным функционалом. Клиент-серверная архитектура, фронтенд на React с feature-based архитектурой. Бэкенд на Laravel с layer архитектурой.",
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
        "PHP 8.2",
        "Laravel",
        "MySQL",
        "Docker",
        "Typescript",
        "Grafana",
        "Kibana",
        "Elasticsearch",
        "Prometheus",
        "Logstash",
        "Filebeat",
        "Nginx",
        "Tailwind",
      ],
      status: "On Dev",
    },
    {
      title: "Biztalk",
      description: "Корпоративный чат.",
      images: [
        "https://via.placeholder.com/250x150?text=Gateway+1",
        "https://via.placeholder.com/250x150?text=Gateway+2",
      ],
      technologies: ["Golang", "PHP", "Symfony", "MongoDB", "PostgreSQL"],
      status: "On Dev",
    },
    {
      title: "Your Vault",
      description: "Веб-приложение для оценки фильмов, игр и т.д.",
      images: ["https://via.placeholder.com/250x150?text=Assistant+1"],
      technologies: ["Mezzio", "PHP"],
      status: "Prototype",
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">Проекты</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
