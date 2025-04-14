
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent">
        AI Hub & Multi-Platform Gateway
      </h3>
      
      <p className="text-white/80 text-base leading-relaxed">
        GPTVerse bridges blockchain and AI, delivering MVP-ready products with a roadmap for continuous innovation.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-2 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all group">
          <div className="p-2 rounded-full backdrop-blur-xl bg-white/10 border border-[#0ef34b]/30 shadow-lg shadow-[#0ef34b]/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CheckCircle className="w-5 h-5 text-[#0ef34b] relative z-10" />
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white">First on BNB Chain</h4>
            <p className="text-white/70 text-sm">First contract on BNB Chain with multichain expansion plans</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-2 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all group">
          <div className="p-2 rounded-full backdrop-blur-xl bg-white/10 border border-[#0ef34b]/30 shadow-lg shadow-[#0ef34b]/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CheckCircle className="w-5 h-5 text-[#0ef34b] relative z-10" />
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white">Veteran Team</h4>
            <p className="text-white/70 text-sm">Backed by developers with 20+ years of industry experience</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-2 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all group">
          <div className="p-2 rounded-full backdrop-blur-xl bg-white/10 border border-[#0ef34b]/30 shadow-lg shadow-[#0ef34b]/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CheckCircle className="w-5 h-5 text-[#0ef34b] relative z-10" />
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white">MVP Solutions</h4>
            <p className="text-white/70 text-sm">Launch-ready AI products across multiple platforms</p>
          </div>
        </div>
      </div>
      
      <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          className="px-6 py-5 text-base font-bold rounded-xl bg-gradient-to-r from-[#0ef34b] to-[#00aeff] hover:brightness-110 hover:shadow-lg hover:shadow-[#0ef34b]/20 transform transition-all hover:-translate-y-1 text-black relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          <div className="flex items-center gap-2 relative z-10">
            <Rocket className="h-5 w-5" />
            <span>Join GPTVerse</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Button>
        
        <Button 
          variant="glassy-glow"
          className="px-6 py-5 text-base font-bold rounded-xl backdrop-blur-xl bg-white/10 border-2 border-[#0ef34b]/50 hover:bg-white/15 hover:border-[#0ef34b] transform transition-all hover:-translate-y-1 text-white relative overflow-hidden group"
        >
          <div className="flex items-center gap-2 relative z-10">
            <ExternalLink className="h-5 w-5" />
            <span>Whitepaper</span>
            <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default VisionTabContent;
