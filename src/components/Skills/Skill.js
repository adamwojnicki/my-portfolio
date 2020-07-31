import React from "react";
import styles from "./Skill.module.scss";

export default ({ name, skillLevel }) => {
  return (
    <li className={styles.skills__element}>
      <p className={styles.skills__name}>{name}</p>
      <div className={styles.skills__progress}>
        <div
          className={styles.skills__fill}
          style={{ width: skillLevel + "%" }}
        ></div>
      </div>
    </li>
  );
};
