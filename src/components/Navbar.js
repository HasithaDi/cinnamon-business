import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white p-4" style={{ backgroundColor: '#6a462f' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Fresh Sri Lankan Cinnamon</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/home" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div id="mobile-menu" className="md:hidden mt-2 space-y-2">
          <Link to="/home" className="block px-2 py-1 hover:bg-[#4a3120]">Home</Link>
          <Link to="/about" className="block px-2 py-1 hover:bg-[#4a3120]">About</Link>
          <Link to="/services" className="block px-2 py-1 hover:bg-[#4a3120]">Services</Link>
          <Link to="/contact" className="block px-2 py-1 hover:bg-[#4a3120]">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
