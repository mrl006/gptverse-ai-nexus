
import React from 'react';
import TokenomicsChart from './tokenomics/TokenomicsChart';
import TokenomicsSupply from './tokenomics/TokenomicsSupply';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden bg-[#040812]">
      {/* Dark background with subtle grid */}
      <div className="absolute inset-0 bg-[#040812] opacity-100"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjFoNjBWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNMCAzMHYxaDYwdi0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0wIDYwdi0xaDYwdjF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PHBhdGggZD0iTTAgMGgxdjYwSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PHBhdGggZD0iTTMwIDBoMXY2MGgtMXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNNjAgMGgtMXY2MGgxeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-[#00F0B5]/5 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-[#FF56F6]/5 blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-16">
          {/* Section heading */}
          <div className="w-full space-y-8 text-center">
            <div className="inline-block">
              <div className="relative">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-[#00F0B5] via-white to-[#FF56F6] bg-clip-text text-transparent drop-shadow-sm">
                    TOKENOMICS
                  </span>
                </h2>
                <div className="absolute -bottom-3 left-0 h-1 w-full bg-gradient-to-r from-[#00F0B5]/20 via-[#FF56F6] to-[#00F0B5]/20 animate-shimmer"></div>
                <div className="absolute -bottom-4 left-0 h-3 w-full blur-md bg-gradient-to-r from-[#00F0B5]/30 via-[#FF56F6]/20 to-[#00F0B5]/30 animate-shimmer"></div>
              </div>
            </div>
          </div>
          
          {/* Tokenomics chart */}
          <div className="w-full max-w-5xl mx-auto">
            <TokenomicsChart />
          </div>
          
          {/* Supply info */}
          <div className="max-w-5xl mx-auto w-full">
            <TokenomicsSupply />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
