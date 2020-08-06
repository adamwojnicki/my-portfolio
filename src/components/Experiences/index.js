import React from "react";
import aswLogo from "../../images/logos/asw-logo.jpg";
import cheilLogo from "../../images/logos/cheilLogo.jpg";
import Experience from "./Experience";

const experiences = [
  {
    id: 1,
    logo: cheilLogo,
    time: "Sep 2019 - current",
    position: "Junior front-end web developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit consequatur natus eaque, commodi temporibus error vero suscipit quis in optio? Ea itaque neque aperiam similique unde dolor, obcaecati dignissimos minima!",
  },
  {
    id: 2,
    logo: cheilLogo,
    time: "Oct 2018 - Sep 2019",
    position: "Web publisher",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit consequatur natus eaque, commodi temporibus error vero suscipit quis in optio? Ea itaque neque aperiam similique unde dolor, obcaecati dignissimos minima!",
  },
  {
    id: 3,
    logo: aswLogo,
    time: "Feb 2014 - Oct 2018",
    position: "IT Helpdesk technician",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit consequatur natus eaque, commodi temporibus error vero suscipit quis in optio? Ea itaque neque aperiam similique unde dolor, obcaecati dignissimos minima!",
  },
];

const expElements = experiences.map((exp) => (
  <Experience
    key={exp.id}
    logo={exp.logo}
    time={exp.time}
    position={exp.position}
    description={exp.description}
  />
));

export default () => {
  return (
    <section className="content-section" id="experiences">
      <h2 className="content-section__headline">Experiences</h2>
      <ul>{expElements}</ul>
    </section>
  );
};
