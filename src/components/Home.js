import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core"; 
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
        "PHP Web Developer",
        "Professional Web Designer",
        "WordPress Developer",
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
                <div className="banner-heading">
                  <span>Hi! I am </span>
                  <span className="text-orange">Jatin Singh</span>
                  <br /> a <span ref={typewriterRef}>WEB DEVELOPER</span>
                </div>
                <p className="banner-description">
                I’m Jatin Singh, a passionate php web developer in delhi ncr, specializing in front-end (HTML, CSS, JavaScript) and back-end (PHP, CodeIgniter). Check out my portfolio of responsive, dynamic websites designed to boost your online presence.
                </p>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div className="banner-profile">
                <img src={process.env.PUBLIC_URL + '/assets/img/Developer-Jatin_profile-pic.webp'} alt="Web Developer Jatin Portfolio" />
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
