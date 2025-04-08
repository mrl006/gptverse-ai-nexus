
import React, { useRef, useEffect, useState } from 'react';
import { Shield, Globe, Building2, Award, ExternalLink } from 'lucide-react';
import { Card } from "@/components/ui/card";

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'strategic' | 'media'>('strategic');
  
  // Strategic partners data
  const strategicPartners = [
    { name: 'BNB Chain', category: 'blockchain' },
    { name: 'SKALE', category: 'blockchain' },
    { name: 'NEAR', category: 'blockchain' },
    { name: 'Psalms Capital', category: 'investor' },
    { name: 'Mises Browser', category: 'app' },
    { name: 'Dmail', category: 'app' },
    { name: 'GPT360', category: 'ai' },
    { name: 'MAR3.AI', category: 'ai' },
    { name: 'HeLa', category: 'tech' },
    { name: 'TekTias', category: 'tech' },
    { name: 'Dot.Gaming', category: 'gaming' },
    { name: 'Collably Network', category: 'network' },
    { name: 'Eesee', category: 'app' },
    { name: 'List My Project', category: 'service' },
  ];
  
  // Media partners data
  const mediaPartners = [
    { name: 'Cassava', category: 'media' },
    { name: 'Trend3', category: 'media' },
    { name: 'Port3', category: 'media' },
    { name: 'Fomein', category: 'media' },
  ];
  
  const getPartnerIcon = (category: string) => {
    switch(category) {
      case 'blockchain':
        return <Shield className="h-5 w-5 text-[#0ef34b]" />;
      case 'investor':
        return <Award className="h-5 w-5 text-[#00aeff]" />;
      case 'app':
      case 'service':
        return <ExternalLink className="h-5 w-5 text-[#d946ef]" />;
      case 'ai':
      case 'tech':
        return <Building2 className="h-5 w-5 text-[#0ef34b]" />;
      case 'media':
      case 'network':
      default:
        return <Globe className="h-5 w-5 text-[#00aeff]" />;
    }
  };
  
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {(activeCategory === 'strategic' ? strategicPartners : mediaPartners).map((partner, index) => (
              <div 
                key={index}
                className="group"
              >
                <Card
                  className="relative h-28 backdrop-blur-xl bg-[#06101a]/40 border border-[#0ef34b]/10 rounded-xl overflow-hidden
                           hover:border-[#0ef34b]/30 transition-all duration-500 flex items-center justify-center
                           shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(14,243,75,0.15)]"
                >
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b]/20 to-[#00aeff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="mb-2">
                      {getPartnerIcon(partner.category)}
                    </div>
                    <p className="font-medium text-white group-hover:text-[#0ef34b] transition-colors duration-300 text-sm md:text-base">{partner.name}</p>
                  </div>
                  
                  {/* Corner dot */}
                  <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#0ef34b]/50 group-hover:bg-[#0ef34b] transition-colors duration-300" />
                </Card>
              </div>
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
