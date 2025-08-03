import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "@pages/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import "./styles/App.scss";
import Contacts from "./components/Contacts";
import LanguageSwitcher from "@components/LanguageSwitcher";

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "home";
  });

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "contacts":
        return <Contacts />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="app-content">
        <LanguageSwitcher className="language-toggle" />
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
