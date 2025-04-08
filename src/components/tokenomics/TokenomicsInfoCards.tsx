
import React from 'react';

const TokenomicsInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="glass-card bg-[rgba(14,243,75,0.05)] p-6 border border-[#0ef34b]/20 hover:border-[#0ef34b]/40 transition-colors duration-300 backdrop-blur-md rounded-2xl">
        <h3 className="text-xl font-semibold text-white/90 mb-4 flex items-center">
          <span className="inline-block w-8 h-8 rounded-full bg-[#0ef34b]/20 text-[#0ef34b] flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
              <path d="M12 14v3"/>
              <path d="M12 7v3"/>
            </svg>
          </span>
          Token Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/70">Name:</span>
            <span className="font-medium text-white">GPTVerse</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">Symbol:</span>
            <span className="font-medium text-white">$GPTV</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">Total Supply:</span>
            <span className="font-medium text-white">1,000,000,000</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">Token Standard:</span>
            <span className="font-medium text-white">ERC-20 / BEP-20</span>
          </div>
        </div>
      </div>
      
      <div className="glass-card bg-[rgba(0,174,255,0.05)] p-6 border border-[#00aeff]/20 hover:border-[#00aeff]/40 transition-colors duration-300 backdrop-blur-md rounded-2xl">
        <h3 className="text-xl font-semibold text-white/90 mb-4 flex items-center">
          <span className="inline-block w-8 h-8 rounded-full bg-[#00aeff]/20 text-[#00aeff] flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="20" x2="12" y2="10"/>
              <line x1="18" y1="20" x2="18" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="16"/>
            </svg>
          </span>
          Sale Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/70">Networks:</span>
            <span className="font-medium text-white">BNB, Near, Skale</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">Initial Price:</span>
            <span className="font-medium text-white">$0.015</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">Listing Price:</span>
            <span className="font-medium text-white">$0.025</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">DEX Listing:</span>
            <span className="font-medium text-white">PancakeSwap, UniSwap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsInfoCards;
