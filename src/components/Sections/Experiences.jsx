import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2020 - Present",
    degree: "Vaionex, US — Senior Full-stack developer, Lead developer",
    content:
      "I have been working as a Full Stack and Lead Developer at Vaionex for the past three years, where I lead the development of innovative AI and Blockchain solutions.",
    bullets: [
      "Increased company revenue by 10x by developing and launching successful NFT exchanges and crypto wallets.",
      "Streamlined processes and built automation tools, boosting productivity by 20%.",
      "Designed and delivered scalable, secure full-stack solutions, consistently meeting project deadlines and staying within budget.",
      "Mentored and trained junior developers, enhancing their skills and contributing to improved team performance and project success.",
    ],

    link: "https://www.vaionex.com/",
  },
  {
    id: 2,
    year: "2019 - 2020",
    degree: "Upwork — MERN-stack developer",
    profileLink1: "https://www.upwork.com/freelancers/~0195d000babe5a3a30",
    profileLink2: "https://www.fiverr.com/mshahzaib101",

    content: `I was recognized as a Top Rated freelancer on Upwork in 2020, having worked with over 20 clients, primarily focusing on Next.js and Express.js projects.`,
    bullets: [
      "Successfully delivered 12+ applications using Agile methodologies, consistently exceeding client expectations in terms of timelines and budgets.",
      "Provided exceptional service to over 20 clients, building strong relationships through technical expertise and reliability.",
      "Designed, developed, and optimized 10+ enterprise web applications, from layout to functionality, tailored to meet specific client requirements.",
    ],
  },
  {
    id: 2,
    year: "2018 - 2019",
    degree: "Hasati, US — MERN-stack developer",
    link: "https://hasati.com/",

    content:
      "I worked as a MERN developer at Hasati, specializing in React.js and Node.js to build admin panels for managing real-time telecom data.",
    bullets: [
      "Developed dynamic, interactive websites, leading to a 40% increase in sales revenue by enhancing user experience and driving traffic.",
      "Designed user-friendly admin panels using React.js, optimizing the checkout process and boosting customer purchases by 20%.",
      "Built responsive, high-performance websites that significantly increased traffic, page views, and overall user satisfaction, contributing to a 40% rise in revenue.",
    ],
  },
  {
    id: 10,
    year: "2017 - 2018",
    degree: "Axiom, Pakistan — Front-end developer",
    link: "https://axiom-mentor.com/",
    content:
      "I worked as a Front-End Developer at Axiom, primarily using the MERN stack to deliver high-quality web applications.",

    bullets: [
      "Performed rigorous quality control testing using Jest and Enzyme to ensure bug-free code.",
      "Collaborated with external developers to successfully deliver 6 new software applications on time.",
      "Developed full-stack web applications that processed, analyzed, and visually rendered complex data, enhancing user engagement.",
    ],
  },
  {
    id: 10,
    year: "2016 - 2017",
    degree: "Freelancer — MERN-stack developer",
    content:
      "As a freelancer, I worked on 12+ diverse projects, primarily focusing on backend development using Node.js, Java, and Python.",

    bullets: [
      "Developed mobile-responsive and accessible websites, ensuring a seamless user experience across all devices.",
      "Built user interfaces with modern JavaScript frameworks, HTML5, and CSS3, enhancing user satisfaction by 31%.",
      "Designed and developed robust backend servers using Java and Python for various client projects.",
    ],
  },
  {
    id: 9,
    year: "2019 - 2020",
    degree: "DSC Lead — Google Developer Student Clubs",
    content:
      "As a DSC Lead, I organized and conducted workshops and meetups focused on computer programming and software engineering at my institution.",
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
