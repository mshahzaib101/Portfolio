import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2020 - Present",
    degree: "Vaionex, US — Full-stack developer, Lead developer",
    content:
      "I am working as a Full-stack and Lead developer at Vaionex since last 2 years. Vaionex provides blockchain solutions.",
    link: "https://www.vaionex.com/",
  },
  {
    id: 2,
    year: "2019 - 2020",
    degree: "Freelancer at Upwork / Fiverr",
    content:
      "I started my freelance career as Fulltime work. I worked with 20+ clients mostly building Single Page Applications on React and providing bug-fixing services.",
    profileLink1: "https://www.upwork.com/freelancers/~0195d000babe5a3a30",
    profileLink2: "https://www.fiverr.com/mshahzaib101",
  },
  {
    id: 2,
    year: "2019 - 2019",
    degree: "Hasati, US — MERN-stack developer",
    content:
      "I was working part-time as a MERN developer in Hasati. I was mostly working on React.js and Node.js. It was a remote job.",
    link: "https://hasati.com/",
  },
  {
    id: 2,
    year: "2018 - 2019",
    degree: "Axiom, Pakistan — Front-end developer",
    content:
      "I was working part-time as a front-end developer in Axiom. I was mostly working on React.js.",
    link: "https://axiom-mentor.com/",
  },
  {
    id: 2,
    year: "2018 - 2020",
    degree: "Cambridge A’levels UK GCSE",
    content:
      "I did my Cambridge Alevel UK GCSE in Computer Science and Accounting from Alpha College.",
  },
  {
    id: 3,
    year: "2018",
    degree: "Cambridge O’levels UK GCSE",
    content: "I did my Cambridge Olevel UK GCSE in Accounting and Finance",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
