
import React from 'react';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Deep dark background for contrast */}
      <div className="absolute inset-0 bg-[#080d1c]"></div>
      
      {/* Minimal tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
    </div>
  );
};

export default AiServicesBackground;
