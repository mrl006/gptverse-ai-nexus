
import React from 'react';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#071420] to-[#081828]"></div>
      
      {/* Enhanced primary glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/10 blur-[180px] animate-pulse-slow"></div>
      
      {/* Service cards accent glows with enhanced animations */}
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#00aeff]/8 blur-[80px] animate-float"></div>
      <div className="absolute bottom-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#0ef34b]/8 blur-[80px] animate-float-slow"></div>
      
      {/* Additional animated glowing elements */}
      <div className="absolute top-[10%] left-[30%] w-[250px] h-[250px] rounded-full bg-[#0ef34b]/6 blur-[60px] animate-pulse"></div>
      <div className="absolute bottom-[15%] right-[25%] w-[300px] h-[300px] rounded-full bg-[#00aeff]/5 blur-[70px] animate-float"></div>
      
      {/* Animated floating particles */}
      <div className="absolute top-[45%] right-[45%] w-[10px] h-[10px] rounded-full bg-[#0ef34b]/60 animate-float"></div>
      <div className="absolute bottom-[60%] left-[35%] w-[8px] h-[8px] rounded-full bg-[#00aeff]/60 animate-float-slow"></div>
      <div className="absolute top-[25%] left-[20%] w-[12px] h-[12px] rounded-full bg-[#0ef34b]/60 animate-float"></div>
      <div className="absolute bottom-[25%] right-[15%] w-[6px] h-[6px] rounded-full bg-[#00aeff]/60 animate-float-slow"></div>
      
      {/* Animated gradient lines */}
      <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ef34b]/15 to-transparent animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00aeff]/15 to-transparent animate-pulse-slow"></div>
      
      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
    </div>
  );
};

export default AiServicesBackground;
