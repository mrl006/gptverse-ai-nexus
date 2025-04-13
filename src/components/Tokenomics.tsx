
import React, { useState } from 'react';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsPieChart from './tokenomics/TokenomicsPieChart';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DistributionTabContent from './tokenomics/DistributionTabContent';
import VestingTabContent from './tokenomics/VestingTabContent';
import { tokenDistribution } from './tokenomics/TokenDistributionData';
import PieChartVisualization from './tokenomics/PieChartVisualization';

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sort token distribution data by value (descending)
  const sortedTokenDistribution = [...tokenDistribution].sort((a, b) => b.value - a.value);
  
  // Get top 5 distributions for labels
  const topDistributions = sortedTokenDistribution.slice(0, 5);

  return (
    <section id="tokenomics" className="relative py-28 overflow-hidden">
      {/* Enhanced background with green morphism depth */}
      <div className="absolute inset-0 bg-alien-dark"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Improved ambient lighting with green theme */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-alien-neon/5 blur-[180px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-alien-cyan/5 blur-[150px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-16">
          {/* Top section - Enhanced heading */}
          <TokenomicsHeading />
          
          {/* Middle section - Token information cards with improved styling */}
          <div className="max-w-5xl mx-auto w-full">
            <TokenomicsInfoCards />
          </div>
          
          {/* Main visualization section - Cleaner layout */}
          <div className="flex flex-col lg:flex-row items-start gap-12 w-full max-w-6xl mx-auto mt-10">
            {/* Left side - Enhanced pie chart visualization with green glossy morphism */}
            <div className="w-full lg:w-7/12 backdrop-blur-xl border border-alien-neon/10 rounded-2xl 
                            shadow-[0_8px_32px_rgba(14,243,75,0.05)] p-6 bg-black/10">
              <h3 className="text-center text-2xl font-bold text-white mb-6">Token Allocation</h3>
              <PieChartVisualization />
            </div>
            
            {/* Right side - Improved tabbed information with green morphism theme */}
            <div className="w-full lg:w-5/12 backdrop-blur-xl border border-alien-neon/10 rounded-2xl 
                           shadow-[0_8px_32px_rgba(14,243,75,0.05)] p-6 bg-black/10">
              <Tabs defaultValue="distribution" className="w-full">
                <TabsList className="mb-6 w-full grid grid-cols-2 bg-black/30 border border-alien-neon/10">
                  <TabsTrigger value="distribution" className="data-[state=active]:bg-alien-neon/10 data-[state=active]:text-alien-neon">
                    Distribution
                  </TabsTrigger>
                  <TabsTrigger value="vesting" className="data-[state=active]:bg-alien-neon/10 data-[state=active]:text-alien-neon">
                    Vesting Schedule
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="distribution" className="focus-visible:outline-none focus-visible:ring-0">
                  <DistributionTabContent 
                    sortedTokenDistribution={sortedTokenDistribution}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </TabsContent>
                
                <TabsContent value="vesting" className="focus-visible:outline-none focus-visible:ring-0">
                  <VestingTabContent />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
