import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "../styles/Experience.scss";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: "amoCRM",
    position: "PHP Backend Developer",
    period: "2023 - Present",
    description: `
    Разработка REST API для интеграции с внешними сервисами (CRM, платежные системы)
    Оптимизация SQL-запросов, увеличение производительности на 35%
    Внедрение очередей (RabbitMQ) для асинхронной обработки задач
    Рефакторинг легаси-кода, покрытие unit-тестами (PHPUnit)
    Работа по методологии Scrum, участие в code review и митингах
    `,
  },
];

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      <div>
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <FaBriefcase className="experience-icon" />
              <h3>{exp.position}</h3>
            </div>
            <p className="experience-company">{exp.company}</p>
            <div className="experience-period">
              <FaCalendarAlt />
              <span>{exp.period}</span>
            </div>
            {exp.description && (
              <ul className="experience-description">
                {exp.description
                  .trim()
                  .split("\n")
                  .map((line, i) => (
                    <li key={i}>{line.replace(/^[-–•]\s*/, "")}</li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
