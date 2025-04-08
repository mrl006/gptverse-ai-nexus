
import React from 'react';

const PlatformButtons = () => {
  const platforms = [
    { 
      name: 'WINDOWS', 
      logo: "/lovable-uploads/036d2014-a227-4c86-9012-5b41e5b410df.png",
      text: "Get it on",
    },
    { 
      name: 'VR SIDEQUEST', 
      logo: "/lovable-uploads/ac74e1a5-170c-423f-ad5d-a55f457eb113.png",
      text: "Get it on",
    },
    { 
      name: 'WEBGL', 
      logo: "/lovable-uploads/c0972b74-a825-46fc-9c47-2ed7becdcfd7.png",
      text: "Get it on",
    },
    { 
      name: 'AI HUB', 
      logo: "/lovable-uploads/4ddf33e4-28a3-4d8d-9591-d5dac1c022bb.png",
      text: "Get it on",
    },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 mb-12 w-full max-w-6xl mx-auto px-4">
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
            <div className="w-12 h-12 bg-[#040812]/70 rounded-full flex items-center justify-center border border-[#0ef34b]/30 shadow-[0_0_10px_rgba(14,243,75,0.2)] group-hover:shadow-[0_0_15px_rgba(14,243,75,0.3)] transition-all duration-300 overflow-hidden p-1">
              <img 
                src={platform.logo} 
                alt={platform.name} 
                className="w-full h-full object-contain"
              />
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
