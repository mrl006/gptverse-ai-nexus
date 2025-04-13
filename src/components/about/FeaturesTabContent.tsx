
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Rocket, 
  BrainCircuit, 
  Network, 
  Layers3, 
  BarChart4
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const tabContentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

const FeaturesTabContent: React.FC = () => {
  const features = [
    {
      icon: <Globe className="text-[#0ef34b] h-7 w-7" />,
      title: "AI Hub & Multi-Platform Gateway",
      description: "Your central gateway to next-level Dapps and AI-powered experiences"
    },
    {
      icon: <Network className="text-[#00aeff] h-7 w-7" />,
      title: "Multichain Architecture",
      description: "First published on BNB Chain, now expanding across multiple blockchains"
    },
    {
      icon: <BrainCircuit className="text-[#d946ef] h-7 w-7" />,
      title: "Veteran Engineering Team",
      description: "Backed by developers with 20+ years of industry experience"
    },
    {
      icon: <Rocket className="text-[#0ef34b] h-7 w-7" />,
      title: "MVP-Ready Products",
      description: "Launch-ready AI solutions delivering immediate value"
    },
    {
      icon: <Layers3 className="text-[#00aeff] h-7 w-7" />,
      title: "Robust Product Roadmap",
      description: "Strategic vision for continuous innovation and growth"
    },
    {
      icon: <BarChart4 className="text-[#d946ef] h-7 w-7" />,
      title: "Advanced Tokenomics",
      description: "Sustainable economic model designed for long-term value"
    }
  ];

  return (
    <motion.div
      variants={tabContentVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-2xl font-bold text-[#00aeff] mb-6">
        Cutting-Edge Features
      </h3>
      
      <div className="grid grid-cols-1 gap-4">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 glass-card border border-[#00aeff]/20 rounded-lg">
        <h4 className="font-semibold text-[#00aeff] mb-2">Technology Stack</h4>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs">Neural Networks</div>
          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs">Blockchain</div>
          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs">Smart Contracts</div>
          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs">NLP</div>
          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs">Computer Vision</div>
          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs">Multichain</div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesTabContent;
