
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const TokenomicsHeading = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B3954] via-[#087E8B] to-[#0CF574] animate-text-gradient bg-[length:200%_auto]">
            TOKENOMICS
          </span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-5 leading-relaxed">
          Our token distribution strategy is designed for long-term sustainable growth while ensuring fair allocation across our ecosystem.
        </p>
        <Separator className="w-36 h-1 bg-gradient-to-r from-[#0B3954]/40 to-[#0CF574]/40 mx-auto mt-2" />
      </motion.div>
    </div>
  );
};

export default TokenomicsHeading;
