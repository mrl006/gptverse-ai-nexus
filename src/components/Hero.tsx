
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#090919] to-[#111133] z-0"></div>
      
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-[20%] left-[25%] w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-[15%] right-[30%] w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-[60%] left-[5%] w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-[30%] right-[15%] w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-[10%] left-[40%] w-1 h-1 bg-white rounded-full opacity-50"></div>
      </div>
      
      {/* Large circular gradient in background */}
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] rounded-full bg-gradient-to-b from-[#090919]/0 via-[#131347]/20 to-[#090919]/0 opacity-50"></div>
      
      {/* Logo and Beta tag */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center justify-center mb-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 via-purple-600 to-blue-500 flex items-center justify-center">
            <div className="text-white">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 12L12 8L17 12L12 16Z" fill="white" />
                <path d="M12 4L4 12L12 20L20 12L12 4Z" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
            GPTVerse AI 
            <span className="ml-2 text-xs px-2 py-1 bg-white/10 rounded-full text-white/80">Beta</span>
          </h2>
        </div>
      </div>
      
      {/* Main heading */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-white">Sites beyond </span>
          <span className="text-white/50">imagination,</span>
        </h1>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="text-white">one prompt </span>
          <span className="text-white/50">away.</span>
        </h1>
      </div>
      
      {/* Search/prompt input */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 mb-16">
        <div className="flex items-center bg-[#13131f]/80 backdrop-blur-md border border-white/10 rounded-full overflow-hidden">
          <div className="flex-shrink-0 pl-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L7 12L12 8L17 12L12 16Z" fill="white" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="A modern art gallery, Magritte and Chagall style."
            className="flex-grow py-4 px-4 bg-transparent text-white/90 outline-none"
          />
          <Button 
            className="m-1 rounded-full bg-white hover:bg-white/90 text-black"
          >
            Generate <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>
      </div>
      
      {/* Watch video button */}
      <div className="relative z-10 flex justify-center">
        <Button 
          variant="outline" 
          className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
        >
          <Play size={18} className="mr-2" /> Watch the video
        </Button>
      </div>
      
      {/* Award badge */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="bg-[#13131f]/50 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3">
          <div className="flex items-center">
            <div className="mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L8.5 17L9.5 13L6.5 10L10.5 9.5L12 6L13.5 9.5L17.5 10L14.5 13L15.5 17L12 15Z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-white/70">Golden Kitty Awards</div>
              <div className="text-lg font-bold text-white">2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
