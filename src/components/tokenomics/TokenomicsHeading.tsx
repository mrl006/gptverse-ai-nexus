
import React from 'react';

const TokenomicsHeading = () => {
  return (
    <div className="w-full space-y-6 text-center md:text-left">
      <div className="inline-block">
        <div className="relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-white">TOKENOMICS</span>
            <div className="flex items-center">
              <span className="text-[#0ef34b]">OF GPTVERSE</span>
              <div className="ml-4 h-2 w-2 rounded-full bg-[#0ef34b] animate-pulse hidden md:block"></div>
            </div>
          </h2>
          <div className="absolute -bottom-3 left-0 h-1 w-20 bg-gradient-to-r from-[#0ef34b] to-transparent"></div>
        </div>
      </div>
      
      <p className="text-white/80 text-lg max-w-xl">
        The GptVerse Tokenomics structure was meticulously designed to ensure sustainable growth
        while protecting early investors and the public sale participants.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
        <div className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <div className="w-3 h-3 rounded-full bg-[#0ef34b] mr-2"></div>
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
