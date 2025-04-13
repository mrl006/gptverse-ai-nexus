
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisionTabContent from './VisionTabContent';
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';

const AboutTabs: React.FC = () => {
  const { isMobile, isSmallMobile } = useIsMobile();
  
  return (
    <motion.div 
      initial={{
        opacity: 0,
        x: isMobile ? 4 : 20
      }} 
      whileInView={{
        opacity: 1,
        x: 0
      }} 
      viewport={{
        once: true,
        margin: isMobile ? "-5px" : "-40px"
      }} 
      transition={{
        duration: isMobile ? 0.2 : 0.6,
        delay: 0.1
      }}
      className="h-full flex items-center justify-center"
    >
      <Tabs defaultValue="vision" className="w-full h-full">
        <div className="bg-[#040812]/60 backdrop-blur-md border border-white/10 rounded-lg md:rounded-xl p-2 md:p-6 shadow-sm h-full flex items-center">
          <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in w-full">
            <ScrollArea className={`${isSmallMobile ? 'h-[220px]' : (isMobile ? 'h-[240px]' : 'h-auto')} pr-2`}>
              <VisionTabContent />
            </ScrollArea>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default AboutTabs;
