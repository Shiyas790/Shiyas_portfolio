import React from "react";
import Braintumor from "../assets/portfolio/Braintymor.jpg";
import Stegenography from "../assets/portfolio/steganography.jpeg";
import Ecommerce from "../assets/portfolio/ecommerce.png";
import Portfolio from "../assets/portfolio/portfolio.png";
import Simplelogin from "../assets/portfolio/simplelogin.jpeg";
import Bookmyshow from "../assets/portfolio/bookmyshow.png";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Braintumor,
      title: "BRAIN TUMOR DETECTION AND STAGE CLASSIFICATION",
      descr: "Brain tumor detection and stage classification using Convolutional Neural Networks (CNNs) involve the application of deep learning techniques to analyze medical imaging data, such as magnetic resonance images (MRI) of the brain.",
      link: "https://sandeshkatwal.com.np",
      github: "https://github.com/Shiyas790",
      skills: ["Python", "MySQL", "Javascript"],
    },

    {
      id: 2,
      src: Stegenography,
      title: "LSB IMAGE STEGANOGRAPHY",
      descr: "The main objective is to hide the secret message or image inside the image using Least Significant Bit (LSB) technique. To protect and provide security for the hidden message or image, Advanced Encryption Standard (AES) Algorithm is used LSB (least Sygnificant Bit)image steganography can be combined with AES. ",
      link: "https://analogclock-sandesh.netlify.app",
      github: "https://github.com/Shiyas790",
      skills: ["HTML", "CSS", "Python"],
    },  
    {
      id: 3,
      src: Ecommerce,
      title: "E-COMMERCE WEB APPLICATION",
      descr: "An e-commerce web application project is a digital storefront that facilitates transactions between buyers and sellers. The primary goal of an e-commerce site is to sell goods and services online.  Developed a Ecommerce platform using React.js as front-end and Node.js with express for the back-end",
      link: "https://mobilecalculator-sandesh.netlify.app",
      github: "https://github.com/Shiyas790",
      skills: ["React", "Node.js", "Javascript"],
    },
    {
      id: 4,
      src: Portfolio,
      title: "My portfolio",
      descr:
        "A portolio created with simple html and bootstrap  compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training,experiences, internships, and contact info   ",
      link: "https://github.com/deadclown09/Realtime-Chat-WebAppp",
      github: "https://github.com/Shiyas790",
      skills: ["Html", "Bootstrap"],
    },
    {
      id: 5,
      src: Simplelogin,
      title: "Simple Social Login Integration",
      descr:
        "SimpleLogin is a browser integration that allows users to sync passwords and settings across devices.To integrate with password managers, click the profile picture icon in your SimpleLogin account to verify.",
      link: "https://a-creative-kind.vercel.app",
      github: "https://github.com/Shiyas790",
      skills: ["Node js", "MongoDB", "Html", ],
    },
    {
      id: 6,
      src: Bookmyshow,
      title: "A clone of Bookmyshow webapplication",
      descr:
        "SimpleLogin is a browser integration that allows users to sync passwords and settings across devices.To integrate with password managers, click the profile picture icon in your SimpleLogin account to verify.",
      link: "https://a-creative-kind.vercel.app",
      github: "https://github.com/Shiyas790",
      skills: ["Html", "MongoDB", "CSS", "express js"],
    },
  ];
  return (
    <div
      name="projects"
      className="flex justify-center items-center bg-gradient-to-b from-zinc-800 via-neutral-900 to-neutral-900 w-full text-white min-h-screen"
    >
      <div className="w-[85vw] p-2 md:p-4 mx-auto flex flex-col justify-center h-full">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-400">
            PROJECTS
          </p>
          <p className="py-6 text-gray-400">
            Check out some of my main projects here.
            <br />
            {/* (You can find all other minor or ongoing projects in my GitHub
            profile 🤓) */}
          </p>
        </div>
        <div>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7"> */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {projects?.map(
              ({ id, src, title, descr, link, github, skills }) => (
                <div
                  key={id}
                  className="flex flex-col rounded-md shadow-md hover:scale-[1.02] duration-300 bg-white bg-opacity-[0.03]  drop-shadow shadow-zinc-700 min-w-[280px] w-[30%] p-3"
                >
                  <div className="group relative">
                    <img
                      src={src}
                      alt=""
                      width={1280}
                      height={720}
                      className="rounded-md group-hover:1px"
                    />
                    <span className="w-full h-full absolute top-0 right-0 p-2 flex flex-col gap-2 items-end rounded-md text-gray-100 bg-black bg-opacity-30  opacity-0 group-hover:opacity-100 duration-300">
                      <a href={link} rel="noreferrer" target="_blank">
                        <HiOutlineExternalLink
                          size={30}
                          className="cursor-pointer"
                        />
                      </a>
                      <a href={github} rel="noreferrer" target="_blank">
                        <VscGithub size={30} className="cursor-pointer" />
                      </a>
                    </span>
                  </div>
                  <div className="my-3">
                    <a href={link} rel="noreferrer" target="_blank">
                      <h3 className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-base font-bold cursor-pointer hover:underline">
                        {title}
                      </h3>
                    </a>
                    <p className="text-sm text-gray-100">{descr}</p>
                  </div>
                  <div className="flex flex-row text-sm text-gray-100 overflow-hidden">
                    {console.log(skills)}
                    {skills?.map((skill) => (
                      <span
                        key={id}
                        className="px-2 py-0.5 mr-1.5 w-fit rounded-[4px] text-xs font-semibold text-black bg-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
