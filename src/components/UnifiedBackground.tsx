
import React from 'react';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Deep dark background for contrast */}
      <div className="absolute inset-0 bg-[#080d1c]"></div>
      
      {/* Minimal tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Subtle gradient highlight */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[100px]"
      />
    </div>
  );
};

export default UnifiedBackground;
