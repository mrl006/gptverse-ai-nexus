
import React from 'react';

const TokenomicsHeading = () => {
  return (
    <div className="w-full space-y-8 text-center">
      <div className="inline-block">
        <div className="relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-text-reveal">
            <span className="heading-gradient">
              TOKENOMICS
            </span>
          </h2>
          
          {/* Glowing underline */}
          <div className="absolute -bottom-3 left-0 h-1 w-full bg-gradient-to-r from-[#0ef34b]/20 via-[#00aeff] to-[#0ef34b]/20 animate-shimmer"></div>
          
          {/* Glow effect */}
          <div className="absolute -bottom-4 left-0 h-3 w-full blur-md bg-gradient-to-r from-[#0ef34b]/30 via-[#00aeff]/20 to-[#0ef34b]/30 animate-shimmer"></div>
        </div>
      </div>
      
      <p className="text-white/80 text-lg max-w-2xl mx-auto animate-text-reveal-delay-1 leading-relaxed">
        Our token distribution strategy is designed for long-term sustainable growth while ensuring fair allocation across our ecosystem.
      </p>
    </div>
  );
};

export default TokenomicsHeading;
