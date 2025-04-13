import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { tokenDistribution } from './TokenDistributionData';
import { motion } from 'framer-motion';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
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
      style={{
        textShadow: '0 0 8px rgba(0,0,0,0.5)',
        fontWeight: 600,
        opacity: 0.9
      }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="backdrop-blur-lg bg-white/10 p-4 rounded-xl border border-white/20 shadow-xl">
        <p className="text-white font-medium text-base">{payload[0].name}</p>
        <p className="text-white font-mono text-lg">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PieChartVisualization: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-[500px] max-w-[800px] mx-auto relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={tokenDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              innerRadius={90}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={3}
              strokeWidth={1}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {tokenDistribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="rgba(255,255,255,0.2)"
                  style={{
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformOrigin: 'center center',
                    transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)'
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
                fontSize: "12px",
                opacity: 0.9
              }}
              content={({ payload }) => (
                <div className="flex flex-col gap-2 text-xs backdrop-blur-md bg-black/10 p-3 rounded-lg border border-white/10">
                  {payload?.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ 
                          backgroundColor: entry.color,
                          boxShadow: `0 0 5px ${entry.color}80`
                        }}
                      />
                      <span className="text-white/80">{entry.value}</span>
                    </div>
                  ))}
                </div>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartVisualization;
