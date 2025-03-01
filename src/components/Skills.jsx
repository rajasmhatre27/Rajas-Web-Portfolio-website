import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiMui, SiPostman, SiFirebase, SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { label: "HTML & CSS", icon: <FaHtml5 className="text-orange-500 text-5xl" />, width: "w-10/12" },
    { label: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" />, width: "w-11/12" },
    { label: "React.js", icon: <FaReact className="text-blue-400 text-5xl" />, width: "w-11/12" },
    { label: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" />, width: "w-9/12" },
    { label: "Express.js", icon: <SiExpress className="text-gray-400 text-5xl" />, width: "w-9/12" },
    { label: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" />, width: "w-8/12" },
    { label: "MySQL", icon: <SiMysql className="text-blue-500 text-5xl" />, width: "w-8/12" },
    { label: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500 text-5xl" />, width: "w-9/12" },
    { label: "Material UI", icon: <SiMui className="text-blue-400 text-5xl" />, width: "w-8/12" },
    { label: "Git & GitHub", icon: <FaGithub className="text-white text-5xl" />, width: "w-10/12" },
    { label: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" />, width: "w-7/12" },
    { label: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" />, width: "w-8/12" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-6">
              {skill.icon && <div>{skill.icon}</div>}
              <div className="flex-1">
                <label className="font-bold text-gray-200 text-2xl">{skill.label}</label>
                <div className="bg-gray-800 rounded-full h-4 mt-3">
                  <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.width}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
