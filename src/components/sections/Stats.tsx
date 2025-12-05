import React, { useState, useEffect, useRef } from "react";
import "@styles/Stats.scss";
import { FaCode, FaProjectDiagram, FaTools, FaAward } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  value,
  suffix = "",
  label,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = itemRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration]);

  return (
    <div ref={itemRef} className={`stat-item ${isVisible ? "visible" : ""}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="stats" className="stats">
      <div className="stats-container">
        <h2 className="stats-title">
          {t("achievements") || "Достижения в цифрах"}
        </h2>

        <div className="stats-grid">
          <StatItem
            icon={<FaCode />}
            value={2}
            suffix="+"
            label={t("yearsExperience") || "Года опыта"}
          />
          <StatItem
            icon={<FaProjectDiagram />}
            value={10}
            suffix="+"
            label={t("projectsCompleted") || "Завершенных проектов"}
          />
          <StatItem
            icon={<FaTools />}
            value={25}
            suffix="+"
            label={t("technologies") || "Технологий в стеке"}
          />
          <StatItem
            icon={<FaAward />}
            value={100}
            suffix="%"
            label={t("commitment") || "Преданность качеству"}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
