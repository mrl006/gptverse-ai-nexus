
import React, { useState } from 'react';
import AiServicesHeader from './ai-services/AiServicesHeader';
import AiServicesBackground from './ai-services/AiServicesBackground';
import { getAiServices } from './ai-services/aiServicesData';
import AiServiceCard from './ai-services/AiServiceCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import type { CarouselApi } from './ui/carousel';

const AiServices = () => {
  const aiServices = getAiServices();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Set up the onSelect handler when the API changes
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    // Add event listener
    api.on("select", onSelect);

    // Cleanup
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="ai-services" className="relative py-20 overflow-hidden">
      <AiServicesBackground />
      <div className="container mx-auto px-4 relative z-10">
        <AiServicesHeader />

        <div className="mt-16">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {aiServices.map((service, index) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                  <AiServiceCard 
                    service={service} 
                    isActive={activeIndex === index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static bg-[#061018]/50 border-[#8B5CF6]/20 text-white" />
              <CarouselNext className="relative static bg-[#061018]/50 border-[#8B5CF6]/20 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AiServices;
