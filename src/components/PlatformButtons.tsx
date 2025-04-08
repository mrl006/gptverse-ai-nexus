
import React from 'react';
import { Headset, Monitor, Globe, Code, BrainCircuit } from 'lucide-react';

const PlatformButtons = () => {
  const platforms = [
    { name: 'Neural', icon: <BrainCircuit size={20} className="text-[#0ef34b]" /> },
    { name: 'Virtual', icon: <Headset size={20} className="text-[#00aeff]" /> },
    { name: 'Desktop', icon: <Monitor size={20} className="text-[#d946ef]" /> },
    { name: 'Global', icon: <Globe size={20} className="text-[#ff7e33]" /> },
    { name: 'Matrix', icon: <Code size={20} className="text-[#f5d038]" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {platforms.map((platform, index) => (
        <button
          key={index}
          className="bg-[#06101a]/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2
                   hover:bg-[#06101a]/80 hover:border-[#0ef34b]/30 transition-all duration-300
                   flex items-center space-x-2 group"
        >
          <div className="group-hover:scale-110 transition-transform">
            {platform.icon}
          </div>
          <span className="text-white/80 group-hover:text-white transition-colors font-mono text-sm">
            {platform.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PlatformButtons;
