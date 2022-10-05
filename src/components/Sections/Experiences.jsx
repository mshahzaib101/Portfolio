import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2020 - Present",
    degree: "Vaionex, US — Full-stack developer, Lead developer",
    content:
      "I am working as a Full-stack and Lead developer at Vaionex since last 2 years. Vaionex provides blockchain solutions.",
    bullets: [
      `Design and establish user-friendly websites, including secured Nfts trading platforms and crypto wallets, resulting in a 25%
increase in user clicks and subsequently 33% in customer purchases`,
      `Establish an interactive and dynamic websites that guarantees high traffic, page views, and maximum
user experience, generating a 45% increase in the company's clients`,
      `Proactively liaised with the design team and project managers to ensure efficient and timely delivery
of significant projects`,
    ],
    link: "https://www.vaionex.com/",
  },
  {
    id: 2,
    year: "2019 - 2020",
    degree: "Freelancer at Upwork / Fiverr",
    content: `I was Top Rated freelancer on Upwork in 2020. I worked with 20+ clients mostly
      working on Next.js and express.js.`,
    profileLink1: "https://www.upwork.com/freelancers/~0195d000babe5a3a30",
    profileLink2: "https://www.fiverr.com/mshahzaib101",
    bullets: [
      `Created a Mobile Responsive Web app with CSS
      Flexbox that allowed cross- platform accessibility to the
      website on any device with primary use on mobile`,
      `Followed standard industry web development methodologies by
      adhering to proven design specifications and design techniques`,
      `Designed, coded and modified 20+ enterprise web applications
      from layout to function, according to the client's specifications`,
    ],
  },
  {
    id: 2,
    year: "2019 - 2019",
    degree: "Hasati, US — MERN-stack developer",
    content:
      "I was working part-time as a MERN developer in Hasati. I was mostly working on React.js and Node.js. It was a remote job.",
    link: "https://hasati.com/",
    bullets: [
      `Designed and developed user-friendly admin panels on React.js, including an
      optimized check-out page that increased user clicks, and subsequently customer
      purchases by 20%`,
      `Fixed bugs from existing websites and implemented enhancements that significantly
      improved web functionality and speed`,
      `Developed dynamic and interactive websites that ensured high traffic, page views,
      and User Experience, resulting in 40% increase in sales revenue`,
    ],
  },
  {
    id: 10,
    year: "2018 - 2019",
    degree: "Axiom, Pakistan — Front-end developer",
    content:
      "I was working part-time as a front-end developer in Axiom. I was mostly working on React.js.",
    link: "https://axiom-mentor.com/",
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
    year: "2018",
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
