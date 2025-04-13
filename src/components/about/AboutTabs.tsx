
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisionTabContent from './VisionTabContent';

const AboutTabs: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <Tabs defaultValue="vision" className="w-full">
        <TabsList className="mb-8 w-full bg-transparent border-b border-white/10 flex justify-center">
          <TabsTrigger 
            value="vision" 
            className="relative px-6 py-3 text-[#0ef34b]"
          >
            <span>Our Vision</span>
          </TabsTrigger>
        </TabsList>
        
        <div className="h-[460px] overflow-y-auto pr-4 scrollbar-thin">
          <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in">
            <VisionTabContent />
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default AboutTabs;
