
import React, { useState } from 'react';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsPieChart from './tokenomics/TokenomicsPieChart';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DistributionTabContent from './tokenomics/DistributionTabContent';
import VestingTabContent from './tokenomics/VestingTabContent';
import { tokenDistribution } from './tokenomics/TokenDistributionData';

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sort token distribution data by value (descending)
  const sortedTokenDistribution = [...tokenDistribution].sort((a, b) => b.value - a.value);
  
  // Get top 5 distributions for labels
  const topDistributions = sortedTokenDistribution.slice(0, 5);

  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-[#0ef34b]/5 blur-[180px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00aeff]/5 blur-[150px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-16">
          {/* Top section - Heading with creative style */}
          <TokenomicsHeading />
          
          {/* Middle section - Token information cards */}
          <TokenomicsInfoCards />
          
          {/* Main content - Enhanced tokenomics data display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl mx-auto mt-10">
            {/* Left side - Pie chart visualization */}
            <div className="w-full px-4 backdrop-blur-sm border border-[#0ef34b]/10 rounded-2xl shadow-[0_5px_30px_rgba(14,243,75,0.08)] p-6">
              <TokenomicsPieChart 
                activeIndex={activeIndex} 
                topDistributions={topDistributions}
                selectedCategory={selectedCategory}
              />
            </div>
            
            {/* Right side - Tabbed information */}
            <div className="w-full px-4 backdrop-blur-sm border border-[#0ef34b]/10 rounded-2xl shadow-[0_5px_30px_rgba(14,243,75,0.08)] p-6">
              <Tabs defaultValue="distribution" className="w-full">
                <TabsList className="mb-6 w-full grid grid-cols-2 bg-black/20 border border-white/5">
                  <TabsTrigger value="distribution">Distribution</TabsTrigger>
                  <TabsTrigger value="vesting">Vesting Schedule</TabsTrigger>
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
