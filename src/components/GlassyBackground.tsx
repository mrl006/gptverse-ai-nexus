
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const GlassyBackground: React.FC = () => {
  const { isMobile } = useIsMobile();
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      
      {/* Simplified central glow - adjusts size based on device */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        isMobile ? 'w-[800px] h-[800px]' : 'w-[1200px] h-[1200px]'
      } rounded-full bg-[#0ef34b]/5 blur-[200px] animate-pulse-slow`}></div>
      
      {/* Minimal edge decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/10 to-transparent"></div>
    </div>
  );
};

export default GlassyBackground;
