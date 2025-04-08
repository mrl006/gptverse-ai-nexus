
import React from 'react';
import { motion } from "framer-motion";

const RoadmapRobot = () => {
  return (
    <motion.div 
      className="hidden lg:block relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="sticky top-32">
        <div className="relative">
          <img 
            src="/lovable-uploads/2d1d3852-2873-4be6-9c82-22ca4ab4c4d4.png" 
            alt="AI Robot" 
            className="w-full max-w-[280px] lg:max-w-[320px] relative z-10"
          />
          <div className="absolute -inset-4 bg-gradient-to-br from-alien-neon/20 to-alien-blue/5 rounded-full blur-xl opacity-60 animate-pulse-slow"></div>
          
          <motion.div 
            className="absolute -right-1 top-1/4 w-3 h-3 rounded-full bg-alien-neon"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          
          <motion.div 
            className="absolute left-1/4 top-1/3 w-2 h-2 rounded-full bg-alien-blue"
            animate={{ scale: [1, 1.8, 1] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
          ></motion.div>
        </div>
        
        <div className="mt-8 px-6 py-4 glass-card rounded-xl bg-[#040813]/70 backdrop-blur-md border border-white/5 text-center">
          <p className="text-alien-neon font-mono text-sm">GPTVERSE AI GUIDE</p>
          <p className="text-white/80 mt-2">Guiding the evolution of GPTVerse from foundation to future</p>
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapRobot;
