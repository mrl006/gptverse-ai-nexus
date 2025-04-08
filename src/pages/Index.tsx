
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Stars background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Stars */}
        <div className="absolute top-[5%] left-[10%] w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-[25%] left-[30%] w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-[10%] right-[10%] w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-[20%] right-[20%] w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-[30%] right-[30%] w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-[10%] left-[15%] w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-[20%] left-[25%] w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-[30%] right-[15%] w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-[40%] right-[25%] w-1 h-1 bg-white rounded-full opacity-70"></div>
      </div>
      
      {/* Main content wrapper with properly layered sections */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Main content sections */}
        <div className="flex-grow">
          <Hero />
          
          <div id="overview" className="section-anchor"></div>
          <div id="features" className="section-anchor"></div>
          <div id="roadmap" className="section-anchor"></div>
          <div id="faq" className="section-anchor"></div>
          <div id="about" className="section-anchor"></div>
          
          {/* Hide these sections for now as they don't appear in the reference image */}
          <div className="hidden">
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
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
