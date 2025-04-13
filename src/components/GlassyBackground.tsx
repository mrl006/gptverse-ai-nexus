
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { Bitcoin, Database, Globe, Shield, Zap } from 'lucide-react';

const GlassyBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Tech-focused dark base background with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/90 via-[#061018]/80 to-[#07121d]/90"></div>
      
      {/* Tech grid overlay with increased definition */}
      <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
      
      {/* Enhanced central glow with tech color */}
      <motion.div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isMobile ? 'w-[1000px] h-[1000px]' : 'w-[1500px] h-[1500px]'
        } rounded-full bg-[#0ef34b]/8 blur-[200px]`}
        animate={{ 
          opacity: [0.3, 0.4, 0.3],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Web3 accent glows in strategic positions */}
      <motion.div 
        className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/8 blur-[150px]"
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#1EAEDB]/8 blur-[150px]"
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          x: [0, -10, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Web3 Tech Icons */}
      <div className="absolute top-[20%] right-[15%]">
        <motion.div
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="text-[#0ef34b]/20 w-20 h-20"
        >
          <Globe className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-[25%] left-[20%]">
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="text-[#1EAEDB]/20 w-14 h-14"
        >
          <Bitcoin className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute top-[60%] right-[25%]">
        <motion.div
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#8B5CF6]/20 w-16 h-16"
        >
          <Database className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute top-[35%] left-[30%]">
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#0ef34b]/20 w-12 h-12"
        >
          <Shield className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute top-[70%] left-[10%]">
        <motion.div
          animate={{ 
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#1EAEDB]/20 w-10 h-10"
        >
          <Zap className="w-full h-full" />
        </motion.div>
      </div>
      
      {/* Reduced number of animated particles for better performance */}
      <motion.div 
        className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full bg-[#0ef34b]/60 blur-sm"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          y: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[30%] right-[25%] w-3 h-3 rounded-full bg-[#8B5CF6]/60 blur-sm"
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Digital connection lines */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1EAEDB]/15 to-transparent"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/15 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export default GlassyBackground;
