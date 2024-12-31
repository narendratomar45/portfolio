import React, { useEffect } from "react";
import AOS from "aos";
import ebazar from "../Image/ebazar.png";
import jingle from "../Image/jingle.png";
import Caratglitz from "../Image/caratglitz.png";

const Project = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  let live = "LIVE VIEW";

  const mainpros = [
    {
      srcname: ebazar,
      proroot: "https://ecombazarr.netlify.app/",
      conatnt:
        "I developed a fully functional frontend of e-commerce website, eBazar, using React. The project incorporates dynamic routing with React Router DOM to enable smooth navigation across various pages. A responsive carousel was integrated to highlight featured products, enhancing the user experience. For state management, I leveraged Redux Toolkit, ensuring efficient data handling and scalability. The application was designed with an intuitive user interface to provide a seamless and engaging shopping experience for users. This project reflects my ability to build modern, scalable front-end applications.",
    },
    {
      srcname: Caratglitz,
      proroot: "https://caratglitzwebsite.netlify.app/",
      conatnt:
        "🎬 Excited to share my latest project for Namrata Universal - CaratGlitz is a sophisticated e-commerce platform designed for jewelry enthusiasts, showcasing a wide range of exquisite jewelry collections. Built using React.js, this project aims to provide a seamless shopping experience with a modern user interface.",
    },
    {
      srcname: jingle,
      proroot: "https://jingleholiday.netlify.app/",
      conatnt:
        "I specialize in developing dynamic and user-centric web solutions using HTML and CSS. The platform offers comprehensive travel services, including flights, tours, and hotel bookings, with a focus on providing the best price deals. My work ensures seamless navigation, engaging visuals, and an optimized user experience, facilitating easy access to popular domestic and international travel destinations.",
    },
  ];

  return (
    <div className="space-y-12 p-8 bg-gray-50">
      {mainpros.map((item, index) => (
        <div
          className="flex flex-wrap items-center justify-center gap-8 shadow-lg bg-white p-6 rounded-lg hover:shadow-2xl transition duration-300"
          key={index}
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={item.srcname}
              alt="project screenshot"
              className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              {item.conatnt}
            </p>
            <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              <a href={item.proroot} target="_blank" rel="noreferrer">
                {live}
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
