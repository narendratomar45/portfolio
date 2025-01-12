import React from "react";
import html5 from "../Image/HTML5.png";
import css3 from "../Image/CSS3.png";
import javascript from "../Image/javascript.png";
import react from "../Image/react.png";
import tailwind from "../Image/Tailwind.png";
import git from "../Image/git.png";
import redux from "../Image/redux.png";

function Skills() {
  const skillImg = [html5, css3, javascript, react, tailwind, redux, git];

  return (
    <>
      <h1
        className="text-4xl font-semibold text-center mb-20 text-gray-900"
        id="skill"
        data-aos="zoom-in-down"
      >
        Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {skillImg.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center transform transition-transform hover:scale-110"
            data-aos="zoom-in-right"
          >
            <img
              src={item}
              alt="Skill_Image"
              className="w-24 h-24 object-contain transition-transform duration-300 ease-in-out hover:rotate-12"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
