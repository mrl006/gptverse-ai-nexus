
import React from 'react';
import { Headset, Monitor, Globe, BrainCircuit } from 'lucide-react';

const PlatformButtons = () => {
  const platforms = [
    { 
      name: 'AI HUB', 
      icon: <BrainCircuit size={24} className="text-[#0ef34b]" />, 
      text: "Get it on AI HUB",
      bgColor: "bg-[#040812]",
      borderColor: "border-[#0ef34b]",
      hoverBg: "group-hover:bg-[#0ef34b]/10"
    },
    { 
      name: 'VR SIDEQUEST', 
      icon: <Headset size={24} className="text-[#00aeff]" />, 
      text: "Get it on VR SIDEQUEST",
      bgColor: "bg-[#040812]",
      borderColor: "border-[#00aeff]",
      hoverBg: "group-hover:bg-[#00aeff]/10"
    },
    { 
      name: 'WEBGL', 
      icon: <Globe size={24} className="text-[#d946ef]" />, 
      text: "Get it on WEBGL",
      bgColor: "bg-[#040812]",
      borderColor: "border-[#d946ef]",
      hoverBg: "group-hover:bg-[#d946ef]/10"
    },
    { 
      name: 'WINDOWS', 
      icon: <Monitor size={24} className="text-[#ff7e33]" />, 
      text: "Get it on WINDOWS",
      bgColor: "bg-[#040812]",
      borderColor: "border-[#ff7e33]",
      hoverBg: "group-hover:bg-[#ff7e33]/10"
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 w-full max-w-4xl mx-auto">
      {platforms.map((platform, index) => (
        <button
          key={index}
          className={`${platform.bgColor} backdrop-blur-md border-2 ${platform.borderColor} rounded-full 
                    px-8 py-4 hover:border-opacity-80 transition-all duration-300
                    flex items-center gap-3 group min-w-[280px] md:min-w-[300px] relative overflow-hidden`}
        >
          {/* Background glow effect */}
          <div className={`absolute inset-0 opacity-0 ${platform.hoverBg} transition-opacity duration-500 group-hover:opacity-100`}></div>
          
          {/* Icon with glow effect */}
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 border border-white/10 group-hover:scale-110 transition-transform duration-300">
            {platform.icon}
            <div className="absolute inset-0 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300">
              {platform.icon}
            </div>
          </div>
          
          {/* Text with shimmer effect on hover */}
          <span className="relative z-10 text-white/90 group-hover:text-white transition-colors font-mono text-md tracking-wider">
            {platform.text}
          </span>
          
          {/* Subtle right arrow indicator */}
          <div className="ml-auto relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PlatformButtons;
