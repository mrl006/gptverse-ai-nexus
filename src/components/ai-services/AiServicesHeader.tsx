
import React from 'react';

const AiServicesHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 relative">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono tracking-tight relative z-10">
        <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
          AI SERVICES
        </span>
      </h2>
      
      <div className="flex justify-center space-x-3 items-center">
        <div className="h-0.5 w-16 bg-gradient-to-r from-[#0ef34b]/80 to-transparent"></div>
        <div className="text-[#0ef34b]/70 text-lg font-mono">POWERED BY GPTVERSE</div>
        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#00aeff]/80"></div>
      </div>
      
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
    </div>
  );
};

export default AiServicesHeader;
