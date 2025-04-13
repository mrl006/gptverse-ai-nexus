
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const GlassyBackground: React.FC = () => {
  const { isMobile } = useIsMobile();
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#071420] to-[#081828]"></div>
      
      {/* Enhanced primary glow - adjusts size based on device */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        isMobile ? 'w-[1000px] h-[1000px]' : 'w-[1500px] h-[1500px]'
      } rounded-full bg-[#0ef34b]/10 blur-[180px] animate-pulse-slow`}></div>
      
      {/* Multiple animated glowing orbs */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#00aeff]/8 blur-[150px] animate-float-slow"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#0ef34b]/8 blur-[150px] animate-float"></div>
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#0ef34b]/5 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#00aeff]/6 blur-[90px] animate-float-slow"></div>
      
      {/* Animated particles */}
      <div className="absolute top-[15%] left-[25%] w-[10px] h-[10px] rounded-full bg-[#0ef34b]/50 animate-float"></div>
      <div className="absolute top-[60%] right-[35%] w-[8px] h-[8px] rounded-full bg-[#0ef34b]/50 animate-float-slow"></div>
      <div className="absolute bottom-[30%] right-[25%] w-[12px] h-[12px] rounded-full bg-[#00aeff]/50 animate-float"></div>
      <div className="absolute top-[45%] left-[40%] w-[6px] h-[6px] rounded-full bg-[#00aeff]/50 animate-float-slow"></div>
      
      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
      
      {/* Edge highlights with animation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent animate-pulse-slow"></div>
    </div>
  );
};

export default GlassyBackground;
