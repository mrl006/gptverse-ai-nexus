
import React from 'react';

const PlatformButtons = () => {
  const platforms = [
    { 
      name: 'WINDOWS', 
      logo: "/lovable-uploads/6eca13b2-a069-4441-bf8c-22a4e9a8fe86.png",
      text: "Get it on",
    },
    { 
      name: 'VR SIDEQUEST', 
      logo: "/lovable-uploads/45ae9a90-7bdf-4333-8369-846d93de1cf0.png",
      text: "Get it on",
    },
    { 
      name: 'WEBGL', 
      logo: "/lovable-uploads/4dbe8711-87c1-4255-9585-24d3145300d6.png",
      text: "Get it on",
    },
    { 
      name: 'AI HUB', 
      logo: "/lovable-uploads/053c9a26-917a-46cd-a510-68db71cf90ab.png",
      text: "Get it on",
    },
  ];

  return (
    <div className="flex overflow-x-auto scrollbar-none py-2 mb-6 w-full max-w-6xl mx-auto px-4 gap-4">
      {platforms.map((platform, index) => (
        <button
          key={index}
          className="bg-[#040812]/60 backdrop-blur-md
                    border border-white/10 rounded-lg
                    px-4 py-3 hover:bg-[#040812]/80 transition-all duration-300
                    flex items-center justify-center gap-3 min-w-[180px]
                    relative overflow-hidden group flex-1"
        >
          {/* Minimal glassmorphism effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-30"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          {/* Inner glow effect - reduced */}
          <div className="absolute inset-0 bg-[#0ef34b]/0 group-hover:bg-[#0ef34b]/5 transition-all duration-500 rounded-lg"></div>
          
          {/* Button Content */}
          <div className="relative z-10 flex items-center justify-center gap-3 w-full">
            <div className="w-12 h-12 bg-[#040812]/80 rounded-full flex items-center justify-center 
                          border border-white/20
                          transition-all duration-500 overflow-hidden p-1">
              <img 
                src={platform.logo} 
                alt={platform.name} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <span className="text-white font-mono">
              <div className="text-xs text-white/60">{platform.text}</div>
              <div className="font-bold tracking-wider">{platform.name}</div>
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PlatformButtons;
