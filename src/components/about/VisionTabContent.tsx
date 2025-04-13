
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
      className="space-y-8"
    >
      <h3 className="text-3xl font-bold bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent">
        Your AI Hub and Multi-Platform Gateway
      </h3>
      
      <p className="text-white/80 text-lg leading-relaxed">
        GPTVerse is a pioneering multi-chain platform that bridges blockchain technology 
        with cutting-edge AI solutions, delivering MVP-ready products and a robust roadmap 
        for continuous innovation.
      </p>
      
      <div className="space-y-5">
        <div className="flex items-start gap-4 p-3 hover:bg-[#06101a]/60 rounded-lg transition-all">
          <div className="p-3 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/30 shadow-lg shadow-[#0ef34b]/10">
            <CheckCircle className="w-6 h-6 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-xl text-white">First on BNB Chain</h4>
            <p className="text-white/70 text-base">Our first contract was published on BNB Chain, with plans for seamless multichain expansion</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-3 hover:bg-[#06101a]/60 rounded-lg transition-all">
          <div className="p-3 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/30 shadow-lg shadow-[#0ef34b]/10">
            <CheckCircle className="w-6 h-6 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-xl text-white">Veteran Engineering Team</h4>
            <p className="text-white/70 text-base">Backed by developers and engineers with over 20 years of industry experience</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-3 hover:bg-[#06101a]/60 rounded-lg transition-all">
          <div className="p-3 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/30 shadow-lg shadow-[#0ef34b]/10">
            <CheckCircle className="w-6 h-6 text-[#0ef34b]" />
          </div>
          <div>
            <h4 className="font-semibold text-xl text-white">MVP-Ready Solutions</h4>
            <p className="text-white/70 text-base">Launch-ready AI products delivering immediate value across multiple platforms</p>
          </div>
        </div>
      </div>
      
      <div className="pt-5 flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          className="px-8 py-7 text-lg font-bold rounded-xl bg-gradient-to-r from-[#0ef34b] to-[#00aeff] hover:brightness-110 hover:shadow-lg hover:shadow-[#0ef34b]/20 transform transition-all hover:-translate-y-1 text-black relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          <div className="flex items-center gap-3">
            <Rocket className="h-6 w-6" />
            <span>Join GPTVerse</span>
            <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Button>
        
        <Button 
          variant="outline" 
          className="px-8 py-7 text-lg font-bold rounded-xl border-2 border-[#0ef34b]/50 hover:bg-[#0ef34b]/10 hover:border-[#0ef34b] transform transition-all hover:-translate-y-1 text-white relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-[#0ef34b]/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          <div className="flex items-center gap-3">
            <ExternalLink className="h-6 w-6" />
            <span>Whitepaper</span>
            <ArrowRight className="h-5 w-5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default VisionTabContent;
