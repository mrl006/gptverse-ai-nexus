
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <motion.div 
      className="glass-card p-10 backdrop-blur-2xl border border-white/10 bg-[#06101a]/40 rounded-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d946ef]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
          Join the Future Today
        </h3>
        
        <p className="text-lg text-white/80 mb-8">
          GPTVerse is at the forefront of the AI revolution, bringing together cutting-edge technologies, 
          a vibrant community of visionaries, and a dedication to transforming multiple industries. 
          Embrace the possibilities, unleash your creativity, and shape the future with GPTVerse.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] hover:brightness-110 text-black font-semibold border-none py-6 px-8">
            Enter the GPTVerse
          </Button>
          
          <Button variant="outline" className="border-[#d946ef]/50 text-white hover:bg-[#d946ef]/10 py-6 px-8">
            Join Our Community
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CtaSection;
