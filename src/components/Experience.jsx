import React from "react";
import html from "/Users/akshitgoyal/Desktop/one-portfolio-main 2/src/t/experience/html.png";
import css from "/Users/akshitgoyal/Desktop/one-portfolio-main 2/src/t/experience/css.png";
import javascript from "/Users/akshitgoyal/Desktop/one-portfolio-main 2/src/t/experience/javascript.png";
import reactImage from "/Users/akshitgoyal/Desktop/one-portfolio-main 2/src/t/experience/react.png";
import tailwind from "/Users/akshitgoyal/Desktop/one-portfolio-main 2/src/t/experience/tailwind.png";
import node from "/Users/akshitgoyal/Desktop/one-portfolio-main 2/src/t/experience/node.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Tailwind",
      src: tailwind,
    },
    {
        id: 6,
        title: "Node",
        src: node,
      },
  ];

  return (
    <div name="skills" className="w-full h-auto flex flex-col  bg-black dark:bg-white text-white dark:text-black pt-40 pb-40 ">
      <div className=" w-full h-full max-w-screen-lg mx-auto p-4">
        <div className="flex items-center justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center">Skills</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {experience.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-6 shadow-lg odd:shadow-blue-400 even:shadow-rose-400 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <img src={src} width="64px" height="64px" alt="randomness" />
              <h3 className="font-light mt-4 text-center">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
