import "./App.css";
import AboutMe from "./page/AboutMe";
import Home from "./page/Home";
import Skill from "./page/Skill";
import Project from "./page/Project";
import GithubStat from "./page/GithubStat";
import Contact from "./page/Contact";
import Navbar from "./component/MyNavbar";
import Experience from "./page/Experience";
function App() {
  return (
    <div style={{ marginTop: "0px" }}>
      <Navbar id="nav-menu" />
      <Home id="home" />
      <AboutMe id="aboutme" />
      <Skill id="skills" />
      <Experience id="experience"/>
      <Project id="projects" />
      <GithubStat />
      <Contact id="contact" />
    </div>
  );
}

export default App;
