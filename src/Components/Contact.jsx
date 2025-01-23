
import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";

const Contact = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission process
    setTimeout(() => {
      alert("Thank you for contacting us");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="text-center py-16 bg-gray-50" id="contact">
      <h1
        className="text-4xl font-semibold text-blue-700 mb-8"
        data-aos="zoom-in-down"
      >
        {props.btn}
      </h1>
      <p className="text-lg text-gray-600 mb-12" data-aos="zoom-in-down">
        Feel free to contact me by submitting the form below, and I will get
        back to you as soon as possible.
      </p>
      <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 max-w-sm p-4 shadow-lg rounded-lg bg-white"
          data-aos="flip-left"
        >
          <img
            src={props.imgsrc}
            alt="techimg"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Form Section */}
        <div
          className="w-full lg:w-1/2 max-w-md p-8 bg-white shadow-lg rounded-lg"
          data-aos="flip-up"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center uppercase">
            Get In Touch
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            autoComplete="off"
          >
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Message Textarea */}
            <textarea
              rows="7"
              cols="43"
              name="message"
              placeholder="Enter Your Message"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
              disabled={loading}
            >
              {loading ? "Loading..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
