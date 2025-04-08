
import React from 'react';
import { Monitor, Cpu, Globe, BrainCircuit } from 'lucide-react';

const PlatformButtons = () => {
  const platforms = [
    { 
      name: 'WINDOWS', 
      icon: <Monitor size={24} className="text-[#0ef34b]" />, 
      text: "Get it on",
    },
    { 
      name: 'VR SIDEQUEST', 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0ef34b]">
        <path d="M13 4.5V6.5C13 7.33 13.67 8 14.5 8H16.5V9C16.5 9.83 17.17 10.5 18 10.5H19.5V14.5H18C17.17 14.5 16.5 15.17 16.5 16V17H14.5C13.67 17 13 17.67 13 18.5V20.5H10V18.5C10 17.67 9.33 17 8.5 17H6.5V16C6.5 15.17 5.83 14.5 5 14.5H3.5V10.5H5C5.83 10.5 6.5 9.83 6.5 9V8H8.5C9.33 8 10 7.33 10 6.5V4.5H13Z" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>, 
      text: "Get it on",
    },
    { 
      name: 'WEBGL', 
      icon: <Globe size={24} className="text-[#0ef34b]" />, 
      text: "Get it on",
    },
    { 
      name: 'AI HUB', 
      icon: <BrainCircuit size={24} className="text-[#0ef34b]" />, 
      text: "Get it on",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-12 w-full max-w-6xl mx-auto">
      {platforms.map((platform, index) => (
        <button
          key={index}
          className="bg-[#06101a]/60 backdrop-blur-xl
                    border border-[#0ef34b]/30 rounded-lg
                    px-6 py-4 hover:bg-[#071420]/80 transition-all duration-300
                    flex items-center gap-4 flex-1 min-w-[200px] lg:min-w-0
                    relative overflow-hidden group"
        >
          {/* Glassmorphism glow effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0ef34b]/10 to-transparent opacity-50"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0ef34b]/20 via-transparent to-[#0ef34b]/10 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Button Content */}
          <div className="relative z-10 flex items-center justify-center gap-4 w-full">
            <div className="w-10 h-10 bg-[#040812] rounded-full flex items-center justify-center border border-[#0ef34b]/30 shadow-[0_0_10px_rgba(14,243,75,0.2)]">
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
