import React from "react";
import styles from "./Project.module.scss";

export default ({ img, tags, title, desc, live, code }) => {
  const renderTags = tags.map((tag, idx) => (
    <li key={idx} className={styles.tags__item}>
      {tag}
    </li>
  ));
  return (
    <li className={styles.item}>
      <figure className={styles.item__img}>
        <img src={img} alt="Screenshot of a project" />
      </figure>
      <ul className={styles.tags}>{renderTags}</ul>
      <h3 className={styles.item__headline}>{title}</h3>
      <p className={styles.item__description}>{desc}</p>
      <a
        className={styles.item__ctaPrimary}
        href={live}
        target="_blank"
        rel="noreferrer noopener"
      >
        Live demo
      </a>

      <a
        className={styles.item__cta}
        href={code}
        target="_blank"
        rel="noreferrer noopener"
      >
        Code
      </a>
    </li>
  );
};
