import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Notifications', path: '/notification' },
    { name: 'Members', path: '/members' },
    { name: 'Feedback', path: '/feedback' },
    // { name: 'Menu', path: '/menu' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center text-lg font-bold uppercase tracking-wide text-gray-900"> Messify
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm uppercase transition-colors duration-300 ${isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-800 hover:text-blue-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-gray-800 transform transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 transform transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-blue-100 flex flex-col justify-center items-center transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
      >
        <ul className="space-y-8 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={toggleMenu}
                className="text-2xl uppercase tracking-wider text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
