
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Network, BrainCircuit, Rocket, Layers3, BarChart4 } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesGrid = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
    >
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default FeaturesGrid;
