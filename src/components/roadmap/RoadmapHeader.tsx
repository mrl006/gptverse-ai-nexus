
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const RoadmapHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-alien-neon via-alien-blue to-alien-cyan animate-text-gradient bg-[length:200%_auto]">
            Development Timeline
          </span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Track our journey from inception through our ambitious roadmap as we build the future of AI
        </p>
        <Separator className="w-24 h-1 bg-gradient-to-r from-alien-neon/30 to-alien-blue/30 mx-auto mt-6" />
      </motion.div>
    </div>
  );
};

export default RoadmapHeader;
