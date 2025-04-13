
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Network, CheckCircle } from 'lucide-react';

const AiVisualComponent: React.FC = () => {
  return (
    <motion.div 
      className="relative flex items-center justify-center h-full" 
      initial={{
        opacity: 0,
        x: -30
      }} 
      whileInView={{
        opacity: 1,
        x: 0
      }} 
      viewport={{
        once: true
      }} 
      transition={{
        duration: 0.7
      }}
    >
      <div className="relative max-w-md mx-auto h-full flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 via-[#00aeff]/5 to-transparent rounded-3xl blur-2xl"></div>
        
        {/* Main image with animated elements */}
        <div className="relative glass-card p-8 rounded-2xl border border-[#0ef34b]/20 overflow-hidden group h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          <img alt="Neural Core AI Robot" className="w-full mx-auto transform transition-all duration-700 hover:scale-105 z-10 relative" src="/lovable-uploads/28b4f259-14ca-4c5f-95b8-7ec2c00d4c7f.png" />
          
          {/* Floating Data Points */}
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
          
          {/* Neural Core Stats */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="glass-card p-3 border border-[#0ef34b]/10 rounded-lg text-center">
              <div className="text-xl font-bold text-[#0ef34b]">98%</div>
              <div className="text-xs opacity-70">Accuracy</div>
            </div>
            <div className="glass-card p-3 border border-[#00aeff]/10 rounded-lg text-center">
              <div className="text-xl font-bold text-[#00aeff]">10ms</div>
              <div className="text-xs opacity-70">Latency</div>
            </div>
            <div className="glass-card p-3 border border-[#d946ef]/10 rounded-lg text-center">
              <div className="text-xl font-bold text-[#d946ef]">5.2</div>
              <div className="text-xs opacity-70">Teraflops</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiVisualComponent;
