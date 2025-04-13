
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { tokenDistribution } from './TokenDistributionData';
import { motion } from 'framer-motion';

const RADIAN = Math.PI / 180;

// Enhanced label with better positioning and styling
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

// Enhanced tooltip with glossy morphism style
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
            <defs>
              {/* Enhanced glow filters for cells */}
              {tokenDistribution.map((entry, index) => (
                <filter key={`glow-${index}`} id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feFlood floodColor={entry.color} floodOpacity="0.3" result="coloredBlur" />
                  <feComposite in="SourceGraphic" in2="coloredBlur" operator="over" />
                </filter>
              ))}
              
              {/* Center glow effect */}
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#0ef34b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ef34b" stopOpacity="0" />
              </radialGradient>
            </defs>
            
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
                  filter={activeIndex === index ? `url(#glow-${index})` : undefined}
                  style={{
                    filter: activeIndex === index ? `drop-shadow(0 0 10px ${entry.color}80)` : undefined,
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformOrigin: 'center center',
                    transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)'
                  }}
                />
              ))}
            </Pie>
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* Minimalist legend with better styling */}
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
        
        {/* Green glow effect in center */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="w-32 h-32 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(14,243,75,0.4) 0%, rgba(14,243,75,0) 70%)',
            boxShadow: '0 0 40px 5px rgba(14,243,75,0.3)',
            animation: 'pulse-glow 4s ease-in-out infinite alternate'
          }}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default PieChartVisualization;
