import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import mySQL from "../assets/experience/mysql.jpeg";
import bootstrap from "../assets/experience/bootstrap.png";
import Node from "../assets/experience/node.png";
import Express from "../assets/experience/express.jpeg";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: html,
      alt: "HTML5",
      title: "HTML",
      style: "shadow-orange-500/20",
    },
    {
      id: 2,
      src: css,
      alt: "CSS3",
      title: "CSS",
      style: "shadow-blue-500/20",
    },
    {
      id: 3,
      src: javascript,
      alt: "Javascript",
      title: "Javascript",
      style: "shadow-yellow-500/20",
    },
    {
      id: 4,
      src: reactImage,
      alt: "React JS",
      title: "React",
      style: "shadow-blue-300/20",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500/20",
    },
    {
      id: 6,
      src: github,
      alt: "GitHub",
      title: "GitHub",
      style: "shadow-gray-100/20",
    },
    {
      id: 7,
      src: mySQL,
      alt: "mySql",
      title: "mySQL",
      style: "shadow-indigo-500/20",
    },
    {
      id: 8,
      src: bootstrap,
      alt: "Bootstrap",
      title: "Bootstrap",
      style: "shadow-purple-600/20",
    },
    {
      id: 9,
      src: Node,
      alt: "Node",
      title: "Node Js",
      style: "shadow-green-500/20",
    },
    {
      id: 10,
      src: Express,
      alt: "express",
      title: "Express Js",
      style: "shadow-yellow-600/20",
    },
  ];

  return (
    <div
      name="techs"
      className="flex items-center bg-gradient-to-b from-neutral-900 via-neutral-900 to-zinc-800 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-400 p-2">
            TECHS
          </p>
          <p className="py-6 text-gray-500">
            Below are some tools/technologies that I use very often.
            <br />
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {techs.map(({ id, src, alt, style, title }) => (
            <div
              key={id}
              className={`flex flex-col justify-center items-center shadow-lg hover:scale-110 duration-300 rounded-full w-40 h-40 md:w-28 md:h-28 m-3 md:m-5 opacity-80 hover:opacity-100 ${style}`}
            >
              <img src={src} alt={alt} className="w-11 md:w-16 mx-auto" />
              <p className="text-gray-400 mt-1">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techs;
