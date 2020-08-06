import React from "react";
import Hobby from "./Hobby";
import travelImg from "../../images/hobbies/travel.jpg";
import foodImg from "../../images/hobbies/food.jpg";
import photoImg from "../../images/hobbies/photo.jpg";

const hobbies = [
  {
    id: 1,
    name: "Travelling",
    img: travelImg,
    desc: "Visiting favourite new places around",
  },
  {
    id: 2,
    name: "Food",
    img: foodImg,
    desc: "Tasting my favourite foods and discovering new tastes",
  },
  {
    id: 3,
    name: "Digital photography",
    img: photoImg,
    desc: "Taking pictures of nature and architecture",
  },
];
const hobbyItems = hobbies.map((hobby) => (
  <Hobby img={hobby.img} name={hobby.name} desc={hobby.desc} />
));
export default () => {
  return (
    <section className="content-section" id="hobbies">
      <h2 className="content-section__headline">Hobbies</h2>
      <ul>{hobbyItems}</ul>
    </section>
  );
};
