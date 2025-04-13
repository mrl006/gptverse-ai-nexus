
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Network, CheckCircle } from 'lucide-react';

const AiVisualComponent: React.FC = () => {
  return (
    <motion.div 
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 via-[#00aeff]/5 to-transparent rounded-3xl blur-2xl"></div>
        
        {/* Main image with animated elements */}
        <div className="relative glass-card p-8 rounded-2xl border border-[#0ef34b]/20 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          <img 
            src="/lovable-uploads/059db707-9bc8-433a-a146-097b5b44f53a.png" 
            alt="AI Robot" 
            className="w-full mx-auto transform transition-all duration-700 hover:scale-105 z-10 relative"
          />
          
          {/* Floating Data Points */}
          <div className="absolute right-6 top-1/3 flex flex-col gap-3">
            <div className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#0ef34b]/20 text-sm animate-pulse-slow">
              <Zap className="w-4 h-4 text-[#0ef34b]" />
              <span>AI Power</span>
            </div>
            <div className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#00aeff]/20 text-sm animate-pulse-slow" style={{animationDelay: '1s'}}>
              <Network className="w-4 h-4 text-[#00aeff]" />
              <span>Multichain</span>
            </div>
            <div className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#d946ef]/20 text-sm animate-pulse-slow" style={{animationDelay: '2s'}}>
              <CheckCircle className="w-4 h-4 text-[#d946ef]" />
              <span>Verified</span>
            </div>
          </div>
          
          {/* Animated dots */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#0ef34b] rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 -left-1 w-2 h-2 bg-[#00aeff] rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute bottom-1/3 -right-1 w-2 h-2 bg-[#d946ef] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Stats under image */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="glass-card p-3 border border-[#0ef34b]/10 rounded-lg text-center">
            <div className="text-xl font-bold text-[#0ef34b]">100+</div>
            <div className="text-xs opacity-70">AI Models</div>
          </div>
          <div className="glass-card p-3 border border-[#00aeff]/10 rounded-lg text-center">
            <div className="text-xl font-bold text-[#00aeff]">5</div>
            <div className="text-xs opacity-70">Blockchains</div>
          </div>
          <div className="glass-card p-3 border border-[#d946ef]/10 rounded-lg text-center">
            <div className="text-xl font-bold text-[#d946ef]">20+</div>
            <div className="text-xs opacity-70">Years Exp</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiVisualComponent;
