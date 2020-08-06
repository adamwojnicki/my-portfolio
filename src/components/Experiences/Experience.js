import React from "react";
import styles from "./Experience.module.scss";

export default ({ logo, time, position, description }) => {
  return (
    <li className={styles.experiences__item}>
      <figure className={styles.experiences__companyLogo}>
        <img src={logo} alt="company logo" />
      </figure>
      <div className={styles.experiences__textContent}>
        <p className={styles.experiences__time}>{time}</p>
        <h3 className={styles.experiences__position}>{position}</h3>
        <p className={styles.experiences__description}>{description}</p>
      </div>
    </li>
  );
};
