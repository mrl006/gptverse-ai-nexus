
import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface TokenDistributionItem {
  name: string;
  value: number;
  color: string;
  description: string;
}

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const tokenDistribution: TokenDistributionItem[] = [
    { name: 'Ecosystem', value: 15, color: '#0EF34B', description: 'Funds allocated for ecosystem growth, partnerships, and integrations.' },
    { name: 'Marketing', value: 15, color: '#00AEFF', description: 'Global marketing campaigns, user acquisition, and brand awareness.' },
    { name: 'Liquidity', value: 15, color: '#0FF5CE', description: 'Ensures trading liquidity across supported exchanges and platforms.' },
    { name: 'Dev & Research', value: 10, color: '#D946EF', description: 'Ongoing development, research, and innovation within GPTVerse.' },
    { name: 'Team', value: 12, color: '#9333EA', description: 'Allocated to the core team with lockup and vesting periods.' },
    { name: 'DAO', value: 9, color: '#3B82F6', description: 'Community governance and DAO treasury management.' },
    { name: 'Private', value: 8, color: '#EC4899', description: 'Early private investors with dedicated vesting schedules.' },
    { name: 'Public', value: 5, color: '#EF4444', description: 'Public sale allocation for community participation.' },
    { name: 'Pre-Sale', value: 7, color: '#F59E0B', description: 'Pre-sale rounds with bonuses for early supporters.' },
    { name: 'Advisors', value: 3, color: '#10B981', description: 'Strategic advisors and industry experts.' },
    { name: 'KOL', value: 1, color: '#6366F1', description: 'Key Opinion Leaders for community engagement and growth.' },
  ];

  const handleMouseEnter = (data: any, index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glass-card p-4">
          <p className="font-medium text-white">{data.name}: {data.value}%</p>
          <p className="text-white/70 text-sm mt-1">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="tokenomics" className="section-padding bg-gptv-dark relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.15)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-animate">💹 TOKENOMICS OF GPTVERSE</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            The $GPTV token is designed with a balanced distribution to ensure long-term sustainability, 
            community governance, and ecosystem growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 h-[400px] md:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tokenDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  dataKey="value"
                  paddingAngle={2}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {tokenDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="transparent"
                      opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
                      className="transition-opacity duration-300"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 glass-card relative overflow-hidden glow">
              <h3 className="text-xl font-semibold mb-4">Token Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Name:</span>
                  <span className="font-medium">GPTVerse</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Symbol:</span>
                  <span className="font-medium">$GPTV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Supply:</span>
                  <span className="font-medium">1,000,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Initial Circulating:</span>
                  <span className="font-medium">100,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Networks:</span>
                  <span className="font-medium">BNB Chain, Near, Skale</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 glass-card relative overflow-hidden glow">
              <h3 className="text-xl font-semibold mb-4">Vesting Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Team:</span>
                  <span className="font-medium">24 mo. cliff, 36 mo. vesting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Private:</span>
                  <span className="font-medium">6 mo. cliff, 24 mo. vesting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Advisors:</span>
                  <span className="font-medium">12 mo. cliff, 24 mo. vesting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Ecosystem:</span>
                  <span className="font-medium">No cliff, 48 mo. vesting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
