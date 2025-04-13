
import React from 'react';
import { tokenDistribution } from './tokenomics/TokenDistributionData';
import PieChartVisualization from './tokenomics/PieChartVisualization';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-[#0ef34b]/5 blur-[180px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00aeff]/5 blur-[150px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <TokenomicsHeading />
        
        <div className="flex flex-col space-y-10">
          {/* Info cards section */}
          <TokenomicsInfoCards />
          
          {/* Main visualization section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-4xl mx-auto w-full"
          >
            <Card className="backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] bg-black/10">
              <CardContent className="p-4">
                <PieChartVisualization />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
