
import React from 'react';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#071420] to-[#081828]"></div>
      
      {/* Enhanced primary glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/10 blur-[180px] animate-pulse-slow"></div>
      
      {/* Service cards accent glow */}
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#00aeff]/8 blur-[80px] animate-float"></div>
      <div className="absolute bottom-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#0ef34b]/8 blur-[80px] animate-float-slow"></div>
      
      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
    </div>
  );
};

export default AiServicesBackground;
