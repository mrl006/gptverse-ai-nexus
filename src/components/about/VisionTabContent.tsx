
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
        Your Gateway to the AI-Powered Universe
      </h3>
      
      <p className="text-white/80 leading-relaxed">
        GPTVerse stands at the frontier of innovation, bringing together cutting-edge AI 
        technologies with blockchain to create a seamless multi-platform experience that 
        transcends traditional boundaries.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
            <CheckCircle className="w-5 h-5 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Decentralized AI Infrastructure</h4>
            <p className="text-white/70 text-sm">Building the backbone for next-generation AI applications without centralized control</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
            <CheckCircle className="w-5 h-5 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Multichain Compatibility</h4>
            <p className="text-white/70 text-sm">Seamless integration across multiple blockchain networks for maximum reach and utility</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
            <CheckCircle className="w-5 h-5 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-white">AI-Powered DApps Ecosystem</h4>
            <p className="text-white/70 text-sm">A complete suite of applications leveraging artificial intelligence for unprecedented capabilities</p>
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
