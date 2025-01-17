/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  // Set the initial theme based on localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isOpen, setIsOpen] = useState(false);

  // Apply the theme on component mount
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const setLightTheme = () => {
    setTheme('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Save the theme to localStorage
  };

  const setDarkTheme = () => {
    setTheme('dark');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Save the theme to localStorage
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:w-1/4 bg-white dark:bg-gray-800 p-6 shadow-lg">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 md:hidden">JobPort</h2>
        <button onClick={toggleMenu} className="text-gray-900 dark:text-white md:hidden mb-4">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-8 text-center md:text-left text-gray-900 dark:text-white hidden md:block">JobPort</h2>
          <div className="flex space-x-4 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-600 dark:text-gray-300 hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-600 dark:text-gray-300 hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-600 dark:text-gray-300 hover:text-blue-700" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 dark:text-gray-300 hover:text-black" />
            </a>
          </div>

          <ul className="space-y-4 text-center md:text-left text-gray-900 dark:text-white">
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/categories" onClick={toggleMenu}>Categories</Link>
            </li>
            <li>
              <Link to="/search" onClick={toggleMenu}>Search</Link>
            </li>
            <li>
              <Link to="/archive" onClick={toggleMenu}>CertificateArchive</Link>
            </li>
            <li>
              <Link to="/ImageArchive" onClick={toggleMenu}>ImageArchive</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/myproject" onClick={toggleMenu}>MyProject</Link>
            </li>
            <li>
              <Link to="/download" onClick={toggleMenu}>download</Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center space-x-4 md:justify-start">
          <button onClick={setLightTheme}>
            <FaSun className="text-gray-600 dark:text-gray-300" />
          </button>
          <button onClick={setDarkTheme}>
            <FaMoon className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
