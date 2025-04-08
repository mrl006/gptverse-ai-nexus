
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlatformButtons from '../components/PlatformButtons';
import ProductView from '../components/ProductView';
import AiServices from '../components/AiServices';
import Footer from '../components/Footer';
import Explore from '../components/Explore';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040812] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-[#0ef34b] rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-[25%] left-[40%] w-1 h-1 bg-[#00aeff] rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[70%] left-[20%] w-1 h-1 bg-[#d946ef] rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[30%] right-[25%] w-1 h-1 bg-[#0ef34b] rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[60%] right-[10%] w-1 h-1 bg-[#00aeff] rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        <div className="absolute h-full w-full opacity-10">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(14,243,75,0.1)_0%,rgba(14,243,75,0)_70%)] animate-pulse-slow" style={{transformOrigin: '30% 30%'}}></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(0,174,255,0.1)_0%,rgba(0,174,255,0)_70%)] animate-pulse-slow" style={{transformOrigin: '70% 60%', animationDelay: '2s'}}></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.05)_0%,rgba(217,70,239,0)_70%)] animate-pulse-slow" style={{transformOrigin: '50% 50%', animationDelay: '4s'}}></div>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Hero />
          
          <div className="relative z-20 w-full px-6 py-12 bg-[#030610]/80 backdrop-blur-sm border-y border-white/5">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-3">
                  <span className="text-[#0ef34b]">EXPLORE</span>
                  <span className="text-white mx-3">THE</span>
                  <span className="text-[#00aeff]">GPTVERSE</span>
                </h2>
                <div className="relative">
                  <div className="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
                  <p className="text-[#0ef34b]/60 text-lg font-mono uppercase tracking-wider mt-4">
                    NEXT-GEN AI POWERED TOOLS
                  </p>
                  <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/30 to-transparent"></div>
                </div>
              </div>
              <PlatformButtons />
            </div>
            
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00aeff]/30 to-transparent"></div>
          </div>
          
          <ProductView />
          <AiServices />
          <Explore />
          
          <div id="overview" className="section-anchor pt-20"></div>
          <div id="features" className="section-anchor pt-20"></div>
          <div id="roadmap" className="section-anchor pt-20"></div>
          <div id="faq" className="section-anchor pt-20"></div>
          <div id="about" className="section-anchor pt-20"></div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
