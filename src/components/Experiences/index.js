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
      "Creating and modifying websites using HTML, CSS and JS (jQuery). Clear cooperation with Content Managers and QA. Making pages readable on mobile devices (RWD).",
  },
  {
    id: 2,
    logo: cheilLogo,
    time: "Oct 2018 - Sep 2019",
    position: "Web publisher",
    description:
      "Creating and modifying websites using Adobe Experience Manager CMS. SEO optimisation. Making minor changes in HTML, CSS and JS code. Minor image modifications with Photoshop. ",
  },
  {
    id: 3,
    logo: aswLogo,
    time: "Feb 2014 - Oct 2018",
    position: "IT Helpdesk technician",
    description:
      "Solving computer related problems both hardware and software. Receiving and processing service requests in OTRS system.",
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
