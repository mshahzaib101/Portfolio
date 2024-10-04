import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/resume.pdf",
  image: "images/profile1.png",
  name: "Muhammad Shahzaib",
  location: "Dubai, UAE/ Karachi, Pakistan",
  birthday: "6 Jan, 2000",
  email: "mshahzaib101ed@gmail.com",
  aboutMe: `I am Shahzaib, Full-stack developer from UAE / Pakistan. I am a highly skilled Full Stack Developer with over 6 years of experience, specializing in JavaScript, Node.js, React, Next.js, and AWS. With a strong background in both frontend and backend technologies, I have led teams and delivered successful projects across Web3, AI, and blockchain domains, using tools like Fastify, Express.js, MongoDB, GCP, OpenAi apis and Firebase.
`,
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
