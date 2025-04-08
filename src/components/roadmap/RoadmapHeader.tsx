
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
        <h2 className="heading-gradient text-3xl md:text-4xl lg:text-5xl mb-4">
          Development Roadmap
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Follow our journey from inception to the future as we build the AI ecosystem of tomorrow
        </p>
        <Separator className="w-36 h-1 bg-gradient-to-r from-[#0ef34b]/30 to-[#00aeff]/30 mx-auto mt-6" />
      </motion.div>
    </div>
  );
};

export default RoadmapHeader;
