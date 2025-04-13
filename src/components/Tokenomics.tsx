
import React from 'react';
import { tokenDistribution } from './tokenomics/TokenDistributionData';
import PieChartVisualization from './tokenomics/PieChartVisualization';
import TokenomicsHeading from './tokenomics/TokenomicsHeading';
import TokenomicsInfoCards from './tokenomics/TokenomicsInfoCards';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Tokenomics = () => {
  const { isMobile, isSmallMobile } = useIsMobile();
  
  // Sort token distribution data by value (descending)
  const sortedTokenDistribution = [...tokenDistribution].sort((a, b) => b.value - a.value);
  
  return (
    <section id="tokenomics" className="relative py-8 md:py-24 overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#0ef34b]/5 blur-[180px] animate-pulse-slow"></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        {/* Section heading */}
        <TokenomicsHeading />
        
        <div className="flex flex-col space-y-4 md:space-y-16">
          {/* Info cards section */}
          <TokenomicsInfoCards />
          
          {/* Main visualization section */}
          <motion.div 
            initial={{ opacity: 0, y: isMobile ? 2 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: isMobile ? "-5px" : "-40px" }}
            transition={{ duration: isMobile ? 0.2 : 0.6, delay: 0.1 }}
            className="max-w-5xl mx-auto w-full"
          >
            <Card className="relative backdrop-blur-xl border border-[#0ef34b]/20 rounded-lg md:rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.2),0_0_10px_rgba(14,243,75,0.15)] p-2 md:p-6 bg-black/10 overflow-hidden">
              {/* Simple glow effect */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#0ef34b]/10 rounded-full blur-[60px] animate-pulse-slow"></div>
              
              <CardContent className="p-1 md:p-4 relative z-10">
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
