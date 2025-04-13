
import React from 'react';

const RoadmapBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#071420] to-[#081828]"></div>
      
      {/* Enhanced primary glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/10 blur-[180px] animate-pulse-slow"></div>
      
      {/* Timeline accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-[#0ef34b]/30 via-[#0ef34b]/10 to-transparent blur-[2px]"></div>
      
      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
    </div>
  );
};

export default RoadmapBackground;
