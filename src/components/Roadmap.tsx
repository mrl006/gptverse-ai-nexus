
import React from 'react';
import { CalendarDays, GitBranch, Users, LeafyGreen, Box, Shield } from 'lucide-react';

interface RoadmapItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLeft?: boolean;
}

const RoadmapItem = ({ icon, title, description, isLeft = true }: RoadmapItemProps) => {
  const containerClasses = `timeline-item flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`;

  return (
    <div className={containerClasses}>
      <div className="hidden md:block md:w-1/2"></div>
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="glass-card p-6 hover:shadow-lg hover:shadow-gptv-teal/10 transition-all">
          <div className="flex items-center mb-4">
            <div className="mr-3 text-gptv-teal">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="section-padding bg-gptv-dark relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_70%,rgba(0,174,255,0.15)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-animate">Roadmap Q4 2024</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our ambitious development plan focuses on infrastructure, community, and eco-friendly practices.
          </p>
        </div>
        
        <div className="timeline-container relative">
          <RoadmapItem
            icon={<GitBranch size={24} />}
            title="GPTVerse Chain Testnet"
            description="Launch of our dedicated blockchain testnet with smart contracts optimized for AI operations and seamless multi-chain interoperability."
            isLeft={true}
          />
          
          <RoadmapItem
            icon={<Users size={24} />}
            title="Community Governance Launch"
            description="Implementation of decentralized governance allowing token holders to propose and vote on protocol changes and feature prioritization."
            isLeft={false}
          />
          
          <RoadmapItem
            icon={<Box size={24} />}
            title="Metaverse Features Expansion"
            description="Release of enhanced virtual environments, AI-powered avatars, and immersive collaborative spaces across multiple platforms."
            isLeft={true}
          />
          
          <RoadmapItem
            icon={<LeafyGreen size={24} />}
            title="Sustainability & Carbon Offset"
            description="Implementation of energy-efficient consensus mechanisms and carbon offset programs to ensure environmental responsibility."
            isLeft={false}
          />
          
          <RoadmapItem
            icon={<CalendarDays size={24} />}
            title="3rd Party AI Integrations"
            description="Opening our API for third-party developers to build on our platform and integrate their AI solutions into the GPTVerse ecosystem."
            isLeft={true}
          />
          
          <RoadmapItem
            icon={<Shield size={24} />}
            title="Security & Maintenance"
            description="Comprehensive security audit by leading firms, implementation of advanced threat protection, and infrastructure scaling."
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
