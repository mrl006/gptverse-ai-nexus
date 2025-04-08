
import React, { useEffect, useRef } from 'react';
import { CalendarDays, GitBranch, Users, LeafyGreen, Box, Shield, Award, Rocket, Zap, Globe, HeartHandshake, Building, Library, Landmark, LineChart, Scale } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  period: string;
  isLeft?: boolean;
}

const TimelineItem = ({ icon, title, description, period, isLeft = true }: TimelineItemProps) => {
  const containerClasses = `timeline-item flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`;

  return (
    <div className={containerClasses}>
      <div className="hidden md:block md:w-1/2"></div>
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <motion.div 
          className="glass-card p-6 hover:shadow-lg hover:shadow-gptv-teal/10 transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono text-gptv-teal/80 mb-2 block">{period}</span>
          <div className="flex items-center mb-4">
            <div className="mr-3 text-gptv-teal">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-white/70 flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gptv-teal/60 mt-1.5 mr-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const timelineData = [
    {
      period: "Q3 2022",
      title: "GPTVerse Founded",
      icon: <Rocket size={24} />,
      description: [
        "GPTVerse founded",
        "Initial focus on metaverse completion",
        "Expansion of developer team",
        "Testing and iterative improvement of the application",
        "Participation in hackathons and metaverse events"
      ]
    },
    {
      period: "Q4 2022",
      title: "Metaverse Growth",
      icon: <Building size={24} />,
      description: [
        "Continued improvement of the metaverse experience",
        "Developer team expansion to support AI initiatives",
        "Organization of more metaverse events and activities",
        "Initial development discussions for AI Hub concept"
      ]
    },
    {
      period: "Q1 2023",
      title: "Rebranding & AI Focus",
      icon: <Zap size={24} />,
      description: [
        "Commencement of the rebranding process",
        "Shift towards the AI Hub identity with a focus on AI products",
        "Initiation of AI product development",
        "Initial design and planning for the AI Hub website",
        "Updates to the roadmap and token utility to align with AI Hub vision"
      ]
    },
    {
      period: "Q2 2023",
      title: "AI Hub Development",
      icon: <Box size={24} />,
      description: [
        "Accelerated development of AI products",
        "Launch of the AI Hub website to showcase upcoming products",
        "Continuous engagement with the community through social media, events, and updates",
        "Strengthening partnerships with developers, businesses, and investors"
      ]
    },
    {
      period: "Q3 2023",
      title: "Business Growth",
      icon: <LineChart size={24} />,
      description: [
        "Intensified business development efforts",
        "Participation in prominent blockchain events on behalf of GPTVerse",
        "Active negotiations with CEXs and DEXs for token listings",
        "Meetings with launchpads and potential investors",
        "Exploration of strategic partnerships with key players in the industry",
        "Roll out Dapp platform for AI products to enhance accessibility"
      ]
    },
    {
      period: "Q4 2023",
      title: "AI Product Ecosystem",
      icon: <Library size={24} />,
      description: [
        "Launch and adoption of AI products within the AI Hub",
        "Launch AI product marketplace within GPTVerse ecosystem",
        "Expand AI product offerings across diverse industries",
        "Further partnerships, collaborations, and integrations",
        "Expansion of the AI Hub ecosystem across multiple blockchain platforms",
        "Regular updates, enhancements, and new features for the AI Hub and metaverse"
      ]
    },
    {
      period: "Q1 2024",
      title: "Product Expansion",
      icon: <Award size={24} />,
      description: [
        "Expansion of AI-powered products within the AI Hub",
        "Improving existing products and launching new ones tailored to various industries",
        "Host events, webinars, and workshops to educate users and gather feedback",
        "Strengthen existing partnerships and explore new collaborations with both blockchain and AI-related projects",
        "GPTV Public Sale and TGE"
      ]
    },
    {
      period: "Q2 2024",
      title: "Token Launch",
      icon: <Landmark size={24} />,
      description: [
        "Listing of GPTV Token on selected CEXs",
        "GPTV Staking Program",
        "Implement marketing campaigns to drive user adoption of AI products and the AI Hub",
        "Explore further integration with multiple blockchain platforms, making GPTVerse a truly multi-chain AI Hub",
        "Continue to gather user feedback and make iterative improvements to both the AI products and metaverse"
      ]
    },
    {
      period: "Q3 2024",
      title: "Global Expansion",
      icon: <Globe size={24} />,
      description: [
        "Expand GPTVerse's presence to a global audience",
        "Broaden the range of AI products to cater to diverse industries, including healthcare, finance, education, and more",
        "Introduce new utility features for the GPTV token, providing more incentives for users and stakers",
        "Forge strategic alliances with major players in the blockchain and AI sectors"
      ]
    },
    {
      period: "Q4 2024",
      title: "Chain & Governance",
      icon: <GitBranch size={24} />,
      description: [
        "GPTVerse Chain Testnet",
        "Continue to expand the AI Hub ecosystem by onboarding more third-party developers and businesses",
        "Develop and implement a community-driven governance framework that allows token holders to participate in decision-making processes",
        "Roll out advanced metaverse features, including enhanced interactivity, virtual economies, and social experiences",
        "Explore sustainability initiatives, such as carbon offset programs, to align with environmental goals"
      ]
    }
  ];

  return (
    <section id="history" className="section-padding py-20 bg-gptv-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(14,243,75,0.1)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_60%,rgba(0,174,255,0.2)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-animate">GPTVerse Timeline</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Tracing our journey from inception to our ambitious future roadmap
          </p>
          <Separator className="w-24 h-1 bg-gradient-to-r from-[#0ef34b]/30 to-[#00aeff]/30 mx-auto mt-6" />
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[2px] bg-gradient-to-b from-[#0ef34b]/60 via-[#00aeff]/40 to-[#d946ef]/20"></div>
          
          {/* Timeline content */}
          <div className="space-y-16 md:space-y-20 relative z-10">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                period={item.period}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
