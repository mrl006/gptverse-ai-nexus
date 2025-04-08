
import React, { useState, useRef, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from 'recharts';
import { TokenDistributionItem, tokenDistribution, unlockSchedules } from './TokenDistributionData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";

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
        strokeLinecap="round"
        filter="url(#glow)"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 14}
        fill={fill}
        filter="url(#glow)"
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="neo-blur p-4 rounded-lg border border-[#8B5CF6]/30 shadow-xl backdrop-blur-xl">
        <div className="font-bold text-lg text-white mb-1">{data.name}</div>
        <div className="text-[#8B5CF6] font-mono mb-1">{data.value}%</div>
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
  
  // Filter to show only the top 4 allocations on smaller screens
  const topDistributions = sortedTokenDistribution.slice(0, 4);

  return (
    <div ref={containerRef} className="w-full">
      <div className="neo-blur rounded-xl border border-white/10 p-6 md:p-8 backdrop-blur-xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative">
            {/* SVG Filters for glow effects */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
            </svg>

            <div className="aspect-square mx-auto relative">
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 rounded-full bg-black/30 backdrop-blur-md transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[80%] h-[80%]"></div>
              
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
                    innerRadius="38%"
                    outerRadius="70%"
                    paddingAngle={1}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    onMouseLeave={onPieLeave}
                    stroke="rgba(0,0,0,0.5)"
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
                    <div className="w-full h-full rounded-full flex flex-col items-center justify-center bg-[#06101a] border-2 border-[#8B5CF6]/30 shadow-lg shadow-[#8B5CF6]/10">
                      <span className="text-white text-xs font-medium opacity-70">MAX SUPPLY</span>
                      <span className="text-white text-sm md:text-base font-bold">1,000,000,000</span>
                    </div>
                  </foreignObject>
                  
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Label connectors for larger screens */}
              <div className="hidden md:block">
                {topDistributions.map((entry, index) => {
                  // Position the labels around the chart
                  let posX, posY, anchorX, anchorY, textAlign;
                  const angle = (index / topDistributions.length) * Math.PI * 2;
                  const radius = chartWidth * 0.4; // Adjust based on your chart size
                  
                  posX = 50 + Math.cos(angle) * 42;
                  posY = 50 + Math.sin(angle) * 42;
                  
                  anchorX = 50 + Math.cos(angle) * 75;
                  anchorY = 50 + Math.sin(angle) * 75;
                  
                  textAlign = anchorX > 50 ? 'left' : 'right';
                  
                  return (
                    <div key={`label-${index}`} className="absolute pointer-events-none" style={{
                      top: `${posY}%`,
                      left: `${posX}%`,
                      transform: 'translate(-50%, -50%)',
                    }}>
                      <svg width="150" height="80" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: 'translate(-50%, -50%)',
                        overflow: 'visible'
                      }}>
                        <line
                          x1="0"
                          y1="0"
                          x2={(anchorX - posX) * 1.5}
                          y2={(anchorY - posY) * 1.5}
                          stroke={entry.color}
                          strokeWidth="1.5"
                          strokeDasharray="2,2"
                        />
                      </svg>
                      <div className="absolute whitespace-nowrap" style={{
                        top: (anchorY - posY) * 1.5,
                        left: (anchorX - posX) * 1.5,
                        textAlign: textAlign as any,
                        transform: textAlign === 'left' ? 'translateX(10px)' : 'translateX(-110%)',
                      }}>
                        <div className="text-white font-bold text-sm">{entry.name}</div>
                        <div className="text-[#8B5CF6] font-mono text-sm">{entry.value}%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="neo-blur p-6 rounded-xl backdrop-blur-md border border-white/10 h-full">
              <Tabs defaultValue="distribution" className="w-full">
                <TabsList className="w-full mb-6 bg-black/40 border border-white/5">
                  <TabsTrigger value="distribution" className="flex-1 data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white">Distribution</TabsTrigger>
                  <TabsTrigger value="vesting" className="flex-1 data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white">Vesting Schedule</TabsTrigger>
                </TabsList>
                
                <TabsContent value="distribution" className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Token Distribution</h3>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                    {sortedTokenDistribution.map((item, index) => (
                      <div 
                        key={index}
                        className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                          activeIndex === index || selectedCategory === item.name
                            ? 'bg-[#8B5CF6]/10 shadow-sm border border-[#8B5CF6]/20'
                            : 'hover:bg-white/5 border border-transparent'
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
                          style={{ 
                            backgroundColor: item.color,
                            boxShadow: `0 0 10px ${item.color}80`
                          }}
                        ></div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">{item.name}</span>
                            <span className="text-[#8B5CF6] font-mono">{item.value}%</span>
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
                        className="p-4 rounded-lg border border-white/10 hover:border-[#8B5CF6]/20 transition-all bg-black/20"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{schedule.category}</span>
                          <span className="text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-1 rounded text-xs">
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
                            className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]"
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
    </div>
  );
};

export default TokenomicsPieChart;
