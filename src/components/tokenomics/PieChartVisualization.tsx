
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
      {/* Ambient light effect behind the chart */}
      <div className="absolute inset-0 w-[90%] h-[90%] rounded-full bg-gradient-to-r from-[#8B5CF6]/10 via-[#D946EF]/10 to-[#06B6D4]/10 blur-[60px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse-slow"></div>
      
      {/* Glassmorphism background */}
      <div className="absolute inset-0 rounded-full bg-black/30 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[85%] h-[85%] border border-white/5"></div>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Glass effect pie */}
          <Pie
            activeIndex={activeIndex !== null ? activeIndex : undefined}
            activeShape={PieChartActiveShape}
            data={sortedTokenDistribution}
            cx="50%"
            cy="50%"
            innerRadius="42%"
            outerRadius="70%"
            paddingAngle={2}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={1}
            className="transform transition-all duration-500 hover:scale-[1.02]"
          >
            {sortedTokenDistribution.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="transition-all duration-300"
                style={{
                  filter: activeIndex === index 
                    ? `drop-shadow(0 0 10px ${entry.color})`
                    : 'none',
                }}
              />
            ))}
          </Pie>
          
          {/* Center logo with glassmorphism */}
          <foreignObject x="32%" y="32%" width="36%" height="36%">
            <div className="w-full h-full rounded-full flex flex-col items-center justify-center neo-blur backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(139,92,246,0.1)] animate-breath">
              <span className="text-white/70 text-xs font-medium mb-1">MAX SUPPLY</span>
              <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-bold text-base md:text-xl tracking-tight">1,000,000,000</span>
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
