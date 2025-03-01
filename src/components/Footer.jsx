import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Rajas Mhatre</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in Mumbai, India, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
           
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rajas Mhatre. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
           
            <a href="https://x.com/rajas_2704" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/rajas-mhatre-390666224" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rajasmhatre27" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
