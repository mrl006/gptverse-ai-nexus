
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const RoadmapHeader = () => {
  return (
    <div className="text-center mb-16 relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-transparent to-alien-neon/40"></div>
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-alien-neon shadow-[0_0_10px_rgba(14,243,75,0.5)]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-alien-neon via-alien-blue to-alien-cyan animate-text-gradient bg-[length:200%_auto]">
            Development Roadmap
          </span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Follow our journey from inception to the future as we build the AI ecosystem of tomorrow
        </p>
        <Separator className="w-36 h-1 bg-gradient-to-r from-alien-neon/30 to-alien-blue/30 mx-auto mt-6" />
        
        {/* Tech elements */}
        <div className="w-24 h-2 mx-auto mt-4 flex justify-between">
          <div className="w-2 h-2 rounded-full bg-alien-neon animate-pulse-slow"></div>
          <div className="w-2 h-2 rounded-full bg-alien-blue animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 rounded-full bg-alien-cyan animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapHeader;
