import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/rajas-photo.jpg';

const Hero = () => {
  const canvasRef = useRef(null);
  const fullName = "Rajas Mhatre";
  const [typedName, setTypedName] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setTypedName((prev) => prev + fullName[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlink);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.speed = Math.random() * 0.3;
      }

      update() {
        this.y += this.speed;
        if (this.y >= canvas.height) this.reset();
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 150; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 30, 0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden px-6">
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />

      <div className="z-10 flex flex-col items-center text-center w-full" style={{ marginTop: "-100px" }}>
        {/* Profile Image */}
        <motion.img
          src={HeroImage}
          alt="Rajas Mhatre"
          className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Title with Motion Effects */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I'm
          <span className="mx-1"></span> {/* Space between "I'm" and "Rajas Mhatre" */}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
            Rajas Mhatre....
          </span>
          <span className={`text-white ${cursorVisible ? "opacity-100" : "opacity-0"}`}>|</span> {/* Blinking cursor */}
,<span className="block sm:inline"> Full-Stack Developer</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="mt-3 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I build sleek, high-performance, and fully responsive web applications for an exceptional user experience.
        </motion.p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          {/* Contact Me Button - Scrolls to Contact Section */}
          <motion.button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            Contact Me
          </motion.button>

          {/* Resume Download Button */}
          <motion.a
            href="/Rajas_Mhatre_Resume.pdf"
            download="Rajas_Mhatre_Resume.pdf"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg text-center"
            whileHover={{ scale: 1.1 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
