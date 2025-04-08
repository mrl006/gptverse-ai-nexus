
import React, { useState, useRef, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from 'recharts';
import { TokenDistributionItem, tokenDistribution, unlockSchedules } from './TokenDistributionData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom Active Shape for the pie chart
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke={fill}
        strokeWidth={2}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 12}
        fill={fill}
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass-card p-4 rounded-lg border border-[#0ef34b]/20 shadow-lg backdrop-blur-xl">
        <div className="font-bold text-lg text-white mb-1">{data.name}</div>
        <div className="text-[#0ef34b] font-mono mb-1">{data.value}%</div>
        {data.description && (
          <div className="text-white/80 text-sm mt-2">{data.description}</div>
        )}
      </div>
    );
  }
  return null;
};

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

  // Find the unlock schedule for the selected category
  const selectedSchedule = selectedCategory 
    ? unlockSchedules.find(s => s.category.includes(selectedCategory.split(' ')[0]))
    : null;

  // Custom sort tokenDistribution by value (descending)
  const sortedTokenDistribution = [...tokenDistribution].sort((a, b) => b.value - a.value);

  return (
    <div ref={containerRef} className="w-full">
      <div className="lg:grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 relative">
          <div className="aspect-square mx-auto relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 blur-[80px] opacity-30">
              {tokenDistribution.map((entry, index) => (
                <div 
                  key={`glow-${index}`}
                  className="absolute rounded-full"
                  style={{
                    backgroundColor: entry.color,
                    width: `${entry.value * 4}%`,
                    height: `${entry.value * 4}%`,
                    top: `${20 + Math.sin(index) * 30}%`,
                    left: `${20 + Math.cos(index) * 30}%`,
                    opacity: 0.3,
                    filter: 'blur(40px)',
                  }}
                />
              ))}
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                {/* Main pie chart */}
                <Pie
                  activeIndex={activeIndex !== null ? activeIndex : undefined}
                  activeShape={renderActiveShape}
                  data={sortedTokenDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius="40%"
                  outerRadius="65%"
                  paddingAngle={1}
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                  stroke="#06101a"
                  strokeWidth={2}
                >
                  {sortedTokenDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{
                        filter: activeIndex === index 
                          ? `drop-shadow(0 0 8px ${entry.color})`
                          : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </Pie>
                
                {/* Center logo */}
                <foreignObject x="35%" y="35%" width="30%" height="30%">
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-[#06101a] border-2 border-[#0ef34b]/30 shadow-lg shadow-[#0ef34b]/10">
                    <span className="text-[#0ef34b] text-3xl font-bold">G</span>
                  </div>
                </foreignObject>
                
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="lg:col-span-2 mt-8 lg:mt-0">
          <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/10 h-full">
            <Tabs defaultValue="distribution" className="w-full">
              <TabsList className="w-full mb-6 bg-[#06101a]/60">
                <TabsTrigger value="distribution" className="flex-1">Distribution</TabsTrigger>
                <TabsTrigger value="vesting" className="flex-1">Vesting Schedule</TabsTrigger>
              </TabsList>
              
              <TabsContent value="distribution" className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Token Distribution</h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                  {sortedTokenDistribution.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                        activeIndex === index || selectedCategory === item.name
                          ? 'bg-white/10 shadow-sm'
                          : 'hover:bg-white/5'
                      }`}
                      onMouseEnter={() => {
                        setActiveIndex(index);
                        setSelectedCategory(item.name);
                      }}
                      onMouseLeave={() => {
                        setActiveIndex(null);
                        setSelectedCategory(null);
                      }}
                    >
                      <div 
                        className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{item.name}</span>
                          <span className="text-[#0ef34b] font-mono">{item.value}%</span>
                        </div>
                        <div className="text-white/60 text-sm mt-1">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="vesting" className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Vesting Schedule</h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                  {unlockSchedules.map((schedule, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{schedule.category}</span>
                        <span className="text-[#0ef34b] bg-[#0ef34b]/10 px-2 py-1 rounded text-xs">
                          {schedule.months} months
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/60">Initial Unlock:</span>
                          <span className="text-white">{schedule.initialUnlock}%</span>
                        </div>
                        <div className="mt-1 text-white/70 text-sm">{schedule.schedule}</div>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-[#0ef34b] to-[#00aeff]"
                          style={{ width: `${schedule.initialUnlock}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPieChart;
