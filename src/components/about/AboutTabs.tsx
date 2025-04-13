
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisionTabContent from './VisionTabContent';

const AboutTabs: React.FC = () => {
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
        <div className="bg-gradient-to-br from-[#06101a]/80 to-[#040813]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg h-full flex flex-col justify-center">
          <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in h-full">
            <VisionTabContent />
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default AboutTabs;

