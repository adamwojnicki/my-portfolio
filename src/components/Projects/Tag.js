import React from "react";
import styles from "./Project.module.scss";

export default ({ tag, handleFilter }) => {
  return (
    <li className={styles.tags__item}>
      <button onClick={() => handleFilter(tag)}>{tag}</button>
    </li>
  );
};
