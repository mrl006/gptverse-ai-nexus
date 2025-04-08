
import React, { useEffect } from 'react';
import { Bot } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Explore from '../components/Explore';
import Features from '../components/Features';
import Tokenomics from '../components/Tokenomics';
import TokenUtility from '../components/TokenUtility';
import Roadmap from '../components/Roadmap';
import Partners from '../components/Partners';
import Faq from '../components/Faq';
import About from '../components/About';
import Footer from '../components/Footer';
import GptverseAssistant from '../components/GptverseAssistant';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gptv-deep-navy to-black text-white overflow-x-hidden">
      {/* Enhanced glassy background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gptv-deep-navy/90 to-black"></div>
        
        {/* Geometric shapes with glass effect */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gptv-neon-blue/5 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-gptv-neon-violet/5 blur-[100px]"></div>
        <div className="absolute top-[40%] right-[15%] w-[300px] h-[300px] rounded-full bg-gptv-teal/5 blur-[120px]"></div>
        
        {/* Hexagon grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMyA0NUgzMEw0NSAzMEw2MCAxNUgzMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
        
        {/* Animated wave lines in background */}
        <div className="absolute inset-0 opacity-20">
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
      
      {/* Main content wrapper with properly layered sections */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Main content sections */}
        <div className="flex-grow">
          <Hero />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full">
            <Explore />
            <Features />
            <Tokenomics />
            <TokenUtility />
            <Roadmap />
            <Partners />
            <Faq />
            <About />
          </div>
        </div>
        
        <Footer />
      </div>
      
      {/* Fixed assistant button for mobile */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button className="rounded-full w-14 h-14 bg-gradient-to-r from-gptv-neon-blue to-gptv-teal flex items-center justify-center shadow-lg shadow-gptv-neon-blue/20 border border-white/10">
          <Bot size={24} className="text-white" />
        </button>
      </div>
      
      {/* Fixed assistant for desktop */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <GptverseAssistant />
      </div>
    </div>
  );
};

export default Index;
