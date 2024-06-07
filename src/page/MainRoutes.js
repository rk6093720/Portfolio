import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import AboutMe from './AboutMe';
import Project from './Project';
import TechStack from './TechStack';
import Skill from './Skill';
import Contact from './Contact';
import GithubStat from './GithubStat';
const MainRoutes = ({refs}) => {
  return (
    <Routes>
      <Route path="/" element={<Home ref={refs.homeRef} />} />
      <Route path="/aboutme" element={<AboutMe ref={refs.aboutRef} />} />
      <Route path="/project" element={<Project ref={refs.projectRef} />} />
      <Route
        path="/techStack"
        element={<TechStack ref={refs.techstackRef} />}
      />
      <Route path="/skill" element={<Skill ref={refs.skillsRef} />} />
      <Route path="/contact" element={<Contact ref={refs.contactRef} />} />
      <Route
        path="/githubstat"
        element={<GithubStat ref={refs.githubStatRef} />}
      />
    </Routes>
  );
}

export default MainRoutes
