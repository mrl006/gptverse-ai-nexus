
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
      {/* Wave pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-30">
          <svg viewBox="0 0 1440 800" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[140%] min-h-[140%]">
            <path d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,192C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#gradient1)" className="opacity-40 transform-gpu animate-pulse-slow">
            </path>
            <path d="M0,160L48,138.7C96,117,192,75,288,69.3C384,64,480,96,576,133.3C672,171,768,213,864,213.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#gradient2)" className="opacity-40 transform-gpu animate-pulse-slow animation-delay-2000">
            </path>
            <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#gradient3)" className="opacity-40 transform-gpu animate-pulse-slow animation-delay-4000">
            </path>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(0, 174, 255)', stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: 'rgb(14, 243, 75)', stopOpacity: 1 }}></stop>
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(157, 78, 221)', stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: 'rgb(0, 174, 255)', stopOpacity: 1 }}></stop>
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(14, 243, 75)', stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: 'rgb(157, 78, 221)', stopOpacity: 1 }}></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Main content area with glass effect */}
      <div className="container mx-auto px-4 z-10 pt-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-left max-w-lg">
            <div className="mb-4 opacity-0 animate-text-reveal">
              <span className="px-4 py-1 rounded-full bg-gptv-neon-blue/20 text-gptv-neon-blue text-sm font-medium border border-gptv-neon-blue/30 backdrop-blur-sm">
                🚀 Multi-platform AI Hub
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-text-reveal-delay-1">
              <span className="text-gradient-animate">GPTVerse</span>
              <span className="block text-3xl md:text-4xl text-white/80 mt-2">AI-Driven Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 opacity-0 animate-text-reveal-delay-2">
              Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-text-reveal-delay-2">
              <Button className="bg-gradient-to-r from-gptv-neon-blue to-gptv-teal hover:brightness-110 text-white py-6 px-8 text-lg group breathe">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-gptv-neon-blue text-white hover:bg-gptv-neon-blue/20 py-6 px-8 text-lg backdrop-blur-sm">
                VR | WebGL | Windows
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            {/* Interactive card inspired by the reference image */}
            <div className="glass-card p-6 rounded-2xl backdrop-blur-xl relative overflow-hidden transition-all hover:shadow-lg hover:shadow-gptv-neon-blue/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gptv-blue via-gptv-teal to-gptv-magenta"></div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gptv-neon-blue/30 flex items-center justify-center text-white">
                      AI
                    </div>
                    <span className="font-medium">GPTVerse Assistant</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gptv-neon-violet/20 flex items-center justify-center">
                    <span className="text-white">⋮</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gptv-deep-navy/70 mb-3">
                  <p className="text-white/90">How can I help you with AI integration today?</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gptv-neon-blue/20 text-gptv-neon-blue text-xs border border-gptv-neon-blue/30">
                    4.3h Runtime
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gptv-teal/20 text-gptv-teal text-xs border border-gptv-teal/30">
                    Multi-Platform
                  </span>
                </div>
              </div>
              
              <div className="p-4 bg-gptv-gray/30 rounded-lg">
                <div className="text-xs text-white/60 mb-2">CAPABILITIES</div>
                <div className="mb-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-md bg-gptv-blue/30 text-white text-xs">
                      Natural Language
                    </span>
                    <span className="px-2 py-1 rounded-md bg-gptv-teal/30 text-white text-xs">
                      Data Analysis
                    </span>
                    <span className="px-2 py-1 rounded-md bg-gptv-neon-violet/30 text-white text-xs">
                      Image Processing
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button className="w-full bg-gradient-to-r from-gptv-neon-blue to-gptv-teal text-white">
                    AI Generate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom horizontal line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gptv-neon-blue/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
