
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
        x: isMobile ? -8 : -20
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
        duration: isMobile ? 0.3 : 0.6
      }}
    >
      <div className="relative max-w-md mx-auto h-full w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 via-[#00aeff]/5 to-transparent rounded-2xl blur-2xl"></div>
        
        {/* Main image with animated elements */}
        <div className="relative glass-card p-3 md:p-8 rounded-xl md:rounded-2xl border border-[#0ef34b]/20 overflow-hidden group h-full w-full flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          <img 
            alt="Neural Core AI Robot" 
            className="w-[90%] mx-auto transform transition-all duration-700 hover:scale-[1.02] z-10 relative" 
            src="/lovable-uploads/28b4f259-14ca-4c5f-95b8-7ec2c00d4c7f.png"
            loading="lazy"
          />
          
          {/* Floating Data Points - Simplified for mobile */}
          {!isSmallMobile && !isMobile && (
            <div className="absolute right-6 top-1/3 flex flex-col gap-3">
              <div className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#0ef34b]/20 text-sm animate-pulse-slow">
                <Zap className="w-4 h-4 text-[#0ef34b]" />
                <span>Neural Interface</span>
              </div>
              <div className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#00aeff]/20 text-sm animate-pulse-slow" style={{
                animationDelay: '1s'
              }}>
                <Network className="w-4 h-4 text-[#00aeff]" />
                <span>Quantum Core</span>
              </div>
              <div className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#d946ef]/20 text-sm animate-pulse-slow" style={{
                animationDelay: '2s'
              }}>
                <CheckCircle className="w-4 h-4 text-[#d946ef]" />
                <span>Blockchain</span>
              </div>
            </div>
          )}
          
          {/* Mobile-optimized floating indicators */}
          {(isMobile || isSmallMobile) && (
            <div className="absolute right-2 top-0 flex flex-col gap-2">
              <div className="p-1 glass-card rounded-lg border border-[#0ef34b]/20 text-[10px]">
                <Zap className="w-3 h-3 text-[#0ef34b]" />
              </div>
              <div className="p-1 glass-card rounded-lg border border-[#00aeff]/20 text-[10px]">
                <Network className="w-3 h-3 text-[#00aeff]" />
              </div>
              <div className="p-1 glass-card rounded-lg border border-[#d946ef]/20 text-[10px]">
                <CheckCircle className="w-3 h-3 text-[#d946ef]" />
              </div>
            </div>
          )}
          
          {/* Neural Core Stats - Responsive grid */}
          <div className="grid grid-cols-3 gap-1 md:gap-4 mt-3 md:mt-4">
            <div className="glass-card p-1.5 md:p-3 border border-[#0ef34b]/10 rounded-lg text-center">
              <div className="text-sm md:text-xl font-bold text-[#0ef34b]">98%</div>
              <div className="text-[8px] md:text-xs opacity-70">Accuracy</div>
            </div>
            <div className="glass-card p-1.5 md:p-3 border border-[#00aeff]/10 rounded-lg text-center">
              <div className="text-sm md:text-xl font-bold text-[#00aeff]">10ms</div>
              <div className="text-[8px] md:text-xs opacity-70">Latency</div>
            </div>
            <div className="glass-card p-1.5 md:p-3 border border-[#d946ef]/10 rounded-lg text-center">
              <div className="text-sm md:text-xl font-bold text-[#d946ef]">5.2</div>
              <div className="text-[8px] md:text-xs opacity-70">Teraflops</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiVisualComponent;
