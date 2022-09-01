import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Front-end Development",
    content: "I am expert in React.js, Next.js, Gatsby.js",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Backed-end Development",
    content: "I have expertise in Node.js, Fastify.js, Express.js",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Database Management",
    content:
      "I can design SQL/NoSQL databases using Firebase, AWS, MongoDB, GCP",
    icon: "icon-cloud-upload",
  },

  {
    id: 5,
    name: "Project Management",
    content:
      "I am also doing Project Management at Vaionex using Hubstaff, Clickup, Trello",
    icon: "icon-organization",
  },
  {
    id: 4,
    name: "Project Lead",
    content:
      "I can lead a project and will makes sure a project is carried through",
    icon: "icon-rocket",
  },
  {
    id: 6,
    name: "Testing & Debugging",
    content:
      "I am great at testing and debugging web apps. I can find and fix the errors.",
    icon: "icon-speedometer",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
