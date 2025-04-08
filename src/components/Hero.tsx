
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, BarChart3, Sigma } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('');
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
      
      {/* Hexagon logo with alien-like appearance */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center justify-center mb-3">
          <div className="w-24 h-24 bg-gradient-to-br from-[#0ef34b] via-[#00d8ff] to-[#00aeff] flex items-center justify-center relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[#040812] rounded-full transform scale-[0.96]"></div>
            <div className="relative text-[#0ef34b] z-10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 12L12 8L17 12L12 16Z" fill="currentColor" />
                <path d="M12 4L4 12L12 20L20 12L12 4Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
              </svg>
            </div>
            {/* Energy pulses */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[#0ef34b]/5 rounded-full animate-blip"></div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center font-mono tracking-wider">
            DORA.AI 
            <span className="ml-2 text-xs px-2 py-1 bg-[#0ef34b]/10 rounded-full text-[#0ef34b]/80 border border-[#0ef34b]/30">BETA</span>
          </h2>
        </div>
      </div>
      
      {/* Main heading with futuristic alien style */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono tracking-tight">
          <span className="text-white">Sites beyond </span>
          <span className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">imagination,</span>
        </h1>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight">
          <span className="bg-gradient-to-r from-[#00aeff] to-[#0ef34b] bg-clip-text text-transparent">one prompt </span>
          <span className="text-white">away.</span>
        </h1>
      </div>
      
      {/* Alien-inspired search/prompt input */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 mb-12">
        <div className="relative flex items-center bg-[#06101a]/80 backdrop-blur-md border border-[#0ef34b]/20 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0ef34b]/5 to-[#00aeff]/5 rounded-full"></div>
          <div className="flex-shrink-0 pl-5">
            <Sigma className="text-[#0ef34b]" size={20} />
          </div>
          <input 
            type="text" 
            placeholder={glitchText}
            className="flex-grow py-4 px-4 bg-transparent text-white/90 outline-none font-mono"
          />
          <Button 
            className="m-1 rounded-full bg-gradient-to-r from-[#0ef34b] to-[#00aeff] hover:brightness-110 text-black font-mono"
          >
            Generate <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>
        
        {/* Alien tech indicators */}
        <div className="flex justify-center space-x-2 mt-3">
          <div className="h-0.5 w-14 bg-gradient-to-r from-[#0ef34b]/50 to-[#0ef34b]/5"></div>
          <div className="h-0.5 w-8 bg-gradient-to-r from-[#00aeff]/50 to-[#00aeff]/5"></div>
          <div className="h-0.5 w-4 bg-gradient-to-r from-[#0ef34b]/50 to-[#0ef34b]/5"></div>
        </div>
      </div>
      
      {/* Feature cards with alien tech styling */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto px-4 mb-16">
        <div className="glass-card group hover:border-[#0ef34b]/30 hover:shadow-[#0ef34b]/10 hover:shadow-lg transition-all duration-300">
          <div className="p-6 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full border border-[#0ef34b]/30 flex items-center justify-center mb-4 group-hover:bg-[#0ef34b]/10 transition-all">
              <Zap className="text-[#0ef34b]" size={20} />
            </div>
            <h3 className="text-white font-mono font-bold mb-2">Ultra Fast</h3>
            <p className="text-white/60">Generate sites in seconds with our quantum-powered engines</p>
          </div>
        </div>
        
        <div className="glass-card group hover:border-[#00aeff]/30 hover:shadow-[#00aeff]/10 hover:shadow-lg transition-all duration-300">
          <div className="p-6 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full border border-[#00aeff]/30 flex items-center justify-center mb-4 group-hover:bg-[#00aeff]/10 transition-all">
              <BarChart3 className="text-[#00aeff]" size={20} />
            </div>
            <h3 className="text-white font-mono font-bold mb-2">AI Powered</h3>
            <p className="text-white/60">Hyperintelligent algorithms adapt to your creative needs</p>
          </div>
        </div>
        
        <div className="glass-card group hover:border-[#d946ef]/30 hover:shadow-[#d946ef]/10 hover:shadow-lg transition-all duration-300">
          <div className="p-6 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full border border-[#d946ef]/30 flex items-center justify-center mb-4 group-hover:bg-[#d946ef]/10 transition-all">
              <Sigma className="text-[#d946ef]" size={20} />
            </div>
            <h3 className="text-white font-mono font-bold mb-2">Neural Design</h3>
            <p className="text-white/60">Abstract cognition models ensure unique dimensional outputs</p>
          </div>
        </div>
      </div>
      
      {/* Watch video button with alien tech styling */}
      <div className="relative z-10 flex justify-center mb-16">
        <Button 
          variant="outline" 
          className="rounded-full border-[#0ef34b]/30 bg-transparent text-white hover:bg-[#0ef34b]/10 font-mono group"
        >
          <div className="mr-2 w-6 h-6 rounded-full bg-[#0ef34b] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play size={12} className="text-black ml-0.5" />
          </div>
          Watch demo
        </Button>
      </div>
      
      {/* Award badge with alien styled design */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="bg-[#06101a]/70 backdrop-blur-md border border-[#0ef34b]/20 rounded-xl px-5 py-3 hover:border-[#0ef34b]/40 transition-all duration-300">
          <div className="flex items-center">
            <div className="mr-2 text-[#0ef34b]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L8.5 17L9.5 13L6.5 10L10.5 9.5L12 6L13.5 9.5L17.5 10L14.5 13L15.5 17L12 15Z" fill="currentColor" />
                <path d="M12 18L6 21L7.5 14L2 9L9.5 8L12 2L14.5 8L22 9L16.5 14L18 21L12 18Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-[#0ef34b]/70 font-mono">Golden Quantum Award</div>
              <div className="text-lg font-bold text-white font-mono">2050</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
