
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
    <section id="tokenomics" className="relative py-24 overflow-hidden bg-alien-dark">
      {/* Creative background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,243,75,0.08)_0%,transparent_70%)] animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjFoNjBWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNMCAzMHYxaDYwdi0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0wIDYwdi0xaDYwdjF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PHBhdGggZD0iTTAgMGgxdjYwSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PHBhdGggZD0iTTMwIDBoMXY2MGgtMXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48cGF0aCBkPSJNNjAgMGgtMXY2MGgxeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-alien-neon/5 blur-[180px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-alien-blue/5 blur-[150px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-alien-magenta/5 blur-[120px] animate-pulse-slow" style={{animationDelay: '3s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              backgroundColor: i % 3 === 0 ? '#0ef34b' : i % 3 === 1 ? '#00aeff' : '#d946ef',
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
          
          {/* Middle section - Token information cards */}
          <TokenomicsInfoCards />
          
          {/* Main content - Enhanced tokenomics data display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl mx-auto mt-10">
            {/* Left side - Pie chart visualization */}
            <div className="w-full px-4 backdrop-blur-sm border border-alien-neon/10 rounded-2xl shadow-[0_5px_30px_rgba(14,243,75,0.08)] p-6">
              <TokenomicsPieChart 
                activeIndex={activeIndex} 
                topDistributions={topDistributions}
                selectedCategory={selectedCategory}
              />
            </div>
            
            {/* Right side - Tabbed information */}
            <div className="w-full px-4 backdrop-blur-sm border border-alien-neon/10 rounded-2xl shadow-[0_5px_30px_rgba(14,243,75,0.08)] p-6">
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
