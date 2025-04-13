
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Code, BarChart4 } from 'lucide-react';
import EcosystemCard from './EcosystemCard';

const tabContentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

const EcosystemTabContent: React.FC = () => {
  const ecosystemCards = [
    {
      icon: <Star className="h-12 w-12 text-[#0ef34b]" />,
      title: "Design & NFTs",
      description: "Create stunning visual assets as NFTs using AI-powered design algorithms"
    },
    {
      icon: <Code className="h-12 w-12 text-[#00aeff]" />,
      title: "AI Education Hub",
      description: "Interactive learning experiences with courses tailored to your unique needs"
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-[#d946ef]" />,
      title: "Trading Solutions",
      description: "AI-powered trading tools with real-time signals and comprehensive analytics"
    }
  ];

  return (
    <motion.div
      variants={tabContentVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-2xl font-bold text-[#d946ef] mb-6">
        Explore The Ecosystem
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {ecosystemCards.map((card, index) => (
          <EcosystemCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      
      <div className="glass-card p-5 border border-[#d946ef]/20 rounded-xl">
        <h4 className="font-semibold text-center text-[#d946ef] mb-3">Upcoming Releases</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d946ef]"></div>
            <span className="text-sm">GPTVerse NFT Marketplace - Q3 2025</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d946ef]"></div>
            <span className="text-sm">Cross-chain AI Bridge - Q4 2025</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d946ef]"></div>
            <span className="text-sm">AI-Enhanced DAO Governance - Q1 2026</span>
          </li>
        </ul>
        
        <div className="mt-4 flex justify-center">
          <button className="px-4 py-2 bg-gradient-to-r from-[#d946ef] to-[#00aeff] rounded-lg text-black font-medium text-sm transition hover:brightness-110">
            View Full Roadmap
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EcosystemTabContent;
