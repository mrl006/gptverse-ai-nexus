
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
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg md:rounded-xl p-2 md:p-6 shadow-lg h-full flex flex-col relative overflow-hidden group">
          {/* Add glassy highlight effects */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 via-transparent to-[#00aeff]/5 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in w-full h-full relative z-10">
            <ScrollArea className={`${isSmallMobile ? 'h-full max-h-[300px]' : (isMobile ? 'h-full max-h-[340px]' : 'h-full max-h-[350px]')} pr-2`}>
              <VisionTabContent />
            </ScrollArea>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default AboutTabs;
