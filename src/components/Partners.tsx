
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Partner logos with categories
  const partners = {
    strategic: [
      { name: 'BNB Chain' },
      { name: 'SKALE' },
      { name: 'NEAR' },
      { name: 'Psalms Capital' },
      { name: 'Mises Browser' },
      { name: 'Dmail' },
      { name: 'GPT360' },
      { name: 'MAR3.AI' },
      { name: 'HeLa' },
      { name: 'TekTias' },
      { name: 'Dot.Gaming' },
      { name: 'Collably Network' },
      { name: 'Eesee' },
      { name: 'List My Project' },
    ],
    media: [
      { name: 'Cassava' },
      { name: 'Trend3' },
      { name: 'Port' },
      { name: 'Fomo in' },
    ]
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
    <section id="partners" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c18] to-[#040812] z-0"></div>
      
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGgxdjYwSDB6IiBmaWxsPSJyZ2JhKDE0LDI0Myw3NSwwLjAyKSIvPjxwYXRoIGQ9Ik0zMCAwaDFMNjAgNjBoLTFMMzAgMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-10 z-0"></div>
      
      {/* Decorative glows */}
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-alien-neon/5 rounded-full filter blur-[120px] transform -translate-y-1/2 z-0"></div>
      <div className="absolute right-1/4 top-1/2 w-96 h-96 bg-alien-blue/5 rounded-full filter blur-[120px] transform -translate-y-1/2 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">STRATEGIC</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-alien-neon via-alien-blue to-alien-cyan animate-text-gradient bg-[length:200%_auto]">
              PARTNERS
            </span>
          </h2>
          <div className="h-1 w-36 mx-auto bg-gradient-to-r from-alien-neon/40 to-alien-blue/40 rounded-full my-4"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            We're proud to collaborate with industry leaders to bring you the best AI experience
          </p>
        </motion.div>
        
        {/* Partners grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16"
        >
          {partners.strategic.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(14, 243, 75, 0.2)' }}
              className="flex items-center justify-center h-16 sm:h-20 neo-blur backdrop-blur-md bg-[#080f1d]/50 border border-white/5 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Media Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-10 mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">MEDIA</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-alien-blue via-alien-cyan to-alien-neon animate-text-gradient bg-[length:200%_auto]">
              PARTNERS
            </span>
          </h2>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-alien-blue/40 to-alien-neon/40 rounded-full my-4"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {partners.media.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 174, 255, 0.2)' }}
              className="flex items-center justify-center h-16 neo-blur backdrop-blur-md bg-[#080f1d]/50 border border-white/5 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-alien-neon opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-alien-neon"></span>
            <span className="w-2 h-2 rounded-full bg-alien-neon opacity-50"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
