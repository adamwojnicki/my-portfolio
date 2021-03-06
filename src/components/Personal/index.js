import React from "react";
import styles from "./Personal.module.scss";

import portrait from "../../images/portrait.jpg";

export default () => {
  return (
    <section className={`content-section ${styles.section}`} id="personal">
      <figure className={styles.section__img}>
        <img src={portrait} alt="Portrait" />
      </figure>
      <div className={styles.section__text}>
        <h1 className="content-section__headline">Adam Wojnicki</h1>
        <p className="content-section__description">Front-end web developer</p>
        <p className="content-section__description">
          Self educated front-end web developer based in Warsaw, Poland.
          Interested in developing modern and convenient UIs.
        </p>
        <ul className={styles.list}>
          <li className={styles.list__item}>tel.: 111-222-333</li>
          <li className={styles.list__item}>mail: wojnicki.adam1@gmail.com</li>
        </ul>
      </div>
    </section>
  );
};
