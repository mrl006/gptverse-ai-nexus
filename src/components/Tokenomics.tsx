
import React from 'react';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import TokenomicsPieChart from './tokenomics/TokenomicsPieChart';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden bg-[#040812]">
      {/* Creative background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)] animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjFoNjBWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNMCAzMHYxaDYwdi0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0wIDYwdi0xaDYwdjF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PHBhdGggZD0iTTAgMGgxdjYwSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PHBhdGggZD0iTTMwIDBoMXY2MGgtMXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNNjAgMGgtMXY2MGgxeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/5 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-[#D946EF]/5 blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              backgroundColor: i % 2 === 0 ? '#8B5CF6' : '#D946EF',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-16">
          {/* Top section - Heading with creative style */}
          <TokenomicsHeading />
          
          {/* Main content - Enhanced pie chart */}
          <div className="w-full max-w-6xl mx-auto">
            <TokenomicsPieChart />
          </div>
          
          {/* Token info cards - Glassmorphism design */}
          <div className="max-w-6xl mx-auto">
            <TokenomicsInfoCards />
          </div>
          
          {/* Key highlights section with glassmorphism */}
          <div className="max-w-6xl mx-auto">
            <div className="neo-blur p-8 rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(109,40,217,0.1)] backdrop-blur-xl">
              <div className="flex items-center mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-[#8B5CF6] to-[#D946EF] mr-4 rounded-full animate-pulse-slow"></div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Key Tokenomics Highlights</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="neo-blur p-5 rounded-xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6]/20 to-[#D946EF]/20 flex items-center justify-center text-white mr-3 mt-1 backdrop-blur-xl border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B5CF6]">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Deflationary Mechanism</h4>
                      <p className="text-white/60 mt-2 text-sm">1% of all transactions are burned to create deflationary pressure on the supply.</p>
                    </div>
                  </div>
                </div>
                
                <div className="neo-blur p-5 rounded-xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(217,70,239,0.15)]">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D946EF]/20 to-[#8B5CF6]/20 flex items-center justify-center text-white mr-3 mt-1 backdrop-blur-xl border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D946EF]">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Staking Incentives</h4>
                      <p className="text-white/60 mt-2 text-sm">Staking rewards are distributed from ecosystem allocation, with up to 18% APY.</p>
                    </div>
                  </div>
                </div>
                
                <div className="neo-blur p-5 rounded-xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06B6D4]/20 to-[#8B5CF6]/20 flex items-center justify-center text-white mr-3 mt-1 backdrop-blur-xl border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#06B6D4]">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">DAO Governance</h4>
                      <p className="text-white/60 mt-2 text-sm">Token holders can participate in protocol governance with voting power proportional to holdings.</p>
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
