
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { tokenDistribution, TokenDistributionItem } from './TokenDistributionData';
import PieChartActiveShape from './PieChartActiveShape';
import PieChartTooltip from './PieChartTooltip';
import ChartConnectors from './ChartConnectors';

interface TokenomicsPieChartProps {
  activeIndex: number | null;
  topDistributions: TokenDistributionItem[];
  selectedCategory: string | null;
}

const TokenomicsPieChart: React.FC<TokenomicsPieChartProps> = ({ 
  activeIndex, 
  topDistributions,
  selectedCategory
}) => {
  // The index in the tokenDistribution array that corresponds to the selected category
  const selectedIndex = selectedCategory 
    ? tokenDistribution.findIndex(item => item.name === selectedCategory)
    : null;
  
  // We prioritize selectedIndex over activeIndex
  const activeIdx = selectedIndex !== null && selectedIndex !== -1 ? selectedIndex : activeIndex;

  return (
    <div className="w-full">
      <h3 className="text-center text-2xl font-bold text-white mb-6">Token Allocation</h3>
      <div className="relative w-full aspect-square max-w-[500px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={tokenDistribution}
              cx="50%"
              cy="50%"
              innerRadius="30%"
              outerRadius="65%"
              paddingAngle={1}
              dataKey="value"
              activeIndex={activeIdx !== null ? [activeIdx] : []}
              activeShape={PieChartActiveShape}
            >
              {tokenDistribution.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth={1}
                  style={{
                    filter: `drop-shadow(0 0 6px ${entry.color}40)`,
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Pie>
            
            <Tooltip content={<PieChartTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-alien-neon font-mono text-lg font-bold">100%</div>
            <div className="text-white/70 text-sm">Total Supply</div>
          </div>
        </div>
        
        {/* Chart connectors with labels */}
        <ChartConnectors topDistributions={topDistributions} chartWidth={500} />
      </div>
    </div>
  );
};

export default TokenomicsPieChart;
