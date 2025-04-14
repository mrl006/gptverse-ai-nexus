
import React from 'react';

const GlassyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Simple dark background - no animation */}
      <div className="absolute inset-0 bg-[#040812]/95"></div>
      
      {/* Subtle tech grid overlay with reduced opacity */}
      <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
      
      {/* Single minimal highlight */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0ef34b]/5 blur-[180px]"
      />
    </div>
  );
};

export default GlassyBackground;
