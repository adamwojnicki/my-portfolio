import React from "react";
import aswLogo from "../../images/logos/asw-logo.jpg";

export default () => {
  return (
    <section className="content-section" id="experiences">
      <h2 className="content-section__headline">Experiences</h2>
      <ul className="experiences">
        <li className="experiences__item">
          <figure className="experiences__company-logo">
            <img src={aswLogo} alt="ASW logo" />
          </figure>
          <div className="experiences__text-content">
            <p className="experiences__time">Feb 2014 - Sep 2018</p>
            <h3 className="experiences__position">IT Helpdesk technician</h3>
            <p className="experiences__description">
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
