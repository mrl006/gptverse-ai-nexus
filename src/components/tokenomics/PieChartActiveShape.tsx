
import React from 'react';
import { Sector } from 'recharts';

const PieChartActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  
  return (
    <g>
      {/* Main sector with glow effect */}
      <defs>
        <filter id={`glow-${fill.replace('#', '')}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feFlood floodColor={fill} floodOpacity="0.5" result="coloredBlur" />
          <feComposite in="SourceGraphic" in2="coloredBlur" operator="over" />
        </filter>
      </defs>
      
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        filter={`url(#glow-${fill.replace('#', '')})`}
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        style={{
          filter: `drop-shadow(0 0 8px ${fill})`,
          transition: 'all 0.3s ease-out'
        }}
      />
      
      {/* Outer ring for emphasis */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 12}
        fill={fill}
        opacity={0.4}
      />
    </g>
  );
};

export default PieChartActiveShape;
