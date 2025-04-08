
import React, { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

interface TokenDistributionItem {
  name: string;
  value: number;
  color: string;
  description: string;
}

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tokenDistribution: TokenDistributionItem[] = [
    { name: 'Ecosystem', value: 15, color: '#0FF5CE', description: 'Funds allocated for ecosystem growth, partnerships, and integrations.' },
    { name: 'Marketing', value: 15, color: '#EC4899', description: 'Global marketing campaigns, user acquisition, and brand awareness.' },
    { name: 'Liquidity', value: 15, color: '#0FF5CE', description: 'Ensures trading liquidity across supported exchanges and platforms.' },
    { name: 'Dev & Research', value: 10, color: '#EC4899', description: 'Ongoing development, research, and innovation within GPTVerse.' },
    { name: 'Team', value: 12, color: '#0FF5CE', description: 'Allocated to the core team with lockup and vesting periods.' },
    { name: 'DAO', value: 9, color: '#EC4899', description: 'Community governance and DAO treasury management.' },
    { name: 'Private', value: 8, color: '#FFFFFF', description: 'Early private investors with dedicated vesting schedules.' },
    { name: 'Public', value: 5, color: '#FFFFFF', description: 'Public sale allocation for community participation.' },
    { name: 'Pre-Sale', value: 7, color: '#0FF5CE', description: 'Pre-sale rounds with bonuses for early supporters.' },
    { name: 'Advisors', value: 3, color: '#FFFFFF', description: 'Strategic advisors and industry experts.' },
    { name: 'KOL', value: 1, color: '#EC4899', description: 'Key Opinion Leaders for community engagement and growth.' },
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
        <div className="glass-card p-4 backdrop-blur-lg bg-black/40 border border-white/10 shadow-[0_0_15px_rgba(14,243,75,0.15)]">
          <p className="font-medium text-white">{data.name}: {data.value}%</p>
          <p className="text-white/70 text-sm mt-1">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  // Logo for center of pie chart
  const CenterLogo = () => (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#040812] border-4 border-[#0ef34b]/30 shadow-[0_0_25px_rgba(14,243,75,0.3)]">
      <div className="text-[#0ef34b] text-xl font-bold">GPTV</div>
    </div>
  );

  return (
    <section id="tokenomics" className="section-anchor relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#040812]">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#0ef34b]/5 filter blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0ef34b]/5 filter blur-[100px]"></div>
        
        {/* Animated particles */}
        <div className="absolute h-full w-full">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#0ef34b] rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-[#0ef34b] rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute top-2/4 right-1/4 w-1 h-1 bg-[#0ff5ce] rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#EC4899] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">TOKENOMICS</span>
            <br />
            <span className="text-[#0ff5ce]">OF GPTVERSE</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-5 text-lg">
            The GPTVerse Tokenomics structure was built to protect early investors and the 
            Public Sale audience at the highest level.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 items-center">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <Tabs defaultValue="distribution" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                <TabsTrigger value="distribution" className="data-[state=active]:border-[#0ef34b]/30 data-[state=active]:shadow-[0_0_15px_rgba(14,243,75,0.15)]">
                  Token Distribution
                </TabsTrigger>
                <TabsTrigger value="release" className="data-[state=active]:border-[#0ef34b]/30 data-[state=active]:shadow-[0_0_15px_rgba(14,243,75,0.15)]">
                  Release Schedule
                </TabsTrigger>
                <TabsTrigger value="utility" className="data-[state=active]:border-[#0ef34b]/30 data-[state=active]:shadow-[0_0_15px_rgba(14,243,75,0.15)]">
                  Token Utility
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="distribution" className="glassmorphism-card rounded-xl p-6 bg-black/30 backdrop-blur-lg border border-white/10">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-white">Total Supply: 1,000,000,000 $GPTV</h3>
                  <p className="text-white/70">
                    The GPTV token supply is distributed strategically to ensure long-term sustainability, 
                    community governance, and ecosystem growth.
                  </p>
                  
                  <div className="space-y-3 mt-4">
                    {tokenDistribution.map((item, index) => (
                      <div 
                        key={item.name} 
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all"
                      >
                        <div className="flex items-center">
                          <div 
                            className="w-4 h-4 rounded-sm mr-3"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-white">{item.name}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-white/70 text-right">{item.value}%</span>
                          <span className="text-white/70 text-right">{(item.value / 100 * 1000000000).toLocaleString()} $GPTV</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="release" className="glassmorphism-card rounded-xl p-6 bg-black/30 backdrop-blur-lg border border-white/10">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-white">Token Release Schedule</h3>
                  <p className="text-white/70">
                    The GPTV token release is implemented through a carefully designed vesting schedule, 
                    balancing market stability with early investor benefits.
                  </p>
                  
                  <div className="space-y-5 mt-5">
                    <div className="relative p-4 rounded-lg backdrop-blur-sm bg-white/5">
                      <div className="absolute top-0 left-0 h-full w-[15%] bg-[#0ef34b]/10 rounded-l-lg"></div>
                      <div className="relative z-10 flex justify-between items-center">
                        <span className="font-semibold text-white">Team & Advisors</span>
                        <span className="text-white/80">24 month cliff, 36 month vesting</span>
                      </div>
                    </div>
                    
                    <div className="relative p-4 rounded-lg backdrop-blur-sm bg-white/5">
                      <div className="absolute top-0 left-0 h-full w-[8%] bg-[#EC4899]/10 rounded-l-lg"></div>
                      <div className="relative z-10 flex justify-between items-center">
                        <span className="font-semibold text-white">Private Sale</span>
                        <span className="text-white/80">6 month cliff, 18 month vesting</span>
                      </div>
                    </div>
                    
                    <div className="relative p-4 rounded-lg backdrop-blur-sm bg-white/5">
                      <div className="absolute top-0 left-0 h-full w-[12%] bg-[#0FF5CE]/10 rounded-l-lg"></div>
                      <div className="relative z-10 flex justify-between items-center">
                        <span className="font-semibold text-white">Public Sale</span>
                        <span className="text-white/80">50% unlocked, 50% 6 month vesting</span>
                      </div>
                    </div>
                    
                    <div className="relative p-4 rounded-lg backdrop-blur-sm bg-white/5">
                      <div className="absolute top-0 left-0 h-full w-[30%] bg-[#FFFFFF]/10 rounded-l-lg"></div>
                      <div className="relative z-10 flex justify-between items-center">
                        <span className="font-semibold text-white">Ecosystem & Marketing</span>
                        <span className="text-white/80">No cliff, 48 month linear vesting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="utility" className="glassmorphism-card rounded-xl p-6 bg-black/30 backdrop-blur-lg border border-white/10">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-white">GPTV Token Utility</h3>
                  <p className="text-white/70">
                    The GPTV token powers the entire GPTVerse ecosystem with multiple use cases that drive demand.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div className="p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                      <h4 className="text-white font-semibold mb-2">Platform Access</h4>
                      <p className="text-white/70">Access premium features, higher usage limits, and early access to new AI models.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                      <h4 className="text-white font-semibold mb-2">DAO Governance</h4>
                      <p className="text-white/70">Participate in decision-making on platform development, tokenomics, and partnerships.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                      <h4 className="text-white font-semibold mb-2">Staking Rewards</h4>
                      <p className="text-white/70">Stake $GPTV to earn passive income through platform revenue sharing.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                      <h4 className="text-white font-semibold mb-2">Fee Reduction</h4>
                      <p className="text-white/70">Hold $GPTV to receive discounts on transaction fees and premium services.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative h-[400px] md:h-[450px] mb-8 lg:mb-0">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius="60%"
                      outerRadius="80%"
                      dataKey="value"
                      paddingAngle={1}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      strokeWidth={0}
                    >
                      {tokenDistribution.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
                          className="transition-opacity duration-300"
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              )}
              
              {/* Labels */}
              {tokenDistribution.map((item, index) => {
                // Calculate position around the chart
                const angle = (index / tokenDistribution.length) * Math.PI * 2;
                const radius = 200; // Adjust based on your chart size
                const x = Math.cos(angle - Math.PI / 2) * radius;
                const y = Math.sin(angle - Math.PI / 2) * radius;
                
                // Determine if label should be on left or right side
                const isRight = x > 0;
                
                return (
                  <div 
                    key={item.name}
                    className="absolute text-xs flex items-center space-x-1"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: `translate(${isRight ? '0' : '-100%'}, -50%)`,
                      opacity: activeIndex === null || activeIndex === index ? 1 : 0.3,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    {!isRight && (
                      <>
                        <span className="text-white/80">{item.value}%</span>
                        <span className="text-white font-medium">{item.name}</span>
                      </>
                    )}
                    {isRight && (
                      <>
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-white/80">{item.value}%</span>
                      </>
                    )}
                  </div>
                );
              })}
              
              <CenterLogo />
            </div>
          </div>
        </div>
        
        {/* Token Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 glassmorphism-card rounded-xl p-8 backdrop-blur-lg bg-black/30 border border-white/10 shadow-[0_0_30px_rgba(14,243,75,0.05)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-white/60 mb-1">Initial Market Cap</div>
              <div className="text-xl font-semibold text-white">$1.8M</div>
              <div className="text-xs text-white/50 mt-1">At TGE price</div>
            </div>
            
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-white/60 mb-1">Initial Token Price</div>
              <div className="text-xl font-semibold text-white">$0.018</div>
              <div className="text-xs text-white/50 mt-1">Public sale price</div>
            </div>
            
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-white/60 mb-1">Initial Circulating Supply</div>
              <div className="text-xl font-semibold text-white">100,000,000</div>
              <div className="text-xs text-white/50 mt-1">10% of total supply</div>
            </div>
            
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-white/60 mb-1">Fully Diluted Valuation</div>
              <div className="text-xl font-semibold text-white">$18M</div>
              <div className="text-xs text-white/50 mt-1">At TGE price</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
