
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
          <feFlood floodColor={fill} floodOpacity="0.7" result="coloredBlur" />
          <feComposite in="SourceGraphic" in2="coloredBlur" operator="over" />
        </filter>
      </defs>
      
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        filter={`url(#glow-${fill.replace('#', '')})`}
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        style={{
          filter: `drop-shadow(0 0 12px ${fill})`,
          transition: 'all 0.3s ease-out'
        }}
      />
      
      {/* Outer ring for emphasis */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 12}
        outerRadius={outerRadius + 15}
        fill={fill}
        opacity={0.5}
      />
    </g>
  );
};

export default PieChartActiveShape;
