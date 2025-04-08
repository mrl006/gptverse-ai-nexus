
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Percent, ShoppingCart, Users, Database } from 'lucide-react';

interface UtilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UtilityCard = ({ icon, title, description }: UtilityCardProps) => (
  <Card className="glass-card border-0 hover:scale-105 transition-transform duration-300 h-full shimmer">
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
      </div>
    </section>
  );
};

export default TokenUtility;
