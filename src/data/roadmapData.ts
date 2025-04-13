
export interface RoadmapItem {
  period: string;
  title: string;
  status: 'shipped' | 'in-progress' | 'planned';
  description: string[];
}

export const roadmapData: RoadmapItem[] = [
  {
    period: "Q3 2022",
    title: "GPTVerse Founded",
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "shipped",
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
    status: "in-progress",
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
    status: "planned",
    description: [
      "Get Community Feedbacks",
      "Global KOL Campaigns",
      "2nd Burn Campaign Announcement",
      "$GPTV Token Based Payment and Subscription System"
    ]
  }
];
