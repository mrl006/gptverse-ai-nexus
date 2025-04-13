
import React from 'react';

const RoadmapBackground = () => {
  return (
    <>
      {/* Simplified background */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Subtle glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(14,243,75,0.1)_0%,transparent_60%)]"></div>
    </>
  );
};

export default RoadmapBackground;
