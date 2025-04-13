
import React from 'react';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base dark background with slight gradient - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/70 via-[#071420]/65 to-[#081828]/70"></div>
      
      {/* Enhanced central glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] rounded-full bg-[#0ef34b]/15 blur-[200px] animate-pulse-slow"></div>
      
      {/* Multiple floating glow elements with different animations */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#00aeff]/15 blur-[180px] animate-float-slow"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#0ef34b]/15 blur-[180px] animate-float"></div>
      
      {/* Additional animated glowing orbs */}
      <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#0ef34b]/10 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[30%] left-[20%] w-[250px] h-[250px] rounded-full bg-[#00aeff]/10 blur-[100px] animate-float-slow"></div>
      
      {/* Fewer floating particles for better performance */}
      <div className="absolute top-[10%] left-[40%] w-[8px] h-[8px] rounded-full bg-[#0ef34b]/60 animate-float"></div>
      <div className="absolute top-[30%] right-[30%] w-[10px] h-[10px] rounded-full bg-[#00aeff]/60 animate-float"></div>
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
      
      {/* Edge highlights with animation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent animate-pulse-slow"></div>
    </div>
  );
};

export default UnifiedBackground;
