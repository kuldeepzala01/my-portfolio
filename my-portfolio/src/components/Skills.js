import { ChipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Services() {
  const skills = [
    {
      title: "Web Development",
      description: "Creating responsive and visually appealing websites.",
      icon: "2Service.jpg", 
    },
    {
      title: "Mobile App Development",
      description: "Building native and cross-platform mobile applications.",
      icon: "971.jpg",
    },
    {
      title: "Software Development",
      description: "Developing custom software solutions for various industries.",
      icon: "software-development-icon.png",
    },
    {
      title: "General Programming",
      description: "Coding and problem-solving in various programming languages.",
      icon: "html-css-collage-concept.jpg", 
    },
  ];

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Explore the range of services I offer to help you achieve your goals.
          </p>
        </div>

        {/* New div to display services */}
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {/* Image */}
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="w-12 h-12 rounded mr-4"
                />
                <div>
                  {/* Title */}
                  <h2 className="text-white text-lg font-medium mb-2">
                    {skill.title}
                  </h2>
                  {/* Description */}
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
