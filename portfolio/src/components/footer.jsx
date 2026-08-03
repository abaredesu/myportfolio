// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className="border-t border-white/15 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-5 lg:py-6">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:flex-row lg:justify-between">
        {/* Left Section - Figma Design */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[0.6rem] sm:text-[0.65rem] lg:text-[0.7rem] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/50">
          <svg 
            className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-white/40" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M8.5 3.5L3 6.5V18L8.5 21L14 18L19.5 21L21 20.2V8.8L14 5.5L8.5 8.5L5 7.2M8.5 8.5V18M14 5.5V15M19.5 21V10.5" />
          </svg>
          <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
            Designed in Figma
          </span>
        </div>

        {/* Right Section - Tech Stack */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 text-[0.55rem] sm:text-[0.6rem] lg:text-[0.65rem] font-normal uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/40">
          {/* React */}
          <span className="flex items-center gap-1 sm:gap-1.5 hover:text-white/70 transition-colors duration-300 cursor-default">
            <svg 
              className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-white/30" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            React
          </span>
          
          <span className="text-white/15 text-[0.4rem] sm:text-[0.5rem]">✦</span>
          
          {/* JavaScript */}
          <span className="flex items-center gap-1 sm:gap-1.5 hover:text-white/70 transition-colors duration-300 cursor-default">
            <svg 
              className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-white/30" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            JavaScript
          </span>
          
          <span className="text-white/15 text-[0.4rem] sm:text-[0.5rem]">✦</span>
          
          {/* Tailwind CSS */}
          <span className="flex items-center gap-1 sm:gap-1.5 hover:text-white/70 transition-colors duration-300 cursor-default">
            <svg 
              className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-white/30" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            Tailwind CSS
          </span>
          
          <span className="text-white/15 text-[0.4rem] sm:text-[0.5rem]">✦</span>
          
          {/* Vite */}
          <span className="flex items-center gap-1 sm:gap-1.5 hover:text-white/70 transition-colors duration-300 cursor-default">
            <svg 
              className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-white/30" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            Vite
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;