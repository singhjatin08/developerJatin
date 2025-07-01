import React from "react";
import lines from "../assets/img/lines.png";

export default function About() {
  return (
    <section className="about" id="about">
      <img src={lines} alt="decorative lines" className="lines" />
      <div className="container">
        <h1 className="section-heading-dark main-h1 pb-4">
          Best Web Developer in Delhi – Jatin Singh
        </h1>

        <div className="about-content">
          <p>
            I’m <strong>Jatin Singh</strong>, a <strong>professional web developer in Delhi NCR</strong> with 3+ years of experience in building modern, responsive, and SEO-friendly websites. My focus is on delivering clean code, fast-loading pages, and strong UI/UX that help businesses grow online.
          </p>

          <p>
            As a <strong>PHP developer in Delhi</strong>, I work on both frontend and backend using <strong>HTML, CSS, JavaScript, jQuery, React JS, Bootstrap, and WordPress</strong> on the frontend, and <strong>PHP, Laravel, CodeIgniter, and MySQL</strong> for backend development. I also integrate <strong>payment gateways</strong> like Razorpay, PayU, and CCAvenue to enable secure online transactions.
          </p>

          <p>
            I assist clients with everything from <strong>domain and hosting setup</strong> (using GoDaddy, Hostinger, etc.) to deployment, ensuring full control over their digital presence. My work also involves <strong>mobile-first design</strong> principles and creative UI designs.
          </p>

          <p>
            My portfolio includes successful projects like <em>RERA Filing, Shree Media, RV Hospitality, Rapid Recruiters, Marwari Horses, Engage AI, Growth ITM, Navrang Aroma Candles, Devtechera, Branding Idiots</em>, and <em>Dr. Rajeev Sood</em>. Each reflects my commitment to quality, performance, and client satisfaction.
          </p>

          <h4 className="pt-3">
            Looking for the best web designer or PHP developer in Delhi?
          </h4>
          <p>
            Let’s collaborate to build your next website – fast, secure, and optimized for search engines. Whether you're a startup, business, or agency, I’m here to help you scale with a high-performing online presence.
          </p>
          <a href="#contact"><button className="btn btn-primary">Contact Me</button></a>
        </div>
      </div>
    </section>
  );
}
