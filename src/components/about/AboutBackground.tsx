
import React from 'react';

const AboutBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Darker base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030609] via-[#030609] to-[#040812]"></div>
      
      {/* Reduced primary glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/3 blur-[180px] animate-pulse-slow"></div>
      
      {/* Reduced additional glowing elements */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#00aeff]/3 blur-[120px] animate-float-slow"></div>
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#0ef34b]/2 blur-[100px] animate-float"></div>
      
      {/* Slightly reduced animated floating particles */}
      <div className="absolute top-[30%] right-[25%] w-[6px] h-[6px] rounded-full bg-[#0ef34b]/30 animate-float"></div>
      <div className="absolute top-[70%] left-[30%] w-[4px] h-[4px] rounded-full bg-[#0ef34b]/30 animate-float-slow"></div>
      <div className="absolute bottom-[40%] right-[40%] w-[8px] h-[8px] rounded-full bg-[#00aeff]/30 animate-float"></div>
      
      {/* Subtle tech grid overlay with reduced pulse */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 animate-pulse-glow"></div>
      
      {/* Animated vertical lines with reduced opacity */}
      <div className="absolute h-full w-px left-1/4 bg-gradient-to-b from-transparent via-[#0ef34b]/3 to-transparent animate-pulse-slow"></div>
      <div className="absolute h-full w-px right-1/4 bg-gradient-to-b from-transparent via-[#00aeff]/3 to-transparent animate-pulse-slow"></div>
    </div>
  );
};

export default AboutBackground;
