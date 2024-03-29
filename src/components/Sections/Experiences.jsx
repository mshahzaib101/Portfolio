import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2020 - Present",
    degree: "Vaionex, US — Senior Full-stack developer, Lead developer",
    content:
      "I am working as a Full-stack and Lead developer at Vaionex since last 2 years. Vaionex provides blockchain solutions.",
    bullets: [
      `Boosted company revenue by 10x through development and implementation
      of successful NFT exchanges and Crypto wallets`,
      `Improved productivity by streamlining processes and developing automation
      tools, resulting in a 20% increase in efficiency`,
      `Designed and delivered scalable and secure full-stack solutions,
consistently meeting project timelines and budgets`,
      `Mentored and trained junior developers, providing guidance and support to
enhance their skills and improve project outcomes`,
    ],
    link: "https://www.vaionex.com/",
  },
  {
    id: 2,
    year: "2019 - 2020",
    degree: "Upwork — MERN-stack developer",
    content: `I was Top Rated freelancer on Upwork in 2020. I worked with 20+ clients mostly
      working on Next.js and express.js.`,
    profileLink1: "https://www.upwork.com/freelancers/~0195d000babe5a3a30",
    profileLink2: "https://www.fiverr.com/mshahzaib101",
    bullets: [
      `Successfully delivered 12+ applications using Agile methodologies,
      consistently exceeding project expectations for timeline and budget`,
      `Provided top-notch quality to 20+ clients, building strong relationships and
      demonstrating technical expertise`,
      `Designed, coded and modified 10+ enterprise web applications
      from layout to function, according to the client's specifications`,
    ],
  },
  {
    id: 2,
    year: "2018 - 2019",
    degree: "Hasati, US — MERN-stack developer",
    content:
      "I was working as a MERN developer in Hasati, mostly working on React.js and Node.js, building admin panels that handle realtime telecom data.",
    link: "https://hasati.com/",
    bullets: [
      `Created dynamic and interactive websites resulting in a 40% increase in
      sales revenue through improved user experience and traffic`,
      `Designed user-friendly admin panels on React.js, boosting customer
      purchases by 20% through optimization of check-out page`,
      `Developed dynamic and interactive websites that ensured high traffic, page views,
      and User Experience, resulting in 40% increase in sales revenue`,
    ],
  },
  {
    id: 10,
    year: "2017 - 2018",
    degree: "Axiom, Pakistan — Front-end developer",
    content:
      "I was working as a front-end developer in Axiom. I was mostly working using MERN Stack.",
    link: "https://axiom-mentor.com/",
    bullets: [
      "Performed quality control testing using Jest/Enzyme.",
      "Collaborated with external programmers to coordinate delivery of 6 new software applications.",

      "Developed full-stack web applications which processed, analyzed, and rendered data visually.",
    ],
  },
  {
    id: 10,
    year: "2016 - 2017",
    degree: "Freelancer — MERN-stack developer",
    content:
      "As a freelancer, I have worked on 12+ different projects during this period. I was working mostly on the backend side using Nodejs, Java, and Python.",
    bullets: [
      "Developed mobile-responsive and accessible websites, ensuring optimal user experience on all devices",
      "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3, which improved user satisfaction by 31%.",

      "Designed and developed backend servers using Java and Python for different clients.",
    ],
  },
  {
    id: 9,
    year: "2019 - 2020",
    degree: "DSC Lead — Google Developer Student Clubs",
    content: `As a DSC lead, I was conducting workshops and meetups related to computer programming and software engineering in my institution`,
  },
  {
    id: 7,
    year: "2020",
    degree: "Bachelor's in computer science",
    content: "University of People",
  },

  {
    id: 3,
    year: "2016",
    degree: "Cambridge O’levels and A’levels UK GCSE",
    content: "University of Cambridge",
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
