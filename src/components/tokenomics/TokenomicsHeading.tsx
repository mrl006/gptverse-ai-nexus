
import React from 'react';

const TokenomicsHeading = () => {
  return (
    <div className="w-full space-y-8 text-center">
      <div className="inline-block">
        <div className="relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-text-reveal">
            <span className="bg-gradient-to-r from-[#8B5CF6] via-white to-[#D946EF] bg-clip-text text-transparent drop-shadow-sm animate-text-gradient">
              TOKENOMICS
            </span>
          </h2>
          
          {/* Glowing underline */}
          <div className="absolute -bottom-3 left-0 h-1 w-full bg-gradient-to-r from-[#8B5CF6]/20 via-[#D946EF] to-[#8B5CF6]/20 animate-shimmer"></div>
          
          {/* Glow effect */}
          <div className="absolute -bottom-4 left-0 h-3 w-full blur-md bg-gradient-to-r from-[#8B5CF6]/30 via-[#D946EF]/20 to-[#8B5CF6]/30 animate-shimmer"></div>
        </div>
      </div>
      
      <p className="text-white/80 text-lg max-w-2xl mx-auto animate-text-reveal-delay-1 leading-relaxed">
        Our token distribution strategy is designed for long-term sustainable growth while ensuring fair allocation across our ecosystem.
      </p>
    </div>
  );
};

export default TokenomicsHeading;
