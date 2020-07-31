import React from "react";
import styles from "./Skills.module.scss";

export default () => {
  return (
    <section className="content-section" id="skills">
      <h2 className="content-section__headline">Skills</h2>
      <ul className="skills">
        <li className={styles.skills__element}>
          <p className={styles.skills__name}>HTML</p>
          <div className={styles.skills__progress}>
            <div className={styles.skills__fill}></div>
          </div>
        </li>
      </ul>
    </section>
  );
};
