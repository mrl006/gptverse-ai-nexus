
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Network, CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const AiVisualComponent: React.FC = () => {
  const { isMobile, isSmallMobile } = useIsMobile();
  
  return (
    <motion.div 
      className="relative flex items-center justify-center h-full" 
      initial={{
        opacity: 0,
        x: isMobile ? -4 : -20
      }} 
      whileInView={{
        opacity: 1,
        x: 0
      }} 
      viewport={{
        once: true,
        margin: isMobile ? "-5px" : "-40px"
      }} 
      transition={{
        duration: isMobile ? 0.2 : 0.6
      }}
    >
      <div className="relative max-w-md mx-auto h-full w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 via-[#00aeff]/5 to-transparent rounded-xl blur-2xl"></div>
        
        {/* Main container - more compact for mobile */}
        <div className="relative glass-card p-2 md:p-4 rounded-xl border border-[#0ef34b]/20 overflow-hidden group h-full w-full flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          <img 
            alt="Neural Core AI Robot" 
            className="w-[65%] md:w-[75%] mx-auto transform transition-all duration-700 hover:scale-[1.02] z-10 relative" 
            src="/lovable-uploads/28b4f259-14ca-4c5f-95b8-7ec2c00d4c7f.png"
            loading="lazy"
          />
          
          {/* Simplified indicators for small mobile */}
          {isSmallMobile && (
            <div className="absolute right-1 top-1 flex flex-col gap-1 z-10">
              <div className="p-1 glass-card rounded-lg border border-[#0ef34b]/20">
                <Zap className="w-3 h-3 text-[#0ef34b]" />
              </div>
              <div className="p-1 glass-card rounded-lg border border-[#00aeff]/20">
                <Network className="w-3 h-3 text-[#00aeff]" />
              </div>
              <div className="p-1 glass-card rounded-lg border border-[#d946ef]/20">
                <CheckCircle className="w-3 h-3 text-[#d946ef]" />
              </div>
            </div>
          )}
          
          {/* Mobile-friendly indicators */}
          {isMobile && !isSmallMobile && (
            <div className="absolute right-2 top-2 flex flex-col gap-1 z-10">
              <div className="p-1 glass-card rounded-lg border border-[#0ef34b]/20">
                <Zap className="w-3 h-3 text-[#0ef34b]" />
              </div>
              <div className="p-1 glass-card rounded-lg border border-[#00aeff]/20">
                <Network className="w-3 h-3 text-[#00aeff]" />
              </div>
              <div className="p-1 glass-card rounded-lg border border-[#d946ef]/20">
                <CheckCircle className="w-3 h-3 text-[#d946ef]" />
              </div>
            </div>
          )}
          
          {/* Desktop floating data points - more compact */}
          {!isMobile && (
            <div className="absolute right-4 top-1/3 flex flex-col gap-2 z-10">
              <div className="p-1.5 glass-card flex gap-1.5 items-center rounded-lg border border-[#0ef34b]/20 text-xs animate-pulse-slow">
                <Zap className="w-3.5 h-3.5 text-[#0ef34b]" />
                <span>Neural Interface</span>
              </div>
              <div className="p-1.5 glass-card flex gap-1.5 items-center rounded-lg border border-[#00aeff]/20 text-xs animate-pulse-slow" style={{
                animationDelay: '1s'
              }}>
                <Network className="w-3.5 h-3.5 text-[#00aeff]" />
                <span>Quantum Core</span>
              </div>
              <div className="p-1.5 glass-card flex gap-1.5 items-center rounded-lg border border-[#d946ef]/20 text-xs animate-pulse-slow" style={{
                animationDelay: '2s'
              }}>
                <CheckCircle className="w-3.5 h-3.5 text-[#d946ef]" />
                <span>Blockchain</span>
              </div>
            </div>
          )}
          
          {/* Neural Core Stats - More compact grid with smaller text */}
          <div className="grid grid-cols-3 gap-1 md:gap-2 mt-2 md:mt-3 z-10">
            <div className="glass-card p-1 md:p-2 border border-[#0ef34b]/10 rounded-lg text-center">
              <div className="text-[9px] md:text-sm font-bold text-[#0ef34b]">98%</div>
              <div className="text-[6px] md:text-xs opacity-70">Accuracy</div>
            </div>
            <div className="glass-card p-1 md:p-2 border border-[#00aeff]/10 rounded-lg text-center">
              <div className="text-[9px] md:text-sm font-bold text-[#00aeff]">10ms</div>
              <div className="text-[6px] md:text-xs opacity-70">Latency</div>
            </div>
            <div className="glass-card p-1 md:p-2 border border-[#d946ef]/10 rounded-lg text-center">
              <div className="text-[9px] md:text-sm font-bold text-[#d946ef]">5.2</div>
              <div className="text-[6px] md:text-xs opacity-70">Teraflops</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiVisualComponent;
