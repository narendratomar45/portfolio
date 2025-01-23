
import React from "react";

const Footer = (props) => {
  let currDate = new Date().toLocaleDateString();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
      <footer>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-semibold text-white mb-4 uppercase tracking-wide">
            {props.ownerName}
          </h1>
          <p className="leading-6 text-center text-gray-200">{props.content}</p>
        </div>

        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-semibold mb-4 text-gray-100">SOCIAL</h1>
          <ul className="flex space-x-6">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/narendra-tomar-538087187/"
                className="text-blue-400 hover:text-blue-600 transition duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/narendratomar45"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                GitHub
              </a>
            </li>
          </ul>
          <h6 className="flex items-center text-sm mt-4 text-gray-200">
            <i className="fa fa-envelope-o mr-3 text-lg"></i>
            <span>narendratomar4583@gmail.com</span>
          </h6>
          <h6 className="flex items-center text-sm mt-2 text-gray-200">
            <i className="fa fa-map-marker mr-3 text-lg"></i>
            <span>Noida, India</span>
          </h6>
        </div>
      </footer>

      <hr className="border-gray-600 mb-4" />

      <h6 className="text-center text-sm text-gray-100 mb-4">{currDate}</h6>
      <p className="text-center text-sm text-gray-300 mb-6 uppercase">
        Copyright© {new Date().getFullYear()}. Made by 🤍
        <button
          className="text-blue-400 underline ml-2 hover:text-blue-600 transition duration-300"
          onClick={() => (window.location.href = "https://example.com")} // Replace with actual navigable link
        >
          {props.ownerName}
        </button>
      </p>
    </div>
  );
};

export default Footer;
