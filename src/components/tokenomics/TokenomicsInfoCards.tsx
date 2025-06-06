
import React from 'react';
import { motion } from 'framer-motion';
import { Coins, LineChart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const TokenomicsInfoCards = () => {
  const { isMobile, isSmallMobile } = useIsMobile();
  
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 2 : 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.2 : 0.4
      }
    }
  };

  const cards = [
    {
      icon: <Coins className="h-4 w-4 md:h-8 md:w-8 text-[#0ef34b]" />,
      title: "Token Supply",
      value: "1 Billion GPTV"
    },
    {
      icon: <LineChart className="h-4 w-4 md:h-8 md:w-8 text-[#0ef34b]" />,
      title: "Utility Token",
      value: "Multi-Ecosystem"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 w-full max-w-4xl mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-5px" : "-40px" }}
          transition={{ delay: index * 0.1 }}
          className="backdrop-blur-xl bg-white/10 p-2 md:p-6 rounded-lg md:rounded-xl border border-white/20 shadow-lg flex items-center hover:border-white/30 hover:bg-white/15 transition-all duration-300 group"
        >
          <div className="mr-2 md:mr-4 p-1 md:p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-all duration-300">
            {card.icon}
          </div>
          <div>
            <h3 className="text-xs md:text-lg font-medium text-white group-hover:text-white/90 transition-colors">{card.title}</h3>
            <p className="text-xs md:text-lg font-mono text-[#0ef34b] group-hover:text-[#0ef34b]/90 transition-colors">{card.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TokenomicsInfoCards;
