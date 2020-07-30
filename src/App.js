import React from "react";
import "./App.scss";

import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";

export default () => {
  return (
    <div className="container">
      <Personal />
      <Skills />
      <Experiences />
      <Projects />
      <Hobbies />
    </div>
  );
};
