
import React from 'react';
import { Headset, Monitor, Globe, Code } from 'lucide-react';

const PlatformButtons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
      <a 
        href="#"
        className="platform-button bg-[#1D1849] rounded-xl overflow-hidden flex items-center p-0 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
      >
        <div className="h-14 w-14 flex items-center justify-center bg-green-500/20">
          <Headset size={24} className="text-green-400" />
        </div>
        <div className="text-white text-left px-3">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">VR SIDEQUEST</div>
        </div>
      </a>

      <a 
        href="#"
        className="platform-button bg-[#1D1849] rounded-xl overflow-hidden flex items-center p-0 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
      >
        <div className="h-14 w-14 flex items-center justify-center bg-green-500/20">
          <Monitor size={24} className="text-green-400" />
        </div>
        <div className="text-white text-left px-3">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">WINDOWS</div>
        </div>
      </a>

      <a 
        href="#"
        className="platform-button bg-[#1D1849] rounded-xl overflow-hidden flex items-center p-0 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
      >
        <div className="h-14 w-14 flex items-center justify-center bg-green-500/20">
          <Globe size={24} className="text-green-400" />
        </div>
        <div className="text-white text-left px-3">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">AI HUB</div>
        </div>
      </a>

      <a 
        href="#"
        className="platform-button bg-[#1D1849] rounded-xl overflow-hidden flex items-center p-0 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
      >
        <div className="h-14 w-14 flex items-center justify-center bg-green-500/20">
          <Code size={24} className="text-green-400" />
        </div>
        <div className="text-white text-left px-3">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">WEBGL</div>
        </div>
      </a>
    </div>
  );
};

export default PlatformButtons;
