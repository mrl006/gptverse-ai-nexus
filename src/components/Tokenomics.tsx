
import React, { useState, useEffect, useRef } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector
} from 'recharts';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

interface TokenDistributionItem {
  name: string;
  value: number;
  color: string;
  description: string;
  highlight?: boolean;
}

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("distribution");
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Simulate 3D rotation effect for the chart
    if (chartRef.current) {
      const el = chartRef.current;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const rotateY = x * 0.05;
        const rotateX = -y * 0.05;
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      
      const handleMouseLeave = () => {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        el.style.transition = 'transform 0.5s ease';
      };
      
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // More detailed tokenomics data with highlights
  const tokenDistribution: TokenDistributionItem[] = [
    { name: 'Ecosystem Fund', value: 15, color: '#0ef34b', description: 'Supporting platform development, partnerships, and ecosystem expansion.', highlight: true },
    { name: 'Marketing', value: 15, color: '#00aeff', description: 'Global campaigns, user acquisition, and community growth initiatives.' },
    { name: 'Liquidity Provision', value: 15, color: '#d946ef', description: 'Ensuring sufficient trading liquidity on decentralized and centralized exchanges.' },
    { name: 'Research & Development', value: 10, color: '#f59e0b', description: 'Next-gen AI model development, infrastructure, and technical innovation.' },
    { name: 'Core Team & Advisors', value: 12, color: '#0ef34b', description: 'Strategic allocation with extended vesting schedule (36 months).', highlight: true },
    { name: 'DAO Treasury', value: 9, color: '#00aeff', description: 'Community governance fund for protocol decisions and proposals.' },
    { name: 'Private Sale', value: 8, color: '#d946ef', description: 'Early backers with lockup periods and vesting schedules.' },
    { name: 'Public Sale', value: 5, color: '#f59e0b', description: 'Initial DEX offerings and exchange listings allocations.' },
    { name: 'Strategic Partnerships', value: 7, color: '#0ef34b', description: 'Reserved for future strategic industry partners and integrations.' },
    { name: 'Rewards & Incentives', value: 4, color: '#00aeff', description: 'User rewards, staking incentives, and platform participation bonuses.' }
  ];

  const CustomActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    // Add 3D effect with gradient
    const gradientOffset = 0.05;
    const outerRadiusPlus5 = outerRadius + 5;
  
    return (
      <g>
        <defs>
          <linearGradient id={`gradient-${payload.name.replace(/\s+/g, '-')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fill} stopOpacity={1} />
            <stop offset="100%" stopColor={fill} stopOpacity={0.6} />
          </linearGradient>
        </defs>
        
        {/* Main sector */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={`url(#gradient-${payload.name.replace(/\s+/g, '-')})`}
          stroke={fill}
          strokeWidth={2}
        />
        
        {/* 3D effect - side sector */}
        <Sector
          cx={cx + gradientOffset * 10}
          cy={cy + gradientOffset * 15}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          opacity={0.2}
          stroke="none"
        />
        
        {/* Outer edge highlight */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={outerRadius + 2}
          outerRadius={outerRadiusPlus5}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          opacity={0.3}
        />
        
        {/* Connection line */}
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" strokeWidth={2} />
        
        {/* Circle at the end of the line */}
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        
        {/* Text labels */}
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#FFFFFF" fontSize={12} fontWeight="500">
          {payload.name} ({(percent * 100).toFixed(0)}%)
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#FFFFFF" opacity={0.6} fontSize={10}>
          {value.toLocaleString()} GPTV
        </text>
      </g>
    );
  };
  
  const handlePieEnter = (data: any, index: number) => {
    setActiveIndex(index);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glassmorphism-card p-4 backdrop-blur-lg bg-black/40 border border-white/10 shadow-lg">
          <p className="font-medium text-white text-base">{data.name}: {data.value}%</p>
          <p className="text-white/70 text-sm mt-1 max-w-xs">{data.description}</p>
          <div className="mt-2 text-xs text-white/50">
            {(data.value / 100 * 1000000000).toLocaleString()} GPTV
          </div>
        </div>
      );
    }
    return null;
  };

  // Animated sections render helper
  const renderAnimatedSection = (index: number, children: React.ReactNode) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {children}
    </motion.div>
  );

  return (
    <section id="tokenomics" className="section-anchor relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#040812] z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0ef34b]/5 filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00aeff]/5 filter blur-[150px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Animated particles */}
        <div className="absolute h-full w-full">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#0ef34b] rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-[#0ef34b] rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute top-2/4 right-1/4 w-1 h-1 bg-[#00aeff] rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#d946ef] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2 px-4 py-1 rounded-full bg-black/30 border border-[#0ef34b]/10 text-[#0ef34b]/80 text-sm font-mono">
            TOKEN STRUCTURE
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-white">TOKENOMICS</span>
            <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] text-transparent bg-clip-text"> OF GPTVERSE</span>
          </h2>
          <div className="flex justify-center">
            <p className="text-white/70 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              The GPTVerse token economy is engineered for sustainability and long-term growth, 
              balancing value accrual mechanisms with an equitable distribution model.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* 3D Token Visualization Side */}
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
              ref={chartRef}
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease' }}
            >
              <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%" className="z-20">
                    <PieChart>
                      <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="6" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={CustomActiveShape}
                        data={tokenDistribution.map(item => ({
                          ...item,
                          value: item.value,
                          // Calculate actual token amount
                          tokenAmount: (item.value / 100) * 1000000000
                        }))}
                        cx="50%"
                        cy="50%"
                        innerRadius="42%"
                        outerRadius="70%"
                        dataKey="value"
                        paddingAngle={1.5}
                        onMouseEnter={handlePieEnter}
                        filter="url(#glow)"
                      >
                        {tokenDistribution.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            stroke={entry.highlight ? entry.color : 'transparent'}
                            strokeWidth={entry.highlight ? 1.5 : 0}
                            strokeOpacity={0.8}
                            style={{
                              filter: entry.highlight ? 'drop-shadow(0 0 8px rgba(14,243,75,0.3))' : 'none',
                              opacity: activeIndex === null || activeIndex === index ? 1 : 0.6,
                              transition: 'opacity 0.3s, filter 0.3s'
                            }}
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                )}
                
                {/* Center Logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center z-30 bg-[#040812] border-2 border-[#0ef34b]/20 shadow-[0_0_30px_rgba(14,243,75,0.2)]">
                  <div className="text-[#0ef34b] text-xl font-bold">GPTV</div>
                  <div className="absolute w-full h-full rounded-full border border-[#0ef34b]/10 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute w-[110%] h-[110%] rounded-full border border-[#00aeff]/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute w-[120%] h-[120%] rounded-full border border-[#d946ef]/10 animate-[spin_20s_linear_infinite]"></div>
                </div>
                
                {/* 3D Platform Effect */}
                <div className="absolute w-[85%] h-[30px] bg-gradient-to-t from-[#0ef34b]/10 to-transparent blur-md rounded-[100%] bottom-[-15px] left-[7.5%] z-10"></div>
              </div>
              
              {/* Total Supply Badge */}
              <div className="absolute -right-4 -top-4 lg:-right-10 lg:-top-10 p-3 lg:p-5 rounded-lg bg-black/50 backdrop-blur-lg border border-white/10 shadow-xl transform rotate-6 z-40">
                <div className="text-white/80 text-sm">Total Supply</div>
                <div className="text-white font-bold text-xl lg:text-2xl">1,000,000,000</div>
                <div className="text-[#0ef34b] text-xs uppercase mt-1 font-mono">$GPTV</div>
              </div>
            </motion.div>
          </div>
          
          {/* Detailed Tokenomics Information Side */}
          <div className="order-1 lg:order-2">
            <Tabs 
              defaultValue="distribution" 
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="w-full grid grid-cols-3 mb-10 p-1 rounded-xl bg-black/30 backdrop-blur-md border border-white/5">
                <TabsTrigger 
                  value="distribution" 
                  className="data-[state=active]:border-[#0ef34b]/10 data-[state=active]:shadow-[0_0_10px_rgba(14,243,75,0.10)]"
                >
                  Distribution
                </TabsTrigger>
                <TabsTrigger 
                  value="release" 
                  className="data-[state=active]:border-[#0ef34b]/10 data-[state=active]:shadow-[0_0_10px_rgba(14,243,75,0.10)]"
                >
                  Release Schedule
                </TabsTrigger>
                <TabsTrigger 
                  value="utility" 
                  className="data-[state=active]:border-[#0ef34b]/10 data-[state=active]:shadow-[0_0_10px_rgba(14,243,75,0.10)]"
                >
                  Utility
                </TabsTrigger>
              </TabsList>
              
              <div className="relative">
                <TabsContent value="distribution" className="glassmorphism-card rounded-xl p-8 bg-black/40 backdrop-blur-lg border border-white/10 shadow-2xl m-0">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold text-white">Token Distribution</h3>
                      <div className="flex items-center space-x-1 text-sm text-white/60">
                        <span>Total Supply:</span>
                        <span className="font-mono text-white">1,000,000,000</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-sm">
                      The GPTV tokenomics model is designed to support long-term ecosystem growth, 
                      community participation, and sustainable development.
                    </p>
                    
                    <div className="grid gap-3 mt-6">
                      {tokenDistribution.map((item, index) => renderAnimatedSection(index, (
                        <div 
                          key={item.name} 
                          className="flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300"
                          onMouseEnter={() => setActiveIndex(index)}
                          onMouseLeave={() => setActiveIndex(null)}
                        >
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-4 h-12 rounded-sm"
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <div>
                              <div className="text-white font-medium">{item.name}</div>
                              <div className="text-white/60 text-xs mt-1">{item.description}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-mono text-lg">{item.value}%</div>
                            <div className="text-white/60 text-xs mt-1 font-mono">
                              {(item.value / 100 * 1000000000).toLocaleString()} $GPTV
                            </div>
                          </div>
                        </div>
                      )))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="release" className="glassmorphism-card rounded-xl p-8 bg-black/40 backdrop-blur-lg border border-white/10 shadow-2xl m-0">
                  <div className="space-y-5">
                    <h3 className="text-2xl font-semibold text-white">Token Release Schedule</h3>
                    <p className="text-white/70 text-sm">
                      Carefully designed vesting schedules ensure sustainable token distribution over time.
                    </p>
                    
                    <div className="space-y-6 mt-6">
                      {[
                        { name: "Team & Advisors", schedule: "24 month cliff, 36 month linear vesting", percent: 15, color: "#0ef34b", details: "Ensuring long-term commitment and alignment with project success." },
                        { name: "Private Sale", schedule: "6 month cliff, 18 month linear vesting", percent: 8, color: "#00aeff", details: "Structured to prevent market impact while rewarding early supporters." },
                        { name: "Public Sale", schedule: "50% unlocked at TGE, 50% 3 month vesting", percent: 5, color: "#d946ef", details: "Balanced between immediate liquidity and preventing post-launch dumps." },
                        { name: "Ecosystem & Marketing", schedule: "10% at TGE, 90% over 48 months", percent: 30, color: "#f59e0b", details: "Ensures continued ecosystem development and market expansion." },
                        { name: "Liquidity", schedule: "100% at TGE, locked for 3 years", percent: 15, color: "#0ef34b", details: "Dedicated to ensuring exchange liquidity and trading stability." },
                        { name: "DAO Treasury", schedule: "No TGE, 60 month linear vesting", percent: 9, color: "#00aeff", details: "Governance reserves for future ecosystem decisions and development." }
                      ].map((item, index) => renderAnimatedSection(index, (
                        <div key={item.name} className="relative overflow-hidden">
                          <div className="p-5 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 relative z-10 hover:bg-white/10 transition-all duration-300">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-white text-lg">{item.name}</h4>
                                <div className="flex items-center mt-1">
                                  <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: item.color }}></div>
                                  <span className="text-white/80 text-sm">{item.schedule}</span>
                                </div>
                                <p className="text-white/60 text-xs mt-3 max-w-md">{item.details}</p>
                              </div>
                              <div className="text-right">
                                <span className="text-white font-bold text-2xl">{item.percent}%</span>
                                <div className="text-white/60 text-xs mt-1">
                                  {(item.percent / 100 * 1000000000).toLocaleString()} $GPTV
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute left-0 top-0 h-full w-1 z-0" style={{ backgroundColor: item.color }}></div>
                        </div>
                      )))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="utility" className="glassmorphism-card rounded-xl p-8 bg-black/40 backdrop-blur-lg border border-white/10 shadow-2xl m-0">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white">GPTV Token Utility Ecosystem</h3>
                    <p className="text-white/70 text-sm">
                      The GPTV token is designed with multiple powerful utilities that drive demand and value accrual within the ecosystem.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {[
                        { 
                          title: "Platform Access & Premium Features", 
                          description: "Stake GPTV to unlock premium AI capabilities, higher usage quotas, and priority access to new models.",
                          icon: "🔑",
                          color: "#0ef34b"
                        },
                        { 
                          title: "Governance & DAO Voting", 
                          description: "GPTV holders gain voting rights on protocol upgrades, feature development, and treasury allocations.",
                          icon: "🏛️",
                          color: "#00aeff"
                        },
                        { 
                          title: "Revenue Sharing & Staking Rewards", 
                          description: "Earn passive income through platform revenue distribution to GPTV stakers.",
                          icon: "💰",
                          color: "#d946ef"
                        },
                        { 
                          title: "Transaction Fee Discounts", 
                          description: "Holding GPTV reduces platform fees on a sliding scale based on token amount staked.",
                          icon: "🏷️",
                          color: "#f59e0b"
                        },
                        { 
                          title: "NFT Access & Minting Rights", 
                          description: "GPTV grants access to exclusive AI-generated NFT collections and reduced minting fees.",
                          icon: "🖼️",
                          color: "#0ef34b"
                        },
                        { 
                          title: "Model Training Participation", 
                          description: "Token holders can contribute to and earn from AI model training and optimization.",
                          icon: "🧠",
                          color: "#00aeff"
                        },
                      ].map((item, index) => renderAnimatedSection(index, (
                        <div key={item.title} className="p-6 rounded-xl bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg group">
                          <div className="mb-4 w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{ 
                            backgroundColor: `${item.color}20`,
                            border: `1px solid ${item.color}40`
                          }}>
                            {item.icon}
                          </div>
                          <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-[#0ef34b] transition-colors">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.description}</p>
                        </div>
                      )))}
                    </div>
                  </div>
                </TabsContent>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0ef34b]/5 rounded-full blur-3xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00aeff]/5 rounded-full blur-3xl"></div>
              </div>
            </Tabs>
          </div>
        </div>
        
        {/* Token Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 glassmorphism-card rounded-xl p-8 backdrop-blur-lg bg-black/30 border border-white/10 shadow-[0_0_30px_rgba(14,243,75,0.05)]"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Token Launch Metrics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Initial Market Cap", value: "$2.25M", note: "At TGE", icon: "📊" },
              { label: "Initial Token Price", value: "$0.019", note: "Public sale price", icon: "💲" },
              { label: "Initial Circulating Supply", value: "125,000,000", note: "12.5% of total supply", icon: "🔄" },
              { label: "Fully Diluted Valuation", value: "$19M", note: "At TGE price", icon: "📈" }
            ].map((metric, index) => renderAnimatedSection(index, (
              <Card key={metric.label} className="p-5 rounded-xl bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg border border-white/10 hover:shadow-lg transition-all duration-300 overflow-hidden group relative">
                <div className="absolute -right-6 -top-6 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">{metric.icon}</div>
                <div className="text-sm text-white/60 mb-1 font-medium">{metric.label}</div>
                <div className="text-2xl font-bold text-white group-hover:text-[#0ef34b] transition-colors">{metric.value}</div>
                <div className="text-xs text-white/50 mt-1">{metric.note}</div>
              </Card>
            )))}
          </div>
          
          {/* Lockup & Vesting Timeline */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Unlock Schedule</h4>
            <div className="relative h-14 w-full bg-white/5 rounded-lg overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[12.5%] bg-gradient-to-r from-[#0ef34b]/40 to-[#0ef34b]/10"></div>
              <div className="absolute left-[12.5%] top-0 h-full w-[15%] bg-gradient-to-r from-[#00aeff]/10 to-[#00aeff]/5 border-l border-white/10"></div>
              <div className="absolute left-[27.5%] top-0 h-full w-[30%] bg-gradient-to-r from-[#d946ef]/5 to-[#d946ef]/10 border-l border-white/10"></div>
              <div className="absolute left-[57.5%] top-0 h-full w-[42.5%] bg-gradient-to-r from-[#f59e0b]/10 to-[#f59e0b]/5 border-l border-white/10"></div>
              
              <div className="absolute bottom-0 w-full h-px bg-white/20"></div>
              
              {/* Timeline markers */}
              <div className="absolute left-0 bottom-1 text-xs text-white/60 font-mono">TGE</div>
              <div className="absolute left-[12.5%] bottom-1 text-xs text-white/60 font-mono">3mo</div>
              <div className="absolute left-[27.5%] bottom-1 text-xs text-white/60 font-mono">6mo</div>
              <div className="absolute left-[57.5%] bottom-1 text-xs text-white/60 font-mono">1yr</div>
              <div className="absolute right-0 bottom-1 text-xs text-white/60 font-mono">3yr</div>
              
              {/* Timeline annotations */}
              <div className="absolute left-[6%] top-1 transform -translate-x-1/2 text-xs text-white/80 font-mono">12.5%</div>
              <div className="absolute left-[20%] top-1 transform -translate-x-1/2 text-xs text-white/80 font-mono">+15%</div>
              <div className="absolute left-[42%] top-1 transform -translate-x-1/2 text-xs text-white/80 font-mono">+30%</div>
              <div className="absolute left-[75%] top-1 transform -translate-x-1/2 text-xs text-white/80 font-mono">+42.5%</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
