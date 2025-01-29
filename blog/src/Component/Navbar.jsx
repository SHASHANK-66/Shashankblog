import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBlog, FaGithub, FaTwitter, FaBars, FaLinkedin } from "react-icons/fa";
import { FcAbout, FcServices } from "react-icons/fc";
import { MdContactMail } from "react-icons/md";
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarItem = [
    { path: "/", icon: <FaHome title="Home" />, name: "Home" },
    { path: "/Blog", icon: <FaBlog title="Blog" />, name: "Blog" },
    { path: "/About", icon: <FcAbout title="About" />, name: "About" },
    { path: "/Contact", icon: <MdContactMail title="Contact" />, name: "Contact" },
    { path: "/Service", icon: <FcServices title="Services" />, name: "Services" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <nav className="px-5 py-4 flex justify-between items-center w-full">
        {/* Logo */}
        <a
          className="text-3xl font-semibold text-gray-100 transition-all duration-300 ease-in-out text-shadow-lg hover:text-green-400"
          href="/"
        >
          Green<span className="text-green-400">🌿</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slg font-medium">
          {navbarItem.map(({ path, icon, name }) => (
            <li
              key={path}
              className="hover:text-green-400 transition-all duration-200"
            >
              <NavLink to={path} title={name} className={({ isActive }) =>
                isActive
                  ? "text-blue-300 underline decoration-2 decoration-green-500 flex items-center gap-2 font-semibold"
                  : "text-white hover:text-green-400 hover:underline flex items-center gap-2"
              }>
                {icon}
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Social Media Links */}
        <div className="hidden md:flex gap-4 items-center">
          <a
            className="hover:text-green-400 transition-all duration-200"
            href="https://www.linkedin.com/in/shashankn07"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-green-400 transition-all duration-200"
            href="https://github.com/SHASHANK-66"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-green-400 transition-all duration-200"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
            Log In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative h-full w-20">
          <button onClick={toggleMobileMenu} className="cursor-pointer">
            <FaBars className="w-25 h-6 text-gray-100" />
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="absolute top-full left-0 bg-gray-900 text-white mt-2 py-3 px-5 w-25 shadow-lg rounded-lg overflow-hidden z-50">
              {navbarItem.map(({ path, icon, name }) => (
                <li
                  key={path}
                  className="text-sm font-medium text-gray-100 hover:text-green-400 transition-all duration-200 flex items-center gap-2 py-2"
                >
                  <NavLink to={path} title={name} className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 underline decoration-2 decoration-green-500 flex items-center gap-2 font-semibold"
                      : "text-white hover:text-green-400 hover:underline flex items-center gap-2"
                  }>
                    {icon}
                    <span>{name}</span>
                  </NavLink>
                </li>
              ))}
              {/* Social Media Links for Mobile */}
              <div className="flex gap-4 justify-center mt-4 w-full">
                <a
                  className="hover:text-green-400 transition-all duration-200 w-10 text-xl"
                  href="https://www.linkedin.com/in/shashankn07"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:text-green-400 w-10 transition-all duration-200 text-xl"
                  href="https://github.com/SHASHANK-66"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="hover:text-green-400 w-10 transition-all duration-200 text-xl"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
              <button className="bg-red-500 flex justify-center text-white py-2 rounded-lg w-15 h-15 hover:bg-red-600 ml-0 p-5 mr-10 mt-3">
                Log In
              </button>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;