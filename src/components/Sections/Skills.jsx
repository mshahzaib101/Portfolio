import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",
  progressData: [
    {
      id: 1,
      name: "JavaScript / Typescript",
      percentage: 85,
    },
    {
      id: 3,
      name: "React",
      percentage: 90,
    },
    {
      id: 13,
      name: "Next.js",
      percentage: 95,
    },
    {
      id: 18,
      name: "Tailwind CSS | Shadcn",
      percentage: 75,
    },
    {
      id: 14,
      name: "Fastify.js",
      percentage: 75,
    },
    {
      id: 4,
      name: "Node.js | Deno",
      percentage: 80,
    },
    {
      id: 15,
      name: "OpenAI apis",
      percentage: 85,
    },
    {
      id: 16,
      name: "Firebase",
      percentage: 90,
    },

    {
      id: 20,
      name: "Supabase",
      percentage: 75,
    },
    {
      id: 17,
      name: "Redis",
      percentage: 70,
    },
    {
      id: 18,
      name: "Elastic Search",
      percentage: 65,
    },
    {
      id: 5,
      name: "Express.js",
      percentage: 70,
    },
    {
      id: 6,
      name: "Gatsby.js",
      percentage: 90,
    },
    {
      id: 7,
      name: "AWS",
      percentage: 60,
    },

    {
      id: 19,
      name: "Google Cloud",
      percentage: 65,
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
      percentage: 65,
    },
    {
      id: 11,
      name: "Java",
      percentage: 60,
    },
    {
      id: 10,
      name: "Mailchimp / HubSpot",
      percentage: 70,
    },
    {
      id: 21,
      name: "Docker",
      percentage: 80,
    },
    {
      id: 22,
      name: "Python",
      percentage: 60,
    },
    {
      id: 12,
      name: "Blockchain",
      percentage: 60,
    },
  ],
};

function Skills() {
  return (
    <>
      <div className="mt-2">
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
