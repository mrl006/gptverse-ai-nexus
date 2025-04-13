
import React from 'react';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base background with gradient - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/70 via-[#071420]/65 to-[#081828]/70"></div>
      
      {/* Enhanced primary glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/15 blur-[200px] animate-pulse-slow"></div>
      
      {/* Service cards accent glows with enhanced animations */}
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#00aeff]/15 blur-[100px] animate-float"></div>
      <div className="absolute bottom-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#0ef34b]/15 blur-[100px] animate-float-slow"></div>
      
      {/* Reduced number of animated particles */}
      <div className="absolute top-[45%] right-[45%] w-[10px] h-[10px] rounded-full bg-[#0ef34b]/80 animate-float"></div>
      <div className="absolute bottom-[25%] right-[15%] w-[6px] h-[6px] rounded-full bg-[#00aeff]/80 animate-float-slow"></div>
      
      {/* Animated gradient lines */}
      <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00aeff]/20 to-transparent animate-pulse-slow"></div>
      
      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
    </div>
  );
};

export default AiServicesBackground;
