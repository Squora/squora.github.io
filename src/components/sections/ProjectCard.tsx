import React, { useState, type JSX } from "react";
import "@styles/ProjectCard.scss";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPhp,
  FaPython,
  FaLaravel,
  FaDocker,
  FaSymfony,
  FaGithub,
  FaExternalLinkAlt,
  FaGlobe,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGrafana,
  SiKibana,
  SiElasticsearch,
  SiPrometheus,
  SiLogstash,
  SiNginx,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGo,
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  status: string;
  role?: string;
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
  features?: string[];
  technologiesGrouped?: {
    frontend?: string[];
    backend?: string[];
    devops?: string[];
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const next = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prev = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const getTechIcon = (tech: string) => {
    const techIcons: { [key: string]: JSX.Element } = {
      React: <FaReact />,
      "Node.js": <FaNodeJs />,
      "PHP 8.2": <FaPhp />,
      PHP: <FaPhp />,
      MySQL: <FaDatabase />,
      PostgreSQL: <SiPostgresql />,
      MongoDB: <SiMongodb />,
      Python: <FaPython />,
      Laravel: <FaLaravel />,
      Symfony: <FaSymfony />,
      Docker: <FaDocker />,
      Typescript: <SiTypescript />,
      Grafana: <SiGrafana />,
      Kibana: <SiKibana />,
      Elasticsearch: <SiElasticsearch />,
      Prometheus: <SiPrometheus />,
      Logstash: <SiLogstash />,
      Nginx: <SiNginx />,
      Tailwind: <SiTailwindcss />,
      Golang: <SiGo />,
    };
    return techIcons[tech] || null;
  };

  return (
    <div className="project">
      <div className="project-image-wrapper">
        <img
          className="project-image"
          src={project.images[currentImage]}
          alt={project.title}
        />
        {project.images.length > 1 && (
          <div className="carousel-buttons">
            <button onClick={prev} aria-label="Previous image">
              ‹
            </button>
            <button onClick={next} aria-label="Next image">
              ›
            </button>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-header">
          <h2 className="project-title">{project.title}</h2>
          <span
            className={`project-status ${project.status
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {project.status}
          </span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, i) => (
            <div className="technology" key={i}>
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {project.links && (
          <div className="project-links">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View on GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View demo"
              >
                <FaExternalLinkAlt />
                <span>Demo</span>
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="Visit website"
              >
                <FaGlobe />
                <span>Website</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
export type { Project };
