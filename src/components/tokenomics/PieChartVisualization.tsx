
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { tokenDistribution } from './TokenDistributionData';

const RADIAN = Math.PI / 180;

// Simple percentage label
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central" 
      className="text-xs font-mono"
      style={{ fontWeight: 600, opacity: 0.9 }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Enhanced tooltip with glossy style
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="backdrop-blur-lg bg-white/10 p-3 rounded-xl border border-white/20 shadow-xl">
        <p className="text-white font-medium">{payload[0].name}</p>
        <p className="text-white font-mono text-lg">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PieChartVisualization: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <div className="w-full h-[400px] max-w-[600px] mx-auto relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={tokenDistribution}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            innerRadius={70}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={2}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {tokenDistribution.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke="rgba(255,255,255,0.2)"
                style={{
                  filter: activeIndex === index ? `drop-shadow(0 0 10px ${entry.color}80)` : undefined,
                  transition: 'all 0.3s ease',
                  transformOrigin: 'center center',
                  transform: activeIndex === index ? 'scale(1.02)' : 'scale(1)'
                }}
              />
            ))}
          </Pie>
          
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center backdrop-blur-md bg-black/30 p-4 rounded-full border border-white/10 w-28 h-28 flex flex-col items-center justify-center">
          <div className="text-[#0ef34b] font-mono text-lg font-bold">100%</div>
          <div className="text-white/70 text-sm">Total Supply</div>
        </div>
      </div>
    </div>
  );
};

export default PieChartVisualization;
