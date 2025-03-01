import React, { useEffect, useRef } from "react";
import bookStoreImage from "../assets/bookstore.png";
import ecommerceImage from "../assets/ecom.png";
import imdbCloneImage from "../assets/ibdb.png";

const projects = [
  {
    id: 1,
    name: "Book Store Application",
    description: "A full-stack MERN bookstore application allowing users to browse, purchase, and sell books online.",
    technologies: "MERN Stack",
    image: bookStoreImage,
    github: "https://github.com/rajasmhatre27/Book-Store-App",
    live: "https://book-store-app-mocha.vercel.app/"
  },
  {
    id: 2,
    name: "Ecommerce Website using ReactJS",
    description: "A modern eCommerce website built using ReactJS and TailwindCSS for seamless shopping experience.",
    technologies: "ReactJS, TailwindCSS",
    image: ecommerceImage,
    github: "https://github.com/rajasmhatre27/Reactjs-Ecom",
    live: "https://reactjs-ecom-tau.vercel.app/"
  },
  {
    id: 3,
    name: "IMDB Clone",
    description: "A movie browsing application inspired by IMDB, built using ReactJS.",
    technologies: "ReactJS",
    image: imdbCloneImage,
    github: "https://github.com/rajasmhatre27/imdb-like-project",
    live: "https://comforting-pithivier-73d02e.netlify.app/"
  }
];

const Projects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const keywords = ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "TailwindCSS"];
    const particles = [];

    class Particle {
      constructor(x, y, text, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    const createParticles = () => {
      for (let i = 0; i < keywords.length; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 1.5;
        const speedY = (Math.random() - 0.5) * 1.5;
        particles.push(new Particle(x, y, keywords[i], speedX, speedY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center overflow-hidden" id="project">
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-50"></div>
      <div className="relative container mx-auto px-8 md:px-16 lg:px-24 text-center w-full">
        <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          My Projects
        </h2>
        <div className="flex justify-center gap-6 w-full max-w-7xl overflow-x-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 border border-gray-700 hover:border-green-400 w-72 flex-shrink-0"
            >
              <div className="overflow-hidden rounded-lg h-40 flex items-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2 text-green-400">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description || project.technologies}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.live}
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
                <a
                  href={project.github}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
