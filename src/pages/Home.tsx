import React from "react";
import "@styles/Home.scss";
import { FaUsers, FaLinux, FaCode, FaGamepad, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
    const { t } = useTranslation();

  return (
    <div className="home">
      <h1 className="home-title">{t("welcome")}</h1>
      <p className="home-description">
        Я backend-разработчик, специализирующийся на создании устойчивых и
        масштабируемых веб-систем. Работаю с PHP (Mezzio, Symfony) и активно
        осваиваю Golang. Придерживаюсь принципов чистой архитектуры, DDD и
        SOLID. Имею опыт работы в кросс-функциональных командах, практикую TDD и
        code review. Увлекаюсь DevOps-инструментами, контейнеризацией и
        автоматизацией процессов. В свободное время изучаю новые технологии,
        участвую в разработке pet-проектов и вношу вклад в open source, чтобы
        поддерживать высокий технический уровень и оставаться в курсе
        современных подходов.
      </p>

      <div className="home-achievements">
        <div className="achievement">
          <FaCode />
          <p>1+ год коммерческой разработки на PHP (Mezzio, Symfony)</p>
        </div>
        <div className="achievement">
          <FaLinux />
          <p>
            Опыт работы с Linux, Docker, Kubernetes, настройкой CI/CD и
            observability сервисов
          </p>
        </div>
        <div className="achievement">
          <FaGithub />
          <p>
            Поддерживаю собственные backend-проекты и участвую в open
            source-инициативах на GitHub
          </p>
        </div>
        <div className="achievement">
          <FaUsers />
          <p>
            Опыт работы в agile и scrum командах с code review, TDD и обсуждением
            архитектурных решений
          </p>
        </div>
        <div className="achievement">
          <FaGamepad />
          <p>
            Создаю игры на Unity (C#) в свободное время как способ расширения
            кругозора
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
