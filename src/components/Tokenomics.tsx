
import React from 'react';
import { tokenDistribution } from './tokenomics/TokenDistributionData';
import PieChartVisualization from './tokenomics/PieChartVisualization';

const Tokenomics = () => {
  // Sort token distribution data by value (descending)
  const sortedTokenDistribution = [...tokenDistribution].sort((a, b) => b.value - a.value);
  
  // Get top 5 distributions for labels
  const topDistributions = sortedTokenDistribution.slice(0, 5);

  return (
    <section id="tokenomics" className="relative py-28 overflow-hidden">
      {/* Enhanced background with more depth */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Improved ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-[#0ef34b]/5 blur-[180px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00aeff]/5 blur-[150px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-16">
          {/* Main visualization section - Only pie chart */}
          <div className="max-w-3xl mx-auto w-full backdrop-blur-xl border border-white/10 rounded-2xl 
                          shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-6 bg-black/10">
            <h3 className="text-center text-2xl font-bold text-white mb-6">Token Allocation</h3>
            <PieChartVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
