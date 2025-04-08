
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  PlugZap
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AboutGPTVerse = () => {
  const [activeTab, setActiveTab] = useState("vision");
  
  useEffect(() => {
    // Animation timing for glow effects
    const interval = setInterval(() => {
      const glowElements = document.querySelectorAll('.animate-glow-pulse');
      glowElements.forEach(el => {
        el.classList.toggle('glow-active');
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      icon: <Globe className="text-white h-7 w-7" />,
      title: "AI Hub & Multi-Platform Gateway",
      description: "Your central gateway to next-level Dapps and AI-powered experiences"
    },
    {
      icon: <Network className="text-white h-7 w-7" />,
      title: "Multichain Architecture",
      description: "First published on BNB Chain, now expanding across multiple blockchains"
    },
    {
      icon: <BrainCircuit className="text-white h-7 w-7" />,
      title: "Veteran Engineering Team",
      description: "Backed by developers with 20+ years of industry experience"
    },
    {
      icon: <Rocket className="text-white h-7 w-7" />,
      title: "MVP-Ready Products",
      description: "Launch-ready AI solutions delivering immediate value"
    },
    {
      icon: <Layers3 className="text-white h-7 w-7" />,
      title: "Robust Product Roadmap",
      description: "Strategic vision for continuous innovation and growth"
    },
    {
      icon: <BarChart4 className="text-white h-7 w-7" />,
      title: "Advanced Tokenomics",
      description: "Sustainable economic model designed for long-term value"
    }
  ];

  const ecosystemCards = [
    {
      icon: <Star className="h-12 w-12 text-white" />,
      title: "Design & NFTs",
      description: "Create stunning visual assets as NFTs using AI-powered design algorithms"
    },
    {
      icon: <Code className="h-12 w-12 text-white" />,
      title: "AI Education Hub",
      description: "Interactive learning experiences with courses tailored to your unique needs"
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-white" />,
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
      {/* Enhanced background with subtle glow effects */}
      <div className="absolute inset-0 z-0">
        {/* Robot image as background with improved scaling */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25">
          <motion.img 
            src="/lovable-uploads/15aafb16-40a1-4864-9b57-c1508ab7f71e.png" 
            alt="AI Robot" 
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.02, 1],
              filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Enhanced dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040812]/95 via-[#040812]/80 to-[#040812]/90"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-noise"></div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjxwYXRoIGQ9Ik0xMCAwaDF2NDBIMTB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PHBhdGggZD0iTTIwIDBoMXY0MEgyMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjxwYXRoIGQ9Ik0wIDB2MWg0MFYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjxwYXRoIGQ9Ik0wIDEwdjFoNDB2LTF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48cGF0aCBkPSJNMCAzMHYxaDQwdi0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-30" style={{animationDuration: '15s'}}></div>
        
        {/* Subtle glow elements */}
        <motion.div 
          className="absolute top-1/4 left-1/5 w-[400px] h-[400px] rounded-full bg-white/5 blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
            filter: ["blur(120px)", "blur(150px)", "blur(120px)"]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-white/3 blur-[150px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            filter: ["blur(150px)", "blur(180px)", "blur(150px)"]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-2/3 left-1/2 w-[300px] h-[300px] rounded-full bg-white/3 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            filter: ["blur(100px)", "blur(130px)", "blur(100px)"]
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header section with professional design */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 relative inline-block">
            <motion.span 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="absolute -top-2 -left-6 w-5 h-5 border-t-2 border-l-2 border-white/20"></span>
              <span className="text-white relative">
                ABOUT
                <motion.span 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white/60"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.span>
              </span>
            </motion.span>
            <span className="text-white mx-2">THE</span>
            <motion.span 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-white">GPTVERSE</span>
              <span className="absolute -bottom-2 -right-6 w-5 h-5 border-b-2 border-r-2 border-white/20"></span>
              <motion.span 
                className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-white/60"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              ></motion.span>
            </motion.span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative mt-6">
              <motion.div 
                className="absolute -top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ 
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              
              <motion.p 
                className="text-white/70 text-sm md:text-base font-mono uppercase tracking-wider"
                animate={{ 
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                EXPLORE THE FUTURE OF AI TECHNOLOGY
              </motion.p>
              
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ 
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main content with professional glassmorphism effects */}
        <motion.div 
          className="backdrop-blur-2xl bg-black/40 border border-white/10 rounded-2xl overflow-hidden p-6 md:p-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ 
            boxShadow: "0 0 40px rgba(255,255,255,0.1)",
            borderColor: "rgba(255,255,255,0.15)"
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Robot Visual */}
            <motion.div 
              className="lg:col-span-5 flex items-center justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative max-w-md w-full mx-auto">
                {/* Subtle backdrop glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/3 to-transparent rounded-3xl blur-2xl"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3], 
                    scale: [0.95, 1.05, 0.95],
                    filter: ["blur(20px)", "blur(30px)", "blur(20px)"]
                  }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
                
                {/* Main image with professional frame */}
                <motion.div 
                  className="relative backdrop-blur-xl bg-black/40 border border-white/10 p-8 rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {/* Subtle gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-40"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  ></motion.div>
                  
                  {/* Robot image with enhanced size */}
                  <motion.img 
                    src="/lovable-uploads/059db707-9bc8-433a-a146-097b5b44f53a.png" 
                    alt="AI Robot" 
                    className="w-full mx-auto relative z-10"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: [1, 1.02, 1],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Subtle animated data points */}
                  <motion.div 
                    className="absolute right-6 top-10 w-1.5 h-1.5 bg-white/60 rounded-full"
                    animate={{ 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute right-10 top-16 w-1.5 h-1.5 bg-white/60 rounded-full"
                    animate={{ 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.7 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute right-14 top-28 w-1.5 h-1.5 bg-white/60 rounded-full"
                    animate={{ 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2.1 }}
                  ></motion.div>
                  
                  {/* Subtle scan line effect */}
                  <motion.div 
                    className="absolute left-0 right-0 top-0 h-[1px] bg-white/20"
                    animate={{ 
                      top: ["0%", "100%", "0%"],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </motion.div>
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
                <TabsList className="mb-8 w-full bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg p-1 flex justify-between">
                  <TabsTrigger 
                    value="vision" 
                    className={`relative px-6 py-3 ${activeTab === "vision" ? "text-white" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="p-1.5 rounded-full bg-black/30 border border-white/10"
                        whileHover={{ scale: 1.1 }}
                        animate={activeTab === "vision" ? {
                          borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)"]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Lightbulb className={`w-5 h-5 ${activeTab === "vision" ? "text-white" : "text-white/60"}`} />
                      </motion.div>
                      <span>Our Vision</span>
                    </div>
                    {activeTab === "vision" && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20"
                      />
                    )}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="features" 
                    className={`relative px-6 py-3 ${activeTab === "features" ? "text-white" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="p-1.5 rounded-full bg-black/30 border border-white/10"
                        whileHover={{ scale: 1.1 }}
                        animate={activeTab === "features" ? {
                          borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)"]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Atom className={`w-5 h-5 ${activeTab === "features" ? "text-white" : "text-white/60"}`} />
                      </motion.div>
                      <span>Key Features</span>
                    </div>
                    {activeTab === "features" && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20"
                      />
                    )}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="ecosystem" 
                    className={`relative px-6 py-3 ${activeTab === "ecosystem" ? "text-white" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="p-1.5 rounded-full bg-black/30 border border-white/10"
                        whileHover={{ scale: 1.1 }}
                        animate={activeTab === "ecosystem" ? {
                          borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)"]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className={`w-5 h-5 ${activeTab === "ecosystem" ? "text-white" : "text-white/60"}`} />
                      </motion.div>
                      <span>Ecosystem</span>
                    </div>
                    {activeTab === "ecosystem" && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20"
                      />
                    )}
                  </TabsTrigger>
                </TabsList>
                
                <div className="h-[460px] overflow-y-auto pr-4 scrollbar-thin backdrop-blur-2xl bg-black/40 border border-white/10 rounded-xl p-6">
                  <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in">
                    <AnimatePresence mode="wait">
                      {activeTab === "vision" && (
                        <motion.div 
                          variants={tabContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="space-y-6"
                        >
                          <h3 className="text-2xl font-bold text-white">
                            Your Gateway to the AI-Powered Universe
                          </h3>
                          
                          <p className="text-white/80 leading-relaxed">
                            GPTVerse stands at the frontier of innovation, bringing together cutting-edge AI 
                            technologies with blockchain to create a seamless multi-platform experience that 
                            transcends traditional boundaries.
                          </p>
                          
                          <div className="space-y-4">
                            <motion.div 
                              className="flex items-start gap-3"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <motion.div 
                                className="p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-white/10"
                                whileHover={{ scale: 1.1 }}
                                animate={{ 
                                  borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.1)"]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                <BrainCircuit className="w-5 h-5 text-white" />
                              </motion.div>
                              <div>
                                <h4 className="font-semibold text-white">Decentralized AI Infrastructure</h4>
                                <p className="text-white/70 text-sm">Building the backbone for next-generation AI applications without centralized control</p>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-start gap-3"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <motion.div 
                                className="p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-white/10"
                                whileHover={{ scale: 1.1 }}
                                animate={{ 
                                  borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.1)"]
                                }}
                                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                              >
                                <Database className="w-5 h-5 text-white" />
                              </motion.div>
                              <div>
                                <h4 className="font-semibold text-white">Multichain Compatibility</h4>
                                <p className="text-white/70 text-sm">Seamless integration across multiple blockchain networks for maximum reach and utility</p>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-start gap-3"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <motion.div 
                                className="p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-white/10"
                                whileHover={{ scale: 1.1 }}
                                animate={{ 
                                  borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.1)"]
                                }}
                                transition={{ duration: 3, delay: 1, repeat: Infinity }}
                              >
                                <PlugZap className="w-5 h-5 text-white" />
                              </motion.div>
                              <div>
                                <h4 className="font-semibold text-white">AI-Powered DApps Ecosystem</h4>
                                <p className="text-white/70 text-sm">A complete suite of applications leveraging artificial intelligence for unprecedented capabilities</p>
                              </div>
                            </motion.div>
                          </div>
                          
                          <div className="pt-4">
                            <div className="flex flex-wrap gap-3 mt-4">
                              <motion.button 
                                className="px-4 py-2 bg-white/10 border border-white/20 hover:bg-white/15 rounded-lg text-white font-medium text-sm transition flex items-center gap-1.5"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                <Rocket className="h-4 w-4" />
                                <span>Join GPTVerse</span>
                              </motion.button>
                              
                              <motion.button 
                                className="px-4 py-2 bg-transparent border border-white/20 rounded-lg text-white font-medium text-sm transition hover:bg-white/5 flex items-center gap-1.5"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                <ExternalLink className="h-4 w-4" />
                                <span>Whitepaper</span>
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-0 data-[state=active]:animate-fade-in">
                    <AnimatePresence mode="wait">
                      {activeTab === "features" && (
                        <motion.div
                          variants={tabContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <h3 className="text-2xl font-bold text-white mb-6">
                            Cutting-Edge Features
                          </h3>
                          
                          <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                              <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <Card className="backdrop-blur-xl border-white/10 bg-black/20 hover:border-white/20 transition-all duration-300">
                                  <CardContent className="p-4">
                                    <div className="flex items-center gap-4">
                                      <motion.div 
                                        className="p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-white/10"
                                        whileHover={{ scale: 1.1 }}
                                        animate={{ 
                                          borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.1)"]
                                        }}
                                        transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                                      >
                                        {feature.icon}
                                      </motion.div>
                                      
                                      <div>
                                        <h4 className="font-semibold text-white">{feature.title}</h4>
                                        <p className="text-white/70 text-sm">{feature.description}</p>
                                      </div>
                                      
                                      <motion.div 
                                        className="ml-auto"
                                        whileHover={{ scale: 1.2, x: 2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                        <ChevronRight className="w-5 h-5 text-white/40" />
                                      </motion.div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            className="mt-6 p-4 backdrop-blur-xl border border-white/10 rounded-lg bg-black/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ 
                              borderColor: "rgba(255, 255, 255, 0.2)",
                              boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)"
                            }}
                          >
                            <h4 className="font-semibold text-center text-white mb-3">Technology Stack</h4>
                            <div className="grid grid-cols-3 gap-2 text-center">
                              {["Neural Networks", "Blockchain", "Smart Contracts", "NLP", "Computer Vision", "Multichain"].map((tech, index) => (
                                <motion.div 
                                  key={index}
                                  className="p-2 bg-black/60 rounded-lg text-xs border border-white/10 hover:border-white/20 transition-all duration-300"
                                  whileHover={{ 
                                    scale: 1.05, 
                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                  }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  {tech}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TabsContent>
                  
                  <TabsContent value="ecosystem" className="mt-0 data-[state=active]:animate-fade-in">
                    <AnimatePresence mode="wait">
                      {activeTab === "ecosystem" && (
                        <motion.div
                          variants={tabContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <h3 className="text-2xl font-bold text-white mb-6">
                            Explore The Ecosystem
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {ecosystemCards.map((card, index) => (
                              <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                              >
                                <motion.div 
                                  className="backdrop-blur-xl p-5 border border-white/10 bg-black/20 rounded-xl relative overflow-hidden group"
                                  whileHover={{ 
                                    scale: 1.02,
                                    borderColor: "rgba(255, 255, 255, 0.2)",
                                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)"
                                  }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    animate={{ 
                                      background: [
                                        "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
                                        "radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
                                        "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)"
                                      ]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity }}
                                  ></motion.div>
                                  
                                  <div className="flex flex-col items-center text-center gap-3 relative z-10">
                                    <motion.div 
                                      className="p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-white/10"
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                      animate={{ 
                                        borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.1)"]
                                      }}
                                      transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                                    >
                                      {card.icon}
                                    </motion.div>
                                    
                                    <div>
                                      <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
                                      <p className="text-white/70 text-sm">{card.description}</p>
                                    </div>
                                  </div>
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            className="backdrop-blur-xl p-5 border border-white/10 rounded-xl bg-black/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ 
                              borderColor: "rgba(255, 255, 255, 0.2)",
                              boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)"
                            }}
                          >
                            <h4 className="font-semibold text-center text-white mb-3">Upcoming Releases</h4>
                            <ul className="space-y-2">
                              {[
                                "GPTVerse NFT Marketplace - Q3 2025",
                                "Cross-chain AI Bridge - Q4 2025",
                                "AI-Enhanced DAO Governance - Q1 2026"
                              ].map((item, index) => (
                                <motion.li 
                                  key={index}
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                                  whileHover={{ x: 3 }}
                                >
                                  <motion.div 
                                    className="w-2 h-2 rounded-full bg-white/60"
                                    animate={{ 
                                      scale: [1, 1.5, 1],
                                      opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                  ></motion.div>
                                  <span className="text-sm">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                            
                            <div className="mt-4 flex justify-center">
                              <motion.button 
                                className="px-4 py-2 bg-white/10 border border-white/20 hover:bg-white/15 rounded-lg text-white font-medium text-sm transition"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                View Full Roadmap
                              </motion.button>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;
