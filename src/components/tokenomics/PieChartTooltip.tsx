
import React from 'react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const PieChartTooltip = ({ active, payload }: CustomTooltipProps) => {
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

export default PieChartTooltip;
