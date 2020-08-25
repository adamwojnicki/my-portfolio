import React from "react";
import Project from "./Project";
import edieImg from "../../images/projects/edie-page.png";

const projects = [
  {
    id: 1,
    img: edieImg,
    tags: ["#landing", "#responsive"],
    title: "Edie landing page",
    desc:
      "Page made with raw HTML and CSS. No libraries, frameworks, preprocessors were used in this project",
    liveUrl: "https://keen-lichterman-5dd3d9.netlify.app/",
    codeUrl: "https://github.com/adamwojnicki/eddie-page/",
  },
];

const projectElements = projects.map((project) => (
  <Project
    key={project.id}
    tags={project.tags}
    img={project.img}
    title={project.title}
    desc={project.desc}
    live={project.liveUrl}
    code={project.codeUrl}
  />
));

export default () => {
  return (
    <section className="content-section" id="projects">
      <h2 className="content-section__headline">Projects</h2>
      <ul>{projectElements}</ul>
    </section>
  );
};
