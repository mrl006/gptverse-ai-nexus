
import React from 'react';
import { Cpu } from 'lucide-react';

const AiServicesHeader: React.FC = () => {
  return (
    <div className="text-center mb-12 relative">
      {/* Alien tech decorations */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(14,243,75,0.1)_0%,rgba(14,243,75,0)_70%)] animate-pulse-slow"></div>
      <div className="absolute top-0 left-1/4 w-1 h-1 bg-[#0ef34b] rounded-full opacity-40 animate-blip"></div>
      <div className="absolute top-10 right-1/4 w-1 h-1 bg-[#00aeff] rounded-full opacity-30 animate-blip" style={{animationDelay: '1s'}}></div>
      
      <div className="flex flex-col items-center">
        {/* Main title with advanced styling */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative">
            <Cpu size={28} className="text-[#0ef34b] animate-pulse-glow" />
            <div className="absolute inset-0 bg-[#0ef34b]/20 blur-lg rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold relative">
            <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
              AI SERVICES
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
          </h2>
        </div>
        
        {/* Powered by banner */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#0ef34b]/50 to-transparent"></div>
          <p className="text-[#0ef34b]/80 text-lg font-mono relative">
            POWERED BY GPTVERSE
            <span className="absolute -bottom-1 left-0 w-full h-px bg-[#0ef34b]/20"></span>
          </p>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00aeff]/50"></div>
        </div>
        
        {/* Main content with distinct separation */}
        <div className="max-w-2xl relative">
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(14,243,75,0)_0%,rgba(14,243,75,0.02)_50%,rgba(14,243,75,0)_100%)] bg-[length:100%_3px] animate-[pulse-slow_6s_linear_infinite] opacity-30"></div>
          
          <p className="text-white/90 text-xl font-semibold mb-2 bg-gradient-to-r from-[#0ef34b]/80 to-[#00aeff]/80 bg-clip-text text-transparent">
            EXPLORE THE GPTVERSE
          </p>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent my-3"></div>
          
          <p className="text-white/70 text-lg mt-2">
            NEXT-GEN AI POWERED TOOLS
          </p>
          
          {/* Bottom highlight bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
            <div className="w-20 h-full bg-[#0ef34b]/40 animate-[shimmer_3s_infinite_linear] relative"></div>
          </div>
        </div>
        
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default AiServicesHeader;
