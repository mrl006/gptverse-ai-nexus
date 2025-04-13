
import React from 'react';
import RoadmapItem from './roadmap/RoadmapItem';
import RoadmapHeader from './roadmap/RoadmapHeader';
import { motion } from "framer-motion";

const Roadmap = () => {
  const roadmapData = [
    {
      period: "Q3 2022",
      title: "GPTVerse Founded",
      status: "shipped" as const,
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
      status: "shipped" as const,
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
      status: "shipped" as const,
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
      status: "shipped" as const,
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
      status: "shipped" as const,
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
      status: "shipped" as const,
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
      status: "shipped" as const,
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
      status: "shipped" as const,
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
      status: "shipped" as const,
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
      status: "shipped" as const,
      description: [
        "GPTVerse Chain Testnet",
        "Continue to expand the AI Hub ecosystem by onboarding more third-party developers and businesses",
        "Develop and implement a community-driven governance framework that allows token holders to participate in decision-making processes",
        "Roll out advanced metaverse features, including enhanced interactivity, virtual economies, and social experiences",
        "Explore sustainability initiatives, such as carbon offset programs, to align with environmental goals"
      ]
    },
    {
      period: "Q1 2025",
      title: "Strategic Growth & Engagement",
      status: "in-progress" as const,
      description: [
        "Burn Campaign Launch",
        "AMA Events",
        "New Key Ecosystem Partnerships",
        "Ambassador Program Launch",
        "AI Market Analyser Launch on AI Hub"
      ]
    },
    {
      period: "Q2 2025",
      title: "Community & Payment Solutions",
      status: "planned" as const,
      description: [
        "Get Community Feedbacks",
        "Global KOL Campaigns",
        "2nd Burn Campaign Announcement",
        "$GPTV Token Based Payment and Subscription System"
      ]
    }
  ];

  return (
    <section id="history" className="section-padding py-20 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Subtle glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(14,243,75,0.1)_0%,transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <RoadmapHeader />
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Main timeline line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0ef34b]/30 via-[#00aeff]/20 to-white/5"></div>
            
            {roadmapData.map((item, index) => (
              <RoadmapItem
                key={index}
                title={item.title}
                description={item.description}
                period={item.period}
                status={item.status}
              />
            ))}
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-block glass-card bg-[#06101a]/40 backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#0ef34b] animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00aeff] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-white/70 font-medium">More exciting milestones coming soon</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
