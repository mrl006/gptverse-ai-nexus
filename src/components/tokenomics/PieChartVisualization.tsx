
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
      {/* Clean, subtle background */}
      <div className="absolute inset-0 rounded-full bg-black/30 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[80%] h-[80%]"></div>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Main pie chart with simpler design */}
          <Pie
            activeIndex={activeIndex !== null ? activeIndex : undefined}
            activeShape={PieChartActiveShape}
            data={sortedTokenDistribution}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="75%"
            paddingAngle={1}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth={1}
          >
            {sortedTokenDistribution.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                style={{
                  filter: activeIndex === index 
                    ? `drop-shadow(0 0 4px ${entry.color})`
                    : 'none',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Pie>
          
          {/* Center logo - simplified */}
          <foreignObject x="35%" y="35%" width="30%" height="30%">
            <div className="w-full h-full rounded-full flex flex-col items-center justify-center bg-[#06101a] border border-white/10 shadow-lg">
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
