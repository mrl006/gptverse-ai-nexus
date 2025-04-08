
import React from 'react';
import { Monitor, Headset, Globe, BrainCircuit } from 'lucide-react';

const PlatformButtons = () => {
  const platforms = [
    { 
      name: 'WINDOWS', 
      icon: <Monitor size={24} className="text-white" />, 
      text: "Get it on WINDOWS",
    },
    { 
      name: 'VR SIDEQUEST', 
      icon: <Headset size={24} className="text-white" />, 
      text: "Get it on VR SIDEQUEST",
    },
    { 
      name: 'WEBGL', 
      icon: <Globe size={24} className="text-white" />, 
      text: "Get it on WEBGL",
    },
    { 
      name: 'AI HUB', 
      icon: <BrainCircuit size={24} className="text-white" />, 
      text: "Get it on AI HUB",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 w-full max-w-4xl mx-auto">
      {platforms.map((platform, index) => (
        <button
          key={index}
          className="bg-[#040812] border-2 border-[#0ef34b] rounded-lg
                    px-4 py-3 hover:bg-[#071420] transition-all duration-300
                    flex items-center gap-3 min-w-[220px] md:min-w-[230px] relative"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            {platform.icon}
          </div>
          
          <span className="text-white font-mono text-md">
            <div className="text-xs text-[#0ef34b]/70">Get it on</div>
            <div className="font-bold">{platform.name}</div>
          </span>
        </button>
      ))}
    </div>
  );
};

export default PlatformButtons;
