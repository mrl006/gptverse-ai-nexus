
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
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 via-[#00aeff]/3 to-transparent rounded-xl blur-2xl"></div>
        
        {/* Main image container with equal height to text box */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-[#0ef34b]/10 p-2 md:p-4 rounded-xl md:rounded-2xl overflow-hidden group h-full w-full flex flex-col justify-center">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
          
          <img 
            alt="Neural Core AI Robot" 
            className="w-[75%] md:w-[85%] mx-auto transform transition-all duration-700 hover:scale-[1.01] z-10 relative" 
            src="/lovable-uploads/28b4f259-14ca-4c5f-95b8-7ec2c00d4c7f.png"
            loading="lazy"
          />
          
          {/* Simplified indicators for small mobile */}
          {isSmallMobile && (
            <div className="absolute right-1 top-1 flex flex-col gap-1">
              <div className="p-1 backdrop-blur-xl bg-white/10 rounded-lg border border-[#0ef34b]/20">
                <Zap className="w-3 h-3 text-[#0ef34b]" />
              </div>
              <div className="p-1 backdrop-blur-xl bg-white/10 rounded-lg border border-[#00aeff]/20">
                <Network className="w-3 h-3 text-[#00aeff]" />
              </div>
              <div className="p-1 backdrop-blur-xl bg-white/10 rounded-lg border border-[#d946ef]/20">
                <CheckCircle className="w-3 h-3 text-[#d946ef]" />
              </div>
            </div>
          )}
          
          {/* Mobile-friendly indicators */}
          {isMobile && !isSmallMobile && (
            <div className="absolute right-2 top-2 flex flex-col gap-1.5">
              <div className="p-1.5 backdrop-blur-xl bg-white/10 rounded-lg border border-[#0ef34b]/20">
                <Zap className="w-3.5 h-3.5 text-[#0ef34b]" />
              </div>
              <div className="p-1.5 backdrop-blur-xl bg-white/10 rounded-lg border border-[#00aeff]/20">
                <Network className="w-3.5 h-3.5 text-[#00aeff]" />
              </div>
              <div className="p-1.5 backdrop-blur-xl bg-white/10 rounded-lg border border-[#d946ef]/20">
                <CheckCircle className="w-3.5 h-3.5 text-[#d946ef]" />
              </div>
            </div>
          )}
          
          {/* Desktop floating data points */}
          {!isMobile && (
            <div className="absolute right-6 top-1/3 flex flex-col gap-3">
              <div className="p-2 backdrop-blur-xl bg-white/10 flex gap-2 items-center rounded-lg border border-[#0ef34b]/20 text-sm animate-pulse-slow">
                <Zap className="w-4 h-4 text-[#0ef34b]" />
                <span>Neural Interface</span>
              </div>
              <div className="p-2 backdrop-blur-xl bg-white/10 flex gap-2 items-center rounded-lg border border-[#00aeff]/20 text-sm animate-pulse-slow" style={{
                animationDelay: '1s'
              }}>
                <Network className="w-4 h-4 text-[#00aeff]" />
                <span>Quantum Core</span>
              </div>
              <div className="p-2 backdrop-blur-xl bg-white/10 flex gap-2 items-center rounded-lg border border-[#d946ef]/20 text-sm animate-pulse-slow" style={{
                animationDelay: '2s'
              }}>
                <CheckCircle className="w-4 h-4 text-[#d946ef]" />
                <span>Blockchain</span>
              </div>
            </div>
          )}
          
          {/* Neural Core Stats - Responsive grid with improved mobile sizing */}
          <div className="grid grid-cols-3 gap-1 md:gap-4 mt-2 md:mt-4">
            <div className="backdrop-blur-xl bg-white/10 p-1 md:p-3 border border-[#0ef34b]/10 rounded-lg text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-[10px] md:text-xl font-bold text-[#0ef34b] relative z-10">98%</div>
              <div className="text-[7px] md:text-xs opacity-70 relative z-10">Accuracy</div>
            </div>
            <div className="backdrop-blur-xl bg-white/10 p-1 md:p-3 border border-[#00aeff]/10 rounded-lg text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00aeff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-[10px] md:text-xl font-bold text-[#00aeff] relative z-10">10ms</div>
              <div className="text-[7px] md:text-xs opacity-70 relative z-10">Latency</div>
            </div>
            <div className="backdrop-blur-xl bg-white/10 p-1 md:p-3 border border-[#d946ef]/10 rounded-lg text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d946ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-[10px] md:text-xl font-bold text-[#d946ef] relative z-10">5.2</div>
              <div className="text-[7px] md:text-xs opacity-70 relative z-10">Teraflops</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiVisualComponent;
