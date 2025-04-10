
import React from 'react';
import { motion } from 'framer-motion';

const AiServicesBackground: React.FC = () => {
  // Create floating particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0ef34b]/5 to-[#00aeff]/5 opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,243,75,0.05),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,174,255,0.05),transparent_70%)]"></div>
      
      {/* Tech grid overlay with reduced opacity */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-20"></div>
      
      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-[#0ef34b]/0 via-[#0ef34b]/10 to-[#0ef34b]/0"
          animate={{ 
            opacity: [0, 0.7, 0],
            height: ["0%", "100%", "0%"],
            top: ["100%", "0%", "0%"]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-[#00aeff]/0 via-[#00aeff]/10 to-[#00aeff]/0"
          animate={{ 
            opacity: [0, 0.5, 0],
            height: ["0%", "100%", "0%"],
            top: ["100%", "0%", "0%"]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-[#0ef34b]/0 via-[#0ef34b]/10 to-[#0ef34b]/0"
          animate={{ 
            opacity: [0, 0.6, 0],
            height: ["0%", "100%", "0%"],
            top: ["100%", "0%", "0%"]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.id % 3 === 0 
              ? 'rgba(14, 243, 75, 0.3)' 
              : particle.id % 3 === 1 
                ? 'rgba(0, 174, 255, 0.3)' 
                : 'rgba(255, 255, 255, 0.3)',
            top: `${particle.y}%`,
            left: `${particle.x}%`,
          }}
          animate={{
            y: ['-20px', '20px', '-20px'],
            x: [`-${Math.random() * 30}px`, `${Math.random() * 30}px`, `-${Math.random() * 30}px`],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
      
      {/* Glowing orbs in the background */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#0ef34b]/3 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[30%] right-[15%] w-[350px] h-[350px] rounded-full bg-[#00aeff]/3 blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Edge decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/20 to-transparent"></div>
      
      {/* Digital circuit patterns */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="rgba(14, 243, 75, 0.5)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="3" fill="rgba(0, 174, 255, 0.5)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default AiServicesBackground;
