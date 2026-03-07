import React from "react";
import { useTheme } from "../ThemeContext";

function NotFound() {
  const { darkMode } = useTheme();

  return (
    <>
      <div className={`min-h-screen flex flex-col items-center justify-center text-center px-6 ${darkMode ? 'bg-[#0A1929]' : 'bg-white'}`}>
        <h1 className={`text-8xl font-bold mb-4 ${darkMode ? 'gradient-text' : 'text-[#0A1929]'}`}>404</h1>
        <h3 className={`text-2xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Oops! The page you're looking for doesn't exist.
        </h3>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
          Please check the URL or return to the homepage.
        </p>
      </div>
    </>
  );
}

export default NotFound;