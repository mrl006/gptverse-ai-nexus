
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
    <div className="min-h-screen bg-gptv-dark text-white overflow-x-hidden">
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
  );
};

export default Index;
