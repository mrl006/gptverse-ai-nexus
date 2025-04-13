
import React from 'react';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base dark background with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#071420] to-[#081828]"></div>
      
      {/* Enhanced central glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] rounded-full bg-[#0ef34b]/10 blur-[180px] animate-pulse-slow"></div>
      
      {/* Multiple floating glow elements with different animations */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#00aeff]/8 blur-[150px] animate-float-slow"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#0ef34b]/8 blur-[150px] animate-float"></div>
      
      {/* Additional animated glowing orbs */}
      <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#0ef34b]/5 blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[30%] left-[20%] w-[250px] h-[250px] rounded-full bg-[#00aeff]/5 blur-[60px] animate-float-slow"></div>
      
      {/* Floating particles */}
      <div className="absolute top-[10%] left-[40%] w-[8px] h-[8px] rounded-full bg-[#0ef34b]/40 animate-float"></div>
      <div className="absolute top-[70%] left-[20%] w-[6px] h-[6px] rounded-full bg-[#0ef34b]/40 animate-float-slow"></div>
      <div className="absolute top-[30%] right-[30%] w-[10px] h-[10px] rounded-full bg-[#00aeff]/40 animate-float"></div>
      <div className="absolute bottom-[15%] right-[40%] w-[5px] h-[5px] rounded-full bg-[#00aeff]/40 animate-float-slow"></div>
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
      
      {/* Edge highlights with animation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent animate-pulse-slow"></div>
    </div>
  );
};

export default UnifiedBackground;
