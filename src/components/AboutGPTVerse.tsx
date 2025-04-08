
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      {/* Subtle background with green glow */}
      <div className="absolute inset-0 bg-[#040812] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,243,75,0.03)_0%,transparent_70%)]"></div>
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-20"></div>
        </div>
        
        {/* Animated green glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0ef34b]/5 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#0ef34b]/3 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with reduced size */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-[#0ef34b]">ABOUT</span>
            <span className="text-white mx-2">THE</span>
            <span className="text-[#00aeff]">GPTVERSE</span>
          </h2>
          
          <div className="max-w-xl mx-auto">
            <div className="relative mt-4">
              <div className="absolute -top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
              <p className="text-[#0ef34b]/60 text-sm font-mono uppercase tracking-wider">
                EMBRACE THE AI REVOLUTION
              </p>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Advanced carousel with robot image and features */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {/* First slide - Robot image */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="glass-card h-full p-6 backdrop-blur-xl bg-[#06101a]/40 border border-[#0ef34b]/10 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/059db707-9bc8-433a-a146-097b5b44f53a.png" 
                        alt="AI Robot" 
                        className="w-full max-w-[300px] mx-auto transform transition-all duration-700 hover:scale-105"
                      />
                      
                      {/* Animated glow dots */}
                      <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#0ef34b] rounded-full animate-pulse"></div>
                      <div className="absolute top-1/4 -left-1 w-1 h-1 bg-[#0ef34b] rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                      <div className="absolute bottom-1/3 -right-1 w-1.5 h-1.5 bg-[#0ef34b] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </div>
                    
                    <h3 className="mt-4 text-xl font-semibold text-center bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">
                      Next Generation AI
                    </h3>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Main description slide */}
              <CarouselItem className="md:basis-1/2 lg:basis-2/3">
                <div className="glass-card h-full p-6 backdrop-blur-xl bg-[#06101a]/40 border border-white/10 rounded-xl relative overflow-hidden">
                  <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0ef34b]/5 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent">
                    Your Gateway to the AI-Powered Metaverse
                  </h3>
                  
                  <p className="text-base text-white/80 mb-4 leading-relaxed">
                    GPTVerse stands at the frontier of innovation, bringing together cutting-edge AI 
                    technologies with blockchain to create a seamless multi-platform experience.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <button className="px-4 py-2 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-medium text-sm transition hover:brightness-110 flex items-center gap-1.5">
                      <Rocket className="h-4 w-4" />
                      <span>Join GPTVerse</span>
                    </button>
                    
                    <button className="px-4 py-2 bg-transparent border border-[#0ef34b]/50 rounded-lg text-white font-medium text-sm transition hover:bg-[#0ef34b]/10 flex items-center gap-1.5">
                      <ExternalLink className="h-4 w-4" />
                      <span>Whitepaper</span>
                    </button>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Feature cards */}
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <motion.div 
                    variants={itemVariants}
                    className="glass-card h-full p-5 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="flex flex-col items-center text-center gap-3 relative z-10 h-full">
                      <div className="p-3 bg-[#06101a]/60 rounded-lg border border-white/10">
                        {feature.icon}
                      </div>
                      
                      <div>
                        <h4 className="text-base font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-white/70 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0 bg-black/20 hover:bg-black/40 border-[#0ef34b]/30" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0 bg-black/20 hover:bg-black/40 border-[#0ef34b]/30" />
            </div>
          </Carousel>
        </div>
        
        {/* Ecosystem Highlights - Second carousel */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
              EXPLORE THE ECOSYSTEM
            </span>
          </h3>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {ecosystemCards.map((card, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/3 lg:basis-1/3 pl-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="glass-card p-6 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-300 flex flex-col items-center text-center h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-3 p-3 bg-[#06101a]/60 rounded-full border border-white/10 inline-block">
                        {card.icon}
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                      <p className="text-white/70 text-sm">{card.description}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0 bg-black/20 hover:bg-black/40 border-[#0ef34b]/30" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0 bg-black/20 hover:bg-black/40 border-[#0ef34b]/30" />
            </div>
          </Carousel>
        </motion.div>
        
        {/* CTA Section - Simplified */}
        <motion.div 
          className="glass-card p-8 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0ef34b]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
              Join the Future Today
            </h3>
            
            <p className="text-base text-white/80 mb-5">
              Embrace the possibilities, unleash your creativity, and shape the future with GPTVerse's cutting-edge AI technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-medium transition hover:brightness-110">
                Enter the GPTVerse
              </button>
              
              <button className="px-6 py-2.5 bg-transparent border border-[#d946ef]/50 rounded-lg text-white font-medium transition hover:bg-[#d946ef]/10">
                Join Community
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;
