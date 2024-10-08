import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Shahzaib",
  aboutMe:
    "Hi there. I am a Full Stack Web Developer with a focus on React.js | Next.js | AWS | Node.js | Fastify.js | Development for the last 6 years. Apart from that, I have two years of experience as a Lead Developer with five developers working directly under me.",
  aboutMe2:
    "One of my specialties is taking an idea from scratch and creating a full-fledged platform.",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      // style={{ backgroundImage: "url(/images/hero.png)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">
          <span style={{ display: "block" }}> {herosectionData.aboutMe}</span>

          <span style={{ display: "block" }}>{herosectionData.aboutMe2}</span>
        </p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
