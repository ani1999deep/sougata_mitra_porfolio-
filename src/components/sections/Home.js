import "../../css/Home.css";
import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section id="home" className="home-section">
      <RevealOnScroll>
        <div className="home-content">
          <h1 className="home-title">Hi, I'm Sougata Mitra </h1>

          <p className="home-description">
            I am a seasoned QA and Integration Tech Lead with 19 years of
            experience across domains like Insurance, E-Commerce, Hospitality,
            Bio-Med, G2C, B2C, and Automotive. My expertise lies in driving
            end-to-end quality assurance strategies, with a strong focus on
            Salesforce (Service and Sales Cloud), MuleSoft, IIB, and API
            integration testing. I lead high-performing teams to deliver
            reliable, secure, and scalable solutions. From legacy system
            migration to modern DevOps-enabled workflows, I ensure seamless
            delivery with a focus on quality, performance, and business value.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
