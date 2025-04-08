
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MainDescription = () => {
  return (
    <motion.div 
      className="glass-card p-8 backdrop-blur-2xl bg-[#06101a]/40 border border-white/10 rounded-2xl relative overflow-hidden order-1 lg:order-2"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00aeff]/10 rounded-full blur-3xl"></div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent">
        Your Gateway to the AI-Powered Metaverse
      </h3>
      
      <p className="text-lg text-white/80 mb-6 leading-relaxed">
        Are you ready to embark on an extraordinary journey in the AI-powered metaverse? 
        GPTVerse stands at the frontier of innovation, bringing together cutting-edge AI 
        technologies with blockchain to create a seamless multi-platform experience.
      </p>
      
      <p className="text-lg text-white/80 mb-8 leading-relaxed">
        Step into a vibrant ecosystem where AI-driven technologies integrate with social 
        interactions, education, finance, marketing, and more. Our vision extends beyond 
        conventional boundaries, creating a space where creativity thrives and innovation 
        flourishes.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <Button className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] text-black font-semibold transition hover:brightness-110 flex items-center gap-2 border-none">
          <Rocket className="h-5 w-5" />
          <span>Join GPTVerse</span>
        </Button>
        
        <Button variant="outline" className="border-[#0ef34b]/50 text-white font-semibold transition hover:bg-[#0ef34b]/10 flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          <span>Explore Whitepaper</span>
        </Button>
      </div>
    </motion.div>
  );
};

export default MainDescription;
