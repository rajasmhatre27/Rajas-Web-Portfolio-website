import React from "react";
import HeroImage from "../assets/rajas-photo.jpg";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6" id="about">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center md:space-x-16">
        
        {/* Profile Image */}
        <img
          src={HeroImage}
          alt="Rajas Mhatre"
          className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-lg border-4 border-green-400"
        />
        
        {/* About Content */}
        <div className="flex-1 mt-10 md:mt-0 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I'm <span className="text-green-400 font-semibold">Rajas Mhatre</span>, a passionate Full-Stack Developer focused on building 
            high-performance, user-friendly web applications. With expertise in both frontend & backend, I enjoy solving complex 
            problems and crafting seamless digital experiences.
          </p>

          {/* Resume Details */}
          <div className="mt-8 text-gray-300 space-y-4">
            <p><span className="font-semibold text-green-400">🎓 Education:</span> B.E. Computer, Pillai HOC College, Mumbai</p>
            <p><span className="font-semibold text-green-400">💼 Experience:</span> Frontend Developer Intern at Rashtriya Chemicals & Fertilizers Ltd</p>
            <p><span className="font-semibold text-green-400">📜 Certifications:</span> MERN Development (NxtWave), React.js (Udemy)</p>
            <p><span className="font-semibold text-green-400">🛠 Skills:</span> JavaScript, React.js, Node.js, MongoDB, Express.js, Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
