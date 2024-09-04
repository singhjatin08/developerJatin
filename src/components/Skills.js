import React, { useState, useEffect, useRef } from "react";
import html from "../assets/img/skills/html.webp";
import css from "../assets/img/skills/css.webp";
import js from "../assets/img/skills/js.webp";
import jQuery from "../assets/img/skills/jquery.webp";
import ajax from "../assets/img/skills/ajax.webp";
import json from "../assets/img/skills/json.webp";
import corephp from "../assets/img/skills/core-php.webp";
import codeigniter from "../assets/img/skills/codeignitor.webp";
import bootstrap from "../assets/img/skills/bootstrap.webp";
import wordpress from "../assets/img/skills/wordpress.webp";
import react from "../assets/img/skills/react.webp";
import mysql from "../assets/img/skills/mysql.webp";
import lines from "../assets/img/lines.png";

export default function Skills() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillsSectionRef = useRef(null);
  if (skillsSectionRef.current) {
    var skillPosition = skillsSectionRef.current.offsetTop - '200'; 
  }

  return (
    <>
      <section className="skills" id="skills-section"  ref={skillsSectionRef}>
        <img src={lines} alt="lines" className="lines" />
        <img src={lines} alt="lines" className="lines2" />
        <div className="container">
          <h2 className="section-heading-orange">TECHNICAL SKILLS</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="skill-container">
                <h2>SKILLS</h2>
                <div className="skill-icon-container">
                  {[html, css, js, jQuery, ajax, react].map((src, index) => {
                    const angle = (index / 6) * 2 * Math.PI;
                    const radius = 100;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    const style = {
                      transform: scrollPosition < skillPosition ? `translate(0px, 0px)` :`translate(${x}px, ${y}px)`,
                      opacity: "1",
                      transition: "all 0.5s ease",
                    };

                    return (
                      <div className="img-box" key={index} style={style}>
                        <img src={src} alt={`Skill ${index}`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-container">
                <h2>SKILLS</h2>
                <div className="skill-icon-container">
                  {[
                    json,
                    corephp,
                    codeigniter,
                    bootstrap,
                    wordpress,
                    mysql,
                  ].map((src, index) => {
                    const angle = (index / 6) * 2 * Math.PI;
                    const radius = 100;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    const style = {
                      transform: scrollPosition < skillPosition ? `translate(0px, 0px)` :`translate(${x}px, ${y}px)`,
                      opacity: "1",
                      transition: "all 0.5s ease",
                    };

                    return (
                      <div className="img-box" key={index} style={style}>
                        <img src={src} alt={`Skill ${index}`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">HTML / CSS</span>
                <p className="skillQuality"><span className="w-95"></span></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">Java Script / jQuery</span>
                <p className="skillQuality"><span className="w-85"></span></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">AJAX / JSON</span>
                <p className="skillQuality"><span className="w-90"></span></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">Bootstrap</span>
                <p className="skillQuality"><span className="w-98"></span></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">Wordpress</span>
                <p className="skillQuality"><span className="w-90"></span></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">REACT JS</span>
                <p className="skillQuality"><span className="w-80"></span></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">MYSQL / Database</span>
                <p className="skillQuality"><span className="w-90"></span></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">CORE PHP </span>
                <p className="skillQuality"><span className="w-90"></span></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="skillCard">
                <span className="skillName">Codeignitor</span>
                <p className="skillQuality"><span className="w-80"></span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
