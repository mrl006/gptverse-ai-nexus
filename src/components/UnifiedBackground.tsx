
import React from 'react';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      
      {/* Subtle tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-8"></div>
      
      {/* Main centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/5 blur-[200px] animate-pulse-slow"></div>
      
      {/* Secondary accent glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00aeff]/5 blur-[150px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Edge decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/15 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/15 to-transparent"></div>
    </div>
  );
};

export default UnifiedBackground;
