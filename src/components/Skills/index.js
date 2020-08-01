import React from "react";
import Skill from "./Skill";

export default () => {
  return (
    <section className="content-section" id="skills">
      <h2 className="content-section__headline">Skills</h2>
      <ul className="skills">
        <Skill name="HTML" skillLevel={80} />
        <Skill name="CSS" skillLevel={85} />
        <Skill name="JS (ES6)" skillLevel={79} />
        <Skill name="React" skillLevel={65} />
      </ul>
    </section>
  );
};
