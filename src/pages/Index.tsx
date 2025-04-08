
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
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gptv-neon-blue/10 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-gptv-neon-violet/10 blur-[100px]"></div>
        <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-gptv-teal/10 blur-[120px]"></div>
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
