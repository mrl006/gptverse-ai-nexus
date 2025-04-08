
import React from 'react';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import TokenomicsPieChart from './tokenomics/TokenomicsPieChart';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden bg-[#040812]">
      {/* Simple background with less green */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_80%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjFoNjBWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNMCAzMHYxaDYwdi0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0wIDYwdi0xaDYwdjF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PHBhdGggZD0iTTAgMGgxdjYwSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PHBhdGggZD0iTTMwIDBoMXY2MGgtMXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNNjAgMGgtMXY2MGgxeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Ambient lighting - less green */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#8B5CF6]/5 blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-[#D946EF]/5 blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#06B6D4]/5 blur-[100px]"></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-12">
          {/* Top section - Heading */}
          <TokenomicsHeading />
          
          {/* Main content - Simple layout with big pie chart */}
          <div className="w-full max-w-6xl mx-auto">
            <TokenomicsPieChart />
          </div>
          
          {/* Token info cards - Minimalist design */}
          <div className="max-w-6xl mx-auto">
            <TokenomicsInfoCards />
          </div>
          
          {/* Simplified key highlights section */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-black/40 p-6 rounded-xl border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-white/30 mr-4"></div>
                <h3 className="text-xl font-semibold text-white">Key Tokenomics Highlights</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Deflationary Mechanism</h4>
                      <p className="text-white/60 mt-1 text-sm">1% of all transactions are burned to create deflationary pressure on the supply.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Staking Incentives</h4>
                      <p className="text-white/60 mt-1 text-sm">Staking rewards are distributed from ecosystem allocation, with up to 18% APY.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">DAO Governance</h4>
                      <p className="text-white/60 mt-1 text-sm">Token holders can participate in protocol governance with voting power.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
