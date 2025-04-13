
import React from 'react';
import RoadmapHeader from './roadmap/RoadmapHeader';
import RoadmapItem from './roadmap/RoadmapItem';

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative py-28 overflow-hidden">
      {/* Enhanced background with depth */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Improved ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[#0ef34b]/5 blur-[150px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] rounded-full bg-[#00aeff]/5 blur-[180px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[20%] w-1 h-1 bg-alien-neon rounded-full opacity-60 animate-pulse-slow"></div>
        <div className="absolute top-[40%] right-[15%] w-1 h-1 bg-alien-blue rounded-full opacity-50 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-[30%] w-1 h-1 bg-alien-blue rounded-full opacity-40 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Improved header */}
        <RoadmapHeader />
        
        {/* Main content with timeline visual style */}
        <div className="max-w-4xl mx-auto">
          <RoadmapItem 
            title="Foundation Phase" 
            period="Q1 2025"
            status="shipped"
            description={[
              "Smart Contract Development & Security Audit",
              "Core Team Formation & Initial Partnerships",
              "Token Architecture & Distribution Framework",
              "GPTVerse MVP Development & Testing"
            ]}
          />
          
          <RoadmapItem 
            title="Growth Acceleration" 
            period="Q2 2025"
            status="in-progress"
            description={[
              "Token Generation Event (TGE) & Initial DEX Offering",
              "GPTVerse Platform Public Beta Launch",
              "Integration with Major AI Model Providers",
              "Community Expansion & Developer Grants Program"
            ]}
          />
          
          <RoadmapItem 
            title="Expansion & Adoption" 
            period="Q3 2025"
            status="planned"
            description={[
              "Cross-Chain Bridge Implementation",
              "Enterprise Solutions & Partnership Program",
              "GPTVerse DAO Governance System Launch",
              "Advanced AI-Blockchain Features Development"
            ]}
          />
          
          <RoadmapItem 
            title="Ecosystem Maturity" 
            period="Q4 2025"
            status="planned"
            description={[
              "GPTVerse V2.0 Platform Release",
              "Expanded Network of AI Integrations",
              "Real-World AI Use Cases & Implementation",
              "Global Expansion & Marketing Initiative"
            ]}
          />
          
          <RoadmapItem 
            title="Future Evolution" 
            period="2026+"
            status="planned"
            description={[
              "Revolutionary AI-Powered DeFi Solutions",
              "GPTVerse Metaverse Integration & Experiences",
              "Advanced Neural Network Systems Development",
              "Quantum Computing Compatibility Research"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
