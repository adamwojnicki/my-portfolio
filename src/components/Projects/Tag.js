import React from "react";
import styles from "./Project.module.scss";

export default ({ tag, handleFilter, idx }) => {
  return (
    <li key={idx} className={styles.tags__item}>
      <button onClick={() => handleFilter(tag)}>{tag}</button>
    </li>
  );
};
