
import React, { useState } from 'react';
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
  Star,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DemoPreview from './product/DemoPreview';

const AboutGPTVerse = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  const serviceModels = ['language-tutor', 'pdf-reader', 'healty', 'scriptwriter', 'image-generator', 'comedian'];
  
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
      description: "Create stunning visual assets as NFTs using AI-powered design algorithms",
      modelId: "image-generator"
    },
    {
      icon: <Code className="h-12 w-12 text-[#00aeff]" />,
      title: "AI Education Hub",
      description: "Interactive learning experiences with courses tailored to your unique needs",
      modelId: "language-tutor"
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-[#d946ef]" />,
      title: "Trading Solutions",
      description: "AI-powered trading tools with real-time signals and comprehensive analytics",
      modelId: "healty"
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
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')]"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00aeff]/10 rounded-full blur-3xl"></div>
        </div>
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

        {/* Robot Image and Main Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left Column - Robot Image */}
          <motion.div 
            className="glass-card p-8 backdrop-blur-2xl bg-[#06101a]/40 border border-white/10 rounded-2xl relative overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00aeff]/10 rounded-full blur-3xl"></div>
            
            <div className="relative aspect-square mx-auto max-w-[450px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(14,243,75,0.3)]">
              <img 
                src="/lovable-uploads/7cd10502-451b-4b2f-b3f2-bd63a4491273.png" 
                alt="AI Robot in GPTVerse" 
                className="w-full h-full object-cover"
              />
              
              {/* Animated glowing border overlay */}
              <div className="absolute inset-0 border-4 border-[#0ef34b]/50 rounded-full animate-pulse"></div>
              
              {/* Glowing dots */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#0ef34b] rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00aeff] rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-[#d946ef] rounded-full animate-pulse"></div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#06101a]/80 border border-[#0ef34b]/30 text-[#0ef34b] text-sm font-mono">
                <span className="mr-2 h-2 w-2 bg-[#0ef34b] rounded-full animate-pulse"></span>
                AI SYSTEM ONLINE
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Main description */}
          <motion.div 
            className="glass-card p-8 backdrop-blur-2xl bg-[#06101a]/40 border border-white/10 rounded-2xl relative overflow-hidden order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00aeff]/10 rounded-full blur-3xl"></div>
            
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
              <Button className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] text-black font-semibold transition hover:brightness-110 flex items-center gap-2 border-none">
                <Rocket className="h-5 w-5" />
                <span>Join GPTVerse</span>
              </Button>
              
              <Button variant="outline" className="border-[#0ef34b]/50 text-white font-semibold transition hover:bg-[#0ef34b]/10 flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                <span>Explore Whitepaper</span>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Features grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-6 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-300"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-[#06101a]/60 rounded-lg border border-white/10 relative group-hover:border-[#0ef34b]/30 transition-colors duration-300">
                  {feature.icon}
                  <div className={`absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoverIndex === index ? 'animate-pulse' : ''}`}></div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#0ef34b] transition-colors duration-300">{feature.title}</h4>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Interactive Demo Preview Section */}
        <motion.div
          className="mb-16 glass-card p-8 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d946ef]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
                EXPERIENCE OUR AI SERVICES
              </span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore our cutting-edge AI services with interactive demos. Click through the options below to see the different capabilities of the GPTVerse ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {serviceModels.map((modelId, index) => (
                  <motion.div
                    key={modelId}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg flex justify-between items-center transition-all duration-300 ${
                        activeServiceIndex === index
                          ? 'bg-[#0ef34b]/20 border border-[#0ef34b]/40 text-white'
                          : 'bg-[#06101a]/40 border border-white/10 text-white/70 hover:bg-[#06101a]/60'
                      }`}
                      onClick={() => setActiveServiceIndex(index)}
                    >
                      <span className="flex items-center">
                        <span className={`h-2 w-2 rounded-full mr-3 ${
                          activeServiceIndex === index ? 'bg-[#0ef34b] animate-pulse' : 'bg-white/30'
                        }`}></span>
                        {modelId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                      <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
                        activeServiceIndex === index ? 'rotate-90 text-[#0ef34b]' : ''
                      }`} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                key={activeServiceIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <DemoPreview 
                  modelId={serviceModels[activeServiceIndex]} 
                  iconBg={`bg-${['green', 'blue', 'teal', 'indigo', 'purple', 'yellow'][activeServiceIndex % 6]}-700`}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Ecosystem Cards */}
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
                  <div className="mb-4 p-4 bg-[#06101a]/60 rounded-full border border-white/10 inline-block group-hover:border-[#0ef34b]/30 transition-all duration-300">
                    {card.icon}
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#0ef34b] transition-colors duration-300">{card.title}</h4>
                  <p className="text-white/70 mb-6">{card.description}</p>
                  
                  <Button 
                    onClick={() => setActiveServiceIndex(serviceModels.indexOf(card.modelId))}
                    variant="outline"
                    className="border-[#0ef34b]/30 text-white/80 hover:bg-[#0ef34b]/10 hover:text-white group-hover:border-[#0ef34b] transition-all duration-300"
                  >
                    <span>Try Demo</span>
                    <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
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
              <Button className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] hover:brightness-110 text-black font-semibold border-none py-6 px-8">
                Enter the GPTVerse
              </Button>
              
              <Button variant="outline" className="border-[#d946ef]/50 text-white hover:bg-[#d946ef]/10 py-6 px-8">
                Join Our Community
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;
