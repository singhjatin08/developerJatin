import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import profile from "../assets/img/Developer-Jatin_profile-pic.webp";
import lines from "../assets/img/lines.png";

import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init(); 

export default function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "Web Developer",
        "Professional Coder",
        "Web Designer",
        "PHP Developer",
      ],
      autoStart: true,
      loop: true,
    });

    return () => typewriter.stop();
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <img src={lines} alt="lines" id="lines" />
          <div className="row">
            <div className="col-md-7 banner-content">
              <div>
                <p className="welcome-heading">Welcome to my world</p>
                <h1 className="banner-heading">
                  <span>Hi! I am </span>
                  <span className="text-orange">Jatin Singh</span>
                  <br /> a <span ref={typewriterRef}>WEB DEVELOPER</span>
                </h1>
                <p className="banner-description">
                  {/* With my expertise as the best web developer in Noida, I
                  specialize in front-end technologies including HTML/CSS,
                  JavaScript/jQuery, React JS, and Bootstrap to create intuitive
                  and responsive web interfaces. In addition to my front-end
                  skills, I excel in backend development using Core PHP and
                  Codeigniter, ensuring robust database management and seamless
                  functionality. */}
                  My expertise lies in front-end technologies such as HTML/CSS, JavaScript/jQuery, React JS, and Bootstrap, which I leverage to craft intuitive and responsive web interfaces as a Web Designer. In addition to front-end development, I excel in backend development using Core PHP and Codeigniter, ensuring robust database management and seamless functionality as a Web Developer or Professional Coder.
                </p>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div className="banner-profile">
                <img src={profile} alt="Developer Jatin Profile Pic" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About /> 
      <Skills/>
      <Experience/>
      <Education/>
      <Portfolio/>
      <Contact/>
    </>
  );
}
