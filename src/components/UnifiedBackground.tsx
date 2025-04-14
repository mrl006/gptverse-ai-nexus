
import React from 'react';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Simple dark background */}
      <div className="absolute inset-0 bg-[#040812]/95"></div>
      
      {/* Ultra-subtle tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
    </div>
  );
};

export default UnifiedBackground;
