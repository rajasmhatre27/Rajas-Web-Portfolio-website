import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Rajas Portfolio</div>

        {/* Hamburger Menu Button - Visible on Mobile */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">✖</span> // Close icon
          ) : (
            <span className="text-3xl">☰</span> // Hamburger icon
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Connect Me Button (Hidden on Mobile) */}
        <button className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
          Connect Me
        </button>
      </div>

      {/* Mobile Menu - Visible when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-black text-center py-4 space-y-4">
          <a href="#home" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#service" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#project" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a>

          {/* Mobile Connect Button */}
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full mt-4">
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
