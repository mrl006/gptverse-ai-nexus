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
  return;
};
export default AiServices;