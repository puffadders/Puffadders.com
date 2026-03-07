import React from "react";
import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { darkMode } = useTheme();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/puffadders",
      label: "GitHub",
    },
    {
      icon: <FaDiscord />,
      url: "https://discord.gg/SdnKjuN2Ny",
      label: "Discord",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/company/puffadders/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className={`${darkMode ? 'bg-[#0A1929] border-white/10' : 'bg-gray-50 border-gray-200'} border-t mt-auto transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-[#0A1929]'} transition-colors duration-300 text-xl`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
            <span>&copy; {currentYear} Puffadders Community.</span>
          </div>
        </div>

        <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-200'} text-center`}>
          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-400'} text-xs`}>
            All rights reserved. Build . Solve . Impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
