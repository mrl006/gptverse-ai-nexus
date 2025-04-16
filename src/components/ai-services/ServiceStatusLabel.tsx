
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceStatusLabelProps {
  text: string;
  color: string;
  small?: boolean; // Added the small prop as optional
}

const ServiceStatusLabel: React.FC<ServiceStatusLabelProps> = ({ text, color, small = false }) => {
  return (
    <motion.span 
      className={`px-2 md:px-3 py-0.5 md:py-1 ${small ? 'text-[10px]' : 'text-xs'} md:text-sm font-medium rounded-md backdrop-blur-md ${
        text && text.toLowerCase() === "on live" 
          ? "bg-[#ff0033]/80 text-white" 
          : "bg-[#040812]/60 border border-white/10 text-white"
      } whitespace-nowrap flex items-center`}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      {text && text.toLowerCase() === "on live" && (
        <motion.span 
          className={`${small ? 'w-1 h-1' : 'w-1.5 h-1.5'} md:w-2 md:h-2 bg-white rounded-full mr-1 md:mr-2`}
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.7, 1, 0.7] 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        ></motion.span>
      )}
      {text}
    </motion.span>
  );
};

export default ServiceStatusLabel;
