
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  const [glitchText, setGlitchText] = useState('');
  const originalText = "Unlock the Power of AI — Anytime, Anywhere, on Any Device.";
  
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
  const platforms = [
    { 
      name: 'WINDOWS', 
      logo: "/lovable-uploads/6eca13b2-a069-4441-bf8c-22a4e9a8fe86.png",
      text: "Get it on",
    },
    { 
      name: 'VR SIDEQUEST', 
      logo: "/lovable-uploads/45ae9a90-7bdf-4333-8369-846d93de1cf0.png",
      text: "Get it on",
    },
    { 
      name: 'WEBGL', 
      logo: "/lovable-uploads/4dbe8711-87c1-4255-9585-24d3145300d6.png",
      text: "Get it on",
    },
    { 
      name: 'AI HUB', 
      logo: "/lovable-uploads/053c9a26-917a-46cd-a510-68db71cf90ab.png",
      text: "Get it on",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Neural network background with grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812] via-[#081019] to-[#0a1a20] z-0"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI5IDBhMjkgMjkgMCAxIDAgNTggMCAyOSAyOSAwIDEgMC01OCAwIiBzdHJva2U9InJnYmEoMCwyNTUsMTUwLDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDMwbTI0IDBhMjQgMjQgMCAxIDEtNDggMCAyNCAyNCAwIDEgMSA0OCAwIiBzdHJva2U9InJnYmEoMCwyNTUsMTUwLDAuMDgpIiBzdHJva2Utd2lkdGg9Ii43NSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMTggMGExOCAxOCAwIDEgMCAzNiAwIDE4IDE4IDAgMSAwLTM2IDAiIHN0cm9rZT0icmdiYSgwLDI1NSwxNTAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 15}s`,
              opacity: 0.4,
              background: Math.random() > 0.5 ? '#0ef34b' : '#00aeff',
            }}
          />
        ))}
      </div>
      
      {/* Neural network animated lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-px h-px">
          <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-[#0ef34b]/20 to-transparent animate-pulse-slow" style={{ transform: 'rotate(45deg)', transformOrigin: 'left' }}></div>
        </div>
        <div className="absolute top-3/4 left-1/3 w-px h-px">
          <div className="absolute w-[300px] h-[1px] bg-gradient-to-r from-[#00aeff]/20 to-transparent animate-pulse-slow" style={{ transform: 'rotate(-30deg)', transformOrigin: 'left', animationDelay: '1s' }}></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-px h-px">
          <div className="absolute w-[350px] h-[1px] bg-gradient-to-l from-[#0ef34b]/20 to-transparent animate-pulse-slow" style={{ transform: 'rotate(-60deg)', transformOrigin: 'right', animationDelay: '2s' }}></div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-px">
          <div className="absolute w-[250px] h-[1px] bg-gradient-to-l from-[#00aeff]/20 to-transparent animate-pulse-slow" style={{ transform: 'rotate(20deg)', transformOrigin: 'right', animationDelay: '3s' }}></div>
        </div>
      </div>
      
      {/* Energy pulse rings centered */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-[600px] h-[600px] rounded-full border border-[#0ef34b]/5 animate-pulse-slow opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#0ef34b]/8 animate-pulse-slow opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[#0ef34b]/10 animate-pulse-slow opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container px-4 py-8 mx-auto text-center">
        {/* GPTVerse logo or emblem */}
        <div className="mb-6 inline-block">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-[#040812]/80 rounded-full 
                      border border-[#0ef34b]/30 flex items-center justify-center 
                      shadow-[0_0_15px_rgba(14,243,75,0.3)]">
            <img 
              src="/lovable-uploads/e322c390-0e26-442f-90b3-bc13622b55e6.png" 
              alt="GPTVerse Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain" 
            />
          </div>
        </div>
        
        {/* Main headline with gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight mb-4">
          <span className="text-white">Multi-Platform </span>
          <span className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">AI Hub</span>
        </h1>
        
        {/* Subtitle with glitch effect */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-mono">
          {glitchText}
        </p>
        
        {/* Platform buttons */}
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center gap-4 mb-12 px-4`}>
          {platforms.map((platform, index) => (
            <button
              key={index}
              className="backdrop-blur-md bg-[#040812]/40 border border-[#0ef34b]/30 rounded-lg
                      px-4 py-3 hover:bg-[#040812]/60 transition-all duration-300
                      flex items-center justify-center gap-3 min-w-[180px] w-full md:w-auto
                      relative overflow-hidden group shadow-[0_0_15px_rgba(14,243,75,0.2)]"
            >
              {/* Enhanced glassmorphism effects with green glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
              
              {/* Enhanced inner glow effect */}
              <div className="absolute inset-0 bg-[#0ef34b]/0 group-hover:bg-[#0ef34b]/10 transition-all duration-500 rounded-lg"></div>
              
              {/* Pulse glow animation on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 animate-pulse-glow bg-[#0ef34b]/5 rounded-lg"></div>
              </div>
              
              {/* Button Content */}
              <div className="relative z-10 flex items-center justify-center gap-3 w-full">
                <div className="w-10 h-10 bg-[#040812]/80 rounded-full flex items-center justify-center 
                            border border-[#0ef34b]/30 group-hover:border-[#0ef34b]/50
                            transition-all duration-500 overflow-hidden
                            shadow-[0_0_10px_rgba(14,243,75,0.3)]">
                  <img 
                    src={platform.logo} 
                    alt={platform.name} 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                
                <span className="text-white font-mono">
                  <div className="text-xs text-white/60">{platform.text}</div>
                  <div className="font-bold tracking-wider group-hover:text-[#0ef34b] transition-colors duration-300">{platform.name}</div>
                </span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Enter Portal Button */}
        <Button className="rounded-full bg-gradient-to-r from-[#0ef34b] to-[#00aeff] hover:brightness-110 text-black px-8 py-6 font-mono text-lg group">
          <span>Enter Portal</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      {/* Sci-fi decorative elements at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        <div className="h-0.5 w-16 bg-gradient-to-r from-[#0ef34b]/50 to-[#0ef34b]/5"></div>
        <div className="h-0.5 w-10 bg-gradient-to-r from-[#00aeff]/50 to-[#00aeff]/5"></div>
        <div className="h-0.5 w-6 bg-gradient-to-r from-[#0ef34b]/50 to-[#0ef34b]/5"></div>
      </div>
    </section>
  );
};

export default Hero;
