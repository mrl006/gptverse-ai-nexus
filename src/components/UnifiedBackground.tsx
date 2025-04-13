
import React from 'react';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      
      {/* Simplified central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/5 blur-[200px] animate-pulse-slow"></div>
      
      {/* Minimal edge decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/10 to-transparent"></div>
    </div>
  );
};

export default UnifiedBackground;
