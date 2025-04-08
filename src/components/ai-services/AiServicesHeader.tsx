
import React from 'react';

const AiServicesHeader: React.FC = () => {
  return (
    <div className="text-center mb-12 relative">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
          <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
            AI SERVICES
          </span>
        </h2>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-[#0ef34b]/50 to-transparent"></div>
          <p className="text-[#0ef34b]/80 text-lg font-mono">POWERED BY GPTVERSE</p>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00aeff]/50"></div>
        </div>
        
        <div className="max-w-2xl">
          <p className="text-white/90 text-xl font-semibold mb-2 bg-gradient-to-r from-[#0ef34b]/80 to-[#00aeff]/80 bg-clip-text text-transparent">
            EXPLORE THE GPTVERSE
          </p>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent my-3"></div>
          
          <p className="text-white/70 text-lg mt-2">
            NEXT-GEN AI POWERED TOOLS
          </p>
        </div>
        
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default AiServicesHeader;
