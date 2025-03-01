import React from "react";
import HeroImage from "../assets/rajas-photo.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <img
            src={HeroImage}
            alt="Rajas"
            className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-green-400"
          />
          
          {/* About Content */}
          <div className="flex-1 mt-10 md:mt-0">
            <p className="text-lg leading-relaxed text-gray-300">
              I'm Rajas Mhatre, a passionate Full-Stack Developer with a focus on building dynamic, 
              responsive, and user-centric web applications. I have a strong foundation in both frontend 
              and backend technologies, and I am always excited to tackle new challenges to improve user experiences.
            </p>

            {/* Resume Details */}
            <div className="mt-12 text-gray-300 space-y-4">
              <p><span className="font-semibold text-green-400">Education:</span> Bachelors of Engineering in Computer Science, Pillai HOC College of Engineering and Technology, Mumbai</p>
              <p><span className="font-semibold text-green-400">Experience:</span> Frontend Developer Intern at Rashtriya Chemicals Fertilizers Ltd, Mumbai</p>
              <p><span className="font-semibold text-green-400">Certifications:</span> Full Stack MERN Development (NxtWave CCBP - Ongoing), React.js Course (Udemy)</p>
              <p><span className="font-semibold text-green-400">Skills:</span> JavaScript, React.js, Node.js, MongoDB, Express.js, REST APIs, Tailwind CSS, Material UI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
