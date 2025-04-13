
import React from 'react';
import { motion } from 'framer-motion';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Simple, subtle background */}
      <div className="absolute inset-0 bg-[#040812] opacity-90"></div>
      
      {/* Tech grid overlay with reduced opacity */}
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Subtle glow */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0ef34b]/5 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#00aeff]/5 blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Edge decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/10 to-transparent"></div>
    </div>
  );
};

export default AiServicesBackground;
