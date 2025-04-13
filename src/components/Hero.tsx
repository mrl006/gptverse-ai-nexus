
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('');
  const { isMobile, isSmallMobile } = useIsMobile();
  const originalText = "A modern art gallery, Magritte and Chagall style.";
  
  useEffect(() => {
    // Only enable glitch effect on desktop for better performance
    if (isMobile) {
      setGlitchText(originalText);
      return;
    }
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.9) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
          } else {
            result += originalText[i];
          }
        }
        setGlitchText(result);

        // Reset after brief glitch
        setTimeout(() => {
          setGlitchText(originalText);
        }, 100);
      }
    }, 2000);
    setGlitchText(originalText);
    return () => clearInterval(glitchInterval);
  }, [isMobile]);

  // Platform buttons data
  const platforms = [{
    name: 'WINDOWS',
    logo: "/lovable-uploads/6eca13b2-a069-4441-bf8c-22a4e9a8fe86.png",
    text: "Get it on"
  }, {
    name: 'VR SIDEQUEST',
    logo: "/lovable-uploads/45ae9a90-7bdf-4333-8369-846d93de1cf0.png",
    text: "Get it on"
  }, {
    name: 'WEBGL',
    logo: "/lovable-uploads/4dbe8711-87c1-4255-9585-24d3145300d6.png",
    text: "Get it on"
  }, {
    name: 'AI HUB',
    logo: "/lovable-uploads/053c9a26-917a-46cd-a510-68db71cf90ab.png",
    text: "Get it on"
  }];
  
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-10 md:py-16">
      {/* Main heading with futuristic alien style */}
      <motion.div 
        className="relative z-10 text-center max-w-5xl mx-auto px-3 md:px-4 mb-6 md:mb-10"
        initial={{ opacity: 0, y: isSmallMobile ? 10 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: isSmallMobile ? 0.3 : 0.6 }}
      >
        <h1 className={`${isSmallMobile ? 'text-3xl' : (isMobile ? 'text-4xl' : 'text-5xl md:text-6xl lg:text-7xl')} font-bold font-mono tracking-tight`}>
          <span className="text-white">Multi platform </span>
          <span className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">AI Hub</span>
        </h1>
        <p className={`${isSmallMobile ? 'text-sm mt-3' : (isMobile ? 'text-base mt-4' : 'text-xl md:text-2xl mt-6')} text-white/80 max-w-3xl mx-auto leading-relaxed`}>
          Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp!
        </p>
      </motion.div>
      
      {/* Platform buttons - with improved mobile layout */}
      <motion.div 
        className={`${isMobile ? 'grid grid-cols-2 gap-2 px-2' : 'flex overflow-x-auto'} scrollbar-none py-2 mb-4 md:mb-6 w-full max-w-6xl mx-auto gap-3 md:gap-4 z-10`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {platforms.map((platform, index) => (
          <motion.button 
            key={index} 
            className={`backdrop-blur-md bg-[#040812]/60 border border-[#0ef34b]/30 rounded-lg
              px-2 py-2 md:px-3 md:py-2.5 hover:bg-[#040812]/80 transition-all duration-300
              flex items-center justify-center gap-2 ${isMobile ? '' : 'min-w-[180px]'}
              relative overflow-hidden group flex-1 shadow-[0_0_15px_rgba(14,243,75,0.15)]`}
            whileHover={{ scale: isMobile ? 1 : 1.02, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
          >
            {/* Simplified glassmorphism effects with green glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
            
            {/* Button Content - simplified for mobile */}
            <div className="relative z-10 flex items-center justify-center gap-2 w-full">
              <div className={`${isSmallMobile ? 'w-6 h-6' : (isMobile ? 'w-7 h-7' : 'w-10 h-10')} bg-[#040812]/80 rounded-full flex items-center justify-center 
                        border border-[#0ef34b]/30 group-hover:border-[#0ef34b]/50
                        transition-all duration-500 overflow-hidden p-1`}
              >
                <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
              </div>
              
              <span className="text-white font-mono">
                <div className={`${isSmallMobile ? 'text-[8px]' : (isMobile ? 'text-[10px]' : 'text-xs')} text-white/60`}>{platform.text}</div>
                <div className={`${isSmallMobile ? 'text-[10px]' : (isMobile ? 'text-xs' : 'text-sm font-bold tracking-wider')} group-hover:text-[#0ef34b] transition-colors duration-300`}>
                  {platform.name}
                </div>
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>
      
      {/* Alien tech indicators */}
      <div className="flex justify-center space-x-2 mt-2 z-10">
        <div className="h-0.5 w-10 md:w-14 bg-gradient-to-r from-[#0ef34b]/50 to-[#0ef34b]/5"></div>
        <div className="h-0.5 w-6 md:w-8 bg-gradient-to-r from-[#00aeff]/50 to-[#00aeff]/5"></div>
        <div className="h-0.5 w-3 md:w-4 bg-gradient-to-r from-[#0ef34b]/50 to-[#0ef34b]/5"></div>
      </div>
    </section>
  );
};

export default Hero;
