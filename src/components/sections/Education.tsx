import React, { useState, useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "@styles/Education.scss";

interface EducationItem {
  type: "university" | "course";
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  description?: string;
}

const getEducationData = (t: (key: string) => string): EducationItem[] => [
  {
    type: "university",
    institution: t("educationUniversity"),
    degree: t("educationDegree"),
    field: t("educationField"),
    period: "2019 - 2023",
    location: t("educationLocation"),
    description: t("educationDescription"),
  },
];

interface EducationCardProps {
  item: EducationItem;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ item, index }) => {
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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`education-item ${isEven ? "left" : "right"} ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="education-dot"></div>
      <div className="education-card">
        <div className="education-icon-container">
          {item.type === "university" ? <FaGraduationCap /> : <FaCertificate />}
        </div>

        <div className="education-header">
          <h3 className="education-institution">{item.institution}</h3>
          <p className="education-degree">{item.degree}</p>
          <p className="education-field">{item.field}</p>
        </div>

        <div className="education-meta">
          <div className="education-period">
            <FaCalendarAlt />
            <span>{item.period}</span>
          </div>
          {item.location && (
            <div className="education-location">
              <FaMapMarkerAlt />
              <span>{item.location}</span>
            </div>
          )}
        </div>

        {item.description && (
          <p className="education-description">{item.description}</p>
        )}
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const { t } = useTranslation();
  const educationData = getEducationData(t);

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-title">{t("education")}</h2>

        <div className="education-timeline">
          <div className="timeline-line"></div>
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
