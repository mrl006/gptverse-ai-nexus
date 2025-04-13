
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisionTabContent from './VisionTabContent';
import FeaturesTabContent from './FeaturesTabContent';
import EcosystemTabContent from './EcosystemTabContent';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutTabs: React.FC = () => {
  const { isMobile } = useIsMobile();

  return (
    <motion.div 
      initial={{
        opacity: 0,
        x: 30
      }} 
      whileInView={{
        opacity: 1,
        x: 0
      }} 
      viewport={{
        once: true
      }} 
      transition={{
        duration: 0.7,
        delay: 0.2
      }}
      className="w-full h-full"
    >
      <Tabs defaultValue="vision" className="w-full h-full">
        <div className="bg-gradient-to-br from-[#06101a]/80 to-[#040813]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 shadow-lg h-full flex flex-col">
          <TabsList className="mx-auto mb-4 md:mb-6 overflow-x-auto flex-wrap justify-center">
            <TabsTrigger value="vision">Vision</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
          </TabsList>
          
          <div className="flex-grow overflow-y-auto custom-scrollbar">
            <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in h-full">
              <VisionTabContent />
            </TabsContent>
            <TabsContent value="features" className="mt-0 data-[state=active]:animate-fade-in h-full">
              <FeaturesTabContent />
            </TabsContent>
            <TabsContent value="ecosystem" className="mt-0 data-[state=active]:animate-fade-in h-full">
              <EcosystemTabContent />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default AboutTabs;
