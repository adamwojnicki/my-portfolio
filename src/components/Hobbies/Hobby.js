import React from "react";
import styles from "./Hobby.module.scss";

export default ({ img, name, desc }) => {
  return (
    <li className={styles.item}>
      <figure className={styles.item__img}>
        <img src={img} alt="Hobby img" />
      </figure>
      <h3 className={styles.item__headline}>{name}</h3>
      <p className={styles.item__description}>{desc}</p>
    </li>
  );
};
