
import React, { useState, useRef, useEffect } from 'react';
import { tokenDistribution } from './TokenDistributionData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PieChartVisualization from './PieChartVisualization';
import DistributionTabContent from './DistributionTabContent';
import VestingTabContent from './VestingTabContent';

const TokenomicsPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [chartWidth, setChartWidth] = useState(700);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive chart sizing
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setChartWidth(width);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
    setSelectedCategory(tokenDistribution[index].name);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
    setSelectedCategory(null);
  };

  // Custom sort tokenDistribution by value (descending)
  const sortedTokenDistribution = [...tokenDistribution].sort((a, b) => b.value - a.value);

  return (
    <div ref={containerRef} className="w-full">
      <div className="neo-blur p-8 rounded-2xl border border-white/10 shadow-[0_10px_50px_rgba(139,92,246,0.1)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-[0_10px_50px_rgba(139,92,246,0.15)]">
        <div className="lg:grid lg:grid-cols-7 gap-8">
          {/* Enlarged pie chart column */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            <div className="max-w-[600px] mx-auto transform transition-all duration-700 hover:scale-105">
              <PieChartVisualization 
                sortedTokenDistribution={sortedTokenDistribution}
                activeIndex={activeIndex}
                onPieEnter={onPieEnter}
                onPieLeave={onPieLeave}
              />
            </div>
          </div>
          
          {/* Info column with glassmorphism */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <div className="neo-blur p-5 rounded-xl h-full border border-white/10 shadow-lg">
              <Tabs defaultValue="distribution" className="w-full">
                <TabsList className="w-full mb-4 bg-black/40 border border-white/10 rounded-lg overflow-hidden">
                  <TabsTrigger 
                    value="distribution" 
                    className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#8B5CF6]/30 data-[state=active]:to-[#D946EF]/20 data-[state=active]:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all duration-300"
                  >
                    Distribution
                  </TabsTrigger>
                  <TabsTrigger 
                    value="vesting" 
                    className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D946EF]/20 data-[state=active]:to-[#06B6D4]/20 data-[state=active]:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all duration-300"
                  >
                    Vesting Schedule
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="distribution" className="h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                  <DistributionTabContent 
                    sortedTokenDistribution={sortedTokenDistribution}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </TabsContent>
                
                <TabsContent value="vesting" className="h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                  <VestingTabContent />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPieChart;
