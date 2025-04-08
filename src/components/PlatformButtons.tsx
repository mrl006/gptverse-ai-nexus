
import React from 'react';
import { Headset, Monitor, Globe, Code, BrainCircuit } from 'lucide-react';

const PlatformButtons = () => {
  const platforms = [
    { name: 'AI HUB', icon: <BrainCircuit size={20} className="text-[#0ef34b]" />, text: "Get it on AI HUB" },
    { name: 'VR SIDEQUEST', icon: <Headset size={20} className="text-[#00aeff]" />, text: "Get it on VR SIDEQUEST" },
    { name: 'WEBGL', icon: <Globe size={20} className="text-[#d946ef]" />, text: "Get it on WEBGL" },
    { name: 'WINDOWS', icon: <Monitor size={20} className="text-[#ff7e33]" />, text: "Get it on WINDOWS" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {platforms.map((platform, index) => (
        <button
          key={index}
          className="bg-[#06101a]/60 backdrop-blur-md border border-white/10 rounded-full px-6 py-3
                   hover:bg-[#06101a]/80 hover:border-[#0ef34b]/30 transition-all duration-300
                   flex items-center space-x-3 group"
        >
          <div className="group-hover:scale-110 transition-transform">
            {platform.icon}
          </div>
          <span className="text-white/80 group-hover:text-white transition-colors font-mono text-sm">
            {platform.text}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PlatformButtons;
