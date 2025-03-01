import React, { useEffect, useRef } from 'react';
import HeroImage from '../assets/rajas-photo.jpg';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];

    class Particle {
      constructor(x, y, speedX, speedY, size, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.size = size;
        this.color = color;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 2;
        const speedY = (Math.random() - 0.5) * 2;
        const size = Math.random() * 4 + 1;
        const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        particles.push(new Particle(x, y, speedX, speedY, size, color));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();
  }, []);

  return (
    <div className="relative h-screen bg-black text-white text-center flex flex-col justify-center items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
      <div className="z-10">
        <img
          src={HeroImage}
          alt="Rajas Mhatre"
          className="mx-auto mb-8 w-56 h-56 rounded-full object-cover transform transition-transform duration-300 hover:scale-125 hover:rotate-6 shadow-lg"
        />
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Rajas Mhatre</span>, Full-Stack Developer
        </h1>
        <p className="mt-6 text-xl text-gray-200 leading-relaxed">
          I craft sleek, high-performance, and fully responsive web applications for an exceptional user experience.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-110 px-6 py-3 rounded-full shadow-lg">
            Contact With Me
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-110 px-6 py-3 rounded-full shadow-lg">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
