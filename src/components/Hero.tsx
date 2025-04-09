
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sigma } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlatformButtons from '@/components/PlatformButtons';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('');
  const originalText = "A modern art gallery, Magritte and Chagall style.";
  const isMobile = useIsMobile();
  
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

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Alien-inspired background with geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812] via-[#081019] to-[#0a1a20] z-0"></div>
      
      {/* Animated energy grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI5IDBhMjkgMjkgMCAxIDAgNTggMCAyOSAyOSAwIDEgMC01OCAwIiBzdHJva2U9InJnYmEoMCwyNTUsMTUwLDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDMwbTI0IDBhMjQgMjQgMCAxIDEtNDggMCAyNCAyNCAwIDEgMSA0OCAwIiBzdHJva2U9InJnYmEoMCwyNTUsMTUwLDAuMDgpIiBzdHJva2Utd2lkdGg9Ii43NSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMTggMGExOCAxOCAwIDEgMCAzNiAwIDE4IDE4IDAgMSAwLTM2IDAiIHN0cm9rZT0icmdiYSgwLDI1NSwxNTAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 bg-[#0ef34b] rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 15}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>
      
      {/* Energy pulse rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-[500px] h-[500px] rounded-full border border-[#0ef34b]/10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#0ef34b]/15 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#0ef34b]/20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Title section with GPTVERSE.AI text */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-wider">
          GPTVERSE.AI
        </h2>
      </div>
      
      {/* Main heading with futuristic alien style */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mb-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight">
          <span className="text-white">Multi platform </span>
          <span className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">AI Hub</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mt-6 max-w-3xl mx-auto">
          GPTVerse: Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp!
        </p>
      </div>
      
      {/* Platform buttons - using the PlatformButtons component */}
      <div className="w-full z-10">
        <PlatformButtons />
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
