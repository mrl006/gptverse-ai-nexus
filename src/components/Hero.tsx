
import React from 'react';
import PlatformButtons from './PlatformButtons';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Glassy Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark gradient overlay with green tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0A2A18]/80 to-black/60 z-0"></div>
        
        {/* Animated glass panels in background */}
        <div className="absolute top-[30%] left-[15%] w-[300px] h-[300px] rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 rotate-12 opacity-20 animate-float"></div>
        
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 -rotate-6 opacity-30 animate-float animation-delay-2000"></div>
        
        {/* Glowing orbs with green tint */}
        <div className="absolute top-[20%] right-[35%] w-[200px] h-[200px] rounded-full bg-green-500/10 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-[30%] left-[25%] w-[180px] h-[180px] rounded-full bg-green-400/10 blur-[60px] animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-[60%] right-[15%] w-[150px] h-[150px] rounded-full bg-emerald-500/10 blur-[70px] animate-pulse-slow animation-delay-4000"></div>
      </div>
      
      {/* Main content area */}
      <div className="container mx-auto px-4 z-10 pt-24 md:pt-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-left max-w-lg">
            <div className="mb-4 opacity-0 animate-text-reveal">
              <span className="px-4 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium border border-green-500/30 backdrop-blur-sm">
                🚀 Multi-platform AI Hub
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-text-reveal-delay-1">
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">GPTVerse</span>
              <span className="block text-3xl md:text-4xl text-white/80 mt-2">AI-Driven Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 opacity-0 animate-text-reveal-delay-2">
              Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp
            </p>
            
            <PlatformButtons />
          </div>
          
          <div className="hidden md:flex md:justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="glass-card p-6 rounded-2xl backdrop-blur-xl relative h-[380px]">
                <img 
                  src="/lovable-uploads/6acb1d46-209d-4450-b48e-5ec82fa59a10.png" 
                  alt="GPTVerse Platform Preview" 
                  className="w-full h-full object-cover rounded-lg"
                />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <h3 className="text-white font-medium mb-1">Experience GPTVerse</h3>
                    <p className="text-white/70 text-sm">Advanced AI tools across multiple platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom horizontal line with enhanced glass effect */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent backdrop-blur-sm"></div>
    </section>
  );
};

export default Hero;
