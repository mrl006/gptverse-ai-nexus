
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      {/* Enhanced alien-inspired background with geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-alien-dark via-alien-darker to-alien-deep-navy z-0"></div>
      
      {/* Animated energy grid with enhanced green glow effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI5IDBhMjkgMjkgMCAxIDAgNTggMCAyOSAyOSAwIDEgMC01OCAwIiBzdHJva2U9InJnYmEoMTQsMjQzLDc1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDMwbTI0IDBhMjQgMjQgMCAxIDEtNDggMCAyNCAyNCAwIDEgMSA0OCAwIiBzdHJva2U9InJnYmEoMTQsMjQzLDc1LDAuMDgpIiBzdHJva2Utd2lkdGg9Ii43NSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMTggMGExOCAxOCAwIDEgMCAzNiAwIDE4IDE4IDAgMSAwLTM2IDAiIHN0cm9rZT0icmdiYSgxNCwyNDMsNzUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20 z-0"></div>
      
      {/* Enhanced energy pulse rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-[800px] h-[800px] rounded-full border border-alien-neon/10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-alien-neon/15 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-alien-neon/20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles with better positioning and glow */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: index % 3 === 0 ? '#0ef34b' : index % 3 === 1 ? '#00aeff' : '#0FF5CE',
              boxShadow: index % 3 === 0 ? '0 0 12px 2px rgba(14, 243, 75, 0.6)' : index % 3 === 1 ? '0 0 12px 2px rgba(0, 174, 255, 0.6)' : '0 0 12px 2px rgba(15, 245, 206, 0.6)',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 15}s`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo and Branding with enhanced glow */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 mx-auto relative">
                <img 
                  src="/lovable-uploads/e322c390-0e26-442f-90b3-bc13622b55e6.png" 
                  alt="GPTVerse Logo" 
                  className="w-full h-full object-cover rounded-full border-2 border-alien-neon/30"
                />
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(14,243,75,0.4)] animate-breath"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-wider mb-2 relative inline-block">
              GPTVERSE.AI
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-alien-neon/70 to-transparent"></div>
            </h2>
          </div>
          
          {/* Main heading with futuristic alien style and enhanced gradient */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono tracking-tight mb-4 relative">
              <span className="bg-gradient-to-r from-alien-neon via-alien-blue to-alien-cyan bg-clip-text text-transparent animate-text-gradient bg-[length:200%_auto]">
                Multi platform AI Hub
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-alien-neon to-transparent"></div>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp Experience
            </p>
          </div>
          
          {/* Enhanced Sci-fi inspired CTA button */}
          <div className="flex justify-center mb-16">
            <Button className="group relative px-8 py-6 rounded-xl bg-black/20 border border-alien-neon/30 hover:border-alien-neon/60 text-white font-mono text-xl transition-all duration-500 overflow-hidden">
              <span className="relative z-10 flex items-center">
                EXPLORE THE UNIVERSE <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-alien-neon/20 to-alien-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-alien-neon to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-alien-neon to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </Button>
          </div>
          
          {/* Platform buttons - Enhanced with better spacing and glow */}
          <div className={`flex flex-wrap justify-center gap-4 z-10 mb-8 ${isMobile ? 'px-2' : 'px-4'}`}>
            {platforms.map((platform, index) => (
              <button
                key={index}
                className="backdrop-blur-md bg-[#040812]/40 border border-alien-neon/30 rounded-lg
                        px-4 py-3 hover:bg-[#040812]/60 transition-all duration-300
                        flex items-center justify-center gap-3 min-w-[180px] max-w-[200px]
                        relative overflow-hidden group flex-1 shadow-[0_0_15px_rgba(14,243,75,0.2)]"
              >
                {/* Enhanced glassmorphism effects with green glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-30"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-alien-neon/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-alien-neon/30 to-transparent"></div>
                
                {/* Enhanced inner glow effect */}
                <div className="absolute inset-0 bg-alien-neon/0 group-hover:bg-alien-neon/10 transition-all duration-500 rounded-lg"></div>
                
                {/* Pulse glow animation on hover with improved visual effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 animate-pulse-glow bg-alien-neon/5 rounded-lg"></div>
                </div>
                
                {/* Button Content with enhanced logo container */}
                <div className="relative z-10 flex items-center justify-center gap-3 w-full">
                  <div className="w-12 h-12 bg-[#040812]/80 rounded-full flex items-center justify-center 
                              border border-alien-neon/30 group-hover:border-alien-neon/70
                              transition-all duration-300 overflow-hidden p-0.5
                              shadow-[0_0_10px_rgba(14,243,75,0.3)] group-hover:shadow-[0_0_15px_rgba(14,243,75,0.5)]">
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                  
                  <span className="text-white font-mono">
                    <div className="text-xs text-white/70 mb-0.5">{platform.text}</div>
                    <div className="font-bold tracking-wider group-hover:text-alien-neon transition-colors duration-300">{platform.name}</div>
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Enhanced tech indicators */}
          <div className="flex justify-center space-x-3 mt-6 z-10">
            <div className="h-0.5 w-16 bg-gradient-to-r from-alien-neon/50 to-alien-neon/5 rounded-full"></div>
            <div className="h-0.5 w-8 bg-gradient-to-r from-alien-blue/50 to-alien-blue/5 rounded-full"></div>
            <div className="h-0.5 w-4 bg-gradient-to-r from-alien-cyan/50 to-alien-cyan/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
