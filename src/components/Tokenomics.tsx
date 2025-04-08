
import React from 'react';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import TokenomicsPieChart from './tokenomics/TokenomicsPieChart';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(14,243,75,0.15)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left column - Heading and description */}
          <div className="flex flex-col space-y-6">
            <TokenomicsHeading />
            <TokenomicsInfoCards />
          </div>
          
          {/* Right column - Pie chart */}
          <TokenomicsPieChart />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
