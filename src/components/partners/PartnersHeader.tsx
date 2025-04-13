
import React from 'react';

const PartnersHeader: React.FC = () => {
  return (
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
  );
};

export default PartnersHeader;
