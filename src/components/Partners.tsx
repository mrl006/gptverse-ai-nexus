
import React, { useRef, useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'strategic' | 'media'>('strategic');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Strategic partners data with logo paths (in the specified order)
  const strategicPartners = [
    { name: 'BNB Chain', logo: '/lovable-uploads/6d854a68-604d-472f-8dbe-4e6b7d475e7a.png' },
    { name: 'SKALE', logo: '/lovable-uploads/d8a647fd-5f31-4013-b469-097d203a60fd.png' },
    { name: 'NEAR', logo: '/lovable-uploads/317b56f0-d28a-4c8a-ab0c-42ab95055aa8.png' },
    { name: 'MAR3.AI', logo: '/lovable-uploads/a935d826-7054-473c-aacc-e875e4d9804c.png' },
    { name: 'HeLa', logo: '/lovable-uploads/12d550aa-d6cf-4f07-b0a8-2120445d6a43.png' },
    { name: 'Dot.Gaming', logo: '/lovable-uploads/a39e0e99-9dbf-49ca-82d5-a3495f70bc94.png' },
    { name: 'GPT360', logo: '/lovable-uploads/fe5e44f5-b63d-4cc9-9fe6-2a469d3202fc.png' },
    { name: 'Microsoft', logo: '/lovable-uploads/35e47c68-5561-4e66-b795-7a9a33ac4e3d.png' },
    { name: 'Dmail', logo: '/lovable-uploads/9639b11a-56fd-495c-9d4a-08734d2726ec.png' },
    { name: 'Mises Browser', logo: '/lovable-uploads/3ce93ed8-1d38-4bc9-b587-902d5d692ba8.png' },
    { name: 'TekTias', logo: '/lovable-uploads/7c8de1ed-8d26-4b86-a4f7-db09b5cfc022.png' },
    { name: 'Collably Network', logo: '/lovable-uploads/bd9dd7a7-42a6-4830-847e-06ae935509b1.png' },
    { name: 'Psalms Capital', logo: '/lovable-uploads/62e7d3bd-0b41-49f8-b500-5e4f45fe3514.png' },
    { name: 'List My Project', logo: '/lovable-uploads/1e5eee3e-a8a9-4eb9-9efd-a4897f4178d4.png' },
    { name: 'Eesee', logo: '/lovable-uploads/30ba900d-446a-4c45-b435-b8d41893f15d.png' },
  ];
  
  // Media partners data with logo paths
  const mediaPartners = [
    { name: 'Cassava', logo: '/lovable-uploads/0f079dac-6a27-4f29-973c-e59b2510eaee.png' },
    { name: 'Trend3', logo: '/lovable-uploads/36844903-9eb1-456c-8520-ce13cd802585.png' },
    { name: 'Port3', logo: '/lovable-uploads/7e5ce84b-bf10-48c0-8606-2f3aac895e43.png' },
    { name: 'Fomein', logo: '/lovable-uploads/b5628de2-4f1b-4aad-920d-f7d0bc64f191.png' },
  ];

  useEffect(() => {
    // Set imagesLoaded to true when component mounts
    // In a real app, you'd want to track each image load
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const scrollContainer = containerRef.current;
    let isMouseDown = false;
    let startX: number;
    let scrollLeft: number;
    
    const startDragging = (e: MouseEvent) => {
      isMouseDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = 'grabbing';
    };
    
    const stopDragging = () => {
      isMouseDown = false;
      scrollContainer.style.cursor = 'grab';
    };
    
    const move = (e: MouseEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };
    
    scrollContainer.addEventListener('mousedown', startDragging);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', move);
    
    return () => {
      scrollContainer.removeEventListener('mousedown', startDragging);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('mousemove', move);
    };
  }, []);
  
  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812] to-[#06101a] opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-30 z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(14,243,75,0.15)_0%,transparent_50%)] z-0"></div>
      
      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-[#0ef34b] rounded-full opacity-70 blur-sm animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#00aeff] rounded-full opacity-60 blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#d946ef] rounded-full opacity-50 blur-sm animate-pulse" style={{animationDelay: '0.7s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#0ef34b] uppercase tracking-wider text-sm font-mono mb-2">Ecosystem</h2>
          <div className="relative inline-block">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              STRATEGIC PARTNERS
            </h3>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b] to-[#0ef34b]/0"></div>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mt-6">
            We're proud to collaborate with industry leaders to bring you the best AI experience.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="glass-card p-1 flex rounded-lg backdrop-blur-md bg-[#040812]/40 border border-[#0ef34b]/20">
            <button 
              onClick={() => setActiveCategory('strategic')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeCategory === 'strategic' 
                  ? 'bg-[#0ef34b]/10 text-[#0ef34b] shadow-[0_0_10px_rgba(14,243,75,0.2)]' 
                  : 'text-white/70 hover:text-white/90'
              }`}
            >
              Strategic
            </button>
            <button 
              onClick={() => setActiveCategory('media')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeCategory === 'media' 
                  ? 'bg-[#0ef34b]/10 text-[#0ef34b] shadow-[0_0_10px_rgba(14,243,75,0.2)]' 
                  : 'text-white/70 hover:text-white/90'
              }`}
            >
              Media
            </button>
          </div>
        </div>
        
        {/* Partners Grid */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {(activeCategory === 'strategic' ? strategicPartners : mediaPartners).map((partner, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="group cursor-pointer">
                    <Card
                      className="relative h-32 backdrop-blur-xl bg-[#06101a]/40 border border-[#0ef34b]/10 rounded-xl overflow-hidden
                               hover:border-[#0ef34b]/30 transition-all duration-500 flex items-center justify-center
                               shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(14,243,75,0.15)]"
                    >
                      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b]/20 to-[#00aeff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {!imagesLoaded ? (
                        <Skeleton className="h-16 w-24 bg-gray-700/30" />
                      ) : (
                        <div className="flex items-center justify-center p-4">
                          <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="max-h-16 max-w-full brightness-100 invert opacity-90 group-hover:opacity-100 transition-all duration-300"
                            style={{ 
                              filter: "brightness(0) invert(1)",
                              objectFit: "contain" 
                            }}
                          />
                        </div>
                      )}
                      
                      {/* Corner dot */}
                      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#0ef34b]/50 group-hover:bg-[#0ef34b] transition-colors duration-300" />
                    </Card>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-2 backdrop-blur-xl bg-[#06101a]/90 border border-[#0ef34b]/20 text-white">
                  {partner.name}
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
        
        {/* Indicator dots */}
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            <span className={`w-2 h-2 rounded-full ${activeCategory === 'strategic' ? 'bg-[#0ef34b]' : 'bg-[#0ef34b]/30'} transition-colors duration-300`}></span>
            <span className={`w-2 h-2 rounded-full ${activeCategory === 'media' ? 'bg-[#0ef34b]' : 'bg-[#0ef34b]/30'} transition-colors duration-300`}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

