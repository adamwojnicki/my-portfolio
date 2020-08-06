import React from "react";
import styles from "./Hobby.module.scss";

export default () => {
  return (
    <li>
      <figure className={styles.item__img}>
        <img src="" alt="" />
      </figure>
      <h3 className={styles.item__headline}>Traveling</h3>
    </li>
  );
};
