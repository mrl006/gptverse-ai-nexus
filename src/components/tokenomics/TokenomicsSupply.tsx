
import React from 'react';

const TokenomicsSupply = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="neo-blur px-8 py-4 rounded-full backdrop-blur-md border border-[#00F0B5]/20 flex items-center space-x-3">
        <div className="w-3 h-3 rounded-full bg-[#FF56F6]"></div>
        <span className="text-white text-lg font-medium">Total Supply: 1,000,000,000</span>
      </div>
      
      <div className="neo-blur px-8 py-4 rounded-full backdrop-blur-md border border-[#FF56F6]/20 flex items-center space-x-3">
        <div className="w-3 h-3 rounded-full bg-[#00F0B5]"></div>
        <span className="text-white text-lg font-medium">Initial Price: $0.015</span>
      </div>
    </div>
  );
};

export default TokenomicsSupply;
