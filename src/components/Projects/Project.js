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
      <h3 className={styles.item__headline}>Edie landing page</h3>
      <p className={styles.item__description}>
        Page made with raw HTML and CSS. No libraries, frameworks, preprocessors
        were used in this project
      </p>
      {/* CTAS */}
      {/* eslint-disable-next-line */}
      <a
        className={styles.item__ctaPrimary}
        href="https://keen-lichterman-5dd3d9.netlify.app/"
      >
        Live demo
      </a>
      {/* eslint-disable-next-line */}
      <a
        className={styles.item__cta}
        href="https://github.com/adamwojnicki/eddie-page"
      >
        Code
      </a>
    </li>
  );
};
