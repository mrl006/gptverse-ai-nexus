
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
      const colors = ['bg-gptv-blue', 'bg-gptv-teal', 'bg-gptv-magenta', 'bg-gptv-green'];
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
    
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern"
    >
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-4 opacity-0 animate-text-reveal">
            <span className="px-4 py-1 rounded-full bg-gptv-gray/60 text-gptv-teal text-sm font-medium">
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
            <Button className="bg-gradient-to-r from-gptv-blue to-gptv-teal hover:brightness-110 text-white py-6 px-8 text-lg group">
              Get it on AI HUB
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-gptv-blue text-white hover:bg-gptv-blue/20 py-6 px-8 text-lg">
              VR | WebGL | Windows
            </Button>
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
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gptv-blue/20 blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gptv-magenta/20 blur-[100px] animate-pulse-glow"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-gptv-teal/20 blur-[100px] animate-pulse-glow"></div>
    </section>
  );
};

export default Hero;
