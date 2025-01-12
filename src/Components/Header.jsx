import React from "react";
import logo from "../Image/photo.jpg";
import TypingAnimator from "react-typing-animator";
import DownloadCV from "../Image/resume/NarendraTomar.pdf";

const Header = (props) => {
  const textAni = [
    "front-end developer",
    "javascript",
    "react",
    "RESPONSIVE design",
    "web developer",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-blue-600 shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex justify-center items-center gap-16">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
              <img
                className="w-full h-full object-cover"
                src={logo}
                alt="logoMain"
              />
            </div>
            {/* Name */}
            <div className="text-2xl font-bold text-white">
              {props.ownerName}
            </div>
          </div>
          {/* Nav Links */}
          <div className="hidden lg:flex space-x-6">
            <a
              href="/"
              className="text-lg text-white hover:text-yellow-200 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg text-white hover:text-yellow-200 transition duration-300"
            >
              About
            </a>
            <a
              href="#skill"
              className="text-lg text-white hover:text-yellow-200 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#project"
              className="text-lg text-white hover:text-yellow-200 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-lg text-white hover:text-yellow-200 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <main className="pt-32 bg-blue-50 text-gray-800">
        <div className="flex flex-col items-center text-center px-6 lg:px-32 py-20">
          {/* Welcome Text */}
          <h1 className="text-5xl font-bold text-blue-700 mb-4 animate__animated animate__fadeInUp">
            HEY, I'M {props.ownerName}
            <TypingAnimator
              textArray={textAni}
              cursorColor="blue"
              textColor="blue"
              fontSize="2.5rem"
              textTransform="uppercase"
              loop
              typingSpeed={50}
              delaySpeed={1000}
              backspace
              height="80px"
            />
          </h1>
          {/* Description */}
          <p className="text-lg text-gray-600 mb-6 animate__animated animate__fadeInLeft opacity-80">
            {props.contant}
          </p>
          {/* Download CV Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            <a
              href={DownloadCV}
              download="Narendra's CV"
              className="no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-12 h-12 border-4 border-blue-600 rounded-full flex items-center justify-center animate-ping"></div>
        </div>
      </main>
    </>
  );
};

export default Header;
