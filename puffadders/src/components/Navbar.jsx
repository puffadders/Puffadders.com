import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/joinus", label: "Join Us" },
    { path: "/store", label: "Store" },
    { path: "/partner", label: "Partner" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`${darkMode ? 'bg-[#0A1929] border-white/10' : 'bg-white border-gray-200 shadow-sm'} border-b sticky top-0 z-50 px-6 py-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className={`h-12 w-12 rounded-full ${darkMode ? 'bg-white border-white/30' : 'bg-[#0A1929] border-gray-300'} flex items-center justify-center overflow-hidden border-2 shadow-lg`}>
            <img
              src="/logo/puffadders logo.png"
              alt="Puffadders"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/48x48/0A1929/FFFFFF?text=P";
              }}
            />
          </div>
          <span className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} tracking-wide`}>
            Puffadders
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? darkMode
                    ? "text-white bg-white/10"
                    : "text-[#0A1929] bg-gray-100"
                  : darkMode
                    ? "text-gray-300 hover:text-white hover:bg-white/5"
                    : "text-gray-600 hover:text-[#0A1929] hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-2 p-2.5 rounded-lg transition-all duration-300 ${
              darkMode
                ? "text-yellow-400 hover:bg-white/10"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg transition-colors duration-300 ${
              darkMode
                ? "text-yellow-400 hover:bg-white/10"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2.5 rounded-lg transition-colors duration-300 ${
              darkMode
                ? "text-gray-300 hover:text-white hover:bg-white/5"
                : "text-gray-600 hover:text-[#0A1929] hover:bg-gray-50"
            }`}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 pb-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? darkMode
                    ? "text-white bg-white/10"
                    : "text-[#0A1929] bg-gray-100"
                  : darkMode
                    ? "text-gray-300 hover:text-white hover:bg-white/5"
                    : "text-gray-600 hover:text-[#0A1929] hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


