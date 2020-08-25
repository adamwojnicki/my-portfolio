import React, { useState } from "react";
import Project from "./Project";
import edieImg from "../../images/projects/edie-page.png";
import recipeImg from "../../images/projects/recipe-page.png";
import styles from "./Project.module.scss";
import Tag from "./Tag";

export default () => {
  const [projects, setProjects] = useState([
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
    {
      id: 2,
      img: recipeImg,
      tags: ["#blog", "#responsive", "#interactive"],
      title: "Recipe Page",
      desc:
        "Page made with raw HTML and CSS. No libraries, frameworks, preprocessors were used in this project",
      liveUrl: "https://cocky-ptolemy-bb6d46.netlify.app/",
      codeUrl: "https://github.com/adamwojnicki/recipe-page",
    },
  ]);

  const tags = ["#landing", "#responsive", "#blog", "#interactive"];

  const tagElements = tags.map((tag) => (
    <Tag tag={tag} handleFilter={() => handleFilter(tag)} />
  ));

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

  const handleFilter = (tag) => {
    setProjects(projects.filter((project) => project.tags.includes(tag)));
  };

  return (
    <section className="content-section" id="projects">
      <h2 className="content-section__headline">Projects</h2>
      <ul className={styles.tags}>{tagElements}</ul>
      <ul>{projectElements}</ul>
    </section>
  );
};
