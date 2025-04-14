
import React from 'react';

const AboutBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#071420] to-[#081828]"></div>
      
      {/* Enhanced primary glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/10 blur-[180px] animate-pulse-slow"></div>
      
      {/* Additional animated glowing elements */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#00aeff]/8 blur-[120px] animate-float-slow"></div>
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#0ef34b]/6 blur-[100px] animate-float"></div>
      
      {/* Animated floating particles */}
      <div className="absolute top-[30%] right-[25%] w-[8px] h-[8px] rounded-full bg-[#0ef34b]/60 animate-float"></div>
      <div className="absolute top-[70%] left-[30%] w-[6px] h-[6px] rounded-full bg-[#0ef34b]/60 animate-float-slow"></div>
      <div className="absolute bottom-[40%] right-[40%] w-[10px] h-[10px] rounded-full bg-[#00aeff]/60 animate-float"></div>
      
      {/* Subtle tech grid overlay with pulse animation */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 animate-pulse-glow"></div>
      
      {/* Animated vertical lines */}
      <div className="absolute h-full w-px left-1/4 bg-gradient-to-b from-transparent via-[#0ef34b]/10 to-transparent animate-pulse-slow"></div>
      <div className="absolute h-full w-px right-1/4 bg-gradient-to-b from-transparent via-[#00aeff]/10 to-transparent animate-pulse-slow"></div>
    </div>
  );
};

export default AboutBackground;
