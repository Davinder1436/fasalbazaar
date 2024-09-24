import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-black font-bold text-2xl">
          <a href="#">Logo</a>
        </div>
        <button
          className="text-gray-500 md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div
          className={`md:flex md:items-center md:space-x-6 absolute md:static w-full md:w-auto bg-white md:bg-transparent top-full left-0 md:top-auto transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 md:max-h-screen opacity-0 md:opacity-100 invisible md:visible'
          }`}
        >
          {['Home', 'About', 'Services'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block md:inline-block text-gray-400 py-2 px-4 hover:text-black transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block md:inline-block text-white bg-black py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
