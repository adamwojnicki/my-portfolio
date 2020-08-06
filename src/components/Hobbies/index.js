import React from "react";
import Hobby from "./Hobby";
export default () => {
  return (
    <section className="content-section" id="hobbies">
      <h2 className="content-section__headline">Hobbies</h2>
      <ul>
        <Hobby />
      </ul>
    </section>
  );
};
