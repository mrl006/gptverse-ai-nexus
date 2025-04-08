
import React from 'react';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import TokenomicsPieChart from './tokenomics/TokenomicsPieChart';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden bg-[#040812]">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(139,92,246,0.08)_0%,transparent_80%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjFoNjBWMHoiIGZpbGw9InJnYmEoMTM5LDkyLDI0NiwwLjAyKSIvPjxwYXRoIGQ9Ik0wIDMwdjFoNjB2LTF6IiBmaWxsPSJyZ2JhKDEzOSw5MiwyNDYsMC4wMikiLz48cGF0aCBkPSJNMCA2MHYtMWg2MHYxeiIgZmlsbD0icmdiYSgxMzksOTIsMjQ2LDAuMDIpIi8+PHBhdGggZD0iTTAgMGgxdjYwSDB6IiBmaWxsPSJyZ2JhKDEzOSw5MiwyNDYsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjYwaC0xeiIgZmlsbD0icmdiYSgxMzksOTIsMjQ2LDAuMDIpIi8+PHBhdGggZD0iTTYwIDBoLTF2NjBoMXoiIGZpbGw9InJnYmEoMTM5LDkyLDI0NiwwLjAyKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Ambient lighting effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#8B5CF6]/5 blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-[#D946EF]/5 blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#06B6D4]/5 blur-[100px]"></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-16">
          {/* Top section - Heading */}
          <TokenomicsHeading />
          
          {/* Middle section - Pie chart and cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left column - Info cards on larger screens */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <TokenomicsInfoCards />
            </div>
            
            {/* Right column - Pie chart */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <TokenomicsPieChart />
            </div>
          </div>
          
          {/* Bottom section - Key highlights */}
          <div className="mt-12">
            <div className="neo-blur p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-[#8B5CF6] mr-4"></div>
                <h3 className="text-xl font-semibold text-white">Key Tokenomics Highlights</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Deflationary Mechanisms</h4>
                      <p className="text-white/70 mt-1 text-sm">1% of all transactions are burned to create deflationary pressure on the token supply.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#D946EF]/10 flex items-center justify-center text-[#D946EF] mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Staking Incentives</h4>
                      <p className="text-white/70 mt-1 text-sm">Staking rewards are distributed from a portion of the ecosystem allocation, with up to 18% APY.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">DAO Governance</h4>
                      <p className="text-white/70 mt-1 text-sm">Token holders can participate in protocol governance with voting power proportional to holdings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add neo-blur utility class to index.css */}
      <style jsx global>{`
        .neo-blur {
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
      `}</style>
    </section>
  );
};

export default Tokenomics;
