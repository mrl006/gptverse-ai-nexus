
import React from 'react';

const ExploreHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 relative">
      <div className="flex flex-col items-center">
        {/* Main title with gradient effect */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-[#0ef34b]">EXPLORE</span>
          <span className="text-white mx-3">THE</span>
          <span className="text-[#00aeff]">GPTVERSE</span>
        </h2>
        
        {/* Subtitle with minimal separator */}
        <div className="relative">
          <div className="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
          <p className="text-[#0ef34b]/60 text-lg font-mono uppercase tracking-wider mt-4">
            NEXT-GEN AI POWERED TOOLS
          </p>
          <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;
