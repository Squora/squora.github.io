import React, { useState, useEffect, useRef, type JSX } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPhp,
  FaPython,
  FaLaravel,
  FaDocker,
  FaSymfony,
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
import { useTranslation } from "react-i18next";
import TechBadge from "@components/TechBadge";
import "@styles/Experience.scss";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

const getExperienceData = (t: (key: string) => string): ExperienceItem[] => [
  {
    company: "amoCRM",
    position: "PHP Backend Developer",
    period: "2023 - Present",
    location: "Moscow, Russia",
    description: t("experienceDescription"),
    achievements: [
      t("experienceAchievement1"),
      t("experienceAchievement2"),
      t("experienceAchievement3"),
      t("experienceAchievement4"),
    ],
    technologies: ["PHP", "Symfony", "MySQL", "Docker", "Nginx", "RabbitMQ"],
  },
];

interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

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
      RabbitMQ: <FaDatabase />,
    };
    return techIcons[tech] || null;
  };

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`experience-item ${isEven ? "left" : "right"} ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="experience-dot"></div>
      <div className="experience-card">
        <div className="experience-icon-container">
          <FaBriefcase />
        </div>

        <div className="experience-header">
          <h3 className="experience-position">{exp.position}</h3>
          <p className="experience-company">{exp.company}</p>
        </div>

        <div className="experience-meta">
          <div className="experience-period">
            <FaCalendarAlt />
            <span>{exp.period}</span>
          </div>
          {exp.location && (
            <div className="experience-location">
              <FaMapMarkerAlt />
              <span>{exp.location}</span>
            </div>
          )}
        </div>

        <p className="experience-description">{exp.description}</p>

        {exp.achievements && exp.achievements.length > 0 && (
          <div className="experience-achievements">
            <h4 className="achievements-title">
              <FaCheckCircle />
              {t("achievements") || "Ключевые достижения"}
            </h4>
            <ul className="achievements-list">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {exp.technologies && exp.technologies.length > 0 && (
          <div className="experience-technologies">
            {exp.technologies.map((tech, i) => (
              <TechBadge
                key={i}
                tech={tech}
                icon={getTechIcon(tech)}
                variant="experience"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experienceData = getExperienceData(t);

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">{t("experience")}</h2>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
