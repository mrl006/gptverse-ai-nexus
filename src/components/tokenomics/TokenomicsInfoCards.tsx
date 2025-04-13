
import React from 'react';
import { motion } from 'framer-motion';
import { Coins, LineChart, Clock, Wallet } from 'lucide-react';

const TokenomicsInfoCards = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cards = [
    {
      icon: <Coins className="h-8 w-8 text-[#0ef34b]" />,
      title: "Token Supply",
      value: "1 Billion GPTV"
    },
    {
      icon: <LineChart className="h-8 w-8 text-[#0ef34b]" />,
      title: "Utility Token",
      value: "Multi-Ecosystem"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl flex items-center"
        >
          <div className="mr-4 p-3 rounded-lg bg-black/20 backdrop-blur-md">
            {card.icon}
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{card.title}</h3>
            <p className="text-lg font-mono text-[#0ef34b]">{card.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TokenomicsInfoCards;
