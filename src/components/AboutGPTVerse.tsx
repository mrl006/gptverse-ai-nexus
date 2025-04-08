
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
  ChevronRight,
  CheckCircle,
  Zap,
  ShieldCheck,
  Lightbulb,
  Atom,
  Braces,
  Sparkles,
  Database,
  PlugZap,
  PuzzlePiece
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AboutGPTVerse = () => {
  const [activeTab, setActiveTab] = useState("vision");
  
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Full-screen background image with tech overlay */}
      <div className="absolute inset-0 z-0">
        {/* Robot image as background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img 
            src="/lovable-uploads/15aafb16-40a1-4864-9b57-c1508ab7f71e.png" 
            alt="AI Robot" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040812]/90 via-[#040812]/80 to-[#040812]/95"></div>
        
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-noise"></div>
        
        {/* Tech grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-20"></div>
        
        {/* Animated glowing elements */}
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0ef34b]/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-[#00aeff]/5 blur-[120px] animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-[200px] h-[200px] rounded-full bg-[#d946ef]/5 blur-[80px] animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header section with futuristic design */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 relative inline-block">
            <span className="relative">
              <span className="absolute -top-2 -left-6 w-5 h-5 border-t-2 border-l-2 border-[#0ef34b]/50"></span>
              <span className="text-[#0ef34b]">ABOUT</span>
            </span>
            <span className="text-white mx-2">THE</span>
            <span className="relative">
              <span className="text-[#00aeff]">GPTVERSE</span>
              <span className="absolute -bottom-2 -right-6 w-5 h-5 border-b-2 border-r-2 border-[#00aeff]/50"></span>
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative mt-6">
              <div className="absolute -top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
              <p className="text-[#0ef34b]/70 text-sm md:text-base font-mono uppercase tracking-wider">
                EXPLORE THE FUTURE OF AI TECHNOLOGY
              </p>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Main content with glassmorphism effects */}
        <div className="glass-card backdrop-blur-2xl bg-[#040812]/40 border border-white/10 rounded-2xl overflow-hidden p-6 md:p-8 shadow-[0_0_30px_rgba(14,243,75,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Animated Robot Visual */}
            <motion.div 
              className="lg:col-span-5 flex items-center justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative max-w-md mx-auto">
                {/* Animated backdrop glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 via-[#00aeff]/5 to-transparent rounded-3xl blur-2xl"></div>
                
                {/* Main image with tech frame */}
                <div className="relative glass-card p-6 rounded-2xl border border-[#0ef34b]/20 overflow-hidden group animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  {/* Circuit lines overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0wIDAgTDQwIDQwIiBzdHJva2U9InJnYmEoMTQsIDI0MywgNzUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgICA8cGF0aCBkPSJNNDAgMCBMMCA0MCIgc3Ryb2tlPSJyZ2JhKDE0LCAyNDMsIDc1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+Cjwvc3ZnPg==')] opacity-30"></div>
                  
                  <img 
                    src="/lovable-uploads/059db707-9bc8-433a-a146-097b5b44f53a.png" 
                    alt="AI Robot" 
                    className="w-full mx-auto relative z-10 transform transition-all duration-700 hover:scale-105"
                  />
                  
                  {/* Animated tech elements */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#0ef34b] rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 -left-1 w-2 h-2 bg-[#00aeff] rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                  <div className="absolute bottom-1/3 -right-1 w-2 h-2 bg-[#d946ef] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  
                  {/* Data visualization points */}
                  <div className="absolute right-4 top-6 w-1 h-1 bg-[#0ef34b]/80 rounded-full animate-blip" style={{animationDelay: '1s'}}></div>
                  <div className="absolute right-8 top-12 w-1 h-1 bg-[#0ef34b]/80 rounded-full animate-blip" style={{animationDelay: '1.7s'}}></div>
                  <div className="absolute right-12 top-24 w-1 h-1 bg-[#00aeff]/80 rounded-full animate-blip" style={{animationDelay: '2.1s'}}></div>
                </div>
                
                {/* Circuit board pattern under the robot */}
                <div className="absolute inset-x-10 bottom-0 h-12 bg-[#0ef34b]/5 rounded-t-lg -z-10 blur-sm">
                  <div className="h-full w-full opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImNpcmN1aXQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0xMCAxMCBMMTAgMzAgTDMwIDMwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTQsIDI0MywgNzUsIDAuNCkiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zMCAzMCBMNTAgMzAgTDUwIDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTQsIDI0MywgNzUsIDAuNCkiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiIGZpbGw9InJnYmEoMTQsIDI0MywgNzUsIDAuNCkiLz4KICAgICAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgxNCwgMjQzLCA3NSwgMC40KSIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIiBmaWxsPSJyZ2JhKDE0LCAyNDMsIDc1LCAwLjQpIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2lyY3VpdCkiLz4KPC9zdmc+')]"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Tabs with Information */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Tabs defaultValue="vision" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="mb-8 w-full bg-transparent border-b border-white/10 flex justify-between">
                  <TabsTrigger 
                    value="vision" 
                    className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "vision" ? "text-[#0ef34b]" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <Lightbulb className={`w-5 h-5 ${activeTab === "vision" ? "text-[#0ef34b]" : "text-white/60"}`} />
                      <span>Our Vision</span>
                    </div>
                    {activeTab === "vision" && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0ef34b]"
                      />
                    )}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="features" 
                    className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "features" ? "text-[#00aeff]" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <Atom className={`w-5 h-5 ${activeTab === "features" ? "text-[#00aeff]" : "text-white/60"}`} />
                      <span>Key Features</span>
                    </div>
                    {activeTab === "features" && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00aeff]"
                      />
                    )}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="ecosystem" 
                    className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "ecosystem" ? "text-[#d946ef]" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className={`w-5 h-5 ${activeTab === "ecosystem" ? "text-[#d946ef]" : "text-white/60"}`} />
                      <span>Ecosystem</span>
                    </div>
                    {activeTab === "ecosystem" && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d946ef]"
                      />
                    )}
                  </TabsTrigger>
                </TabsList>
                
                <div className="h-[460px] overflow-y-auto pr-4 scrollbar-thin">
                  <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in">
                    <motion.div 
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent">
                        Your Gateway to the AI-Powered Universe
                      </h3>
                      
                      <p className="text-white/80 leading-relaxed">
                        GPTVerse stands at the frontier of innovation, bringing together cutting-edge AI 
                        technologies with blockchain to create a seamless multi-platform experience that 
                        transcends traditional boundaries.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="tech-icon-primary">
                            <BrainCircuit className="w-5 h-5 text-[#0ef34b]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Decentralized AI Infrastructure</h4>
                            <p className="text-white/70 text-sm">Building the backbone for next-generation AI applications without centralized control</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="tech-icon-primary">
                            <Database className="w-5 h-5 text-[#0ef34b]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Multichain Compatibility</h4>
                            <p className="text-white/70 text-sm">Seamless integration across multiple blockchain networks for maximum reach and utility</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="tech-icon-primary">
                            <PlugZap className="w-5 h-5 text-[#0ef34b]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">AI-Powered DApps Ecosystem</h4>
                            <p className="text-white/70 text-sm">A complete suite of applications leveraging artificial intelligence for unprecedented capabilities</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
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
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-0 data-[state=active]:animate-fade-in">
                    <motion.div
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="text-2xl font-bold text-[#00aeff] mb-6">
                        Cutting-Edge Features
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {features.map((feature, index) => (
                          <Card key={index} className="glass-card overflow-hidden border-white/10 bg-transparent hover:border-[#00aeff]/30 transition-all duration-300">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-4">
                                <div className="tech-icon-secondary">
                                  {feature.icon}
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold text-white">{feature.title}</h4>
                                  <p className="text-white/70 text-sm">{feature.description}</p>
                                </div>
                                
                                <div className="ml-auto">
                                  <ChevronRight className="w-5 h-5 text-[#00aeff]/50" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 glass-card border border-[#00aeff]/20 rounded-lg">
                        <h4 className="font-semibold text-[#00aeff] mb-2">Technology Stack</h4>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs border border-[#00aeff]/10 hover:border-[#00aeff]/30 transition-all duration-300">Neural Networks</div>
                          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs border border-[#00aeff]/10 hover:border-[#00aeff]/30 transition-all duration-300">Blockchain</div>
                          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs border border-[#00aeff]/10 hover:border-[#00aeff]/30 transition-all duration-300">Smart Contracts</div>
                          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs border border-[#00aeff]/10 hover:border-[#00aeff]/30 transition-all duration-300">NLP</div>
                          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs border border-[#00aeff]/10 hover:border-[#00aeff]/30 transition-all duration-300">Computer Vision</div>
                          <div className="p-2 bg-[#06101a]/60 rounded-lg text-xs border border-[#00aeff]/10 hover:border-[#00aeff]/30 transition-all duration-300">Multichain</div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="ecosystem" className="mt-0 data-[state=active]:animate-fade-in">
                    <motion.div
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="text-2xl font-bold text-[#d946ef] mb-6">
                        Explore The Ecosystem
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {ecosystemCards.map((card, index) => (
                          <div 
                            key={index} 
                            className="glass-card p-5 border border-white/10 rounded-xl relative overflow-hidden group hover:border-[#d946ef]/30 transition-all duration-300"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d946ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="flex flex-col items-center text-center gap-3 relative z-10">
                              <div className="tech-icon-tertiary">
                                {card.icon}
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
                                <p className="text-white/70 text-sm">{card.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="glass-card p-5 border border-[#d946ef]/20 rounded-xl">
                        <h4 className="font-semibold text-center text-[#d946ef] mb-3">Upcoming Releases</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#d946ef]"></div>
                            <span className="text-sm">GPTVerse NFT Marketplace - Q3 2025</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#d946ef]"></div>
                            <span className="text-sm">Cross-chain AI Bridge - Q4 2025</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#d946ef]"></div>
                            <span className="text-sm">AI-Enhanced DAO Governance - Q1 2026</span>
                          </li>
                        </ul>
                        
                        <div className="mt-4 flex justify-center">
                          <button className="px-4 py-2 bg-gradient-to-r from-[#d946ef] to-[#00aeff] rounded-lg text-black font-medium text-sm transition hover:brightness-110">
                            View Full Roadmap
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </div>
        
        {/* CTA Section - Enhanced with glassmorphism */}
        <motion.div 
          className="mt-16 glass-card p-8 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0ef34b]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#00aeff]/5 rounded-full blur-3xl"></div>
          
          {/* Tech line pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImhleCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoMzApIj4KICAgICAgPHBhdGggZD0iTTI1LDNMMzgsMTdMMzgsMzRMMjUsNDhMMTIsMzRMMTIsMTdMMjUsMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0LCAyNDMsIDc1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNoZXgpIi8+Cjwvc3ZnPg==')] opacity-10"></div>
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="mb-1 inline-block">
              <Sparkles className="w-6 h-6 text-[#0ef34b] inline-block mb-2" />
            </div>
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
