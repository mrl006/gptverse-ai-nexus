
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('');
  const originalText = "Your AI Hub and Multi-Platform Gateway";
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
      {/* Large orbital/planet background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-alien-dark via-alien-darker to-alien-deep-navy z-0"></div>
      
      {/* Large orbital circle */}
      <div className="absolute w-[150vw] h-[150vw] rounded-full border border-alien-neon/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Inner orbital circles with glow */}
      <div className="absolute w-[120vw] h-[120vw] rounded-full border border-alien-neon/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute w-[90vw] h-[90vw] rounded-full border border-alien-neon/15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Stars in background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>
      
      {/* Centered content */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        {/* Main heading with space theme */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
            <div className="leading-tight">
              <span className="bg-gradient-to-r from-alien-neon via-alien-blue to-alien-cyan bg-clip-text text-transparent">
                Sites beyond imagination,
              </span>
            </div>
            <div className="leading-tight mt-2">
              <span className="bg-gradient-to-r from-alien-neon via-alien-blue to-alien-cyan bg-clip-text text-transparent">
                one prompt away.
              </span>
            </div>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto">
            {glitchText}
          </p>
        </div>
        
        {/* Input field and generate button */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10 max-w-2xl mx-auto">
          <div className="flex-1 relative flex items-center">
            <div className="absolute left-3 text-white/40">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 17V17.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 14L12.01 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 11L12.01 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 8L12.01 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <input 
              type="text"
              placeholder="Promo page for Pixar"
              className="w-full backdrop-blur-lg bg-white/5 border border-alien-neon/30 text-white placeholder:text-white/40 py-3 pl-11 pr-4 rounded-full focus:outline-none focus:border-alien-neon/60"
            />
          </div>
          <Button className="rounded-full px-6 py-2 bg-white text-black hover:bg-white/90 transition-colors whitespace-nowrap h-12">
            Generate <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
        
        {/* Watch video button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 text-white" />
            </div>
            <span>Watch the video</span>
          </button>
        </div>
        
        {/* Preview image with glow */}
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-alien-neon/20 rounded-lg filter blur-xl transform scale-95 translate-y-4 opacity-30"></div>
          <img 
            src="/lovable-uploads/680c48bd-1f70-4cef-a4ac-78feaf77efca.png" 
            alt="GPTVerse Preview" 
            className="relative rounded-lg border border-alien-neon/20 shadow-lg w-full"
          />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-alien-neon/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
