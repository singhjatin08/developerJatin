import React from "react";
import lines from "../assets/img/lines.png";

export default function About() {
  return (
    <section className="about" id="about">
      <img src={lines} alt="decorative lines" className="lines" />
      <div className="container">
        <h3 className="sub-heading text-center">About Jatin Singh</h3>
        <h1 className="section-heading-dark main-h1 pb-4">
          Full Stack Web Developer in Delhi NCR
        </h1>

        <div className="about-content">
          <p>
            I’m <strong>Jatin Singh</strong>, a Full Stack Web Developer in Delhi NCR with <strong>4+ years of experience</strong> in building modern, responsive, scalable, and SEO-friendly websites. My expertise lies in building full stack web applications using frontend and backend technologies. I believe in writing clean, maintainable code, along with fast loading speed and strong responsive UI/UX design.
          </p>

          <p>
            As an experienced <strong>Full Stack Web Developer</strong>, I work on HTML, CSS, Tailwind CSS, JavaScript, jQuery, React JS, Bootstrap, and WordPress for frontend development, and Core PHP, Laravel, CodeIgniter, and MySQL Database for backend development. I have hands-on experience in payment gateway integration, such as Razorpay, PayU, and CCAvenue, ensuring secure online transactions. Additionally, I have strong expertise in designing and implementing RESTful APIs for seamless system communication.
          </p>

          <p>
            I handle domain and hosting setup using platforms like GoDaddy and Hostinger, along with website deployment and configuration. I also follow mobile-first design principles and focus on building clean, user-friendly interfaces.
          </p>

          <p>
            My portfolio includes projects such as business websites (RERA Filing, Global Opportunities, Marwari Horses, Devtechera, Digitalapss, Branding Idiots, EngageAI, Dr. Rajeev Sood), job portal development (The Rapid Recruiters), registration portals with payment gateway integration, eCommerce website development (Tanifuji), and custom CRM & CMS applications.
          </p>

          <p>
            Let’s collaborate to build your next <strong>website development project</strong>—fast, secure, and optimized for search engines. Whether you're a startup, business, or agency, I’m here to help you scale with a high-performing online presence.
          </p>

          <p>
            Let’s work together to create your next professional website. It will be fast, secure, and designed for growth. I am available for <strong>full-time, part-time, and freelance opportunities</strong>, and I’m ready to contribute to your projects.
          </p>
        </div>
      </div>
    </section>
  );
}
