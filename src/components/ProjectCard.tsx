import React, { useState } from "react";
import '../styles/ProjectCard.scss';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPhp,
  FaPython,
  FaLaravel,
  FaDocker,
  FaSymfony,
  FaSearchPlus,
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
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  status: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const next = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prev = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    setShowOverlay(true);
  };

  const closeFullscreen = () => {
    setShowOverlay(false);
    setTimeout(() => setIsFullscreen(false), 300);
  };

  return (
    <>
      <div className="project">
        <div className="project-image-wrapper" onClick={openFullscreen}>
          <img
            className="project-image"
            src={project.images[currentImage]}
            alt={project.title}
          />
          <div className="zoom-icon">
            <FaSearchPlus />
          </div>
          {project.images.length > 1 && (
            <div className="carousel-buttons">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
              >
                &lt;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
              >
                &gt;
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
                {tech === "React" && <FaReact />}
                {tech === "Node.js" && <FaNodeJs />}
                {tech === "PHP 8.2" && <FaPhp />}
                {tech === "MySQL" && <FaDatabase />}
                {tech === "PostgreSQL" && <SiPostgresql />}
                {tech === "MongoDB" && <SiMongodb />}
                {tech === "Python" && <FaPython />}
                {tech === "Laravel" && <FaLaravel />}
                {tech === "Symfony" && <FaSymfony />}
                {tech === "Docker" && <FaDocker />}
                {tech === "Typescript" && <SiTypescript />}
                {tech === "Grafana" && <SiGrafana />}
                {tech === "Kibana" && <SiKibana />}
                {tech === "Elasticsearch" && <SiElasticsearch />}
                {tech === "Prometheus" && <SiPrometheus />}
                {tech === "Logstash" && <SiLogstash />}
                {tech === "Nginx" && <SiNginx />}
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div
          className={`fullscreen-overlay ${
            showOverlay ? "fadeIn" : "fadeOut"
          }`}
          onClick={closeFullscreen}
        >
          <button
            className="fullscreen-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            &lt;
          </button>
          <img
            className="fullscreen-image"
            src={project.images[currentImage]}
            alt="fullscreen"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="fullscreen-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            &gt;
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
export type { Project };
