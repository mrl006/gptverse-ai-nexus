
import React from 'react';
import { motion } from 'framer-motion';

const AboutHeader = () => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-3">
        <span className="text-[#0ef34b]">ABOUT</span>
        <span className="text-white mx-3">THE</span>
        <span className="text-[#00aeff]">GPTVERSE</span>
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative mt-6">
          <div className="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
          <p className="text-[#0ef34b]/60 text-lg font-mono uppercase tracking-wider">
            EMBARK ON AN EXTRAORDINARY AI JOURNEY
          </p>
          <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/30 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
