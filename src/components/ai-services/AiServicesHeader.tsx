
import React from 'react';
import { motion } from 'framer-motion';

const AiServicesHeader: React.FC = () => {
  return (
    <motion.div 
      className="text-center mb-16 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Enhanced futuristic heading */}
      <div className="relative inline-block">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono tracking-tight relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent animate-text-gradient bg-[length:200%_auto]"
            animate={{ 
              backgroundPosition: ['0% center', '200% center', '0% center'],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            AI SERVICES
          </motion.span>
        </motion.h2>
        <motion.div 
          className="absolute -inset-1 bg-gradient-to-r from-[#0ef34b]/20 via-[#00aeff]/20 to-[#d946ef]/20 blur-xl opacity-70 -z-10 rounded-full"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>
      
      <motion.div 
        className="flex justify-center space-x-3 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div 
          className="h-0.5 w-16 bg-gradient-to-r from-[#0ef34b]/80 to-transparent"
          animate={{ width: ['4rem', '5rem', '4rem'] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="text-[#0ef34b]/70 text-lg font-mono"
          animate={{ 
            color: ['rgba(14,243,75,0.7)', 'rgba(0,174,255,0.7)', 'rgba(14,243,75,0.7)'],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >POWERED BY GPTVERSE</motion.div>
        <motion.div 
          className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#00aeff]/80"
          animate={{ width: ['4rem', '5rem', '4rem'] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
        ></motion.div>
      </motion.div>
      
      {/* Tech accent lines */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
    </motion.div>
  );
};

export default AiServicesHeader;
