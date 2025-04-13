
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GlassyBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax effect based on mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.parallax-element');
      const xPos = (e.clientX / window.innerWidth) - 0.5;
      const yPos = (e.clientY / window.innerHeight) - 0.5;
      
      elements.forEach((el, index) => {
        const speed = 1 + index * 0.2;
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate3d(${xPos * speed * 30}px, ${yPos * speed * 30}px, 0)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden" ref={containerRef}>
      {/* Dark backdrop with tech grid */}
      <div className="absolute inset-0 bg-[#020408]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-15"></div>
      
      {/* Glassy hexagon grid for web3 aesthetic */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMi41TDMwIDE3LjVMNDUgMi41TDU3LjUgMTVMNDUgMzBMNTcuNSA0NUw0NSA1Ny41TDMwIDQyLjVMMTUgNTcuNUwyLjUgNDVMMTUgMzBMMi41IDE1TDE1IDIuNVoiIHN0cm9rZT0icmdiYSgxNCwyNDMsNzUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-10 bg-[length:60px_60px]"></div>
      
      {/* Depth elements */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        {/* 3D rotating hexagonal elements */}
        <div className="absolute top-1/4 left-1/4 parallax-element">
          <motion.div 
            className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#0ef34b]/3 to-transparent backdrop-blur-[100px]"
            animate={{ 
              rotateY: [0, 360],
              rotateX: [15, -15, 15]
            }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
        
        <div className="absolute top-3/4 right-1/4 parallax-element">
          <motion.div 
            className="w-[300px] h-[300px] rounded-full bg-gradient-to-l from-[#00aeff]/3 to-transparent backdrop-blur-[80px]"
            animate={{ 
              rotateY: [360, 0],
              rotateX: [-15, 15, -15]
            }}
            transition={{ 
              duration: 25, 
              ease: "linear", 
              repeat: Infinity,
              repeatType: "loop",
              delay: 1.5
            }}
          />
        </div>
      </div>
      
      {/* Glassy 3D panels */}
      <div className="absolute -right-20 top-1/3 w-[400px] h-[400px] rotate-45 backdrop-blur-xl bg-gradient-to-tr from-[#0ef34b]/2 to-[#00aeff]/2 rounded-3xl parallax-element"></div>
      <div className="absolute -left-20 top-2/3 w-[300px] h-[300px] -rotate-30 backdrop-blur-xl bg-gradient-to-tl from-[#00aeff]/2 to-[#0ef34b]/2 rounded-3xl parallax-element"></div>
      
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white/50 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}
      
      {/* Top-down light glow */}
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#0ef34b]/5 to-transparent"></div>
      
      {/* Bottom-up light glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#00aeff]/5 to-transparent"></div>
      
      {/* Web3 glassy effect - cyber connect nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, idx) => {
          const size = 6 + Math.random() * 4;
          return (
            <div 
              key={idx}
              className="absolute rounded-full bg-[#0ef34b]/20"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px rgba(14, 243, 75, 0.5)'
              }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 3, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* Glass panel overlays for depth */}
      <div className="absolute inset-0" style={{ perspective: '2000px' }}>
        <motion.div 
          className="absolute inset-y-0 left-0 w-1/3 origin-left parallax-element"
          style={{ 
            backdropFilter: 'blur(5px)',
            background: 'linear-gradient(to right, rgba(14, 243, 75, 0.01), transparent)',
            transformStyle: 'preserve-3d'
          }}
          animate={{ rotateY: [5, -5, 5] }}
          transition={{ 
            duration: 20, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        <motion.div 
          className="absolute inset-y-0 right-0 w-1/3 origin-right parallax-element"
          style={{ 
            backdropFilter: 'blur(5px)',
            background: 'linear-gradient(to left, rgba(0, 174, 255, 0.01), transparent)',
            transformStyle: 'preserve-3d'
          }}
          animate={{ rotateY: [-5, 5, -5] }}
          transition={{ 
            duration: 20, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2
          }}
        />
      </div>
    </div>
  );
};

export default GlassyBackground;
