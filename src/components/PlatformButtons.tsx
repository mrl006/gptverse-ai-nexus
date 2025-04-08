
import React from 'react';
import { Button } from '@/components/ui/button';

const PlatformButtons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
      <a 
        href="#"
        className="platform-button bg-[#1D1849] rounded-xl overflow-hidden flex items-center p-0 transition-all hover:scale-105 hover:shadow-lg hover:shadow-gptv-neon-blue/20"
      >
        <div className="h-14 w-14 flex items-center justify-center">
          <img 
            src="/lovable-uploads/6acb1d46-209d-4450-b48e-5ec82fa59a10.png" 
            alt="VR Sidequest" 
            className="w-10 h-10"
          />
        </div>
        <div className="text-white text-left px-2">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">VR SIDEQUEST</div>
        </div>
      </a>

      <a 
        href="#"
        className="platform-button bg-[#1D1849] rounded-xl overflow-hidden flex items-center p-0 transition-all hover:scale-105 hover:shadow-lg hover:shadow-gptv-neon-blue/20"
      >
        <div className="h-14 w-14 flex items-center justify-center">
          <img 
            src="/lovable-uploads/e5ebce5d-7c0d-44be-9b2f-c0219df5d657.png" 
            alt="Windows" 
            className="w-10 h-10"
          />
        </div>
        <div className="text-white text-left px-2">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">WINDOWS</div>
        </div>
      </a>

      <a 
        href="#"
        className="platform-button bg-[#1D1849] rounded-xl overflow-hidden flex items-center p-0 transition-all hover:scale-105 hover:shadow-lg hover:shadow-gptv-neon-blue/20"
      >
        <div className="h-14 w-14 flex items-center justify-center">
          <img 
            src="/lovable-uploads/dba72d8f-2091-4bb0-898a-3e7b02d665ce.png" 
            alt="AI HUB" 
            className="w-10 h-10"
          />
        </div>
        <div className="text-white text-left px-2">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">AI HUB</div>
        </div>
      </a>

      <a 
        href="#"
        className="platform-button bg-[#1D1849] rounded-xl overflow-hidden flex items-center p-0 transition-all hover:scale-105 hover:shadow-lg hover:shadow-gptv-neon-blue/20"
      >
        <div className="h-14 w-14 flex items-center justify-center">
          <img 
            src="/lovable-uploads/27ee7e18-ad05-4a4d-b4a4-2b12e35ff8d3.png" 
            alt="WebGL" 
            className="w-10 h-10"
          />
        </div>
        <div className="text-white text-left px-2">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">WEBGL</div>
        </div>
      </a>
    </div>
  );
};

export default PlatformButtons;
