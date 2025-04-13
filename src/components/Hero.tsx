
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('');
  const { isMobile } = useIsMobile();
  const originalText = "A modern art gallery, Magritte and Chagall style.";
  
  useEffect(() => {
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
  }, []);

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Main heading with futuristic alien style */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mb-12">
        <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl md:text-6xl lg:text-7xl'} font-bold font-mono tracking-tight`}>
          <span className="text-white">Multi platform </span>
          <span className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">AI Hub</span>
        </h1>
        <p className={`${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} text-white/80 mt-6 max-w-3xl mx-auto`}>
          Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp!
        </p>
      </div>
      
      {/* Platform buttons - with improved mobile layout */}
      <div className={`${isMobile ? 'grid grid-cols-2 gap-3' : 'flex overflow-x-auto'} scrollbar-none py-2 mb-6 w-full max-w-6xl mx-auto px-4 gap-4 z-10`}>
        {platforms.map((platform, index) => (
          <button 
            key={index} 
            className={`backdrop-blur-md bg-[#040812]/40 border border-[#0ef34b]/30 rounded-lg
              px-4 py-3 hover:bg-[#040812]/60 transition-all duration-300
              flex items-center justify-center gap-3 ${isMobile ? '' : 'min-w-[180px]'}
              relative overflow-hidden group flex-1 shadow-[0_0_15px_rgba(14,243,75,0.2)]`}
          >
            {/* Simplified glassmorphism effects with green glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
            
            {/* Button Content - simplified for mobile */}
            <div className="relative z-10 flex items-center justify-center gap-3 w-full">
              <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-[#040812]/80 rounded-full flex items-center justify-center 
                        border border-[#0ef34b]/30 group-hover:border-[#0ef34b]/50
                        transition-all duration-500 overflow-hidden p-1`}
              >
                <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
              </div>
              
              <span className="text-white font-mono">
                <div className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-white/60`}>{platform.text}</div>
                <div className={`${isMobile ? 'text-sm' : 'font-bold tracking-wider'} group-hover:text-[#0ef34b] transition-colors duration-300`}>
                  {platform.name}
                </div>
              </span>
            </div>
          </button>
        ))}
      </div>
      
      {/* Alien tech indicators */}
      <div className="flex justify-center space-x-2 mt-3 z-10">
        <div className="h-0.5 w-14 bg-gradient-to-r from-[#0ef34b]/50 to-[#0ef34b]/5"></div>
        <div className="h-0.5 w-8 bg-gradient-to-r from-[#00aeff]/50 to-[#00aeff]/5"></div>
        <div className="h-0.5 w-4 bg-gradient-to-r from-[#0ef34b]/50 to-[#0ef34b]/5"></div>
      </div>
    </section>
  );
};

export default Hero;
