
import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Wallet } from 'lucide-react';

const TokenomicsInfoCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
      {/* Total Supply Card */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="border border-white/10 rounded-xl p-5 backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-[#0ef34b]/10 border border-[#0ef34b]/20">
            <Coins className="w-6 h-6 text-[#0ef34b]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white">Total Supply</h3>
            <div className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0ef34b] to-[#00aeff]">
              1,000,000,000
            </div>
            <p className="text-sm text-white/60">GPTVerse (GPTV)</p>
          </div>
        </div>
      </motion.div>
      
      {/* Initial Token Price Card */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="border border-white/10 rounded-xl p-5 backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            <Wallet className="w-6 h-6 text-[#8B5CF6]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white">Initial Price</h3>
            <div className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#00aeff]">
              $0.0085
            </div>
            <p className="text-sm text-white/60">Public sale price</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TokenomicsInfoCards;
