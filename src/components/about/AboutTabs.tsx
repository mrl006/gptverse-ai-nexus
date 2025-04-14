
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisionTabContent from './VisionTabContent';
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';
import { BookText, Lightbulb, Sparkles } from 'lucide-react';

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
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-3 md:p-5 shadow-lg h-full flex flex-col">
          <TabsList className="w-full justify-between mb-3 bg-black/20">
            <TabsTrigger value="vision" className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Vision</span>
            </TabsTrigger>
            <TabsTrigger value="features" className="flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Features</span>
            </TabsTrigger>
            <TabsTrigger value="ecosystem" className="flex items-center gap-1.5">
              <BookText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ecosystem</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in w-full h-full">
            <ScrollArea className={`${isSmallMobile ? 'h-[180px]' : (isMobile ? 'h-[220px]' : 'h-[360px]')} pr-2`}>
              <VisionTabContent />
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="features" className="mt-0 data-[state=active]:animate-fade-in w-full h-full">
            <ScrollArea className={`${isSmallMobile ? 'h-[180px]' : (isMobile ? 'h-[220px]' : 'h-[360px]')} pr-2`}>
              <div className="space-y-3">
                <h4 className="font-semibold text-[#0ef34b]">Neural Core Features</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 min-h-4 rounded-full bg-[#0ef34b]/20 border border-[#0ef34b]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ef34b]"></div>
                    </div>
                    <span>Advanced deep learning architecture with 98% accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 min-h-4 rounded-full bg-[#0ef34b]/20 border border-[#0ef34b]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ef34b]"></div>
                    </div>
                    <span>Real-time data processing at 10ms latency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 min-h-4 rounded-full bg-[#0ef34b]/20 border border-[#0ef34b]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ef34b]"></div>
                    </div>
                    <span>Quantum computing integration for complex problem-solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 min-h-4 rounded-full bg-[#0ef34b]/20 border border-[#0ef34b]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ef34b]"></div>
                    </div>
                    <span>Secure blockchain integration ensuring data integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 min-h-4 rounded-full bg-[#0ef34b]/20 border border-[#0ef34b]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ef34b]"></div>
                    </div>
                    <span>Multi-chain compatibility for seamless operations</span>
                  </li>
                </ul>
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="ecosystem" className="mt-0 data-[state=active]:animate-fade-in w-full h-full">
            <ScrollArea className={`${isSmallMobile ? 'h-[180px]' : (isMobile ? 'h-[220px]' : 'h-[360px]')} pr-2`}>
              <div className="space-y-3">
                <h4 className="font-semibold text-[#0ef34b]">Neural Ecosystem</h4>
                <p className="text-sm text-white/80">
                  The Neural Core powers the entire GPTVerse ecosystem, providing the computational backbone for all applications in our network.
                </p>
                <div className="grid grid-cols-1 gap-3 mt-3">
                  <div className="p-2 rounded-lg border border-white/10 bg-white/5">
                    <h5 className="text-sm font-medium text-white/90">AI Models & Applications</h5>
                    <p className="text-xs text-white/70">Diverse range of AI models for various use cases</p>
                  </div>
                  <div className="p-2 rounded-lg border border-white/10 bg-white/5">
                    <h5 className="text-sm font-medium text-white/90">Developer SDK Access</h5>
                    <p className="text-xs text-white/70">Build on Neural Core with our comprehensive SDK</p>
                  </div>
                  <div className="p-2 rounded-lg border border-white/10 bg-white/5">
                    <h5 className="text-sm font-medium text-white/90">DAO Governance</h5>
                    <p className="text-xs text-white/70">Community-driven decision making for ecosystem growth</p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default AboutTabs;
