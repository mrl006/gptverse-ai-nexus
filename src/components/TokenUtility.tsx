
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Percent, ShoppingCart, Users, Database } from 'lucide-react';

interface UtilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UtilityCard = ({ icon, title, description }: UtilityCardProps) => (
  <Card className="glass-card border-0 hover:scale-105 transition-transform duration-300 h-full shimmer bg-gradient-to-br from-gptv-gray/20 to-gptv-gray/10">
    <CardContent className="pt-6">
      <div className="bg-gradient-to-br from-gptv-neon-blue to-gptv-teal rounded-full w-14 h-14 flex items-center justify-center mb-5 breathe">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </CardContent>
  </Card>
);

const TokenUtility = () => {
  const utilityItems = [
    {
      icon: <Database className="text-white" size={24} />,
      title: "Revenue Sharing",
      description: "Stake your $GPTV tokens to earn a share of the platform's revenue. The longer you stake, the more you earn.",
    },
    {
      icon: <ShoppingCart className="text-white" size={24} />,
      title: "Premium Access",
      description: "Unlock exclusive features, higher usage limits, and early access to new AI models and tools.",
    },
    {
      icon: <Percent className="text-white" size={24} />,
      title: "Discounted Services",
      description: "Enjoy reduced fees and special pricing across all GPTVerse products and services.",
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Governance Rights",
      description: "Participate in DAO voting to shape the future of GPTVerse, from roadmap priorities to tokenomics adjustments.",
    },
  ];

  return (
    <section className="section-padding bg-gptv-charcoal relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,194,255,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="glass-panel py-3 px-6 mb-4 rounded-full">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-animate">💸 About the $GPTV Token</span>
            </h2>
          </div>
          <p className="text-white/80 max-w-2xl">
            The $GPTV token powers the entire GPTVerse ecosystem, offering multiple utilities and benefits to holders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilityItems.map((item, index) => (
            <UtilityCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
        {/* Token metrics display inspired by reference image */}
        <div className="mt-16 glass-card p-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">$GPTV Token Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gptv-gray/30">
                  <div className="text-sm text-white/60 mb-1">Market Cap</div>
                  <div className="text-xl font-semibold">$12.5M</div>
                </div>
                <div className="p-4 rounded-lg bg-gptv-gray/30">
                  <div className="text-sm text-white/60 mb-1">Price</div>
                  <div className="text-xl font-semibold">$0.085</div>
                </div>
                <div className="p-4 rounded-lg bg-gptv-gray/30">
                  <div className="text-sm text-white/60 mb-1">Circulating Supply</div>
                  <div className="text-xl font-semibold">147M</div>
                </div>
                <div className="p-4 rounded-lg bg-gptv-gray/30">
                  <div className="text-sm text-white/60 mb-1">Total Supply</div>
                  <div className="text-xl font-semibold">1B</div>
                </div>
              </div>
            </div>
            <div className="flex-1 md:border-l border-white/10 pl-0 md:pl-8">
              <div className="mb-4">
                <div className="text-sm text-white/60 mb-1">TVL ($GPTV)</div>
                <div className="text-3xl font-semibold text-gradient-animate">285,650.00</div>
              </div>
              <div className="flex -space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gptv-blue/50 border-2 border-gptv-charcoal"></div>
                <div className="w-10 h-10 rounded-full bg-gptv-teal/50 border-2 border-gptv-charcoal"></div>
                <div className="w-10 h-10 rounded-full bg-gptv-neon-violet/50 border-2 border-gptv-charcoal"></div>
                <div className="w-10 h-10 rounded-full bg-gptv-green/50 border-2 border-gptv-charcoal"></div>
                <div className="w-10 h-10 rounded-full bg-gptv-gray/50 border-2 border-gptv-charcoal flex items-center justify-center text-xs">
                  +12
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gptv-teal/20 inline-block">
                <span className="text-gptv-teal text-sm">Staking rewards at 14.2% APY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;
