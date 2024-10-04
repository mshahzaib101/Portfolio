import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Front-end Development",
    content:
      "I specialize in React.js, Next.js, and Gatsby.js for building fast, scalable applications.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Backed-end Development",
    content:
      "I specialize in Node.js, Fastify, Express.js and Python for building efficient, scalable server-side applications.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Database Management",
    content:
      "I design and manage both SQL and NoSQL databases using Firebase, AWS, MongoDB, Redis, Supabase and GCP for optimized data handling and scalability.",
    icon: "icon-cloud-upload",
  },

  {
    id: 5,
    name: "Project Management",
    content:
      "I lead project management at Vaionex, utilizing tools like Hubstaff, ClickUp, and Trello to ensure efficient team collaboration and project delivery.",

    icon: "icon-organization",
  },
  {
    id: 4,
    name: "Project Lead",
    content:
      "I excel at leading projects, ensuring they are executed smoothly from concept to completion with a focus on quality and timely delivery.",

    icon: "icon-rocket",
  },
  {
    id: 6,
    name: "Testing & Debugging",
    content:
      "I excel in testing and debugging web applications, efficiently identifying and resolving errors to ensure optimal performance and reliability.",
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
