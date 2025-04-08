
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { TokenDistributionItem } from './TokenDistributionData';
import PieChartActiveShape from './PieChartActiveShape';
import PieChartTooltip from './PieChartTooltip';
import ChartConnectors from './ChartConnectors';

interface PieChartVisualizationProps {
  sortedTokenDistribution: TokenDistributionItem[];
  activeIndex: number | null;
  onPieEnter: (_: any, index: number) => void;
  onPieLeave: () => void;
  topDistributions: TokenDistributionItem[];
  chartWidth: number;
}

const PieChartVisualization: React.FC<PieChartVisualizationProps> = ({
  sortedTokenDistribution,
  activeIndex,
  onPieEnter,
  onPieLeave,
  topDistributions,
  chartWidth
}) => {
  return (
    <div className="aspect-square mx-auto relative">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 rounded-full bg-black/30 backdrop-blur-md transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[80%] h-[80%]"></div>
      
      {/* Glowing background effect */}
      <div className="absolute inset-0 blur-[80px] opacity-30">
        {sortedTokenDistribution.map((entry, index) => (
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
          {/* SVG Filters for glow effects */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Main pie chart */}
          <Pie
            activeIndex={activeIndex !== null ? activeIndex : undefined}
            activeShape={PieChartActiveShape}
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
          
          <Tooltip content={<PieChartTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      
      <ChartConnectors topDistributions={topDistributions} chartWidth={chartWidth} />
    </div>
  );
};

export default PieChartVisualization;
