import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 max-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-400">
            ABOUT
          </p>
        </div>
        <div className=" text-xl text-justify pt-3 pb-3">
          <div>
          <p>
            As a passionate Full Stack Developer, I bring a solid foundation with understanding of the entire web development process. Experienced in both front-end and back-end technologies. Adept at collaborating with cross-functional teams to analyze requirements and develop innovative, scalable, and efficient applications. Seeking a challenging role to leverage my technical skills, problem-solving abilities, and passion for creating  high-quality software solutions within established timelines.
          </p>
          </div>
          <br />
          <br />
          <div className="grid sm:grid-cols-2 text-justify ml-24">
                    <ul>
                        <li><b className="text-indigo-400">AGE:</b> &nbsp; 22</li>
                        <li><b className="text-indigo-400">FREELANCE:</b> &nbsp;AVAILABLE </li>
                        <li><b className="text-indigo-400">PHONE:</b> &nbsp;+91 7902205276 </li>
                    </ul>
                    <ul>
                        <li><b className="text-indigo-400">RESIDENCE:</b>&nbsp;ERNAKULAM </li>
                        <li><b className="text-indigo-400">ADDRESS:</b>&nbsp;PALAKKAD,KERALA </li>
                        <li><b className="text-indigo-400">E-MAIL:</b>&nbsp;shiyazb5@gmail.com </li>
                    </ul>
                </div>
        </div>
      </div>
    </div>
  );
};

export default About;
