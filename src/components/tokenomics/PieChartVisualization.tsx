
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { tokenDistribution } from './TokenDistributionData';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
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
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#06101a]/90 p-3 rounded-lg border border-white/10 backdrop-blur-sm shadow-xl">
        <p className="text-white font-medium">{payload[0].name}</p>
        <p className="text-[#0ef34b] font-mono">{`${payload[0].value}%`}</p>
        {payload[0].payload.description && (
          <p className="text-white/70 text-sm mt-1 max-w-[200px]">{payload[0].payload.description}</p>
        )}
      </div>
    );
  }
  return null;
};

const PieChartVisualization: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-[500px] max-w-[800px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {tokenDistribution.map((entry, index) => (
                <filter key={`glow-${index}`} id={`glow-${index}`} x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feFlood floodColor={entry.color} floodOpacity="0.3" result="coloredBlur" />
                  <feComposite in="SourceGraphic" in2="coloredBlur" operator="over" />
                </filter>
              ))}
            </defs>
            
            <Pie
              data={tokenDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
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
                  stroke="rgba(0,0,0,0.1)"
                  filter={activeIndex === index ? `url(#glow-${index})` : undefined}
                  style={{
                    filter: activeIndex === index ? `drop-shadow(0 0 8px ${entry.color}80)` : undefined,
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Pie>
            
            <Tooltip content={<CustomTooltip />} />
            
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              wrapperStyle={{
                paddingLeft: "20px",
                maxHeight: "400px",
                overflowY: "auto",
                fontSize: "12px"
              }}
              formatter={(value: string, entry: any, index: number) => (
                <span className="text-white flex items-center">
                  <span 
                    className="inline-block w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: entry.color }}
                  ></span>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 text-center">
        <div className="text-white/70 text-sm max-w-[600px] mx-auto">
          Interactive chart displaying token allocation across different segments of the GPTVerse ecosystem.
          Hover over segments for details.
        </div>
      </div>
    </div>
  );
};

export default PieChartVisualization;
