import SideNavigation from "@components/SideNavigation";
import ScrollProgress from "@components/ScrollProgress";
import Home from "@pages/Home";
import Projects from "@components/sections/Projects";
import Skills from "@components/sections/Skills";
import Experience from "@components/sections/Experience";
import Education from "@components/sections/Education";
import Contacts from "@components/sections/Contacts";
import "@styles/App.scss";

function App() {
  return (
    <div className="app">
      <ScrollProgress />

      <SideNavigation />

      <main className="app-content">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contacts />
        </section>
      </main>
    </div>
  );
}

export default App;
