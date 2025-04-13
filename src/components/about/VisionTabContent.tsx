
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket, ExternalLink } from 'lucide-react';

const tabContentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

const VisionTabContent: React.FC = () => {
  return (
    <motion.div 
      variants={tabContentVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent">
        Your AI Hub and Multi-Platform Gateway
      </h3>
      
      <p className="text-white/80 leading-relaxed">
        GPTVerse is a pioneering multi-chain platform that bridges blockchain technology 
        with cutting-edge AI solutions, delivering MVP-ready products and a robust roadmap 
        for continuous innovation.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
            <CheckCircle className="w-5 h-5 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-white">First on BNB Chain</h4>
            <p className="text-white/70 text-sm">Our first contract was published on BNB Chain, with plans for seamless multichain expansion</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
            <CheckCircle className="w-5 h-5 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Veteran Engineering Team</h4>
            <p className="text-white/70 text-sm">Backed by developers and engineers with over 20 years of industry experience</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
            <CheckCircle className="w-5 h-5 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-white">MVP-Ready Solutions</h4>
            <p className="text-white/70 text-sm">Launch-ready AI products delivering immediate value across multiple platforms</p>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="px-4 py-2 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-medium text-sm transition hover:brightness-110 flex items-center gap-1.5">
            <Rocket className="h-4 w-4" />
            <span>Join GPTVerse</span>
          </button>
          
          <button className="px-4 py-2 bg-transparent border border-[#0ef34b]/50 rounded-lg text-white font-medium text-sm transition hover:bg-[#0ef34b]/10 flex items-center gap-1.5">
            <ExternalLink className="h-4 w-4" />
            <span>Whitepaper</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VisionTabContent;

