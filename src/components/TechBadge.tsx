import React, { type JSX } from "react";
import { getTechUrl } from "@utils/techUrls";
import "@styles/TechBadge.scss";

interface TechBadgeProps {
  tech: string;
  icon?: JSX.Element;
  variant?: "project" | "skill" | "experience";
}

const TechBadge: React.FC<TechBadgeProps> = ({
  tech,
  icon,
  variant = "project",
}) => {
  const url = getTechUrl(tech);
  const className = `tech-badge tech-badge--${variant}`;

  const content = (
    <>
      {icon && <span className="tech-badge__icon">{icon}</span>}
      <span className="tech-badge__text">{tech}</span>
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Learn more about ${tech}`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
};

export default TechBadge;
