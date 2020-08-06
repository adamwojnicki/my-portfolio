import React from "react";
import edieImg from "../../images/projects/edie-page.png";
import styles from "./Project.module.scss";

export default () => {
  return (
    <li className={styles.item}>
      <figure className={styles.item__img}>
        <img src={edieImg} alt="Screenshot of a project" />
      </figure>
      <ul className={styles.tags}>
        <li className={styles.tags__item}>#frontend</li>
        <li className={styles.tags__item}>#responsive</li>
      </ul>
      {/* HEADLINE */}
      <h3>Edie landing page</h3>
      {/* DESCRIPTION */}
      <p>
        Page made with raw HTML and CSS. No libraries, frameworks, preprocessors
        were used in this project
      </p>
      {/* CTAS */}
      {/* eslint-disable-next-line */}
      <a href="#">Live demo</a>
      {/* eslint-disable-next-line */}
      <a href="#">Code</a>
    </li>
  );
};
