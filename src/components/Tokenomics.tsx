
import React, { useState } from 'react';
import { tokenDistribution } from './tokenomics/TokenDistributionData';
import PieChartVisualization from './tokenomics/PieChartVisualization';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const Tokenomics = () => {
  // Sort token distribution data by value (descending)
  const sortedTokenDistribution = [...tokenDistribution].sort((a, b) => b.value - a.value);
  
  return (
    <section id="tokenomics" className="relative py-28 overflow-hidden">
      {/* Enhanced background with more depth */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Improved ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-[#0ef34b]/5 blur-[180px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00aeff]/5 blur-[150px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <TokenomicsHeading />
        
        <div className="flex flex-col space-y-16">
          {/* Info cards section */}
          <TokenomicsInfoCards />
          
          {/* Main visualization section with enhanced glassmorphism and glow effects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-5xl mx-auto w-full"
          >
            <Card className="relative backdrop-blur-xl border border-[#0ef34b]/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_20px_rgba(14,243,75,0.15)] p-6 bg-black/10 overflow-hidden">
              {/* Green glow ambient effects */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#0ef34b]/10 rounded-full blur-[60px] animate-pulse-slow"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#0ef34b]/10 rounded-full blur-[60px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-transparent opacity-40 mix-blend-overlay"></div>
              
              <CardContent className="p-4 relative z-10">
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
