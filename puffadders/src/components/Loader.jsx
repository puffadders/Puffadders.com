import React, { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";

const Loader = () => {
  const { darkMode } = useTheme();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 200);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const spinAnimation = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin 1s linear infinite;
    }
  `;

  return (
    <>
      <style>{spinAnimation}</style>
      
      <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${darkMode ? 'bg-[#0A1929]' : 'bg-white'}`}>
        <div className="relative mb-8">
          <h1 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'}`}>
            PUFFADDERS
          </h1>
          <div 
            className="absolute -bottom-2 left-1/4 right-1/4 h-0.5"
            style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
          ></div>
        </div>

        <div className="relative mb-6">
          <div className={`w-16 h-16 border-2 rounded-full ${darkMode ? 'border-white/20' : 'border-gray-300'}`}></div>
          <div 
            className={`absolute top-0 left-0 w-16 h-16 border-2 rounded-full animate-spin-slow ${darkMode ? 'border-white' : 'border-[#0A1929]'}`}
            style={{ borderTopColor: 'transparent' }}
          ></div>
        </div>

        <div className={`text-sm tracking-widest mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          LOADING {progress}%
        </div>

        <div className={`w-48 h-0.5 rounded-full overflow-hidden ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
          <div 
            className={`h-full rounded-full transition-all duration-300 ${darkMode ? 'bg-white' : 'bg-[#0A1929]'}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
