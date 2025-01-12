import  { useEffect } from "react";
import AOS from "aos";

const About = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="about py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
      id="about"
    >
      <h1
        className="aboutme text-center mb-20 text-4xl font-semibold text-indigo-700"
        data-aos="zoom-in-down"
      >
        ABOUT ME
      </h1>
      <p
        className="aboutinfor text-center text-lg text-gray-600 mb-16"
        data-aos="zoom-in-down"
      >
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>
      <div className="mainabout flex flex-col lg:flex-row justify-center gap-10">
        <div
          className="matterabout w-full lg:w-1/2 p-6 shadow-xl rounded-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl"
          data-aos="zoom-in-down"
        >
          <h1 className="text-3xl font-semibold text-purple-600 mb-6">
            Get to know me!
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            I'm a{" "}
            <strong className="text-indigo-600">Frontend Developer</strong> at{" "}
            <strong className="text-indigo-600">Namrata Universal</strong>{" "}
            building the Front-end of Websites and Web Applications that lead to
            the success of the overall product. Check out some of my work in the
            Projects section.
            <br />
            <br />I also like sharing content related to the stuff that I have
            learned over the years in{" "}
            <strong className="text-indigo-600">Web Development</strong> so it
            can help other people in the Dev Community. Feel free to Connect or
            Follow me on my{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/narendra-tomar-538087187"
              className="text-blue-600 hover:underline"
            >
              Linkedin
            </a>{" "}
            where I post useful content related to Web Development and
            Programming.
            <br />
            <br />
            I'm open to <strong className="text-indigo-600">Job</strong>{" "}
            opportunities where I can contribute, learn, and grow. If you have a
            good opportunity that matches my skills and experience, feel free to
            reach out.
          </p>
          <button className="btn-contact bg-gradient-to-r from-pink-500 to-indigo-500 hover:bg-gradient-to-l text-white py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105">
            <a href="#contact" className="no-underline">
              {props.btn}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
