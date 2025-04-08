
import React from 'react';
import { motion } from 'framer-motion';

const RobotImage = () => {
  return (
    <motion.div 
      className="glass-card p-8 backdrop-blur-2xl bg-[#06101a]/40 border border-white/10 rounded-2xl relative overflow-hidden order-2 lg:order-1"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00aeff]/10 rounded-full blur-3xl"></div>
      
      <div className="relative aspect-square mx-auto max-w-[450px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(14,243,75,0.3)]">
        <img 
          src="/lovable-uploads/7cd10502-451b-4b2f-b3f2-bd63a4491273.png" 
          alt="AI Robot in GPTVerse" 
          className="w-full h-full object-cover"
        />
        
        {/* Animated glowing border overlay */}
        <div className="absolute inset-0 border-4 border-[#0ef34b]/50 rounded-full animate-pulse"></div>
        
        {/* Glowing dots */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#0ef34b] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00aeff] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-[#d946ef] rounded-full animate-pulse"></div>
      </div>
      
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#06101a]/80 border border-[#0ef34b]/30 text-[#0ef34b] text-sm font-mono">
          <span className="mr-2 h-2 w-2 bg-[#0ef34b] rounded-full animate-pulse"></span>
          AI SYSTEM ONLINE
        </div>
      </div>
    </motion.div>
  );
};

export default RobotImage;
