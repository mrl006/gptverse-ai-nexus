
import React, { useState, useRef, useEffect } from 'react';
import { tokenDistribution } from './TokenDistributionData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";
import PieChartVisualization from './PieChartVisualization';
import DistributionTabContent from './DistributionTabContent';
import VestingTabContent from './VestingTabContent';

const TokenomicsPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [chartWidth, setChartWidth] = useState(600);
  const [chartHeight, setChartHeight] = useState(600);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive chart sizing
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setChartWidth(width);
        setChartHeight(Math.min(600, width));
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
  
  // Filter to show only the top 4 allocations on smaller screens
  const topDistributions = sortedTokenDistribution.slice(0, 4);

  return (
    <div ref={containerRef} className="w-full">
      <div className="neo-blur rounded-xl border border-white/10 p-6 md:p-8 backdrop-blur-xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative">
            <PieChartVisualization 
              sortedTokenDistribution={sortedTokenDistribution}
              activeIndex={activeIndex}
              onPieEnter={onPieEnter}
              onPieLeave={onPieLeave}
              topDistributions={topDistributions}
              chartWidth={chartWidth}
            />
          </div>
          
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="neo-blur p-6 rounded-xl backdrop-blur-md border border-white/10 h-full">
              <Tabs defaultValue="distribution" className="w-full">
                <TabsList className="w-full mb-6 bg-black/40 border border-white/5">
                  <TabsTrigger value="distribution" className="flex-1 data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white">Distribution</TabsTrigger>
                  <TabsTrigger value="vesting" className="flex-1 data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white">Vesting Schedule</TabsTrigger>
                </TabsList>
                
                <TabsContent value="distribution">
                  <DistributionTabContent 
                    sortedTokenDistribution={sortedTokenDistribution}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </TabsContent>
                
                <TabsContent value="vesting">
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
