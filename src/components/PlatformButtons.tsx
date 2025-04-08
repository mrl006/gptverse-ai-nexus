
import React from 'react';

const PlatformButtons = () => {
  const platforms = [
    { 
      name: 'WINDOWS', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5.32L10.549 4.34V11.6H3V5.32Z" fill="#0ef34b"/>
          <path d="M3 12.7H10.549V19.968L3 18.984V12.7Z" fill="#0ef34b"/>
          <path d="M11.648 4.197L20.997 2.83V11.6H11.648V4.197Z" fill="#0ef34b"/>
          <path d="M11.648 12.7H20.997V21.442L11.648 20.088V12.7Z" fill="#0ef34b"/>
        </svg>
      ), 
      text: "Get it on",
    },
    { 
      name: 'VR SIDEQUEST', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 4.5V6.5C13 7.33 13.67 8 14.5 8H16.5V9C16.5 9.83 17.17 10.5 18 10.5H19.5V14.5H18C17.17 14.5 16.5 15.17 16.5 16V17H14.5C13.67 17 13 17.67 13 18.5V20.5H10V18.5C10 17.67 9.33 17 8.5 17H6.5V16C6.5 15.17 5.83 14.5 5 14.5H3.5V10.5H5C5.83 10.5 6.5 9.83 6.5 9V8H8.5C9.33 8 10 7.33 10 6.5V4.5H13Z" 
            stroke="#0ef34b" fill="#0ef34b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      text: "Get it on",
    },
    { 
      name: 'WEBGL', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM16.9 17.39C16.64 16.58 15.9 16 15 16H14V13C14 12.45 13.55 12 13 12H7V10H9C9.55 10 10 9.55 10 9V7H12C13.1 7 14 6.1 14 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 18.81 15.91 16.9 17.39Z" fill="#0ef34b"/>
        </svg>
      ), 
      text: "Get it on",
    },
    { 
      name: 'AI HUB', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 14.3C21.4 14.9 20.7 15.4 20 15.8V17.6C21.2 16.9 22.2 16 23 14.8C23 14.8 23 14.7 22.9 14.7C22.7 14.6 22.3 14.4 22 14.3ZM19 17V19.8C12.5 19.8 6.9 15.5 5.3 9.4L9 5.7V6C9 6.6 9.4 7 10 7H12V8.4C12 8.7 12.2 9 12.6 9C12.6 9 12.7 9 12.7 9L14.2 8.3L15.6 13L18.5 11.9C19.1 11.7 19.5 11.1 19.3 10.5C19.2 10.2 19 9.9 18.7 9.8L15.7 8.4V7H18C18.6 7 19 6.6 19 6V1C19 0.4 18.6 0 18 0H10C9.4 0 9 0.4 9 1V4.1L4 9.1V9.8C4 17.9 11 24 19 24H20C20.6 24 21 23.6 21 23V17H19ZM12 4H16V2H12V4Z" fill="#0ef34b"/>
        </svg>
      ), 
      text: "Get it on",
    },
  ];

  return (
    <div className="flex flex-nowrap justify-between gap-4 mb-12 w-full max-w-6xl mx-auto px-4">
      {platforms.map((platform, index) => (
        <button
          key={index}
          className="bg-[#06101a]/60 backdrop-blur-xl
                    border border-[#0ef34b]/30 rounded-lg
                    px-4 py-3 hover:bg-[#071420]/80 transition-all duration-300
                    flex items-center justify-center gap-3 flex-1
                    relative overflow-hidden group"
        >
          {/* Enhanced glassmorphism effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0ef34b]/10 to-transparent opacity-50"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0ef34b]/20 via-transparent to-[#0ef34b]/10 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Inner glow on hover */}
          <div className="absolute inset-0 bg-[#0ef34b]/0 group-hover:bg-[#0ef34b]/5 transition-all duration-500 rounded-lg"></div>
          
          {/* Button Content */}
          <div className="relative z-10 flex items-center justify-center gap-3 w-full">
            <div className="w-10 h-10 bg-[#040812] rounded-full flex items-center justify-center border border-[#0ef34b]/30 shadow-[0_0_10px_rgba(14,243,75,0.2)] group-hover:shadow-[0_0_15px_rgba(14,243,75,0.3)] transition-all duration-300">
              {platform.icon}
            </div>
            
            <span className="text-white font-mono">
              <div className="text-xs text-[#0ef34b]/70">{platform.text}</div>
              <div className="font-bold tracking-wider">{platform.name}</div>
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PlatformButtons;
