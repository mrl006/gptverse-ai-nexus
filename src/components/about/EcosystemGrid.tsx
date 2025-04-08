
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Code, BarChart4 } from 'lucide-react';
import EcosystemCard from './EcosystemCard';

interface EcosystemGridProps {
  setActiveServiceIndex: (index: number) => void;
  serviceModels: string[];
}

const EcosystemGrid: React.FC<EcosystemGridProps> = ({ setActiveServiceIndex, serviceModels }) => {
  const ecosystemCards = [
    {
      icon: <Star className="h-12 w-12 text-[#0ef34b]" />,
      title: "Design & NFTs",
      description: "Create stunning visual assets as NFTs using AI-powered design algorithms",
      modelId: "image-generator"
    },
    {
      icon: <Code className="h-12 w-12 text-[#00aeff]" />,
      title: "AI Education Hub",
      description: "Interactive learning experiences with courses tailored to your unique needs",
      modelId: "language-tutor"
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-[#d946ef]" />,
      title: "Trading Solutions",
      description: "AI-powered trading tools with real-time signals and comprehensive analytics",
      modelId: "healty"
    }
  ];

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
          EXPLORE THE ECOSYSTEM
        </span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ecosystemCards.map((card, index) => (
          <EcosystemCard 
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            index={index}
            onTryDemo={() => setActiveServiceIndex(serviceModels.indexOf(card.modelId))}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EcosystemGrid;
