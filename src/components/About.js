import React from "react";
import lines from "../assets/img/lines.png"

export default function About() {
  return (
    <>
      <section className="about" id="about">
      <img src={lines} alt="lines" className="lines" />
        <div className="container">
          <h1 className="section-heading-dark main-h1 mb-5 pb-4">
           About : Jatin Singh <br/> PHP Web Developer in Delhi NCR
          </h1>
          <div className="about-content">
            <p>I am Jatin Singh, a dedicated PHP Web Developer with a passion for creating dynamic and visually appealing websites residing in Delhi NCR. Over the past 3+ years, I have honed my skills through practical experience and academic achievements, graduating with a Bachelor of Science degree from IGNOU University in 2024.</p>
            <p>My expertise lies in front-end technologies such as HTML/CSS, JavaScript/jQuery, React JS, and Bootstrap, WordPress which I leverage to craft Insightful and responsive web interfaces as a Professional Web Designer and frontend developer. In addition to front-end development, I excel in backend development using Core PHP and Codeigniter, ensuring robust database management and seamless functionality as a Php Web Developer or Professional Web Specialist.</p>
            <p>What sets me apart is my creative flair, enhanced by proficiency in Photoshop, allowing me to design captivating user interfaces and optimize visual content for web applications. I am committed to delivering high-quality projects, focusing on problem-solving, SEO-friendly coding practices, and User friendly interfaces.</p>
            <p>My PHP Web developer portfolio includes diverse projects like RERA Filing, Shree Media, RV Hospitality, The Rapid Recruiters, Marwari Horses, Engage AI, Growth ITM, and Dr. Rajeev Sood's website. Each project reflects my dedication to innovation and excellence in web development.</p>
          </div>
        </div>
      </section>
    </>
  );
}
