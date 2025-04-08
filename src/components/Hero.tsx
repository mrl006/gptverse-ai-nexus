
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create particles
    const createParticle = () => {
      if (!heroRef.current) return;
      
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Random color
      const colors = ['bg-gptv-neon-blue', 'bg-gptv-teal', 'bg-gptv-neon-violet', 'bg-gptv-green'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.classList.add(randomColor);
      
      // Random animation duration
      const animDuration = Math.random() * 10 + 5;
      particle.style.animationDuration = `${animDuration}s`;
      
      // Random delay
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
      
      // Append particle
      heroRef.current.appendChild(particle);
      
      // Remove after animation
      setTimeout(() => {
        if (heroRef.current && heroRef.current.contains(particle)) {
          heroRef.current.removeChild(particle);
        }
        createParticle();
      }, animDuration * 1000 + delay * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }
    
    // Create blip effects
    const createBlip = () => {
      if (!heroRef.current) return;
      
      const blip = document.createElement('div');
      blip.classList.add('blip');
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      blip.style.left = `${posX}%`;
      blip.style.top = `${posY}%`;
      
      // Random size
      const size = Math.random() * 6 + 4;
      blip.style.width = `${size}px`;
      blip.style.height = `${size}px`;
      
      // Append blip
      heroRef.current.appendChild(blip);
      
      // Remove after animation
      setTimeout(() => {
        if (heroRef.current && heroRef.current.contains(blip)) {
          heroRef.current.removeChild(blip);
        }
        // Create a new one
        setTimeout(createBlip, Math.random() * 2000);
      }, 2000);
    };
    
    // Create initial blips
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createBlip(), i * 500);
    }
    
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hexagon grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.017 0l5.983 5.984v48.032l-5.983 5.984H6.017L0 54.016V5.984L6.017 0h48zm-2.403 3H8.42l-5.444 5.442v43.116l5.444 5.442h43.194l5.444-5.442V8.442L51.614 3zM30 18a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z' fill='%2300C2FF' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Glass panel with content */}
      <div className="container mx-auto px-4 z-10 pt-16 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-12 w-full shimmer">
            <div className="mb-4 opacity-0 animate-text-reveal">
              <span className="px-4 py-1 rounded-full bg-gptv-neon-blue/20 text-gptv-neon-blue text-sm font-medium border border-gptv-neon-blue/30 backdrop-blur-sm">
                🚀 Multi-platform AI Hub
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-text-reveal-delay-1">
              <span className="text-gradient-animate">GPTVerse</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl opacity-0 animate-text-reveal-delay-2">
              Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-text-reveal-delay-2">
              <Button className="bg-gradient-to-r from-gptv-neon-blue to-gptv-teal hover:brightness-110 text-white py-6 px-8 text-lg group breathe">
                Get it on AI HUB
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-gptv-neon-blue text-white hover:bg-gptv-neon-blue/20 py-6 px-8 text-lg backdrop-blur-sm">
                VR | WebGL | Windows
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#explore" className="text-white/60 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Additional background elements */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gptv-neon-blue/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
