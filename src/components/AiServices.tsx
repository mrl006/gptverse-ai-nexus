
import React from 'react';
import AiServicesHeader from './ai-services/AiServicesHeader';
import AiServicesBackground from './ai-services/AiServicesBackground';
import { getAiServices } from './ai-services/aiServicesData';
import AiTimelineItem from './ai-services/AiTimelineItem';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AiServices = () => {
  const aiServices = getAiServices();

  return (
    <section id="ai-services" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <AiServicesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AiServicesHeader />
        
        <div className="flex mt-20">
          {/* Left side for the image/card */}
          <div className="hidden lg:block lg:w-5/12 sticky top-20 h-fit">
            <Card className="overflow-hidden border-0 bg-transparent p-6">
              <div className="w-full rounded-xl overflow-hidden backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg bg-gradient-to-b from-[#030A1A] to-[#05152A]">
                <div className="relative aspect-square">
                  <img 
                    src="/lovable-uploads/172fa827-97bc-4fdc-84e9-8005350c8f3c.png" 
                    alt="GPTVerse AI"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030A1A] via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 text-center p-8">
                    <h2 className="text-4xl font-bold text-white mb-2">Dora AI</h2>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-4">
                      2.0
                    </div>
                    <p className="text-white/80 text-center mb-8">
                      Your support is vital.<br />
                      With every subscription, you fund the R&D of GPTVerse AI.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Right side for the timeline */}
          <div className="w-full lg:w-7/12">
            <div className="timeline-container relative pl-10 md:pl-12 pb-10">
              {aiServices.map((service, index) => (
                <AiTimelineItem
                  key={index}
                  title={service.title}
                  subtitle={service.subtitle}
                  description={service.description}
                  statusLabels={service.statusLabels}
                  progress={service.progress}
                  version={service.version}
                  isLast={index === aiServices.length - 1}
                />
              ))}
              
              {/* Final roadmap item */}
              <div className="timeline-item relative mb-0 pb-0">
                <div className="ml-6 md:ml-8">
                  <div className="p-4 md:p-6 rounded-xl bg-[#0A1525]/80 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="flex flex-col">
                      <p className="text-white/60 text-lg mb-4">
                        ... and much more!
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-white/10 hover:border-white/30 hover:bg-white/5 text-white justify-start hover:translate-x-1 transition-all duration-300"
                      >
                        See full roadmap <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiServices;
