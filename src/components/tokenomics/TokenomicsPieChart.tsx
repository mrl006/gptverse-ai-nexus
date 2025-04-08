
import React, { useState, useRef, useEffect } from 'react';
import { tokenDistribution } from './TokenDistributionData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PieChartVisualization from './PieChartVisualization';
import DistributionTabContent from './DistributionTabContent';
import VestingTabContent from './VestingTabContent';

const TokenomicsPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [chartWidth, setChartWidth] = useState(700); // Increased default size
  const [chartHeight, setChartHeight] = useState(700); // Increased default size
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive chart sizing
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setChartWidth(width);
        setChartHeight(Math.min(700, width)); // Increased max height
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
  
  // Filter to show only the top 4 allocations
  const topDistributions = sortedTokenDistribution.slice(0, 4);

  return (
    <div ref={containerRef} className="w-full">
      <div className="bg-black/40 rounded-xl border border-white/10 p-6 backdrop-blur-sm overflow-hidden">
        <div className="lg:grid lg:grid-cols-3 gap-8">
          {/* Larger pie chart column */}
          <div className="lg:col-span-2 relative">
            <PieChartVisualization 
              sortedTokenDistribution={sortedTokenDistribution}
              activeIndex={activeIndex}
              onPieEnter={onPieEnter}
              onPieLeave={onPieLeave}
              topDistributions={topDistributions}
              chartWidth={chartWidth}
            />
          </div>
          
          {/* Info column */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-white/10 h-full">
              <Tabs defaultValue="distribution" className="w-full">
                <TabsList className="w-full mb-4 bg-black/40 border border-white/5">
                  <TabsTrigger value="distribution" className="flex-1">Distribution</TabsTrigger>
                  <TabsTrigger value="vesting" className="flex-1">Vesting Schedule</TabsTrigger>
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
