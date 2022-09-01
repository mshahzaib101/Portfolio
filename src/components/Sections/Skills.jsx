import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",
  progressData: [
    {
      id: 2,
      name: "HTML & CSS",
      percentage: 90,
    },
    {
      id: 1,
      name: "JavaScript",
      percentage: 85,
    },
    {
      id: 3,
      name: "React",
      percentage: 90,
    },
    {
      id: 4,
      name: "Node.js",
      percentage: 80,
    },
    {
      id: 5,
      name: "Express.js / Fastify.js",
      percentage: 70,
    },
    {
      id: 6,
      name: "Next.js / Gatsby.js",
      percentage: 90,
    },
    {
      id: 7,
      name: "AWS",
      percentage: 60,
    },

    {
      id: 9,
      name: "React Native",
      percentage: 60,
    },

    {
      id: 10,
      name: "MongoDB",
      percentage: 70,
    },

    {
      id: 10,
      name: "GraphQL",
      percentage: 60,
    },
    {
      id: 8,
      name: "Python / Tensorflow / Numpy",
      percentage: 50,
    },

    {
      id: 10,
      name: "Mailchimp / HubSpot",
      percentage: 70,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
