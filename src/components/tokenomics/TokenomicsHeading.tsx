
import React from 'react';

const TokenomicsHeading = () => {
  return (
    <div className="w-full space-y-6 text-center">
      <div className="inline-block">
        <div className="relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white/90 via-white to-white/80 bg-clip-text text-transparent drop-shadow-sm">
              TOKENOMICS
            </span>
          </h2>
          <div className="absolute -bottom-3 left-0 h-1 w-full bg-gradient-to-r from-[#0ef34b]/20 via-[#8B5CF6] to-[#0ef34b]/20"></div>
        </div>
      </div>
      
      <p className="text-white/80 text-lg max-w-xl mx-auto">
        The GptVerse Tokenomics structure was meticulously designed to ensure sustainable growth
        while protecting early investors and the public sale participants.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center pt-4">
        <div className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <div className="w-3 h-3 rounded-full bg-[#8B5CF6] mr-2"></div>
          <span className="text-white font-medium">Total Supply: 1,000,000,000</span>
        </div>
        <div className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <div className="w-3 h-3 rounded-full bg-[#D946EF] mr-2"></div>
          <span className="text-white font-medium">Initial Price: $0.015</span>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsHeading;
