
import React from 'react';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base dark background with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#071420] to-[#081828]"></div>
      
      {/* Enhanced central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] rounded-full bg-[#0ef34b]/10 blur-[180px] animate-pulse-slow"></div>
      
      {/* Secondary glow elements */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#00aeff]/8 blur-[150px] animate-float-slow"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#0ef34b]/8 blur-[150px] animate-float"></div>
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
      
      {/* Edge decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
    </div>
  );
};

export default UnifiedBackground;
