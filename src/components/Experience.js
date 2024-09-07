import React from "react";
import digitalapssLogo from "../assets/img/digitalapss.webp";
import globalLogo from "../assets/img/global-opportunities.webp";
import lines from '../assets/img/lines.png' 
import ituLogo from "../assets/img/ituapt_logo.png"

export default function Experience() {
  return (
    <>
      <section className="experience" id="experience">
      <img src={lines} alt="lines" className="lines" /> 
        <h2 className="section-heading-dark mb-5">Experience</h2>
        <div className="container experience-container">
          <div data-aos="fade-right" data-aos-delay="300"  className="experience-box">
            <div className="experience-box-inner">
              <h2>Web Developer</h2>
              <div className="d-flex justify-content-between">
                <span>
                  Global Opportunities ( Kailash Colony , South Delhi ){" "}
                </span>{" "}
                <span>April 2024 - Now</span>
              </div>
              <ul>
                <li>Seamless API Integration and Development for Ongoing Projects</li>
                <li>Design and develop Web pages for Ad Campaigns</li>
                <li>Upgrade Website & New Module Development </li>
                <li>Database aministration, Error handling, Responsive web desingns while cordinating</li>
                <li>Design and Develop Admin Dashboard for CRM.</li>
                <li><strong>SKILLS -</strong> HTML/CSS, JAVA SCRIPT, JQUERY, REACT JS, BOOTSTRAP, WORDPRESS, CORE PHP, AJAX/JSON, SQL/MYSQL, PHPMYADMIN</li>
              </ul> 
              <div className="company-logo">
                <img src={globalLogo} alt="company logo" />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="300"  className="experience-box">
            <div className="experience-box-inner">
              <h2>Web Designer & Developer</h2>
              <div className="d-flex justify-content-between">
                <span>Digitalapss ( Noida, Sec-8 )</span>
                <span>September 2022 - 10 Jan 2024</span>
              </div>
              <ul>
                <li>Develop backend using Core php, Codeignitor.</li>
                <li>
                  Complete detailed programming and development tasks for front
                  end and backend designing in web projects.
                </li>
                <li>
                  Database aministration, Error handling, Responsive web
                  desingns while cordinating with senior developer
                </li>
                <li>Maintain client projects according to their need.</li>
                <li><strong>SKILLS -</strong> HTML/CSS, JAVA SCRIPT, JQUERY, BOOTSTRAP, WORDPRESS, CORE PHP, AJAX/JSON, CODEIGNITOR, MYSQL</li>
              </ul>
              <div className="company-logo">
                <img src={digitalapssLogo} alt="company logo" />
              </div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="300"  className="experience-box">
            <div className="experience-box-inner">
              <h2>WEB DEVELOPER</h2>
              <div className="d-flex justify-content-between">
                <span>ITU FOUNDATION ( Barakhamba Road , Delhi ) </span>{" "}
                <span>August 2021 - June 2022</span>
              </div>
              <ul>
                <li>Proficient in creating static and dynamic web pages.</li>
                <li>Develop project concepts and maintain optimal workflow.</li>
                <li>
                  Complete detailed programming and development tasks for front
                  end and backend designing in web projects.
                </li>
                <li><strong>SKILLS -</strong> HTML/CSS, JAVA SCRIPT, JQUERY, BOOTSTRAP, WORDPRESS, CORE PHP, AJAX/JSON, CODEIGNITOR, MYSQL</li>
              </ul>
              <div className="company-logo">
                <img
                  src={ituLogo}
                  alt="ITU APT Foundation logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
