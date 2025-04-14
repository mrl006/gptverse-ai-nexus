
import React, { useState } from 'react';
import AiServicesHeader from './ai-services/AiServicesHeader';
import AiServicesBackground from './ai-services/AiServicesBackground';
import { getAiServices } from './ai-services/aiServicesData';
import AiServiceCard from './ai-services/AiServiceCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import type { CarouselApi } from './ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const AiServices = () => {
  const aiServices = getAiServices();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const { isMobile } = useIsMobile();

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
    <section id="ai-services" className="py-10 md:py-20 relative overflow-hidden">
      {/* Background effects */}
      <AiServicesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AiServicesHeader />
        
        {/* Carousel of service cards */}
        <div className="mt-6 md:mt-12 relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {aiServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 py-1 px-1 md:px-2">
                  <AiServiceCard
                    title={service.title}
                    subtitle={service.subtitle}
                    description={service.description}
                    image={service.image}
                    statusLabels={service.statusLabels || []}
                    buttonType={service.buttonType}
                    flipped={index % 2 !== 0}
                    isActive={index === activeIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex left-0 bg-[#040812]/70 backdrop-blur-md border border-white/10 text-white hover:text-white hover:bg-white/10 hover:border-white/30" />
            <CarouselNext className="hidden md:flex right-0 bg-[#040812]/70 backdrop-blur-md border border-white/10 text-white hover:text-white hover:bg-white/10 hover:border-white/30" />
          </Carousel>
          
          {/* Carousel indicator dots */}
          <div className="flex justify-center gap-2 mt-4 md:mt-8">
            {aiServices.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-[#0ef34b] scale-110 shadow-[0_0_10px_rgba(14,243,75,0.7)]" 
                    : "bg-white/20"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiServices;
