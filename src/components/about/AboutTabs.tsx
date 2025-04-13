
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisionTabContent from './VisionTabContent';
import FeaturesTabContent from './FeaturesTabContent';
import EcosystemTabContent from './EcosystemTabContent';

const AboutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <Tabs defaultValue="vision" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-8 w-full bg-transparent border-b border-white/10 flex justify-between">
          <TabsTrigger 
            value="vision" 
            className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "vision" ? "text-[#0ef34b]" : "text-white/60"}`}
          >
            <span>Our Vision</span>
            {activeTab === "vision" && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0ef34b]"
              />
            )}
          </TabsTrigger>
          <TabsTrigger 
            value="features" 
            className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "features" ? "text-[#00aeff]" : "text-white/60"}`}
          >
            <span>Key Features</span>
            {activeTab === "features" && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00aeff]"
              />
            )}
          </TabsTrigger>
          <TabsTrigger 
            value="ecosystem" 
            className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "ecosystem" ? "text-[#d946ef]" : "text-white/60"}`}
          >
            <span>Ecosystem</span>
            {activeTab === "ecosystem" && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d946ef]"
              />
            )}
          </TabsTrigger>
        </TabsList>
        
        <div className="h-[460px] overflow-y-auto pr-4 scrollbar-thin">
          <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in">
            <VisionTabContent />
          </TabsContent>
          
          <TabsContent value="features" className="mt-0 data-[state=active]:animate-fade-in">
            <FeaturesTabContent />
          </TabsContent>
          
          <TabsContent value="ecosystem" className="mt-0 data-[state=active]:animate-fade-in">
            <EcosystemTabContent />
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default AboutTabs;
