
import React, { useEffect } from 'react';
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

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gptv-navy text-white overflow-x-hidden tech-bg">
      {/* Glassy background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gptv-neon-blue/10 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-gptv-neon-violet/10 blur-[100px]"></div>
        <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-gptv-teal/10 blur-[120px]"></div>
        
        {/* Animated wave lines in background inspired by the reference image */}
        <div className="absolute inset-0 opacity-30">
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
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Explore />
        <Features />
        <Tokenomics />
        <TokenUtility />
        <Roadmap />
        <Partners />
        <Faq />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
