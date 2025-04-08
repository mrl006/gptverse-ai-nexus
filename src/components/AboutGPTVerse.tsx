
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Rocket, 
  BrainCircuit, 
  Code, 
  Network, 
  ExternalLink, 
  Layers3, 
  BarChart4, 
  Star 
} from 'lucide-react';

const AboutGPTVerse = () => {
  const features = [
    {
      icon: <Globe className="text-[#0ef34b] h-7 w-7" />,
      title: "AI Hub & Multi-Platform Gateway",
      description: "Your central gateway to next-level Dapps and AI-powered experiences"
    },
    {
      icon: <Network className="text-[#00aeff] h-7 w-7" />,
      title: "Multichain Architecture",
      description: "First published on BNB Chain, now expanding across multiple blockchains"
    },
    {
      icon: <BrainCircuit className="text-[#d946ef] h-7 w-7" />,
      title: "Veteran Engineering Team",
      description: "Backed by developers with 20+ years of industry experience"
    },
    {
      icon: <Rocket className="text-[#0ef34b] h-7 w-7" />,
      title: "MVP-Ready Products",
      description: "Launch-ready AI solutions delivering immediate value"
    },
    {
      icon: <Layers3 className="text-[#00aeff] h-7 w-7" />,
      title: "Robust Product Roadmap",
      description: "Strategic vision for continuous innovation and growth"
    },
    {
      icon: <BarChart4 className="text-[#d946ef] h-7 w-7" />,
      title: "Advanced Tokenomics",
      description: "Sustainable economic model designed for long-term value"
    }
  ];

  const ecosystemCards = [
    {
      icon: <Star className="h-12 w-12 text-[#0ef34b]" />,
      title: "Design & NFTs",
      description: "Create stunning visual assets as NFTs using AI-powered design algorithms"
    },
    {
      icon: <Code className="h-12 w-12 text-[#00aeff]" />,
      title: "AI Education Hub",
      description: "Interactive learning experiences with courses tailored to your unique needs"
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-[#d946ef]" />,
      title: "Trading Solutions",
      description: "AI-powered trading tools with real-time signals and comprehensive analytics"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#040812] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,243,75,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00aeff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-[#0ef34b]">ABOUT</span>
            <span className="text-white mx-3">THE</span>
            <span className="text-[#00aeff]">GPTVERSE</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative mt-6">
              <div className="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
              <p className="text-[#0ef34b]/60 text-lg font-mono uppercase tracking-wider">
                EMBARK ON AN EXTRAORDINARY AI JOURNEY
              </p>
              <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Main content with animated reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left Column - Main description */}
          <motion.div 
            className="glass-card p-8 backdrop-blur-2xl bg-[#06101a]/40 border border-white/10 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00aeff]/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent">
              Your Gateway to the AI-Powered Metaverse
            </h3>
            
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Are you ready to embark on an extraordinary journey in the AI-powered metaverse? 
              GPTVerse stands at the frontier of innovation, bringing together cutting-edge AI 
              technologies with blockchain to create a seamless multi-platform experience.
            </p>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Step into a vibrant ecosystem where AI-driven technologies integrate with social 
              interactions, education, finance, marketing, and more. Our vision extends beyond 
              conventional boundaries, creating a space where creativity thrives and innovation 
              flourishes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-semibold transition hover:brightness-110 flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                <span>Join GPTVerse</span>
              </button>
              
              <button className="px-6 py-3 bg-transparent border border-[#0ef34b]/50 rounded-lg text-white font-semibold transition hover:bg-[#0ef34b]/10 flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                <span>Explore Whitepaper</span>
              </button>
            </div>
          </motion.div>
          
          {/* Right Column - Features grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-card p-6 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-[#06101a]/60 rounded-lg border border-white/10">
                    {feature.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Ecosystem Highlights */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
              EXPLORE THE ECOSYSTEM
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ecosystemCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card p-8 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 p-4 bg-[#06101a]/60 rounded-full border border-white/10 inline-block">
                    {card.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                  <p className="text-white/70">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="glass-card p-10 backdrop-blur-2xl border border-white/10 bg-[#06101a]/40 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d946ef]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
              Join the Future Today
            </h3>
            
            <p className="text-lg text-white/80 mb-8">
              GPTVerse is at the forefront of the AI revolution, bringing together cutting-edge technologies, 
              a vibrant community of visionaries, and a dedication to transforming multiple industries. 
              Embrace the possibilities, unleash your creativity, and shape the future with GPTVerse.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-semibold transition hover:brightness-110">
                Enter the GPTVerse
              </button>
              
              <button className="px-8 py-4 bg-transparent border border-[#d946ef]/50 rounded-lg text-white font-semibold transition hover:bg-[#d946ef]/10">
                Join Our Community
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;
