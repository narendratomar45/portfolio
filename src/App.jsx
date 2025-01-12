import { useEffect, useState } from "react";
import "./index.css";

import tech from "./Image/tech.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "./Components/Loading";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header
        ownerName="Narendra Tomar"
        fileName="projects"
        contant="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
      />

      <About btn="contact" />
      <Skills />

      <h1
        className="aboutme userText"
        id="project"
        style={{ textAlign: "center", marginBottom: "80px" }}
        data-aos={"zoom-in-down"}
      >
        Projects
      </h1>
      <p className="aboutinfor" data-aos={"zoom-in-down"}>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <div className="pro">
        <Project />
      </div>
      <Review />
      <Contact btn="contact" imgsrc={tech} />

      <Footer
        ownerName="Narendra Tomar"
        contant="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
      />
    </>
  );
};
export default App;
