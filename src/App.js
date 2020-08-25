import React from "react";
import "./App.scss";

import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

export default () => {
  return (
    <div className="container">
      <header>
        <Personal />
      </header>
      <main>
        <div className="column-left">
          <Skills />
          <Hobbies />
        </div>
        <div className="column-right">
          <Experiences />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
};
