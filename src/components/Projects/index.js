import React from "react";
import Project from "./Project";

export default () => {
  return (
    <section className="content-section" id="projects">
      <h2 className="content-section__headline">Projects</h2>
      <ul>
        <Project />
        <Project />
      </ul>
    </section>
  );
};
