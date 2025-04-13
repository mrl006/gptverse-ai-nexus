
import React from 'react';

const RoadmapBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#071420] to-[#081828]"></div>
      
      {/* Enhanced primary glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/10 blur-[180px] animate-pulse-slow"></div>
      
      {/* Animated timeline accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-[#0ef34b]/30 via-[#0ef34b]/10 to-transparent blur-[2px] animate-pulse"></div>
      
      {/* Additional glowing orbs */}
      <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#00aeff]/8 blur-[80px] animate-float"></div>
      <div className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#0ef34b]/8 blur-[90px] animate-float-slow"></div>
      
      {/* Animated particles */}
      <div className="absolute top-[25%] left-[40%] w-[12px] h-[12px] rounded-full bg-[#0ef34b]/60 animate-float"></div>
      <div className="absolute bottom-[35%] right-[35%] w-[8px] h-[8px] rounded-full bg-[#00aeff]/60 animate-float-slow"></div>
      <div className="absolute top-[60%] left-[20%] w-[10px] h-[10px] rounded-full bg-[#0ef34b]/60 animate-float"></div>
      
      {/* Horizontal timeline markers */}
      <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ef34b]/15 to-transparent animate-pulse-slow"></div>
      <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent animate-pulse-slow"></div>
      <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ef34b]/15 to-transparent animate-pulse-slow"></div>
      
      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
    </div>
  );
};

export default RoadmapBackground;
