'use client';
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-lg rounded-3xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">EduPath Library</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="/ "
            className="text-lg hover:text-blue-400 transition-colors duration-300"
          >
            Library
          </a>
          <a
            href="/roadmap"
            className="text-lg hover:text-blue-400 transition-colors duration-300"
          >
            Roadmap for Your Career
          </a>
          <a
            href="/contact"
            className="text-lg hover:text-blue-400 transition-colors duration-300"
          >
            Contact Support
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="/ "
                className="block text-lg hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Library
              </a>
            </li>
            <li>
              <a
                href="/roadmap"
                className="block text-lg hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Roadmap for Your Career
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-lg hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact Support
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
