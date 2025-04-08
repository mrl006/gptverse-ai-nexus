
import React from 'react';

const TokenomicsInfoCards = () => {
  return (
    <div className="space-y-4 pt-6">
      <div className="glass-card p-5 border border-[#0ef34b]/20 hover:border-[#0ef34b]/40 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <span className="text-white/70">Name:</span>
          <span className="font-medium text-white">GPTVerse</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white/70">Symbol:</span>
          <span className="font-medium text-white">$GPTV</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white/70">Total Supply:</span>
          <span className="font-medium text-white">1,000,000,000</span>
        </div>
      </div>
      
      <div className="glass-card p-5 border border-[#00aeff]/20 hover:border-[#00aeff]/40 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <span className="text-white/70">Networks:</span>
          <span className="font-medium text-white">BNB, Near, Skale</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white/70">Initial Price:</span>
          <span className="font-medium text-white">$0.015</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white/70">Listing Price:</span>
          <span className="font-medium text-white">$0.025</span>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsInfoCards;
