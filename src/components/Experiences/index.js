import React from "react";
import aswLogo from "../../images/logos/asw-logo.jpg";
import styles from "./Experience.module.scss";

export default () => {
  return (
    <section className="content-section" id="experiences">
      <h2 className="content-section__headline">Experiences</h2>
      <ul className={styles.experiences}>
        <li className={styles.experiences__item}>
          <figure className={styles.experiences__companyLogo}>
            <img src={aswLogo} alt="ASW logo" />
          </figure>
          <div className={styles.experiences__textContent}>
            <p className={styles.experiences__time}>Feb 2014 - Sep 2018</p>
            <h3 className={styles.experiences__position}>
              IT Helpdesk technician
            </h3>
            <p className={styles.experiences__description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              consequatur natus eaque, commodi temporibus error vero suscipit
              quis in optio? Ea itaque neque aperiam similique unde dolor,
              obcaecati dignissimos minima!
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
