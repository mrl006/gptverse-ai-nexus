
import React from 'react';

const TokenomicsInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="neo-blur p-6 border border-[#0ef34b]/20 hover:border-[#33C3F0]/40 transition-colors duration-300 backdrop-blur-md rounded-2xl">
        <h3 className="text-xl font-semibold text-white/90 mb-4 flex items-center font-montserrat">
          <span className="inline-block w-8 h-8 rounded-full bg-[#0ef34b]/20 text-[#0ef34b] flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="20" x2="12" y2="10" />
              <line x1="18" y1="20" x2="18" y2="4" />
              <line x1="6" y1="20" x2="6" y2="16" />
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
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#33C3F0]/20 to-transparent"></div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">DEX Listing:</span>
            <span className="font-medium text-white">PancakeSwap, UniSwap</span>
          </div>
        </div>
      </div>
      
      <div className="neo-blur p-6 border border-[#33C3F0]/20 hover:border-[#0ef34b]/40 transition-colors duration-300 backdrop-blur-md rounded-2xl">
        <h3 className="text-xl font-semibold text-white/90 mb-4 flex items-center font-montserrat">
          <span className="inline-block w-8 h-8 rounded-full bg-[#33C3F0]/20 text-[#33C3F0] flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </span>
          Vesting Schedule
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/70">Team Tokens:</span>
            <span className="font-medium text-white">12 months cliff, 24 months linear</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">Private Sale:</span>
            <span className="font-medium text-white">3 months cliff, 12 months linear</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">Public Sale:</span>
            <span className="font-medium text-white">25% TGE, 3 months linear</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
          <div className="flex items-center justify-between">
            <span className="text-white/70">Liquidity:</span>
            <span className="font-medium text-white">50% locked for 36 months</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsInfoCards;
