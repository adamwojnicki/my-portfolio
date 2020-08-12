import React from "react";
import edieImg from "../../images/projects/edie-page.png";
import styles from "./Project.module.scss";

export default ({ title }) => {
  return (
    <li className={styles.item}>
      <figure className={styles.item__img}>
        <img src={edieImg} alt="Screenshot of a project" />
      </figure>
      <ul className={styles.tags}>
        <li className={styles.tags__item}>#frontend</li>
        <li className={styles.tags__item}>#responsive</li>
      </ul>
      <h3 className={styles.item__headline}>{title}</h3>
      <p className={styles.item__description}>
        Page made with raw HTML and CSS. No libraries, frameworks, preprocessors
        were used in this project
      </p>
      <a
        className={styles.item__ctaPrimary}
        href="https://keen-lichterman-5dd3d9.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Live demo
      </a>

      <a
        className={styles.item__cta}
        href="https://github.com/adamwojnicki/eddie-page"
        target="_blank"
        rel="noreferrer noopener"
      >
        Code
      </a>
    </li>
  );
};
