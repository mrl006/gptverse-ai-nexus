
import React from 'react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const PieChartTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-black/80 p-3 rounded-lg border border-white/10 shadow-xl backdrop-blur-sm">
        <div className="font-bold text-white mb-1">{data.name}</div>
        <div className="text-white font-mono mb-1">{data.value}%</div>
        {data.description && (
          <div className="text-white/70 text-sm">{data.description}</div>
        )}
      </div>
    );
  }
  return null;
};

export default PieChartTooltip;
