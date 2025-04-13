
import React from 'react';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Simple, subtle background */}
      <div className="absolute inset-0 bg-[#040812] opacity-90"></div>
      
      {/* Main glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#0ef34b]/5 blur-[180px] animate-pulse-slow"></div>
    </div>
  );
};

export default AiServicesBackground;
