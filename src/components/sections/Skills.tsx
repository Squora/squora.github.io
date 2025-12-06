import React, { useState, useEffect, useRef, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { FaCode, FaDatabase, FaDocker, FaCogs, FaTools } from "react-icons/fa";
import TechBadge from "@components/TechBadge";
import "@styles/Skills.scss";

interface SkillCategory {
  title: string;
  titleKey: string;
  icon: JSX.Element;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Backend Development",
    titleKey: "backendDev",
    icon: <FaCode />,
    skills: [
      "PHP",
      "C#",
      "Golang",
      "JavaScript",
      "TypeScript",
      "Laminas",
      "Symfony",
      ".NET Core",
      "Laravel",
      "Mezzio",
      "jQuery",
      "React",
    ],
  },
  {
    title: "Databases & Caching",
    titleKey: "databases",
    icon: <FaDatabase />,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MSSQL",
      "MongoDB",
      "Cassandra",
      "Redis",
      "Firebase",
      "Memcached",
      "CDN",
      "Migrations",
      "Sharding",
      "Transactions",
      "Replication",
      "Normalization",
      "Indexing",
      "ACID",
      "Explain",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    titleKey: "devops",
    icon: <FaDocker />,
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Linux",
      "nginx",
      "Apache",
      "Makefile",
      "LXD/LXC",
      "Gearman",
      "Beanstalkd",
      "Kafka",
      "RabbitMQ",
      "Shell Commands",
      "Process Management",
      "Permissions",
      "Package Management",
      "System Monitoring",
      "Cron",
    ],
  },
  {
    title: "Architecture & Protocols",
    titleKey: "architecture",
    icon: <FaCogs />,
    skills: [
      "Microservices",
      "Load Balancer",
      "OOP",
      "SOLID",
      "MVC",
      "KISS",
      "DRY",
      "YAGNI",
      "Design Patterns",
      "DDD",
      "gRPC",
      "HTTP",
      "REST",
      "WebSockets",
      "API",
      "AJAX",
      "DNS",
      "Browsers",
      "Cookie",
    ],
  },
  {
    title: "Tools & Practices",
    titleKey: "tools",
    icon: <FaTools />,
    skills: [
      "Git",
      "Branching/Merging",
      "Rebasing",
      "Pull Requests",
      "Git Workflows",
      "Unit Tests",
      "Integration Tests",
      "Functional Tests",
      "JWT",
      "OAuth",
      "Token Auth",
      "Basic Auth",
      "SQL Injection",
      "XSS",
      "CSRF",
      "Logstash",
      "Elasticsearch",
      "Kibana",
      "Grafana",
      "Prometheus",
    ],
  },
];

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  category,
  index,
}) => {
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

  return (
    <div
      ref={cardRef}
      className={`skill-category-card ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="skill-category-header">
        <div className="skill-category-icon">{category.icon}</div>
        <h3 className="skill-category-title">
          {t(category.titleKey) || category.title}
        </h3>
      </div>

      <div className="skill-badges">
        {category.skills.map((skill, i) => (
          <TechBadge key={i} tech={skill} variant="skill" />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">{t("skills")}</h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <SkillCategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
