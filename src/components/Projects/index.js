import React, { useState, useEffect } from "react";
import Project from "./Project";
import edieImg from "../../images/projects/edie-page.png";
import recipeImg from "../../images/projects/recipe-page.png";
import styles from "./Project.module.scss";
import Tag from "./Tag";

const initialProjects = [
  {
    id: 1,
    img: edieImg,
    tags: ["all", "#landing", "#responsive"],
    title: "Edie landing page",
    desc:
      "Page made with raw HTML and CSS. No libraries, frameworks, preprocessors were used in this project",
    liveUrl: "https://keen-lichterman-5dd3d9.netlify.app/",
    codeUrl: "https://github.com/adamwojnicki/eddie-page/",
  },
  {
    id: 2,
    img: recipeImg,
    tags: ["all", "#blog", "#responsive", "#interactive"],
    title: "Recipe Page",
    desc:
      "Page made with raw HTML and CSS. No libraries, frameworks, preprocessors were used in this project",
    liveUrl: "https://cocky-ptolemy-bb6d46.netlify.app/",
    codeUrl: "https://github.com/adamwojnicki/recipe-page",
  },
];

const tags = ["all", "#landing", "#responsive", "#blog", "#interactive"];

export default () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setProjects(initialProjects);
  }, []);

  useEffect(() => {
    setProjects([]);
    const filtered = initialProjects.map((p) => ({
      ...p,
      filtered: p.tags.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  const handleFilter = (tag) => {
    setFilter(tag);
  };

  const tagElements = tags.map((tag, idx) => (
    <Tag key={idx} tag={tag} handleFilter={() => handleFilter(tag)} />
  ));

  return (
    <section className="content-section" id="projects">
      <h2 className="content-section__headline">Projects</h2>
      <ul className={styles.tags}>{tagElements}</ul>
      <ul>
        {projects.map((item) =>
          item.filtered === true ? (
            <Project
              key={item.id}
              tags={item.tags}
              img={item.img}
              title={item.title}
              desc={item.desc}
              live={item.liveUrl}
              code={item.codeUrl}
            />
          ) : (
            ""
          )
        )}
      </ul>
    </section>
  );
};
