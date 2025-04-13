
import React from 'react';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      
      {/* Simplified single glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#0ef34b]/5 blur-[180px]"></div>
    </div>
  );
};

export default AiServicesBackground;
